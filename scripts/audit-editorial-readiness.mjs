import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const STRICT = process.argv.includes('--strict');
const TARGET_DIRS = ['src/app', 'src/components', 'src/data', 'content'].map((dir) =>
  path.join(ROOT, dir),
);
const EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.md', '.mdx', '.json']);
const MAX_EXAMPLES = 30;

const GENERIC_PATTERNS = [
  { pattern: /Useful for visitor planning in this guide/i, reason: 'Generic fallback copy' },
  { pattern: /Use the official or map links for live details/i, reason: 'Generic link instruction' },
  { pattern: /Hotel accommodation option for/i, reason: 'Generic accommodation summary' },
  { pattern: /Restaurant option for/i, reason: 'Generic food summary' },
  { pattern: /Cafe option for/i, reason: 'Generic food summary' },
  { pattern: /Pub option for/i, reason: 'Generic food summary' },
  { pattern: /Food and drink option for/i, reason: 'Generic food summary' },
  { pattern: /Things to do option for/i, reason: 'Generic attraction summary' },
  { pattern: /Check current facilities/i, reason: 'Repeated verification phrase' },
  { pattern: /check current facilities/i, reason: 'Repeated verification phrase' },
  { pattern: /Details being verified/i, reason: 'Placeholder verification copy' },
  { pattern: /being verified/i, reason: 'Placeholder verification copy' },
  { pattern: /visitor planning/i, reason: 'Repeated planning phrase' },
  { pattern: /official or map/i, reason: 'Generic source wording' },
  { pattern: /map links/i, reason: 'Generic source wording' },
  { pattern: /accommodation option/i, reason: 'Repeated accommodation wording' },
];

const UNSUPPORTED_CLAIM_PATTERNS = [
  { pattern: /\bbest\b/i, reason: 'Potential unsupported best claim' },
  { pattern: /\btop[-\s]?rated\b/i, reason: 'Potential unsupported rating claim' },
  { pattern: /\bcheapest\b/i, reason: 'Potential unsupported price claim' },
  { pattern: /\bnumber one\b/i, reason: 'Potential unsupported ranking claim' },
  { pattern: /\baward[-\s]?winning\b/i, reason: 'Potential unsupported award claim' },
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
    } else if (EXTENSIONS.has(path.extname(entry.name))) {
      yield fullPath;
    }
  }
}

function shouldSkipLine(line) {
  return /^\s*(\/\/|\/\*|\*)/.test(line);
}

function shouldSkipClaimRisk(line) {
  return (
    /bestFor|Best for|Good for|best fit|best-rate|bestRate|bestSeasons/i.test(line) ||
    /\bslug\s*:|href=|href:|className|sourceUrl|internalNote|internalMonetization|keywords:/i.test(line) ||
    /\bdo our best\b/i.test(line)
  );
}

function pushFinding(findings, finding) {
  findings.push({
    ...finding,
    text: finding.text.replace(/\s+/g, ' ').trim().slice(0, 180),
  });
}

const findings = [];
const repeatedValues = new Map();

for (const dir of TARGET_DIRS) {
  for await (const filePath of walk(dir)) {
    const source = await readFile(filePath, 'utf8');
    const rel = path.relative(ROOT, filePath);
    const lines = source.split(/\r?\n/);

    lines.forEach((line, index) => {
      if (shouldSkipLine(line)) return;

      for (const { pattern, reason } of GENERIC_PATTERNS) {
        if (pattern.test(line)) {
          pushFinding(findings, {
            type: 'generic-copy',
            filePath: rel,
            line: index + 1,
            reason,
            text: line,
          });
        }
      }

      for (const { pattern, reason } of UNSUPPORTED_CLAIM_PATTERNS) {
        if (pattern.test(line) && !shouldSkipClaimRisk(line)) {
          pushFinding(findings, {
            type: 'claim-risk',
            filePath: rel,
            line: index + 1,
            reason,
            text: line,
          });
        }
      }

      const fieldMatch = line.match(/["']?(bestFor|shortDescription|description|contentAngle)["']?\s*:\s*["'`]([^"'`]{35,})["'`]/);
      if (fieldMatch) {
        const value = fieldMatch[2].replace(/\s+/g, ' ').trim();
        const current = repeatedValues.get(value) ?? [];
        current.push({ filePath: rel, line: index + 1 });
        repeatedValues.set(value, current);
      }
    });
  }
}

for (const [value, locations] of repeatedValues.entries()) {
  if (locations.length < 3) continue;
  for (const location of locations.slice(0, 5)) {
    pushFinding(findings, {
      type: 'repeated-copy',
      filePath: location.filePath,
      line: location.line,
      reason: `Repeated ${locations.length} times`,
      text: value,
    });
  }
}

const byType = findings.reduce((acc, finding) => {
  acc[finding.type] = (acc[finding.type] ?? 0) + 1;
  return acc;
}, {});

console.log('\nEditorial readiness audit');
console.log('-------------------------');
console.log(`Generic copy findings: ${byType['generic-copy'] ?? 0}`);
console.log(`Repeated copy findings: ${byType['repeated-copy'] ?? 0}`);
console.log(`Unsupported claim risks: ${byType['claim-risk'] ?? 0}`);

if (findings.length > 0) {
  console.log('\nExamples for Phase 2B:');
  for (const finding of findings.slice(0, MAX_EXAMPLES)) {
    console.log(`- ${finding.type}: ${finding.filePath}:${finding.line} - ${finding.reason}`);
    console.log(`  ${finding.text}`);
  }
  if (findings.length > MAX_EXAMPLES) {
    console.log(`\n...${findings.length - MAX_EXAMPLES} more findings hidden. Re-run with targeted rg searches while editing.`);
  }
}

console.log(
  '\nThis audit is advisory by default so Phase 2A can land before locality-level rewrites. Use --strict when Phase 2B is ready to block generic copy.',
);

if (STRICT && findings.length > 0) {
  process.exit(1);
}
