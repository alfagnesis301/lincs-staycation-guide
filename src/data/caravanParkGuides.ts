export type ListingType =
  | 'Caravan park'
  | 'Holiday park'
  | 'Touring site'
  | 'Camping'
  | 'Glamping'
  | 'Lodges'
  | 'Holiday home ownership'
  | 'Fishing'
  | 'Adults-only'
  | 'Family-friendly'
  | 'Self-catering'
  | 'Resort';

export type MonetisationType =
  | 'affiliate-ready'
  | 'business-listing'
  | 'lead-generation'
  | 'research-only';

export interface CaravanParkListing {
  id: string;
  name: string;
  bestFor: string;
  description: string;
  tags: string[];
  sourceUrl?: string;
  sourceLabel: string;
  locationContext?: string;
  isOutsideLincolnshire?: boolean;
  needsVerification?: boolean;
  listingType?: ListingType[];
  monetisationType?: MonetisationType;
  affiliateUrl?: string;
  bookingUrl?: string;
  bookingDeepLinkPending?: boolean;
  sponsored?: boolean;
  featured?: boolean;
  partnerPlacement?: boolean;
  enquiryUrl?: string;
  googleMapsUrl?: string;
  location?: {
    address?: string;
    town?: string;
    postcode?: string;
    googleMapsUrl?: string;
    googleMapsQuery?: string;
    latitude?: number;
    longitude?: number;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type RegionType = 'City' | 'Coast' | 'Market town' | 'Countryside' | 'Wolds' | 'Fens';

export interface CaravanParkGuide {
  id: string;
  location: string;
  slug: string;
  title: string;
  h1: string;
  contentAngle: string;
  intro: string;
  seoTitle: string;
  metaDescription: string;
  nearbyAreas?: string[];
  regionType: RegionType;
  parks: CaravanParkListing[];
  filters: string[];
  seoContentIdeas: string[];
  faqs: FAQItem[];
  lastUpdated: string;
  editorialNote: string;
}

const STANDARD_EDITORIAL =
  'These entries are curated options, not paid rankings. Facilities, prices, pet policies, opening dates and booking availability can change. Always check directly with each park before planning your trip.';

const STANDARD_SEO_IDEAS = (location: string) => [
  `Best caravan parks near ${location} for families`,
  `Dog-friendly caravan parks near ${location}`,
  `Quiet touring sites near ${location}`,
  `Holiday parks near ${location} with fishing`,
  `Weekend breaks near ${location}: caravans, lodges and glamping`,
];

const COMMON_FILTERS = [
  'Family-friendly',
  'Dog-friendly',
  'Touring',
  'Lodges',
  'Glamping',
  'Fishing',
  'Near beach',
  'Adults-only',
  'Hot tubs',
  'Open all year',
  'Countryside',
  'Watersports',
];

export const caravanParkGuides: CaravanParkGuide[] = [
  // ============================================================
  // 1. LINCOLN
  // ============================================================
  {
    id: 'lincoln',
    location: 'Lincoln',
    slug: 'best-caravan-parks-near-lincoln',
    title: 'Best Caravan Parks near Lincoln',
    h1: 'Best Caravan Parks near Lincoln',
    contentAngle:
      'Best for city breaks, cathedral visits, countryside walks and a practical base near the historic city centre.',
    intro:
      'Planning a caravan, lodge, touring or glamping break near Lincoln? This guide compares curated holiday park and campsite options in and around the city, including practical touring sites, peaceful countryside lodges and family-friendly bases for visiting Lincoln Cathedral, the castle and the historic quarter.',
    seoTitle: 'Best Caravan Parks near Lincoln',
    metaDescription:
      'Compare caravan parks, touring sites, lodges, glamping and holiday parks near Lincoln, Lincolnshire, including peaceful countryside options, family-friendly stays and practical bases for exploring the historic city.',
    regionType: 'City',
    nearbyAreas: ['Potterhanworth', 'Newark', 'Woodhall Spa', 'River Ancholme'],
    filters: COMMON_FILTERS,
    parks: [
      {
        id: 'hartsholme-country-park-campsite',
        name: 'Hartsholme Country Park Campsite',
        bestFor: 'Visitors who want a simple touring base inside Lincoln with country-park walks.',
        description:
          'City of Lincoln Council lists touring pitches with electric facilities, camping pods, showers, washing facilities, parking next to most units, chemical disposal and dogs allowed on leads. This is one of the strongest fits for a Lincoln city guide because it is genuinely within the city rather than a remote countryside alternative.',
        tags: ['Touring pitches', 'Camping pods', 'Dog-friendly', 'City access', 'Country park', 'Budget-friendly'],
        sourceUrl: 'https://www.lincoln.gov.uk/hartsholme-country-park/hartsholme-country-park-campsite',
        sourceLabel: 'City of Lincoln Council',
        listingType: ['Touring site', 'Camping', 'Family-friendly'],
        monetisationType: 'business-listing',
        bookingDeepLinkPending: true,
      },
      {
        id: 'hanworth-country-park',
        name: 'Hanworth Country Park',
        bestFor: 'Families and couples who want lakes, lodges, touring pitches and countryside close to Lincoln.',
        description:
          'Hanworth is described as an idyllic holiday and fishing park at Potterhanworth, around 6.5 miles from historic Lincoln. It works well as a quieter countryside setting while still being close enough for cathedral, castle and city-centre days out.',
        tags: ['Touring pitches', 'Lodges', 'Glamping pods', 'Fishing lakes', 'Family-friendly', 'Near Lincoln'],
        sourceUrl: 'https://www.hanworthcountrypark.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Holiday park', 'Touring site', 'Lodges', 'Glamping', 'Fishing', 'Family-friendly'],
        monetisationType: 'business-listing',
        bookingDeepLinkPending: true,
      },
      {
        id: 'camper-uk-leisure-park',
        name: 'Camper UK Leisure Park',
        bestFor: 'Touring caravans, motorhomes and glamping close to Lincoln and Newark.',
        description:
          'A useful touring-friendly option in the Lincoln area with motorhome and caravan pitches, rally field, fishing lake, facilities and glamping pods. Strong for visitors combining a Lincoln visit with a wider Lincolnshire or Newark itinerary.',
        tags: ['Touring', 'Motorhomes', 'Glamping pods', 'Fishing', 'Countryside', 'Practical stopover'],
        sourceUrl: 'https://www.camperukleisurepark.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Touring site', 'Glamping', 'Fishing'],
        monetisationType: 'business-listing',
        bookingDeepLinkPending: true,
      },
      {
        id: 'woodhall-country-park-lincoln',
        name: 'Woodhall Country Park',
        bestFor: 'Visitors who want a more premium woodland/lake setting within reach of Lincoln.',
        description:
          'Although better placed for Woodhall Spa, this park also markets itself to people searching for caravan parks near Lincoln and offers touring, camping, pods, glamping and lodge stays in a woodland setting. A good "near Lincoln countryside alternative" rather than a city-centre site.',
        tags: ['Touring', 'Camping', 'Lodges', 'Pods', 'Dog-friendly options', 'Fishing lakes', 'Woodland'],
        sourceUrl: 'https://woodhallcountrypark.co.uk/',
        sourceLabel: 'Official site',
        locationContext: 'Near Woodhall Spa — useful as a countryside alternative for Lincoln visitors',
        listingType: ['Holiday park', 'Touring site', 'Camping', 'Lodges', 'Glamping', 'Fishing'],
        monetisationType: 'business-listing',
        bookingDeepLinkPending: true,
      },
      {
        id: 'brandy-wharf-leisure-park',
        name: 'Brandy Wharf Leisure Park',
        bestFor: 'Simple riverside camping and caravanning north of Lincoln.',
        description:
          'A family-run riverside camping and caravan site next to the River Ancholme. Suits visitors who prefer a quiet rural base, fishing and a boating atmosphere rather than a large entertainment-led holiday park.',
        tags: ['Riverside', 'Touring', 'Tents', 'Motorhomes', 'Fishing', 'Boating', 'Peaceful'],
        sourceUrl: 'https://www.brandywharfleisurepark.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Touring site', 'Camping', 'Fishing'],
        monetisationType: 'business-listing',
        bookingDeepLinkPending: true,
      },
    ],
    seoContentIdeas: STANDARD_SEO_IDEAS('Lincoln'),
    faqs: [],
    lastUpdated: '6 May 2026',
    editorialNote: STANDARD_EDITORIAL,
  },

  // ============================================================
  // 2. SKEGNESS (full data from prompt)
  // ============================================================
  {
    id: 'skegness',
    location: 'Skegness',
    slug: 'best-caravan-parks-near-skegness',
    title: 'Best Caravan Parks near Skegness',
    h1: 'Best Caravan Parks near Skegness',
    contentAngle:
      'Best for classic Lincolnshire seaside holidays, family caravan breaks, coastal entertainment, touring, glamping, dog-friendly stays and easy access to Skegness, Ingoldmells and Chapel St Leonards.',
    intro:
      'Planning a caravan, lodge, touring or glamping break near Skegness? This guide compares curated holiday park and campsite options around Skegness, Ingoldmells, Chapel St Leonards and the wider Lincolnshire Coast. Use it to compare family-friendly parks, beach-close bases, touring sites, dog-friendly options, entertainment-led resorts and quieter countryside alternatives.',
    seoTitle: 'Best Caravan Parks near Skegness',
    metaDescription:
      'Compare some of the best caravan parks near Skegness, including family-friendly holiday parks, touring sites, lodges, glamping, dog-friendly stays and coastal parks around Ingoldmells, Chapel St Leonards and the Lincolnshire Coast.',
    regionType: 'Coast',
    nearbyAreas: ['Ingoldmells', 'Chapel St Leonards', 'Burgh-le-Marsh'],
    filters: COMMON_FILTERS,
    parks: [
      {
        id: 'skegness-holiday-park-haven',
        name: 'Skegness Holiday Park — Haven',
        bestFor: 'Families who want a holiday park close to Skegness town, beach, seafront attractions and local facilities.',
        description:
          'Skegness Holiday Park is a strong fit for visitors who want to stay close to Skegness itself rather than further along the coast. Useful for family seaside breaks, access to the beach, the pier, amusements, restaurants and classic Skegness attractions.',
        tags: ['Family-friendly', 'Near town', 'Near beach', 'Caravans', 'Skegness', 'Seaside break', 'Entertainment'],
        sourceUrl: 'https://www.haven.com/parks/lincolnshire/skegness-holiday-park',
        sourceLabel: 'Haven (official)',
        listingType: ['Holiday park', 'Caravan park', 'Family-friendly'],
        monetisationType: 'affiliate-ready',
        featured: true,
      },
      {
        id: 'southview-holiday-park-parkdean',
        name: 'Southview Holiday Park — Parkdean Resorts',
        bestFor: 'Families who want a larger holiday park with facilities, accommodation variety and a well-known resort-style setup.',
        description:
          'One of the key Skegness-area options for families looking for a larger park with a range of accommodation. Useful for visitors comparing caravans, lodges, touring options, facilities and dog-friendly availability.',
        tags: ['Family-friendly', 'Dog-friendly options', 'Lodges', 'Caravans', 'Touring', 'Restaurant', 'Facilities', 'Near Skegness'],
        sourceUrl: 'https://www.parkdeanresorts.co.uk/location/east-anglia-lincolnshire/southview/',
        sourceLabel: 'Parkdean Resorts (official)',
        listingType: ['Holiday park', 'Caravan park', 'Lodges', 'Touring site', 'Family-friendly'],
        monetisationType: 'affiliate-ready',
        featured: true,
      },
      {
        id: 'north-shore-holiday-park',
        name: 'North Shore Holiday Park',
        bestFor: 'Visitors who want access to Skegness town, the beach, Skegness Pier and a practical coastal base.',
        description:
          'Useful for readers who want to stay close to Skegness without being too far from the beach and seafront attractions. Works for families, couples and touring visitors looking for a convenient location with holiday accommodation and touring-style options.',
        tags: ['Near beach', 'Near Skegness Pier', 'Family-friendly', 'Touring', 'Glamping', 'Entertainment', 'Coastal base'],
        sourceUrl: 'https://www.coastfields.co.uk/locations/north-shore-holiday-park',
        sourceLabel: 'Coastfields (official)',
        listingType: ['Holiday park', 'Caravan park', 'Touring site', 'Glamping', 'Family-friendly'],
        monetisationType: 'business-listing',
      },
      {
        id: 'coastfields-holiday-village-ingoldmells',
        name: 'Coastfields Holiday Village — Ingoldmells',
        bestFor: 'Families who want a lively coastal holiday park near Ingoldmells, Fantasy Island and the beach.',
        description:
          'A strong option for visitors comparing Skegness and Ingoldmells holiday parks. Useful for family holidays, entertainment-led breaks, beach access and visitors who want to be close to Fantasy Island and the busier stretch of the Lincolnshire Coast.',
        tags: ['Ingoldmells', 'Near Fantasy Island', 'Family-friendly', 'Entertainment', 'Near beach', 'Caravans', 'Lodges'],
        sourceUrl: 'https://www.coastfields.co.uk/locations/coastfields-holiday-village',
        sourceLabel: 'Coastfields (official)',
        locationContext: 'Ingoldmells (north of Skegness)',
        listingType: ['Holiday park', 'Caravan park', 'Lodges', 'Family-friendly'],
        monetisationType: 'business-listing',
      },
      {
        id: 'golden-palm-resort-chapel',
        name: 'Golden Palm Resort — Chapel St Leonards',
        bestFor: 'Family caravan holidays with entertainment, pool facilities and easy access to Chapel St Leonards.',
        description:
          'One of the strongest Chapel St Leonards options and also relevant for Skegness-area searches. Works well for families looking for entertainment, self-catering caravans, indoor pool facilities and a seaside holiday atmosphere slightly north of Skegness.',
        tags: ['Chapel St Leonards', 'Family-friendly', 'Pool', 'Entertainment', 'Caravans', 'Near beach', 'Arcade'],
        sourceUrl: 'https://goldenpalmresort.co.uk/',
        sourceLabel: 'Official site',
        locationContext: 'Chapel St Leonards (north of Skegness)',
        listingType: ['Holiday park', 'Caravan park', 'Family-friendly'],
        monetisationType: 'business-listing',
      },
      {
        id: 'skegness-water-leisure-park',
        name: 'Skegness Water Leisure Park',
        bestFor: 'Touring, camping, glamping, fishing and pet-friendly breaks between Skegness and Ingoldmells.',
        description:
          'A useful option for visitors who want more than a standard static caravan holiday. Fits touring, camping, glamping, fishing-focused breaks and pet-friendly travel. A practical and flexible Skegness-area choice.',
        tags: ['Touring', 'Camping', 'Glamping', 'Fishing lakes', 'Pet-friendly', 'Family-friendly', 'Between Skegness and Ingoldmells'],
        sourceUrl: 'https://skegnesswaterleisurepark.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Touring site', 'Camping', 'Glamping', 'Fishing', 'Family-friendly'],
        monetisationType: 'business-listing',
      },
      {
        id: 'richmond-holiday-centre',
        name: 'Richmond Holiday Centre',
        bestFor: 'Families who want a traditional Skegness holiday base close to beaches, funfairs and local attractions.',
        description:
          'A useful Skegness-area listing for visitors looking for self-catering holiday homes and a classic family seaside holiday. A practical base for beaches, attractions and traditional Skegness days out.',
        tags: ['Family-friendly', 'Near beach', 'Near attractions', 'Self-catering', 'Skegness', 'Holiday homes'],
        sourceUrl: 'https://www.visitlincolnshire.com/places-to-stay/richmond-holiday-park/',
        sourceLabel: 'Visit Lincolnshire',
        listingType: ['Holiday park', 'Caravan park', 'Family-friendly'],
        monetisationType: 'business-listing',
      },
      {
        id: 'the-chase-holiday-park-ingoldmells',
        name: 'The Chase Holiday Park — Ingoldmells',
        bestFor: 'Families who want to stay near Ingoldmells, Fantasy Island, beach attractions and the livelier coastal strip.',
        description:
          'Relevant for Skegness visitors comparing Ingoldmells and Chapel St Leonards options. Works especially well for readers who want beach access, family attractions, caravan accommodation and proximity to Fantasy Island.',
        tags: ['Ingoldmells', 'Near Fantasy Island', 'Near beach', 'Family-friendly', 'Caravans', 'Lively area'],
        sourceUrl: 'https://blueanchorleisure.co.uk/park/chase-holiday-park-ingoldmells',
        sourceLabel: 'Blue Anchor Leisure',
        locationContext: 'Ingoldmells',
        listingType: ['Holiday park', 'Caravan park', 'Family-friendly'],
        monetisationType: 'business-listing',
      },
      {
        id: 'ingoldale-holiday-park',
        name: 'Ingoldale Holiday Park',
        bestFor: 'Budget-conscious visitors and families looking for self-catering accommodation near Ingoldmells beach.',
        description:
          'A useful pick for readers looking for self-catering accommodation near Ingoldmells and Skegness. Positioned for budget-friendly stays, family breaks, beach access and practical accommodation close to shops, amusements and entertainment venues.',
        tags: ['Budget-friendly', 'Self-catering', 'Ingoldmells', 'Near beach', 'Family-friendly', 'Accessible options'],
        sourceUrl: 'https://countryandcoastalholidays.co.uk/ingoldale-holiday-park-skegness/',
        sourceLabel: 'Country & Coastal Holidays',
        locationContext: 'Ingoldmells',
        listingType: ['Holiday park', 'Caravan park', 'Self-catering', 'Family-friendly'],
        monetisationType: 'business-listing',
      },
      {
        id: 'skegness-sands-touring-camping',
        name: 'Skegness Sands Touring & Camping',
        bestFor: 'Touring caravans, motorhomes and visitors who want a dedicated touring/camping option near Skegness.',
        description:
          'A strong fit for touring-focused readers. Recommended for visitors travelling with caravans or motorhomes and looking for hardstanding pitches, touring facilities and year-round or seasonal touring options near Skegness.',
        tags: ['Touring', 'Motorhomes', 'Hardstanding pitches', 'Open all year', 'Camping', 'Practical base'],
        sourceUrl: 'https://www.caravanclub.co.uk/club-sites/england/east-midlands/lincolnshire/skegness-sands/',
        sourceLabel: 'Caravan and Motorhome Club',
        listingType: ['Touring site', 'Camping'],
        monetisationType: 'business-listing',
      },
      {
        id: 'sycamore-lakes-burgh',
        name: 'Sycamore Lakes Holiday Park — Burgh-le-Marsh',
        bestFor: 'Quiet fishing, countryside breaks and lodge or touring stays close to Skegness.',
        description:
          'A quieter alternative to the busier seaside parks. Fits readers who want fishing lakes, countryside surroundings, touring, lodges, cottages or a more relaxed base within reach of Skegness.',
        tags: ['Fishing lakes', 'Countryside', 'Quiet retreat', 'Lodges', 'Touring', 'Camping', 'Near Skegness'],
        sourceUrl: 'https://sycamorelakes.co.uk/',
        sourceLabel: 'Official site',
        locationContext: 'Burgh-le-Marsh (inland from Skegness)',
        listingType: ['Holiday park', 'Touring site', 'Camping', 'Lodges', 'Fishing'],
        monetisationType: 'business-listing',
      },
      {
        id: 'sycamore-farm-holiday-park',
        name: 'Sycamore Farm Holiday Park',
        bestFor: 'Countryside stays, touring, camping and caravan holidays within reach of Skegness.',
        description:
          'A useful countryside option for visitors who want access to Skegness without staying directly in the busiest resort areas. Supports searches for touring, camping, static caravans, cottages and quieter rural breaks near the coast.',
        tags: ['Countryside', 'Touring', 'Camping', 'Caravan holidays', 'Peaceful stay', 'Near Skegness'],
        sourceUrl: 'https://countryandcoastalholidays.co.uk/sycamore-farm-holiday-park-lincolnshire/',
        sourceLabel: 'Country & Coastal Holidays',
        listingType: ['Holiday park', 'Touring site', 'Camping', 'Caravan park'],
        monetisationType: 'business-listing',
      },
      {
        id: 'butlins-skegness',
        name: 'Butlin’s Skegness Caravan Village',
        bestFor: 'Families who want a full resort-style experience with entertainment and caravan accommodation.',
        description:
          'Included as a special mention because it is more resort-led than a traditional standalone caravan park. Useful for families who want entertainment, activities and a complete holiday resort setup near Ingoldmells and Skegness.',
        tags: ['Resort', 'Family entertainment', 'Caravan village', 'Ingoldmells', 'Activities', 'Family-friendly'],
        sourceUrl: 'https://www.butlins.com/resorts/skegness',
        sourceLabel: 'Butlin’s (official)',
        locationContext: 'Ingoldmells',
        listingType: ['Holiday park', 'Caravan park', 'Family-friendly', 'Resort'],
        monetisationType: 'affiliate-ready',
      },
    ],
    seoContentIdeas: STANDARD_SEO_IDEAS('Skegness'),
    faqs: [],
    lastUpdated: '6 May 2026',
    editorialNote:
      'These entries are curated options, not paid rankings. Facilities, prices, pet policies, opening dates and booking availability can change. Always check directly with each park before planning your trip.',
  },

  // ============================================================
  // 3. STAMFORD
  // ============================================================
  {
    id: 'stamford',
    location: 'Stamford',
    slug: 'best-caravan-parks-near-stamford',
    title: 'Best Caravan Parks near Stamford',
    h1: 'Best Caravan Parks near Stamford',
    contentAngle:
      'Best for Georgian town breaks, Burghley House, Rutland Water, A1 stopovers and countryside weekends.',
    intro:
      'Planning a caravan, lodge, touring or glamping break near Stamford? Compare curated options around Stamford’s Georgian streets, Burghley House, Rutland Water and the A1 corridor, including lakeside parks, adults-only farm-shop sites and family-focused glamping.',
    seoTitle: 'Best Caravan Parks near Stamford',
    metaDescription:
      'Compare caravan parks, touring sites, lodges, glamping and holiday parks near Stamford, Lincolnshire, including Tallington Lakes, Rutland-area touring and quiet countryside stays.',
    regionType: 'Market town',
    nearbyAreas: ['Tallington', 'Greetham', 'Rutland Water', 'A1 corridor'],
    filters: COMMON_FILTERS,
    parks: [
      {
        id: 'tallington-lakes',
        name: 'Tallington Lakes Leisure Park',
        bestFor: 'Families and active travellers who want lakeside activities near Stamford.',
        description:
          'Tallington Lakes has camping and caravanning facilities, touring pitches, a lakeside bar and restaurant, entertainment, water sports and leisure facilities. One of the most natural choices for a Stamford-focused caravan and holiday park page.',
        tags: ['Touring', 'Camping', 'Lakeside', 'Watersports', 'Family-friendly', 'Restaurant'],
        sourceUrl: 'https://www.tallington.com/',
        sourceLabel: 'Official site',
        listingType: ['Holiday park', 'Touring site', 'Camping', 'Family-friendly'],
        monetisationType: 'business-listing',
        featured: true,
      },
      {
        id: 'rutland-caravan-and-camping',
        name: 'Rutland Caravan and Camping',
        bestFor: 'Touring caravans and motorhomes exploring Stamford, Rutland and the A1 corridor.',
        description:
          'Located at Greetham, north of Stamford, this family-run site is open all year and works well for visitors who want Stamford plus Rutland Water, village pubs, walking and cycling. The Caravan and Motorhome Club describes it as open to members and non-members.',
        tags: ['Touring', 'Motorhomes', 'Open all year', 'Dog facilities', 'Rutland Water', 'Walking'],
        sourceUrl: 'https://www.rutlandcaravanandcamping.co.uk/',
        sourceLabel: 'Official site',
        locationContext: 'Greetham (north of Stamford, on the Rutland border)',
        listingType: ['Touring site', 'Camping'],
        monetisationType: 'business-listing',
      },
      {
        id: 'stamford-meadows-glamping',
        name: 'Stamford Meadows Glamping',
        bestFor: 'Couples and visitors who prefer glamping close to Stamford town.',
        description:
          'Not a traditional caravan park, but an excellent Stamford accommodation option. Offers a town-and-country glamping feel, yurts/cabin/campervan options and private hot tub style stays close to Stamford Meadows.',
        tags: ['Glamping', 'Hot tubs', 'Dog-friendly', 'Couples', 'Town access', 'Premium escape'],
        sourceUrl: 'https://stamfordmeadowsglamping.com/',
        sourceLabel: 'Official site',
        listingType: ['Glamping'],
        monetisationType: 'business-listing',
      },
      {
        id: 'sacrewell-camping-caravanning',
        name: 'Sacrewell Camping and Caravanning',
        bestFor: 'Families combining Stamford with a farm attraction and easy A1 access.',
        description:
          'Sacrewell offers camping and caravanning and is especially useful for family-focused pages because the farm attraction adds a built-in day-out angle. A good inclusion for "near Stamford with children" content.',
        tags: ['Camping', 'Caravanning', 'Family attraction', 'Farm', 'Near A1', 'Children'],
        sourceUrl: 'https://www.sacrewell.org.uk/camping-and-caravanning/',
        sourceLabel: 'Sacrewell (official)',
        listingType: ['Touring site', 'Camping', 'Family-friendly'],
        monetisationType: 'business-listing',
      },
      {
        id: 'new-lodge-farm-stamford',
        name: 'New Lodge Farm Caravan and Camping',
        bestFor: 'Adults-only touring, farm shop breaks and quiet countryside stays near Stamford.',
        description:
          'New Lodge Farm provides touring pitches for caravans and motorhomes, with hardstanding and grass options. Especially useful for a premium/adults-only or food-and-farm-shop angle near Stamford and Rutland.',
        tags: ['Adults-only', 'Touring', 'Motorhomes', 'Farm shop', 'Restaurant', 'Dog-friendly'],
        sourceUrl: 'https://www.newlodgefarm.co.uk/New-Lodge-Farm-Touring',
        sourceLabel: 'Official site',
        listingType: ['Touring site', 'Camping', 'Adults-only'],
        monetisationType: 'business-listing',
      },
    ],
    seoContentIdeas: STANDARD_SEO_IDEAS('Stamford'),
    faqs: [],
    lastUpdated: '6 May 2026',
    editorialNote: STANDARD_EDITORIAL,
  },

  // ============================================================
  // 4. LOUTH
  // ============================================================
  {
    id: 'louth',
    location: 'Louth',
    slug: 'best-caravan-parks-near-louth',
    title: 'Best Caravan Parks near Louth',
    h1: 'Best Caravan Parks near Louth',
    contentAngle:
      'Best for Lincolnshire Wolds walking, Georgian market town stays, coastal access and quiet countryside retreats.',
    intro:
      'Planning a caravan, lodge, touring or glamping break near Louth? Compare curated options across the Lincolnshire Wolds and nearby coast, including lodge estates, adults-only Wolds parks, family-friendly coastal sites and simple countryside touring.',
    seoTitle: 'Best Caravan Parks near Louth',
    metaDescription:
      'Compare caravan parks, touring sites, lodges, glamping and holiday parks near Louth, Lincolnshire, including Wolds adults-only retreats, premium lodges and coastal alternatives towards Mablethorpe.',
    regionType: 'Wolds',
    nearbyAreas: ['Mablethorpe', 'Lincolnshire Wolds'],
    filters: COMMON_FILTERS,
    parks: [
      {
        id: 'kenwick-park-estate',
        name: 'Kenwick Park Estate',
        bestFor: 'Lodge-style countryside breaks just outside Louth.',
        description:
          'Kenwick Park Estate sits in rolling Lincolnshire countryside near Louth and offers lodge accommodation alongside hotel, leisure and golf facilities. Not a touring caravan park, but highly relevant for "holiday parks near Louth" and premium self-catering stays.',
        tags: ['Lodges', 'Countryside', 'Golf', 'Spa/leisure', 'Near Louth', 'Premium'],
        sourceUrl: 'https://www.awayresorts.co.uk/parks/lincolnshire/kenwick-park/',
        sourceLabel: 'Away Resorts (official)',
        listingType: ['Holiday park', 'Lodges'],
        monetisationType: 'affiliate-ready',
        featured: true,
      },
      {
        id: 'sunnydale-holiday-park',
        name: 'Sunnydale Holiday Park',
        bestFor: 'Families wanting a coastal holiday park within reach of Louth.',
        description:
          'Sunnydale is on the Lincolnshire coast near Mablethorpe and works well for Louth visitors who want to combine a Wolds market town with seaside days. Parkdean describes it as a quieter coastal base with dog-friendly appeal.',
        tags: ['Caravans', 'Lodges', 'Touring', 'Dog-friendly', 'Coast', 'Family-friendly'],
        sourceUrl: 'https://www.parkdeanresorts.co.uk/location/east-anglia-lincolnshire/sunnydale/',
        sourceLabel: 'Parkdean Resorts (official)',
        locationContext: 'Near Mablethorpe',
        listingType: ['Holiday park', 'Caravan park', 'Lodges', 'Touring site', 'Family-friendly'],
        monetisationType: 'affiliate-ready',
      },
      {
        id: 'grange-leisure-park-louth',
        name: 'Grange Leisure Park',
        bestFor: 'Visitors who want facilities, entertainment, fishing lakes and Mablethorpe beach access.',
        description:
          'A Coastfields park in Mablethorpe with restaurant, bar, show bar, arcade, supermarket, fishing lakes and golf course setting. A strong coastal option for Louth and Wolds visitors.',
        tags: ['Caravans', 'Lodges', 'Touring', 'Fishing lakes', 'Golf', 'Entertainment', 'Near beach'],
        sourceUrl: 'https://www.coastfields.co.uk/locations/grange-leisure-park',
        sourceLabel: 'Coastfields (official)',
        locationContext: 'Mablethorpe',
        listingType: ['Holiday park', 'Caravan park', 'Lodges', 'Touring site', 'Fishing'],
        monetisationType: 'business-listing',
      },
      {
        id: 'wolds-view-country-park',
        name: 'Wolds View Country Park',
        bestFor: 'Adults seeking a peaceful Lincolnshire Wolds touring and glamping stay.',
        description:
          'Wolds View Country Park is adults-only and focused on tranquil touring and glamping in the Lincolnshire Wolds. A strong editorial fit for visitors using Louth as a base for walking, villages and scenery.',
        tags: ['Adults-only', 'Touring', 'Glamping', 'Lincolnshire Wolds', 'Peaceful', 'Dog-friendly'],
        sourceUrl: 'https://www.woldsviewcountrypark.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Touring site', 'Glamping', 'Adults-only'],
        monetisationType: 'business-listing',
      },
      {
        id: 'wolds-camping-and-caravan',
        name: 'The Wolds Camping and Caravan Site',
        bestFor: 'Straightforward countryside camping and caravanning in the Lincolnshire Wolds.',
        description:
          'Positions itself in the heart of the Lincolnshire Wolds with the east coast less than 20 miles away. A useful listing for readers looking for practical touring or camping rather than resort-style entertainment.',
        tags: ['Camping', 'Caravanning', 'Wolds', 'Countryside', 'Coast access', 'Simple stay'],
        sourceUrl: 'https://www.woldscampingandcaravan.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Touring site', 'Camping'],
        monetisationType: 'business-listing',
      },
    ],
    seoContentIdeas: STANDARD_SEO_IDEAS('Louth'),
    faqs: [],
    lastUpdated: '6 May 2026',
    editorialNote: STANDARD_EDITORIAL,
  },

  // ============================================================
  // 5. BOSTON
  // ============================================================
  {
    id: 'boston',
    location: 'Boston',
    slug: 'best-caravan-parks-near-boston',
    title: 'Best Caravan Parks near Boston',
    h1: 'Best Caravan Parks near Boston',
    contentAngle:
      'Best for market town breaks, fishing lodges, countryside retreats and access to The Wash and South Lincolnshire.',
    intro:
      'Planning a caravan, lodge, touring or fishing break near Boston? Compare curated options including premium lodges, hot-tub stays, adults-only fishing parks and quiet countryside touring sites within reach of Boston, The Wash and South Lincolnshire.',
    seoTitle: 'Best Caravan Parks near Boston',
    metaDescription:
      'Compare caravan parks, touring sites, lodges, glamping and holiday parks near Boston, Lincolnshire, including hot-tub lodges, fishing-focused stays and adults-only countryside parks.',
    regionType: 'Fens',
    nearbyAreas: ['Hubbert’s Bridge', 'Spalding', 'The Wash'],
    filters: COMMON_FILTERS,
    parks: [
      {
        id: 'appletree-holiday-park',
        name: 'Appletree Holiday Park',
        bestFor: 'Hot tub lodge stays, golf and relaxed countryside close to Boston.',
        description:
          'Appletree Holiday Park is set at Hubbert’s Bridge near Boston and has countryside, hotel and golf-course appeal. Away Resorts describes it as a quiet location for hot tub relaxation, leisurely dining and exploring Lincolnshire.',
        tags: ['Lodges', 'Hot tubs', 'Golf', 'Countryside', 'Family-friendly', 'Restaurant'],
        sourceUrl: 'https://www.awayresorts.co.uk/parks/lincolnshire/appletree/',
        sourceLabel: 'Away Resorts (official)',
        locationContext: 'Hubbert’s Bridge (near Boston)',
        listingType: ['Holiday park', 'Lodges', 'Family-friendly'],
        monetisationType: 'affiliate-ready',
        featured: true,
      },
      {
        id: 'westwood-lakes',
        name: 'Westwood Lakes',
        bestFor: 'Fishing holidays and luxury lodge stays on the edge of Boston.',
        description:
          'A strong Boston listing with seven fishing lakes, luxury lodges, restaurant, coffee bar and tackle shop. Ideal for fishing breaks near Boston and peaceful lodge content.',
        tags: ['Fishing lakes', 'Lodges', 'Restaurant', 'Coffee bar', 'Peaceful', 'Family-friendly'],
        sourceUrl: 'https://www.westwoodlakes.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Holiday park', 'Lodges', 'Fishing'],
        monetisationType: 'business-listing',
      },
      {
        id: 'walnut-lakes-boston',
        name: 'Walnut Lakes Fishing and Caravan Park',
        bestFor: 'Adults-only touring, lodges and fishing near Boston and Spalding.',
        description:
          'Visit Lincolnshire describes Walnut Lakes as a touring caravan park with self-catering lodges and fishing lakes in countryside, with dog-friendly touring and local amenities nearby. Useful for adult, dog-friendly and fishing subcategories.',
        tags: ['Adults-only', 'Touring', 'Lodges', 'Fishing', 'Dog-friendly touring', 'Peaceful'],
        sourceUrl: 'https://www.visitlincolnshire.com/places-to-stay/walnut-lakes/',
        sourceLabel: 'Visit Lincolnshire',
        listingType: ['Touring site', 'Lodges', 'Fishing', 'Adults-only'],
        monetisationType: 'business-listing',
      },
      {
        id: 'oak-tree-holiday-park-fishery',
        name: 'Oak Tree Holiday Park and Fishery',
        bestFor: 'Adults-only touring, seasonal pitches and fishing near Boston.',
        description:
          'An adults-only retreat in the countryside close to Boston, aimed at touring guests, seasonal visitors and anglers. A quieter alternative to large coastal parks.',
        tags: ['Adults-only', 'Touring', 'Seasonal pitches', 'Fishing', 'Quiet countryside', 'Near Boston'],
        sourceUrl: 'https://oaktree-holidaypark.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Touring site', 'Fishing', 'Adults-only'],
        monetisationType: 'business-listing',
      },
      {
        id: 'orchard-holiday-park',
        name: 'Orchard Holiday Park',
        bestFor: 'Touring, static hire and adults-focused breaks near Hubbert’s Bridge.',
        description:
          'Orchard Holiday Park is based at Hubbert’s Bridge near Boston and lists touring, camping and holiday park facilities. Useful for visitors looking for a rural base just outside the town.',
        tags: ['Touring', 'Tents', 'Motorhomes', 'Static caravans', 'Rural', 'Near Boston'],
        sourceUrl: 'https://www.orchardpark.co.uk/',
        sourceLabel: 'Official site',
        locationContext: 'Hubbert’s Bridge',
        listingType: ['Holiday park', 'Touring site', 'Camping', 'Caravan park'],
        monetisationType: 'business-listing',
      },
    ],
    seoContentIdeas: STANDARD_SEO_IDEAS('Boston'),
    faqs: [],
    lastUpdated: '6 May 2026',
    editorialNote: STANDARD_EDITORIAL,
  },

  // ============================================================
  // 6. GRANTHAM
  // ============================================================
  {
    id: 'grantham',
    location: 'Grantham',
    slug: 'best-caravan-parks-near-grantham',
    title: 'Best Caravan Parks near Grantham',
    h1: 'Best Caravan Parks near Grantham',
    contentAngle:
      'Best for A1 stopovers, Belton House, country-park breaks and visitors crossing between Lincolnshire, Rutland and Nottinghamshire.',
    intro:
      'Planning a caravan, touring or lodge break near Grantham? Compare curated options including peaceful family-run countryside parks, A1-friendly touring sites and nearby Rutland and Newark alternatives for visitors exploring the Grantham area.',
    seoTitle: 'Best Caravan Parks near Grantham',
    metaDescription:
      'Compare caravan parks, touring sites, lodges and holiday parks near Grantham, including Wagtail Country Park, Rutland and A1-corridor touring sites.',
    regionType: 'Countryside',
    nearbyAreas: ['Marston', 'Newark', 'Rutland', 'A1 corridor'],
    filters: COMMON_FILTERS,
    parks: [
      {
        id: 'wagtail-country-park',
        name: 'Wagtail Country Park',
        bestFor: 'Touring caravans, motorhomes, lodges and fishing near Grantham.',
        description:
          'One of the strongest Grantham-area choices. Family-run, open all year and positioned in peaceful Lincolnshire countryside with dog-friendly appeal and fishing lakes.',
        tags: ['Touring', 'Motorhomes', 'Lodges', 'Open all year', 'Dog-friendly', 'Fishing'],
        sourceUrl: 'https://wagtailcountrypark.co.uk/wagtail-country-park-2/',
        sourceLabel: 'Official site',
        listingType: ['Holiday park', 'Touring site', 'Lodges', 'Fishing'],
        monetisationType: 'business-listing',
        featured: true,
      },
      {
        id: 'rutland-cc-grantham',
        name: 'Rutland Caravan and Camping',
        bestFor: 'Visitors combining Grantham with Stamford, Rutland and the A1.',
        description:
          'North of Stamford and south of Grantham, this family-run site is open all year and works well for touring visitors who want a high-quality base near villages, walking and Rutland Water.',
        tags: ['Touring', 'Open all year', 'Family areas', 'Adults-only areas', 'Dog facilities', 'Rutland'],
        sourceUrl: 'https://www.rutlandcaravanandcamping.co.uk/',
        sourceLabel: 'Official site',
        locationContext: 'Greetham (Rutland border)',
        listingType: ['Touring site', 'Camping'],
        monetisationType: 'business-listing',
      },
      {
        id: 'tallington-lakes-grantham',
        name: 'Tallington Lakes Leisure Park',
        bestFor: 'Active families and lakeside holidaymakers within reach of Grantham.',
        description:
          'Better known for Stamford and Bourne, but can also serve Grantham visitors who want more facilities and watersports. Best used as a "within driving distance" option rather than a Grantham town site.',
        tags: ['Touring', 'Camping', 'Watersports', 'Family-friendly', 'Restaurant', 'Lake activities'],
        sourceUrl: 'https://www.tallington.com/',
        sourceLabel: 'Official site',
        locationContext: 'Tallington — within driving distance of Grantham',
        listingType: ['Holiday park', 'Touring site', 'Camping', 'Family-friendly'],
        monetisationType: 'business-listing',
      },
      {
        id: 'milestone-caravan-park',
        name: 'Milestone Caravan Park',
        bestFor: 'Touring guests willing to cross into nearby Nottinghamshire for a highly equipped site.',
        description:
          'Near Newark, outside Lincolnshire but useful for Grantham/A1 searches. Touring pitches, open all year and marketed as a five-star touring park with electric hook-ups.',
        tags: ['Touring', 'Open all year', 'Hardstanding', 'Near Newark', 'A1 access', 'Peaceful'],
        sourceUrl: 'https://www.milestonepark.co.uk/award-winning-caravan-park/',
        sourceLabel: 'Official site',
        locationContext: 'Near Newark, Nottinghamshire',
        isOutsideLincolnshire: true,
        listingType: ['Touring site', 'Camping'],
        monetisationType: 'business-listing',
      },
      {
        id: 'new-lodge-farm-grantham',
        name: 'New Lodge Farm Caravan and Camping',
        bestFor: 'Adults-only countryside touring with farm shop and restaurant appeal.',
        description:
          'Not in Grantham, but a useful South Lincolnshire/Rutland-border option for visitors seeking adult touring, dog-friendly facilities, food and farm-shop style stays.',
        tags: ['Adults-only', 'Touring', 'Motorhomes', 'Farm shop', 'Restaurant', 'Dog-friendly'],
        sourceUrl: 'https://www.newlodgefarm.co.uk/New-Lodge-Farm-Touring',
        sourceLabel: 'Official site',
        locationContext: 'South Lincolnshire / Rutland border',
        listingType: ['Touring site', 'Adults-only'],
        monetisationType: 'business-listing',
      },
    ],
    seoContentIdeas: STANDARD_SEO_IDEAS('Grantham'),
    faqs: [],
    lastUpdated: '6 May 2026',
    editorialNote: STANDARD_EDITORIAL,
  },

  // ============================================================
  // 7. SPALDING
  // ============================================================
  {
    id: 'spalding',
    location: 'Spalding',
    slug: 'best-caravan-parks-near-spalding',
    title: 'Best Caravan Parks near Spalding',
    h1: 'Best Caravan Parks near Spalding',
    contentAngle:
      'Best for tulip-country breaks, peaceful Fens countryside, adults-only touring, lodge/golf stays and fishing-focused holidays.',
    intro:
      'Planning a caravan, touring or lodge break near Spalding? Compare curated options across the South Lincolnshire Fens, including adults-only touring, fishing lakes, luxury lodge estates and rural caravan and motorhome bases.',
    seoTitle: 'Best Caravan Parks near Spalding',
    metaDescription:
      'Compare caravan parks, touring sites, lodges and holiday parks near Spalding, Lincolnshire, including adults-only Fens touring, fishing parks and lodge ownership estates.',
    regionType: 'Fens',
    nearbyAreas: ['Holbeach', 'Long Sutton', 'Cambridgeshire border'],
    filters: COMMON_FILTERS,
    parks: [
      {
        id: 'delph-bank',
        name: 'Delph Bank Touring Caravan Park',
        bestFor: 'Adults-only touring in the heart of the Fens.',
        description:
          'An adults-only touring park near Spalding/Holbeach, open all year. A natural fit for a Spalding guide because it has a calm Fens setting and a stronger "quiet escape" angle than resort-style parks.',
        tags: ['Adults-only', 'Touring', 'Open all year', 'Fens', 'Peaceful', 'Dog-friendly'],
        sourceUrl: 'https://www.delphbank.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Touring site', 'Adults-only'],
        monetisationType: 'business-listing',
        featured: true,
      },
      {
        id: 'lawns-and-lakes',
        name: 'The Lawns and Lakes Camping Site',
        bestFor: 'Dog-friendly camping and caravanning with fishing lakes near Spalding.',
        description:
          'At Lowgate, Fleet near Spalding. Offers countryside pitches, fishing lakes and dog-friendly appeal. A useful listing for practical Spalding touring searches.',
        tags: ['Camping', 'Caravanning', 'Fishing lakes', 'Dog-friendly', 'Countryside', 'Spalding'],
        sourceUrl: 'https://lawnsandlakes.co.uk/',
        sourceLabel: 'Official site',
        locationContext: 'Lowgate, Fleet (near Spalding)',
        listingType: ['Touring site', 'Camping', 'Fishing'],
        monetisationType: 'business-listing',
      },
      {
        id: 'tydd-st-giles',
        name: 'Tydd St Giles Golf and Country Club',
        bestFor: 'Luxury lodge owners and golf/leisure breaks near the Lincolnshire/Cambridgeshire border.',
        description:
          'A lodge and holiday home estate built around an 18-hole golf course. More ownership/lodge-focused than touring, but useful for premium Spalding-area holiday park content.',
        tags: ['Luxury lodges', 'Golf', 'Leisure', 'Fishing', 'Countryside', 'Border location'],
        sourceUrl: 'https://www.pure-leisure.co.uk/parks/tydd-st-giles-golf-and-country-club/',
        sourceLabel: 'Pure Leisure (official)',
        locationContext: 'Lincolnshire / Cambridgeshire border',
        listingType: ['Holiday park', 'Lodges', 'Holiday home ownership'],
        monetisationType: 'business-listing',
      },
      {
        id: 'homefields-park',
        name: 'Homefields Park',
        bestFor: 'Rural caravan and motorhome stays near Long Sutton, Holbeach and Spalding.',
        description:
          'A caravan and camping site in the Fens, close to Long Sutton, Holbeach and Spalding. Works well for readers looking for a small rural site rather than coastal entertainment.',
        tags: ['Caravans', 'Motorhomes', 'Rural', 'Fens', 'Animals', 'Peaceful'],
        sourceUrl: 'https://www.homefieldspark.co.uk/',
        sourceLabel: 'Official site',
        locationContext: 'Near Long Sutton / Holbeach',
        listingType: ['Touring site', 'Camping', 'Caravan park'],
        monetisationType: 'business-listing',
      },
      {
        id: 'walnut-lakes-spalding',
        name: 'Walnut Lakes Fishing and Caravan Park',
        bestFor: 'Adults-only fishing, touring and lodge stays between Spalding and Boston.',
        description:
          'A useful cross-over listing for South Lincolnshire. Especially useful where Spalding users search for adult-only, dog-friendly touring or fishing-focused breaks.',
        tags: ['Adults-only', 'Touring', 'Fishing', 'Lodges', 'Dog-friendly touring', 'Peaceful'],
        sourceUrl: 'https://www.visitlincolnshire.com/places-to-stay/walnut-lakes/',
        sourceLabel: 'Visit Lincolnshire',
        locationContext: 'Between Spalding and Boston',
        listingType: ['Touring site', 'Lodges', 'Fishing', 'Adults-only'],
        monetisationType: 'business-listing',
      },
    ],
    seoContentIdeas: STANDARD_SEO_IDEAS('Spalding'),
    faqs: [],
    lastUpdated: '6 May 2026',
    editorialNote: STANDARD_EDITORIAL,
  },

  // ============================================================
  // 8. SLEAFORD
  // ============================================================
  {
    id: 'sleaford',
    location: 'Sleaford',
    slug: 'best-caravan-parks-near-sleaford',
    title: 'Best Caravan Parks near Sleaford',
    h1: 'Best Caravan Parks near Sleaford',
    contentAngle:
      'Best for central Lincolnshire bases, family lakeside resorts, woodland touring and premium lodge retreats near Tattershall and Woodhall Spa.',
    intro:
      'Planning a caravan, lodge, glamping or touring break near Sleaford? Compare curated options including full-service lakeside resorts, woodland touring and camping parks and premium lodge retreats within easy reach of Sleaford and central Lincolnshire.',
    seoTitle: 'Best Caravan Parks near Sleaford',
    metaDescription:
      'Compare caravan parks, touring sites, lodges, glamping and holiday parks near Sleaford, Lincolnshire, including Tattershall Lakes, Bainland and Woodhall Country Park.',
    regionType: 'Countryside',
    nearbyAreas: ['Tattershall', 'Woodhall Spa', 'Potterhanworth'],
    filters: COMMON_FILTERS,
    parks: [
      {
        id: 'tattershall-lakes-sleaford',
        name: 'Tattershall Lakes Country Park',
        bestFor: 'Families wanting a full-service holiday park with lakeside facilities.',
        description:
          'On Sleaford Road in Tattershall and one of the strongest holiday-park options near Sleaford. Away Resorts describes it as a lakeside park with lodges, holiday homes, facilities and watersports appeal.',
        tags: ['Caravans', 'Lodges', 'Hot tubs', 'Watersports', 'Family-friendly', 'Lakeside'],
        sourceUrl: 'https://www.awayresorts.co.uk/parks/lincolnshire/tattershall-lakes/',
        sourceLabel: 'Away Resorts (official)',
        locationContext: 'Tattershall',
        listingType: ['Holiday park', 'Lodges', 'Family-friendly', 'Resort'],
        monetisationType: 'affiliate-ready',
        featured: true,
      },
      {
        id: 'woodhall-country-park-sleaford',
        name: 'Woodhall Country Park',
        bestFor: 'Woodland touring, camping, pods and lodges near Sleaford.',
        description:
          'Works well for Sleaford visitors who want a calmer woodland setting with touring and lodge options. The park has fishing lakes and a strong nature/countryside angle.',
        tags: ['Touring', 'Camping', 'Pods', 'Lodges', 'Fishing', 'Dog-friendly options'],
        sourceUrl: 'https://woodhallcountrypark.co.uk/',
        sourceLabel: 'Official site',
        locationContext: 'Woodhall Spa',
        listingType: ['Holiday park', 'Touring site', 'Camping', 'Lodges', 'Glamping', 'Fishing'],
        monetisationType: 'business-listing',
      },
      {
        id: 'bainland-sleaford',
        name: 'Bainland Country Park',
        bestFor: 'Premium lodge and glamping stays near Woodhall Spa.',
        description:
          'More lodge retreat than caravan park, but one of the best premium accommodation options near Sleaford/Woodhall Spa. Offers lodges, cabins, glamping, dog-friendly escapes and family/group options.',
        tags: ['Lodges', 'Cabins', 'Glamping', 'Hot tubs', 'Dog-friendly', 'Premium'],
        sourceUrl: 'https://www.bainland.co.uk/',
        sourceLabel: 'Official site',
        locationContext: 'Woodhall Spa',
        listingType: ['Holiday park', 'Lodges', 'Glamping'],
        monetisationType: 'business-listing',
      },
      {
        id: 'walnut-lakes-sleaford',
        name: 'Walnut Lakes Fishing and Caravan Park',
        bestFor: 'Adults-only touring and lodge stays south-east of Sleaford.',
        description:
          'An adult-only, fishing-focused touring and lodge option. Good for Sleaford visitors who want quiet countryside rather than a busier family resort.',
        tags: ['Adults-only', 'Touring', 'Lodges', 'Fishing', 'Dog-friendly touring', 'Quiet'],
        sourceUrl: 'https://www.visitlincolnshire.com/places-to-stay/walnut-lakes/',
        sourceLabel: 'Visit Lincolnshire',
        listingType: ['Touring site', 'Lodges', 'Fishing', 'Adults-only'],
        monetisationType: 'business-listing',
      },
      {
        id: 'hanworth-sleaford',
        name: 'Hanworth Country Park',
        bestFor: 'Lodges, touring and fishing within reach of Sleaford and Lincoln.',
        description:
          'A good alternative for visitors who want to combine Sleaford, Lincoln and countryside days. Provides touring pitches, lodges, glamping and fishing lakes.',
        tags: ['Touring', 'Lodges', 'Glamping', 'Fishing', 'Family-friendly', 'Countryside'],
        sourceUrl: 'https://www.hanworthcountrypark.co.uk/',
        sourceLabel: 'Official site',
        locationContext: 'Potterhanworth',
        listingType: ['Holiday park', 'Touring site', 'Lodges', 'Glamping', 'Fishing'],
        monetisationType: 'business-listing',
      },
    ],
    seoContentIdeas: STANDARD_SEO_IDEAS('Sleaford'),
    faqs: [],
    lastUpdated: '6 May 2026',
    editorialNote: STANDARD_EDITORIAL,
  },

  // ============================================================
  // 9. MABLETHORPE
  // ============================================================
  {
    id: 'mablethorpe',
    location: 'Mablethorpe',
    slug: 'best-caravan-parks-near-mablethorpe',
    title: 'Best Caravan Parks near Mablethorpe',
    h1: 'Best Caravan Parks near Mablethorpe',
    contentAngle:
      'Best for traditional Lincolnshire seaside holidays, Blue Flag beaches, family caravan breaks and quieter coastal alternatives to Skegness.',
    intro:
      'Planning a caravan or holiday park break near Mablethorpe? Compare curated coastal options across Mablethorpe, Trusthorpe and Sutton-on-Sea, including major holiday park brands, fishing-lake parks and quieter family bases close to the beach.',
    seoTitle: 'Best Caravan Parks near Mablethorpe',
    metaDescription:
      'Compare caravan parks, lodges, touring sites and holiday parks near Mablethorpe, Lincolnshire, including Haven Golden Sands, Grange Leisure Park and quieter coastal alternatives.',
    regionType: 'Coast',
    nearbyAreas: ['Trusthorpe', 'Sutton-on-Sea'],
    filters: COMMON_FILTERS,
    parks: [
      {
        id: 'golden-sands-haven',
        name: 'Golden Sands Holiday Park — Haven',
        bestFor: 'Families who want a large seaside holiday park with activities.',
        description:
          'Haven’s Golden Sands is one of the key Mablethorpe options, offering caravan and lodge accommodation with beachside appeal, activities and family-friendly facilities. One of the top featured listings for Mablethorpe.',
        tags: ['Caravans', 'Lodges', 'Touring/camping', 'Beach', 'Family-friendly', 'Activities'],
        sourceUrl: 'https://www.haven.com/parks/lincolnshire/golden-sands',
        sourceLabel: 'Haven (official)',
        listingType: ['Holiday park', 'Caravan park', 'Lodges', 'Touring site', 'Family-friendly'],
        monetisationType: 'affiliate-ready',
        featured: true,
      },
      {
        id: 'grange-leisure-park-mablethorpe',
        name: 'Grange Leisure Park',
        bestFor: 'Families and couples wanting entertainment, fishing lakes and golf near Mablethorpe.',
        description:
          'Caravans, cottages, lodges, touring pitches, bar, restaurant, showbar, arcade, supermarket, fishing lakes and golf-course surroundings. A strong all-rounder for Mablethorpe.',
        tags: ['Caravans', 'Lodges', 'Touring', 'Fishing lakes', 'Golf', 'Entertainment'],
        sourceUrl: 'https://www.coastfields.co.uk/locations/grange-leisure-park',
        sourceLabel: 'Coastfields (official)',
        listingType: ['Holiday park', 'Caravan park', 'Lodges', 'Touring site', 'Fishing'],
        monetisationType: 'business-listing',
      },
      {
        id: 'towervans',
        name: 'Towervans Holiday Park',
        bestFor: 'A quieter Mablethorpe base close to beach, town and fishing lake.',
        description:
          'Positioned near Mablethorpe with a relaxed lakeside setting and easy access to the beach and town. Suits readers who want coastal convenience without a very large resort feel.',
        tags: ['Caravan holidays', 'Holiday home ownership', 'Fishing lake', 'Near beach', 'Town access'],
        sourceUrl: 'https://blueanchorleisure.co.uk/park/towervans-holiday-park-mablethorpe',
        sourceLabel: 'Blue Anchor Leisure',
        listingType: ['Holiday park', 'Caravan park', 'Holiday home ownership', 'Fishing'],
        monetisationType: 'business-listing',
      },
      {
        id: 'trusthorpe-springs',
        name: 'Trusthorpe Springs Holiday Park',
        bestFor: 'Families wanting a quiet park between Mablethorpe and Sutton-on-Sea.',
        description:
          'In the grounds of Trusthorpe Hall and around a mile from the sea. Includes holiday lets and touring, plus a licensed club, food, live entertainment, pool and play area.',
        tags: ['Touring', 'Static holiday lets', 'Pool', 'Entertainment', 'Near beach', 'Family-friendly'],
        sourceUrl: 'https://www.springsholidayestates.co.uk/trusthorpe-springs-holiday-park/',
        sourceLabel: 'Springs Holiday Estates',
        locationContext: 'Trusthorpe (between Mablethorpe and Sutton-on-Sea)',
        listingType: ['Holiday park', 'Touring site', 'Family-friendly'],
        monetisationType: 'business-listing',
      },
      {
        id: 'blue-dolphin',
        name: 'Blue Dolphin Caravan Park',
        bestFor: 'Private holiday home owners and seasonal touring near Mablethorpe.',
        description:
          'A private, non-letting, family-friendly caravan and seasonal touring park on the edge of Mablethorpe. More suitable for ownership/seasonal touring than casual holiday letting.',
        tags: ['Private park', 'Seasonal touring', 'Holiday home ownership', 'Quiet', 'Near beach'],
        sourceUrl: 'https://springfieldcaravans.co.uk/blue-dolphin.php',
        sourceLabel: 'Springfield Caravans',
        listingType: ['Caravan park', 'Holiday home ownership', 'Touring site'],
        monetisationType: 'business-listing',
      },
    ],
    seoContentIdeas: STANDARD_SEO_IDEAS('Mablethorpe'),
    faqs: [],
    lastUpdated: '6 May 2026',
    editorialNote: STANDARD_EDITORIAL,
  },

  // ============================================================
  // 10. WOODHALL SPA
  // ============================================================
  {
    id: 'woodhall-spa',
    location: 'Woodhall Spa',
    slug: 'best-caravan-parks-near-woodhall-spa',
    title: 'Best Caravan Parks near Woodhall Spa',
    h1: 'Best Caravan Parks near Woodhall Spa',
    contentAngle:
      'Best for woodland lodges, hot-tub retreats, premium glamping and family resort holidays in central Lincolnshire.',
    intro:
      'Planning a lodge, glamping or caravan break near Woodhall Spa? Compare curated options including premium woodland lodge estates, family-friendly lakeside resorts and dedicated touring and camping country parks within easy reach of the village.',
    seoTitle: 'Best Caravan Parks near Woodhall Spa',
    metaDescription:
      'Compare caravan parks, lodges, glamping and holiday parks near Woodhall Spa, Lincolnshire, including Bainland, Woodhall Country Park and Tattershall Lakes.',
    regionType: 'Countryside',
    nearbyAreas: ['Tattershall', 'Sleaford', 'Lincoln'],
    filters: COMMON_FILTERS,
    parks: [
      {
        id: 'bainland-woodhall',
        name: 'Bainland Country Park',
        bestFor: 'Luxury lodge retreats, hot tubs and premium countryside stays in Woodhall Spa.',
        description:
          'One of the signature Woodhall Spa accommodation options, with luxury lodges, cabins, dog-friendly escapes, romantic retreats and family/group stays. Premium rather than budget touring.',
        tags: ['Luxury lodges', 'Hot tubs', 'Dog-friendly', 'Families', 'Groups', 'Premium'],
        sourceUrl: 'https://www.bainland.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Holiday park', 'Lodges', 'Glamping'],
        monetisationType: 'business-listing',
        featured: true,
      },
      {
        id: 'woodhall-country-park-direct',
        name: 'Woodhall Country Park',
        bestFor: 'Touring, camping, glamping, pods and lodges in a woodland/lake setting.',
        description:
          'The most direct fit for a "caravan parks near Woodhall Spa" page. Offers lodges, touring, camping, pods and glamping with fishing lakes and nature appeal.',
        tags: ['Touring', 'Camping', 'Lodges', 'Pods', 'Glamping', 'Fishing lakes'],
        sourceUrl: 'https://woodhallcountrypark.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Holiday park', 'Touring site', 'Camping', 'Lodges', 'Glamping', 'Fishing'],
        monetisationType: 'business-listing',
        featured: true,
      },
      {
        id: 'tattershall-lakes-woodhall',
        name: 'Tattershall Lakes Country Park',
        bestFor: 'A full-facility family resort close to Woodhall Spa.',
        description:
          'Close enough to work as a Woodhall Spa family holiday option, especially for guests who want water activities, entertainment-style facilities, lodges, caravans and hot tub upgrades.',
        tags: ['Caravans', 'Lodges', 'Hot tubs', 'Watersports', 'Family-friendly', 'Lakeside'],
        sourceUrl: 'https://www.awayresorts.co.uk/parks/lincolnshire/tattershall-lakes/',
        sourceLabel: 'Away Resorts (official)',
        locationContext: 'Tattershall',
        listingType: ['Holiday park', 'Lodges', 'Family-friendly', 'Resort'],
        monetisationType: 'affiliate-ready',
      },
      {
        id: 'walnut-lakes-woodhall',
        name: 'Walnut Lakes Fishing and Caravan Park',
        bestFor: 'Adults-only fishing and touring within reach of Woodhall Spa.',
        description:
          'Better suited to Boston/South Lincolnshire, but useful as an adult-only fishing-focused alternative for visitors exploring Woodhall Spa and the wider area.',
        tags: ['Adults-only', 'Touring', 'Lodges', 'Fishing', 'Dog-friendly touring', 'Peaceful'],
        sourceUrl: 'https://www.visitlincolnshire.com/places-to-stay/walnut-lakes/',
        sourceLabel: 'Visit Lincolnshire',
        locationContext: 'Near Boston',
        listingType: ['Touring site', 'Lodges', 'Fishing', 'Adults-only'],
        monetisationType: 'business-listing',
      },
      {
        id: 'hanworth-woodhall',
        name: 'Hanworth Country Park',
        bestFor: 'Families wanting lakes, touring and lodges between Woodhall Spa and Lincoln.',
        description:
          'Works as a regional alternative for visitors combining Woodhall Spa with Lincoln. Provides touring pitches, lodges, glamping options and fishing lakes.',
        tags: ['Touring', 'Lodges', 'Glamping', 'Fishing', 'Family-friendly', 'Countryside'],
        sourceUrl: 'https://www.hanworthcountrypark.co.uk/',
        sourceLabel: 'Official site',
        locationContext: 'Potterhanworth',
        listingType: ['Holiday park', 'Touring site', 'Lodges', 'Glamping', 'Fishing'],
        monetisationType: 'business-listing',
      },
    ],
    seoContentIdeas: STANDARD_SEO_IDEAS('Woodhall Spa'),
    faqs: [],
    lastUpdated: '6 May 2026',
    editorialNote: STANDARD_EDITORIAL,
  },

  // ============================================================
  // 11. HORNCASTLE
  // ============================================================
  {
    id: 'horncastle',
    location: 'Horncastle',
    slug: 'best-caravan-parks-near-horncastle',
    title: 'Best Caravan Parks near Horncastle',
    h1: 'Best Caravan Parks near Horncastle',
    contentAngle:
      'Best for Lincolnshire Wolds walking, aviation heritage day trips and quiet countryside or premium lodge stays.',
    intro:
      'Planning a lodge, caravan or touring break near Horncastle? Compare curated options including premium lodge retreats, woodland touring sites, family resorts and Wolds camping bases for visitors exploring Horncastle and the Lincolnshire Wolds.',
    seoTitle: 'Best Caravan Parks near Horncastle',
    metaDescription:
      'Compare caravan parks, lodges and holiday parks near Horncastle, Lincolnshire, including premium Woodhall Spa lodges, Wolds camping and Tattershall Lakes resort breaks.',
    regionType: 'Wolds',
    nearbyAreas: ['Woodhall Spa', 'Tattershall', 'Louth', 'Lincolnshire Wolds'],
    filters: COMMON_FILTERS,
    parks: [
      {
        id: 'bainland-horncastle',
        name: 'Bainland Country Park',
        bestFor: 'Premium lodge retreats a short drive from Horncastle.',
        description:
          'Near Woodhall Spa and a good premium choice for Horncastle visitors. Works especially well for couples, families, dog-friendly breaks and special-occasion stays.',
        tags: ['Luxury lodges', 'Hot tubs', 'Dog-friendly', 'Romantic', 'Family-friendly', 'Near Horncastle'],
        sourceUrl: 'https://www.bainland.co.uk/',
        sourceLabel: 'Official site',
        locationContext: 'Woodhall Spa',
        listingType: ['Holiday park', 'Lodges', 'Glamping'],
        monetisationType: 'business-listing',
        featured: true,
      },
      {
        id: 'woodhall-country-park-horncastle',
        name: 'Woodhall Country Park',
        bestFor: 'Touring, glamping and lodge stays close to Horncastle.',
        description:
          'A strong Horncastle-area listing because of its woodland setting, fishing lakes, lodges and touring/camping choices. Fits both countryside and aviation-heritage itineraries.',
        tags: ['Touring', 'Camping', 'Glamping', 'Lodges', 'Fishing', 'Woodland'],
        sourceUrl: 'https://woodhallcountrypark.co.uk/',
        sourceLabel: 'Official site',
        locationContext: 'Woodhall Spa',
        listingType: ['Holiday park', 'Touring site', 'Camping', 'Lodges', 'Glamping', 'Fishing'],
        monetisationType: 'business-listing',
      },
      {
        id: 'tattershall-lakes-horncastle',
        name: 'Tattershall Lakes Country Park',
        bestFor: 'Family resort holidays within driving distance of Horncastle.',
        description:
          'Gives Horncastle visitors a large resort-style option with watersports, lodges, caravans and hot tubs. Use for families who want facilities and activities rather than a quiet small site.',
        tags: ['Caravans', 'Lodges', 'Watersports', 'Hot tubs', 'Family-friendly', 'Entertainment'],
        sourceUrl: 'https://www.awayresorts.co.uk/parks/lincolnshire/tattershall-lakes/',
        sourceLabel: 'Away Resorts (official)',
        locationContext: 'Tattershall',
        listingType: ['Holiday park', 'Lodges', 'Family-friendly', 'Resort'],
        monetisationType: 'affiliate-ready',
      },
      {
        id: 'wolds-camping-horncastle',
        name: 'The Wolds Camping and Caravan Site',
        bestFor: 'Simple camping and caravanning for Lincolnshire Wolds exploring.',
        description:
          'For Horncastle pages, this site fits walkers and road-trippers looking for a rural base close to Wolds villages and the east coast. A practical, non-resort alternative.',
        tags: ['Camping', 'Caravanning', 'Lincolnshire Wolds', 'Countryside', 'Coast access'],
        sourceUrl: 'https://www.woldscampingandcaravan.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Touring site', 'Camping'],
        monetisationType: 'business-listing',
      },
      {
        id: 'kenwick-park-horncastle',
        name: 'Kenwick Park Estate',
        bestFor: 'Lodge and leisure stays between Horncastle, Louth and the Wolds.',
        description:
          'Near Louth and can be included for Horncastle users wanting a golf/leisure/lodge holiday rather than touring. Adds a higher-end countryside option.',
        tags: ['Lodges', 'Golf', 'Leisure', 'Countryside', 'Premium', 'Near Louth'],
        sourceUrl: 'https://www.awayresorts.co.uk/parks/lincolnshire/kenwick-park/',
        sourceLabel: 'Away Resorts (official)',
        locationContext: 'Near Louth',
        listingType: ['Holiday park', 'Lodges'],
        monetisationType: 'affiliate-ready',
      },
    ],
    seoContentIdeas: STANDARD_SEO_IDEAS('Horncastle'),
    faqs: [],
    lastUpdated: '6 May 2026',
    editorialNote: STANDARD_EDITORIAL,
  },

  // ============================================================
  // 12. GAINSBOROUGH
  // ============================================================
  {
    id: 'gainsborough',
    location: 'Gainsborough',
    slug: 'best-caravan-parks-near-gainsborough',
    title: 'Best Caravan Parks near Gainsborough',
    h1: 'Best Caravan Parks near Gainsborough',
    contentAngle:
      'Best for Trent-side breaks, North Lincolnshire countryside and visitors combining Gainsborough with Lincoln, Newark and the Sherwood Forest area.',
    intro:
      'Planning a touring or caravan break near Gainsborough? Compare curated options including riverside camping along the Ancholme, motorhome-friendly bases between Lincoln and Newark and woodland sites just over the Nottinghamshire border.',
    seoTitle: 'Best Caravan Parks near Gainsborough',
    metaDescription:
      'Compare caravan parks, touring sites and holiday parks near Gainsborough, Lincolnshire, including Brandy Wharf, Camper UK and woodland alternatives across the Nottinghamshire border.',
    regionType: 'Countryside',
    nearbyAreas: ['River Ancholme', 'Lincoln', 'Newark', 'Sherwood Forest'],
    filters: COMMON_FILTERS,
    parks: [
      {
        id: 'brandy-wharf-gainsborough',
        name: 'Brandy Wharf Leisure Park',
        bestFor: 'Riverside camping and caravanning within reach of Gainsborough.',
        description:
          'One of the more useful Lincolnshire countryside options for Gainsborough-area searches. Sits by the River Ancholme and offers a simple camping/caravanning feel with fishing and river appeal.',
        tags: ['Riverside', 'Touring', 'Tents', 'Motorhomes', 'Fishing', 'Peaceful'],
        sourceUrl: 'https://www.brandywharfleisurepark.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Touring site', 'Camping', 'Fishing'],
        monetisationType: 'business-listing',
        featured: true,
      },
      {
        id: 'camper-uk-gainsborough',
        name: 'Camper UK Leisure Park',
        bestFor: 'Touring caravans and motorhomes between Lincoln and Newark.',
        description:
          'Works well for Gainsborough visitors who want access to Lincoln, Newark and west Lincolnshire. A practical touring/motorhome base with a fishing lake and facilities.',
        tags: ['Touring', 'Motorhomes', 'Fishing', 'Glamping pods', 'Lincoln/Newark access'],
        sourceUrl: 'https://www.camperukleisurepark.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Touring site', 'Glamping', 'Fishing'],
        monetisationType: 'business-listing',
      },
      {
        id: 'sherwood-forest-cmc',
        name: 'Sherwood Forest area site',
        bestFor: 'Woodland touring near Sherwood Forest and National Trust countryside.',
        description:
          'Outside Lincolnshire in Nottinghamshire, but a strong nearby option for Gainsborough visitors who want woodland, cycling and Sherwood Forest/Clumber Park days. Marked as nearby, outside Lincolnshire.',
        tags: ['Touring', 'Motorhomes', 'Woodland', 'Cycling', 'Family-friendly', 'Outside Lincolnshire'],
        sourceLabel: 'Source to be verified before publication',
        locationContext: 'Sherwood Forest area, Nottinghamshire',
        isOutsideLincolnshire: true,
        needsVerification: true,
        listingType: ['Touring site', 'Camping'],
        monetisationType: 'research-only',
      },
      {
        id: 'wagtail-country-park-gainsborough',
        name: 'Wagtail Country Park',
        bestFor: 'Lodges, touring and fishing within driving distance of Gainsborough.',
        description:
          'A useful regional option for Gainsborough visitors wanting peaceful countryside, lodges and touring close to Grantham. Family-run with dog-friendly appeal and fishing lakes.',
        tags: ['Touring', 'Lodges', 'Fishing', 'Open all year', 'Dog-friendly', 'Countryside'],
        sourceUrl: 'https://wagtailcountrypark.co.uk/wagtail-country-park-2/',
        sourceLabel: 'Official site',
        locationContext: 'Near Grantham',
        listingType: ['Holiday park', 'Touring site', 'Lodges', 'Fishing'],
        monetisationType: 'business-listing',
      },
      {
        id: 'milestone-gainsborough',
        name: 'Milestone Caravan Park',
        bestFor: 'Year-round touring just over the Nottinghamshire border.',
        description:
          'Near Newark, a useful alternative for Gainsborough visitors looking for a five-star touring park with hardstanding pitches, electric hook-ups and easy A1 access.',
        tags: ['Touring', 'Open all year', 'Hardstanding', 'Near Newark', 'Outside Lincolnshire'],
        sourceUrl: 'https://www.milestonepark.co.uk/award-winning-caravan-park/',
        sourceLabel: 'Official site',
        locationContext: 'Near Newark, Nottinghamshire',
        isOutsideLincolnshire: true,
        listingType: ['Touring site', 'Camping'],
        monetisationType: 'business-listing',
      },
    ],
    seoContentIdeas: STANDARD_SEO_IDEAS('Gainsborough'),
    faqs: [],
    lastUpdated: '6 May 2026',
    editorialNote: STANDARD_EDITORIAL,
  },

  // ============================================================
  // 13. MARKET RASEN
  // ============================================================
  {
    id: 'market-rasen',
    location: 'Market Rasen',
    slug: 'best-caravan-parks-near-market-rasen',
    title: 'Best Caravan Parks near Market Rasen',
    h1: 'Best Caravan Parks near Market Rasen',
    contentAngle:
      'Best for Lincolnshire Wolds walking, Market Rasen Racecourse visits and quiet countryside or fishing-focused breaks.',
    intro:
      'Planning a lodge, caravan or touring break near Market Rasen? Compare curated Wolds and countryside options including luxury lakeside pods, simple camping sites and riverside touring within easy reach of Market Rasen and the Lincolnshire Wolds.',
    seoTitle: 'Best Caravan Parks near Market Rasen',
    metaDescription:
      'Compare caravan parks, touring sites, lodges and pods near Market Rasen, Lincolnshire, including Wolds View Country Park, Wolds camping sites and riverside touring options.',
    regionType: 'Wolds',
    nearbyAreas: ['Lincolnshire Wolds', 'Louth', 'River Ancholme'],
    filters: COMMON_FILTERS,
    parks: [
      {
        id: 'wolds-view-market-rasen',
        name: 'Wolds View Country Park',
        bestFor: 'Luxury fishing lodges, pods and touring in the Lincolnshire Wolds.',
        description:
          'One of the strongest Market Rasen options. Offers lodges, luxury lakeside pods, a touring park and fishing lakes in a Wolds setting.',
        tags: ['Lodges', 'Touring', 'Pods', 'Fishing', 'Hot tubs', 'Lincolnshire Wolds'],
        sourceUrl: 'https://www.woldsviewcountrypark.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Holiday park', 'Touring site', 'Lodges', 'Glamping', 'Fishing'],
        monetisationType: 'business-listing',
        featured: true,
      },
      {
        id: 'wolds-camping-market-rasen',
        name: 'The Wolds Camping and Caravan Site',
        bestFor: 'Simple camping and caravanning in the heart of the Lincolnshire Wolds.',
        description:
          'Positions itself in the heart of the Lincolnshire Wolds, useful for Market Rasen visitors who want a practical countryside base for walking and east-coast day trips.',
        tags: ['Camping', 'Caravanning', 'Wolds', 'Countryside', 'Coast access', 'Simple stay'],
        sourceUrl: 'https://www.woldscampingandcaravan.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Touring site', 'Camping'],
        monetisationType: 'business-listing',
      },
      {
        id: 'brandy-wharf-market-rasen',
        name: 'Brandy Wharf Leisure Park',
        bestFor: 'Riverside camping and fishing within reach of Market Rasen.',
        description:
          'A simple riverside camping and caravan site next to the River Ancholme. Suits visitors who want a quiet rural base, fishing and a boating atmosphere within easy driving distance of Market Rasen.',
        tags: ['Riverside', 'Touring', 'Tents', 'Motorhomes', 'Fishing', 'Peaceful'],
        sourceUrl: 'https://www.brandywharfleisurepark.co.uk/',
        sourceLabel: 'Official site',
        locationContext: 'River Ancholme',
        listingType: ['Touring site', 'Camping', 'Fishing'],
        monetisationType: 'business-listing',
      },
      {
        id: 'kenwick-market-rasen',
        name: 'Kenwick Park Estate',
        bestFor: 'Lodge-style countryside breaks near the Wolds.',
        description:
          'Near Louth in rolling Lincolnshire countryside. Useful for Market Rasen visitors looking for a higher-end lodge stay with hotel, leisure and golf appeal.',
        tags: ['Lodges', 'Countryside', 'Golf', 'Spa/leisure', 'Premium', 'Near Louth'],
        sourceUrl: 'https://www.awayresorts.co.uk/parks/lincolnshire/kenwick-park/',
        sourceLabel: 'Away Resorts (official)',
        locationContext: 'Near Louth',
        listingType: ['Holiday park', 'Lodges'],
        monetisationType: 'affiliate-ready',
      },
      {
        id: 'sherwood-area-market-rasen',
        name: 'West Lincolnshire / North Notts touring site',
        bestFor: 'Touring guests willing to look just outside Lincolnshire for woodland alternatives.',
        description:
          'Several Nottinghamshire and North Lincolnshire touring sites can be useful for Market Rasen visitors. Options vary; specific recommendations are pending verification before publication.',
        tags: ['Touring', 'Woodland', 'Outside Lincolnshire', 'Practical alternative'],
        sourceLabel: 'Source to be verified before publication',
        isOutsideLincolnshire: true,
        needsVerification: true,
        listingType: ['Touring site', 'Camping'],
        monetisationType: 'research-only',
      },
    ],
    seoContentIdeas: STANDARD_SEO_IDEAS('Market Rasen'),
    faqs: [],
    lastUpdated: '6 May 2026',
    editorialNote: STANDARD_EDITORIAL,
  },

  // ============================================================
  // 14. BOURNE
  // ============================================================
  {
    id: 'bourne',
    location: 'Bourne',
    slug: 'best-caravan-parks-near-bourne',
    title: 'Best Caravan Parks near Bourne',
    h1: 'Best Caravan Parks near Bourne',
    contentAngle:
      'Best for South Lincolnshire town breaks, Stamford and Rutland combinations, family farm attractions and adults-only countryside touring.',
    intro:
      'Planning a caravan, touring or glamping break near Bourne? Compare curated options including lakeside family parks, Rutland-edge touring, premium glamping near Stamford and adults-only farm-style breaks within easy reach of Bourne.',
    seoTitle: 'Best Caravan Parks near Bourne',
    metaDescription:
      'Compare caravan parks, touring sites, glamping and holiday parks near Bourne, Lincolnshire, including Tallington Lakes, Rutland-area touring and adults-only countryside stays.',
    regionType: 'Market town',
    nearbyAreas: ['Stamford', 'Tallington', 'Rutland Water', 'Sacrewell'],
    filters: COMMON_FILTERS,
    parks: [
      {
        id: 'tallington-lakes-bourne',
        name: 'Tallington Lakes Leisure Park',
        bestFor: 'Families and active travellers near Bourne and Stamford.',
        description:
          'One of the most natural fits for a Bourne guide because it is close to Stamford and offers touring, camping, lakeside setting, bar/restaurant and activity-led facilities.',
        tags: ['Touring', 'Camping', 'Watersports', 'Lakeside', 'Family-friendly', 'Restaurant'],
        sourceUrl: 'https://www.tallington.com/',
        sourceLabel: 'Official site',
        locationContext: 'Tallington',
        listingType: ['Holiday park', 'Touring site', 'Camping', 'Family-friendly'],
        monetisationType: 'business-listing',
        featured: true,
      },
      {
        id: 'rutland-cc-bourne',
        name: 'Rutland Caravan and Camping',
        bestFor: 'Tourers exploring Bourne, Stamford, Rutland and the A1 corridor.',
        description:
          'A strong South Lincolnshire/Rutland-border touring option. Gives Bourne visitors access to Rutland Water, village walks, pubs and cycling routes.',
        tags: ['Touring', 'Motorhomes', 'Open all year', 'Dog facilities', 'Rutland', 'Walking'],
        sourceUrl: 'https://www.rutlandcaravanandcamping.co.uk/',
        sourceLabel: 'Official site',
        locationContext: 'Greetham (Rutland border)',
        listingType: ['Touring site', 'Camping'],
        monetisationType: 'business-listing',
      },
      {
        id: 'stamford-meadows-bourne',
        name: 'Stamford Meadows Glamping',
        bestFor: 'Couples wanting a premium glamping stay near Stamford and Bourne.',
        description:
          'For Bourne visitors who prefer glamping over caravanning, a strong nearby option with yurts, cabin/campervan options and private hot tub style stays.',
        tags: ['Glamping', 'Hot tubs', 'Couples', 'Dog-friendly', 'Town-and-country', 'Premium'],
        sourceUrl: 'https://stamfordmeadowsglamping.com/',
        sourceLabel: 'Official site',
        locationContext: 'Stamford',
        listingType: ['Glamping'],
        monetisationType: 'business-listing',
      },
      {
        id: 'new-lodge-farm-bourne',
        name: 'New Lodge Farm Caravan and Camping',
        bestFor: 'Adults-only farm-style touring and food-led countryside breaks.',
        description:
          'Gives Bourne content an adults-only, dog-friendly touring angle with farm shop/restaurant appeal. Better for quiet breaks than family resort holidays.',
        tags: ['Adults-only', 'Touring', 'Motorhomes', 'Farm shop', 'Restaurant', 'Dog-friendly'],
        sourceUrl: 'https://www.newlodgefarm.co.uk/New-Lodge-Farm-Touring',
        sourceLabel: 'Official site',
        locationContext: 'South Lincolnshire / Rutland border',
        listingType: ['Touring site', 'Adults-only'],
        monetisationType: 'business-listing',
      },
      {
        id: 'sacrewell-bourne',
        name: 'Sacrewell Camping and Caravanning',
        bestFor: 'Family camping and caravanning near a farm attraction.',
        description:
          'A useful family-oriented option for Bourne/Stamford pages because the campsite is connected with a farm attraction. Supports "things to do with kids near Bourne" cross-linking.',
        tags: ['Camping', 'Caravanning', 'Farm attraction', 'Children', 'Near A1', 'Family-friendly'],
        sourceUrl: 'https://www.sacrewell.org.uk/camping-and-caravanning/',
        sourceLabel: 'Sacrewell (official)',
        listingType: ['Touring site', 'Camping', 'Family-friendly'],
        monetisationType: 'business-listing',
      },
    ],
    seoContentIdeas: STANDARD_SEO_IDEAS('Bourne'),
    faqs: [],
    lastUpdated: '6 May 2026',
    editorialNote: STANDARD_EDITORIAL,
  },

  // ============================================================
  // 15. SUTTON-ON-SEA
  // ============================================================
  {
    id: 'sutton-on-sea',
    location: 'Sutton-on-Sea',
    slug: 'best-caravan-parks-near-sutton-on-sea',
    title: 'Best Caravan Parks near Sutton-on-Sea',
    h1: 'Best Caravan Parks near Sutton-on-Sea',
    contentAngle:
      'Best for quieter Lincolnshire seaside breaks, beach huts, Mablethorpe-Sutton coastal stays and family-friendly bases.',
    intro:
      'Planning a caravan or holiday park break near Sutton-on-Sea? Compare curated options across the Mablethorpe-Sutton coastal stretch, including quieter family parks, fishing-lake holiday parks and ownership-focused sites within walking distance of the beach.',
    seoTitle: 'Best Caravan Parks near Sutton-on-Sea',
    metaDescription:
      'Compare caravan parks, lodges and holiday parks near Sutton-on-Sea, Lincolnshire, including Trusthorpe Springs, Haven Golden Sands and quieter coastal alternatives.',
    regionType: 'Coast',
    nearbyAreas: ['Mablethorpe', 'Trusthorpe'],
    filters: COMMON_FILTERS,
    parks: [
      {
        id: 'trusthorpe-springs-sutton',
        name: 'Trusthorpe Springs Holiday Park',
        bestFor: 'A quiet family park between Sutton-on-Sea and Mablethorpe.',
        description:
          'One of the most relevant parks for Sutton-on-Sea because it sits at Trusthorpe, around a mile from the sea and close to both Sutton and Mablethorpe. Offers touring and holiday lets with family facilities.',
        tags: ['Touring', 'Static lets', 'Pool', 'Play area', 'Entertainment', 'Near beach'],
        sourceUrl: 'https://www.springsholidayestates.co.uk/trusthorpe-springs-holiday-park/',
        sourceLabel: 'Springs Holiday Estates',
        locationContext: 'Trusthorpe (between Sutton-on-Sea and Mablethorpe)',
        listingType: ['Holiday park', 'Touring site', 'Family-friendly'],
        monetisationType: 'business-listing',
        featured: true,
      },
      {
        id: 'golden-sands-sutton',
        name: 'Golden Sands Holiday Park — Haven',
        bestFor: 'Families wanting a larger park with Mablethorpe beach access.',
        description:
          'A major Mablethorpe holiday park very relevant for Sutton-on-Sea visitors who want more facilities, activities and caravan/lodge accommodation while staying close to quieter beaches.',
        tags: ['Caravans', 'Lodges', 'Touring/camping', 'Family-friendly', 'Beach', 'Activities'],
        sourceUrl: 'https://www.haven.com/parks/lincolnshire/golden-sands',
        sourceLabel: 'Haven (official)',
        locationContext: 'Mablethorpe',
        listingType: ['Holiday park', 'Caravan park', 'Lodges', 'Touring site', 'Family-friendly'],
        monetisationType: 'affiliate-ready',
      },
      {
        id: 'grange-leisure-sutton',
        name: 'Grange Leisure Park',
        bestFor: 'Visitors who want fishing lakes, golf and holiday park facilities near Sutton-on-Sea.',
        description:
          'Close to Mablethorpe and Sutton-on-Sea and a strong all-round coastal park with accommodation, touring, entertainment, fishing lakes and golf.',
        tags: ['Caravans', 'Lodges', 'Touring', 'Fishing lakes', 'Golf', 'Entertainment'],
        sourceUrl: 'https://www.coastfields.co.uk/locations/grange-leisure-park',
        sourceLabel: 'Coastfields (official)',
        locationContext: 'Mablethorpe',
        listingType: ['Holiday park', 'Caravan park', 'Lodges', 'Touring site', 'Fishing'],
        monetisationType: 'business-listing',
      },
      {
        id: 'towervans-sutton',
        name: 'Towervans Holiday Park',
        bestFor: 'A more relaxed Mablethorpe/Sutton coastal base with a fishing lake.',
        description:
          'A quieter lakeside setting near Mablethorpe town and the beach. Useful for Sutton-on-Sea visitors who want a smaller, less intense alternative to bigger resorts.',
        tags: ['Caravan holidays', 'Fishing lake', 'Near beach', 'Relaxed', 'Town access'],
        sourceUrl: 'https://blueanchorleisure.co.uk/park/towervans-holiday-park-mablethorpe',
        sourceLabel: 'Blue Anchor Leisure',
        locationContext: 'Mablethorpe',
        listingType: ['Holiday park', 'Caravan park', 'Fishing'],
        monetisationType: 'business-listing',
      },
      {
        id: 'blue-dolphin-sutton',
        name: 'Blue Dolphin Caravan Park',
        bestFor: 'Private holiday home ownership and seasonal touring near Mablethorpe/Sutton.',
        description:
          'A private, non-letting park with seasonal touring. Positioned clearly for ownership/seasonal users rather than holidaymakers expecting casual short-term caravan hire.',
        tags: ['Private park', 'Seasonal touring', 'Ownership', 'Quiet', 'Near beach'],
        sourceUrl: 'https://springfieldcaravans.co.uk/blue-dolphin.php',
        sourceLabel: 'Springfield Caravans',
        listingType: ['Caravan park', 'Holiday home ownership', 'Touring site'],
        monetisationType: 'business-listing',
      },
    ],
    seoContentIdeas: STANDARD_SEO_IDEAS('Sutton-on-Sea'),
    faqs: [],
    lastUpdated: '6 May 2026',
    editorialNote: STANDARD_EDITORIAL,
  },

  // ============================================================
  // 16. CHAPEL ST LEONARDS
  // ============================================================
  {
    id: 'chapel-st-leonards',
    location: 'Chapel St Leonards',
    slug: 'best-caravan-parks-near-chapel-st-leonards',
    title: 'Best Caravan Parks near Chapel St Leonards',
    h1: 'Best Caravan Parks near Chapel St Leonards',
    contentAngle:
      'Best for family caravan holidays close to the beach, ownership communities and coastal entertainment along the Skegness-Mablethorpe coast.',
    intro:
      'Planning a caravan or holiday park break in Chapel St Leonards? Compare curated coastal options including the flagship Golden Palm Resort, beach-front family parks, established static caravan sites and ownership-focused community parks.',
    seoTitle: 'Best Caravan Parks near Chapel St Leonards',
    metaDescription:
      'Compare caravan parks, holiday parks and ownership communities in Chapel St Leonards, Lincolnshire, including Golden Palm Resort, Happy Days and Sealands Park.',
    regionType: 'Coast',
    nearbyAreas: ['Ingoldmells', 'Skegness'],
    filters: COMMON_FILTERS,
    parks: [
      {
        id: 'golden-palm-chapel',
        name: 'Golden Palm Resort',
        bestFor: 'Family caravan holidays with entertainment in Chapel St Leonards.',
        description:
          'The flagship Chapel St Leonards option. Offers self-catering caravans, indoor heated fun pool, adventure golf, arcade, play areas and food options, making it a strong option for family-focused content.',
        tags: ['Caravans', 'Family-friendly', 'Pool', 'Entertainment', 'Arcade', 'Chapel St Leonards'],
        sourceUrl: 'https://goldenpalmresort.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Holiday park', 'Caravan park', 'Family-friendly'],
        monetisationType: 'business-listing',
        featured: true,
      },
      {
        id: 'happy-days-holiday-homes',
        name: 'Happy Days Holiday Homes',
        bestFor: 'Beach-close static caravan holidays in Chapel St Leonards.',
        description:
          'An established static caravan holiday park in Chapel St Leonards, described as a short walk from the beach with North and South parks around Trunch Lane. Very relevant for local directory listings.',
        tags: ['Static caravans', 'Near beach', 'Family-friendly', 'Chapel St Leonards', 'Entertainment'],
        sourceUrl: 'https://www.happydayshh.co.uk/',
        sourceLabel: 'Official site',
        listingType: ['Holiday park', 'Caravan park', 'Family-friendly'],
        monetisationType: 'business-listing',
      },
      {
        id: 'happy-days-beachfield',
        name: 'Happy Days Beachfield',
        bestFor: 'Beachfront access and family facilities in Chapel St Leonards.',
        description:
          'Direct beach-front access, club/bar facilities, indoor sports hall, launderette and outdoor fun pool. A strong Chapel listing for families wanting beach access and onsite amenities.',
        tags: ['Beach access', 'Static caravans', 'Outdoor pool', 'Family-friendly', 'Club/bar'],
        sourceUrl: 'https://www.happy-days-beachfield.co.uk/happy-days-beachfield/',
        sourceLabel: 'Official site',
        listingType: ['Holiday park', 'Caravan park', 'Family-friendly'],
        monetisationType: 'business-listing',
      },
      {
        id: 'laver-leisure-chapel',
        name: 'Laver Leisure Holiday Parks',
        bestFor: 'Holiday home ownership communities close to the beach.',
        description:
          'Operates multiple parks in and around Chapel St Leonards and Ingoldmells. Better positioned for ownership and owner-community content than simple holiday rental searches.',
        tags: ['Holiday home ownership', 'Beach access', 'Community parks', 'Chapel St Leonards'],
        sourceUrl: 'https://www.laverleisure.co.uk/holiday-parks/chapel-st-leonards/',
        sourceLabel: 'Laver Leisure (official)',
        listingType: ['Holiday home ownership', 'Caravan park'],
        monetisationType: 'business-listing',
      },
      {
        id: 'sealands-park',
        name: 'Sealands Park',
        bestFor: 'Large Ingoldmells renting park with direct beach access near Chapel St Leonards.',
        description:
          'At Ingoldmells with direct beach access. Included as a nearby Chapel St Leonards/Ingoldmells option, especially for readers comparing parks along the coast.',
        tags: ['Renting park', 'Direct beach access', 'Ingoldmells', 'Holiday homes', 'Near attractions'],
        sourceUrl: 'https://www.laverleisure.co.uk/holiday-parks/sealands-park/',
        sourceLabel: 'Laver Leisure (official)',
        locationContext: 'Ingoldmells (south of Chapel St Leonards)',
        listingType: ['Holiday park', 'Caravan park', 'Holiday home ownership'],
        monetisationType: 'business-listing',
      },
    ],
    seoContentIdeas: STANDARD_SEO_IDEAS('Chapel St Leonards'),
    faqs: [],
    lastUpdated: '6 May 2026',
    editorialNote: STANDARD_EDITORIAL,
  },
];

// ============================================================
// HELPERS
// ============================================================

export function getAllCaravanParkGuides(): CaravanParkGuide[] {
  return caravanParkGuides;
}

export function getCaravanParkGuideBySlug(slug: string): CaravanParkGuide | undefined {
  return caravanParkGuides.find((g) => g.slug === slug);
}

export function getFeaturedCaravanParkGuides(limit?: number): CaravanParkGuide[] {
  const featured = caravanParkGuides.filter((g) =>
    ['skegness', 'mablethorpe', 'chapel-st-leonards', 'sutton-on-sea', 'lincoln'].includes(g.id)
  );
  return limit ? featured.slice(0, limit) : featured;
}

export function getCaravanParkGuidesByRegion(regionType: RegionType): CaravanParkGuide[] {
  return caravanParkGuides.filter((g) => g.regionType === regionType);
}

export function getAllCaravanParkTags(): string[] {
  const tags = new Set<string>();
  for (const g of caravanParkGuides) {
    for (const p of g.parks) {
      for (const t of p.tags) tags.add(t);
    }
  }
  return Array.from(tags).sort();
}

export function getRelatedCaravanParkGuides(currentSlug: string, limit = 3): CaravanParkGuide[] {
  const current = getCaravanParkGuideBySlug(currentSlug);
  if (!current) return [];

  // Prefer same region first, then others
  const sameRegion = caravanParkGuides.filter(
    (g) => g.slug !== currentSlug && g.regionType === current.regionType
  );
  const others = caravanParkGuides.filter(
    (g) => g.slug !== currentSlug && g.regionType !== current.regionType
  );

  return [...sameRegion, ...others].slice(0, limit);
}

/**
 * Generate at least 5 honest FAQs based on the parks in a guide.
 */
export function generateCaravanParkFaqs(guide: CaravanParkGuide): FAQItem[] {
  const { location, parks } = guide;

  const hasDogFriendly = parks.some((p) =>
    p.tags.some((t) => /dog/i.test(t))
  );
  const hasFamilyFriendly = parks.some((p) =>
    p.tags.some((t) => /family-friendly/i.test(t)) || p.listingType?.includes('Family-friendly')
  );
  const hasTouring = parks.some(
    (p) => p.listingType?.includes('Touring site') || p.tags.some((t) => /touring/i.test(t))
  );
  const hasLodges = parks.some(
    (p) => p.listingType?.includes('Lodges') || p.tags.some((t) => /lodge/i.test(t))
  );
  const hasGlamping = parks.some(
    (p) => p.listingType?.includes('Glamping') || p.tags.some((t) => /glamping/i.test(t))
  );
  const hasFishing = parks.some(
    (p) => p.listingType?.includes('Fishing') || p.tags.some((t) => /fishing/i.test(t))
  );
  const hasOutsideLincs = parks.some((p) => p.isOutsideLincolnshire);

  const faqs: FAQItem[] = [];

  if (hasDogFriendly) {
    faqs.push({
      question: `Are there dog-friendly caravan parks near ${location}?`,
      answer: `Yes, several listed options near ${location} mention dog-friendly or pet-related facilities, but pet policies can change and may apply only to selected units or pitch types. Always check directly with the park before booking.`,
    });
  } else {
    faqs.push({
      question: `Are there dog-friendly options near ${location}?`,
      answer: `Some parks listed in this guide may accept dogs in selected accommodation or pitches. Pet policies change frequently — always confirm with the park before booking if you are travelling with a dog.`,
    });
  }

  if (hasFamilyFriendly) {
    faqs.push({
      question: `Which caravan parks near ${location} are best for families?`,
      answer: `Several entries in this guide are positioned as family-friendly with facilities, activities or beach access. The best fit depends on whether you prefer a large entertainment-led resort, a quieter site or a touring base. Check the "Best for" tag on each listing.`,
    });
  }

  if (hasTouring) {
    faqs.push({
      question: `Are there quiet touring sites near ${location}?`,
      answer: `Yes — the guide includes touring caravan and motorhome options around ${location}, ranging from peaceful countryside or riverside sites to larger touring parks with hardstanding pitches and electric hook-ups. Check each park’s pitch types and opening dates before booking.`,
    });
  }

  if (hasLodges || hasGlamping) {
    const items: string[] = [];
    if (hasLodges) items.push('lodges');
    if (hasGlamping) items.push('glamping pods or cabins');
    faqs.push({
      question: `Can I find ${items.join(' or ')} near ${location}?`,
      answer: `Yes — the guide includes ${items.join(' and ')} options that work well for couples, families or special-occasion stays. Availability varies by season, so book early for school holidays and bank holidays.`,
    });
  }

  if (hasFishing) {
    faqs.push({
      question: `Which holiday parks near ${location} have fishing lakes?`,
      answer: `Several parks in this guide have on-site fishing lakes or are well placed for nearby coarse fishing. Check tackle requirements, day-ticket pricing and species directly with each park before travelling.`,
    });
  }

  faqs.push({
    question: 'Should I book directly with the holiday park?',
    answer: `We recommend confirming availability, prices and policies on the park’s official website or booking platform. Some parks have direct-booking offers, while others use third-party booking systems. We do not handle bookings on Lincs Staycation Guide — links go to the official park source.`,
  });

  if (hasOutsideLincs) {
    faqs.push({
      question: `Are all listed sites actually in ${location}?`,
      answer: `No — some entries are clearly labelled as nearby or outside Lincolnshire. They are included because visitors searching for "caravan parks near ${location}" often consider regional alternatives across the A1 corridor or on the Nottinghamshire border. Each listing notes its actual location context.`,
    });
  } else {
    faqs.push({
      question: `Are all listed sites actually in ${location}?`,
      answer: `Some sites are within ${location} itself, while others sit slightly outside in the surrounding countryside or coast. Each listing’s "Location notes" make this clear so you can pick the right base for your trip.`,
    });
  }

  return faqs;
}

/** Pre-fill faqs for each guide (mutates module-level data on import) */
for (const g of caravanParkGuides) {
  if (!g.faqs || g.faqs.length === 0) {
    g.faqs = generateCaravanParkFaqs(g);
  }
}
