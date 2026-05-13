import type { FAQItem, RegionType } from './caravanParkGuides';

export type PlacesToStayType =
  | 'Hotel'
  | 'B&B'
  | 'Guest house'
  | 'Inn'
  | 'Pub accommodation'
  | 'Apartment'
  | 'Serviced accommodation'
  | 'Holiday cottage';

export type BookingStatus = 'booking-confirmed' | 'needs-review';

export interface PlacesToStaySourceUrl {
  label: string;
  url: string;
  type: 'Booking.com' | 'Official website' | 'Editorial source';
  checkedDate: string;
}

export interface PlacesToStayListing {
  id: string;
  name: string;
  slug: string;
  town: string;
  type: PlacesToStayType;
  bestFor: string;
  description: string;
  tags: string[];
  areaNote: string;
  bookingStatus: BookingStatus;
  bookingUrl?: string;
  affiliateUrl?: string;
  officialWebsiteUrl?: string;
  sourceUrls: PlacesToStaySourceUrl[];
  priceRange: 'Unknown';
  dogFriendly?: boolean;
  familyFriendly?: boolean;
  parking?: boolean;
  accessibilityNote?: string;
  needsVerification: boolean;
}

export interface PlacesToStayGuide {
  id: string;
  location: string;
  slug: string;
  href: string;
  title: string;
  h1: string;
  intro: string;
  subtitle: string;
  description: string;
  bestFor: string;
  regionType: RegionType;
  lastUpdated: string;
  options: PlacesToStayListing[];
  faqs: FAQItem[];
  needsReview?: boolean;
}

const checkedDate = '2026-05-13';

const bostonOptions: PlacesToStayListing[] = [
  {
    id: 'the-white-hart-hotel-boston',
    name: 'The White Hart Hotel, Boston',
    slug: 'the-white-hart-hotel-boston',
    town: 'Boston',
    type: 'Hotel',
    bestFor: 'Central heritage stays, riverside town visits and short breaks.',
    description:
      'A central Boston hotel option useful for visitors wanting easy access to the market place, Boston Stump, restaurants and the River Witham area.',
    tags: ['Hotel', 'Central Boston', 'Historic town', 'Couples', 'Short breaks'],
    areaNote: 'Central Boston',
    bookingStatus: 'booking-confirmed',
    bookingUrl: 'https://www.booking.com/hotel/gb/white-hart-hotel.en-gb.html',
    sourceUrls: [
      {
        label: 'Booking.com',
        url: 'https://www.booking.com/hotel/gb/white-hart-hotel.en-gb.html',
        type: 'Booking.com',
        checkedDate,
      },
    ],
    priceRange: 'Unknown',
    parking: true,
    needsVerification: false,
  },
  {
    id: 'the-stanley-hotel-boston',
    name: 'The Stanley Hotel',
    slug: 'the-stanley-hotel-boston',
    town: 'Boston',
    type: 'Hotel',
    bestFor: 'Simple town-centre stays with modern room facilities.',
    description:
      'A central Boston hotel with room and studio-style options, useful for visitors who want town access, self-check-in practicality and a short walk to local amenities.',
    tags: ['Hotel', 'Town centre', 'Studios', 'Short breaks', 'Business travel'],
    areaNote: 'High Street, Boston',
    bookingStatus: 'booking-confirmed',
    bookingUrl: 'https://www.booking.com/hotel/gb/the-stanley.en-gb.html',
    sourceUrls: [
      {
        label: 'Booking.com',
        url: 'https://www.booking.com/hotel/gb/the-stanley.en-gb.html',
        type: 'Booking.com',
        checkedDate,
      },
    ],
    priceRange: 'Unknown',
    needsVerification: false,
  },
  {
    id: 'boston-west-hotel',
    name: 'Boston West Hotel',
    slug: 'boston-west-hotel',
    town: 'Boston',
    type: 'Hotel',
    bestFor: 'Golf, countryside and business stays near Boston.',
    description:
      'A hotel on the Boston area edge that suits visitors who want parking, countryside surroundings, golf facilities and practical access back into the town.',
    tags: ['Hotel', 'Golf', 'Countryside', 'Parking', 'Business travel'],
    areaNote: 'Hubberts Bridge, Boston area',
    bookingStatus: 'booking-confirmed',
    bookingUrl: 'https://www.booking.com/hotel/gb/boston-west.en-gb.html',
    sourceUrls: [
      {
        label: 'Booking.com',
        url: 'https://www.booking.com/hotel/gb/boston-west.en-gb.html',
        type: 'Booking.com',
        checkedDate,
      },
    ],
    priceRange: 'Unknown',
    parking: true,
    familyFriendly: true,
    needsVerification: false,
  },
  {
    id: 'twenty-hotel-and-bar-boston',
    name: 'Twenty Hotel & Bar',
    slug: 'twenty-hotel-and-bar-boston',
    town: 'Boston',
    type: 'Hotel',
    bestFor: 'Central short breaks, bar-with-rooms stays and town visits.',
    description:
      'A hotel and bar accommodation option in central Boston, useful for short breaks near the town centre, Boston Stump and evening food-and-drink options.',
    tags: ['Hotel', 'Bar with rooms', 'Central Boston', 'Short breaks', 'Couples'],
    areaNote: 'Wormgate, central Boston',
    bookingStatus: 'booking-confirmed',
    bookingUrl: 'https://www.booking.com/hotel/gb/riverside-town-guesthouse.html',
    sourceUrls: [
      {
        label: 'Booking.com',
        url: 'https://www.booking.com/hotel/gb/riverside-town-guesthouse.html',
        type: 'Booking.com',
        checkedDate,
      },
    ],
    priceRange: 'Unknown',
    needsVerification: false,
  },
  {
    id: 'the-kings-arms-boston',
    name: "The King's Arms",
    slug: 'the-kings-arms-boston',
    town: 'Boston',
    type: 'Inn',
    bestFor: 'Pub-style stays, breakfast and access to central Boston.',
    description:
      'A pub accommodation option near central Boston, useful for visitors who prefer a traditional inn-style stay with parking and access to the town on foot.',
    tags: ['Inn', 'Pub accommodation', 'Near town centre', 'Parking', 'Dog-friendly'],
    areaNote: 'Horncastle Road, Boston',
    bookingStatus: 'booking-confirmed',
    bookingUrl: 'https://www.booking.com/hotel/gb/the-king-39-s-arms-boston.en-gb.html',
    sourceUrls: [
      {
        label: 'Booking.com',
        url: 'https://www.booking.com/hotel/gb/the-king-39-s-arms-boston.en-gb.html',
        type: 'Booking.com',
        checkedDate,
      },
    ],
    priceRange: 'Unknown',
    dogFriendly: true,
    parking: true,
    needsVerification: false,
  },
  {
    id: 'the-arundell-hotel-boston',
    name: 'The Arundell Hotel',
    slug: 'the-arundell-hotel-boston',
    town: 'Boston',
    type: 'Hotel',
    bestFor: 'Central stays, modern rooms and town-centre access.',
    description:
      'A central Boston hotel option near Church Close, useful for visitors looking for modern rooms, town access and a practical base for heritage visits.',
    tags: ['Hotel', 'Central Boston', 'Modern rooms', 'Short breaks', 'Family rooms'],
    areaNote: 'Church Close, central Boston',
    bookingStatus: 'booking-confirmed',
    bookingUrl: 'https://www.booking.com/hotel/gb/the-arundell-boston.en-gb.html',
    sourceUrls: [
      {
        label: 'Booking.com',
        url: 'https://www.booking.com/hotel/gb/the-arundell-boston.en-gb.html',
        type: 'Booking.com',
        checkedDate,
      },
    ],
    priceRange: 'Unknown',
    familyFriendly: true,
    parking: true,
    needsVerification: false,
  },
  {
    id: 'the-old-kings-head-boston',
    name: 'The Old Kings Head',
    slug: 'the-old-kings-head-boston',
    town: 'Boston',
    type: 'Hotel',
    bestFor: 'Historic inn-style stays, Kirton visits and Frampton Marsh trips.',
    description:
      'A historic hotel-style accommodation option in Kirton, useful for travellers who want a character stay outside central Boston with road access to the town and nearby nature reserves.',
    tags: ['Hotel', 'Historic building', 'Kirton', 'Parking', 'Countryside edge'],
    areaNote: 'Kirton, Boston area',
    bookingStatus: 'booking-confirmed',
    bookingUrl: 'https://www.booking.com/hotel/gb/the-old-kings-head.html',
    sourceUrls: [
      {
        label: 'Booking.com',
        url: 'https://www.booking.com/hotel/gb/the-old-kings-head.html',
        type: 'Booking.com',
        checkedDate,
      },
    ],
    priceRange: 'Unknown',
    parking: true,
    needsVerification: false,
  },
  {
    id: 'town-house-rooms-boston',
    name: 'Town House Rooms',
    slug: 'town-house-rooms-boston',
    town: 'Boston',
    type: 'Guest house',
    bestFor: 'Simple central guest accommodation and value-led short stays.',
    description:
      'A central guest accommodation option for visitors who want a straightforward room close to Boston High Street, shops, restaurants and local transport.',
    tags: ['Guest house', 'Central Boston', 'Value stays', 'Short breaks', 'No-frills'],
    areaNote: 'High Street, Boston',
    bookingStatus: 'booking-confirmed',
    bookingUrl: 'https://www.booking.com/hotel/gb/town-house-rooms-boston.en-gb.html',
    sourceUrls: [
      {
        label: 'Booking.com',
        url: 'https://www.booking.com/hotel/gb/town-house-rooms-boston.en-gb.html',
        type: 'Booking.com',
        checkedDate,
      },
    ],
    priceRange: 'Unknown',
    needsVerification: false,
  },
];

const guideBase: Omit<PlacesToStayGuide, 'options' | 'faqs'>[] = [
  {
    id: 'lincoln',
    location: 'Lincoln',
    slug: 'lincoln',
    href: '/places-to-stay/lincoln',
    title: 'Places to Stay in Lincoln',
    h1: 'Places to Stay in Lincoln',
    intro:
      'Verified hotel, B&B, guest house, inn and apartment listings for Lincoln are being reviewed before publication.',
    subtitle: 'Hotels, B&Bs and guest accommodation for cathedral city breaks.',
    description: 'A city accommodation guide for Lincoln, currently awaiting verified Booking.com-ready listings.',
    bestFor: 'Cathedral city breaks, heritage weekends and practical city stays',
    regionType: 'City',
    lastUpdated: checkedDate,
    needsReview: true,
  },
  {
    id: 'skegness',
    location: 'Skegness',
    slug: 'skegness',
    href: '/places-to-stay/skegness',
    title: 'Places to Stay in Skegness',
    h1: 'Places to Stay in Skegness',
    intro:
      'Verified hotels, guest houses, B&Bs and apartments for Skegness are being reviewed before publication.',
    subtitle: 'Seaside hotels, guest houses and apartments for Skegness breaks.',
    description: 'A Skegness accommodation guide, currently awaiting verified hotel-style listings.',
    bestFor: 'Family seaside breaks, beach access and town-centre stays',
    regionType: 'Coast',
    lastUpdated: checkedDate,
    needsReview: true,
  },
  {
    id: 'stamford',
    location: 'Stamford',
    slug: 'stamford',
    href: '/places-to-stay/stamford',
    title: 'Places to Stay in Stamford',
    h1: 'Places to Stay in Stamford',
    intro:
      'Verified hotel, inn, guest house and apartment listings for Stamford are being reviewed before publication.',
    subtitle: 'Hotels, inns and guest accommodation for Stamford breaks.',
    description: 'A Stamford accommodation guide, currently awaiting verified Booking.com-ready listings.',
    bestFor: 'Weekend breaks, Burghley visits and town-and-country stays',
    regionType: 'Market town',
    lastUpdated: checkedDate,
    needsReview: true,
  },
  {
    id: 'louth',
    location: 'Louth',
    slug: 'louth',
    href: '/places-to-stay/louth',
    title: 'Places to Stay in Louth',
    h1: 'Places to Stay in Louth',
    intro: 'Verified hotels, inns, B&Bs and guest accommodation for Louth are being reviewed before publication.',
    subtitle: 'Market town accommodation for Louth and the Lincolnshire Wolds.',
    description: 'A Louth accommodation guide, currently awaiting verified hotel-style listings.',
    bestFor: 'Wolds walking, market town breaks and coast access',
    regionType: 'Wolds',
    lastUpdated: checkedDate,
    needsReview: true,
  },
  {
    id: 'boston',
    location: 'Boston',
    slug: 'boston',
    href: '/places-to-stay/boston',
    title: 'Places to Stay in Boston',
    h1: 'Places to Stay in Boston',
    intro:
      'Compare hotels, inns, guest accommodation and practical places to stay in Boston, Lincolnshire, with options useful for heritage breaks, town-centre visits, business trips and wider Fenland travel.',
    subtitle: 'Hotels, inns, guest accommodation and Booking.com-ready stays for Boston town breaks and practical Lincolnshire bases.',
    description:
      'A curated Boston accommodation guide focused on hotels, inns, guest houses and Booking.com-ready places to stay.',
    bestFor: 'Fenland heritage, Boston Stump visits, town-centre stays, business trips and practical regional bases',
    regionType: 'Fens',
    lastUpdated: checkedDate,
  },
  {
    id: 'grantham',
    location: 'Grantham',
    slug: 'grantham',
    href: '/places-to-stay/grantham',
    title: 'Places to Stay in Grantham',
    h1: 'Places to Stay in Grantham',
    intro: 'Verified hotels, inns, B&Bs and guest accommodation for Grantham are being reviewed before publication.',
    subtitle: 'Hotels and guest accommodation for Grantham and the A1 corridor.',
    description: 'A Grantham accommodation guide, currently awaiting verified hotel-style listings.',
    bestFor: 'A1 stopovers, country houses and south Lincolnshire exploring',
    regionType: 'Countryside',
    lastUpdated: checkedDate,
    needsReview: true,
  },
  {
    id: 'spalding',
    location: 'Spalding',
    slug: 'spalding',
    href: '/places-to-stay/spalding',
    title: 'Places to Stay in Spalding',
    h1: 'Places to Stay in Spalding',
    intro: 'Verified hotels, B&Bs, inns and guest accommodation for Spalding are being reviewed before publication.',
    subtitle: 'Fenland hotels and guest accommodation for Spalding breaks.',
    description: 'A Spalding accommodation guide, currently awaiting verified hotel-style listings.',
    bestFor: 'Quiet fenland breaks, spring visits and riverside exploring',
    regionType: 'Fens',
    lastUpdated: checkedDate,
    needsReview: true,
  },
  {
    id: 'sleaford',
    location: 'Sleaford',
    slug: 'sleaford',
    href: '/places-to-stay/sleaford',
    title: 'Places to Stay in Sleaford',
    h1: 'Places to Stay in Sleaford',
    intro: 'Verified hotels, inns, B&Bs and guest accommodation for Sleaford are being reviewed before publication.',
    subtitle: 'Central Lincolnshire accommodation for Sleaford stays.',
    description: 'A Sleaford accommodation guide, currently awaiting verified hotel-style listings.',
    bestFor: 'Peaceful market town stays and central Lincolnshire access',
    regionType: 'Market town',
    lastUpdated: checkedDate,
    needsReview: true,
  },
  {
    id: 'mablethorpe',
    location: 'Mablethorpe',
    slug: 'mablethorpe',
    href: '/places-to-stay/mablethorpe',
    title: 'Places to Stay in Mablethorpe',
    h1: 'Places to Stay in Mablethorpe',
    intro:
      'Verified hotels, guest houses, apartments and B&B-style stays for Mablethorpe are being reviewed before publication.',
    subtitle: 'Seaside accommodation for Mablethorpe and nearby coast breaks.',
    description: 'A Mablethorpe accommodation guide, currently awaiting verified hotel-style listings.',
    bestFor: 'Traditional seaside holidays and quieter coastal stays',
    regionType: 'Coast',
    lastUpdated: checkedDate,
    needsReview: true,
  },
  {
    id: 'woodhall-spa',
    location: 'Woodhall Spa',
    slug: 'woodhall-spa',
    href: '/places-to-stay/woodhall-spa',
    title: 'Places to Stay in Woodhall Spa',
    h1: 'Places to Stay in Woodhall Spa',
    intro:
      'Verified hotels, inns, B&Bs and guest accommodation for Woodhall Spa are being reviewed before publication.',
    subtitle: 'Spa town accommodation for Woodhall Spa and nearby countryside.',
    description: 'A Woodhall Spa accommodation guide, currently awaiting verified hotel-style listings.',
    bestFor: 'Heritage, golf, cinema weekends and countryside breaks',
    regionType: 'Countryside',
    lastUpdated: checkedDate,
    needsReview: true,
  },
  {
    id: 'horncastle',
    location: 'Horncastle',
    slug: 'horncastle',
    href: '/places-to-stay/horncastle',
    title: 'Places to Stay in Horncastle',
    h1: 'Places to Stay in Horncastle',
    intro: 'Verified hotels, inns, B&Bs and guest accommodation for Horncastle are being reviewed before publication.',
    subtitle: 'Wolds accommodation for Horncastle and antique browsing breaks.',
    description: 'A Horncastle accommodation guide, currently awaiting verified hotel-style listings.',
    bestFor: 'Antique browsing, Wolds walking and rural Lincolnshire stays',
    regionType: 'Wolds',
    lastUpdated: checkedDate,
    needsReview: true,
  },
  {
    id: 'gainsborough',
    location: 'Gainsborough',
    slug: 'gainsborough',
    href: '/places-to-stay/gainsborough',
    title: 'Places to Stay in Gainsborough',
    h1: 'Places to Stay in Gainsborough',
    intro:
      'Verified hotels, inns, B&Bs and guest accommodation for Gainsborough are being reviewed before publication.',
    subtitle: 'Accommodation for Gainsborough and west Lincolnshire visits.',
    description: 'A Gainsborough accommodation guide, currently awaiting verified hotel-style listings.',
    bestFor: 'Medieval history, riverside visits and west Lincolnshire exploring',
    regionType: 'Market town',
    lastUpdated: checkedDate,
    needsReview: true,
  },
  {
    id: 'market-rasen',
    location: 'Market Rasen',
    slug: 'market-rasen',
    href: '/places-to-stay/market-rasen',
    title: 'Places to Stay in Market Rasen',
    h1: 'Places to Stay in Market Rasen',
    intro:
      'Verified hotels, inns, B&Bs and guest accommodation for Market Rasen are being reviewed before publication.',
    subtitle: 'Accommodation for Market Rasen, race days and the Wolds.',
    description: 'A Market Rasen accommodation guide, currently awaiting verified hotel-style listings.',
    bestFor: 'Race days, Wolds walking and countryside breaks',
    regionType: 'Wolds',
    lastUpdated: checkedDate,
    needsReview: true,
  },
  {
    id: 'bourne',
    location: 'Bourne',
    slug: 'bourne',
    href: '/places-to-stay/bourne',
    title: 'Places to Stay in Bourne',
    h1: 'Places to Stay in Bourne',
    intro: 'Verified hotels, inns, B&Bs and guest accommodation for Bourne are being reviewed before publication.',
    subtitle: 'Accommodation for Bourne and south Lincolnshire breaks.',
    description: 'A Bourne accommodation guide, currently awaiting verified hotel-style listings.',
    bestFor: 'Woodland walks, quiet rural breaks and south Lincolnshire access',
    regionType: 'Countryside',
    lastUpdated: checkedDate,
    needsReview: true,
  },
  {
    id: 'sutton-on-sea',
    location: 'Sutton-on-Sea',
    slug: 'sutton-on-sea',
    href: '/places-to-stay/sutton-on-sea',
    title: 'Places to Stay in Sutton-on-Sea',
    h1: 'Places to Stay in Sutton-on-Sea',
    intro:
      'Verified hotels, B&Bs, guest houses and apartments for Sutton-on-Sea are being reviewed before publication.',
    subtitle: 'Quiet coast accommodation for Sutton-on-Sea breaks.',
    description: 'A Sutton-on-Sea accommodation guide, currently awaiting verified hotel-style listings.',
    bestFor: 'Quiet seaside breaks and Mablethorpe-Sutton coastal stays',
    regionType: 'Coast',
    lastUpdated: checkedDate,
    needsReview: true,
  },
  {
    id: 'chapel-st-leonards',
    location: 'Chapel St Leonards',
    slug: 'chapel-st-leonards',
    href: '/places-to-stay/chapel-st-leonards',
    title: 'Places to Stay in Chapel St Leonards',
    h1: 'Places to Stay in Chapel St Leonards',
    intro:
      'Verified hotels, guest houses, B&Bs and apartments for Chapel St Leonards are being reviewed before publication.',
    subtitle: 'Coastal accommodation for Chapel St Leonards and nearby villages.',
    description: 'A Chapel St Leonards accommodation guide, currently awaiting verified hotel-style listings.',
    bestFor: 'Family seaside breaks and quieter coastal stays',
    regionType: 'Coast',
    lastUpdated: checkedDate,
    needsReview: true,
  },
];

function buildFaqs(guide: Omit<PlacesToStayGuide, 'options' | 'faqs'>): FAQItem[] {
  if (guide.id === 'boston') {
    return [
      {
        question: 'What are the best areas to stay in Boston, Lincolnshire?',
        answer:
          'Central Boston works well for Boston Stump, the market place, restaurants and practical access on foot. Surrounding villages and countryside can suit quieter stays, driving routes and trips toward the wider fens.',
      },
      {
        question: 'Are these Boston accommodation options paid rankings?',
        answer:
          'No. They are curated editorial options. Sponsored placements will be clearly labelled if introduced in the future.',
      },
      {
        question: 'Can I book these Boston stays through Lincs Staycation Guide?',
        answer:
          'The site does not handle bookings directly. Where available, listings link to Booking.com or the official accommodation website.',
      },
      {
        question: 'Do all Boston listings have Booking.com links?',
        answer:
          'The goal is to prioritise Booking.com-ready options. Listings only show Booking.com buttons when a verified property URL exists.',
      },
      {
        question: 'Can accommodation owners request updates?',
        answer:
          'Yes. Owners can use the contact or Add Your Business form to request corrections, updates or inclusion review.',
      },
      {
        question: 'Are caravan parks included in this Boston places to stay guide?',
        answer:
          'No. Caravan parks, holiday parks, touring sites and campsites are covered separately in the Caravan Parks section.',
      },
    ];
  }

  return [
    {
      question: `Why are some ${guide.location} accommodation listings still under review?`,
      answer:
        'Places to Stay only publishes hotel-style accommodation after source checks. Caravan parks, holiday parks, touring sites and campsites are kept in the separate Caravan Parks section.',
    },
    {
      question: `Will caravan parks be included in Places to Stay in ${guide.location}?`,
      answer:
        'No. Caravan parks, holiday parks, touring sites and campsites are not part of this vertical and belong in Caravan Parks.',
    },
    {
      question: `Can accommodation owners in ${guide.location} request inclusion?`,
      answer:
        'Yes. Hotels, B&Bs, inns, guest houses, apartments and cottages can request editorial review through the Add Your Business or Contact pages.',
    },
  ];
}

export const placesToStayGuides: PlacesToStayGuide[] = guideBase.map((guide) => ({
  ...guide,
  options: guide.id === 'boston' ? bostonOptions : [],
  faqs: buildFaqs(guide),
}));

export const featuredPlacesToStayGuideIds = [
  'lincoln',
  'skegness',
  'stamford',
  'louth',
  'boston',
  'grantham',
  'spalding',
  'sleaford',
  'mablethorpe',
  'woodhall-spa',
];

export const placesToStayLandingFaqs: FAQItem[] = [
  {
    question: 'How are places to stay guides organised?',
    answer:
      'The guides are organised by Lincolnshire location and focus on hotels, B&Bs, guest houses, inns, apartments, cottages and similar accommodation.',
  },
  {
    question: 'Are caravan parks included in Places to Stay?',
    answer:
      'No. Caravan parks, holiday parks, touring sites, campsites and fishing parks are covered separately in the Caravan Parks section.',
  },
  {
    question: 'Are these rankings or paid placements?',
    answer:
      'No. These are editorial research pages, not paid rankings. Sponsored placements will always be clearly labelled if introduced.',
  },
  {
    question: 'Can I book accommodation through this site?',
    answer:
      'No. Lincs Staycation Guide is a directory and editorial guide, not a booking platform. Verified listings link to Booking.com or official accommodation websites where available.',
  },
  {
    question: 'Can accommodation owners request updates?',
    answer:
      'Yes. Owners can request corrections, add verified details or submit a business for editorial review through the Add Your Business or Contact pages.',
  },
  {
    question: 'How often are listings reviewed?',
    answer:
      'Location guides show a last updated date and are reviewed periodically. Facilities, prices, availability and policies can change, so readers should always confirm directly before booking.',
  },
];

export function getPlacesToStayGuideBySlug(slug: string): PlacesToStayGuide | undefined {
  return placesToStayGuides.find((guide) => guide.slug === slug);
}

export function getFeaturedPlacesToStayGuides() {
  return featuredPlacesToStayGuideIds
    .map((id) => placesToStayGuides.find((guide) => guide.id === id))
    .filter((guide): guide is PlacesToStayGuide => Boolean(guide));
}

export function getRelatedPlacesToStayGuides(currentSlug: string, limit = 5): PlacesToStayGuide[] {
  const preferredForBoston = ['lincoln', 'skegness', 'stamford', 'louth', 'spalding'];
  if (currentSlug === 'boston') {
    return preferredForBoston
      .map((id) => placesToStayGuides.find((guide) => guide.id === id))
      .filter((guide): guide is PlacesToStayGuide => Boolean(guide))
      .slice(0, limit);
  }

  const current = getPlacesToStayGuideBySlug(currentSlug);
  if (!current) return placesToStayGuides.filter((guide) => guide.slug !== currentSlug).slice(0, limit);

  const sameRegion = placesToStayGuides.filter(
    (guide) => guide.slug !== currentSlug && guide.regionType === current.regionType
  );
  const others = placesToStayGuides.filter(
    (guide) => guide.slug !== currentSlug && guide.regionType !== current.regionType
  );

  return [...sameRegion, ...others].slice(0, limit);
}
