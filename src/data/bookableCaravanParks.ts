// =====================================================================
// Bookable Caravan Parks dataset
// ---------------------------------------------------------------------
// Powers /caravan-parks/booking.
//
// HOW TO ADD AFFILIATE LINKS:
//   1. Find the park below.
//   2. Replace the empty `affiliateUrl: ''` with your full tracked URL.
//   3. Optionally fill `officialUrl` with the park's own website.
//   4. Save. The "Check availability" button activates automatically.
//
// IF affiliateUrl is empty AND officialUrl is empty:
//   The button shows "Booking link coming soon" (disabled).
// IF affiliateUrl is empty BUT officialUrl is set:
//   The button shows "Visit official website" (no affiliate label).
// IF affiliateUrl is set:
//   The button shows "Check availability" + a small "Affiliate link" label.
//
// Internal monetisation fields are for business logic only.
// Do not render these values in the public UI.
// =====================================================================

export type InternalMonetizationPriority = 'very-high' | 'high' | 'medium' | 'low';

export type InternalBookingPlatform =
  | 'Haven'
  | 'Parkdean Resorts'
  | 'Hoseasons'
  | 'Booking.com'
  | 'Expedia'
  | 'Hotels.com'
  | 'Vrbo'
  | 'Pitchup'
  | 'Awin'
  | 'Butlin’s'
  | 'Direct booking'
  | 'Private listings';

export type VisitorTag =
  | 'family-friendly'
  | 'dog-friendly'
  | 'near-beach'
  | 'touring'
  | 'lodges'
  | 'glamping'
  | 'fishing'
  | 'quiet-stays'
  | 'open-all-year';

export type Area =
  | 'Skegness'
  | 'Chapel St Leonards'
  | 'Ingoldmells'
  | 'Mablethorpe'
  | 'Sutton-on-Sea'
  | 'Woodhall Spa'
  | 'Lincoln'
  | 'Burgh-le-Marsh'
  | 'Other Lincolnshire';

/**
 * Public-use image metadata for a park or for an area-context fallback.
 * Always store images locally in /public/images/caravan-parks/ — never hotlink.
 */
export interface BookableParkImage {
  src: string;
  alt: string;
  credit: string;
  sourceName: string;
  sourceUrl: string;
  licence: string;
  licenceUrl: string;
  requiresAttribution: boolean;
  modifications?: string;
}

export type ImageStatus =
  | 'verified-public-use' // exact-match image of this specific park, CC licence verified
  | 'area-context-image' // contextual photo of the surrounding area
  | 'permission-needed' // candidate image but permission not yet confirmed
  | 'placeholder'; // no legal image available — render placeholder icon

export interface BookableCaravanPark {
  id: string;

  // ---------------- PUBLIC FIELDS (safe to render) ----------------
  name: string;
  location: string;
  area: Area;
  bestFor: string;
  description: string;
  tags: VisitorTag[];
  affiliateUrl: string; // Add your affiliate link here
  officialUrl: string; // Park's own website (optional)

  /** Optional explicit image override. If omitted, the area-context image is used. */
  image?: BookableParkImage;
  imageStatus?: ImageStatus;

  // ---------------- INTERNAL FIELDS (do NOT render) ----------------
  internalMonetizationPriority: InternalMonetizationPriority;
  internalBookingPlatforms: InternalBookingPlatform[];
  internalNote: string;
}

const TAG_LABEL: Record<VisitorTag, string> = {
  'family-friendly': 'Family-friendly',
  'dog-friendly': 'Dog-friendly',
  'near-beach': 'Near beach',
  touring: 'Touring',
  lodges: 'Lodges',
  glamping: 'Glamping',
  fishing: 'Fishing',
  'quiet-stays': 'Quiet stay',
  'open-all-year': 'Open all year',
};

export function tagLabel(t: VisitorTag): string {
  return TAG_LABEL[t];
}

export const bookableCaravanParks: BookableCaravanPark[] = [
  // ---------------- Recommended (Very High internal) ----------------
  {
    id: 'skegness-holiday-park-haven',
    name: 'Skegness Holiday Park — Haven',
    location: 'Skegness',
    area: 'Skegness',
    bestFor: 'Family seaside breaks with on-park entertainment and beach access',
    description:
      'A coastal Haven park near Skegness with caravan and lodge stays, on-park pools and entertainment, and easy access to the Lincolnshire Coast.',
    tags: ['family-friendly', 'near-beach', 'lodges', 'dog-friendly'],
    affiliateUrl: '', // Add your affiliate link here
    officialUrl: '',
    internalMonetizationPriority: 'very-high',
    internalBookingPlatforms: ['Haven', 'Awin'],
    internalNote: 'Best monetised through the Haven affiliate programme on Awin.',
  },
  {
    id: 'golden-sands-holiday-park-haven',
    name: 'Golden Sands Holiday Park — Haven',
    location: 'Mablethorpe',
    area: 'Mablethorpe',
    bestFor: 'Large family seaside holidays with beach access and activities',
    description:
      'A useful coastal option for families comparing caravan and lodge stays near Mablethorpe, with easy access to the Lincolnshire Coast.',
    tags: ['family-friendly', 'near-beach', 'lodges', 'dog-friendly'],
    affiliateUrl: '', // Add your affiliate link here
    officialUrl: '',
    internalMonetizationPriority: 'very-high',
    internalBookingPlatforms: ['Haven', 'Awin'],
    internalNote: 'Large family park, strong Haven affiliate route.',
    // Verified Wikimedia Commons / Geograph image — David Brown, CC BY-SA 2.0
    // To activate: download the file at the source URL and save it as
    //   /public/images/caravan-parks/golden-sands-holiday-park.webp
    // Until then, the area-context image is used automatically.
    imageStatus: 'verified-public-use',
    image: {
      src: '/images/caravan-parks/golden-sands-holiday-park.webp',
      alt: 'Golden Sands Holiday Park, Mablethorpe, Lincolnshire Coast',
      credit: 'David Brown',
      sourceName: 'Geograph Britain and Ireland (via Wikimedia Commons)',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/Category:Golden_Sands_Holiday_Park',
      licence: 'CC BY-SA 2.0',
      licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
      requiresAttribution: true,
      modifications: 'Resized and converted to WebP for web use',
    },
  },
  {
    id: 'southview-holiday-park-parkdean',
    name: 'Southview Holiday Park — Parkdean Resorts',
    location: 'Skegness',
    area: 'Skegness',
    bestFor: 'Family-friendly seaside lodges and caravan stays',
    description:
      'A Parkdean resort-style park near Skegness with lodges, caravans, indoor pool and on-park entertainment for families.',
    tags: ['family-friendly', 'near-beach', 'lodges', 'dog-friendly'],
    affiliateUrl: '', // Add your affiliate link here
    officialUrl: '',
    internalMonetizationPriority: 'very-high',
    internalBookingPlatforms: ['Parkdean Resorts', 'Awin'],
    internalNote: 'Best monetised through the Parkdean Resorts affiliate programme.',
    // Verified Wikimedia Commons / Geograph image — CC BY-SA 2.0
    // To activate: download the file at the source URL and save it as
    //   /public/images/caravan-parks/southview-holiday-park.webp
    imageStatus: 'verified-public-use',
    image: {
      src: '/images/caravan-parks/southview-holiday-park.webp',
      alt: 'Southview Holiday Park near Skegness, Lincolnshire',
      credit: 'See source page for author',
      sourceName: 'Geograph Britain and Ireland (via Wikimedia Commons)',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/Category:Southview_Holiday_Park',
      licence: 'CC BY-SA 2.0',
      licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
      requiresAttribution: true,
      modifications: 'Resized and converted to WebP for web use',
    },
  },

  // ---------------- High internal priority ----------------
  {
    id: 'woodhall-country-park',
    name: 'Woodhall Country Park',
    location: 'Woodhall Spa',
    area: 'Woodhall Spa',
    bestFor: 'Touring, glamping and quiet countryside stays',
    description:
      'An award-winning touring and glamping park in Woodhall Spa with quiet pitches, lodges and easy access to the Lincolnshire Wolds.',
    tags: ['touring', 'glamping', 'lodges', 'quiet-stays', 'dog-friendly'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'high',
    internalBookingPlatforms: ['Pitchup', 'Booking.com', 'Direct booking'],
    internalNote: 'Touring & glamping site — strong Pitchup and Booking.com listings.',
  },
  {
    id: 'golden-palm-resort',
    name: 'Golden Palm Resort — Chapel St Leonards',
    location: 'Chapel St Leonards',
    area: 'Chapel St Leonards',
    bestFor: 'Family resort breaks near the Lincolnshire coast',
    description:
      'Resort-style holiday park at Chapel St Leonards with lodges, caravans, pool complex and family entertainment near the beach.',
    tags: ['family-friendly', 'near-beach', 'lodges'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'high',
    internalBookingPlatforms: ['Hoseasons', 'Booking.com'],
    internalNote: 'Family resort — typically bookable through Hoseasons.',
  },
  {
    id: 'richmond-holiday-centre',
    name: 'Richmond Holiday Centre',
    location: 'Skegness',
    area: 'Skegness',
    bestFor: 'Family seaside breaks close to Skegness',
    description:
      'A long-established holiday centre near Skegness with caravan stays, indoor pool and short walk to coast access.',
    tags: ['family-friendly', 'near-beach'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'high',
    internalBookingPlatforms: ['Hoseasons', 'Private listings'],
    internalNote: 'Available through Hoseasons and private owner listings.',
  },
  {
    id: 'the-chase-holiday-park',
    name: 'The Chase Holiday Park — Ingoldmells',
    location: 'Ingoldmells',
    area: 'Ingoldmells',
    bestFor: 'Family caravan holidays near Ingoldmells beach',
    description:
      'Coastal caravan park at Ingoldmells with family stays close to the beach, Fantasy Island and local seaside attractions.',
    tags: ['family-friendly', 'near-beach'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'high',
    internalBookingPlatforms: ['Hoseasons', 'Booking.com'],
    internalNote: 'Coastal Ingoldmells park — OTA and Hoseasons options.',
  },
  {
    id: 'butlins-skegness-caravan-village',
    name: 'Butlin’s Skegness Caravan Village',
    location: 'Skegness',
    area: 'Skegness',
    bestFor: 'Family resort breaks with full Butlin’s entertainment',
    description:
      'Caravan village adjoining Butlin’s Skegness, with optional access to the wider resort entertainment, restaurants and pool complex.',
    tags: ['family-friendly', 'near-beach', 'lodges'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'high',
    internalBookingPlatforms: ['Butlin’s', 'Awin'],
    internalNote: 'Bookable through Butlin’s direct affiliate via Awin.',
    // Verified Wikimedia Commons image — Butlins Skegness category
    // To activate: download a chosen file from the category and save it as
    //   /public/images/caravan-parks/butlins-skegness.webp
    imageStatus: 'verified-public-use',
    image: {
      src: '/images/caravan-parks/butlins-skegness.webp',
      alt: 'Butlin’s Skegness resort, Lincolnshire',
      credit: 'See source page for author',
      sourceName: 'Wikimedia Commons',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/Category:Butlins_Skegness',
      licence: 'See licence on source page',
      licenceUrl: 'https://commons.wikimedia.org/wiki/Category:Butlins_Skegness',
      requiresAttribution: true,
      modifications: 'Resized and converted to WebP for web use',
    },
  },
  {
    id: 'happy-days-beachfield',
    name: 'Happy Days Beachfield',
    location: 'Ingoldmells',
    area: 'Ingoldmells',
    bestFor: 'Family seaside caravan breaks at Ingoldmells',
    description:
      'Coastal caravan park at Ingoldmells with family-friendly caravan rentals close to the beach and seaside town centre.',
    tags: ['family-friendly', 'near-beach'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'high',
    internalBookingPlatforms: ['Hoseasons', 'Private listings'],
    internalNote: 'Coastal park — typically Hoseasons or private listings.',
  },
  {
    id: 'sealands-park',
    name: 'Sealands Park',
    location: 'Ingoldmells',
    area: 'Ingoldmells',
    bestFor: 'Family caravan stays near the beach',
    description:
      'Family-friendly caravan park near the Ingoldmells coast with caravan rentals and easy access to seaside attractions.',
    tags: ['family-friendly', 'near-beach', 'dog-friendly'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'high',
    internalBookingPlatforms: ['Hoseasons', 'Booking.com'],
    internalNote: 'Family park near the beach — strong OTA visibility.',
  },
  {
    id: 'hanworth-country-park',
    name: 'Hanworth Country Park',
    location: 'Lincolnshire',
    area: 'Other Lincolnshire',
    bestFor: 'Quiet countryside lodge and caravan stays',
    description:
      'Countryside park with lodge and caravan stays for visitors looking for a quieter Lincolnshire base away from the busier resorts.',
    tags: ['quiet-stays', 'dog-friendly', 'lodges'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'high',
    internalBookingPlatforms: ['Hoseasons', 'Pitchup'],
    internalNote: 'Country park stays — typically Hoseasons or Pitchup.',
  },
  {
    id: 'camper-uk-leisure-park',
    name: 'Camper UK Leisure Park',
    location: 'Lincoln',
    area: 'Lincoln',
    bestFor: 'Touring caravans, motorhomes and short stays near Lincoln',
    description:
      'Touring and motorhome site near Lincoln with all-weather pitches, useful as a base for visiting the city and the wider county.',
    tags: ['touring', 'dog-friendly', 'open-all-year'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'high',
    internalBookingPlatforms: ['Pitchup', 'Direct booking'],
    internalNote: 'Touring & motorhome site — Pitchup affiliate route.',
  },
  {
    id: 'coastfields-holiday-village',
    name: 'Coastfields Holiday Village — Ingoldmells',
    location: 'Ingoldmells',
    area: 'Ingoldmells',
    bestFor: 'Family resort-style caravan breaks at Ingoldmells',
    description:
      'Large family holiday village in Ingoldmells with caravan and lodge accommodation, indoor pool and on-park entertainment.',
    tags: ['family-friendly', 'near-beach', 'lodges'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'high',
    internalBookingPlatforms: ['Hoseasons', 'Booking.com'],
    internalNote: 'Big family resort — widely listed on Hoseasons.',
  },
  {
    id: 'grange-leisure-park',
    name: 'Grange Leisure Park',
    location: 'Mablethorpe',
    area: 'Mablethorpe',
    bestFor: 'Family seaside caravan stays near Mablethorpe',
    description:
      'Holiday park at Mablethorpe with caravan rentals close to the beach, useful for families looking for a Lincolnshire coast base.',
    tags: ['family-friendly', 'near-beach'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'high',
    internalBookingPlatforms: ['Hoseasons', 'Private listings'],
    internalNote: 'Mablethorpe holiday park — Hoseasons listings.',
  },
  {
    id: 'happy-days-holiday-homes',
    name: 'Happy Days Holiday Homes',
    location: 'Ingoldmells',
    area: 'Ingoldmells',
    bestFor: 'Owner-operated caravan rentals at Ingoldmells',
    description:
      'Owner-managed caravan rentals at Ingoldmells, useful for families wanting a self-catering seaside stay.',
    tags: ['family-friendly', 'near-beach'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'high',
    internalBookingPlatforms: ['Hoseasons', 'Private listings'],
    internalNote: 'Owner caravan rentals — OTA and private listings.',
  },
  {
    id: 'ingoldale-holiday-park',
    name: 'Ingoldale Holiday Park',
    location: 'Ingoldmells',
    area: 'Ingoldmells',
    bestFor: 'Family-friendly caravan stays near the beach',
    description:
      'Coastal caravan park at Ingoldmells with family-friendly stays, on-park amenities and short walks to the beach.',
    tags: ['family-friendly', 'near-beach', 'dog-friendly'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'high',
    internalBookingPlatforms: ['Hoseasons', 'Booking.com'],
    internalNote: 'Coastal Ingoldmells park — Hoseasons listings.',
  },

  // ---------------- Medium internal priority ----------------
  {
    id: 'north-shore-holiday-park',
    name: 'North Shore Holiday Park',
    location: 'Skegness',
    area: 'Skegness',
    bestFor: 'Coastal lodge and golf-side stays at Skegness',
    description:
      'Holiday park near North Shore Skegness with lodge accommodation and golf access, useful for couples and families.',
    tags: ['family-friendly', 'near-beach', 'lodges'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'medium',
    internalBookingPlatforms: ['Booking.com', 'Direct booking'],
    internalNote: 'Hotel & lodge site — Booking.com affiliate route.',
  },
  {
    id: 'skegness-sands-touring',
    name: 'Skegness Sands Touring & Camping',
    location: 'Skegness',
    area: 'Skegness',
    bestFor: 'Touring, camping and motorhome stays near the beach',
    description:
      'Touring and camping site near the Skegness coast with pitches for tents, caravans and motorhomes within walking distance of the beach.',
    tags: ['touring', 'near-beach', 'dog-friendly'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'medium',
    internalBookingPlatforms: ['Pitchup', 'Direct booking'],
    internalNote: 'Touring site — typically Pitchup.',
  },
  {
    id: 'sycamore-lakes-burgh-le-marsh',
    name: 'Sycamore Lakes Holiday Park — Burgh-le-Marsh',
    location: 'Burgh-le-Marsh',
    area: 'Burgh-le-Marsh',
    bestFor: 'Lakeside touring, fishing and glamping breaks',
    description:
      'Lakeside park at Burgh-le-Marsh with touring pitches, glamping units and fishing lakes — a quieter alternative to coastal parks.',
    tags: ['fishing', 'glamping', 'touring', 'quiet-stays', 'dog-friendly'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'medium',
    internalBookingPlatforms: ['Pitchup', 'Direct booking'],
    internalNote: 'Lakeside touring & glamping — Pitchup affiliate route.',
  },
  {
    id: 'sycamore-farm-holiday-park',
    name: 'Sycamore Farm Holiday Park',
    location: 'Lincolnshire',
    area: 'Other Lincolnshire',
    bestFor: 'Quiet touring and farm-style countryside stays',
    description:
      'Smaller countryside touring park in rural Lincolnshire — useful for quieter stays away from the busier coastal resorts.',
    tags: ['touring', 'quiet-stays', 'dog-friendly'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'medium',
    internalBookingPlatforms: ['Pitchup', 'Direct booking'],
    internalNote: 'Smaller park — typically Pitchup or direct.',
  },
  {
    id: 'towervans-holiday-park',
    name: 'Towervans Holiday Park',
    location: 'Mablethorpe',
    area: 'Mablethorpe',
    bestFor: 'Owner-operated caravan rentals near Mablethorpe beach',
    description:
      'Coastal caravan park at Mablethorpe with owner caravan rentals, useful for visitors seeking direct or private listings.',
    tags: ['family-friendly', 'near-beach'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'medium',
    internalBookingPlatforms: ['Private listings', 'Direct booking'],
    internalNote: 'Owner caravan rentals — private listings dominant.',
  },
  {
    id: 'laver-leisure-holiday-parks',
    name: 'Laver Leisure Holiday Parks',
    location: 'Lincolnshire',
    area: 'Other Lincolnshire',
    bestFor: 'Family-friendly Lincolnshire coast holiday parks',
    description:
      'A multi-park operator with several coastal Lincolnshire sites — useful for visitors comparing direct holiday park options.',
    tags: ['family-friendly', 'near-beach'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'medium',
    internalBookingPlatforms: ['Direct booking', 'Private listings'],
    internalNote: 'Multi-park operator — direct booking primary route.',
  },

  // ---------------- Low internal priority ----------------
  {
    id: 'hartsholme-country-park-campsite',
    name: 'Hartsholme Country Park Campsite',
    location: 'Lincoln',
    area: 'Lincoln',
    bestFor: 'Quiet camping near Lincoln',
    description:
      'A council-run campsite within Hartsholme Country Park, useful as a quiet base for visiting Lincoln and nearby attractions.',
    tags: ['touring', 'quiet-stays', 'dog-friendly'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'low',
    internalBookingPlatforms: ['Direct booking'],
    internalNote: 'Council-run campsite — direct booking only.',
  },
  {
    id: 'brandy-wharf-leisure-park',
    name: 'Brandy Wharf Leisure Park',
    location: 'Lincolnshire',
    area: 'Other Lincolnshire',
    bestFor: 'Riverside fishing and quiet touring breaks',
    description:
      'Riverside leisure park in rural Lincolnshire with fishing access and quiet touring pitches.',
    tags: ['fishing', 'touring', 'quiet-stays', 'dog-friendly'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'low',
    internalBookingPlatforms: ['Direct booking'],
    internalNote: 'Riverside park — direct booking primary route.',
  },
  {
    id: 'skegness-water-leisure-park',
    name: 'Skegness Water Leisure Park',
    location: 'Skegness',
    area: 'Skegness',
    bestFor: 'Fishing breaks and touring near Skegness',
    description:
      'Touring and fishing park near Skegness with on-site lakes — useful for visitors looking to combine seaside and angling stays.',
    tags: ['fishing', 'touring', 'near-beach', 'dog-friendly'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'low',
    internalBookingPlatforms: ['Pitchup', 'Direct booking'],
    internalNote: 'Touring & fishing site — sometimes Pitchup, mostly direct.',
    // Verified Wikimedia Commons / Geograph lake image — J.Hannan-Briggs, CC BY-SA 2.0
    // To activate: download the file at the source URL and save it as
    //   /public/images/caravan-parks/skegness-water-leisure-park.webp
    imageStatus: 'verified-public-use',
    image: {
      src: '/images/caravan-parks/skegness-water-leisure-park.webp',
      alt: 'Skegness Water Leisure Park lakes, Lincolnshire',
      credit: 'J.Hannan-Briggs',
      sourceName: 'Geograph Britain and Ireland (via Wikimedia Commons)',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/Category:Skegness_Water_Leisure_Park',
      licence: 'CC BY-SA 2.0',
      licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
      requiresAttribution: true,
      modifications: 'Resized and converted to WebP for web use',
    },
  },
  {
    id: 'trusthorpe-springs-holiday-park',
    name: 'Trusthorpe Springs Holiday Park',
    location: 'Mablethorpe',
    area: 'Mablethorpe',
    bestFor: 'Smaller coastal caravan stays near Mablethorpe',
    description:
      'Smaller coastal park at Trusthorpe near Mablethorpe with owner-rental caravans for short seaside breaks.',
    tags: ['family-friendly', 'near-beach'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'low',
    internalBookingPlatforms: ['Private listings', 'Direct booking'],
    internalNote: 'Smaller park — owner-rental and direct booking.',
  },
  {
    id: 'blue-dolphin-caravan-park',
    name: 'Blue Dolphin Caravan Park',
    location: 'Mablethorpe',
    area: 'Mablethorpe',
    bestFor: 'Coastal caravan stays near Mablethorpe',
    description:
      'Coastal caravan park near Mablethorpe with owner-rental caravans, useful for families looking at direct booking options.',
    tags: ['family-friendly', 'near-beach'],
    affiliateUrl: '',
    officialUrl: '',
    internalMonetizationPriority: 'low',
    internalBookingPlatforms: ['Private listings', 'Direct booking'],
    internalNote: 'Owner-rental driven — direct booking primary route.',
  },
];

// =====================================================================
// SORT & FILTER HELPERS
// =====================================================================

const PRIORITY_RANK: Record<InternalMonetizationPriority, number> = {
  'very-high': 0,
  high: 1,
  medium: 2,
  low: 3,
};

// Internal big-brand secondary tiebreaker for "Recommended" order.
const PLATFORM_RANK: Record<string, number> = {
  Haven: 0,
  'Parkdean Resorts': 0,
  'Butlin’s': 0,
  Hoseasons: 1,
  'Booking.com': 1,
  Expedia: 1,
  'Hotels.com': 1,
  Vrbo: 1,
  Pitchup: 2,
  Awin: 2,
  'Private listings': 3,
  'Direct booking': 4,
};

function bestPlatformRank(p: BookableCaravanPark): number {
  return Math.min(...p.internalBookingPlatforms.map((b) => PLATFORM_RANK[b] ?? 5));
}

export type SortOption =
  | 'recommended'
  | 'alphabetical'
  | 'location'
  | 'familyFriendly'
  | 'dogFriendly'
  | 'nearBeach'
  | 'touringCamping'
  | 'lodges'
  | 'glamping'
  | 'quietStays';

const SORT_TAG_MAP: Partial<Record<SortOption, VisitorTag>> = {
  familyFriendly: 'family-friendly',
  dogFriendly: 'dog-friendly',
  nearBeach: 'near-beach',
  touringCamping: 'touring',
  lodges: 'lodges',
  glamping: 'glamping',
  quietStays: 'quiet-stays',
};

function recommendedCompare(a: BookableCaravanPark, b: BookableCaravanPark): number {
  const pa = PRIORITY_RANK[a.internalMonetizationPriority];
  const pb = PRIORITY_RANK[b.internalMonetizationPriority];
  if (pa !== pb) return pa - pb;
  const ra = bestPlatformRank(a);
  const rb = bestPlatformRank(b);
  if (ra !== rb) return ra - rb;
  return a.name.localeCompare(b.name);
}

export function sortParks(
  parks: BookableCaravanPark[],
  option: SortOption
): BookableCaravanPark[] {
  if (option === 'alphabetical') {
    return [...parks].sort((a, b) => a.name.localeCompare(b.name));
  }
  if (option === 'location') {
    return [...parks].sort(
      (a, b) => a.area.localeCompare(b.area) || a.name.localeCompare(b.name)
    );
  }
  const tag = SORT_TAG_MAP[option];
  if (tag) {
    return [...parks].sort((a, b) => {
      const ah = a.tags.includes(tag) ? 0 : 1;
      const bh = b.tags.includes(tag) ? 0 : 1;
      if (ah !== bh) return ah - bh;
      return recommendedCompare(a, b);
    });
  }
  // 'recommended' default — uses internal logic but never exposes it.
  return [...parks].sort(recommendedCompare);
}

export function getRecommendedSections(parks: BookableCaravanPark[]) {
  const sorted = sortParks(parks, 'recommended');
  return {
    recommended: sorted.filter(
      (p) =>
        p.internalMonetizationPriority === 'very-high' ||
        p.internalMonetizationPriority === 'high'
    ),
    more: sorted.filter((p) => p.internalMonetizationPriority === 'medium'),
    direct: sorted.filter((p) => p.internalMonetizationPriority === 'low'),
  };
}

export function hasActiveAffiliateLinks(
  parks: BookableCaravanPark[] = bookableCaravanParks
): boolean {
  return parks.some((p) => p.affiliateUrl && p.affiliateUrl.trim() !== '');
}

// =====================================================================
// IMAGE RESOLUTION
// ---------------------------------------------------------------------
// If a park has its own `image` set, that wins. Otherwise we fall back to
// the area-context photo for the park's `area`. If no area-context photo
// exists, the card renders a placeholder icon (no broken image).
// All images are stored locally — never hotlinked from Wikimedia/Geograph.
// =====================================================================

const AREA_CONTEXT_IMAGE: Partial<Record<Area, BookableParkImage>> = {
  Skegness: {
    src: '/images/lincolnshire/skegness.jpg',
    alt: 'Skegness seafront, Lincolnshire Coast',
    credit: 'Mick Knapton',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Clock_Tower,_Skegness_1.JPG',
    licence: 'CC BY-SA 3.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    requiresAttribution: true,
    modifications: 'Renamed for web use',
  },
  Ingoldmells: {
    src: '/images/lincolnshire/ingoldmells.jpg',
    alt: 'Ingoldmells beach, Lincolnshire Coast',
    credit: 'Tony Atkin',
    sourceName: 'Geograph Britain and Ireland (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ingoldmells_Beach_-_geograph.org.uk_-_237879.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    requiresAttribution: true,
    modifications: 'Renamed for web use',
  },
  'Chapel St Leonards': {
    src: '/images/lincolnshire/chapel-st-leonards.jpg',
    alt: 'Beach and promenade at Chapel St Leonards, Lincolnshire',
    credit: 'Mat Fascione',
    sourceName: 'Geograph Britain and Ireland (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Beach_and_promenade_at_Chapel_St_Leonards_-_geograph.org.uk_-_4768080.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    requiresAttribution: true,
    modifications: 'Renamed for web use',
  },
  Mablethorpe: {
    src: '/images/lincolnshire/mablethorpe.jpg',
    alt: 'Mablethorpe beach, Lincolnshire Coast',
    credit: 'Jonathan Thacker',
    sourceName: 'Geograph Britain and Ireland (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Outlet_to_the_sea,_Mablethorpe_beach_-_geograph.org.uk_-_3280708.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    requiresAttribution: true,
    modifications: 'Renamed for web use',
  },
  'Sutton-on-Sea': {
    src: '/images/lincolnshire/sutton-on-sea.jpg',
    alt: 'Beach huts at Sutton on Sea, Lincolnshire',
    credit: 'Richard Hoare',
    sourceName: 'Geograph Britain and Ireland (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Beach_huts_at_Sutton_on_Sea_-_geograph.org.uk_-_1804145.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    requiresAttribution: true,
    modifications: 'Resized to 1200px wide, optimised as progressive JPEG',
  },
  'Woodhall Spa': {
    src: '/images/lincolnshire/woodhall-spa.jpg',
    alt: 'Kinema in the Woods, Woodhall Spa',
    credit: 'Josie Campbell',
    sourceName: 'Geograph Britain and Ireland (via Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kinema_in_the_Woods_-_geograph.org.uk_-_2519348.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    requiresAttribution: true,
    modifications: 'Resized to 1200px wide',
  },
  Lincoln: {
    src: '/images/lincolnshire/lincoln.jpg',
    alt: 'Steep Hill, Lincoln — view towards Lincoln Cathedral',
    credit: 'Yarah',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bottom_of_Steep_Hill.JPG',
    licence: 'CC BY-SA 3.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    requiresAttribution: true,
    modifications: 'Resized to 1200px wide',
  },
  // Burgh-le-Marsh and Other Lincolnshire have no dedicated area photo yet.
};

// =====================================================================
// VERIFIED IMAGE FILE PRESENCE
// ---------------------------------------------------------------------
// When you have downloaded a verified Wikimedia/Geograph image and saved it
// to /public/images/caravan-parks/<file>.webp, flip the matching entry below
// to `true`. Until then, the resolver falls back to the area-context image
// so the card never shows a broken image.
// =====================================================================
const VERIFIED_IMAGES_PRESENT: Record<string, boolean> = {
  'golden-sands-holiday-park-haven': false, // set to true once webp is saved
  'southview-holiday-park-parkdean': false,
  'butlins-skegness-caravan-village': false,
  'skegness-water-leisure-park': false,
};

export interface ResolvedParkImage {
  image: BookableParkImage | null;
  status: ImageStatus;
}

/**
 * Resolve the image to render for a park — exact image if set and the file
 * is present, else area-context fallback, else placeholder. Never returns a
 * broken or hotlinked URL.
 */
export function getParkImage(park: BookableCaravanPark): ResolvedParkImage {
  if (park.image && VERIFIED_IMAGES_PRESENT[park.id]) {
    return {
      image: park.image,
      status: park.imageStatus ?? 'verified-public-use',
    };
  }
  const areaImg = AREA_CONTEXT_IMAGE[park.area];
  if (areaImg) {
    return { image: areaImg, status: 'area-context-image' };
  }
  return { image: null, status: 'placeholder' };
}
