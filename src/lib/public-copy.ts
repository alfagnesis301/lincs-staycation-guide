export type ListingKind = 'stay' | 'food' | 'attraction' | 'park' | 'generic';

export type PublicListingInput = {
  name: string;
  town?: string;
  type?: string;
  bestFor?: string;
  description?: string;
  areaNote?: string;
  tags?: string[];
  officialWebsiteUrl?: string;
  bookingUrl?: string;
  affiliateUrl?: string;
  sourceUrls?: PublicSourceUrl[];
};

export type PublicSourceUrl = {
  type?: string;
  label?: string;
  url?: string;
};

export const INTERNAL_COPY_PATTERNS: RegExp[] = [
  /\baccommodation candidate\b/i,
  /\bfood and drink candidate\b/i,
  /\bcandidate venue\b/i,
  /\bcandidate\b/i,
  /\bbefore recommending\b/i,
  /\bsourced from public directories\b/i,
  /\bneeds[\s-]+verification\b/i,
  /\bneeds[\s-]+review\b/i,
  /\binternal\b/i,
  /\bmoneti[sz]ation\s*priority\b/i,
  /\baffiliate\s*route\b/i,
  /\bCJ\b/,
];

export const GENERIC_DIRECTORY_COPY_PATTERNS = [
  'useful for visitor planning',
  'use the official or map links',
  'hotel accommodation option for',
  'restaurant option for',
  'cafe option for',
  'pub option for',
  'food and drink option for',
  'things to do option for',
  'check current facilities',
  'details being verified',
  'being verified',
  'accommodation option',
  'visitor planning',
  'map links for live details',
  'official or map links',
];

const INTERNAL_REPLACEMENTS: Array<[RegExp, string]> = [
  [/\s*accommodation candidate\s*/gi, ' accommodation option '],
  [/\s*food and drink candidate\s*/gi, ' food and drink option '],
  [/\s*candidate venue\s*/gi, ' venue '],
  [/\s*candidate\s*/gi, ' option '],
  [/\s*before recommending\s*/gi, ' before travelling '],
  [/\s*sourced from public directories\s*/gi, ' included as a practical planning option '],
  [/\s*needs[\s-]+verification\s*/gi, ' check details directly '],
  [/\s*needs[\s-]+review\s*/gi, ' check details directly '],
  [/\s*verify current reviews?,?\s*/gi, ' check current details directly '],
  [/\s*before publication\s*/gi, ' before travelling '],
];

const GENERIC_REPLACEMENTS: Array<[RegExp, string]> = [
  [/\bDetails being verified\b/gi, 'Check details directly before planning'],
  [/\bUse the official or map links for live details\b/gi, 'Check official sources before planning'],
  [/\bUseful for visitor planning in this guide\b/gi, 'Included as a practical planning option'],
  [/\bCheck current facilities\b/gi, 'Check current details'],
];

const PUBLIC_VERIFICATION_NOTE_PATTERN =
  /\b(check|confirm|verify)\b[^.]{0,120}\b(current|direct|official|opening|ticket|availability|facilit|price|booking|travelling|visiting|details)\b/i;

export function containsInternalCopy(value: string): boolean {
  return INTERNAL_COPY_PATTERNS.some((pattern) => pattern.test(value));
}

export function hasGenericDirectoryCopy(value?: string | null): boolean {
  if (!value) return false;
  const text = value.toLowerCase();
  return GENERIC_DIRECTORY_COPY_PATTERNS.some((pattern) => text.includes(pattern));
}

export function containsGenericEditorialCopy(value?: string | null): boolean {
  return hasGenericDirectoryCopy(value);
}

function hasPublicVerificationNote(value: string): boolean {
  return PUBLIC_VERIFICATION_NOTE_PATTERN.test(value);
}

export function cleanPublicCopy(value?: string): string {
  if (!value) return '';

  let cleaned = value.replace(/\s+/g, ' ').trim();
  for (const [pattern, replacement] of INTERNAL_REPLACEMENTS) {
    cleaned = cleaned.replace(pattern, replacement);
  }
  for (const [pattern, replacement] of GENERIC_REPLACEMENTS) {
    cleaned = cleaned.replace(pattern, replacement);
  }

  return cleaned
    .replace(/\s+([,.])/g, '$1')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export function softenSuitabilityCopy(value?: string): string {
  return cleanPublicCopy(value)
    .replace(/^Best for\b/i, 'Good for')
    .replace(/\bBest for:/gi, 'Good for:')
    .replace(/\bbest fit\b/gi, 'right fit')
    .replace(/"Best for"/gi, '"Good for"');
}

export function softenUnverifiedClaim(value?: string | null): string {
  if (!value) return '';

  return value
    .replace(/\bbest\b/gi, 'useful')
    .replace(/\btop-rated\b/gi, 'well-known')
    .replace(/\baward-winning\b/gi, 'established')
    .replace(/\brecommended\b/gi, 'worth comparing')
    .replace(/\bperfect for\b/gi, 'may suit')
    .replace(/\bideal for\b/gi, 'may suit')
    .replace(/\bmust-visit\b/gi, 'worth considering')
    .replace(/\bunmissable\b/gi, 'worth considering');
}

export function hasUsableDescription(value?: string | null): boolean {
  if (!value) return false;

  const trimmed = value.trim();

  if (trimmed.length < 80) return false;
  if (hasGenericDirectoryCopy(trimmed)) return false;

  return true;
}

export function publicVerificationNote(kind: ListingKind = 'generic'): string {
  switch (kind) {
    case 'stay':
      return 'Check current availability, facilities, parking, accessibility details and prices directly before booking.';
    case 'food':
      return 'Check current opening hours, menus, booking requirements and dietary information directly before visiting.';
    case 'attraction':
      return 'Check current opening times, ticketing, accessibility details and seasonal changes directly before travelling.';
    case 'park':
      return 'Check current touring, lodge, dog policy, facilities and seasonal availability directly with the park.';
    default:
      return 'Check current details directly before travelling.';
  }
}

export function buildVerificationNote({
  hasOfficialSource: hasOfficial,
  hasBookingSource,
  needsVerification,
  kind = 'generic',
}: {
  hasOfficialSource?: boolean;
  hasBookingSource?: boolean;
  needsVerification?: boolean;
  kind?: ListingKind;
}): string {
  if (needsVerification) {
    return publicVerificationNote(kind);
  }

  if (hasOfficial || hasBookingSource) {
    return 'Check the latest facilities, availability, prices, opening times and policies directly before travelling or booking.';
  }

  return 'Check live details directly before travelling or booking.';
}

export function publicVerificationLabel(kind: ListingKind = 'generic'): string {
  switch (kind) {
    case 'stay':
      return 'Accommodation details to verify';
    case 'food':
      return 'Food and drink details to verify';
    case 'attraction':
      return 'Visitor details to verify';
    case 'park':
      return 'Park details to verify';
    default:
      return 'Details to verify';
  }
}

export function needsPublicVerificationNotice(value?: string): boolean {
  if (!value) return true;
  const cleaned = cleanPublicCopy(value);
  return !hasPublicVerificationNote(cleaned) || containsGenericEditorialCopy(value);
}

export function hasOfficialSource(sourceUrls?: PublicSourceUrl[] | null): boolean {
  if (!sourceUrls?.length) return false;

  return sourceUrls.some((source) => {
    const type = source.type?.toLowerCase() ?? '';
    const label = source.label?.toLowerCase() ?? '';
    return type.includes('official') || label.includes('official');
  });
}

export function hasMapOnlySources(sourceUrls?: PublicSourceUrl[] | null): boolean {
  if (!sourceUrls?.length) return false;

  if (hasOfficialSource(sourceUrls)) return false;

  return sourceUrls.every((source) => {
    const type = source.type?.toLowerCase() ?? '';
    const label = source.label?.toLowerCase() ?? '';
    const url = source.url?.toLowerCase() ?? '';

    return (
      type.includes('google') ||
      type.includes('map') ||
      label.includes('google') ||
      label.includes('map') ||
      url.includes('google.com/maps') ||
      url.includes('maps.app.goo.gl')
    );
  });
}

export function shouldShowListingVerificationNotice(input: {
  needsVerification?: boolean;
  sourceUrls?: PublicSourceUrl[] | null;
}): boolean {
  return input.needsVerification === true || hasMapOnlySources(input.sourceUrls);
}

export function getPublicListingDescription(
  listing: PublicListingInput,
  kind: ListingKind = 'generic',
): string {
  const cleanedDescription = cleanPublicCopy(listing.description ?? listing.bestFor);
  const note = publicVerificationNote(kind);

  if (
    cleanedDescription &&
    !containsInternalCopy(cleanedDescription) &&
    !containsGenericEditorialCopy(listing.description ?? listing.bestFor ?? '')
  ) {
    return hasPublicVerificationNote(cleanedDescription) ? cleanedDescription : `${cleanedDescription} ${note}`;
  }

  const townPart = listing.town ? ` in or near ${listing.town}` : '';
  const typePart = listing.type ? `${listing.type.toLowerCase()} option` : 'visitor option';
  const bestForPart = listing.bestFor && !containsGenericEditorialCopy(listing.bestFor)
    ? ` Good for ${cleanPublicCopy(listing.bestFor).toLowerCase().replace(/\.$/, '')}.`
    : '';

  if (kind === 'stay') {
    return `A ${typePart}${townPart} for visitors comparing practical places to stay.${bestForPart} ${note}`;
  }
  if (kind === 'food') {
    return `A ${typePart}${townPart} for visitors comparing meal, cafe or drinks stops.${bestForPart} ${note}`;
  }
  if (kind === 'attraction') {
    return `A useful ${typePart}${townPart} for visitors building an itinerary.${bestForPart} ${note}`;
  }
  if (kind === 'park') {
    return `A ${typePart}${townPart} for visitors comparing caravan, touring or countryside stays.${bestForPart} ${note}`;
  }

  return `A visitor option${townPart}.${bestForPart} ${note}`;
}

export function getPublicCta(listing: PublicListingInput): {
  href?: string;
  label: string;
  rel: string;
} {
  if (listing.affiliateUrl) {
    return {
      href: listing.affiliateUrl,
      label: 'Check availability',
      rel: 'sponsored nofollow noopener',
    };
  }
  if (listing.bookingUrl) {
    return {
      href: listing.bookingUrl,
      label: 'View on Booking.com',
      rel: 'sponsored nofollow noopener',
    };
  }
  if (listing.officialWebsiteUrl) {
    return {
      href: listing.officialWebsiteUrl,
      label: 'Visit official website',
      rel: 'noopener noreferrer',
    };
  }

  return {
    label: 'Check details directly',
    rel: 'noopener noreferrer',
  };
}

export function uniquePublicTags(tags: string[] = []): string[] {
  const blocked = /candidate|internal|needs verification|needs review|affiliate|commission|CJ/i;
  return Array.from(new Set(tags.map((tag) => tag.trim()).filter(Boolean))).filter(
    (tag) => !blocked.test(tag),
  );
}
