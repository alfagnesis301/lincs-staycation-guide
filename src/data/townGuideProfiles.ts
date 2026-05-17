import type { ThingToDoCategory } from './locationGuides';

export type TownItinerary = {
  title: string;
  items: string[];
};

export type TownAttraction = {
  name: string;
  category: ThingToDoCategory;
  description: string;
  tags: string[];
  officialWebsiteUrl?: string;
  needsVerification: true;
};

export type TownGuideProfile = {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  regionBadge: 'City' | 'Coast' | 'Market town' | 'Wolds' | 'Fens' | 'Countryside';
  shortIntro: string;
  bestFor: string;
  goodBaseFor: string;
  suggestedStayLength: string;
  bestSeasons: string;
  verificationStatus: string;
  itineraries: TownItinerary[];
  attractions: TownAttraction[];
  practicalTips: string[];
  stayAdvice: string;
  nearbyTowns: string[];
  knownFor: string;
};

const v = true as const;

export const townGuideProfiles: Record<string, TownGuideProfile> = {
  lincoln: {
    slug: 'lincoln',
    seoTitle: 'Lincoln Travel Guide | Cathedral City Breaks in Lincolnshire',
    metaDescription:
      'Plan a Lincoln city break with the cathedral, castle, Steep Hill, Brayford Waterfront, museums, places to stay, food and nearby caravan parks.',
    regionBadge: 'City',
    shortIntro:
      'Lincoln is Lincolnshire\'s cathedral city: compact enough for a weekend, rich enough for history lovers, and practical for food-led breaks, family days out and countryside add-ons.',
    bestFor: 'Cathedral city breaks, history, independent food, castle and cathedral visits, Steep Hill and the Brayford Waterfront.',
    goodBaseFor: 'The historic uphill quarter, Brayford Waterfront, the Lincolnshire Wolds and wider county day trips.',
    suggestedStayLength: '1-3 nights',
    bestSeasons: 'Spring, summer, autumn and festive winter weekends',
    verificationStatus: 'Editorially reviewed; venue details need direct pre-visit checks.',
    knownFor: 'Lincoln Cathedral, Lincoln Castle, Steep Hill and its walkable historic centre.',
    stayAdvice: 'Stay uphill for the cathedral and castle, downhill for the Brayford Waterfront, rail station and flatter city-centre access.',
    nearbyTowns: ['woodhall-spa', 'gainsborough', 'market-rasen', 'sleaford'],
    itineraries: [
      { title: 'One day in Lincoln', items: ['Start at Lincoln Cathedral', 'Walk the castle walls or grounds', 'Browse Steep Hill and Bailgate', 'Finish beside Brayford Waterfront'] },
      { title: 'Weekend break in Lincoln', items: ['Spend day one in the cathedral quarter', 'Use day two for museums, The Collection and the waterfront', 'Add the International Bomber Command Centre if aviation history interests you'] },
      { title: 'Family-friendly plan', items: ['Mix Lincoln Castle, the Museum of Lincolnshire Life and Brayford boats or waterfront food stops'] },
      { title: 'Rainy-day option', items: ['Use The Collection/Usher Gallery, Museum of Lincolnshire Life and cathedral interiors as indoor anchors'] },
      { title: 'Outdoor option', items: ['Walk Steep Hill, the castle walls and the Brayford, or add Hartsholme Country Park by car or bus'] },
    ],
    attractions: [
      { name: 'Lincoln Cathedral', category: 'Historic site', description: 'The city landmark and a core reason to visit Lincoln; check services, visitor access and event closures before travelling.', tags: ['Cathedral', 'Architecture', 'Heritage'], officialWebsiteUrl: 'https://lincolncathedral.com/', needsVerification: v },
      { name: 'Lincoln Castle', category: 'Historic site', description: 'A major heritage site for castle walls, Magna Carta context, prison history and city views.', tags: ['Castle', 'History', 'Family-friendly'], officialWebsiteUrl: 'https://www.lincolncastle.com/', needsVerification: v },
      { name: 'Steep Hill', category: 'Walk', description: 'A steep historic street linking the lower city with Bailgate, shops, cafes and the cathedral quarter.', tags: ['Walk', 'Shopping', 'Free activity'], needsVerification: v },
      { name: 'Brayford Waterfront', category: 'Entertainment', description: 'A lively waterside area for restaurants, bars, hotels and a flatter evening stroll.', tags: ['Waterfront', 'Food', 'Evening'], needsVerification: v },
      { name: 'Museum of Lincolnshire Life', category: 'Museum', description: 'A useful rainy-day stop for local social, industrial and military history.', tags: ['Museum', 'Rainy day', 'Local history'], officialWebsiteUrl: 'https://www.lincolnshire.gov.uk/history-heritage/museum-lincolnshire-life', needsVerification: v },
      { name: 'The Collection / Usher Gallery', category: 'Museum', description: 'Indoor archaeology, art and culture close to the historic centre.', tags: ['Gallery', 'Museum', 'Rainy day'], officialWebsiteUrl: 'https://www.lincolnmuseum.com/', needsVerification: v },
      { name: 'International Bomber Command Centre', category: 'Heritage', description: 'A major aviation and remembrance site just outside the city centre.', tags: ['Aviation', 'Heritage', 'Memorial'], officialWebsiteUrl: 'https://internationalbcc.co.uk/', needsVerification: v },
    ],
    practicalTips: [
      'Steep Hill is genuinely steep; choose waterfront or lower-city accommodation if mobility is a concern.',
      'Lincoln is workable by rail for a short break, but a car helps for Wolds, aviation and countryside add-ons.',
      'The best area to stay depends on your plan: Bailgate for heritage, Brayford for nightlife and station access.',
      'Always check current opening hours, menus, facilities and booking availability directly.',
    ],
  },
  skegness: {
    slug: 'skegness',
    seoTitle: 'Skegness Travel Guide | Beach, Family Fun & Holiday Parks',
    metaDescription:
      'Plan a Skegness seaside break with the beach, pier, arcades, Natureland, Gibraltar Point, Fantasy Island nearby and caravan parks.',
    regionBadge: 'Coast',
    shortIntro:
      'Skegness is the classic Lincolnshire seaside resort for beach days, arcades, family attractions, caravan holidays and easy trips along the coast.',
    bestFor: 'Seaside holidays, family fun, beaches, arcades, holiday parks and coastal nature.',
    goodBaseFor: 'Skegness seafront, Ingoldmells, Chapel St Leonards, Gibraltar Point and family holiday parks.',
    suggestedStayLength: '2-4 nights',
    bestSeasons: 'Late spring to early autumn; quieter coastal walks in winter',
    verificationStatus: 'Editorially reviewed; attraction times and park facilities need direct checks.',
    knownFor: 'A sandy seafront, family amusements, holiday parks and nearby Gibraltar Point.',
    stayAdvice: 'Stay near the seafront for classic beach access, or compare Ingoldmells and Chapel St Leonards for larger holiday park choices.',
    nearbyTowns: ['mablethorpe', 'louth', 'boston', 'woodhall-spa'],
    itineraries: [
      { title: 'One day in Skegness', items: ['Walk the seafront and beach', 'Visit the pier and arcades', 'Add Natureland Seal Sanctuary', 'Finish with fish and chips or a casual seafront meal'] },
      { title: 'Weekend break in Skegness', items: ['Use day one for beach and resort attractions', 'Use day two for Gibraltar Point or Ingoldmells', 'Add Chapel St Leonards if you want a slower coastal stop'] },
      { title: 'Family-friendly plan', items: ['Beach, pier, arcades, Natureland and nearby Fantasy Island make an easy family mix'] },
      { title: 'Rainy-day option', items: ['Use indoor amusements, cafes and nearby covered family attractions; check seasonal opening first'] },
      { title: 'Dog-friendly/outdoor option', items: ['Check beach dog restrictions by season and consider Gibraltar Point or quieter coastal walks'] },
    ],
    attractions: [
      { name: 'Skegness Beach and seafront', category: 'Beach', description: 'The main draw for classic sand, promenade walks and resort atmosphere.', tags: ['Beach', 'Free activity', 'Family-friendly'], needsVerification: v },
      { name: 'Skegness Pier and arcades', category: 'Entertainment', description: 'Traditional family entertainment, games and seaside amusements close to the beach.', tags: ['Pier', 'Arcades', 'Rainy day'], officialWebsiteUrl: 'https://skegnesspier.co.uk/', needsVerification: v },
      { name: 'Natureland Seal Sanctuary', category: 'Wildlife', description: 'A family-friendly wildlife stop best checked directly for current visitor information.', tags: ['Wildlife', 'Family-friendly'], officialWebsiteUrl: 'https://skegnessnatureland.co.uk/', needsVerification: v },
      { name: 'Gibraltar Point National Nature Reserve', category: 'Nature', description: 'A quieter coastal landscape for birdwatching, walking and big skies south of the resort.', tags: ['Nature', 'Walk', 'Wildlife'], officialWebsiteUrl: 'https://www.lincstrust.org.uk/top-reserves/gibraltar-point', needsVerification: v },
      { name: 'Fantasy Island, Ingoldmells', category: 'Family-friendly', description: 'A major nearby family attraction for rides, markets and holiday park visitors.', tags: ['Nearby', 'Family-friendly', 'Entertainment'], officialWebsiteUrl: 'https://www.fantasyislandresort.co.uk/', needsVerification: v },
      { name: 'Chapel St Leonards', category: 'Beach', description: 'A nearby coastal village for a gentler beach and holiday-park day out.', tags: ['Nearby', 'Beach', 'Caravan holidays'], needsVerification: v },
    ],
    practicalTips: [
      'The seafront is walkable, but nearby Ingoldmells and Chapel St Leonards are easier with a car or local transport.',
      'Check seasonal attraction opening before travelling, especially outside school holidays.',
      'For quieter stays, compare accommodation north of the main resort or near Gibraltar Point.',
      'Always check current opening hours, menus, facilities and booking availability directly.',
    ],
  },
  stamford: {
    slug: 'stamford',
    seoTitle: 'Stamford Travel Guide | Georgian Weekends & Burghley House',
    metaDescription:
      'Plan a Stamford weekend break with Georgian streets, town walks, Burghley House, Burghley Park, food, the Meadows and Rutland Water nearby.',
    regionBadge: 'Market town',
    shortIntro:
      'Stamford suits slower weekend breaks built around handsome stone streets, independent food, riverside walks and the grand Burghley estate.',
    bestFor: 'Georgian architecture, boutique weekends, food, Burghley House and relaxed town walks.',
    goodBaseFor: 'Burghley House, Rutland Water, the Welland Valley and south Lincolnshire villages.',
    suggestedStayLength: '1-2 nights',
    bestSeasons: 'Spring, summer and autumn',
    verificationStatus: 'Editorially reviewed; accommodation and venue details need direct checks.',
    knownFor: 'Limestone streets, Georgian architecture, independent shops and Burghley House.',
    stayAdvice: 'Stay in the town centre for restaurants and walking, or near Burghley for estate access and quieter evenings.',
    nearbyTowns: ['bourne', 'grantham', 'sleaford', 'spalding'],
    itineraries: [
      { title: 'One day in Stamford', items: ['Take a town walk through the Georgian streets', 'Browse independent shops', 'Walk the Meadows', 'Book a relaxed lunch or dinner'] },
      { title: 'Weekend break in Stamford', items: ['Use day one for Stamford town centre', 'Spend day two at Burghley House and Burghley Park', 'Add Rutland Water if you have a car'] },
      { title: 'Family-friendly plan', items: ['Combine Burghley Park, town treats and the Meadows for an easy day'] },
      { title: 'Rainy-day option', items: ['Use Stamford Arts Centre, cafes, shops and Burghley interiors when open'] },
      { title: 'Outdoor option', items: ['Walk Burghley Park, the Meadows and riverside routes along the Welland'] },
    ],
    attractions: [
      { name: 'Stamford town walk', category: 'Walk', description: 'The best way to appreciate Stamford is on foot through its limestone streets, lanes and market spaces.', tags: ['Walk', 'Architecture', 'Free activity'], needsVerification: v },
      { name: 'Burghley House', category: 'Historic site', description: 'A major Elizabethan house and one of the strongest reasons to build a Stamford weekend.', tags: ['Historic house', 'Heritage', 'Garden'], officialWebsiteUrl: 'https://burghley.co.uk/', needsVerification: v },
      { name: 'Burghley Park', category: 'Nature', description: 'Open parkland and estate scenery close enough to pair with the town centre.', tags: ['Park', 'Walk', 'Outdoor'], needsVerification: v },
      { name: 'Stamford Arts Centre', category: 'Rainy day', description: 'A central culture stop for cinema, theatre, exhibitions and indoor plans.', tags: ['Arts', 'Rainy day', 'Culture'], officialWebsiteUrl: 'https://www.stamfordartscentre.com/', needsVerification: v },
      { name: 'The Meadows and riverside', category: 'Walk', description: 'A gentle riverside green space for slower walks close to the town centre.', tags: ['Riverside', 'Walk', 'Free activity'], needsVerification: v },
      { name: 'Rutland Water nearby', category: 'Nature', description: 'A strong nearby add-on for cycling, walking, birdwatching and waterside days.', tags: ['Nearby', 'Nature', 'Day trip'], needsVerification: v },
    ],
    practicalTips: [
      'Stamford is best explored on foot; allow time for lanes, courtyards and independent shops.',
      'A car helps for Burghley, Rutland Water and village pubs, though the town itself is compact.',
      'Book restaurants and accommodation early for race days, events and summer weekends.',
      'Always check current opening hours, menus, facilities and booking availability directly.',
    ],
  },
  louth: {
    slug: 'louth',
    seoTitle: 'Louth Travel Guide | Wolds Market Town, Food & Walking',
    metaDescription:
      'Plan a Louth break with St James\'s Church, markets, independent food shops, Hubbard\'s Hills, Wolds walks and Cadwell Park nearby.',
    regionBadge: 'Wolds',
    shortIntro:
      'Louth is a characterful Wolds market town for food shopping, gentle walking, independent browsing and countryside days without a resort feel.',
    bestFor: 'Wolds market town breaks, independent shops, local food and walking.',
    goodBaseFor: 'Hubbard\'s Hills, Lincolnshire Wolds walks, Cadwell Park and the coast around Mablethorpe.',
    suggestedStayLength: '1-2 nights',
    bestSeasons: 'Spring, summer and autumn walking weekends',
    verificationStatus: 'Editorially reviewed; market days and venue details need direct checks.',
    knownFor: 'St James\'s Church, independent food shops, markets and the Lincolnshire Wolds.',
    stayAdvice: 'Stay close to the centre for shops and evening food, or outside town for Wolds views and quieter lanes.',
    nearbyTowns: ['mablethorpe', 'horncastle', 'market-rasen', 'skegness'],
    itineraries: [
      { title: 'One day in Louth', items: ['Visit St James\'s Church', 'Browse the market and independent food shops', 'Walk Hubbard\'s Hills', 'Finish with a pub or cafe stop'] },
      { title: 'Weekend break in Louth', items: ['Use one day for the town centre', 'Use one day for Wolds villages or Cadwell Park if events are on'] },
      { title: 'Family-friendly plan', items: ['Keep it simple with Hubbard\'s Hills, treats from town and a short Wolds drive'] },
      { title: 'Rainy-day option', items: ['Lean into food shops, cafes, the church interior and nearby heritage stops'] },
      { title: 'Dog-friendly/outdoor option', items: ['Hubbard\'s Hills and Wolds footpaths are the natural focus; check livestock and seasonal guidance'] },
    ],
    attractions: [
      { name: 'St James\'s Church', category: 'Historic site', description: 'The town landmark and a useful orientation point for Louth\'s historic centre.', tags: ['Church', 'Heritage', 'Architecture'], officialWebsiteUrl: 'https://www.teamparishoflouth.org.uk/st-james-church/', needsVerification: v },
      { name: 'Louth market', category: 'Market', description: 'A key part of Louth\'s appeal, with local food and town-centre browsing.', tags: ['Market', 'Shopping', 'Local food'], needsVerification: v },
      { name: 'Independent food shops', category: 'Shopping', description: 'Louth is especially good for butchers, bakers, delis and traditional food shopping.', tags: ['Food', 'Shopping', 'Independent'], needsVerification: v },
      { name: 'Hubbard\'s Hills', category: 'Nature', description: 'A wooded valley walk close to town and one of the easiest outdoor wins for visitors.', tags: ['Walk', 'Nature', 'Family-friendly'], officialWebsiteUrl: 'https://www.hubbardshills.co.uk/', needsVerification: v },
      { name: 'Lincolnshire Wolds walks', category: 'Walk', description: 'Use Louth as a base for chalk hills, quiet lanes and village walks.', tags: ['Wolds', 'Walking', 'Countryside'], needsVerification: v },
      { name: 'Cadwell Park nearby', category: 'Entertainment', description: 'A motorsport add-on near Louth; check event calendars before planning around it.', tags: ['Motorsport', 'Nearby', 'Events'], officialWebsiteUrl: 'https://www.cadwellpark.co.uk/', needsVerification: v },
    ],
    practicalTips: [
      'Market days are livelier, but parking and cafes can be busier.',
      'A car is useful for Wolds villages, Cadwell Park and coast day trips.',
      'The best area to stay is central Louth for food and shopping, countryside edges for walking.',
      'Always check current opening hours, menus, facilities and booking availability directly.',
    ],
  },
  boston: {
    slug: 'boston',
    seoTitle: 'Boston Travel Guide | Boston Stump, Pilgrim History & Nature',
    metaDescription:
      'Plan a Boston, Lincolnshire visit with Boston Stump, Guildhall, market place, Maud Foster Windmill, Frampton Marsh and Freiston Shore.',
    regionBadge: 'Fens',
    shortIntro:
      'Boston is a fenland market town with big-sky history, river heritage, Pilgrim connections and excellent nearby nature reserves.',
    bestFor: 'History, Boston Stump, Pilgrim Fathers heritage, markets and wetland nature reserves.',
    goodBaseFor: 'The Wash, Frampton Marsh, Freiston Shore and south Lincolnshire fenland drives.',
    suggestedStayLength: '1-2 nights',
    bestSeasons: 'Spring and autumn for birdwatching; summer for markets and town walks',
    verificationStatus: 'Editorially reviewed; reserve facilities and opening details need direct checks.',
    knownFor: 'St Botolph\'s Church, Boston Stump, market heritage and Pilgrim Fathers links.',
    stayAdvice: 'Stay close to the centre for the Stump, Guildhall and market; choose edge-of-town bases for easier nature reserve drives.',
    nearbyTowns: ['spalding', 'sleaford', 'skegness', 'woodhall-spa'],
    itineraries: [
      { title: 'One day in Boston', items: ['Visit St Botolph\'s Church', 'Explore the market place', 'Add Boston Guildhall', 'Walk to Maud Foster Windmill'] },
      { title: 'Weekend break in Boston', items: ['Use day one for town history', 'Use day two for Frampton Marsh or Freiston Shore'] },
      { title: 'Family-friendly plan', items: ['Mix the Stump, riverside, market snacks and a short nature reserve visit'] },
      { title: 'Rainy-day option', items: ['Use the church, Guildhall and cafes; check museum opening before setting off'] },
      { title: 'Outdoor option', items: ['Plan a birdwatching walk at Frampton Marsh or Freiston Shore'] },
    ],
    attractions: [
      { name: 'St Botolph\'s Church / Boston Stump', category: 'Historic site', description: 'Boston\'s landmark tower and a central anchor for any heritage visit.', tags: ['Church', 'Heritage', 'Landmark'], officialWebsiteUrl: 'https://parish-of-boston.org.uk/church/st-botolphs/', needsVerification: v },
      { name: 'Boston Guildhall', category: 'Museum', description: 'A key stop for Pilgrim Fathers context and town history.', tags: ['Museum', 'Pilgrim history', 'Rainy day'], officialWebsiteUrl: 'https://www.bostonguildhall.co.uk/', needsVerification: v },
      { name: 'Boston market place', category: 'Market', description: 'The town\'s traditional commercial heart and a useful starting point.', tags: ['Market', 'Shopping', 'Town centre'], needsVerification: v },
      { name: 'Maud Foster Windmill', category: 'Heritage', description: 'A distinctive working windmill landmark close to the town centre.', tags: ['Windmill', 'Heritage', 'Food'], officialWebsiteUrl: 'https://maudfoster.co.uk/', needsVerification: v },
      { name: 'RSPB Frampton Marsh', category: 'Wildlife', description: 'A major wetland reserve for birds, walking and big fenland skies.', tags: ['Wildlife', 'Nature', 'Birdwatching'], officialWebsiteUrl: 'https://www.rspb.org.uk/days-out/reserves/frampton-marsh', needsVerification: v },
      { name: 'Freiston Shore', category: 'Nature', description: 'A quieter coastal reserve for wildlife and Wash-side walks.', tags: ['Nature', 'Wildlife', 'Walk'], officialWebsiteUrl: 'https://www.rspb.org.uk/days-out/reserves/freiston-shore', needsVerification: v },
    ],
    practicalTips: [
      'Boston works best with a car if you want to combine town history and nature reserves.',
      'Check tides, reserve access and facilities when planning Wash-side walks.',
      'The town centre is compact, but nature reserves sit outside the main visitor core.',
      'Always check current opening hours, menus, facilities and booking availability directly.',
    ],
  },
  grantham: {
    slug: 'grantham',
    seoTitle: 'Grantham Travel Guide | Belton House, Heritage & Day Trips',
    metaDescription:
      'Plan a Grantham stay with Belton House, St Wulfram\'s Church, Grantham Museum, Woolsthorpe Manor, Belvoir Castle and Wyndham Park.',
    regionBadge: 'Market town',
    shortIntro:
      'Grantham is a practical south Lincolnshire base for country houses, Newton heritage, parks and road or rail-connected weekends.',
    bestFor: 'Country houses, heritage, Belton House, Woolsthorpe Manor and practical day trips.',
    goodBaseFor: 'Belton House, Woolsthorpe Manor, Belvoir Castle, Stamford and the A1 corridor.',
    suggestedStayLength: '1-2 nights',
    bestSeasons: 'Spring to autumn for estates and parks',
    verificationStatus: 'Editorially reviewed; estate opening and event details need direct checks.',
    knownFor: 'Belton House, St Wulfram\'s Church, Isaac Newton connections and nearby country estates.',
    stayAdvice: 'Stay centrally for rail access and town facilities, or choose countryside inns for estate-focused trips.',
    nearbyTowns: ['stamford', 'bourne', 'sleaford', 'lincoln'],
    itineraries: [
      { title: 'One day in Grantham', items: ['Visit St Wulfram\'s Church', 'Stop at Grantham Museum', 'Walk Wyndham Park', 'Add Belton House if time allows'] },
      { title: 'Weekend break in Grantham', items: ['Use one day for Belton House', 'Use one day for Woolsthorpe Manor or Belvoir Castle'] },
      { title: 'Family-friendly plan', items: ['Belton House and Wyndham Park make the easiest family pair'] },
      { title: 'Rainy-day option', items: ['Use Grantham Museum, St Wulfram\'s and country house interiors when open'] },
      { title: 'Outdoor option', items: ['Plan estate walks at Belton or countryside routes around the Vale of Belvoir'] },
    ],
    attractions: [
      { name: 'Belton House', category: 'Historic site', description: 'A major National Trust country house and one of Grantham\'s strongest visitor draws.', tags: ['Country house', 'Garden', 'Family-friendly'], officialWebsiteUrl: 'https://www.nationaltrust.org.uk/visit/nottinghamshire-lincolnshire/belton-estate', needsVerification: v },
      { name: 'St Wulfram\'s Church', category: 'Historic site', description: 'A landmark church with a striking spire and strong town-centre presence.', tags: ['Church', 'Heritage', 'Architecture'], officialWebsiteUrl: 'https://www.stwulframs.org.uk/', needsVerification: v },
      { name: 'Grantham Museum', category: 'Museum', description: 'A compact stop for local history and Grantham\'s Newton and Thatcher connections.', tags: ['Museum', 'Rainy day', 'Local history'], officialWebsiteUrl: 'https://www.granthammuseum.org.uk/', needsVerification: v },
      { name: 'Woolsthorpe Manor nearby', category: 'Heritage', description: 'Isaac Newton\'s birthplace and a major science-history day trip from Grantham.', tags: ['Newton', 'Nearby', 'Heritage'], officialWebsiteUrl: 'https://www.nationaltrust.org.uk/visit/nottinghamshire-lincolnshire/woolsthorpe-manor', needsVerification: v },
      { name: 'Belvoir Castle nearby', category: 'Historic site', description: 'A dramatic estate and castle day out west of Grantham.', tags: ['Castle', 'Day trip', 'Garden'], officialWebsiteUrl: 'https://www.belvoircastle.com/', needsVerification: v },
      { name: 'Wyndham Park', category: 'Nature', description: 'A useful green space for families, short walks and relaxed town-centre downtime.', tags: ['Park', 'Family-friendly', 'Free activity'], needsVerification: v },
    ],
    practicalTips: [
      'Grantham is one of Lincolnshire\'s easiest rail bases, but a car helps for country estates.',
      'Check National Trust and castle opening dates before planning a weekend around them.',
      'The best area to stay depends on whether you need the station, A1 access or countryside pubs.',
      'Always check current opening hours, menus, facilities and booking availability directly.',
    ],
  },
  spalding: {
    slug: 'spalding',
    seoTitle: 'Spalding Travel Guide | River Welland, Gardens & Tulip Heritage',
    metaDescription:
      'Plan a Spalding visit with Ayscoughfee Hall, River Welland walks, Springfields, Water Taxi, Pinchbeck Engine Museum and Romany Museum.',
    regionBadge: 'Fens',
    shortIntro:
      'Spalding is a calm fenland town for riverside walks, garden shopping, tulip heritage and low-key south Lincolnshire exploring.',
    bestFor: 'River Welland walks, Ayscoughfee Hall, Springfields, gardens and tulip heritage.',
    goodBaseFor: 'South Lincolnshire fenland, garden centres, the Wash and Stamford or Boston day trips.',
    suggestedStayLength: '1 night or a relaxed day trip',
    bestSeasons: 'Spring for floral heritage; summer for riverside strolling',
    verificationStatus: 'Editorially reviewed; seasonal services need direct checks.',
    knownFor: 'Ayscoughfee Hall, the River Welland, Springfields and horticultural heritage.',
    stayAdvice: 'Stay near the centre for riverside walks, or near Springfields for shopping-led breaks and easy parking.',
    nearbyTowns: ['boston', 'bourne', 'stamford', 'sleaford'],
    itineraries: [
      { title: 'One day in Spalding', items: ['Start at Ayscoughfee Hall', 'Walk the River Welland', 'Visit Springfields Outlet and Festival Gardens', 'Check whether the Water Taxi is operating'] },
      { title: 'Weekend break in Spalding', items: ['Use one day for the town and gardens', 'Use one day for Pinchbeck, fenland villages or Boston'] },
      { title: 'Family-friendly plan', items: ['Combine riverside walks, Springfields and seasonal garden spaces'] },
      { title: 'Rainy-day option', items: ['Use Ayscoughfee Hall, cafes, shopping and museums with verified opening'] },
      { title: 'Outdoor option', items: ['Follow the River Welland and add garden visits or fenland drives'] },
    ],
    attractions: [
      { name: 'Ayscoughfee Hall', category: 'Museum', description: 'A historic hall and gardens that anchor Spalding\'s visitor offer.', tags: ['Museum', 'Garden', 'Heritage'], officialWebsiteUrl: 'https://www.sholland.gov.uk/ayscoughfee', needsVerification: v },
      { name: 'River Welland walks', category: 'Walk', description: 'Flat riverside walking through the town centre and a calm way to see Spalding.', tags: ['River', 'Walk', 'Free activity'], needsVerification: v },
      { name: 'Springfields Outlet & Festival Gardens', category: 'Shopping', description: 'A shopping and garden stop with strong appeal for easy day trips.', tags: ['Shopping', 'Garden', 'Family-friendly'], officialWebsiteUrl: 'https://springfieldsshopping.co.uk/', needsVerification: v },
      { name: 'Spalding Water Taxi', category: 'Other', description: 'A seasonal-feeling visitor idea; check current operation before planning around it.', tags: ['River', 'Seasonal', 'Family-friendly'], needsVerification: v },
      { name: 'Pinchbeck Engine Museum', category: 'Museum', description: 'A fenland engineering heritage stop near Spalding.', tags: ['Museum', 'Heritage', 'Rainy day'], needsVerification: v },
      { name: 'Gordon Boswell Romany Museum', category: 'Museum', description: 'A specialist local museum focused on Romany heritage.', tags: ['Museum', 'Heritage', 'Culture'], needsVerification: v },
    ],
    practicalTips: [
      'Spalding is flat and manageable on foot around the centre and riverside.',
      'A car helps for Pinchbeck, garden centres and fenland day trips.',
      'Check seasonal services such as the Water Taxi before building a plan around them.',
      'Always check current opening hours, menus, facilities and booking availability directly.',
    ],
  },
  sleaford: {
    slug: 'sleaford',
    seoTitle: 'Sleaford Travel Guide | River Slea, Craft, Museums & Windmill',
    metaDescription:
      'Plan a Sleaford visit with Navigation House, Cogglesford Watermill, The Hub, Sleaford Museum, River Slea walks and Heckington Windmill.',
    regionBadge: 'Market town',
    shortIntro:
      'Sleaford is a quieter market town for canal heritage, craft and design, local museums and gentle River Slea walking.',
    bestFor: 'Canal and river heritage, craft/design, museums and quiet market-town breaks.',
    goodBaseFor: 'Central Lincolnshire, Heckington Windmill, RAF heritage drives and rural villages.',
    suggestedStayLength: 'Day trip or 1 night',
    bestSeasons: 'Spring to autumn for walking; year-round for indoor culture when open',
    verificationStatus: 'Editorially reviewed; museum and venue opening needs direct checks.',
    knownFor: 'Navigation House, Cogglesford Watermill, The Hub and River Slea walks.',
    stayAdvice: 'Stay centrally for the River Slea, The Hub and railway access; choose rural edges for quiet countryside.',
    nearbyTowns: ['lincoln', 'grantham', 'boston', 'spalding'],
    itineraries: [
      { title: 'One day in Sleaford', items: ['Visit Navigation House', 'Walk to Cogglesford Watermill', 'Browse The Hub', 'Follow the River Slea'] },
      { title: 'Weekend break in Sleaford', items: ['Use day one for town heritage', 'Use day two for Heckington Windmill and nearby villages'] },
      { title: 'Family-friendly plan', items: ['Keep walks short around the river and add Cogglesford Watermill when open'] },
      { title: 'Rainy-day option', items: ['Use The Hub, Sleaford Museum and cafes after checking opening'] },
      { title: 'Outdoor option', items: ['Walk the River Slea and Sleaford Navigation for flat countryside views'] },
    ],
    attractions: [
      { name: 'Navigation House', category: 'Museum', description: 'A small heritage stop explaining Sleaford\'s navigation and canal history.', tags: ['Museum', 'Canal', 'Heritage'], needsVerification: v },
      { name: 'Cogglesford Watermill', category: 'Heritage', description: 'A working watermill attraction and riverside walk anchor.', tags: ['Watermill', 'Heritage', 'Family-friendly'], needsVerification: v },
      { name: 'The Hub / National Centre for Craft & Design', category: 'Museum', description: 'A key cultural venue for craft, design, exhibitions and indoor plans.', tags: ['Craft', 'Design', 'Rainy day'], officialWebsiteUrl: 'https://hub-sleaford.org.uk/', needsVerification: v },
      { name: 'Sleaford Museum', category: 'Museum', description: 'A local-history stop for visitors who want town context.', tags: ['Museum', 'Local history', 'Rainy day'], officialWebsiteUrl: 'https://www.sleafordmuseum.org.uk/', needsVerification: v },
      { name: 'River Slea walk', category: 'Walk', description: 'A flat and easy way to connect Sleaford\'s heritage sites.', tags: ['River', 'Walk', 'Free activity'], needsVerification: v },
      { name: 'Heckington Windmill nearby', category: 'Heritage', description: 'A distinctive eight-sailed windmill and useful add-on from Sleaford.', tags: ['Windmill', 'Nearby', 'Heritage'], officialWebsiteUrl: 'https://www.heckingtonwindmill.org.uk/', needsVerification: v },
    ],
    practicalTips: [
      'Sleaford is compact and rail-accessible for a low-key day trip.',
      'Check individual museum opening because smaller heritage sites may have limited hours.',
      'A car helps for Heckington Windmill and rural villages.',
      'Always check current opening hours, menus, facilities and booking availability directly.',
    ],
  },
  mablethorpe: {
    slug: 'mablethorpe',
    seoTitle: 'Mablethorpe Travel Guide | Beach Holidays & Seal Sanctuary',
    metaDescription:
      'Plan a Mablethorpe beach break with the beach, seal sanctuary, Queens Park, Sand Train, Lincolnshire AquaPark and Sutton-on-Sea nearby.',
    regionBadge: 'Coast',
    shortIntro:
      'Mablethorpe is a relaxed Lincolnshire coast town for classic family beach holidays, gentle seafront days and nearby caravan parks.',
    bestFor: 'Family beach holidays, seal sanctuary visits, classic coast and quieter seaside breaks.',
    goodBaseFor: 'Mablethorpe Beach, Sutton-on-Sea, Trusthorpe and nearby coastal holiday parks.',
    suggestedStayLength: '2-4 nights',
    bestSeasons: 'Late spring to early autumn; winter for quiet beach walks',
    verificationStatus: 'Editorially reviewed; seasonal attractions need direct checks.',
    knownFor: 'A long sandy beach, seal sanctuary, Queens Park and traditional coastal holidays.',
    stayAdvice: 'Stay near the seafront for beach days, or compare Sutton-on-Sea for a quieter feel.',
    nearbyTowns: ['skegness', 'louth', 'horncastle', 'market-rasen'],
    itineraries: [
      { title: 'One day in Mablethorpe', items: ['Start on Mablethorpe Beach', 'Visit the Seal Sanctuary', 'Use Queens Park for a gentle family stop', 'Take the Sand Train if operating'] },
      { title: 'Weekend break in Mablethorpe', items: ['Use one day for beach and town attractions', 'Use one day for Sutton-on-Sea or coastal walking'] },
      { title: 'Family-friendly plan', items: ['Beach, Queens Park, Seal Sanctuary and seasonal AquaPark make the core plan'] },
      { title: 'Rainy-day option', items: ['Check indoor amusements, cafes and sanctuary information before travelling'] },
      { title: 'Dog-friendly/outdoor option', items: ['Check seasonal beach restrictions and use quieter coastal stretches nearby'] },
    ],
    attractions: [
      { name: 'Mablethorpe Beach', category: 'Beach', description: 'The main family draw: wide sand, seafront walks and classic bucket-and-spade days.', tags: ['Beach', 'Family-friendly', 'Free activity'], needsVerification: v },
      { name: 'Mablethorpe Seal Sanctuary', category: 'Wildlife', description: 'A popular wildlife attraction; check current opening and animal-care information before visiting.', tags: ['Wildlife', 'Family-friendly'], officialWebsiteUrl: 'https://mablethorpesealsanctuary.co.uk/', needsVerification: v },
      { name: 'Queens Park', category: 'Family-friendly', description: 'A gentle family stop close to the seafront with seasonal facilities to verify.', tags: ['Park', 'Family-friendly', 'Outdoor'], needsVerification: v },
      { name: 'Sand Train', category: 'Entertainment', description: 'A seasonal seaside experience; check operation before including it in a day plan.', tags: ['Seasonal', 'Family-friendly', 'Seafront'], needsVerification: v },
      { name: 'Lincolnshire AquaPark', category: 'Family-friendly', description: 'A nearby active attraction for older children and groups; confirm season and booking rules.', tags: ['Aqua park', 'Seasonal', 'Family-friendly'], officialWebsiteUrl: 'https://lincolnshireaquapark.co.uk/', needsVerification: v },
      { name: 'Sutton-on-Sea nearby', category: 'Beach', description: 'A quieter coastal neighbour for promenade walks and a slower beach day.', tags: ['Nearby', 'Beach', 'Quiet coast'], needsVerification: v },
    ],
    practicalTips: [
      'Mablethorpe is easy for beach-first family breaks, but check seasonal attraction dates.',
      'A car helps for Sutton-on-Sea, Trusthorpe and quieter coast stops.',
      'For gentler evenings, compare stays away from the busiest seafront arcades.',
      'Always check current opening hours, menus, facilities and booking availability directly.',
    ],
  },
  'woodhall-spa': {
    slug: 'woodhall-spa',
    seoTitle: 'Woodhall Spa Travel Guide | Kinema, Golf & Woodland Breaks',
    metaDescription:
      'Plan a Woodhall Spa break with Kinema in the Woods, Jubilee Park, Cottage Museum, Dambusters heritage, Petwood Hotel and Spa Trail.',
    regionBadge: 'Countryside',
    shortIntro:
      'Woodhall Spa is a leafy village for woodland breaks, heritage cinema, golf, aviation history and gentle spa-town atmosphere.',
    bestFor: 'Spa village character, Kinema in the Woods, golf, Dambusters and aviation heritage, woodland breaks.',
    goodBaseFor: 'The Spa Trail, Tattershall, BBMF, Lincoln and central Lincolnshire countryside.',
    suggestedStayLength: '1-3 nights',
    bestSeasons: 'Spring to autumn; cosy cinema and heritage weekends year-round',
    verificationStatus: 'Editorially reviewed; event and aviation access needs direct checks.',
    knownFor: 'The Kinema in the Woods, Petwood Hotel heritage, golf and woodland walks.',
    stayAdvice: 'Stay in the village for restaurants, Kinema and Jubilee Park; choose holiday parks nearby for woodland and lake settings.',
    nearbyTowns: ['horncastle', 'lincoln', 'sleaford', 'boston'],
    itineraries: [
      { title: 'One day in Woodhall Spa', items: ['Walk the village centre', 'Visit Jubilee Park', 'See the Dambusters Memorial', 'Book a film at the Kinema'] },
      { title: 'Weekend break in Woodhall Spa', items: ['Use day one for village, Kinema and Petwood heritage', 'Use day two for the Spa Trail, BBMF or Tattershall Castle nearby'] },
      { title: 'Family-friendly plan', items: ['Jubilee Park, woodland walks and Kinema screenings make an easy family mix'] },
      { title: 'Rainy-day option', items: ['Use Kinema in the Woods, Cottage Museum when open and Petwood heritage displays'] },
      { title: 'Dog-friendly/outdoor option', items: ['Use the Spa Trail and woodland paths, checking route conditions and livestock guidance'] },
    ],
    attractions: [
      { name: 'Kinema in the Woods', category: 'Entertainment', description: 'A characterful heritage cinema and one of the village\'s signature visitor experiences.', tags: ['Cinema', 'Rainy day', 'Heritage'], officialWebsiteUrl: 'https://thekinemainthewoods.co.uk/', needsVerification: v },
      { name: 'Jubilee Park', category: 'Family-friendly', description: 'A central park and seasonal leisure focus for families and relaxed village days.', tags: ['Park', 'Family-friendly', 'Outdoor'], officialWebsiteUrl: 'https://www.jubileeparkwoodhallspa.co.uk/', needsVerification: v },
      { name: 'Woodhall Spa Cottage Museum', category: 'Museum', description: 'A small local-history museum explaining the village\'s spa heritage.', tags: ['Museum', 'Local history', 'Rainy day'], officialWebsiteUrl: 'https://www.cottagemuseum.co.uk/', needsVerification: v },
      { name: 'Dambusters Memorial', category: 'Heritage', description: 'A key aviation heritage stop linked to the area\'s wartime story.', tags: ['Aviation', 'Memorial', 'Heritage'], needsVerification: v },
      { name: 'Petwood Hotel heritage', category: 'Heritage', description: 'Known for its Dambusters associations; check public access and displays before visiting.', tags: ['Aviation', 'Hotel heritage', 'History'], officialWebsiteUrl: 'https://www.petwood.co.uk/', needsVerification: v },
      { name: 'Spa Trail', category: 'Walk', description: 'A traffic-free route linking Woodhall Spa and Horncastle for walking and cycling.', tags: ['Walk', 'Cycle', 'Outdoor'], needsVerification: v },
      { name: 'BBMF / Tattershall Castle nearby', category: 'Heritage', description: 'Useful nearby aviation and castle add-ons for a two-day stay.', tags: ['Nearby', 'Aviation', 'Castle'], needsVerification: v },
    ],
    practicalTips: [
      'Woodhall Spa rewards slower stays; book dining and Kinema tickets ahead for weekends.',
      'A car helps for BBMF, Tattershall Castle and wider aviation heritage.',
      'Village walking is gentle, but some trail sections need weather-aware footwear.',
      'Always check current opening hours, menus, facilities and booking availability directly.',
    ],
  },
  horncastle: {
    slug: 'horncastle',
    seoTitle: 'Horncastle Travel Guide | Antiques, Wolds & Countryside',
    metaDescription:
      'Plan a Horncastle break with antiques, the Joseph Banks Centre, town walks, Spa Trail links, Cadwell Park nearby and Wolds day trips.',
    regionBadge: 'Wolds',
    shortIntro:
      'Horncastle is a small Wolds-edge town for antiques, market-town browsing, Joseph Banks heritage and countryside days.',
    bestFor: 'Antiques, Wolds base, Joseph Banks, countryside and aviation or motorsport nearby.',
    goodBaseFor: 'The southern Lincolnshire Wolds, Woodhall Spa, Cadwell Park and quiet village drives.',
    suggestedStayLength: '1-2 nights',
    bestSeasons: 'Spring to autumn for walking and browsing',
    verificationStatus: 'Editorially reviewed; shop and event details need direct checks.',
    knownFor: 'Antique shops, Joseph Banks connections and access to the Lincolnshire Wolds.',
    stayAdvice: 'Stay centrally for antiques and food, or choose countryside accommodation for walks and village pubs.',
    nearbyTowns: ['woodhall-spa', 'louth', 'market-rasen', 'lincoln'],
    itineraries: [
      { title: 'One day in Horncastle', items: ['Follow an antiques trail', 'Visit the Joseph Banks Centre', 'Walk the town centre', 'Add a countryside pub or Wolds viewpoint'] },
      { title: 'Weekend break in Horncastle', items: ['Use day one for antiques and town heritage', 'Use day two for Wolds walks, Woodhall Spa or Cadwell Park'] },
      { title: 'Family-friendly plan', items: ['Keep the town stop short and combine it with the Spa Trail or Woodhall Spa'] },
      { title: 'Rainy-day option', items: ['Use antiques browsing, cafes and Joseph Banks Centre if open'] },
      { title: 'Dog-friendly/outdoor option', items: ['Use Wolds footpaths and Spa Trail sections, checking route access'] },
    ],
    attractions: [
      { name: 'Horncastle antiques trail', category: 'Shopping', description: 'The town\'s best-known visitor theme and a strong slow-browse activity.', tags: ['Antiques', 'Shopping', 'Independent'], needsVerification: v },
      { name: 'Joseph Banks Centre', category: 'Museum', description: 'A heritage and learning stop linked to the botanist Sir Joseph Banks.', tags: ['Museum', 'Heritage', 'Rainy day'], officialWebsiteUrl: 'https://www.joseph-banks.org.uk/', needsVerification: v },
      { name: 'Horncastle market town walk', category: 'Walk', description: 'A compact way to understand the town\'s lanes, river setting and independent shops.', tags: ['Walk', 'Town centre', 'Free activity'], needsVerification: v },
      { name: 'Spa Trail connection', category: 'Walk', description: 'A nearby walking and cycling link between Horncastle and Woodhall Spa.', tags: ['Walk', 'Cycle', 'Outdoor'], needsVerification: v },
      { name: 'Cadwell Park nearby', category: 'Entertainment', description: 'A motorsport day out within reach; check event calendars before travelling.', tags: ['Motorsport', 'Nearby', 'Events'], officialWebsiteUrl: 'https://www.cadwellpark.co.uk/', needsVerification: v },
      { name: 'Lincolnshire Wolds day trips', category: 'Nature', description: 'Horncastle is well placed for Wolds villages, viewpoints and quiet drives.', tags: ['Wolds', 'Nature', 'Day trip'], needsVerification: v },
    ],
    practicalTips: [
      'Antique shops can have individual opening patterns, so check before a specialist trip.',
      'Horncastle is a better car-based base than rail-based base for Wolds exploring.',
      'The best area to stay is central for browsing or rural edges for countryside quiet.',
      'Always check current opening hours, menus, facilities and booking availability directly.',
    ],
  },
  gainsborough: {
    slug: 'gainsborough',
    seoTitle: 'Gainsborough Travel Guide | Old Hall, River Trent & West Lindsey',
    metaDescription:
      'Plan a Gainsborough visit with Gainsborough Old Hall, riverside walks, Marshall\'s Yard, Trinity Arts Centre and Trent villages nearby.',
    regionBadge: 'Market town',
    shortIntro:
      'Gainsborough is a West Lindsey base for medieval heritage, River Trent walks, practical shopping and quieter western Lincolnshire exploring.',
    bestFor: 'Medieval heritage, Gainsborough Old Hall, River Trent and West Lindsey day trips.',
    goodBaseFor: 'Trent villages, Lincoln, Newark, West Lindsey and quiet countryside drives.',
    suggestedStayLength: 'Day trip or 1 night',
    bestSeasons: 'Spring to autumn for riverside walking; year-round for heritage when open',
    verificationStatus: 'Editorially reviewed; venue and arts programming need direct checks.',
    knownFor: 'Gainsborough Old Hall, the River Trent and West Lindsey heritage.',
    stayAdvice: 'Stay centrally for Old Hall and Marshall\'s Yard, or look nearby for countryside stays.',
    nearbyTowns: ['lincoln', 'market-rasen', 'grantham', 'horncastle'],
    itineraries: [
      { title: 'One day in Gainsborough', items: ['Visit Gainsborough Old Hall', 'Walk the riverside', 'Browse Marshall\'s Yard', 'Check Trinity Arts Centre listings'] },
      { title: 'Weekend break in Gainsborough', items: ['Use day one for town heritage', 'Use day two for Trent villages, Lincoln or Newark'] },
      { title: 'Family-friendly plan', items: ['Old Hall, riverside walking and simple food stops make a manageable day'] },
      { title: 'Rainy-day option', items: ['Use Old Hall, Trinity Arts Centre programming and cafes'] },
      { title: 'Outdoor option', items: ['Follow the River Trent and explore nearby villages by car'] },
    ],
    attractions: [
      { name: 'Gainsborough Old Hall', category: 'Historic site', description: 'One of the strongest medieval heritage sites in Lincolnshire and the key visitor anchor.', tags: ['Historic house', 'Medieval', 'Heritage'], officialWebsiteUrl: 'https://www.gainsborougholdhall.com/', needsVerification: v },
      { name: 'River Trent riverside walk', category: 'Walk', description: 'A simple outdoor add-on linking the town to its river setting.', tags: ['River', 'Walk', 'Free activity'], needsVerification: v },
      { name: 'Marshall\'s Yard', category: 'Shopping', description: 'A practical shopping and food stop in a regenerated historic industrial setting.', tags: ['Shopping', 'Food', 'Town centre'], needsVerification: v },
      { name: 'Trinity Arts Centre', category: 'Entertainment', description: 'A useful culture and rainy-day option; check current programme before visiting.', tags: ['Arts', 'Rainy day', 'Entertainment'], officialWebsiteUrl: 'https://www.trinityarts.co.uk/', needsVerification: v },
      { name: 'Trent villages nearby', category: 'Nature', description: 'Quiet villages and river landscapes make good low-key day trips.', tags: ['Nearby', 'Village', 'Countryside'], needsVerification: v },
      { name: 'Lincoln and Newark day trips', category: 'Other', description: 'Gainsborough can work as a practical western base for larger heritage days out.', tags: ['Day trip', 'Nearby', 'Heritage'], needsVerification: v },
    ],
    practicalTips: [
      'A car is useful for Trent villages and wider West Lindsey exploring.',
      'Check Old Hall opening before planning a trip around it.',
      'The town centre is compact for Old Hall, Marshall\'s Yard and riverside walking.',
      'Always check current opening hours, menus, facilities and booking availability directly.',
    ],
  },
  'market-rasen': {
    slug: 'market-rasen',
    seoTitle: 'Market Rasen Travel Guide | Race Days, Wolds & Willingham Woods',
    metaDescription:
      'Plan a Market Rasen visit with the racecourse, Willingham Woods, town cafes, Viking Way and Wolds walks, Tealby nearby and race-day ideas.',
    regionBadge: 'Wolds',
    shortIntro:
      'Market Rasen is a compact Wolds-edge town for race days, woodland walks, quiet cafes and countryside breaks.',
    bestFor: 'Race days, Wolds walking, Willingham Woods and countryside breaks.',
    goodBaseFor: 'Market Rasen Racecourse, Tealby, Willingham Woods and northern Wolds walks.',
    suggestedStayLength: '1-2 nights, or day trip on race days',
    bestSeasons: 'Race fixtures year-round; spring to autumn for walking',
    verificationStatus: 'Editorially reviewed; fixtures and venue details need direct checks.',
    knownFor: 'Market Rasen Racecourse, Willingham Woods and access to the Lincolnshire Wolds.',
    stayAdvice: 'Stay in town for race-day convenience, or nearby villages for quiet Wolds breaks.',
    nearbyTowns: ['lincoln', 'louth', 'horncastle', 'gainsborough'],
    itineraries: [
      { title: 'One day in Market Rasen', items: ['Browse the town centre cafes', 'Walk Willingham Woods', 'Add a short Wolds drive or Tealby stop'] },
      { title: 'Weekend break in Market Rasen', items: ['Use one day for racecourse plans if fixtures suit', 'Use one day for Viking Way or Wolds walks'] },
      { title: 'Family-friendly plan', items: ['Willingham Woods and cafe stops make the easiest non-race day plan'] },
      { title: 'Rainy-day option', items: ['Use cafes, local shops and nearby Lincoln or heritage venues'] },
      { title: 'Race-day itinerary', items: ['Check fixture times, book food and taxis early, and allow time for traffic around the course'] },
    ],
    attractions: [
      { name: 'Market Rasen Racecourse', category: 'Entertainment', description: 'The town\'s headline attraction and a strong reason to plan a timed visit.', tags: ['Racing', 'Events', 'Day out'], officialWebsiteUrl: 'https://www.thejockeyclub.co.uk/market-rasen/', needsVerification: v },
      { name: 'Willingham Woods', category: 'Nature', description: 'A popular woodland stop for walks, cycling and a countryside reset.', tags: ['Woodland', 'Walk', 'Family-friendly'], needsVerification: v },
      { name: 'Market Rasen town centre cafes', category: 'Shopping', description: 'Small-town food and browsing stops that work around race days and walks.', tags: ['Cafe', 'Shopping', 'Town centre'], needsVerification: v },
      { name: 'Viking Way / Wolds walks', category: 'Walk', description: 'Use the town as a base for longer-distance and circular Wolds walking.', tags: ['Walk', 'Wolds', 'Outdoor'], needsVerification: v },
      { name: 'Tealby nearby', category: 'Other', description: 'A pretty Wolds village add-on for pubs, stone cottages and slower countryside drives.', tags: ['Village', 'Nearby', 'Countryside'], needsVerification: v },
      { name: 'Race-day itinerary', category: 'Entertainment', description: 'Plan around fixture times, transport and meals rather than treating race day as a normal town visit.', tags: ['Racing', 'Planning', 'Events'], needsVerification: v },
    ],
    practicalTips: [
      'Race days change traffic, taxis and restaurant demand; check fixture dates before booking.',
      'A car helps for Tealby, Wolds villages and Willingham Woods.',
      'Walking routes can be muddy after rain, so pack practical footwear.',
      'Always check current opening hours, menus, facilities and booking availability directly.',
    ],
  },
  bourne: {
    slug: 'bourne',
    seoTitle: 'Bourne Travel Guide | Woods, Heritage & Countryside Breaks',
    metaDescription:
      'Plan a Bourne visit with Bourne Woods, Wellhead Gardens, Red Hall, Baldock\'s Mill, Grimsthorpe Castle, Deeping Lakes and Clipsham Yew Tree Avenue.',
    regionBadge: 'Countryside',
    shortIntro:
      'Bourne is a quiet south Lincolnshire town for woodland walks, local heritage, gardens and countryside add-ons near Stamford and Rutland.',
    bestFor: 'Woodland walks, quiet countryside, local heritage and Grimsthorpe Castle nearby.',
    goodBaseFor: 'Bourne Woods, Grimsthorpe Castle, Stamford, Deeping Lakes and Rutland-border days.',
    suggestedStayLength: '1-2 nights',
    bestSeasons: 'Spring to autumn for woodland and garden walks',
    verificationStatus: 'Editorially reviewed; heritage opening and nature reserve access need direct checks.',
    knownFor: 'Bourne Woods, Wellhead Gardens, Red Hall and quiet countryside access.',
    stayAdvice: 'Stay near the centre for heritage and food, or rural edges for woodland and countryside access.',
    nearbyTowns: ['stamford', 'grantham', 'spalding', 'sleaford'],
    itineraries: [
      { title: 'One day in Bourne', items: ['Walk Bourne Woods', 'Visit Wellhead Gardens', 'See Red Hall', 'Check Baldock\'s Mill / Bourne Heritage Centre opening'] },
      { title: 'Weekend break in Bourne', items: ['Use day one for Bourne town and woods', 'Use day two for Grimsthorpe Castle, Deeping Lakes or Stamford'] },
      { title: 'Family-friendly plan', items: ['Bourne Woods and Wellhead Gardens keep the day simple and outdoorsy'] },
      { title: 'Rainy-day option', items: ['Use heritage stops and nearby Stamford cafes or indoor attractions'] },
      { title: 'Dog-friendly/outdoor option', items: ['Bourne Woods is the natural anchor; check route signs and seasonal ground conditions'] },
    ],
    attractions: [
      { name: 'Bourne Woods', category: 'Nature', description: 'The strongest outdoor draw, with woodland trails suited to walking and family exploring.', tags: ['Woodland', 'Walk', 'Family-friendly'], officialWebsiteUrl: 'https://www.forestryengland.uk/bourne-woods', needsVerification: v },
      { name: 'Wellhead Gardens', category: 'Garden', description: 'A peaceful town green space linked to Bourne\'s springs and local character.', tags: ['Garden', 'Free activity', 'Town centre'], needsVerification: v },
      { name: 'Red Hall', category: 'Historic site', description: 'A distinctive heritage building and local landmark.', tags: ['Heritage', 'Architecture', 'Town centre'], needsVerification: v },
      { name: 'Baldock\'s Mill / Bourne Heritage Centre', category: 'Museum', description: 'A small local-history stop; check opening before planning around it.', tags: ['Museum', 'Local history', 'Rainy day'], needsVerification: v },
      { name: 'Grimsthorpe Castle nearby', category: 'Historic site', description: 'A major nearby estate for castle, gardens, parkland and seasonal events.', tags: ['Castle', 'Garden', 'Nearby'], officialWebsiteUrl: 'https://grimsthorpe.co.uk/', needsVerification: v },
      { name: 'Deeping Lakes / Clipsham Yew Tree Avenue nearby', category: 'Nature', description: 'Useful nature and countryside add-ons within reach of Bourne.', tags: ['Nature', 'Day trip', 'Outdoor'], needsVerification: v },
    ],
    practicalTips: [
      'A car is helpful for Grimsthorpe, Deeping Lakes and Clipsham.',
      'Check heritage-centre opening because small local sites may have limited hours.',
      'Bourne works best for visitors who prefer quiet countryside over busy resort energy.',
      'Always check current opening hours, menus, facilities and booking availability directly.',
    ],
  },
};

export function getTownGuideProfile(slug: string) {
  return townGuideProfiles[slug];
}
