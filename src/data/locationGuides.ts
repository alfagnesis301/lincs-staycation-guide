import type { RegionType, FAQItem } from './caravanParkGuides';

export type SourceStatus = 'research-draft' | 'needs-verification' | 'verified';
export type BookingStatus = 'booking-search-fallback' | 'booking-confirmed' | 'official-site-only' | 'unknown';
export type PlaceToStayType = 'Hotel' | 'B&B' | 'Guest house' | 'Inn' | 'Apartment' | 'Holiday cottage';
export type ThingToDoCategory = 'Historic site' | 'Museum' | 'Family-friendly' | 'Nature' | 'Beach' | 'Walk' | 'Shopping' | 'Market' | 'Rainy day' | 'Free activity' | 'Wildlife' | 'Garden' | 'Heritage' | 'Entertainment' | 'Other';
export type FoodAndDrinkType = 'Restaurant' | 'Pub' | 'Cafe' | 'Bar' | 'Seafood' | 'Tea room' | 'Bakery' | 'Sunday roast' | 'Farm shop' | 'Other';
export interface CategorySourceUrl { label: string; url: string; type: 'Booking.com' | 'Official website' | 'Editorial source' | 'Map/search'; checkedDate?: string; }
export interface PlaceToStay { id:string; name:string; slug:string; town:string; type:PlaceToStayType; bestFor:string; sourceNote:string; bookingStatus:BookingStatus; bookingUrl?:string; officialWebsiteUrl?:string; affiliateUrl?:string; sourceUrls:CategorySourceUrl[]; imageGuidance:string; needsVerification:true; }
export interface ThingToDo { id:string; name:string; slug:string; town:string; category:ThingToDoCategory; shortDescription:string; officialWebsiteUrl?:string; sourceUrls:CategorySourceUrl[]; imageGuidance:string; needsVerification:true; }
export interface FoodAndDrinkOption { id:string; name:string; slug:string; town:string; type:FoodAndDrinkType; cuisineOrStyle?:string; sourceUrls:CategorySourceUrl[]; imageGuidance:string; needsVerification:true; }
export interface LocationGuideBase { id:string; name:string; slug:string; regionType:RegionType; contentAngle:string; lastUpdated:string; sourceStatus:SourceStatus; placesToStay:PlaceToStay[]; thingsToDo:ThingToDo[]; foodDrink:FoodAndDrinkOption[]; }
export const locationGuides = [
  {
    "id": "lincoln",
    "name": "Lincoln",
    "slug": "lincoln",
    "regionType": "City",
    "contentAngle": "History, cathedral city breaks and practical bases near the historic centre.",
    "lastUpdated": "13 May 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "the-rest-hotel",
        "name": "The Rest Hotel",
        "slug": "the-rest-hotel",
        "town": "Lincoln",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Lincoln.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "tower-hotel",
        "name": "Tower Hotel",
        "slug": "tower-hotel",
        "town": "Lincoln",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Lincoln.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-white-hart-hotel-lincoln",
        "name": "The White Hart Hotel Lincoln",
        "slug": "the-white-hart-hotel-lincoln",
        "town": "Lincoln",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Lincoln.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "holiday-inn-lincoln-by-ihg",
        "name": "Holiday Inn Lincoln by IHG",
        "slug": "holiday-inn-lincoln-by-ihg",
        "town": "Lincoln",
        "type": "Inn",
        "bestFor": "A inn option for visitors to Lincoln.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "woodcocks-lincoln-by-marston-s-inns",
        "name": "Woodcocks, Lincoln by Marston's Inns",
        "slug": "woodcocks-lincoln-by-marston-s-inns",
        "town": "Lincoln",
        "type": "Inn",
        "bestFor": "A inn option for visitors to Lincoln.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      }
    ],
    "thingsToDo": [
      {
        "id": "lincoln-cathedral",
        "name": "Lincoln Cathedral",
        "slug": "lincoln-cathedral",
        "town": "Lincoln",
        "category": "Historic site",
        "shortDescription": "A worthwhile place to visit in Lincoln—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "lincoln-castle",
        "name": "Lincoln Castle",
        "slug": "lincoln-castle",
        "town": "Lincoln",
        "category": "Historic site",
        "shortDescription": "A worthwhile place to visit in Lincoln—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "museum-of-lincolnshire-life",
        "name": "Museum of Lincolnshire Life",
        "slug": "museum-of-lincolnshire-life",
        "town": "Lincoln",
        "category": "Museum",
        "shortDescription": "A worthwhile place to visit in Lincoln—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "the-collection-usher-gallery",
        "name": "The Collection / Usher Gallery",
        "slug": "the-collection-usher-gallery",
        "town": "Lincoln",
        "category": "Museum",
        "shortDescription": "A worthwhile place to visit in Lincoln—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      }
    ],
    "foodDrink": [
      {
        "id": "the-jews-house-restaurant",
        "name": "The Jews House Restaurant",
        "slug": "the-jews-house-restaurant",
        "town": "Lincoln",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "olivares-tapas-bar",
        "name": "Olivares Tapas Bar",
        "slug": "olivares-tapas-bar",
        "town": "Lincoln",
        "type": "Bar",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "dough-loco",
        "name": "Dough LoCo",
        "slug": "dough-loco",
        "town": "Lincoln",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "rising-cafe",
        "name": "Rising Cafe",
        "slug": "rising-cafe",
        "town": "Lincoln",
        "type": "Cafe",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "bar-unico",
        "name": "Bar Unico",
        "slug": "bar-unico",
        "town": "Lincoln",
        "type": "Bar",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      }
    ]
  },
  {
    "id": "skegness",
    "name": "Skegness",
    "slug": "skegness",
    "regionType": "Coast",
    "contentAngle": "Classic seaside holidays, family coastal breaks and coastal entertainment.",
    "lastUpdated": "13 May 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "the-quorn",
        "name": "The Quorn",
        "slug": "the-quorn",
        "town": "Skegness",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Skegness.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "southview-park-hotel",
        "name": "Southview Park Hotel",
        "slug": "southview-park-hotel",
        "town": "Skegness",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Skegness.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "north-shore-hotel",
        "name": "North Shore Hotel",
        "slug": "north-shore-hotel",
        "town": "Skegness",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Skegness.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-saxby-hotel",
        "name": "The Saxby Hotel",
        "slug": "the-saxby-hotel",
        "town": "Skegness",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Skegness.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-fountaindale-skegness",
        "name": "The Fountaindale Skegness",
        "slug": "the-fountaindale-skegness",
        "town": "Skegness",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Skegness.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      }
    ],
    "thingsToDo": [
      {
        "id": "skegness-pier",
        "name": "Skegness Pier",
        "slug": "skegness-pier",
        "town": "Skegness",
        "category": "Family-friendly",
        "shortDescription": "A worthwhile place to visit in Skegness—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "natureland-seal-sanctuary",
        "name": "Natureland Seal Sanctuary",
        "slug": "natureland-seal-sanctuary",
        "town": "Skegness",
        "category": "Nature",
        "shortDescription": "A worthwhile place to visit in Skegness—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "gibraltar-point-national-nature-reserve",
        "name": "Gibraltar Point National Nature Reserve",
        "slug": "gibraltar-point-national-nature-reserve",
        "town": "Skegness",
        "category": "Nature",
        "shortDescription": "A worthwhile place to visit in Skegness—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "skegness-aquarium",
        "name": "Skegness Aquarium",
        "slug": "skegness-aquarium",
        "town": "Skegness",
        "category": "Family-friendly",
        "shortDescription": "A worthwhile place to visit in Skegness—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      }
    ],
    "foodDrink": [
      {
        "id": "fleece-inn",
        "name": "Fleece Inn",
        "slug": "fleece-inn",
        "town": "Skegness",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "pie-palace",
        "name": "Pie Palace",
        "slug": "pie-palace",
        "town": "Skegness",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-steamboat-cookhouse-pub",
        "name": "The Steamboat Cookhouse + Pub",
        "slug": "the-steamboat-cookhouse-pub",
        "town": "Skegness",
        "type": "Tea room",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-hide-at-herons-mead",
        "name": "The Hide at Herons Mead",
        "slug": "the-hide-at-herons-mead",
        "town": "Skegness",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "tarantino",
        "name": "Tarantino",
        "slug": "tarantino",
        "town": "Skegness",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      }
    ]
  },
  {
    "id": "stamford",
    "name": "Stamford",
    "slug": "stamford",
    "regionType": "Market town",
    "contentAngle": "Georgian town breaks, Burghley House, Rutland Water and countryside weekends.",
    "lastUpdated": "13 May 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "crown-hotel",
        "name": "Crown Hotel",
        "slug": "crown-hotel",
        "town": "Stamford",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Stamford.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-george-hotel-of-stamford",
        "name": "The George Hotel of Stamford",
        "slug": "the-george-hotel-of-stamford",
        "town": "Stamford",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Stamford.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-william-cecil",
        "name": "The William Cecil",
        "slug": "the-william-cecil",
        "town": "Stamford",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Stamford.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-bull-and-swan",
        "name": "The Bull and Swan",
        "slug": "the-bull-and-swan",
        "town": "Stamford",
        "type": "Inn",
        "bestFor": "A inn option for visitors to Stamford.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "old-bank-apartments",
        "name": "Old Bank Apartments",
        "slug": "old-bank-apartments",
        "town": "Stamford",
        "type": "Apartment",
        "bestFor": "A apartment option for visitors to Stamford.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      }
    ],
    "thingsToDo": [
      {
        "id": "burghley-house",
        "name": "Burghley House",
        "slug": "burghley-house",
        "town": "Stamford",
        "category": "Historic site",
        "shortDescription": "A worthwhile place to visit in Stamford—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "stamford-arts-centre",
        "name": "Stamford Arts Centre",
        "slug": "stamford-arts-centre",
        "town": "Stamford",
        "category": "Other",
        "shortDescription": "A worthwhile place to visit in Stamford—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "stamford-corn-exchange-theatre",
        "name": "Stamford Corn Exchange Theatre",
        "slug": "stamford-corn-exchange-theatre",
        "town": "Stamford",
        "category": "Family-friendly",
        "shortDescription": "A worthwhile place to visit in Stamford—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "stamford-meadows",
        "name": "Stamford Meadows",
        "slug": "stamford-meadows",
        "town": "Stamford",
        "category": "Nature",
        "shortDescription": "A worthwhile place to visit in Stamford—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      }
    ],
    "foodDrink": [
      {
        "id": "orbis-stamford",
        "name": "Orbis Stamford",
        "slug": "orbis-stamford",
        "town": "Stamford",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-slanted-door",
        "name": "The Slanted Door",
        "slug": "the-slanted-door",
        "town": "Stamford",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-mad-turk",
        "name": "The Mad Turk",
        "slug": "the-mad-turk",
        "town": "Stamford",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "cloisters",
        "name": "Cloisters",
        "slug": "cloisters",
        "town": "Stamford",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-george-hotel-restaurant",
        "name": "The George Hotel Restaurant",
        "slug": "the-george-hotel-restaurant",
        "town": "Stamford",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      }
    ]
  },
  {
    "id": "louth",
    "name": "Louth",
    "slug": "louth",
    "regionType": "Wolds",
    "contentAngle": "Lincolnshire Wolds walking, Georgian market town stays and coastal access.",
    "lastUpdated": "13 May 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "the-beaumont-accommodation",
        "name": "The Beaumont Accommodation",
        "slug": "the-beaumont-accommodation",
        "town": "Louth",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Louth.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "best-western-plus-kenwick-park-hotel",
        "name": "Best Western Plus Kenwick Park Hotel",
        "slug": "best-western-plus-kenwick-park-hotel",
        "town": "Louth",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Louth.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "brackenborough-hotel",
        "name": "Brackenborough Hotel",
        "slug": "brackenborough-hotel",
        "town": "Louth",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Louth.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-masons-arms",
        "name": "The Masons Arms",
        "slug": "the-masons-arms",
        "town": "Louth",
        "type": "Inn",
        "bestFor": "A inn option for visitors to Louth.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-kings-head",
        "name": "The Kings Head",
        "slug": "the-kings-head",
        "town": "Louth",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Louth.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      }
    ],
    "thingsToDo": [
      {
        "id": "st-james-church-louth",
        "name": "St James' Church Louth",
        "slug": "st-james-church-louth",
        "town": "Louth",
        "category": "Historic site",
        "shortDescription": "A worthwhile place to visit in Louth—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "louth-museum",
        "name": "Louth Museum",
        "slug": "louth-museum",
        "town": "Louth",
        "category": "Museum",
        "shortDescription": "A worthwhile place to visit in Louth—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "hubbard-s-hills",
        "name": "Hubbard's Hills",
        "slug": "hubbard-s-hills",
        "town": "Louth",
        "category": "Nature",
        "shortDescription": "A worthwhile place to visit in Louth—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "lincolnshire-wolds-railway",
        "name": "Lincolnshire Wolds Railway",
        "slug": "lincolnshire-wolds-railway",
        "town": "Louth",
        "category": "Nature",
        "shortDescription": "A worthwhile place to visit in Louth—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      }
    ],
    "foodDrink": [
      {
        "id": "the-masons-arms",
        "name": "The Masons Arms",
        "slug": "the-masons-arms",
        "town": "Louth",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-greyhound-inn",
        "name": "The Greyhound Inn",
        "slug": "the-greyhound-inn",
        "town": "Louth",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-ranch-steakhouse-and-grill",
        "name": "The Ranch Steakhouse & Grill",
        "slug": "the-ranch-steakhouse-and-grill",
        "town": "Louth",
        "type": "Tea room",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "via-italia",
        "name": "Via Italia",
        "slug": "via-italia",
        "town": "Louth",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-kings-head",
        "name": "The Kings Head",
        "slug": "the-kings-head",
        "town": "Louth",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      }
    ]
  },
  {
    "id": "boston",
    "name": "Boston",
    "slug": "boston",
    "regionType": "Fens",
    "contentAngle": "Market town breaks, countryside retreats and access to The Wash.",
    "lastUpdated": "13 May 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "the-white-hart-hotel-boston",
        "name": "The White Hart Hotel, Boston",
        "slug": "the-white-hart-hotel-boston",
        "town": "Boston",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Boston.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "boston-west-hotel",
        "name": "Boston West Hotel",
        "slug": "boston-west-hotel",
        "town": "Boston",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Boston.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-old-kings-head",
        "name": "The Old Kings Head",
        "slug": "the-old-kings-head",
        "town": "Boston",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Boston.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "quayside-hotel-and-bar",
        "name": "Quayside Hotel & Bar",
        "slug": "quayside-hotel-and-bar",
        "town": "Boston",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Boston.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-kings-arms",
        "name": "The Kings Arms",
        "slug": "the-kings-arms",
        "town": "Boston",
        "type": "Inn",
        "bestFor": "A inn option for visitors to Boston.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      }
    ],
    "thingsToDo": [
      {
        "id": "st-botolph-s-church-boston-stump",
        "name": "St Botolph's Church (Boston Stump)",
        "slug": "st-botolph-s-church-boston-stump",
        "town": "Boston",
        "category": "Historic site",
        "shortDescription": "A worthwhile place to visit in Boston—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "boston-guildhall-museum",
        "name": "Boston Guildhall Museum",
        "slug": "boston-guildhall-museum",
        "town": "Boston",
        "category": "Museum",
        "shortDescription": "A worthwhile place to visit in Boston—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "maud-foster-windmill",
        "name": "Maud Foster Windmill",
        "slug": "maud-foster-windmill",
        "town": "Boston",
        "category": "Historic site",
        "shortDescription": "A worthwhile place to visit in Boston—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "rspb-frampton-marsh",
        "name": "RSPB Frampton Marsh",
        "slug": "rspb-frampton-marsh",
        "town": "Boston",
        "category": "Other",
        "shortDescription": "A worthwhile place to visit in Boston—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      }
    ],
    "foodDrink": [
      {
        "id": "witham-and-blues",
        "name": "Witham and Blues",
        "slug": "witham-and-blues",
        "town": "Boston",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-white-hart-restaurant",
        "name": "The White Hart Restaurant",
        "slug": "the-white-hart-restaurant",
        "town": "Boston",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-ropers-arms",
        "name": "The Ropers Arms",
        "slug": "the-ropers-arms",
        "town": "Boston",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "goodbarns-yard",
        "name": "Goodbarns Yard",
        "slug": "goodbarns-yard",
        "town": "Boston",
        "type": "Bar",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-sack-store-boston",
        "name": "The Sack Store Boston",
        "slug": "the-sack-store-boston",
        "town": "Boston",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      }
    ]
  },
  {
    "id": "grantham",
    "name": "Grantham",
    "slug": "grantham",
    "regionType": "Countryside",
    "contentAngle": "A1 stopovers, Belton House, Belvoir Castle and South Lincolnshire breaks.",
    "lastUpdated": "13 May 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "angel-and-royal-hotel",
        "name": "Angel and Royal Hotel",
        "slug": "angel-and-royal-hotel",
        "town": "Grantham",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Grantham.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "belton-woods-hotel-spa-and-golf-resort",
        "name": "Belton Woods Hotel, Spa & Golf Resort",
        "slug": "belton-woods-hotel-spa-and-golf-resort",
        "town": "Grantham",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Grantham.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-avenue-hotel",
        "name": "The Avenue Hotel",
        "slug": "the-avenue-hotel",
        "town": "Grantham",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Grantham.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-barn-hotel-and-spa",
        "name": "The Barn Hotel & Spa",
        "slug": "the-barn-hotel-and-spa",
        "town": "Grantham",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Grantham.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "urban-hotel-grantham",
        "name": "Urban Hotel Grantham",
        "slug": "urban-hotel-grantham",
        "town": "Grantham",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Grantham.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      }
    ],
    "thingsToDo": [
      {
        "id": "belton-house",
        "name": "Belton House",
        "slug": "belton-house",
        "town": "Grantham",
        "category": "Historic site",
        "shortDescription": "A worthwhile place to visit in Grantham—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "belvoir-castle",
        "name": "Belvoir Castle",
        "slug": "belvoir-castle",
        "town": "Grantham",
        "category": "Historic site",
        "shortDescription": "A worthwhile place to visit in Grantham—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "wyndham-park",
        "name": "Wyndham Park",
        "slug": "wyndham-park",
        "town": "Grantham",
        "category": "Nature",
        "shortDescription": "A worthwhile place to visit in Grantham—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "grantham-museum",
        "name": "Grantham Museum",
        "slug": "grantham-museum",
        "town": "Grantham",
        "category": "Museum",
        "shortDescription": "A worthwhile place to visit in Grantham—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      }
    ],
    "foodDrink": [
      {
        "id": "the-gregory",
        "name": "The Gregory",
        "slug": "the-gregory",
        "town": "Grantham",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "siam-garden-thai",
        "name": "Siam Garden Thai",
        "slug": "siam-garden-thai",
        "town": "Grantham",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "julianos",
        "name": "Julianos",
        "slug": "julianos",
        "town": "Grantham",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-tollemache-inn",
        "name": "The Tollemache Inn",
        "slug": "the-tollemache-inn",
        "town": "Grantham",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-nobody-inn",
        "name": "The Nobody Inn",
        "slug": "the-nobody-inn",
        "town": "Grantham",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      }
    ]
  },
  {
    "id": "spalding",
    "name": "Spalding",
    "slug": "spalding",
    "regionType": "Fens",
    "contentAngle": "South Holland, the Fens, gardens and riverside market town breaks.",
    "lastUpdated": "13 May 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "tulip-queen-spalding-by-marston-s-inns",
        "name": "Tulip Queen, Spalding by Marston's Inns",
        "slug": "tulip-queen-spalding-by-marston-s-inns",
        "town": "Spalding",
        "type": "Inn",
        "bestFor": "A inn option for visitors to Spalding.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "woodhouse-farm-lodge",
        "name": "Woodhouse Farm Lodge",
        "slug": "woodhouse-farm-lodge",
        "town": "Spalding",
        "type": "B&B",
        "bestFor": "A b&b option for visitors to Spalding.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-red-lion-hotel",
        "name": "The Red Lion Hotel",
        "slug": "the-red-lion-hotel",
        "town": "Spalding",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Spalding.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "woodlands-hotel",
        "name": "Woodlands Hotel",
        "slug": "woodlands-hotel",
        "town": "Spalding",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Spalding.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "cley-hall",
        "name": "Cley Hall",
        "slug": "cley-hall",
        "town": "Spalding",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Spalding.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      }
    ],
    "thingsToDo": [
      {
        "id": "ayscoughfee-hall-museum-and-gardens",
        "name": "Ayscoughfee Hall Museum and Gardens",
        "slug": "ayscoughfee-hall-museum-and-gardens",
        "town": "Spalding",
        "category": "Museum",
        "shortDescription": "A worthwhile place to visit in Spalding—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "springfields-outlet-shopping-and-leisure",
        "name": "Springfields Outlet Shopping & Leisure",
        "slug": "springfields-outlet-shopping-and-leisure",
        "town": "Spalding",
        "category": "Shopping",
        "shortDescription": "A worthwhile place to visit in Spalding—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "chain-bridge-forge",
        "name": "Chain Bridge Forge",
        "slug": "chain-bridge-forge",
        "town": "Spalding",
        "category": "Other",
        "shortDescription": "A worthwhile place to visit in Spalding—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "baytree-owl-and-wildlife-centre",
        "name": "Baytree Owl and Wildlife Centre",
        "slug": "baytree-owl-and-wildlife-centre",
        "town": "Spalding",
        "category": "Nature",
        "shortDescription": "A worthwhile place to visit in Spalding—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      }
    ],
    "foodDrink": [
      {
        "id": "sergi-s-tapas-bar",
        "name": "Sergi's Tapas Bar",
        "slug": "sergi-s-tapas-bar",
        "town": "Spalding",
        "type": "Bar",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-ship-albion",
        "name": "The Ship Albion",
        "slug": "the-ship-albion",
        "town": "Spalding",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-moorings",
        "name": "The Moorings",
        "slug": "the-moorings",
        "town": "Spalding",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "amici-restaurant",
        "name": "Amici Restaurant",
        "slug": "amici-restaurant",
        "town": "Spalding",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-red-lion-hotel",
        "name": "The Red Lion Hotel",
        "slug": "the-red-lion-hotel",
        "town": "Spalding",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      }
    ]
  },
  {
    "id": "sleaford",
    "name": "Sleaford",
    "slug": "sleaford",
    "regionType": "Countryside",
    "contentAngle": "Central Lincolnshire bases, Tattershall, aviation heritage and countryside visits.",
    "lastUpdated": "13 May 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "the-solo",
        "name": "The SOLO",
        "slug": "the-solo",
        "town": "Sleaford",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Sleaford.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "marquis-of-granby",
        "name": "Marquis of Granby",
        "slug": "marquis-of-granby",
        "town": "Sleaford",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Sleaford.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-finch-hatton-arms",
        "name": "The Finch Hatton Arms",
        "slug": "the-finch-hatton-arms",
        "town": "Sleaford",
        "type": "Inn",
        "bestFor": "A inn option for visitors to Sleaford.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-mallards",
        "name": "The Mallards",
        "slug": "the-mallards",
        "town": "Sleaford",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Sleaford.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "riverside-guest-house",
        "name": "Riverside Guest House",
        "slug": "riverside-guest-house",
        "town": "Sleaford",
        "type": "Guest house",
        "bestFor": "A guest house option for visitors to Sleaford.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      }
    ],
    "thingsToDo": [
      {
        "id": "hub-national-centre-for-craft-and-design",
        "name": "Hub - National Centre for Craft and Design",
        "slug": "hub-national-centre-for-craft-and-design",
        "town": "Sleaford",
        "category": "Other",
        "shortDescription": "A worthwhile place to visit in Sleaford—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "cogglesford-watermill",
        "name": "Cogglesford Watermill",
        "slug": "cogglesford-watermill",
        "town": "Sleaford",
        "category": "Other",
        "shortDescription": "A worthwhile place to visit in Sleaford—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "heckington-windmill",
        "name": "Heckington Windmill",
        "slug": "heckington-windmill",
        "town": "Sleaford",
        "category": "Historic site",
        "shortDescription": "A worthwhile place to visit in Sleaford—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "cranwell-aviation-heritage-museum",
        "name": "Cranwell Aviation Heritage Museum",
        "slug": "cranwell-aviation-heritage-museum",
        "town": "Sleaford",
        "category": "Museum",
        "shortDescription": "A worthwhile place to visit in Sleaford—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      }
    ],
    "foodDrink": [
      {
        "id": "the-barge-and-bottle",
        "name": "The Barge and Bottle",
        "slug": "the-barge-and-bottle",
        "town": "Sleaford",
        "type": "Bar",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-finch-hatton-arms",
        "name": "The Finch Hatton Arms",
        "slug": "the-finch-hatton-arms",
        "town": "Sleaford",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "millers-restaurant",
        "name": "Millers Restaurant",
        "slug": "millers-restaurant",
        "town": "Sleaford",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-bustard-inn",
        "name": "The Bustard Inn",
        "slug": "the-bustard-inn",
        "town": "Sleaford",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "watergate-yard",
        "name": "Watergate YARD",
        "slug": "watergate-yard",
        "town": "Sleaford",
        "type": "Bar",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      }
    ]
  },
  {
    "id": "mablethorpe",
    "name": "Mablethorpe",
    "slug": "mablethorpe",
    "regionType": "Coast",
    "contentAngle": "Traditional seaside holidays, beach access and family coastal accommodation.",
    "lastUpdated": "13 May 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "white-heather-guest-house",
        "name": "White Heather Guest House",
        "slug": "white-heather-guest-house",
        "town": "Mablethorpe",
        "type": "Guest house",
        "bestFor": "A guest house option for visitors to Mablethorpe.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "k44-mablethorpe-chalet-park",
        "name": "K44 Mablethorpe Chalet Park",
        "slug": "k44-mablethorpe-chalet-park",
        "town": "Mablethorpe",
        "type": "Holiday cottage",
        "bestFor": "A holiday cottage option for visitors to Mablethorpe.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "l30-what-a-cracker",
        "name": "L30 what a cracker",
        "slug": "l30-what-a-cracker",
        "town": "Mablethorpe",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Mablethorpe.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "l90-holiday-home",
        "name": "L90 Holiday Home",
        "slug": "l90-holiday-home",
        "town": "Mablethorpe",
        "type": "Holiday cottage",
        "bestFor": "A holiday cottage option for visitors to Mablethorpe.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "h21-holiday-let",
        "name": "H21 holiday let",
        "slug": "h21-holiday-let",
        "town": "Mablethorpe",
        "type": "Holiday cottage",
        "bestFor": "A holiday cottage option for visitors to Mablethorpe.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      }
    ],
    "thingsToDo": [
      {
        "id": "mablethorpe-beach",
        "name": "Mablethorpe Beach",
        "slug": "mablethorpe-beach",
        "town": "Mablethorpe",
        "category": "Beach",
        "shortDescription": "A worthwhile place to visit in Mablethorpe—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "mablethorpe-seal-sanctuary-and-wildlife-centre",
        "name": "Mablethorpe Seal Sanctuary and Wildlife Centre",
        "slug": "mablethorpe-seal-sanctuary-and-wildlife-centre",
        "town": "Mablethorpe",
        "category": "Nature",
        "shortDescription": "A worthwhile place to visit in Mablethorpe—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "queens-park",
        "name": "Queens Park",
        "slug": "queens-park",
        "town": "Mablethorpe",
        "category": "Nature",
        "shortDescription": "A worthwhile place to visit in Mablethorpe—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "mablethorpe-sand-train",
        "name": "Mablethorpe Sand Train",
        "slug": "mablethorpe-sand-train",
        "town": "Mablethorpe",
        "category": "Family-friendly",
        "shortDescription": "A worthwhile place to visit in Mablethorpe—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      }
    ],
    "foodDrink": [
      {
        "id": "the-beck",
        "name": "The Beck",
        "slug": "the-beck",
        "town": "Mablethorpe",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-dunes",
        "name": "The Dunes",
        "slug": "the-dunes",
        "town": "Mablethorpe",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-coffee-lounge",
        "name": "The Coffee Lounge",
        "slug": "the-coffee-lounge",
        "town": "Mablethorpe",
        "type": "Cafe",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "gerardo-s",
        "name": "Gerardo's",
        "slug": "gerardo-s",
        "town": "Mablethorpe",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "fantasia-italian",
        "name": "Fantasia Italian",
        "slug": "fantasia-italian",
        "town": "Mablethorpe",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      }
    ]
  },
  {
    "id": "woodhall-spa",
    "name": "Woodhall Spa",
    "slug": "woodhall-spa",
    "regionType": "Countryside",
    "contentAngle": "Woodland retreats, golf, aviation heritage and spa-town breaks.",
    "lastUpdated": "13 May 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "village-limits-bed-and-breakfast-rooms",
        "name": "Village Limits Bed and Breakfast Rooms",
        "slug": "village-limits-bed-and-breakfast-rooms",
        "town": "Woodhall Spa",
        "type": "B&B",
        "bestFor": "A b&b option for visitors to Woodhall Spa.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-dower-house-hotel",
        "name": "The Dower House Hotel",
        "slug": "the-dower-house-hotel",
        "town": "Woodhall Spa",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Woodhall Spa.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "petwood-hotel",
        "name": "Petwood Hotel",
        "slug": "petwood-hotel",
        "town": "Woodhall Spa",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Woodhall Spa.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-golf-hotel",
        "name": "The Golf Hotel",
        "slug": "the-golf-hotel",
        "town": "Woodhall Spa",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Woodhall Spa.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-inn-at-woodhall-spa",
        "name": "The Inn at Woodhall Spa",
        "slug": "the-inn-at-woodhall-spa",
        "town": "Woodhall Spa",
        "type": "Inn",
        "bestFor": "A inn option for visitors to Woodhall Spa.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      }
    ],
    "thingsToDo": [
      {
        "id": "the-kinema-in-the-woods",
        "name": "The Kinema in the Woods",
        "slug": "the-kinema-in-the-woods",
        "town": "Woodhall Spa",
        "category": "Nature",
        "shortDescription": "A worthwhile place to visit in Woodhall Spa—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "woodhall-spa-cottage-museum",
        "name": "Woodhall Spa Cottage Museum",
        "slug": "woodhall-spa-cottage-museum",
        "town": "Woodhall Spa",
        "category": "Museum",
        "shortDescription": "A worthwhile place to visit in Woodhall Spa—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "jubilee-park",
        "name": "Jubilee Park",
        "slug": "jubilee-park",
        "town": "Woodhall Spa",
        "category": "Nature",
        "shortDescription": "A worthwhile place to visit in Woodhall Spa—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "tattershall-castle",
        "name": "Tattershall Castle",
        "slug": "tattershall-castle",
        "town": "Woodhall Spa",
        "category": "Historic site",
        "shortDescription": "A worthwhile place to visit in Woodhall Spa—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      }
    ],
    "foodDrink": [
      {
        "id": "the-tea-house-in-the-woods",
        "name": "The Tea House in the Woods",
        "slug": "the-tea-house-in-the-woods",
        "town": "Woodhall Spa",
        "type": "Tea room",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "india-village",
        "name": "India Village",
        "slug": "india-village",
        "town": "Woodhall Spa",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "bar-eleven",
        "name": "Bar Eleven",
        "slug": "bar-eleven",
        "town": "Woodhall Spa",
        "type": "Bar",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "petwood-hotel-restaurant",
        "name": "Petwood Hotel Restaurant",
        "slug": "petwood-hotel-restaurant",
        "town": "Woodhall Spa",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-inn-at-woodhall-spa",
        "name": "The Inn at Woodhall Spa",
        "slug": "the-inn-at-woodhall-spa",
        "town": "Woodhall Spa",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      }
    ]
  },
  {
    "id": "horncastle",
    "name": "Horncastle",
    "slug": "horncastle",
    "regionType": "Wolds",
    "contentAngle": "Antiques, Lincolnshire Wolds villages and countryside breaks.",
    "lastUpdated": "13 May 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "the-admiral-rodney-hotel",
        "name": "The Admiral Rodney Hotel",
        "slug": "the-admiral-rodney-hotel",
        "town": "Horncastle",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Horncastle.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "magpies-restaurant-with-rooms",
        "name": "Magpies Restaurant with Rooms",
        "slug": "magpies-restaurant-with-rooms",
        "town": "Horncastle",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Horncastle.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "laurel-lodge",
        "name": "Laurel Lodge",
        "slug": "laurel-lodge",
        "town": "Horncastle",
        "type": "B&B",
        "bestFor": "A b&b option for visitors to Horncastle.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "mountain-ash",
        "name": "Mountain Ash",
        "slug": "mountain-ash",
        "town": "Horncastle",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Horncastle.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-bull-hotel",
        "name": "The Bull Hotel",
        "slug": "the-bull-hotel",
        "town": "Horncastle",
        "type": "Inn",
        "bestFor": "A inn option for visitors to Horncastle.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      }
    ],
    "thingsToDo": [
      {
        "id": "horncastle-antiques-centre",
        "name": "Horncastle Antiques Centre",
        "slug": "horncastle-antiques-centre",
        "town": "Horncastle",
        "category": "Historic site",
        "shortDescription": "A worthwhile place to visit in Horncastle—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "st-mary-s-church-horncastle",
        "name": "St Mary's Church Horncastle",
        "slug": "st-mary-s-church-horncastle",
        "town": "Horncastle",
        "category": "Historic site",
        "shortDescription": "A worthwhile place to visit in Horncastle—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "lincolnshire-wolds-walking-routes",
        "name": "Lincolnshire Wolds walking routes",
        "slug": "lincolnshire-wolds-walking-routes",
        "town": "Horncastle",
        "category": "Nature",
        "shortDescription": "A worthwhile place to visit in Horncastle—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "horncastle-market-place",
        "name": "Horncastle Market Place",
        "slug": "horncastle-market-place",
        "town": "Horncastle",
        "category": "Historic site",
        "shortDescription": "A worthwhile place to visit in Horncastle—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      }
    ],
    "foodDrink": [
      {
        "id": "magpies-restaurant-with-rooms",
        "name": "Magpies Restaurant with Rooms",
        "slug": "magpies-restaurant-with-rooms",
        "town": "Horncastle",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "shakesby-s",
        "name": "Shakesby's",
        "slug": "shakesby-s",
        "town": "Horncastle",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-admiral-rodney",
        "name": "The Admiral Rodney",
        "slug": "the-admiral-rodney",
        "town": "Horncastle",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "montebello-ristorante",
        "name": "Montebello Ristorante",
        "slug": "montebello-ristorante",
        "town": "Horncastle",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "myers-cafe-tea-room",
        "name": "Myers Cafe Tea Room",
        "slug": "myers-cafe-tea-room",
        "town": "Horncastle",
        "type": "Cafe",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      }
    ]
  },
  {
    "id": "gainsborough",
    "name": "Gainsborough",
    "slug": "gainsborough",
    "regionType": "Countryside",
    "contentAngle": "Trent-side breaks, North Lincolnshire countryside and Lincoln day trips.",
    "lastUpdated": "13 May 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "brampton-dales-farm",
        "name": "Brampton Dales Farm",
        "slug": "brampton-dales-farm",
        "town": "Gainsborough",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Gainsborough.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "hickman-hill-hotel",
        "name": "Hickman Hill Hotel",
        "slug": "hickman-hill-hotel",
        "town": "Gainsborough",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Gainsborough.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "black-swan-guest-house",
        "name": "Black Swan Guest House",
        "slug": "black-swan-guest-house",
        "town": "Gainsborough",
        "type": "Guest house",
        "bestFor": "A guest house option for visitors to Gainsborough.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-black-horse-inn",
        "name": "The Black Horse Inn",
        "slug": "the-black-horse-inn",
        "town": "Gainsborough",
        "type": "Inn",
        "bestFor": "A inn option for visitors to Gainsborough.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "thonock-park-b-and-b",
        "name": "Thonock Park B&B",
        "slug": "thonock-park-b-and-b",
        "town": "Gainsborough",
        "type": "B&B",
        "bestFor": "A b&b option for visitors to Gainsborough.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      }
    ],
    "thingsToDo": [
      {
        "id": "gainsborough-old-hall",
        "name": "Gainsborough Old Hall",
        "slug": "gainsborough-old-hall",
        "town": "Gainsborough",
        "category": "Historic site",
        "shortDescription": "A worthwhile place to visit in Gainsborough—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "gainsborough-heritage-centre",
        "name": "Gainsborough Heritage Centre",
        "slug": "gainsborough-heritage-centre",
        "town": "Gainsborough",
        "category": "Museum",
        "shortDescription": "A worthwhile place to visit in Gainsborough—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "marshall-s-yard",
        "name": "Marshall's Yard",
        "slug": "marshall-s-yard",
        "town": "Gainsborough",
        "category": "Historic site",
        "shortDescription": "A worthwhile place to visit in Gainsborough—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "river-trent-walks",
        "name": "River Trent walks",
        "slug": "river-trent-walks",
        "town": "Gainsborough",
        "category": "Nature",
        "shortDescription": "A worthwhile place to visit in Gainsborough—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      }
    ],
    "foodDrink": [
      {
        "id": "the-eight-jolly-brewers",
        "name": "The Eight Jolly Brewers",
        "slug": "the-eight-jolly-brewers",
        "town": "Gainsborough",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "clock-house-gastrobar",
        "name": "Clock House Gastrobar",
        "slug": "clock-house-gastrobar",
        "town": "Gainsborough",
        "type": "Bar",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-lincolnshire-otter",
        "name": "The Lincolnshire Otter",
        "slug": "the-lincolnshire-otter",
        "town": "Gainsborough",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "prezzo-gainsborough",
        "name": "Prezzo Gainsborough",
        "slug": "prezzo-gainsborough",
        "town": "Gainsborough",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-elm-cottage",
        "name": "The Elm Cottage",
        "slug": "the-elm-cottage",
        "town": "Gainsborough",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      }
    ]
  },
  {
    "id": "market-rasen",
    "name": "Market Rasen",
    "slug": "market-rasen",
    "regionType": "Wolds",
    "contentAngle": "Lincolnshire Wolds, racing weekends, walking and quiet countryside breaks.",
    "lastUpdated": "13 May 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "the-advocate-arms",
        "name": "The Advocate Arms",
        "slug": "the-advocate-arms",
        "town": "Market Rasen",
        "type": "Inn",
        "bestFor": "A inn option for visitors to Market Rasen.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-olive",
        "name": "The Olive",
        "slug": "the-olive",
        "town": "Market Rasen",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Market Rasen.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "woldview-house-b-and-b",
        "name": "Woldview House B&B",
        "slug": "woldview-house-b-and-b",
        "town": "Market Rasen",
        "type": "B&B",
        "bestFor": "A b&b option for visitors to Market Rasen.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "glebe-farm-apartments",
        "name": "Glebe Farm Apartments",
        "slug": "glebe-farm-apartments",
        "town": "Market Rasen",
        "type": "Apartment",
        "bestFor": "A apartment option for visitors to Market Rasen.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-white-swan",
        "name": "The White Swan",
        "slug": "the-white-swan",
        "town": "Market Rasen",
        "type": "Inn",
        "bestFor": "A inn option for visitors to Market Rasen.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      }
    ],
    "thingsToDo": [
      {
        "id": "market-rasen-racecourse",
        "name": "Market Rasen Racecourse",
        "slug": "market-rasen-racecourse",
        "town": "Market Rasen",
        "category": "Shopping",
        "shortDescription": "A worthwhile place to visit in Market Rasen—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "willingham-woods",
        "name": "Willingham Woods",
        "slug": "willingham-woods",
        "town": "Market Rasen",
        "category": "Nature",
        "shortDescription": "A worthwhile place to visit in Market Rasen—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "lincolnshire-wolds-railway",
        "name": "Lincolnshire Wolds Railway",
        "slug": "lincolnshire-wolds-railway",
        "town": "Market Rasen",
        "category": "Nature",
        "shortDescription": "A worthwhile place to visit in Market Rasen—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "caistor-arts-and-heritage-centre",
        "name": "Caistor Arts and Heritage Centre",
        "slug": "caistor-arts-and-heritage-centre",
        "town": "Market Rasen",
        "category": "Museum",
        "shortDescription": "A worthwhile place to visit in Market Rasen—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      }
    ],
    "foodDrink": [
      {
        "id": "the-advocate-arms",
        "name": "The Advocate Arms",
        "slug": "the-advocate-arms",
        "town": "Market Rasen",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-olive",
        "name": "The Olive",
        "slug": "the-olive",
        "town": "Market Rasen",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "march-hare-kitchen-and-deli",
        "name": "March Hare Kitchen & Deli",
        "slug": "march-hare-kitchen-and-deli",
        "town": "Market Rasen",
        "type": "Bakery",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-aston-arms",
        "name": "The Aston Arms",
        "slug": "the-aston-arms",
        "town": "Market Rasen",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-nags-head",
        "name": "The Nags Head",
        "slug": "the-nags-head",
        "town": "Market Rasen",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      }
    ]
  },
  {
    "id": "bourne",
    "name": "Bourne",
    "slug": "bourne",
    "regionType": "Countryside",
    "contentAngle": "South Lincolnshire countryside, Stamford, Rutland Water and A15/A1 access.",
    "lastUpdated": "13 May 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "the-wishing-well-inn",
        "name": "The Wishing Well Inn",
        "slug": "the-wishing-well-inn",
        "town": "Bourne",
        "type": "Inn",
        "bestFor": "A inn option for visitors to Bourne.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-angel-at-bourne",
        "name": "The Angel at Bourne",
        "slug": "the-angel-at-bourne",
        "town": "Bourne",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Bourne.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-six-bells-witham-on-the-hill",
        "name": "The Six Bells Witham on the Hill",
        "slug": "the-six-bells-witham-on-the-hill",
        "town": "Bourne",
        "type": "Hotel",
        "bestFor": "A hotel option for visitors to Bourne.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-bull-inn-rippingale",
        "name": "The Bull Inn Rippingale",
        "slug": "the-bull-inn-rippingale",
        "town": "Bourne",
        "type": "Inn",
        "bestFor": "A inn option for visitors to Bourne.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "glen-house-annexe",
        "name": "Glen House Annexe",
        "slug": "glen-house-annexe",
        "town": "Bourne",
        "type": "Holiday cottage",
        "bestFor": "A holiday cottage option for visitors to Bourne.",
        "sourceNote": "Property details sourced from public directories; verify current availability before recommending.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use Booking/CJ approved images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      }
    ],
    "thingsToDo": [
      {
        "id": "bourne-woods",
        "name": "Bourne Woods",
        "slug": "bourne-woods",
        "town": "Bourne",
        "category": "Nature",
        "shortDescription": "A worthwhile place to visit in Bourne—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "grimsthorpe-castle-park-and-gardens",
        "name": "Grimsthorpe Castle Park and Gardens",
        "slug": "grimsthorpe-castle-park-and-gardens",
        "town": "Bourne",
        "category": "Historic site",
        "shortDescription": "A worthwhile place to visit in Bourne—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "bourne-outdoor-pool",
        "name": "Bourne Outdoor Pool",
        "slug": "bourne-outdoor-pool",
        "town": "Bourne",
        "category": "Family-friendly",
        "shortDescription": "A worthwhile place to visit in Bourne—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "bowthorpe-oak",
        "name": "Bowthorpe Oak",
        "slug": "bowthorpe-oak",
        "town": "Bourne",
        "category": "Other",
        "shortDescription": "A worthwhile place to visit in Bourne—check the official site for current opening hours.",
        "sourceUrls": [],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      }
    ],
    "foodDrink": [
      {
        "id": "smiths-of-bourne",
        "name": "Smiths of Bourne",
        "slug": "smiths-of-bourne",
        "town": "Bourne",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-angel-at-bourne",
        "name": "The Angel at Bourne",
        "slug": "the-angel-at-bourne",
        "town": "Bourne",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-wishing-well-inn",
        "name": "The Wishing Well Inn",
        "slug": "the-wishing-well-inn",
        "town": "Bourne",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "the-six-bells",
        "name": "The Six Bells",
        "slug": "the-six-bells",
        "town": "Bourne",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      },
      {
        "id": "gurkha-91",
        "name": "Gurkha 91",
        "slug": "gurkha-91",
        "town": "Bourne",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true
      }
    ]
  }
] satisfies LocationGuideBase[];
export const categoryLandingFaqs: Record<'places-to-stay' | 'things-to-do' | 'food-drink', FAQItem[]> = { 'places-to-stay': [{question:'How are accommodation options selected?',answer:'These are curated accommodation options. Always check the official website or booking platform for current ratings, prices and availability.'},{question:'Is other accommodation content included here?',answer:'No. This section covers hotels, B&Bs, guest houses, inns, apartments and holiday cottages only.'}], 'things-to-do': [{question:'Are these official recommendations?',answer:'No. They are curated suggestions for visitor planning. Always verify opening hours and details with the official source.'}], 'food-drink': [{question:'Are these ranked restaurants?',answer:'No. These are curated suggestions, not rankings. We do not publish unverified ratings or review counts.'}] };
export function getLocationGuideBySlug(slug:string){ return locationGuides.find(g=>g.slug===slug); }
export function getRelatedLocationGuides(slug:string, limit=5){ const current=getLocationGuideBySlug(slug); const rest=locationGuides.filter(g=>g.slug!==slug); return [...rest.filter(g=>g.regionType===current?.regionType),...rest.filter(g=>g.regionType!==current?.regionType)].slice(0,limit); }

