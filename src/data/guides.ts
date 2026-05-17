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
    description: 'A practical guide to accommodation options across Lincolnshire, from boutique hotels to budget-friendly campsites.',
    readingTime: '10 min read',
    published: true,
    intro:
      'There is no single best place to stay in Lincolnshire. The right choice depends on whether you want a walkable city break, a seaside holiday park, a market-town weekend, a countryside cottage or a touring base. Compare by location first, then check live availability, facilities and prices direct.',
    sections: [
      {
        heading: 'Choose the right base first',
        body: [
          'Lincoln is best for cathedral, castle, museums, food and rail-friendly weekends. Skegness, Mablethorpe, Sutton-on-Sea and Chapel St Leonards suit coast-first breaks and caravan holidays.',
          'Stamford, Louth, Woodhall Spa, Horncastle and Market Rasen are better for slower stays, independent shops, Wolds access and countryside day trips.',
        ],
        links: [
          { label: 'Places to Stay in Lincolnshire', href: '/places-to-stay' },
          { label: 'Caravan Parks in Lincolnshire', href: '/caravan-parks' },
          { label: 'Town Guides', href: '/town-guides' },
        ],
      },
      {
        heading: 'What we do not claim',
        body: [
          'We do not invent ratings, review counts, prices or availability. Accommodation details change quickly, so current facilities, parking, accessibility, dog policies and charges should be checked directly with the operator.',
          'Caravan and holiday parks are kept separate from hotels, inns, B&Bs and cottages so visitors can compare like with like.',
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
