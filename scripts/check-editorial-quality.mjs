import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

const ignoredDirs = new Set([
  'node_modules',
  '.next',
  '.git',
  'out',
  'dist',
  'coverage',
  'scripts',
]);

const ignoredFiles = new Set([
  path.normalize('src/lib/public-copy.ts'),
]);

const textExtensions = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.md',
  '.mdx',
  '.json',
]);

const genericCopyPatterns = [
  {
    pattern: /Useful for visitor planning in this guide/gi,
    message: 'Generic visitor-planning copy found',
  },
  {
    pattern: /Use the official or map links for live details/gi,
    message: 'Generic official-or-map copy found',
  },
  {
    pattern: /Hotel accommodation option for/gi,
    message: 'Generic hotel accommodation copy found',
  },
  {
    pattern: /Restaurant option for/gi,
    message: 'Generic restaurant copy found',
  },
  {
    pattern: /Cafe option for/gi,
    message: 'Generic cafe copy found',
  },
  {
    pattern: /Pub option for/gi,
    message: 'Generic pub copy found',
  },
  {
    pattern: /Food and drink option for/gi,
    message: 'Generic food and drink copy found',
  },
  {
    pattern: /Things to do option for/gi,
    message: 'Generic things-to-do copy found',
  },
  {
    pattern: /Check current facilities/gi,
    message: 'Generic current-facilities copy found',
  },
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath, files);
      continue;
    }

    const relative = path.relative(ROOT, fullPath);
    const ext = path.extname(entry.name);

    if (textExtensions.has(ext) && !ignoredFiles.has(path.normalize(relative))) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = walk(ROOT);
const matches = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const relative = path.relative(ROOT, file);

  for (const check of genericCopyPatterns) {
    const found = content.match(check.pattern);

    if (found?.length) {
      matches.push({
        file: relative,
        message: check.message,
        count: found.length,
      });
    }
  }
}

if (matches.length) {
  console.error('\nEditorial quality issues found:\n');

  for (const match of matches) {
    console.error(`- ${match.file}: ${match.message} (${match.count})`);
  }

  console.error(
    '\nReplace generic placeholder copy with specific, useful, source-safe editorial copy.',
  );

  process.exit(1);
}

console.log('Editorial quality check passed.');
