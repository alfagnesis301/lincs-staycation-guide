export interface Guide {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  readingTime: string;
  intro?: string;
  sections?: {
    heading: string;
    body: string[];
    links?: { label: string; href: string }[];
  }[];
  /** When false (default), the post is a planned-but-not-yet-written stub
   *  and must NOT appear in /blog, the sitemap, or related-guides strips. */
  published?: boolean;
}

export const guides: Guide[] = [
  {
    id: 'things-to-do-with-kids',
    title: 'Things to Do in Lincolnshire with Kids',
    slug: 'things-to-do-with-kids',
    category: 'Family',
    description: 'Practical ideas for family-friendly days out, rainy day activities and free things to do with children across Lincolnshire.',
    readingTime: '8 min read',
    published: true,
    intro:
      'Lincolnshire works well for family days out because it mixes big, easy wins such as beaches and castles with quieter parks, woodland walks and museums. Use this guide as a planning shortlist, then check each venue directly for opening times, age suitability, tickets and facilities before travelling.',
    sections: [
      {
        heading: 'Start with the easiest family bases',
        body: [
          'Lincoln is the strongest choice for a city-based day out: Lincoln Castle, Lincoln Cathedral, Steep Hill and the Museum of Lincolnshire Life can be combined without long drives once you are in the historic quarter.',
          'Skegness and Mablethorpe are better for classic seaside days, with sand, promenades, arcades and simple food stops. Check seasonal beach rules, pier opening and attraction times before promising children a specific activity.',
        ],
        links: [
          { label: 'Family Days Out section', href: '/family-days-out' },
          { label: 'Things to Do in Lincoln', href: '/things-to-do/lincoln' },
          { label: 'Skegness town guide', href: '/town-guides/skegness' },
        ],
      },
      {
        heading: 'Rainy-day and low-cost ideas',
        body: [
          'For wet weather, prioritise museums, galleries, cinemas and heritage interiors rather than outdoor-only attractions. Lincoln, Stamford, Sleaford, Boston and Woodhall Spa all have useful indoor anchors if you plan ahead.',
          'For lower-cost days, build the plan around beaches, country parks, riverside walks, market towns and self-guided heritage trails. Bring a backup cafe or indoor stop because weather and seasonal facilities can change quickly.',
        ],
      },
    ],
  },
  {
    id: 'best-beaches',
    title: 'Best Beaches in Lincolnshire',
    slug: 'best-beaches',
    category: 'Coast',
    description: 'A guide to the best sandy beaches, quiet coastal spots and family-friendly seaside destinations along the Lincolnshire Coast.',
    readingTime: '7 min read',
    published: true,
    intro:
      'Lincolnshire has a varied coastline: busy resort beaches for easy family days, quieter stretches for walking, and nature reserves where tides, weather and wildlife matter more than amusements. Check local signage, tide times, seasonal dog restrictions and parking before setting off.',
    sections: [
      {
        heading: 'Best for classic seaside days',
        body: [
          'Skegness is the practical first choice for a traditional seaside day, with the main beach, promenade, pier, arcades and nearby family attractions close together.',
          'Mablethorpe is a strong family beach option with wide sand and a gentler resort feel, while Sutton-on-Sea is usually better for slower promenade walks and quieter coastal breaks.',
        ],
        links: [
          { label: 'Lincolnshire Coast guide', href: '/lincolnshire-coast' },
          { label: 'Skegness town guide', href: '/town-guides/skegness' },
          { label: 'Mablethorpe town guide', href: '/town-guides/mablethorpe' },
        ],
      },
      {
        heading: 'Best for quieter coast and nature',
        body: [
          'Gibraltar Point is the standout nature-led coastal stop near Skegness. It is better treated as a reserve walk and birdwatching visit than a bucket-and-spade beach day.',
          'Chapel St Leonards, Anderby Creek and Sutton-on-Sea are useful alternatives when you want more space, slower walks or a less resort-heavy trip. Facilities vary by season, so check before relying on cafes or toilets.',
        ],
      },
    ],
  },
  {
    id: 'dog-friendly-days-out',
    title: 'Dog-Friendly Days Out in Lincolnshire',
    slug: 'dog-friendly-days-out',
    category: 'Dog-Friendly',
    description: 'Where to take your dog for walks, pub lunches, beach days and countryside adventures across Lincolnshire.',
    readingTime: '6 min read',
    published: true,
    intro:
      'Dog-friendly planning in Lincolnshire is mostly about choosing the right landscape and checking current rules. Beaches, reserves, estates, pubs and accommodation can all change policies by season, so treat this as a planning guide and confirm details direct.',
    sections: [
      {
        heading: 'Good dog-friendly day-out ideas',
        body: [
          'The Lincolnshire Wolds are the best starting point for countryside walks, especially around Louth, Market Rasen, Horncastle and Woodhall Spa. Keep dogs under close control around livestock and nesting birds.',
          'The coast can work well outside restricted beach zones. Check seasonal dog bans on resort beaches before travelling, then consider quieter stretches or reserve paths where dogs are permitted.',
        ],
        links: [
          { label: 'Dog-Friendly Lincolnshire', href: '/dog-friendly' },
          { label: 'Louth town guide', href: '/town-guides/louth' },
          { label: 'Lincolnshire Coast guide', href: '/lincolnshire-coast' },
        ],
      },
      {
        heading: 'Before you travel',
        body: [
          'Check pub and cafe dog policies directly, especially for indoor seating, busy weekends and food-service times.',
          'For nature reserves and heritage sites, look for lead rules, restricted areas and seasonal guidance. These details are more reliable on official venue pages than on old third-party listings.',
        ],
      },
    ],
  },
  {
    id: 'weekend-breaks',
    title: 'Weekend Breaks in Lincolnshire',
    slug: 'weekend-breaks',
    category: 'Stays',
    description: 'Plan a weekend escape with ideas for couples, families and groups, from countryside cottages to coastal getaways.',
    readingTime: '9 min read',
    published: true,
    intro:
      'The best Lincolnshire weekend break depends on the base you choose: Lincoln for heritage and food, Skegness or Mablethorpe for seaside energy, Stamford for architecture and boutique stays, and the Wolds for slower countryside plans.',
    sections: [
      {
        heading: 'Best weekend bases',
        body: [
          'Choose Lincoln for a compact city break: cathedral quarter, castle, museums, Steep Hill, Brayford Waterfront and strong rail access.',
          'Choose Stamford for a gentler market-town weekend with limestone streets, independent shops and Burghley House nearby. Choose Woodhall Spa or Louth if you want Wolds walks, heritage and slower evenings.',
        ],
        links: [
          { label: 'Places to Stay', href: '/places-to-stay' },
          { label: 'Lincoln town guide', href: '/town-guides/lincoln' },
          { label: 'Stamford town guide', href: '/town-guides/stamford' },
        ],
      },
      {
        heading: 'How to plan without overloading the trip',
        body: [
          'Pick one anchor activity for each day, then add food, walks and optional stops around it. Lincolnshire distances can look small on a map but rural roads and seasonal traffic can slow a day down.',
          'Book accommodation only after checking current location, parking, accessibility, dog rules and cancellation terms with the operator or booking platform.',
        ],
      },
    ],
  },
  {
    id: 'best-places-to-stay',
    title: 'Best Places to Stay in Lincolnshire',
    slug: 'best-places-to-stay',
    category: 'Stays',
    description: 'A practical guide to choosing where to base yourself in Lincolnshire, from cathedral city breaks and coastal holidays to Wolds villages, spa-style stays and family-friendly seaside towns.',
    readingTime: '10 min read',
    published: true,
    intro:
      'A practical guide to choosing where to base yourself in Lincolnshire, from cathedral city breaks and coastal holidays to Wolds villages, spa-style stays and family-friendly seaside towns.',
    sections: [
      {
        heading: 'Best for city breaks: Lincoln',
        body: [
          'Lincoln is the most practical base for a cathedral city break, with the historic uphill quarter, Lincoln Castle, Lincoln Cathedral, museums, shops, food stops and Brayford Waterfront all close enough for a compact itinerary.',
          'It is also one of the strongest choices if you want rail access or a stay that does not depend on driving every day. Check accommodation location, parking, accessibility and breakfast arrangements directly before booking.',
        ],
        links: [
          { label: 'Lincoln town guide', href: '/town-guides/lincoln' },
          { label: 'Places to Stay in Lincoln', href: '/places-to-stay/lincoln' },
        ],
      },
      {
        heading: 'Best for coast: Skegness, Mablethorpe, Sutton-on-Sea',
        body: [
          'Skegness is the easiest base for classic seaside facilities, family attractions, holiday parks and a lively resort feel. Mablethorpe and Sutton-on-Sea are better suited to slower coastal stays, beach walks and quieter seaside routines.',
          'For coastal stays, check seasonal opening, beach rules, dog policies, entertainment schedules, parking and whether you are booking a room, static caravan, lodge, touring pitch or self-catering unit.',
        ],
        links: [
          { label: 'Skegness town guide', href: '/town-guides/skegness' },
          { label: 'Mablethorpe town guide', href: '/town-guides/mablethorpe' },
          { label: 'Lincolnshire Coast guide', href: '/lincolnshire-coast' },
        ],
      },
      {
        heading: 'Best for boutique weekends: Stamford',
        body: [
          'Stamford works well for a slower market-town weekend, with historic streets, independent shops, pubs, riverside walks and Burghley House nearby.',
          'It suits visitors who want a town-and-country break rather than a resort stay. Confirm current accommodation facilities, parking and cancellation policies directly with the operator before booking.',
        ],
        links: [
          { label: 'Stamford town guide', href: '/town-guides/stamford' },
          { label: 'Places to Stay in Stamford', href: '/places-to-stay/stamford' },
        ],
      },
      {
        heading: 'Best for countryside and Wolds: Louth, Horncastle, Market Rasen',
        body: [
          'Louth, Horncastle and Market Rasen are useful bases for the Lincolnshire Wolds, countryside walks, market-town wandering and quieter food-led breaks.',
          'These areas work best if you are happy to drive between villages, walks and attractions. Check access, seasonal opening and dog rules before building a countryside itinerary around one venue.',
        ],
        links: [
          { label: 'Louth town guide', href: '/town-guides/louth' },
          { label: 'Horncastle town guide', href: '/town-guides/horncastle' },
          { label: 'Market Rasen town guide', href: '/town-guides/market-rasen' },
        ],
      },
      {
        heading: 'Best for spa-style breaks: Woodhall Spa',
        body: [
          'Woodhall Spa is a good choice for a gentler village-style break with woodland, heritage, golf, tea rooms and a distinctive Edwardian feel.',
          'It is especially useful for visitors who want slower days rather than a packed resort itinerary. Check current accommodation policies, spa or leisure access and dining arrangements directly.',
        ],
        links: [
          { label: 'Woodhall Spa town guide', href: '/town-guides/woodhall-spa' },
          { label: 'Things to Do in Woodhall Spa', href: '/things-to-do/woodhall-spa' },
        ],
      },
      {
        heading: 'Best for heritage: Boston, Gainsborough, Grantham',
        body: [
          'Boston, Gainsborough and Grantham are practical bases for heritage-led trips, with historic buildings, riverside settings, country houses and transport links depending on the town.',
          'They are better approached as location choices for specific interests rather than one-size-fits-all holiday bases. Check opening times and accommodation facilities before travelling.',
        ],
        links: [
          { label: 'Boston town guide', href: '/town-guides/boston' },
          { label: 'Gainsborough town guide', href: '/town-guides/gainsborough' },
          { label: 'Grantham town guide', href: '/town-guides/grantham' },
        ],
      },
      {
        heading: 'Best for quieter market-town stays: Bourne, Sleaford, Spalding',
        body: [
          'Bourne, Sleaford and Spalding suit quieter stays where the plan is built around local heritage, riverside walks, gardens, woodland, nearby villages or visiting family and friends.',
          'They can be useful alternatives to the better-known bases, but transport, opening times and evening food options should be checked before you commit to a route.',
        ],
        links: [
          { label: 'Bourne town guide', href: '/town-guides/bourne' },
          { label: 'Sleaford town guide', href: '/town-guides/sleaford' },
          { label: 'Spalding town guide', href: '/town-guides/spalding' },
        ],
      },
      {
        heading: 'Editorial booking note',
        body: [
          'Accommodation facilities, availability, prices and policies can change. Always check directly with the operator before booking.',
          'We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.',
        ],
      },
    ],
  },
  {
    id: 'rainy-day-activities',
    title: 'Rainy Day Activities in Lincolnshire',
    slug: 'rainy-day-activities',
    category: 'Family',
    description: 'Indoor ideas for when the weather turns, including museums, soft play centres, cinemas and indoor attractions.',
    readingTime: '5 min read',
    published: true,
    intro:
      'Rainy days in Lincolnshire are easiest when you plan around towns with indoor anchors. Museums, galleries, churches, cinemas, cafes and heritage interiors make better fallback plans than trying to force a beach or countryside itinerary through bad weather.',
    sections: [
      {
        heading: 'Best rainy-day towns',
        body: [
          'Lincoln is the safest all-weather base because Lincoln Cathedral, Lincoln Castle, Lincoln Museum, the Usher Gallery and the Museum of Lincolnshire Life can be paired with cafes and shops.',
          'Stamford, Boston, Sleaford, Grantham and Woodhall Spa also offer useful indoor stops, but opening patterns vary. Check the official venue website before travelling.',
        ],
        links: [
          { label: 'Things to Do in Lincolnshire', href: '/things-to-do' },
          { label: 'Lincoln town guide', href: '/town-guides/lincoln' },
          { label: 'Family Days Out', href: '/family-days-out' },
        ],
      },
      {
        heading: 'Build a weather-proof itinerary',
        body: [
          'Keep travel distances short, book timed activities where needed, and have a food stop nearby so the day does not depend on a single attraction.',
          'For coastal holidays, combine indoor amusements with cafes and short promenade walks rather than relying entirely on beach time.',
        ],
      },
    ],
  },
  {
    id: 'dog-friendly-stays-coast',
    title: 'Dog-Friendly Stays near the Lincolnshire Coast',
    slug: 'dog-friendly-stays-coast',
    category: 'Dog-Friendly',
    description: 'Find accommodation that welcomes dogs near beaches, coastal walks and seaside towns along the Lincolnshire Coast.',
    readingTime: '6 min read',
    published: true,
    intro:
      'Dog-friendly coastal stays in Lincolnshire need a little planning because beach rules, park policies and accommodation charges can change by season. Use this guide to choose the right coastal base, then confirm pet rules, fees, facilities and nearby walking options directly with the operator before booking.',
    sections: [
      {
        heading: 'Best coastal bases with dogs',
        body: [
          'Skegness, Ingoldmells and Chapel St Leonards work well if you want classic seaside facilities, holiday parks and easy access to family attractions, but you should check seasonal beach dog restrictions before travelling.',
          'Mablethorpe and Sutton-on-Sea are better for slower coastal breaks, promenade walks and quieter stays. For nature-led days, Gibraltar Point can be useful, but always check reserve guidance and dog-control rules before visiting.',
        ],
        links: [
          { label: 'Dog-Friendly Lincolnshire', href: '/dog-friendly' },
          { label: 'Lincolnshire Coast guide', href: '/lincolnshire-coast' },
          { label: 'Skegness town guide', href: '/town-guides/skegness' },
        ],
      },
      {
        heading: 'Accommodation checks',
        body: [
          'Ask whether dogs are allowed in all rooms or only selected units, how many dogs are permitted, whether fees apply, and whether there are breed, size or seasonal restrictions.',
          'For holiday parks, confirm whether dogs are allowed in the specific caravan, lodge, touring pitch or glamping unit you are booking. Site-wide dog-friendly marketing does not always mean every unit accepts pets.',
        ],
        links: [
          { label: 'Caravan parks near Skegness', href: '/caravan-parks/best-caravan-parks-near-skegness' },
          { label: 'Caravan parks near Mablethorpe', href: '/caravan-parks/best-caravan-parks-near-mablethorpe' },
        ],
      },
      {
        heading: 'Plan the dog-friendly day',
        body: [
          'Build the trip around confirmed walks, dog-friendly food stops and accommodation rules rather than assuming every beach, cafe or attraction will allow dogs.',
          'Bring a backup plan for hot weather, wet weather and busy school-holiday days. Coastal towns can be crowded in peak season, so quieter promenades, countryside edges and Wolds walks may be more comfortable for some dogs.',
        ],
      },
    ],
  },
  {
    id: 'best-caravan-parks-skegness',
    title: 'Best Caravan Parks near Skegness',
    slug: 'best-caravan-parks-skegness',
    category: 'Coast',
    description: 'Compare family-friendly caravan parks and holiday parks near Skegness for your next seaside holiday.',
    readingTime: '7 min read',
  },
  {
    id: 'hidden-gems',
    title: 'Hidden Gems in Lincolnshire',
    slug: 'hidden-gems',
    category: 'Explore',
    description: 'Discover quieter destinations, lesser-known attractions and peaceful escapes away from the usual tourist spots.',
    readingTime: '8 min read',
  },
];

export const publishedGuides = guides.filter((g) => g.published);

export function getGuidesByCategory(category: string): Guide[] {
  return publishedGuides.filter((guide) => guide.category.toLowerCase() === category.toLowerCase());
}
