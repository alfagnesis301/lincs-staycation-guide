export type ImageStatus =
  | 'booking-feed-only'
  | 'public-use-image'
  | 'area-context-image'
  | 'permission-needed'
  | 'placeholder';

export type PublicImage = {
  src: string;
  alt: string;
  title?: string;
  author?: string;
  credit?: string;
  sourceName?: string;
  sourceUrl?: string;
  licence?: string;
  licenceUrl?: string;
  imageCreditId?: string;
  modifications?: string;
};

export type StayListing = {
  id: string;
  name: string;
  category: 'Hotel' | 'Inn' | 'Guest accommodation' | 'Apartment' | 'B&B' | 'Other';
  location: string;
  bestFor: string;
  description: string;
  tags: string[];
  bookingUrl?: string;
  bookingDeepLinkPending?: boolean;
  image?: PublicImage;
  imageStatus: ImageStatus;
  sourceNote?: string;
};

export type CaravanParkListing = {
  id: string;
  name: string;
  category: 'Campsite' | 'Holiday park' | 'Touring site' | 'Caravan park' | 'Lodges' | 'Glamping' | 'Other';
  location: string;
  bestFor: string;
  description: string;
  tags: string[];
  bookingUrl?: string;
  bookingDeepLinkPending?: boolean;
  officialUrl?: string;
  image?: PublicImage;
  imageStatus: ImageStatus;
  sourceNote?: string;
};

export type ThingToDoListing = {
  id: string;
  name: string;
  category: 'Historic site' | 'Museum' | 'Gallery' | 'Landmark' | 'Walk' | 'Family attraction' | 'Other';
  location: string;
  description: string;
  officialUrl?: string;
  officialUrlPending?: boolean;
  tags: string[];
  image?: PublicImage;
  imageStatus: Extract<ImageStatus, 'public-use-image' | 'area-context-image' | 'permission-needed' | 'placeholder'>;
};

export type FoodDrinkListing = {
  id: string;
  name: string;
  category: 'Restaurant' | 'Cafe' | 'Bar' | 'Pub' | 'Bakery' | 'Other';
  location: string;
  description: string;
  tags: string[];
  officialUrl?: string;
  mapSearchUrl?: string;
  reviewVerificationNeeded: boolean;
  imageStatus: Extract<ImageStatus, 'area-context-image' | 'permission-needed' | 'placeholder'>;
  sourceNote?: string;
};

export type LincolnFaq = {
  question: string;
  answer: string;
};

const lincolnAreaImage: PublicImage = {
  src: '/images/lincolnshire/lincoln.jpg',
  alt: 'Steep Hill in Lincoln with Lincoln Cathedral in the distance',
  title: 'Steep Hill, Lincoln',
  author: 'Yarah',
  credit: 'Yarah via Wikimedia Commons',
  sourceName: 'Wikimedia Commons',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bottom_of_Steep_Hill.JPG',
  licence: 'CC BY-SA 3.0',
  licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  imageCreditId: 'town-lincoln',
  modifications: 'Resized to 1200px wide, optimised as progressive JPEG',
};

export const lincolnGuide = {
  slug: 'lincoln',
  title: 'Lincoln Travel Guide',
  subtitle:
    'Plan a city break in Lincoln with places to stay, caravan parks nearby, historic attractions, food and drink, and practical ideas for exploring the cathedral city and surrounding countryside.',
  intro:
    'Lincoln is one of Lincolnshire\'s strongest city-break destinations, known for its cathedral, castle, historic streets, independent places to eat and practical access to countryside escapes. This guide helps visitors compare where to stay, what to do, where to eat and nearby caravan or holiday park options.',
  regionBadge: 'City',
  bestFor:
    'History, cathedral city breaks, independent food and drink, museums, castle visits and practical bases near the historic centre.',
  quickFacts: [
    { label: 'Region type', value: 'City' },
    { label: 'Best for', value: 'History, cathedral city breaks, independent food and drink' },
    { label: 'County', value: 'Lincolnshire' },
    { label: 'Good base for', value: 'Historic centre, Brayford Waterfront and countryside day trips' },
  ],
  heroImage: lincolnAreaImage,
  placesToStay: [
    {
      id: 'the-rest-hotel',
      name: 'The Rest Hotel',
      category: 'Guest accommodation',
      location: 'Lincoln historic centre',
      bestFor: 'Boutique-style stays close to Lincoln\'s historic centre.',
      description:
        'A strong candidate for visitors planning a city break around Lincoln Cathedral, Lincoln Castle and the uphill historic quarter. Use as a Booking.com-ready accommodation option once the correct Booking/CJ deep link is available.',
      tags: ['City break', 'Historic centre', 'Couples', 'Boutique stay', 'Booking-ready'],
      bookingDeepLinkPending: true,
      image: lincolnAreaImage,
      imageStatus: 'area-context-image',
      sourceNote:
        'Use Booking/CJ approved images if available through the affiliate programme. Otherwise use a Lincoln area-context image or request permission.',
    },
    {
      id: 'tower-hotel',
      name: 'Tower Hotel',
      category: 'Hotel',
      location: 'Cathedral quarter, Lincoln',
      bestFor: 'Visitors wanting a stay near the cathedral quarter and Lincoln\'s historic attractions.',
      description:
        'A useful Lincoln accommodation candidate for travellers interested in the cathedral, castle, independent restaurants and walkable historic streets.',
      tags: ['Cathedral quarter', 'City break', 'Historic attractions', 'Couples', 'Booking-ready'],
      bookingDeepLinkPending: true,
      image: lincolnAreaImage,
      imageStatus: 'area-context-image',
      sourceNote:
        'Use Booking/CJ approved images if available. Otherwise use an area image or request permission.',
    },
    {
      id: 'white-hart-hotel-lincoln',
      name: 'The White Hart Hotel Lincoln',
      category: 'Hotel',
      location: 'Central Lincoln',
      bestFor: 'Classic city-centre stays close to Lincoln Cathedral and the historic uphill area.',
      description:
        'A well-known Lincoln hotel candidate for visitors comparing central accommodation near the cathedral, castle and restaurants.',
      tags: ['Central Lincoln', 'Cathedral', 'Historic stay', 'Restaurants nearby', 'Booking-ready'],
      bookingDeepLinkPending: true,
      image: lincolnAreaImage,
      imageStatus: 'area-context-image',
      sourceNote:
        'Use Booking/CJ approved images if available. Otherwise use an area image or request permission.',
    },
    {
      id: 'holiday-inn-lincoln',
      name: 'Holiday Inn Lincoln by IHG',
      category: 'Hotel',
      location: 'Brayford Waterfront, Lincoln',
      bestFor: 'Practical city stays near the waterfront and central Lincoln.',
      description:
        'A useful option for visitors who prefer a familiar hotel brand, practical access and a base for exploring Lincoln city centre and the waterfront area.',
      tags: ['City centre', 'Waterfront', 'Practical stay', 'Brand hotel', 'Booking-ready'],
      bookingDeepLinkPending: true,
      image: lincolnAreaImage,
      imageStatus: 'area-context-image',
      sourceNote:
        'Use Booking/CJ approved images if available. Otherwise use an area image or request permission.',
    },
    {
      id: 'woodcocks-lincoln-marstons-inns',
      name: 'Woodcocks, Lincoln by Marston\'s Inns',
      category: 'Inn',
      location: 'Lincoln area',
      bestFor: 'Visitors wanting a practical stay with pub/restaurant-style convenience outside the busiest historic centre.',
      description:
        'A useful accommodation candidate for travellers who want easy access to Lincoln while staying slightly outside the most central visitor areas.',
      tags: ['Inn', 'Practical base', 'Food on site', 'Budget-friendly', 'Booking-ready'],
      bookingDeepLinkPending: true,
      image: lincolnAreaImage,
      imageStatus: 'area-context-image',
      sourceNote:
        'Use Booking/CJ approved images if available. Otherwise use an area image or request permission.',
    },
  ] satisfies StayListing[],
  caravanParks: [
    {
      id: 'hartsholme-country-park-campsite',
      name: 'Hartsholme Country Park Campsite',
      category: 'Touring site',
      location: 'Hartsholme, Lincoln',
      bestFor: 'Visitors who want a simple touring base inside Lincoln with country-park walks.',
      description:
        'A practical Lincoln option for visitors looking for touring pitches, camping pods and access to Hartsholme Country Park. Strong fit for a city guide because it is genuinely within Lincoln rather than a distant countryside alternative.',
      tags: ['Touring pitches', 'Camping pods', 'Dog-friendly', 'City access', 'Country park', 'Budget-friendly'],
      bookingDeepLinkPending: true,
      officialUrl: 'https://www.lincoln.gov.uk/hartsholme-country-park/hartsholme-country-park-campsite',
      image: lincolnAreaImage,
      imageStatus: 'area-context-image',
      sourceNote:
        'Look for public-use images of Hartsholme Country Park or the campsite via Wikimedia Commons or Geograph. If no exact campsite image is available, use a Lincoln/Hartsholme area-context image with attribution.',
    },
    {
      id: 'hanworth-country-park',
      name: 'Hanworth Country Park',
      category: 'Holiday park',
      location: 'Potterhanworth, near Lincoln',
      bestFor: 'Families and couples who want lakes, lodges, touring pitches and countryside close to Lincoln.',
      description:
        'A countryside holiday and fishing park near Potterhanworth, useful for visitors who want a quieter base while remaining within reach of Lincoln Cathedral, Lincoln Castle and the city centre.',
      tags: ['Touring pitches', 'Lodges', 'Glamping pods', 'Fishing lakes', 'Family-friendly', 'Near Lincoln'],
      bookingDeepLinkPending: true,
      officialUrl: 'https://www.hanworthcountrypark.co.uk/',
      image: lincolnAreaImage,
      imageStatus: 'area-context-image',
      sourceNote:
        'Use exact public-use image only if a clear licence exists. Otherwise use countryside area-context image or request permission.',
    },
    {
      id: 'camper-uk-leisure-park',
      name: 'Camper UK Leisure Park',
      category: 'Touring site',
      location: 'Swinethorpe, Lincoln area',
      bestFor: 'Touring caravans, motorhomes and glamping close to Lincoln and Newark.',
      description:
        'A useful touring-friendly option for visitors combining Lincoln with wider Lincolnshire or Newark itineraries. Good for motorhomes, caravan pitches and practical stopovers.',
      tags: ['Touring', 'Motorhomes', 'Glamping pods', 'Fishing', 'Countryside', 'Practical stopover'],
      bookingDeepLinkPending: true,
      officialUrl: 'https://www.camperukleisurepark.co.uk/',
      image: lincolnAreaImage,
      imageStatus: 'area-context-image',
      sourceNote:
        'Use exact public-use image only if available with licence. Otherwise use area-context image or request permission.',
    },
    {
      id: 'woodhall-country-park',
      name: 'Woodhall Country Park',
      category: 'Holiday park',
      location: 'Woodhall Spa, within reach of Lincoln',
      bestFor: 'Visitors who want a premium woodland and lake setting within reach of Lincoln.',
      description:
        'A countryside alternative for visitors who want woodland surroundings, touring, camping, pods, glamping or lodge stays while still being within reach of Lincoln by car.',
      tags: ['Touring', 'Camping', 'Lodges', 'Pods', 'Dog-friendly options', 'Fishing lakes', 'Woodland'],
      bookingDeepLinkPending: true,
      officialUrl: 'https://woodhallcountrypark.co.uk/',
      image: lincolnAreaImage,
      imageStatus: 'area-context-image',
      sourceNote:
        'Use public-use image only if licence is clear. Otherwise use Woodhall Spa or woodland area-context image with attribution.',
    },
    {
      id: 'brandy-wharf-leisure-park',
      name: 'Brandy Wharf Leisure Park',
      category: 'Caravan park',
      location: 'Brandy Wharf, north of Lincoln',
      bestFor: 'Simple riverside camping and caravanning north of Lincoln.',
      description:
        'A family-run riverside camping and caravan site beside the River Ancholme. Best positioned for visitors looking for a quiet rural base, fishing, boating atmosphere and countryside access rather than a large entertainment-led holiday park.',
      tags: ['Riverside', 'Touring', 'Tents', 'Motorhomes', 'Fishing', 'Boating', 'Peaceful'],
      bookingDeepLinkPending: true,
      officialUrl: 'https://www.brandywharfleisurepark.co.uk/',
      image: lincolnAreaImage,
      imageStatus: 'area-context-image',
      sourceNote:
        'Use exact public-use image only if available. Otherwise use riverside/countryside contextual imagery with correct attribution.',
    },
  ] satisfies CaravanParkListing[],
  thingsToDo: [
    {
      id: 'lincoln-cathedral',
      name: 'Lincoln Cathedral',
      category: 'Historic site',
      location: 'Cathedral quarter, Lincoln',
      description:
        'One of Lincoln\'s most recognisable landmarks and a key reason many visitors plan a city break in Lincoln. Strongly relevant for history, architecture, photography and heritage-focused visitors.',
      officialUrlPending: true,
      tags: ['Cathedral', 'History', 'Architecture', 'Heritage', 'City landmark'],
      image: lincolnAreaImage,
      imageStatus: 'area-context-image',
    },
    {
      id: 'lincoln-castle',
      name: 'Lincoln Castle',
      category: 'Historic site',
      location: 'Historic Lincoln',
      description:
        'A major Lincoln attraction for visitors interested in history, city views, heritage and family-friendly sightseeing. Useful internal link target from accommodation and city-break content.',
      officialUrlPending: true,
      tags: ['Castle', 'History', 'Heritage', 'Family-friendly', 'City views'],
      image: lincolnAreaImage,
      imageStatus: 'area-context-image',
    },
    {
      id: 'museum-of-lincolnshire-life',
      name: 'Museum of Lincolnshire Life',
      category: 'Museum',
      location: 'Lincoln',
      description:
        'A useful cultural attraction for visitors who want to understand Lincolnshire\'s social, industrial and military history. Good fit for rainy-day and family-friendly guide sections.',
      officialUrlPending: true,
      tags: ['Museum', 'Rainy day', 'Local history', 'Family-friendly', 'Culture'],
      image: lincolnAreaImage,
      imageStatus: 'area-context-image',
    },
    {
      id: 'the-collection-usher-gallery',
      name: 'The Collection / Usher Gallery',
      category: 'Gallery',
      location: 'Lincoln',
      description:
        'A strong cultural option for visitors interested in archaeology, art, local history and indoor attractions in Lincoln.',
      officialUrlPending: true,
      tags: ['Gallery', 'Museum', 'Culture', 'Rainy day', 'Art'],
      image: lincolnAreaImage,
      imageStatus: 'area-context-image',
    },
  ] satisfies ThingToDoListing[],
  foodDrink: [
    {
      id: 'the-jews-house-restaurant',
      name: 'The Jews House Restaurant',
      category: 'Restaurant',
      location: 'Historic Lincoln',
      description:
        'A review-led candidate for a more refined Lincoln dining guide. Verify current ratings, opening hours, booking availability and menu details before publication.',
      tags: ['Restaurant', 'Fine dining candidate', 'Historic Lincoln', 'Couples', 'Dinner'],
      reviewVerificationNeeded: true,
      imageStatus: 'permission-needed',
      sourceNote:
        'Do not reuse restaurant photos unless permission is granted. Use a Lincoln area image or request a press image.',
    },
    {
      id: 'olivares-tapas-bar',
      name: 'Olivares Tapas Bar',
      category: 'Restaurant',
      location: 'Lincoln',
      description:
        'A useful food and drink candidate for visitors looking for independent dining in Lincoln. Verify current reviews, menu and opening times before publication.',
      tags: ['Tapas', 'Independent restaurant', 'Dinner', 'City centre', 'Couples'],
      reviewVerificationNeeded: true,
      imageStatus: 'permission-needed',
      sourceNote:
        'Do not use restaurant photos without permission. Use area image or request press image.',
    },
    {
      id: 'dough-loco',
      name: 'Dough LoCo',
      category: 'Restaurant',
      location: 'Lincoln',
      description:
        'A casual dining candidate for visitors searching for relaxed food options in Lincoln. Verify current review ratings and opening times before publication.',
      tags: ['Pizza', 'Casual dining', 'Family-friendly candidate', 'Independent', 'City food'],
      reviewVerificationNeeded: true,
      imageStatus: 'permission-needed',
      sourceNote:
        'Do not use restaurant photos without permission. Use area image or request press image.',
    },
    {
      id: 'rising-cafe',
      name: 'Rising Cafe',
      category: 'Cafe',
      location: 'Lincoln',
      description:
        'A cafe candidate for visitors looking for lunch, coffee or a daytime food stop in Lincoln. Verify current ratings, opening times and visitor suitability before publication.',
      tags: ['Cafe', 'Lunch', 'Coffee', 'Daytime', 'City centre'],
      reviewVerificationNeeded: true,
      imageStatus: 'permission-needed',
      sourceNote:
        'Do not use cafe photos without permission. Use area image or request press image.',
    },
    {
      id: 'bar-unico',
      name: 'Bar Unico',
      category: 'Bar',
      location: 'Lincoln',
      description:
        'A food and drink candidate for visitors looking for coffee, casual bites or drinks in Lincoln. Verify current ratings, opening times and menu before publication.',
      tags: ['Cafe', 'Bar', 'Coffee', 'Casual food', 'City centre'],
      reviewVerificationNeeded: true,
      imageStatus: 'permission-needed',
      sourceNote:
        'Do not use business photos without permission. Use area image or request press image.',
    },
  ] satisfies FoodDrinkListing[],
  faqs: [
    {
      question: 'Is Lincoln good for a weekend break?',
      answer:
        'Yes. Lincoln works well for a weekend break because the cathedral quarter, castle, Steep Hill, museums, independent food and waterfront areas can be combined into a compact city itinerary.',
    },
    {
      question: 'Where should I stay in Lincoln for the cathedral and castle?',
      answer:
        'Visitors focused on Lincoln Cathedral, Lincoln Castle and Steep Hill should compare accommodation in or near the uphill historic centre. Booking links on this guide are being prepared and should be verified before publication.',
    },
    {
      question: 'Are there caravan parks near Lincoln?',
      answer:
        'Yes. Lincoln has nearby touring, campsite, lodge and countryside holiday park options, including a city-access campsite and quieter bases outside the centre. Facilities and booking options can change, so check before travelling.',
    },
    {
      question: 'What are the main things to do in Lincoln?',
      answer:
        'Key Lincoln attractions include Lincoln Cathedral, Lincoln Castle, the Museum of Lincolnshire Life, The Collection and Usher Gallery, Steep Hill and the Brayford Waterfront.',
    },
    {
      question: 'Can I find good restaurants and cafes in Lincoln?',
      answer:
        'Lincoln has a strong independent food and drink scene, but review scores, opening hours and menus change. This guide marks food entries as review-led candidates until details are verified for publication.',
    },
  ] satisfies LincolnFaq[],
  relatedGuides: [
    { label: 'Caravan parks near Lincoln', href: '/caravan-parks/best-caravan-parks-near-lincoln' },
    { label: 'Places to stay in Lincolnshire', href: '/places-to-stay' },
    { label: 'Things to do in Lincolnshire', href: '/things-to-do' },
    { label: 'Food and drink in Lincolnshire', href: '/food-drink' },
    { label: 'All town guides', href: '/town-guides' },
  ],
};
