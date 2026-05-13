import {
  caravanParkGuides,
  type CaravanParkGuide,
  type CaravanParkListing,
  type FAQItem,
  type RegionType,
} from './caravanParkGuides';

export interface PlacesToStayGuide {
  id: string;
  location: string;
  slug: string;
  href: string;
  title: string;
  h1: string;
  intro: string;
  description: string;
  bestFor: string;
  regionType: RegionType;
  lastUpdated: string;
  options: CaravanParkListing[];
  sourceGuide: CaravanParkGuide;
  faqs: FAQItem[];
}

const locationIntros: Record<string, string> = {
  lincoln:
    'Compare practical places to stay in Lincoln and nearby countryside, currently including verified caravan parks, touring sites, lodges, camping pods and glamping options that work for city breaks and wider Lincolnshire trips.',
  skegness:
    'Compare practical places to stay in Skegness and nearby coastal areas, including holiday parks, caravan stays, touring sites, lodges, glamping and family-friendly seaside bases.',
  stamford:
    'Compare curated places to stay around Stamford, with practical options for town-and-country breaks, Burghley visits, A1 stopovers, glamping and nearby countryside touring.',
  louth:
    'Compare places to stay around Louth and the Lincolnshire Wolds, including countryside parks, lodges, touring sites and coast-access bases for visitors exploring market towns and walking routes.',
  boston:
    'Compare places to stay around Boston and the Lincolnshire fens, including lodge, caravan, touring and countryside accommodation options useful for heritage breaks and practical regional stays.',
  grantham:
    'Compare places to stay around Grantham, the A1 corridor and nearby countryside, including touring sites, lodges, caravan parks and practical bases for Belton House, Stamford and the Vale of Belvoir.',
  spalding:
    'Compare places to stay around Spalding and the south Lincolnshire fens, including holiday parks, touring sites, lodges and countryside options for peaceful breaks and regional exploring.',
  sleaford:
    'Compare places to stay around Sleaford and central Lincolnshire, including touring, lodge and countryside accommodation options for quieter breaks and practical county-wide access.',
  mablethorpe:
    'Compare places to stay in and around Mablethorpe, including coastal holiday parks, lodges, touring sites, caravan stays and quieter options along the Mablethorpe-Sutton stretch.',
  'woodhall-spa':
    'Compare places to stay around Woodhall Spa, including woodland lodges, caravan parks, touring sites, glamping and countryside bases close to heritage, golf and walking routes.',
  horncastle:
    'Compare places to stay around Horncastle and the Lincolnshire Wolds, including countryside touring sites, lodges, glamping and practical bases for antique browsing and walking breaks.',
  gainsborough:
    'Compare places to stay around Gainsborough and west Lincolnshire, including quiet countryside options, touring sites and accommodation bases for heritage-focused visits.',
  'market-rasen':
    'Compare places to stay around Market Rasen and the western Lincolnshire Wolds, including touring sites, countryside parks and practical bases for race days and walking breaks.',
  bourne:
    'Compare places to stay around Bourne, Stamford and south Lincolnshire, including touring sites, glamping, camping and countryside accommodation for quiet rural breaks.',
  'sutton-on-sea':
    'Compare places to stay around Sutton-on-Sea, Mablethorpe and Trusthorpe, including coastal holiday parks, lodges, touring sites and quieter family seaside bases.',
  'chapel-st-leonards':
    'Compare places to stay around Chapel St Leonards, Ingoldmells and the Lincolnshire Coast, including caravan parks, holiday parks and beach-close family accommodation.',
};

const bestForByLocation: Record<string, string> = {
  lincoln: 'Cathedral city breaks, heritage weekends and countryside bases',
  skegness: 'Family seaside breaks, beach access and entertainment-led holidays',
  stamford: 'Weekend breaks, Burghley visits and town-and-country stays',
  louth: 'Wolds walking, market town breaks and coast access',
  boston: 'Fenland heritage, market town visits and practical regional bases',
  grantham: 'A1 stopovers, country houses and south Lincolnshire exploring',
  spalding: 'Quiet fenland breaks, spring visits and riverside exploring',
  sleaford: 'Peaceful countryside stays and central Lincolnshire access',
  mablethorpe: 'Traditional seaside holidays and quieter coastal stays',
  'woodhall-spa': 'Woodland retreats, golf, heritage and countryside breaks',
  horncastle: 'Antique browsing, Wolds walking and rural Lincolnshire stays',
  gainsborough: 'Medieval history, riverside visits and west Lincolnshire exploring',
  'market-rasen': 'Race days, Wolds walking and countryside breaks',
  bourne: 'Woodland walks, quiet rural breaks and south Lincolnshire access',
  'sutton-on-sea': 'Quiet seaside breaks and Mablethorpe-Sutton coastal stays',
  'chapel-st-leonards': 'Family caravan holidays and beach-close coastal breaks',
};

function buildFaqs(guide: CaravanParkGuide): FAQItem[] {
  return [
    {
      question: `How are places to stay in ${guide.location} selected?`,
      answer: `This guide uses researched accommodation candidates already reviewed for Lincs Staycation Guide, currently focused on practical caravan parks, holiday parks, touring sites, lodges, camping and glamping options around ${guide.location}.`,
    },
    {
      question: `Are these paid rankings for ${guide.location}?`,
      answer:
        'No. The guide is editorial and research-led. Sponsored placements will be clearly labelled if introduced in the future.',
    },
    {
      question: `Can I book these ${guide.location} stays through this site?`,
      answer:
        'Lincs Staycation Guide is not a booking platform. Where a verified official source or booking link exists, the listing links out so you can check availability directly with the provider or booking platform.',
    },
    {
      question: `Are dog-friendly stays near ${guide.location} clearly marked?`,
      answer:
        'Dog-friendly tags are shown where the researched source indicates pet-friendly or dog-friendly options. Policies can change, so always confirm directly before booking.',
    },
    {
      question: `Can accommodation owners request updates for ${guide.location}?`,
      answer:
        'Yes. Accommodation owners can use the contact or Add Your Business pages to request corrections, updates or inclusion review.',
    },
  ];
}

export const placesToStayGuides: PlacesToStayGuide[] = caravanParkGuides.map((guide) => ({
  id: guide.id,
  location: guide.location,
  slug: guide.id,
  href: `/places-to-stay/${guide.id}`,
  title: `Places to Stay in ${guide.location}`,
  h1: `Places to Stay in ${guide.location}`,
  intro: locationIntros[guide.id] ?? guide.intro,
  description: locationIntros[guide.id] ?? guide.contentAngle,
  bestFor: bestForByLocation[guide.id] ?? guide.contentAngle,
  regionType: guide.regionType,
  lastUpdated: guide.lastUpdated,
  options: guide.parks,
  sourceGuide: guide,
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
      'The guides are organised by Lincolnshire location so visitors can compare practical accommodation options around cities, coast, market towns, countryside, the Wolds and the fens.',
  },
  {
    question: 'Are these rankings or paid placements?',
    answer:
      'No. These are editorial research pages, not paid rankings. Sponsored placements will always be clearly labelled if introduced.',
  },
  {
    question: 'Can I book accommodation through this site?',
    answer:
      'No. Lincs Staycation Guide is a directory and editorial guide, not a booking platform. Verified links point to official accommodation sources or booking platforms where available.',
  },
  {
    question: 'Are dog-friendly stays clearly marked?',
    answer:
      'Dog-friendly tags are shown where researched sources mention pet-friendly or dog-friendly options. Always check directly because pet policies can change by unit, pitch type or season.',
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
