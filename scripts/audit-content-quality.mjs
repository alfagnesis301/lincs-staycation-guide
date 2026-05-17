import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const TARGET_DIRS = ['src/app', 'src/components', 'src/data', 'content'].map((dir) =>
  path.join(ROOT, dir),
);
const EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.md', '.mdx', '.json']);
const IGNORED_FILES = new Set([
  path.join(ROOT, 'src/app/affiliate-disclosure/page.tsx'),
  path.join(ROOT, 'src/components/caravan-parks/AffiliateDisclosureSmall.tsx'),
]);

const BLOCKED_PATTERNS = [
  { pattern: /\baccommodation candidate\b/i, reason: 'Internal accommodation wording' },
  { pattern: /\bfood and drink candidate\b/i, reason: 'Internal food listing wording' },
  { pattern: /\bcandidate venue\b/i, reason: 'Internal venue wording' },
  { pattern: /\bcandidate\b/i, reason: 'Internal editorial wording' },
  { pattern: /\bbefore recommending\b/i, reason: 'Internal reviewer wording' },
  { pattern: /\bsourced from public directories\b/i, reason: 'Internal sourcing wording' },
  { pattern: /\bneeds[\s-]+verification\b/i, reason: 'Internal verification flag' },
  { pattern: /\bneeds[\s-]+review\b/i, reason: 'Internal review flag' },
  { pattern: /\bmoneti[sz]ation\s*priority\b/i, reason: 'Internal commercial note' },
  { pattern: /\baffiliate\s*route\b/i, reason: 'Internal affiliate note' },
  { pattern: /\bCJ\b/, reason: 'Internal affiliate network mention' },
];

async function pathExists(filePath) {
  try {
    await readdir(filePath);
    return true;
  } catch {
    return false;
  }
}

async function* walk(dir) {
  if (!(await pathExists(dir))) return;
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.next', 'dist', 'out', 'coverage'].includes(entry.name)) continue;
      yield* walk(fullPath);
    } else if (EXTENSIONS.has(path.extname(entry.name)) && !IGNORED_FILES.has(fullPath)) {
      yield fullPath;
    }
  }
}

function shouldIgnoreLine(line) {
  return (
    /^\s*(\/\/|\/\*|\*)/.test(line) ||
    /\binternal[A-Z]/.test(line) ||
    /\binternal(Monetization|Booking|Note)\b/.test(line) ||
    /\bneedsVerification\b/.test(line) ||
    /\bSourceStatus\b/.test(line) ||
    /\bmonetisationType\b/.test(line)
  );
}

const failures = [];

for (const dir of TARGET_DIRS) {
  for await (const filePath of walk(dir)) {
    const source = await readFile(filePath, 'utf8');
    const lines = source.split(/\r?\n/);
    lines.forEach((line, index) => {
      if (shouldIgnoreLine(line)) return;
      for (const { pattern, reason } of BLOCKED_PATTERNS) {
        if (pattern.test(line)) {
          failures.push({
            filePath: path.relative(ROOT, filePath),
            line: index + 1,
            reason,
            text: line.trim().slice(0, 180),
          });
        }
      }
    });
  }
}

if (failures.length > 0) {
  console.error('\nContent quality audit failed. Remove internal public-facing wording:\n');
  for (const failure of failures) {
    console.error(`- ${failure.filePath}:${failure.line} - ${failure.reason}`);
    console.error(`  ${failure.text}`);
  }
  console.error('\nReplace internal wording with visitor-safe public copy.\n');
  process.exit(1);
}

console.log('Content quality audit passed. No blocked internal wording found.');
