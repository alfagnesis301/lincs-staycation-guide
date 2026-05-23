export interface Guide {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  seoTitle?: string;
  metaDescription?: string;
  readingTime: string;
  lastUpdated?: string;
  intro?: string;
  sections?: {
    heading: string;
    body: string[];
    links?: { label: string; href: string }[];
  }[];
  faqs?: { question: string; answer: string }[];
  relatedGuides?: { title: string; href: string; label?: string }[];
  editorialNote?: string;
  /** When false, the post is a planned draft and must not appear in /blog, sitemap, or related strips. */
  published?: boolean;
}

export const guides: Guide[] = [
  {
    id: 'things-to-do-with-kids',
    title: 'Things to Do in Lincolnshire with Kids',
    slug: 'things-to-do-with-kids',
    category: 'Family',
    description:
      'Practical family ideas across Lincolnshire, including city days, coast trips, rainy-day options, nature stops and low-cost planning tips.',
    seoTitle: 'Things to Do in Lincolnshire with Kids | Family Days Out Guide',
    metaDescription:
      'Plan family things to do in Lincolnshire with kids, including Lincoln, Skegness, Mablethorpe, nature reserves, rainy-day ideas and low-cost visitor tips.',
    readingTime: '10 min read',
    lastUpdated: '17 May 2026',
    published: true,
    intro:
      'Lincolnshire works well for families because it mixes city history, coast, countryside, museums and simple outdoor space. The best choice depends on age, weather, travel time and how much structure your children need. Use this guide for practical planning, then check opening times, age suitability, facilities, accessibility and ticketing directly before travelling.',
    sections: [
      {
        heading: 'Quick family picks',
        body: [
          'Lincoln is the strongest all-weather family base, with castle time, cathedral interiors, museums, cafes and compact walking routes around the historic quarter.',
          'Skegness is the simplest classic seaside choice when children want beach time, amusements, promenade food and a lively resort feel. Mablethorpe is useful when wide sand and a slightly gentler pace matter more.',
        ],
        links: [
          { label: 'Family Days Out section', href: '/family-days-out' },
          { label: 'Lincoln town guide', href: '/town-guides/lincoln' },
          { label: 'Skegness town guide', href: '/town-guides/skegness' },
        ],
      },
      {
        heading: 'Plan by age and energy level',
        body: [
          'Younger children usually need short distances, toilets, food stops and flexible timing. Older children and teenagers may prefer castles, aviation heritage, arcades, waterfront food or longer outdoor plans.',
          'Do not build the whole day around one attraction unless you have checked that it is open, suitable and practical for your group. A good family day normally has one main stop, one food plan and one fallback.',
        ],
      },
      {
        heading: 'Rainy-day family backup ideas',
        body: [
          'The safest family plan has a weather backup from the start. Lincoln is the strongest all-weather base, but Stamford, Boston, Grantham, Sleaford and Woodhall Spa can also work when you choose compact town plans.',
          'For wet coastal days, treat the beach as a short walk rather than the whole day. Add indoor amusements, cafes, cinemas, museums or a drive to a nearby town attraction.',
        ],
        links: [{ label: 'Rainy Day Activities', href: '/blog/rainy-day-activities' }],
      },
      {
        heading: 'Nature, wildlife and outdoor space',
        body: [
          'For children who need space rather than queues, plan around parks, woods, nature reserves and short countryside walks. Woodhall Spa, Louth, the Wolds and the Lincolnshire coast all work well when the day needs fresh air and flexible timing.',
          'Check paths, toilets, parking, dogs, pushchair access and seasonal restrictions before setting off. Nature-led days are often easier when you keep the route short and add a cafe or picnic stop nearby.',
        ],
        links: [
          { label: 'Things to Do in Lincolnshire', href: '/things-to-do' },
          { label: 'Woodhall Spa town guide', href: '/town-guides/woodhall-spa' },
          { label: 'Louth town guide', href: '/town-guides/louth' },
        ],
      },
      {
        heading: 'Coast, arcades and classic resort days',
        body: [
          'The Lincolnshire coast is the easiest choice when children want a traditional day out: sand, chips, amusements, promenades and simple food stops. Skegness is busiest and most structured; Mablethorpe and Sutton-on-Sea can feel calmer depending on season.',
          'Treat tide, wind and parking as part of the plan. If the beach weather turns, move to arcades, cafes, indoor attractions or a shorter promenade walk rather than forcing a full outdoor day.',
        ],
        links: [
          { label: 'Best Beaches in Lincolnshire', href: '/blog/best-beaches' },
          { label: 'Skegness town guide', href: '/town-guides/skegness' },
          { label: 'Mablethorpe town guide', href: '/town-guides/mablethorpe' },
        ],
      },
      {
        heading: 'Low-cost family planning tips',
        body: [
          'A family day out does not have to mean a full paid attraction. Mix free walks, beaches, parks and town exploring with one paid stop if budget matters.',
          'Bring snacks, check parking costs and avoid long drives between short activities. Rural distances can make a simple day feel harder if children are tired.',
        ],
      },
      {
        heading: 'Where to stay with kids',
        body: [
          'Families often benefit from staying close to the main reason for the trip: Lincoln for city history, Skegness or Mablethorpe for coast, and Woodhall Spa or the Wolds for slower countryside breaks.',
          'Check room setup, parking, pet policies, breakfast arrangements, accessibility details and cancellation terms directly before booking.',
        ],
        links: [{ label: 'Best Places to Stay', href: '/blog/best-places-to-stay' }],
      },
    ],
    faqs: [
      {
        question: 'Where is best in Lincolnshire for a family weekend?',
        answer:
          'Lincoln works well for history and rainy-day cover, while Skegness and Mablethorpe are better for classic coastal family breaks. Choose based on weather, age and travel time.',
      },
      {
        question: 'What can families do in Lincolnshire for free?',
        answer:
          'Families can plan beaches, parks, town walks, riverside routes and some heritage exteriors, but parking, facilities and seasonal access should be checked before travelling.',
      },
      {
        question: 'Is Lincolnshire good for toddlers?',
        answer:
          'It can be, especially if you keep distances short and plan around parks, beaches, cafes and flexible stops rather than long itineraries.',
      },
      {
        question: 'What is the best rainy-day base with children?',
        answer:
          'Lincoln is usually the strongest rainy-day base because indoor heritage, museums, cafes and compact streets are close together. Coastal resorts can still work, but it helps to have indoor amusements or a second town plan ready.',
      },
    ],
    relatedGuides: [
      { title: 'Things to Do in Lincolnshire', href: '/things-to-do', label: 'Activities' },
      { title: 'Rainy Day Activities', href: '/blog/rainy-day-activities', label: 'Family' },
      { title: 'Best Beaches in Lincolnshire', href: '/blog/best-beaches', label: 'Coast' },
      { title: 'Lincoln Travel Guide', href: '/town-guides/lincoln', label: 'City' },
      { title: 'Places to Stay in Lincolnshire', href: '/blog/best-places-to-stay', label: 'Stays' },
    ],
    editorialNote:
      'Family facilities, age suitability, tickets, menus, toilets and seasonal opening can change. Check directly before travelling.',
  },
  {
    id: 'best-beaches',
    title: 'Best Beaches in Lincolnshire',
    slug: 'best-beaches',
    category: 'Coast',
    description:
      'A practical guide to Lincolnshire beach days, quieter coastal walks and nature-led stops along the coast.',
    seoTitle: 'Best Beaches in Lincolnshire | Coast, Family Days & Quiet Walks',
    metaDescription:
      'Compare Lincolnshire beaches for family days, quiet walks, dog-friendly planning, parking checks and coastal breaks, including Skegness, Mablethorpe, Sutton-on-Sea and Gibraltar Point.',
    readingTime: '9 min read',
    lastUpdated: '17 May 2026',
    published: true,
    intro:
      'Lincolnshire coast offers more than one type of seaside day. You can plan a classic resort trip around Skegness, choose wider sandy space around Mablethorpe, slow the pace at Sutton-on-Sea or build a nature-led walk around Gibraltar Point. This is a practical comparison, not a ranking based on invented scores.',
    sections: [
      {
        heading: 'Quick picks by trip style',
        body: [
          'Choose Skegness when you want a busy promenade, amusements, food stops and facilities close together. Choose Mablethorpe for broad sand and a gentler family beach feel.',
          'Choose Sutton-on-Sea for slower promenade walks and quieter coastal breaks. Treat Gibraltar Point primarily as a nature reserve visit where tides, weather and wildlife seasons matter.',
        ],
        links: [
          { label: 'Skegness town guide', href: '/town-guides/skegness' },
          { label: 'Mablethorpe town guide', href: '/town-guides/mablethorpe' },
          { label: 'Lincolnshire Coast guide', href: '/lincolnshire-coast' },
        ],
      },
      {
        heading: 'Best Lincolnshire beaches for families',
        body: [
          'Families usually need simple logistics: parking, toilets, food nearby, space to reset the day if the weather changes and enough options for mixed ages. Skegness is strongest for facilities; Mablethorpe is often easier when beach space matters.',
          'If you are travelling with toddlers or grandparents, keep the day compact. A shorter beach session with food nearby is usually more reliable than a long multi-stop route.',
        ],
      },
      {
        heading: 'Quieter coastal walks',
        body: [
          'Sutton-on-Sea, Chapel St Leonards and Anderby Creek can work for visitors who want fresh air without the busiest resort feel. Facilities vary by season, so avoid assuming every stop will have open cafes or toilets.',
          'For nature-led walks, Gibraltar Point is the standout choice near Skegness. Check reserve information, tides and weather before travelling.',
        ],
      },
      {
        heading: 'Dog-friendly beach planning',
        body: [
          'Dog rules can change by beach, date and zone. Resort beaches often have seasonal restrictions, while quieter stretches may be more flexible.',
          'Check local signage and council guidance before setting off. Bring a fallback walk if the beach area you planned is restricted.',
        ],
      },
      {
        heading: 'Where to stay for the coast',
        body: [
          'Skegness and Ingoldmells suit visitors who want resort energy and holiday parks. Mablethorpe and Sutton-on-Sea suit slower coastal stays.',
          'Check whether you are booking a room, cottage, lodge, static caravan or touring pitch, and confirm current facilities directly before booking.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the best Lincolnshire beach for families?',
        answer:
          'Skegness is usually the most practical for facilities and amusements, while Mablethorpe is useful for wide sand and a gentler family beach day.',
      },
      {
        question: 'Are dogs allowed on Lincolnshire beaches?',
        answer:
          'Rules vary by beach, zone and season. Check local signage and current council information before travelling with a dog.',
      },
      {
        question: 'Is Gibraltar Point a beach day or a nature visit?',
        answer:
          'Treat Gibraltar Point primarily as a nature reserve, walking and birdwatching visit rather than a resort-style beach day.',
      },
    ],
    relatedGuides: [
      { title: 'Skegness town guide', href: '/town-guides/skegness', label: 'Coast' },
      { title: 'Mablethorpe town guide', href: '/town-guides/mablethorpe', label: 'Coast' },
      { title: 'Family things to do', href: '/blog/things-to-do-with-kids', label: 'Family' },
    ],
    editorialNote:
      'Beach conditions, facilities, dog restrictions, tide safety and parking can change. Check local signage and official sources before travelling.',
  },
  {
    id: 'dog-friendly-days-out',
    title: 'Dog-Friendly Days Out in Lincolnshire',
    slug: 'dog-friendly-days-out',
    category: 'Dog-Friendly',
    description:
      'Where to take your dog for walks, pub lunches, beach days and countryside adventures across Lincolnshire.',
    seoTitle: 'Dog-Friendly Days Out in Lincolnshire | Walks, Coast & Pub Planning',
    metaDescription:
      'Plan dog-friendly days out in Lincolnshire with coast, Wolds, market-town walks, pub checks and seasonal beach rule guidance.',
    readingTime: '8 min read',
    lastUpdated: '17 May 2026',
    published: true,
    intro:
      'Dog-friendly planning in Lincolnshire is mostly about choosing the right landscape and checking current rules. Beaches, reserves, estates, pubs and accommodation can all change policies by season, so treat this as a planning guide and confirm details direct.',
    sections: [
      {
        heading: 'Start with the right landscape',
        body: [
          'The Lincolnshire Wolds are a strong starting point for countryside walks, especially around Louth, Market Rasen, Horncastle and Woodhall Spa. Keep dogs under close control around livestock, nesting birds and shared paths.',
          'The coast can work well outside restricted beach zones. Check seasonal dog rules before travelling, then consider quieter stretches or promenade walks where permitted.',
        ],
        links: [
          { label: 'Dog-Friendly Lincolnshire', href: '/dog-friendly' },
          { label: 'Louth town guide', href: '/town-guides/louth' },
          { label: 'Lincolnshire Coast guide', href: '/lincolnshire-coast' },
        ],
      },
      {
        heading: 'Coastal days with dogs',
        body: [
          'Skegness, Mablethorpe, Sutton-on-Sea and Chapel St Leonards can all work for coastal breaks, but dog access is often seasonal and location-specific.',
          'Bring water, shade and a non-beach backup. Hot days, busy promenades and holiday traffic can make a coastal plan harder for some dogs.',
        ],
      },
      {
        heading: 'Pub and cafe checks',
        body: [
          'Dog-friendly marketing can mean outdoor seating only, selected rooms only or quiet times only. Check indoor rules, food-service hours and booking requirements before relying on a venue.',
          'For market towns, it is often easier to plan a walk first and then choose a nearby food stop that has confirmed dog access.',
        ],
      },
      {
        heading: 'Nature reserves and estates',
        body: [
          'Nature reserves, country parks and heritage estates may have lead rules, restricted areas or seasonal wildlife guidance. These rules protect livestock, nesting birds and sensitive habitats.',
          'Use official visitor information for the latest guidance and do not assume that old third-party listings still apply.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Where can I take my dog on the Lincolnshire coast?',
        answer:
          'Several coastal areas can work, but access varies by beach, season and zone. Check current local signage and council guidance before travelling.',
      },
      {
        question: 'Are Lincolnshire pubs usually dog-friendly?',
        answer:
          'Some are, but rules vary. Check whether dogs are allowed indoors, outdoors only, or in selected areas before booking.',
      },
      {
        question: 'What is a good dog-friendly countryside base?',
        answer:
          'The Lincolnshire Wolds around Louth, Market Rasen, Horncastle and Woodhall Spa are useful starting points for walks.',
      },
    ],
    relatedGuides: [
      { title: 'Dog-Friendly Lincolnshire', href: '/dog-friendly', label: 'Planning' },
      { title: 'Dog-Friendly Stays near the Lincolnshire Coast', href: '/blog/dog-friendly-stays-coast', label: 'Stays' },
      { title: 'Best Beaches in Lincolnshire', href: '/blog/best-beaches', label: 'Coast' },
    ],
    editorialNote:
      'Dog policies, seasonal restrictions, lead rules and food-service arrangements can change. Check directly before travelling.',
  },
  {
    id: 'weekend-breaks',
    title: 'Weekend Breaks in Lincolnshire',
    slug: 'weekend-breaks',
    category: 'Stays',
    description:
      'Plan a weekend escape with ideas for couples, families and groups, from countryside cottages to coastal getaways.',
    seoTitle: 'Weekend Breaks in Lincolnshire | City, Coast, Wolds & Market Towns',
    metaDescription:
      'Plan Lincolnshire weekend breaks around Lincoln, Stamford, Woodhall Spa, the Wolds and the coast, with practical itinerary and accommodation checks.',
    readingTime: '9 min read',
    lastUpdated: '17 May 2026',
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
      {
        heading: 'Couples and slower breaks',
        body: [
          'Lincoln and Stamford work well for couples who want food, heritage interiors and compact wandering rather than a car-heavy itinerary.',
          'Woodhall Spa, Louth and the Wolds suit quieter stays where tea rooms, woodland, markets and evening pubs matter more than major attractions.',
        ],
      },
      {
        heading: 'Family weekend planning',
        body: [
          'Families should keep the base close to the reason for the trip. For beach breaks, stay near the coast. For history and rainy-day cover, use Lincoln.',
          'Check room layout, breakfast arrangements, parking and cancellation terms before booking, especially during school holidays.',
        ],
        links: [{ label: 'Things to Do with Kids', href: '/blog/things-to-do-with-kids' }],
      },
    ],
    faqs: [
      {
        question: 'Where is best for a first Lincolnshire weekend break?',
        answer:
          'Lincoln is the most flexible first base because it combines heritage, food, shops, museums and rail access in a compact area.',
      },
      {
        question: 'Is the Lincolnshire coast good for a weekend?',
        answer:
          'Yes, especially for classic seaside breaks around Skegness, Mablethorpe and nearby holiday parks. Check seasonal opening and beach rules before travelling.',
      },
      {
        question: 'Can I plan a Lincolnshire weekend without a car?',
        answer:
          'Lincoln is the easiest option without a car. Rural and coastal itineraries usually work better with a car.',
      },
    ],
    relatedGuides: [
      { title: 'Best Places to Stay', href: '/blog/best-places-to-stay', label: 'Stays' },
      { title: 'Lincoln town guide', href: '/town-guides/lincoln', label: 'City' },
      { title: 'Stamford town guide', href: '/town-guides/stamford', label: 'Market town' },
    ],
    editorialNote:
      'Accommodation facilities, availability, prices, parking and policies can change. Check directly before booking.',
  },
  {
    id: 'best-places-to-stay',
    title: 'Best Places to Stay in Lincolnshire',
    slug: 'best-places-to-stay',
    category: 'Stays',
    description:
      'A practical guide to choosing where to base yourself in Lincolnshire, from cathedral city breaks and coastal holidays to Wolds villages and family-friendly seaside towns.',
    seoTitle: 'Best Places to Stay in Lincolnshire | Where to Base Your Break',
    metaDescription:
      'Compare where to stay in Lincolnshire, including Lincoln, Stamford, Skegness, Mablethorpe, Woodhall Spa, the Wolds and quieter market towns.',
    readingTime: '11 min read',
    lastUpdated: '17 May 2026',
    published: true,
    intro:
      'The best place to stay in Lincolnshire depends on the trip you want: city heritage, coast, Wolds countryside, market-town food or a quieter base for visiting family and friends. This guide helps you choose a base before comparing individual accommodation.',
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
        heading: 'Best for coast: Skegness, Mablethorpe and Sutton-on-Sea',
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
        heading: 'Best for countryside and Wolds: Louth, Horncastle and Market Rasen',
        body: [
          'Louth, Horncastle and Market Rasen are useful bases for the Lincolnshire Wolds, countryside walks, market-town wandering and quieter food-led breaks.',
          'These areas work best if you are happy to drive between villages, walks and attractions. Check access, seasonal opening and dog rules before building a countryside itinerary around one venue.',
        ],
      },
      {
        heading: 'Best for spa-style breaks: Woodhall Spa',
        body: [
          'Woodhall Spa is a good choice for a gentler village-style break with woodland, heritage, golf, tea rooms and a distinctive Edwardian feel.',
          'It is especially useful for visitors who want slower days rather than a packed resort itinerary. Check current accommodation policies, spa or leisure access and dining arrangements directly.',
        ],
      },
      {
        heading: 'Editorial booking checks',
        body: [
          'Accommodation facilities, availability, prices and policies can change. Always check directly with the operator before booking.',
          'Lincs Staycation Guide is a directory, not a booking engine. Use the site to compare bases and trip styles, then verify current details with the operator or booking platform.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Where should I stay for a first Lincolnshire break?',
        answer:
          'Lincoln is the most flexible first base. Choose the coast for seaside days, Stamford for a market-town weekend and Woodhall Spa or the Wolds for slower countryside breaks.',
      },
      {
        question: 'Where is best for families?',
        answer:
          'Skegness and Mablethorpe are useful for coast-focused family breaks, while Lincoln gives better rainy-day cover and heritage options.',
      },
      {
        question: 'Should I stay in a town or countryside base?',
        answer:
          'Choose a town if you want food, shops and easier logistics. Choose countryside if you are comfortable driving between walks, villages and attractions.',
      },
    ],
    relatedGuides: [
      { title: 'Weekend Breaks in Lincolnshire', href: '/blog/weekend-breaks', label: 'Stays' },
      { title: 'Places to Stay', href: '/places-to-stay', label: 'Directory' },
      { title: 'Best Beaches in Lincolnshire', href: '/blog/best-beaches', label: 'Coast' },
    ],
    editorialNote:
      'This guide compares areas and trip styles. It does not invent ratings, prices, reviews or availability.',
  },
  {
    id: 'rainy-day-activities',
    title: 'Rainy Day Activities in Lincolnshire',
    slug: 'rainy-day-activities',
    category: 'Family',
    description:
      'Indoor and bad-weather ideas for Lincolnshire breaks, from museums and heritage interiors to cafes and short town-based itineraries.',
    seoTitle: 'Rainy Day Activities in Lincolnshire | Indoor Ideas & Town Plans',
    metaDescription:
      'Plan rainy day activities in Lincolnshire with indoor museums, heritage sites, galleries, cafes, cinemas and town-based backup ideas for families, couples and weekend visitors.',
    readingTime: '8 min read',
    lastUpdated: '17 May 2026',
    published: true,
    intro:
      'Rain in Lincolnshire does not have to cancel a short break, but it does change the way you should plan. The safest approach is to base the day around towns with indoor anchors, short walking distances and reliable food stops nearby.',
    sections: [
      {
        heading: 'Best towns to use as rainy-day bases',
        body: [
          'Lincoln is usually the most flexible rainy-day base because it has cathedral interiors, castle time, museums, galleries, cafes and shops within a compact city centre.',
          'Stamford, Boston and Woodhall Spa can also work for slower indoor plans, especially when you pair heritage context with cafes and short town walks between showers.',
        ],
        links: [
          { label: 'Things to Do in Lincolnshire', href: '/things-to-do' },
          { label: 'Lincoln town guide', href: '/town-guides/lincoln' },
          { label: 'Stamford town guide', href: '/town-guides/stamford' },
        ],
      },
      {
        heading: 'How to build a family rainy-day itinerary',
        body: [
          'For families, the best rainy-day plan has two or three short stops rather than one fragile activity. Pair an indoor attraction with a cafe and a short walk if the weather breaks.',
          'Avoid overloading the day with long drives. Bad weather makes parking, coats, pushchairs and tired children harder to manage, so choose a compact town or cluster of nearby stops.',
        ],
      },
      {
        heading: 'Rainy days on the Lincolnshire coast',
        body: [
          'Coastal breaks need a different rainy-day plan. Instead of relying entirely on beach time, combine short promenade walks with cafes, arcades, indoor amusements or a drive to a nearby town attraction.',
          'Check wind as well as rain. A wet but calm day can still work for short walks; heavy wind can make exposed coastal plans uncomfortable.',
        ],
      },
      {
        heading: 'Ideas for couples and weekend breaks',
        body: [
          'Couples can often turn bad weather into a slower break: late breakfast, heritage interiors, independent shops, a gallery or museum, then a booked dinner.',
          'Lincoln and Stamford are especially useful for this style of itinerary because you can keep walking distances short and still have several options close together.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the best Lincolnshire town for a rainy day?',
        answer:
          'Lincoln is usually the most flexible rainy-day base because it has several indoor attractions close to food, shops and transport.',
      },
      {
        question: 'Are Lincolnshire beaches worth visiting in the rain?',
        answer:
          'They can be, but treat the beach as a short walk rather than the whole day. Have indoor food, amusements or town stops ready as backup.',
      },
      {
        question: 'How should I plan a rainy day with children?',
        answer:
          'Keep distances short, choose one main indoor activity, add a nearby food stop and check ticketing or opening details before setting off.',
      },
    ],
    relatedGuides: [
      { title: 'Things to Do in Lincolnshire', href: '/things-to-do', label: 'Activities' },
      { title: 'Lincoln town guide', href: '/town-guides/lincoln', label: 'City' },
      { title: 'Family things to do with kids', href: '/blog/things-to-do-with-kids', label: 'Family' },
    ],
    editorialNote:
      'Opening hours, ticketing, indoor facilities and accessibility details can change. Check official venue information before travelling.',
  },
  {
    id: 'dog-friendly-stays-coast',
    title: 'Dog-Friendly Stays near the Lincolnshire Coast',
    slug: 'dog-friendly-stays-coast',
    category: 'Dog-Friendly',
    description:
      'Find accommodation that welcomes dogs near beaches, coastal walks and seaside towns along the Lincolnshire Coast.',
    readingTime: '6 min read',
    lastUpdated: '17 May 2026',
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
      },
      {
        heading: 'Plan the dog-friendly day',
        body: [
          'Build the trip around confirmed walks, dog-friendly food stops and accommodation rules rather than assuming every beach, cafe or attraction will allow dogs.',
          'Bring a backup plan for hot weather, wet weather and busy school-holiday days. Coastal towns can be crowded in peak season, so quieter promenades, countryside edges and Wolds walks may be more comfortable for some dogs.',
        ],
      },
    ],
    editorialNote:
      'Pet rules, fees, beach restrictions and accommodation policies can change. Confirm directly before booking or travelling.',
  },
  {
    id: 'best-caravan-parks-skegness',
    title: 'Caravan Parks near Skegness',
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
