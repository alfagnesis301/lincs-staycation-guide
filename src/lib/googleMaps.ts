export interface GoogleMapsLocationInput {
  address?: string;
  town?: string;
  postcode?: string;
  googleMapsUrl?: string;
  googleMapsQuery?: string;
  latitude?: number;
  longitude?: number;
}

export interface ListingLocationInput {
  name?: string;
  town?: string;
  area?: string;
  address?: string;
  areaNote?: string;
  postcode?: string;
  googleMapsUrl?: string;
  location?: GoogleMapsLocationInput;
}

export interface GoogleMapsLink {
  href: string;
  label: 'Open in Google Maps' | 'Search on Google Maps';
  isVerified: boolean;
  ariaLabel: string;
}

const REGION = 'Lincolnshire';

function isUsableMapsUrl(url: string | undefined): url is string {
  if (!url) return false;
  const trimmed = url.trim();
  if (!trimmed) return false;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'https:' && /(^|\.)google\.[a-z.]+$/i.test(parsed.hostname) === false
      ? /google\./i.test(parsed.hostname)
      : true;
  } catch {
    return false;
  }
}

function compactJoin(parts: Array<string | undefined>): string {
  return parts
    .map((p) => (p ? p.trim() : ''))
    .filter((p) => p.length > 0)
    .join(', ');
}

export function getGoogleMapsLink(listing: ListingLocationInput): GoogleMapsLink | null {
  if (!listing) return null;

  const verifiedUrl = listing.location?.googleMapsUrl ?? listing.googleMapsUrl;
  if (isUsableMapsUrl(verifiedUrl)) {
    const name = (listing.name ?? '').trim();
    return {
      href: verifiedUrl,
      label: 'Open in Google Maps',
      isVerified: true,
      ariaLabel: name
        ? `Open ${name} in Google Maps (opens in a new tab)`
        : 'Open location in Google Maps (opens in a new tab)',
    };
  }

  const name = (listing.name ?? '').trim();
  if (!name) return null;

  const explicitQuery = listing.location?.googleMapsQuery?.trim();
  const town = (listing.location?.town ?? listing.town ?? '').trim();
  const address = (listing.location?.address ?? listing.address ?? '').trim();
  const postcode = (listing.location?.postcode ?? listing.postcode ?? '').trim();
  const areaNote = (listing.areaNote ?? listing.area ?? '').trim();

  let query: string | undefined = explicitQuery;
  if (!query) {
    if (address && town) {
      query = compactJoin([name, address, town, REGION]);
    } else if (postcode) {
      query = compactJoin([name, postcode]);
    } else if (town) {
      query = compactJoin([name, town, REGION]);
    } else if (areaNote) {
      query = compactJoin([name, areaNote, REGION]);
    }
  }

  if (!query) return null;

  const href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  return {
    href,
    label: 'Search on Google Maps',
    isVerified: false,
    ariaLabel: `Search ${name} on Google Maps (opens in a new tab)`,
  };
}
