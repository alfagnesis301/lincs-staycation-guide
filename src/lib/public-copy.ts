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

const INTERNAL_REPLACEMENTS: Array<[RegExp, string]> = [
  [/\s*accommodation candidate\s*/gi, ' accommodation option '],
  [/\s*food and drink candidate\s*/gi, ' food and drink option '],
  [/\s*candidate venue\s*/gi, ' venue '],
  [/\s*candidate\s*/gi, ' option '],
  [/\s*before recommending\s*/gi, ' before travelling '],
  [/\s*sourced from public directories\s*/gi, ' included for visitor planning '],
  [/\s*needs[\s-]+verification\s*/gi, ' check details directly '],
  [/\s*needs[\s-]+review\s*/gi, ' check details directly '],
  [/\s*verify current reviews?,?\s*/gi, ' check current details directly '],
  [/\s*before publication\s*/gi, ' before travelling '],
];

const PUBLIC_VERIFICATION_NOTE_PATTERN =
  /\b(check|confirm|verify)\b[^.]{0,120}\b(current|direct|official|opening|ticket|availability|facilit|price|booking|travelling|visiting|details)\b/i;

export function containsInternalCopy(value: string): boolean {
  return INTERNAL_COPY_PATTERNS.some((pattern) => pattern.test(value));
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

export function getPublicListingDescription(
  listing: PublicListingInput,
  kind: ListingKind = 'generic',
): string {
  const cleanedDescription = cleanPublicCopy(listing.description ?? listing.bestFor);
  const note = publicVerificationNote(kind);

  if (cleanedDescription && !containsInternalCopy(cleanedDescription)) {
    return hasPublicVerificationNote(cleanedDescription) ? cleanedDescription : `${cleanedDescription} ${note}`;
  }

  const townPart = listing.town ? ` in or near ${listing.town}` : '';
  const typePart = listing.type ? `${listing.type.toLowerCase()} option` : 'visitor option';
  const bestForPart = listing.bestFor
    ? ` Good for ${cleanPublicCopy(listing.bestFor).toLowerCase().replace(/\.$/, '')}.`
    : '';

  if (kind === 'stay') {
    return `A ${typePart}${townPart} for visitors comparing practical places to stay.${bestForPart} ${note}`;
  }
  if (kind === 'food') {
    return `A ${typePart}${townPart} for visitors planning food and drink stops.${bestForPart} ${note}`;
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
