import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, 'src/app');
const SOURCE_DIRS = ['src/app', 'src/components', 'src/data'].map((dir) => path.join(ROOT, dir));
const CHECK_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx']);
const THIN_NOINDEX_ROUTES = ['/events', '/dog-friendly', '/family-days-out', '/search'];
const ROBOTS_DISALLOW_ROUTES = ['/api/', '/admin/', '/preview/', '/drafts/', '/saved'];
const BLOCKED_DOMAINS = ['https://lincsstaycationguide.co.uk', 'http://lincsstaycationguide.co.uk'];

const failures = [];

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function* walk(dir) {
  if (!(await exists(dir))) return;
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.next', 'coverage'].includes(entry.name)) continue;
      yield* walk(fullPath);
    } else if (CHECK_EXTENSIONS.has(path.extname(entry.name))) {
      yield fullPath;
    }
  }
}

function routeFromPage(filePath) {
  const relative = path.relative(APP_DIR, path.dirname(filePath));
  if (!relative) return '/';
  return `/${relative.replaceAll(path.sep, '/')}`
    .replace(/\/page$/, '')
    .replace(/\/route$/, '');
}

async function routeExists(route) {
  const cleanRoute = route.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';
  if (cleanRoute.startsWith('/api/')) return true;

  const segments = cleanRoute === '/' ? [] : cleanRoute.slice(1).split('/');
  let currentDir = APP_DIR;

  for (const segment of segments) {
    const entries = await readdir(currentDir, { withFileTypes: true });
    const match = entries.find(
      (entry) =>
        entry.isDirectory() &&
        (entry.name === segment || /^\[.+\]$/.test(entry.name)),
    );
    if (!match) return false;
    currentDir = path.join(currentDir, match.name);
  }

  return (await exists(path.join(currentDir, 'page.tsx'))) || (await exists(path.join(currentDir, 'route.ts')));
}

function extractInternalHrefs(source) {
  const hrefs = new Set();
  const patterns = [
    /href=["'](\/[^"'#]*)["']/g,
    /href:\s*["'](\/[^"']*)["']/g,
    /buttonHref=["'](\/[^"'#]*)["']/g,
    /viewAllHref:\s*["'](\/[^"']*)["']/g,
  ];

  for (const pattern of patterns) {
    for (const match of source.matchAll(pattern)) {
      const href = match[1];
      if (!href || href.startsWith('//') || href.includes('${')) continue;
      hrefs.add(href.split('?')[0].split('#')[0].replace(/\/$/, '') || '/');
    }
  }
  return hrefs;
}

const pageFiles = [];
for await (const filePath of walk(APP_DIR)) {
  if (path.basename(filePath) === 'page.tsx') pageFiles.push(filePath);
}

const existingRoutes = new Set(pageFiles.map(routeFromPage));
for (const route of THIN_NOINDEX_ROUTES) {
  const pagePath = path.join(APP_DIR, route.slice(1), 'page.tsx');
  const source = await readFile(pagePath, 'utf8');
  if (!/robots:\s*\{\s*index:\s*false/.test(source)) {
    failures.push(`${route} must keep robots.index=false while it is thin or editorial-only.`);
  }
  if (!/googleBot:\s*\{\s*index:\s*false,\s*follow:\s*true/s.test(source)) {
    failures.push(`${route} must keep googleBot noindex/follow while it is thin or editorial-only.`);
  }
}

const sitemapSource = await readFile(path.join(APP_DIR, 'sitemap.ts'), 'utf8');
for (const route of [...THIN_NOINDEX_ROUTES, '/saved']) {
  if (sitemapSource.includes(`'${route}'`) || sitemapSource.includes(`"${route}"`)) {
    failures.push(`${route} is noindex/redirected and must not be listed in sitemap.ts.`);
  }
}

const robotsSource = await readFile(path.join(APP_DIR, 'robots.ts'), 'utf8');
for (const route of ROBOTS_DISALLOW_ROUTES) {
  if (!robotsSource.includes(`'${route}'`) && !robotsSource.includes(`"${route}"`)) {
    failures.push(`robots.ts must disallow ${route}.`);
  }
}
if (!robotsSource.includes('sitemap: `${baseUrl}/sitemap.xml`')) {
  failures.push('robots.ts must advertise the canonical sitemap.xml URL.');
}

for (const dir of SOURCE_DIRS) {
  for await (const filePath of walk(dir)) {
    const source = await readFile(filePath, 'utf8');
    const relative = path.relative(ROOT, filePath);

    for (const domain of BLOCKED_DOMAINS) {
      if (source.includes(domain)) {
        failures.push(`${relative} contains old or incorrect domain ${domain}.`);
      }
    }

    for (const href of extractInternalHrefs(source)) {
      if (href === '/saved') {
        failures.push(`${relative} links to /saved, which is redirected because saved guides are not implemented.`);
        continue;
      }
      if (!existingRoutes.has(href) && !(await routeExists(href))) {
        failures.push(`${relative} links to missing internal route ${href}.`);
      }
    }
  }
}

if (failures.length > 0) {
  console.error('\nStatic route audit failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  console.error('');
  process.exit(1);
}

console.log('Static route audit passed. Internal links, noindex sitemap exclusions and domains look valid.');
