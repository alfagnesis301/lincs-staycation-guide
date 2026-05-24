import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const WRITE_JSON = process.argv.includes('--json');
const MAX_EXAMPLES = 18;

function clean(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function hasValue(value) {
  return clean(value).length > 0;
}

function hasOfficialSource(sourceUrls = []) {
  return sourceUrls.some((source) => {
    const type = String(source.type ?? '').toLowerCase();
    const label = String(source.label ?? '').toLowerCase();
    return type.includes('official') || label.includes('official');
  });
}

function hasMapOnlySources(sourceUrls = []) {
  if (!sourceUrls.length) return false;
  if (hasOfficialSource(sourceUrls)) return false;

  return sourceUrls.every((source) => {
    const type = String(source.type ?? '').toLowerCase();
    const label = String(source.label ?? '').toLowerCase();
    const url = String(source.url ?? '').toLowerCase();

    return (
      type.includes('map') ||
      type.includes('google') ||
      label.includes('map') ||
      label.includes('google') ||
      url.includes('google.com/maps') ||
      url.includes('maps.app.goo.gl')
    );
  });
}

function classifyListing(item) {
  const sourceUrls = Array.isArray(item.sourceUrls) ? item.sourceUrls : [];
  const sourceLabel = clean(item.sourceLabel).toLowerCase();
  const sourceUrl = clean(item.sourceUrl);
  const sourceUrlIsMap =
    /google\.[a-z.]+\/maps/i.test(sourceUrl) || /maps\.app\.goo\.gl/i.test(sourceUrl);

  const hasOfficialWebsite = hasValue(item.officialWebsiteUrl) || hasValue(item.officialUrl);
  const hasBookingUrl = hasValue(item.bookingUrl);
  const hasAffiliateUrl = hasValue(item.affiliateUrl);
  const officialSource =
    hasOfficialSource(sourceUrls) ||
    sourceLabel.includes('official') ||
    (hasValue(sourceUrl) && !sourceUrlIsMap && /official/i.test(sourceLabel));
  const mapOnly =
    hasMapOnlySources(sourceUrls) ||
    (hasValue(sourceUrl) && sourceUrlIsMap && !hasOfficialWebsite && !officialSource);
  const hasSourceRoute =
    sourceUrls.length > 0 ||
    hasValue(sourceUrl) ||
    hasOfficialWebsite ||
    hasBookingUrl ||
    hasAffiliateUrl ||
    hasValue(item.googleMapsUrl);

  const issues = [];

  if (item.needsVerification === true && !hasOfficialWebsite && !officialSource) {
    issues.push('needs verification and has no official source');
  }

  if (item.bookingStatus === 'booking-confirmed' && !hasBookingUrl) {
    issues.push('booking-confirmed without bookingUrl');
  }

  if (hasAffiliateUrl && !hasBookingUrl && !hasOfficialWebsite && !officialSource) {
    issues.push('affiliateUrl without bookingUrl or official source');
  }

  if (mapOnly) {
    issues.push('map-only sources');
  }

  if (!hasSourceRoute) {
    issues.push('no public source route');
  }

  if ((hasOfficialWebsite || officialSource) && item.needsVerification === true) {
    issues.push('official source present but still marked needsVerification');
  }

  const highPriorityIssues = new Set([
    'needs verification and has no official source',
    'booking-confirmed without bookingUrl',
    'affiliateUrl without bookingUrl or official source',
    'map-only sources',
    'no public source route',
  ]);

  let priority = 'low';
  if (issues.some((issue) => highPriorityIssues.has(issue))) {
    priority = 'high';
  } else if (issues.length > 0) {
    priority = 'medium';
  }

  return {
    name: item.name,
    town: item.town,
    section: item.section,
    type: item.type,
    sourceFile: item.sourceFile,
    bookingStatus: item.bookingStatus,
    needsVerification: item.needsVerification,
    hasOfficialWebsite,
    hasBookingUrl,
    hasAffiliateUrl,
    sourceCount: sourceUrls.length + (hasValue(sourceUrl) ? 1 : 0),
    hasOfficialSource: officialSource,
    hasMapOnlySources: mapOnly,
    issues,
    priority,
  };
}

async function readText(relativePath) {
  return readFile(path.join(ROOT, relativePath), 'utf8');
}

function extractExportedJsonArray(source, exportName) {
  const marker = `export const ${exportName} =`;
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) return [];

  const arrayStart = source.indexOf('[', markerIndex);
  const satisfiesIndex = source.indexOf('satisfies', arrayStart);
  const arrayEnd = satisfiesIndex === -1 ? source.lastIndexOf(']') + 1 : source.lastIndexOf(']', satisfiesIndex) + 1;
  if (arrayStart === -1 || arrayEnd <= arrayStart) return [];

  return JSON.parse(source.slice(arrayStart, arrayEnd));
}

function normalizeLocationGuideListings(guides, sourceFile) {
  return guides.flatMap((guide) => {
    const town = guide.name;
    return [
      ...(guide.placesToStay ?? []).map((item) => ({ ...item, town: item.town ?? town, section: 'placesToStay', sourceFile })),
      ...(guide.thingsToDo ?? []).map((item) => ({ ...item, town: item.town ?? town, section: 'thingsToDo', type: item.category, sourceFile })),
      ...(guide.foodDrink ?? []).map((item) => ({ ...item, town: item.town ?? town, section: 'foodAndDrink', sourceFile })),
    ];
  });
}

function extractString(block, names) {
  for (const name of names) {
    const match = block.match(new RegExp(`${name}\\s*:\\s*(['"\`])([\\s\\S]*?)\\1`));
    if (match) return match[2].replace(/\s+/g, ' ').trim();
  }
  return undefined;
}

function extractBoolean(block, name) {
  const match = block.match(new RegExp(`${name}\\s*:\\s*(true|false)`));
  return match ? match[1] === 'true' : undefined;
}

function extractObjectBlocks(source) {
  const blocks = [];
  let depth = 0;
  let start = -1;
  let quote = null;
  let escaping = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];

    if (quote) {
      if (escaping) {
        escaping = false;
      } else if (char === '\\') {
        escaping = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }

    if (char === '{') {
      if (depth === 0) start = index;
      depth += 1;
    } else if (char === '}') {
      depth -= 1;
      if (depth === 0 && start !== -1) {
        blocks.push(source.slice(start, index + 1));
        start = -1;
      }
    }
  }

  return blocks;
}

function normalizeTextualListings(source, sourceFile, sectionFallback) {
  return extractObjectBlocks(source)
    .map((block) => {
      const name = extractString(block, ['name']);
      if (!name || !/id\s*:|slug\s*:|sourceLabel\s*:|sourceUrl\s*:|bookingUrl\s*:|affiliateUrl\s*:|officialUrl\s*:|officialWebsiteUrl\s*:/.test(block)) {
        return null;
      }

      const sourceLabel = extractString(block, ['sourceLabel']);
      const sourceUrl = extractString(block, ['sourceUrl']);
      const officialWebsiteUrl = extractString(block, ['officialWebsiteUrl']);
      const officialUrl = extractString(block, ['officialUrl']);
      const bookingUrl = extractString(block, ['bookingUrl']);
      const affiliateUrl = extractString(block, ['affiliateUrl']);
      const googleMapsUrl = extractString(block, ['googleMapsUrl']);
      const town = extractString(block, ['town', 'area']);
      const bookingStatus = extractString(block, ['bookingStatus']);
      const type = extractString(block, ['type', 'category']);
      const needsVerification = extractBoolean(block, 'needsVerification');

      return {
        name,
        town,
        section: sectionFallback,
        type,
        sourceFile,
        sourceLabel,
        sourceUrl,
        officialWebsiteUrl,
        officialUrl,
        bookingUrl,
        affiliateUrl,
        googleMapsUrl,
        bookingStatus,
        needsVerification,
        sourceUrls: sourceLabel || sourceUrl ? [{ label: sourceLabel, url: sourceUrl, type: sourceLabel }] : [],
      };
    })
    .filter(Boolean);
}

const listings = [];

try {
  const locationGuidesSource = await readText('src/data/locationGuides.ts');
  listings.push(...normalizeLocationGuideListings(extractExportedJsonArray(locationGuidesSource, 'locationGuides'), 'src/data/locationGuides.ts'));
} catch (error) {
  console.warn(`Could not parse locationGuides.ts: ${error.message}`);
}

for (const [relativePath, section] of [
  ['src/data/lincolnGuide.ts', 'lincolnGuide'],
  ['src/data/caravanParkGuides.ts', 'caravanParks'],
  ['src/data/bookableCaravanParks.ts', 'bookableCaravanParks'],
  ['src/data/townGuideProfiles.ts', 'townGuideProfiles'],
]) {
  try {
    listings.push(...normalizeTextualListings(await readText(relativePath), relativePath, section));
  } catch (error) {
    console.warn(`Could not scan ${relativePath}: ${error.message}`);
  }
}

const report = listings.map(classifyListing);
const grouped = {
  high: report.filter((item) => item.priority === 'high'),
  medium: report.filter((item) => item.priority === 'medium'),
  low: report.filter((item) => item.priority === 'low'),
};

console.log('\nListing source audit');
console.log('--------------------');
console.log(`Listings scanned: ${report.length}`);
console.log(`High priority: ${grouped.high.length}`);
console.log(`Medium priority: ${grouped.medium.length}`);
console.log(`Low priority: ${grouped.low.length}`);

for (const [priority, items] of Object.entries(grouped)) {
  if (items.length === 0) continue;
  console.log(`\n${priority[0].toUpperCase()}${priority.slice(1)} priority examples:`);
  for (const item of items.slice(0, MAX_EXAMPLES)) {
    console.log(`- ${item.name}${item.town ? ` (${item.town})` : ''} - ${item.section} - ${item.issues.join('; ') || 'no source issues'}`);
  }
  if (items.length > MAX_EXAMPLES) {
    console.log(`  ...${items.length - MAX_EXAMPLES} more`);
  }
}

if (WRITE_JSON) {
  const reportDir = path.join(ROOT, 'reports');
  await mkdir(reportDir, { recursive: true });
  await writeFile(
    path.join(reportDir, 'listing-source-audit.json'),
    JSON.stringify({ generatedAt: new Date().toISOString(), summary: Object.fromEntries(Object.entries(grouped).map(([key, value]) => [key, value.length])), listings: report }, null, 2),
    'utf8',
  );
  console.log('\nWrote reports/listing-source-audit.json');
}
