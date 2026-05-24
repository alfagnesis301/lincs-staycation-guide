import type { RegionType, FAQItem } from './caravanParkGuides';

export type SourceStatus = 'research-draft' | 'needs-verification' | 'verified';
export type BookingStatus = 'booking-search-fallback' | 'booking-confirmed' | 'official-site-only' | 'unknown';
export type PlaceToStayType = 'Hotel' | 'B&B' | 'Guest house' | 'Inn' | 'Apartment' | 'Holiday cottage';
export type ThingToDoCategory = 'Historic site' | 'Museum' | 'Family-friendly' | 'Nature' | 'Beach' | 'Walk' | 'Shopping' | 'Market' | 'Rainy day' | 'Free activity' | 'Wildlife' | 'Garden' | 'Heritage' | 'Entertainment' | 'Other';
export type FoodAndDrinkType = 'Restaurant' | 'Pub' | 'Cafe' | 'Bar' | 'Seafood' | 'Tea room' | 'Bakery' | 'Sunday roast' | 'Farm shop' | 'Other';
export interface CategorySourceUrl { label: string; url: string; type: 'Booking.com' | 'Official website' | 'Editorial source' | 'Map/search'; checkedDate?: string; }
export interface ListingLocation { address?: string; town?: string; postcode?: string; googleMapsUrl?: string; googleMapsQuery?: string; latitude?: number; longitude?: number; }
export interface PlaceToStay { id:string; name:string; slug:string; town:string; type:PlaceToStayType; bestFor:string; sourceNote:string; bookingStatus:BookingStatus; bookingUrl?:string; officialWebsiteUrl?:string; affiliateUrl?:string; sourceUrls:CategorySourceUrl[]; imageGuidance:string; needsVerification:true; googleMapsUrl?:string; location?:ListingLocation; }
export interface ThingToDo { id:string; name:string; slug:string; town:string; category:ThingToDoCategory; shortDescription:string; officialWebsiteUrl?:string; sourceUrls:CategorySourceUrl[]; imageGuidance:string; needsVerification:true; googleMapsUrl?:string; location?:ListingLocation; }
export interface FoodAndDrinkOption { id:string; name:string; slug:string; town:string; type:FoodAndDrinkType; description:string; cuisineOrStyle?:string; sourceUrls:CategorySourceUrl[]; imageGuidance:string; needsVerification:true; googleMapsUrl?:string; location?:ListingLocation; }
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
        "bestFor": "Useful for visitors comparing The Rest Hotel as a hotel base in Lincoln for city-break, heritage and short Lincolnshire stay planning. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "tower-hotel",
        "name": "Tower Hotel",
        "slug": "tower-hotel",
        "town": "Lincoln",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Tower Hotel as a hotel base in Lincoln for city-break, heritage and short Lincolnshire stay planning. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-white-hart-hotel-lincoln",
        "name": "The White Hart Hotel Lincoln",
        "slug": "the-white-hart-hotel-lincoln",
        "town": "Lincoln",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The White Hart Hotel Lincoln as a hotel base in Lincoln for city-break, heritage and short Lincolnshire stay planning. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "holiday-inn-lincoln-by-ihg",
        "name": "Holiday Inn Lincoln by IHG",
        "slug": "holiday-inn-lincoln-by-ihg",
        "town": "Lincoln",
        "type": "Inn",
        "bestFor": "Useful for visitors comparing Holiday Inn Lincoln by IHG as an inn base in Lincoln for city-break, heritage and short Lincolnshire stay planning. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "woodcocks-lincoln-by-marston-s-inns",
        "name": "Woodcocks, Lincoln by Marston's Inns",
        "slug": "woodcocks-lincoln-by-marston-s-inns",
        "town": "Lincoln",
        "type": "Inn",
        "bestFor": "Useful for visitors comparing Woodcocks, Lincoln by Marston's Inns as an inn base in Lincoln for city-break, heritage and short Lincolnshire stay planning. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
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
        "shortDescription": "Lincoln Cathedral is a heritage-focused stop to consider in Lincoln when adding local history to city centre, Cathedral Quarter and heritage itineraries. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
        "officialWebsiteUrl": "https://lincolncathedral.com/",
        "sourceUrls": [
          {
            "label": "Lincoln Cathedral official website",
            "url": "https://lincolncathedral.com/",
            "type": "Official website",
            "checkedDate": "2026-05-17"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "lincoln-castle",
        "name": "Lincoln Castle",
        "slug": "lincoln-castle",
        "town": "Lincoln",
        "category": "Historic site",
        "shortDescription": "Lincoln Castle is a heritage-focused stop to consider in Lincoln when adding local history to city centre, Cathedral Quarter and heritage itineraries. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
        "officialWebsiteUrl": "https://www.lincolncastle.com/",
        "sourceUrls": [
          {
            "label": "Lincoln Castle official website",
            "url": "https://www.lincolncastle.com/",
            "type": "Official website",
            "checkedDate": "2026-05-17"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "museum-of-lincolnshire-life",
        "name": "Museum of Lincolnshire Life",
        "slug": "museum-of-lincolnshire-life",
        "town": "Lincoln",
        "category": "Museum",
        "shortDescription": "Museum of Lincolnshire Life is a museum or indoor attraction to consider in Lincoln for local history, culture or a weather-flexible stop during city centre, Cathedral Quarter and heritage itineraries. Check current opening times, admission, facilities and accessibility directly before travelling.",
        "officialWebsiteUrl": "https://www.lincolnshire.gov.uk/history-heritage/museum-lincolnshire-life",
        "sourceUrls": [
          {
            "label": "Museum of Lincolnshire Life official page",
            "url": "https://www.lincolnshire.gov.uk/history-heritage/museum-lincolnshire-life",
            "type": "Official website",
            "checkedDate": "2026-05-17"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "the-collection-usher-gallery",
        "name": "The Collection / Usher Gallery",
        "slug": "the-collection-usher-gallery",
        "town": "Lincoln",
        "category": "Museum",
        "shortDescription": "The Collection / Usher Gallery is a museum or indoor attraction to consider in Lincoln for local history, culture or a weather-flexible stop during city centre, Cathedral Quarter and heritage itineraries. Check current opening times, admission, facilities and accessibility directly before travelling.",
        "officialWebsiteUrl": "https://www.lincolnmuseum.com/",
        "sourceUrls": [
          {
            "label": "Lincoln Museum official website",
            "url": "https://www.lincolnmuseum.com/",
            "type": "Official website",
            "checkedDate": "2026-05-17"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "international-bomber-command-centre",
        "name": "International Bomber Command Centre",
        "slug": "international-bomber-command-centre",
        "town": "Lincoln",
        "category": "Heritage",
        "shortDescription": "A major aviation and remembrance site near Lincoln; check opening times, tickets and event information direct.",
        "officialWebsiteUrl": "https://internationalbcc.co.uk/",
        "sourceUrls": [
          {
            "label": "International Bomber Command Centre official website",
            "url": "https://internationalbcc.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-17"
          }
        ],
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
        "needsVerification": true,
        "description": "The Jews House Restaurant is a restaurant listing to consider in Lincoln when comparing sit-down meals around city centre, Cathedral Quarter and heritage itineraries. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "olivares-tapas-bar",
        "name": "Olivares Tapas Bar",
        "slug": "olivares-tapas-bar",
        "town": "Lincoln",
        "type": "Bar",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A bar or casual venue in Lincoln to consider for drinks, coffee or an informal break during city centre, Cathedral Quarter and heritage itineraries. Check current hours, menus, booking arrangements, accessibility and service details directly with the venue."
      },
      {
        "id": "dough-loco",
        "name": "Dough LoCo",
        "slug": "dough-loco",
        "town": "Lincoln",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A Lincoln restaurant listing for visitors comparing places to eat as part of city centre, Cathedral Quarter and heritage itineraries. Use it as a starting point for meal planning rather than a ranking. Check current hours, menus, booking needs, accessibility information and dietary options directly with the venue."
      },
      {
        "id": "rising-cafe",
        "name": "Rising Cafe",
        "slug": "rising-cafe",
        "town": "Lincoln",
        "type": "Cafe",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "Rising Cafe is a cafe listing to consider for a daytime stop in Lincoln, especially while planning breaks around city centre, Cathedral Quarter and heritage itineraries. It may suit coffee, lunch or a pause between local stops. Check current opening hours, menus, accessibility details and any booking requirements directly with the cafe before visiting."
      },
      {
        "id": "bar-unico",
        "name": "Bar Unico",
        "slug": "bar-unico",
        "town": "Lincoln",
        "type": "Bar",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A bar or casual venue in Lincoln to consider for drinks, coffee or an informal break during city centre, Cathedral Quarter and heritage itineraries. Check current hours, menus, booking arrangements, accessibility and service details directly with the venue."
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
        "bestFor": "Useful for visitors comparing The Quorn as a hotel base in Skegness for coastal breaks, family trip planning and seaside weekends. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "southview-park-hotel",
        "name": "Southview Park Hotel",
        "slug": "southview-park-hotel",
        "town": "Skegness",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Southview Park Hotel as a hotel base in Skegness for coastal breaks, family trip planning and seaside weekends. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "north-shore-hotel",
        "name": "North Shore Hotel",
        "slug": "north-shore-hotel",
        "town": "Skegness",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing North Shore Hotel as a hotel base in Skegness for coastal breaks, family trip planning and seaside weekends. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-saxby-hotel",
        "name": "The Saxby Hotel",
        "slug": "the-saxby-hotel",
        "town": "Skegness",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The Saxby Hotel as a hotel base in Skegness for coastal breaks, family trip planning and seaside weekends. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-fountaindale-skegness",
        "name": "The Fountaindale Skegness",
        "slug": "the-fountaindale-skegness",
        "town": "Skegness",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The Fountaindale Skegness as a hotel base in Skegness for coastal breaks, family trip planning and seaside weekends. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
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
        "shortDescription": "Skegness Pier is a family-focused attraction to compare around Skegness when planning seaside day out, seafront and family coastal trips. Check age suitability, opening times, ticketing, facilities, accessibility and seasonal rules directly before travelling.",
        "officialWebsiteUrl": "https://skegnesspier.co.uk/",
        "sourceUrls": [
          {
            "label": "Skegness Pier official website",
            "url": "https://skegnesspier.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-17"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "natureland-seal-sanctuary",
        "name": "Natureland Seal Sanctuary",
        "slug": "natureland-seal-sanctuary",
        "town": "Skegness",
        "category": "Nature",
        "shortDescription": "Natureland Seal Sanctuary is a nature or walking option to compare around Skegness for a quieter outdoor stop during seaside day out, seafront and family coastal trips. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
        "officialWebsiteUrl": "https://skegnessnatureland.co.uk/",
        "sourceUrls": [
          {
            "label": "Natureland Seal Sanctuary official website",
            "url": "https://skegnessnatureland.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-17"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "gibraltar-point-national-nature-reserve",
        "name": "Gibraltar Point National Nature Reserve",
        "slug": "gibraltar-point-national-nature-reserve",
        "town": "Skegness",
        "category": "Nature",
        "shortDescription": "Gibraltar Point National Nature Reserve is a nature or walking option to compare around Skegness for a quieter outdoor stop during seaside day out, seafront and family coastal trips. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
        "officialWebsiteUrl": "https://www.lincstrust.org.uk/top-reserves/gibraltar-point",
        "sourceUrls": [
          {
            "label": "Gibraltar Point official reserve page",
            "url": "https://www.lincstrust.org.uk/top-reserves/gibraltar-point",
            "type": "Official website",
            "checkedDate": "2026-05-17"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "skegness-aquarium",
        "name": "Skegness Aquarium",
        "slug": "skegness-aquarium",
        "town": "Skegness",
        "category": "Family-friendly",
        "shortDescription": "Skegness Aquarium is a family-focused attraction to compare around Skegness when planning seaside day out, seafront and family coastal trips. Check age suitability, opening times, ticketing, facilities, accessibility and seasonal rules directly before travelling.",
        "officialWebsiteUrl": "https://www.skegness-aquarium.uk/",
        "sourceUrls": [
          {
            "label": "Skegness Aquarium official website",
            "url": "https://www.skegness-aquarium.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-17"
          }
        ],
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
        "needsVerification": true,
        "description": "Fleece Inn is a pub option to compare in or around Skegness, useful for visitors planning a relaxed meal, drinks stop or break during seaside day out, seafront and family coastal trips. Confirm current opening hours, menus, booking requirements, dog policy and accessibility details directly with the pub before travelling."
      },
      {
        "id": "pie-palace",
        "name": "Pie Palace",
        "slug": "pie-palace",
        "town": "Skegness",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A restaurant in Skegness to add to a food shortlist while planning time around seaside day out, seafront and family coastal trips. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling."
      },
      {
        "id": "the-steamboat-cookhouse-pub",
        "name": "The Steamboat Cookhouse + Pub",
        "slug": "the-steamboat-cookhouse-pub",
        "town": "Skegness",
        "type": "Tea room",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A Skegness tea room option to consider for a quieter food break linked to seaside day out, seafront and family coastal trips. Confirm current opening times, menus, booking requirements and accessibility details directly before visiting."
      },
      {
        "id": "the-hide-at-herons-mead",
        "name": "The Hide at Herons Mead",
        "slug": "the-hide-at-herons-mead",
        "town": "Skegness",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "The Hide at Herons Mead is a restaurant listing to consider in Skegness when comparing sit-down meals around seaside day out, seafront and family coastal trips. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "tarantino",
        "name": "Tarantino",
        "slug": "tarantino",
        "town": "Skegness",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A restaurant in Skegness to add to a food shortlist while planning time around seaside day out, seafront and family coastal trips. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling."
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
        "bestFor": "Useful for visitors comparing Crown Hotel as a hotel base in Stamford for historic market-town breaks, local dining and nearby countryside exploring. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-george-hotel-of-stamford",
        "name": "The George Hotel of Stamford",
        "slug": "the-george-hotel-of-stamford",
        "town": "Stamford",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The George Hotel of Stamford as a hotel base in Stamford for historic market-town breaks, local dining and nearby countryside exploring. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-william-cecil",
        "name": "The William Cecil",
        "slug": "the-william-cecil",
        "town": "Stamford",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The William Cecil as a hotel base in Stamford for historic market-town breaks, local dining and nearby countryside exploring. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-bull-and-swan",
        "name": "The Bull and Swan",
        "slug": "the-bull-and-swan",
        "town": "Stamford",
        "type": "Inn",
        "bestFor": "Useful for visitors comparing The Bull and Swan as an inn base in Stamford for historic market-town breaks, local dining and nearby countryside exploring. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "old-bank-apartments",
        "name": "Old Bank Apartments",
        "slug": "old-bank-apartments",
        "town": "Stamford",
        "type": "Apartment",
        "bestFor": "Useful for visitors comparing Old Bank Apartments as an apartment base in Stamford for historic market-town breaks, local dining and nearby countryside exploring. Confirm current access details, availability, parking, accessibility, house rules and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
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
        "shortDescription": "Burghley House is a heritage-focused stop to consider in Stamford when adding local history to market-town breaks, independent shopping and historic centre walks. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
        "officialWebsiteUrl": "https://burghley.co.uk/",
        "sourceUrls": [
          {
            "label": "Burghley House official website",
            "url": "https://burghley.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-17"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "stamford-arts-centre",
        "name": "Stamford Arts Centre",
        "slug": "stamford-arts-centre",
        "town": "Stamford",
        "category": "Other",
        "shortDescription": "Stamford Arts Centre is a visitor stop to compare in Stamford while building market-town breaks, independent shopping and historic centre walks. Check current opening times, facilities, access and any booking requirements directly before travelling.",
        "officialWebsiteUrl": "https://www.stamfordartscentre.com/",
        "sourceUrls": [
          {
            "label": "Stamford Arts Centre official website",
            "url": "https://www.stamfordartscentre.com/",
            "type": "Official website",
            "checkedDate": "2026-05-17"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "stamford-corn-exchange-theatre",
        "name": "Stamford Corn Exchange Theatre",
        "slug": "stamford-corn-exchange-theatre",
        "town": "Stamford",
        "category": "Family-friendly",
        "shortDescription": "Stamford Corn Exchange Theatre is a family-focused attraction to compare around Stamford when planning market-town breaks, independent shopping and historic centre walks. Check age suitability, opening times, ticketing, facilities, accessibility and seasonal rules directly before travelling.",
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
        "shortDescription": "Stamford Meadows is a nature or walking option to compare around Stamford for a quieter outdoor stop during market-town breaks, independent shopping and historic centre walks. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
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
        "needsVerification": true,
        "description": "Orbis Stamford is a restaurant listing to consider in Stamford when comparing sit-down meals around market-town breaks, independent shopping and historic centre walks. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "the-slanted-door",
        "name": "The Slanted Door",
        "slug": "the-slanted-door",
        "town": "Stamford",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A restaurant in Stamford to add to a food shortlist while planning time around market-town breaks, independent shopping and historic centre walks. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling."
      },
      {
        "id": "the-mad-turk",
        "name": "The Mad Turk",
        "slug": "the-mad-turk",
        "town": "Stamford",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A Stamford restaurant listing for visitors comparing places to eat as part of market-town breaks, independent shopping and historic centre walks. Use it as a starting point for meal planning rather than a ranking. Check current hours, menus, booking needs, accessibility information and dietary options directly with the venue."
      },
      {
        "id": "cloisters",
        "name": "Cloisters",
        "slug": "cloisters",
        "town": "Stamford",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "Cloisters is a restaurant listing to consider in Stamford when comparing sit-down meals around market-town breaks, independent shopping and historic centre walks. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "the-george-hotel-restaurant",
        "name": "The George Hotel Restaurant",
        "slug": "the-george-hotel-restaurant",
        "town": "Stamford",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A restaurant in Stamford to add to a food shortlist while planning time around market-town breaks, independent shopping and historic centre walks. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling."
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
        "bestFor": "Useful for visitors comparing The Beaumont Accommodation as a hotel base in Louth for quieter market-town stays, Wolds exploring and short Lincolnshire breaks. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "best-western-plus-kenwick-park-hotel",
        "name": "Best Western Plus Kenwick Park Hotel",
        "slug": "best-western-plus-kenwick-park-hotel",
        "town": "Louth",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Best Western Plus Kenwick Park Hotel as a hotel base in Louth for quieter market-town stays, Wolds exploring and short Lincolnshire breaks. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "brackenborough-hotel",
        "name": "Brackenborough Hotel",
        "slug": "brackenborough-hotel",
        "town": "Louth",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Brackenborough Hotel as a hotel base in Louth for quieter market-town stays, Wolds exploring and short Lincolnshire breaks. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-masons-arms",
        "name": "The Masons Arms",
        "slug": "the-masons-arms",
        "town": "Louth",
        "type": "Inn",
        "bestFor": "Useful for visitors comparing The Masons Arms as an inn base in Louth for quieter market-town stays, Wolds exploring and short Lincolnshire breaks. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-kings-head",
        "name": "The Kings Head",
        "slug": "the-kings-head",
        "town": "Louth",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The Kings Head as a hotel base in Louth for quieter market-town stays, Wolds exploring and short Lincolnshire breaks. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
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
        "shortDescription": "St James' Church Louth is a heritage-focused stop to consider in Louth when adding local history to Wolds market-town visits and quieter short breaks. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
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
        "shortDescription": "Louth Museum is a museum or indoor attraction to consider in Louth for local history, culture or a weather-flexible stop during Wolds market-town visits and quieter short breaks. Check current opening times, admission, facilities and accessibility directly before travelling.",
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
        "shortDescription": "Hubbard's Hills is a nature or walking option to compare around Louth for a quieter outdoor stop during Wolds market-town visits and quieter short breaks. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
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
        "shortDescription": "Lincolnshire Wolds Railway is a nature or walking option to compare around Louth for a quieter outdoor stop during Wolds market-town visits and quieter short breaks. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
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
        "needsVerification": true,
        "description": "The Masons Arms is a pub option to compare in or around Louth, useful for visitors planning a relaxed meal, drinks stop or break during Wolds market-town visits and quieter short breaks. Confirm current opening hours, menus, booking requirements, dog policy and accessibility details directly with the pub before travelling."
      },
      {
        "id": "the-greyhound-inn",
        "name": "The Greyhound Inn",
        "slug": "the-greyhound-inn",
        "town": "Louth",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A pub listing around Louth for visitors building a practical food stop into Wolds market-town visits and quieter short breaks. It may suit a casual meal or drinks break, depending on current service. Check opening times, menus, booking rules, pet policy and accessibility details directly with the pub."
      },
      {
        "id": "the-ranch-steakhouse-and-grill",
        "name": "The Ranch Steakhouse & Grill",
        "slug": "the-ranch-steakhouse-and-grill",
        "town": "Louth",
        "type": "Tea room",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A Louth tea room option to consider for a quieter food break linked to Wolds market-town visits and quieter short breaks. Confirm current opening times, menus, booking requirements and accessibility details directly before visiting."
      },
      {
        "id": "via-italia",
        "name": "Via Italia",
        "slug": "via-italia",
        "town": "Louth",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "Via Italia is a restaurant listing to consider in Louth when comparing sit-down meals around Wolds market-town visits and quieter short breaks. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "the-kings-head",
        "name": "The Kings Head",
        "slug": "the-kings-head",
        "town": "Louth",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A restaurant in Louth to add to a food shortlist while planning time around Wolds market-town visits and quieter short breaks. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling."
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
        "bestFor": "Useful for visitors comparing The White Hart Hotel, Boston as a hotel base in Boston for heritage stops, work trips and wider south Lincolnshire itineraries. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "boston-west-hotel",
        "name": "Boston West Hotel",
        "slug": "boston-west-hotel",
        "town": "Boston",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Boston West Hotel as a hotel base in Boston for heritage stops, work trips and wider south Lincolnshire itineraries. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-old-kings-head",
        "name": "The Old Kings Head",
        "slug": "the-old-kings-head",
        "town": "Boston",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The Old Kings Head as a hotel base in Boston for heritage stops, work trips and wider south Lincolnshire itineraries. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "quayside-hotel-and-bar",
        "name": "Quayside Hotel & Bar",
        "slug": "quayside-hotel-and-bar",
        "town": "Boston",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Quayside Hotel & Bar as a hotel base in Boston for heritage stops, work trips and wider south Lincolnshire itineraries. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-kings-arms",
        "name": "The Kings Arms",
        "slug": "the-kings-arms",
        "town": "Boston",
        "type": "Inn",
        "bestFor": "Useful for visitors comparing The Kings Arms as an inn base in Boston for heritage stops, work trips and wider south Lincolnshire itineraries. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
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
        "shortDescription": "St Botolph's Church (Boston Stump) is a heritage-focused stop to consider in Boston when adding local history to heritage stops, market-place visits and south Lincolnshire routes. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
        "officialWebsiteUrl": "https://parish-of-boston.org.uk/church/st-botolphs/",
        "sourceUrls": [
          {
            "label": "St Botolph's Church official page",
            "url": "https://parish-of-boston.org.uk/church/st-botolphs/",
            "type": "Official website",
            "checkedDate": "2026-05-17"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "boston-guildhall-museum",
        "name": "Boston Guildhall Museum",
        "slug": "boston-guildhall-museum",
        "town": "Boston",
        "category": "Museum",
        "shortDescription": "Boston Guildhall Museum is a museum or indoor attraction to consider in Boston for local history, culture or a weather-flexible stop during heritage stops, market-place visits and south Lincolnshire routes. Check current opening times, admission, facilities and accessibility directly before travelling.",
        "officialWebsiteUrl": "https://www.boston.gov.uk/bostonguildhall",
        "sourceUrls": [
          {
            "label": "Boston Guildhall official page",
            "url": "https://www.boston.gov.uk/bostonguildhall",
            "type": "Official website",
            "checkedDate": "2026-05-17"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "maud-foster-windmill",
        "name": "Maud Foster Windmill",
        "slug": "maud-foster-windmill",
        "town": "Boston",
        "category": "Historic site",
        "shortDescription": "Maud Foster Windmill is a heritage-focused stop to consider in Boston when adding local history to heritage stops, market-place visits and south Lincolnshire routes. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
        "officialWebsiteUrl": "https://maudfoster.co.uk/",
        "sourceUrls": [
          {
            "label": "Maud Foster Windmill official website",
            "url": "https://maudfoster.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-17"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "rspb-frampton-marsh",
        "name": "RSPB Frampton Marsh",
        "slug": "rspb-frampton-marsh",
        "town": "Boston",
        "category": "Other",
        "shortDescription": "RSPB Frampton Marsh is a visitor stop to compare in Boston while building heritage stops, market-place visits and south Lincolnshire routes. Check current opening times, facilities, access and any booking requirements directly before travelling.",
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
        "needsVerification": true,
        "description": "Witham and Blues is a restaurant listing to consider in Boston when comparing sit-down meals around heritage stops, market-place visits and south Lincolnshire routes. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "the-white-hart-restaurant",
        "name": "The White Hart Restaurant",
        "slug": "the-white-hart-restaurant",
        "town": "Boston",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A restaurant in Boston to add to a food shortlist while planning time around heritage stops, market-place visits and south Lincolnshire routes. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling."
      },
      {
        "id": "the-ropers-arms",
        "name": "The Ropers Arms",
        "slug": "the-ropers-arms",
        "town": "Boston",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A Boston pub to keep on a comparison list for a meal or drinks stop linked to heritage stops, market-place visits and south Lincolnshire routes. Facilities and food service can change, so confirm hours, menus, booking arrangements, dog access and accessibility directly before visiting."
      },
      {
        "id": "goodbarns-yard",
        "name": "Goodbarns Yard",
        "slug": "goodbarns-yard",
        "town": "Boston",
        "type": "Bar",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "Goodbarns Yard is a bar or casual food-and-drink listing to compare when planning time in Boston around heritage stops, market-place visits and south Lincolnshire routes. It may suit visitors looking for drinks, coffee or a relaxed stop before or after exploring. Confirm opening hours, menus, booking requirements and accessibility details directly before visiting."
      },
      {
        "id": "the-sack-store-boston",
        "name": "The Sack Store Boston",
        "slug": "the-sack-store-boston",
        "town": "Boston",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A restaurant in Boston to add to a food shortlist while planning time around heritage stops, market-place visits and south Lincolnshire routes. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling."
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
        "bestFor": "Useful for visitors comparing Angel and Royal Hotel as a hotel base in Grantham for short stays, work trips and stops along a wider Lincolnshire route. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "belton-woods-hotel-spa-and-golf-resort",
        "name": "Belton Woods Hotel, Spa & Golf Resort",
        "slug": "belton-woods-hotel-spa-and-golf-resort",
        "town": "Grantham",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Belton Woods Hotel, Spa & Golf Resort as a hotel base in Grantham for short stays, work trips and stops along a wider Lincolnshire route. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-avenue-hotel",
        "name": "The Avenue Hotel",
        "slug": "the-avenue-hotel",
        "town": "Grantham",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The Avenue Hotel as a hotel base in Grantham for short stays, work trips and stops along a wider Lincolnshire route. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-barn-hotel-and-spa",
        "name": "The Barn Hotel & Spa",
        "slug": "the-barn-hotel-and-spa",
        "town": "Grantham",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The Barn Hotel & Spa as a hotel base in Grantham for short stays, work trips and stops along a wider Lincolnshire route. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "urban-hotel-grantham",
        "name": "Urban Hotel Grantham",
        "slug": "urban-hotel-grantham",
        "town": "Grantham",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Urban Hotel Grantham as a hotel base in Grantham for short stays, work trips and stops along a wider Lincolnshire route. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
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
        "shortDescription": "Belton House is a heritage-focused stop to consider in Grantham when adding local history to short stays, route stops and A1 corridor trips. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
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
        "shortDescription": "Belvoir Castle is a heritage-focused stop to consider in Grantham when adding local history to short stays, route stops and A1 corridor trips. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
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
        "shortDescription": "Wyndham Park is a nature or walking option to compare around Grantham for a quieter outdoor stop during short stays, route stops and A1 corridor trips. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
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
        "shortDescription": "Grantham Museum is a museum or indoor attraction to consider in Grantham for local history, culture or a weather-flexible stop during short stays, route stops and A1 corridor trips. Check current opening times, admission, facilities and accessibility directly before travelling.",
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
        "needsVerification": true,
        "description": "The Gregory is a restaurant listing to consider in Grantham when comparing sit-down meals around short stays, route stops and A1 corridor trips. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "siam-garden-thai",
        "name": "Siam Garden Thai",
        "slug": "siam-garden-thai",
        "town": "Grantham",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A restaurant in Grantham to add to a food shortlist while planning time around short stays, route stops and A1 corridor trips. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling."
      },
      {
        "id": "julianos",
        "name": "Julianos",
        "slug": "julianos",
        "town": "Grantham",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A Grantham restaurant listing for visitors comparing places to eat as part of short stays, route stops and A1 corridor trips. Use it as a starting point for meal planning rather than a ranking. Check current hours, menus, booking needs, accessibility information and dietary options directly with the venue."
      },
      {
        "id": "the-tollemache-inn",
        "name": "The Tollemache Inn",
        "slug": "the-tollemache-inn",
        "town": "Grantham",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "The Tollemache Inn is a pub option to compare in or around Grantham, useful for visitors planning a relaxed meal, drinks stop or break during short stays, route stops and A1 corridor trips. Confirm current opening hours, menus, booking requirements, dog policy and accessibility details directly with the pub before travelling."
      },
      {
        "id": "the-nobody-inn",
        "name": "The Nobody Inn",
        "slug": "the-nobody-inn",
        "town": "Grantham",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A pub listing around Grantham for visitors building a practical food stop into short stays, route stops and A1 corridor trips. It may suit a casual meal or drinks break, depending on current service. Check opening times, menus, booking rules, pet policy and accessibility details directly with the pub."
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
        "bestFor": "Useful for visitors comparing Tulip Queen, Spalding by Marston's Inns as an inn base in Spalding for relaxed Fenland stays, local gardens and south Lincolnshire short breaks. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "woodhouse-farm-lodge",
        "name": "Woodhouse Farm Lodge",
        "slug": "woodhouse-farm-lodge",
        "town": "Spalding",
        "type": "B&B",
        "bestFor": "Useful for visitors comparing Woodhouse Farm Lodge as a B&B base in Spalding for relaxed Fenland stays, local gardens and south Lincolnshire short breaks. Confirm current room details, breakfast arrangements, availability, parking, accessibility and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-red-lion-hotel",
        "name": "The Red Lion Hotel",
        "slug": "the-red-lion-hotel",
        "town": "Spalding",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The Red Lion Hotel as a hotel base in Spalding for relaxed Fenland stays, local gardens and south Lincolnshire short breaks. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "woodlands-hotel",
        "name": "Woodlands Hotel",
        "slug": "woodlands-hotel",
        "town": "Spalding",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Woodlands Hotel as a hotel base in Spalding for relaxed Fenland stays, local gardens and south Lincolnshire short breaks. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "cley-hall",
        "name": "Cley Hall",
        "slug": "cley-hall",
        "town": "Spalding",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Cley Hall as a hotel base in Spalding for relaxed Fenland stays, local gardens and south Lincolnshire short breaks. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
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
        "shortDescription": "Ayscoughfee Hall Museum and Gardens is a museum or indoor attraction to consider in Spalding for local history, culture or a weather-flexible stop during Fenland visits, gardens and countryside days. Check current opening times, admission, facilities and accessibility directly before travelling.",
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
        "shortDescription": "Springfields Outlet Shopping & Leisure is a shopping or browsing stop to consider in Spalding as part of Fenland visits, gardens and countryside days. Opening times, market days and individual business hours can vary, so check current details before travelling.",
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
        "shortDescription": "Chain Bridge Forge is a visitor stop to compare in Spalding while building Fenland visits, gardens and countryside days. Check current opening times, facilities, access and any booking requirements directly before travelling.",
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
        "shortDescription": "Baytree Owl and Wildlife Centre is a nature or walking option to compare around Spalding for a quieter outdoor stop during Fenland visits, gardens and countryside days. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
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
        "needsVerification": true,
        "description": "Sergi's Tapas Bar is a bar or casual food-and-drink listing to compare when planning time in Spalding around Fenland visits, gardens and countryside days. It may suit visitors looking for drinks, coffee or a relaxed stop before or after exploring. Confirm opening hours, menus, booking requirements and accessibility details directly before visiting."
      },
      {
        "id": "the-ship-albion",
        "name": "The Ship Albion",
        "slug": "the-ship-albion",
        "town": "Spalding",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A pub listing around Spalding for visitors building a practical food stop into Fenland visits, gardens and countryside days. It may suit a casual meal or drinks break, depending on current service. Check opening times, menus, booking rules, pet policy and accessibility details directly with the pub."
      },
      {
        "id": "the-moorings",
        "name": "The Moorings",
        "slug": "the-moorings",
        "town": "Spalding",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A Spalding restaurant listing for visitors comparing places to eat as part of Fenland visits, gardens and countryside days. Use it as a starting point for meal planning rather than a ranking. Check current hours, menus, booking needs, accessibility information and dietary options directly with the venue."
      },
      {
        "id": "amici-restaurant",
        "name": "Amici Restaurant",
        "slug": "amici-restaurant",
        "town": "Spalding",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "Amici Restaurant is a restaurant listing to consider in Spalding when comparing sit-down meals around Fenland visits, gardens and countryside days. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "the-red-lion-hotel",
        "name": "The Red Lion Hotel",
        "slug": "the-red-lion-hotel",
        "town": "Spalding",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A pub listing around Spalding for visitors building a practical food stop into Fenland visits, gardens and countryside days. It may suit a casual meal or drinks break, depending on current service. Check opening times, menus, booking rules, pet policy and accessibility details directly with the pub."
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
        "bestFor": "Useful for visitors comparing The SOLO as a hotel base in Sleaford for market-town stays, local heritage stops and rail-linked Lincolnshire plans. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "marquis-of-granby",
        "name": "Marquis of Granby",
        "slug": "marquis-of-granby",
        "town": "Sleaford",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Marquis of Granby as a hotel base in Sleaford for market-town stays, local heritage stops and rail-linked Lincolnshire plans. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-finch-hatton-arms",
        "name": "The Finch Hatton Arms",
        "slug": "the-finch-hatton-arms",
        "town": "Sleaford",
        "type": "Inn",
        "bestFor": "Useful for visitors comparing The Finch Hatton Arms as an inn base in Sleaford for market-town stays, local heritage stops and rail-linked Lincolnshire plans. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-mallards",
        "name": "The Mallards",
        "slug": "the-mallards",
        "town": "Sleaford",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The Mallards as a hotel base in Sleaford for market-town stays, local heritage stops and rail-linked Lincolnshire plans. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "riverside-guest-house",
        "name": "Riverside Guest House",
        "slug": "riverside-guest-house",
        "town": "Sleaford",
        "type": "Guest house",
        "bestFor": "A guest house option for visitors to Sleaford.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
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
        "shortDescription": "Hub - National Centre for Craft and Design is a visitor stop to compare in Sleaford while building market-town stops, rail-linked visits and local heritage routes. Check current opening times, facilities, access and any booking requirements directly before travelling.",
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
        "shortDescription": "Cogglesford Watermill is a visitor stop to compare in Sleaford while building market-town stops, rail-linked visits and local heritage routes. Check current opening times, facilities, access and any booking requirements directly before travelling.",
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
        "shortDescription": "Heckington Windmill is a heritage-focused stop to consider in Sleaford when adding local history to market-town stops, rail-linked visits and local heritage routes. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
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
        "shortDescription": "Cranwell Aviation Heritage Museum is a museum or indoor attraction to consider in Sleaford for local history, culture or a weather-flexible stop during market-town stops, rail-linked visits and local heritage routes. Check current opening times, admission, facilities and accessibility directly before travelling.",
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
        "needsVerification": true,
        "description": "The Barge and Bottle is a bar or casual food-and-drink listing to compare when planning time in Sleaford around market-town stops, rail-linked visits and local heritage routes. It may suit visitors looking for drinks, coffee or a relaxed stop before or after exploring. Confirm opening hours, menus, booking requirements and accessibility details directly before visiting."
      },
      {
        "id": "the-finch-hatton-arms",
        "name": "The Finch Hatton Arms",
        "slug": "the-finch-hatton-arms",
        "town": "Sleaford",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A pub listing around Sleaford for visitors building a practical food stop into market-town stops, rail-linked visits and local heritage routes. It may suit a casual meal or drinks break, depending on current service. Check opening times, menus, booking rules, pet policy and accessibility details directly with the pub."
      },
      {
        "id": "millers-restaurant",
        "name": "Millers Restaurant",
        "slug": "millers-restaurant",
        "town": "Sleaford",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A Sleaford restaurant listing for visitors comparing places to eat as part of market-town stops, rail-linked visits and local heritage routes. Use it as a starting point for meal planning rather than a ranking. Check current hours, menus, booking needs, accessibility information and dietary options directly with the venue."
      },
      {
        "id": "the-bustard-inn",
        "name": "The Bustard Inn",
        "slug": "the-bustard-inn",
        "town": "Sleaford",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "The Bustard Inn is a pub option to compare in or around Sleaford, useful for visitors planning a relaxed meal, drinks stop or break during market-town stops, rail-linked visits and local heritage routes. Confirm current opening hours, menus, booking requirements, dog policy and accessibility details directly with the pub before travelling."
      },
      {
        "id": "watergate-yard",
        "name": "Watergate YARD",
        "slug": "watergate-yard",
        "town": "Sleaford",
        "type": "Bar",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A bar or casual venue in Sleaford to consider for drinks, coffee or an informal break during market-town stops, rail-linked visits and local heritage routes. Check current hours, menus, booking arrangements, accessibility and service details directly with the venue."
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
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "k44-mablethorpe-chalet-park",
        "name": "K44 Mablethorpe Chalet Park",
        "slug": "k44-mablethorpe-chalet-park",
        "town": "Mablethorpe",
        "type": "Holiday cottage",
        "bestFor": "A chalet-style stay to compare for visitors planning beach time, promenade walks and casual coastal breaks in Mablethorpe.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "l30-what-a-cracker",
        "name": "L30 what a cracker",
        "slug": "l30-what-a-cracker",
        "town": "Mablethorpe",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing L30 what a cracker as a hotel base in Mablethorpe for seaside breaks, beach-focused trips and quieter coastal stays. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "l90-holiday-home",
        "name": "L90 Holiday Home",
        "slug": "l90-holiday-home",
        "town": "Mablethorpe",
        "type": "Holiday cottage",
        "bestFor": "A self-catering stay to consider for visitors planning a Mablethorpe seaside break with direct checks on facilities and booking terms.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "h21-holiday-let",
        "name": "H21 holiday let",
        "slug": "h21-holiday-let",
        "town": "Mablethorpe",
        "type": "Holiday cottage",
        "bestFor": "A holiday let to compare for visitors looking at Mablethorpe beach days, coastal walks and flexible self-catering stays.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
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
        "shortDescription": "Mablethorpe Beach is a coastal stop to consider around Mablethorpe for beach time, a walk or a simple outdoor break during beach days, promenade time and casual coastal breaks. Check tide conditions where relevant, seasonal facilities, parking and local safety guidance before travelling.",
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
        "shortDescription": "Mablethorpe Seal Sanctuary and Wildlife Centre is a nature or walking option to compare around Mablethorpe for a quieter outdoor stop during beach days, promenade time and casual coastal breaks. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
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
        "shortDescription": "Queens Park is a nature or walking option to compare around Mablethorpe for a quieter outdoor stop during beach days, promenade time and casual coastal breaks. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
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
        "shortDescription": "Mablethorpe Sand Train is a family-focused attraction to compare around Mablethorpe when planning beach days, promenade time and casual coastal breaks. Check age suitability, opening times, ticketing, facilities, accessibility and seasonal rules directly before travelling.",
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
        "needsVerification": true,
        "description": "The Beck is a restaurant listing to consider in Mablethorpe when comparing sit-down meals around beach days, promenade time and casual coastal breaks. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "the-dunes",
        "name": "The Dunes",
        "slug": "the-dunes",
        "town": "Mablethorpe",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A restaurant in Mablethorpe to add to a food shortlist while planning time around beach days, promenade time and casual coastal breaks. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling."
      },
      {
        "id": "the-coffee-lounge",
        "name": "The Coffee Lounge",
        "slug": "the-coffee-lounge",
        "town": "Mablethorpe",
        "type": "Cafe",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A Mablethorpe cafe listing for visitors planning a pause between sightseeing, shopping, walking or local heritage stops around beach days, promenade time and casual coastal breaks. Check current hours, menus, accessibility information and any booking requirements directly before travelling."
      },
      {
        "id": "gerardo-s",
        "name": "Gerardo's",
        "slug": "gerardo-s",
        "town": "Mablethorpe",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "Gerardo's is a restaurant listing to consider in Mablethorpe when comparing sit-down meals around beach days, promenade time and casual coastal breaks. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "fantasia-italian",
        "name": "Fantasia Italian",
        "slug": "fantasia-italian",
        "town": "Mablethorpe",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A restaurant in Mablethorpe to add to a food shortlist while planning time around beach days, promenade time and casual coastal breaks. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling."
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
        "bestFor": "Useful for visitors comparing Village Limits Bed and Breakfast Rooms as a B&B base in Woodhall Spa for relaxed Lincolnshire breaks, Wolds-edge exploring and heritage-focused stays. Confirm current room details, breakfast arrangements, availability, parking, accessibility and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-dower-house-hotel",
        "name": "The Dower House Hotel",
        "slug": "the-dower-house-hotel",
        "town": "Woodhall Spa",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The Dower House Hotel as a hotel base in Woodhall Spa for relaxed Lincolnshire breaks, Wolds-edge exploring and heritage-focused stays. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "petwood-hotel",
        "name": "Petwood Hotel",
        "slug": "petwood-hotel",
        "town": "Woodhall Spa",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Petwood Hotel as a hotel base in Woodhall Spa for relaxed Lincolnshire breaks, Wolds-edge exploring and heritage-focused stays. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-golf-hotel",
        "name": "The Golf Hotel",
        "slug": "the-golf-hotel",
        "town": "Woodhall Spa",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The Golf Hotel as a hotel base in Woodhall Spa for relaxed Lincolnshire breaks, Wolds-edge exploring and heritage-focused stays. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-inn-at-woodhall-spa",
        "name": "The Inn at Woodhall Spa",
        "slug": "the-inn-at-woodhall-spa",
        "town": "Woodhall Spa",
        "type": "Inn",
        "bestFor": "Useful for visitors comparing The Inn at Woodhall Spa as an inn base in Woodhall Spa for relaxed Lincolnshire breaks, Wolds-edge exploring and heritage-focused stays. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
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
        "shortDescription": "The Kinema in the Woods is a nature or walking option to compare around Woodhall Spa for a quieter outdoor stop during relaxed Wolds-edge stays, heritage stops and leisure breaks. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
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
        "shortDescription": "Woodhall Spa Cottage Museum is a museum or indoor attraction to consider in Woodhall Spa for local history, culture or a weather-flexible stop during relaxed Wolds-edge stays, heritage stops and leisure breaks. Check current opening times, admission, facilities and accessibility directly before travelling.",
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
        "shortDescription": "Jubilee Park is a nature or walking option to compare around Woodhall Spa for a quieter outdoor stop during relaxed Wolds-edge stays, heritage stops and leisure breaks. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
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
        "shortDescription": "Tattershall Castle is a heritage-focused stop to consider in Woodhall Spa when adding local history to relaxed Wolds-edge stays, heritage stops and leisure breaks. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
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
        "needsVerification": true,
        "description": "The Tea House in the Woods is a tea room option to compare while planning a slower-paced visit to Woodhall Spa and relaxed Wolds-edge stays, heritage stops and leisure breaks. It may suit visitors looking for a daytime refreshment stop. Confirm opening times, menus, accessibility and booking arrangements directly before travelling."
      },
      {
        "id": "india-village",
        "name": "India Village",
        "slug": "india-village",
        "town": "Woodhall Spa",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A restaurant in Woodhall Spa to add to a food shortlist while planning time around relaxed Wolds-edge stays, heritage stops and leisure breaks. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling."
      },
      {
        "id": "bar-eleven",
        "name": "Bar Eleven",
        "slug": "bar-eleven",
        "town": "Woodhall Spa",
        "type": "Bar",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A Woodhall Spa bar listing for visitors comparing relaxed stops around relaxed Wolds-edge stays, heritage stops and leisure breaks. Use it as a planning prompt, then confirm opening times, menus, booking requirements and accessibility details directly before travelling."
      },
      {
        "id": "petwood-hotel-restaurant",
        "name": "Petwood Hotel Restaurant",
        "slug": "petwood-hotel-restaurant",
        "town": "Woodhall Spa",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "Petwood Hotel Restaurant is a restaurant listing to consider in Woodhall Spa when comparing sit-down meals around relaxed Wolds-edge stays, heritage stops and leisure breaks. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "the-inn-at-woodhall-spa",
        "name": "The Inn at Woodhall Spa",
        "slug": "the-inn-at-woodhall-spa",
        "town": "Woodhall Spa",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A pub listing around Woodhall Spa for visitors building a practical food stop into relaxed Wolds-edge stays, heritage stops and leisure breaks. It may suit a casual meal or drinks break, depending on current service. Check opening times, menus, booking rules, pet policy and accessibility details directly with the pub."
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
        "bestFor": "Useful for visitors comparing The Admiral Rodney Hotel as a hotel base in Horncastle for market-town stops, antiques browsing and wider Lincolnshire Wolds itineraries. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "magpies-restaurant-with-rooms",
        "name": "Magpies Restaurant with Rooms",
        "slug": "magpies-restaurant-with-rooms",
        "town": "Horncastle",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Magpies Restaurant with Rooms as a hotel base in Horncastle for market-town stops, antiques browsing and wider Lincolnshire Wolds itineraries. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "laurel-lodge",
        "name": "Laurel Lodge",
        "slug": "laurel-lodge",
        "town": "Horncastle",
        "type": "B&B",
        "bestFor": "Useful for visitors comparing Laurel Lodge as a B&B base in Horncastle for market-town stops, antiques browsing and wider Lincolnshire Wolds itineraries. Confirm current room details, breakfast arrangements, availability, parking, accessibility and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "mountain-ash",
        "name": "Mountain Ash",
        "slug": "mountain-ash",
        "town": "Horncastle",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Mountain Ash as a hotel base in Horncastle for market-town stops, antiques browsing and wider Lincolnshire Wolds itineraries. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-bull-hotel",
        "name": "The Bull Hotel",
        "slug": "the-bull-hotel",
        "town": "Horncastle",
        "type": "Inn",
        "bestFor": "Useful for visitors comparing The Bull Hotel as an inn base in Horncastle for market-town stops, antiques browsing and wider Lincolnshire Wolds itineraries. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
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
        "shortDescription": "Horncastle Antiques Centre is a heritage-focused stop to consider in Horncastle when adding local history to antiques browsing, market-town stops and Wolds itineraries. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
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
        "shortDescription": "St Mary's Church Horncastle is a heritage-focused stop to consider in Horncastle when adding local history to antiques browsing, market-town stops and Wolds itineraries. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
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
        "shortDescription": "Lincolnshire Wolds walking routes is a nature or walking option to compare around Horncastle for a quieter outdoor stop during antiques browsing, market-town stops and Wolds itineraries. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
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
        "shortDescription": "Horncastle Market Place is a heritage-focused stop to consider in Horncastle when adding local history to antiques browsing, market-town stops and Wolds itineraries. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
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
        "needsVerification": true,
        "description": "Magpies Restaurant with Rooms is a restaurant listing to consider in Horncastle when comparing sit-down meals around antiques browsing, market-town stops and Wolds itineraries. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "shakesby-s",
        "name": "Shakesby's",
        "slug": "shakesby-s",
        "town": "Horncastle",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A restaurant in Horncastle to add to a food shortlist while planning time around antiques browsing, market-town stops and Wolds itineraries. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling."
      },
      {
        "id": "the-admiral-rodney",
        "name": "The Admiral Rodney",
        "slug": "the-admiral-rodney",
        "town": "Horncastle",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A Horncastle restaurant listing for visitors comparing places to eat as part of antiques browsing, market-town stops and Wolds itineraries. Use it as a starting point for meal planning rather than a ranking. Check current hours, menus, booking needs, accessibility information and dietary options directly with the venue."
      },
      {
        "id": "montebello-ristorante",
        "name": "Montebello Ristorante",
        "slug": "montebello-ristorante",
        "town": "Horncastle",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "Montebello Ristorante is a restaurant listing to consider in Horncastle when comparing sit-down meals around antiques browsing, market-town stops and Wolds itineraries. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "myers-cafe-tea-room",
        "name": "Myers Cafe Tea Room",
        "slug": "myers-cafe-tea-room",
        "town": "Horncastle",
        "type": "Cafe",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A cafe in Horncastle to compare for daytime refreshment during antiques browsing, market-town stops and Wolds itineraries. It may be useful for visitors who want a lighter stop rather than a full meal. Confirm opening times, menu options, accessibility and service arrangements directly with the cafe."
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
        "bestFor": "Useful for visitors comparing Brampton Dales Farm as a hotel base in Gainsborough for north-west Lincolnshire stays, local heritage stops and wider Trent-side itineraries. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "hickman-hill-hotel",
        "name": "Hickman Hill Hotel",
        "slug": "hickman-hill-hotel",
        "town": "Gainsborough",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Hickman Hill Hotel as a hotel base in Gainsborough for north-west Lincolnshire stays, local heritage stops and wider Trent-side itineraries. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "black-swan-guest-house",
        "name": "Black Swan Guest House",
        "slug": "black-swan-guest-house",
        "town": "Gainsborough",
        "type": "Guest house",
        "bestFor": "A guest house option for visitors to Gainsborough.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-black-horse-inn",
        "name": "The Black Horse Inn",
        "slug": "the-black-horse-inn",
        "town": "Gainsborough",
        "type": "Inn",
        "bestFor": "Useful for visitors comparing The Black Horse Inn as an inn base in Gainsborough for north-west Lincolnshire stays, local heritage stops and wider Trent-side itineraries. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "thonock-park-b-and-b",
        "name": "Thonock Park B&B",
        "slug": "thonock-park-b-and-b",
        "town": "Gainsborough",
        "type": "B&B",
        "bestFor": "Useful for visitors comparing Thonock Park B&B as a B&B base in Gainsborough for north-west Lincolnshire stays, local heritage stops and wider Trent-side itineraries. Confirm current room details, breakfast arrangements, availability, parking, accessibility and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
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
        "shortDescription": "Gainsborough Old Hall is a heritage-focused stop to consider in Gainsborough when adding local history to Trent-side visits, local heritage and north-west Lincolnshire trips. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
        "officialWebsiteUrl": "https://www.gainsborougholdhall.com/",
        "sourceUrls": [
          {
            "label": "Gainsborough Old Hall official website",
            "url": "https://www.gainsborougholdhall.com/",
            "type": "Official website",
            "checkedDate": "2026-05-17"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": true
      },
      {
        "id": "gainsborough-heritage-centre",
        "name": "Gainsborough Heritage Centre",
        "slug": "gainsborough-heritage-centre",
        "town": "Gainsborough",
        "category": "Museum",
        "shortDescription": "Gainsborough Heritage Centre is a museum or indoor attraction to consider in Gainsborough for local history, culture or a weather-flexible stop during Trent-side visits, local heritage and north-west Lincolnshire trips. Check current opening times, admission, facilities and accessibility directly before travelling.",
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
        "shortDescription": "Marshall's Yard is a heritage-focused stop to consider in Gainsborough when adding local history to Trent-side visits, local heritage and north-west Lincolnshire trips. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
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
        "shortDescription": "River Trent walks is a nature or walking option to compare around Gainsborough for a quieter outdoor stop during Trent-side visits, local heritage and north-west Lincolnshire trips. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
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
        "needsVerification": true,
        "description": "The Eight Jolly Brewers is a pub option to compare in or around Gainsborough, useful for visitors planning a relaxed meal, drinks stop or break during Trent-side visits, local heritage and north-west Lincolnshire trips. Confirm current opening hours, menus, booking requirements, dog policy and accessibility details directly with the pub before travelling."
      },
      {
        "id": "clock-house-gastrobar",
        "name": "Clock House Gastrobar",
        "slug": "clock-house-gastrobar",
        "town": "Gainsborough",
        "type": "Bar",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A bar or casual venue in Gainsborough to consider for drinks, coffee or an informal break during Trent-side visits, local heritage and north-west Lincolnshire trips. Check current hours, menus, booking arrangements, accessibility and service details directly with the venue."
      },
      {
        "id": "the-lincolnshire-otter",
        "name": "The Lincolnshire Otter",
        "slug": "the-lincolnshire-otter",
        "town": "Gainsborough",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A Gainsborough pub to keep on a comparison list for a meal or drinks stop linked to Trent-side visits, local heritage and north-west Lincolnshire trips. Facilities and food service can change, so confirm hours, menus, booking arrangements, dog access and accessibility directly before visiting."
      },
      {
        "id": "prezzo-gainsborough",
        "name": "Prezzo Gainsborough",
        "slug": "prezzo-gainsborough",
        "town": "Gainsborough",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "Prezzo Gainsborough is a restaurant listing to consider in Gainsborough when comparing sit-down meals around Trent-side visits, local heritage and north-west Lincolnshire trips. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "the-elm-cottage",
        "name": "The Elm Cottage",
        "slug": "the-elm-cottage",
        "town": "Gainsborough",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A restaurant in Gainsborough to add to a food shortlist while planning time around Trent-side visits, local heritage and north-west Lincolnshire trips. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling."
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
        "bestFor": "Useful for visitors comparing The Advocate Arms as an inn base in Market Rasen for Wolds breaks, countryside stays and short Lincolnshire itineraries. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-olive",
        "name": "The Olive",
        "slug": "the-olive",
        "town": "Market Rasen",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The Olive as a hotel base in Market Rasen for Wolds breaks, countryside stays and short Lincolnshire itineraries. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "woldview-house-b-and-b",
        "name": "Woldview House B&B",
        "slug": "woldview-house-b-and-b",
        "town": "Market Rasen",
        "type": "B&B",
        "bestFor": "Useful for visitors comparing Woldview House B&B as a B&B base in Market Rasen for Wolds breaks, countryside stays and short Lincolnshire itineraries. Confirm current room details, breakfast arrangements, availability, parking, accessibility and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "glebe-farm-apartments",
        "name": "Glebe Farm Apartments",
        "slug": "glebe-farm-apartments",
        "town": "Market Rasen",
        "type": "Apartment",
        "bestFor": "Useful for visitors comparing Glebe Farm Apartments as an apartment base in Market Rasen for Wolds breaks, countryside stays and short Lincolnshire itineraries. Confirm current access details, availability, parking, accessibility, house rules and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-white-swan",
        "name": "The White Swan",
        "slug": "the-white-swan",
        "town": "Market Rasen",
        "type": "Inn",
        "bestFor": "Useful for visitors comparing The White Swan as an inn base in Market Rasen for Wolds breaks, countryside stays and short Lincolnshire itineraries. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
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
        "shortDescription": "Market Rasen Racecourse is a shopping or browsing stop to consider in Market Rasen as part of Wolds countryside stays, market-town stops and race-day plans. Opening times, market days and individual business hours can vary, so check current details before travelling.",
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
        "shortDescription": "Willingham Woods is a nature or walking option to compare around Market Rasen for a quieter outdoor stop during Wolds countryside stays, market-town stops and race-day plans. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
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
        "shortDescription": "Lincolnshire Wolds Railway is a nature or walking option to compare around Market Rasen for a quieter outdoor stop during Wolds countryside stays, market-town stops and race-day plans. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
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
        "shortDescription": "Caistor Arts and Heritage Centre is a museum or indoor attraction to consider in Market Rasen for local history, culture or a weather-flexible stop during Wolds countryside stays, market-town stops and race-day plans. Check current opening times, admission, facilities and accessibility directly before travelling.",
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
        "needsVerification": true,
        "description": "The Advocate Arms is a pub option to compare in or around Market Rasen, useful for visitors planning a relaxed meal, drinks stop or break during Wolds countryside stays, market-town stops and race-day plans. Confirm current opening hours, menus, booking requirements, dog policy and accessibility details directly with the pub before travelling."
      },
      {
        "id": "the-olive",
        "name": "The Olive",
        "slug": "the-olive",
        "town": "Market Rasen",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A restaurant in Market Rasen to add to a food shortlist while planning time around Wolds countryside stays, market-town stops and race-day plans. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling."
      },
      {
        "id": "march-hare-kitchen-and-deli",
        "name": "March Hare Kitchen & Deli",
        "slug": "march-hare-kitchen-and-deli",
        "town": "Market Rasen",
        "type": "Bakery",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A Market Rasen bakery listing for visitors planning a quick food stop or takeaway break as part of Wolds countryside stays, market-town stops and race-day plans. Check current hours, product availability, dietary details and collection or service arrangements directly before travelling."
      },
      {
        "id": "the-aston-arms",
        "name": "The Aston Arms",
        "slug": "the-aston-arms",
        "town": "Market Rasen",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "The Aston Arms is a pub option to compare in or around Market Rasen, useful for visitors planning a relaxed meal, drinks stop or break during Wolds countryside stays, market-town stops and race-day plans. Confirm current opening hours, menus, booking requirements, dog policy and accessibility details directly with the pub before travelling."
      },
      {
        "id": "the-nags-head",
        "name": "The Nags Head",
        "slug": "the-nags-head",
        "town": "Market Rasen",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A pub listing around Market Rasen for visitors building a practical food stop into Wolds countryside stays, market-town stops and race-day plans. It may suit a casual meal or drinks break, depending on current service. Check opening times, menus, booking rules, pet policy and accessibility details directly with the pub."
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
        "bestFor": "Useful for visitors comparing The Wishing Well Inn as an inn base in Bourne for south Lincolnshire stays, market-town stops and countryside-linked short breaks. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-angel-at-bourne",
        "name": "The Angel at Bourne",
        "slug": "the-angel-at-bourne",
        "town": "Bourne",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The Angel at Bourne as a hotel base in Bourne for south Lincolnshire stays, market-town stops and countryside-linked short breaks. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-six-bells-witham-on-the-hill",
        "name": "The Six Bells Witham on the Hill",
        "slug": "the-six-bells-witham-on-the-hill",
        "town": "Bourne",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The Six Bells Witham on the Hill as a hotel base in Bourne for south Lincolnshire stays, market-town stops and countryside-linked short breaks. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "the-bull-inn-rippingale",
        "name": "The Bull Inn Rippingale",
        "slug": "the-bull-inn-rippingale",
        "town": "Bourne",
        "type": "Inn",
        "bestFor": "Useful for visitors comparing The Bull Inn Rippingale as an inn base in Bourne for south Lincolnshire stays, market-town stops and countryside-linked short breaks. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": true
      },
      {
        "id": "glen-house-annexe",
        "name": "Glen House Annexe",
        "slug": "glen-house-annexe",
        "town": "Bourne",
        "type": "Holiday cottage",
        "bestFor": "A holiday cottage option for visitors to Bourne.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-search-fallback",
        "sourceUrls": [],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
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
        "shortDescription": "Bourne Woods is a nature or walking option to compare around Bourne for a quieter outdoor stop during south Lincolnshire market-town stops and Fens-edge routes. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
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
        "shortDescription": "Grimsthorpe Castle Park and Gardens is a heritage-focused stop to consider in Bourne when adding local history to south Lincolnshire market-town stops and Fens-edge routes. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
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
        "shortDescription": "Bourne Outdoor Pool is a family-focused attraction to compare around Bourne when planning south Lincolnshire market-town stops and Fens-edge routes. Check age suitability, opening times, ticketing, facilities, accessibility and seasonal rules directly before travelling.",
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
        "shortDescription": "Bowthorpe Oak is a visitor stop to compare in Bourne while building south Lincolnshire market-town stops and Fens-edge routes. Check current opening times, facilities, access and any booking requirements directly before travelling.",
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
        "needsVerification": true,
        "description": "Smiths of Bourne is a restaurant listing to consider in Bourne when comparing sit-down meals around south Lincolnshire market-town stops and Fens-edge routes. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "the-angel-at-bourne",
        "name": "The Angel at Bourne",
        "slug": "the-angel-at-bourne",
        "town": "Bourne",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A restaurant in Bourne to add to a food shortlist while planning time around south Lincolnshire market-town stops and Fens-edge routes. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling."
      },
      {
        "id": "the-wishing-well-inn",
        "name": "The Wishing Well Inn",
        "slug": "the-wishing-well-inn",
        "town": "Bourne",
        "type": "Pub",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A Bourne pub to keep on a comparison list for a meal or drinks stop linked to south Lincolnshire market-town stops and Fens-edge routes. Facilities and food service can change, so confirm hours, menus, booking arrangements, dog access and accessibility directly before visiting."
      },
      {
        "id": "the-six-bells",
        "name": "The Six Bells",
        "slug": "the-six-bells",
        "town": "Bourne",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "The Six Bells is a restaurant listing to consider in Bourne when comparing sit-down meals around south Lincolnshire market-town stops and Fens-edge routes. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "gurkha-91",
        "name": "Gurkha 91",
        "slug": "gurkha-91",
        "town": "Bourne",
        "type": "Restaurant",
        "sourceUrls": [],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": true,
        "description": "A restaurant in Bourne to add to a food shortlist while planning time around south Lincolnshire market-town stops and Fens-edge routes. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling."
      }
    ]
  }
] satisfies LocationGuideBase[];
export const categoryLandingFaqs: Record<'places-to-stay' | 'things-to-do' | 'food-drink', FAQItem[]> = { 'places-to-stay': [{question:'How are places to stay selected?',answer:'These are curated places to stay. Always check the official website or booking platform for current ratings, prices and availability.'},{question:'Is other stay content included here?',answer:'No. This section covers hotels, B&Bs, guest houses, inns, apartments and holiday cottages only.'}], 'things-to-do': [{question:'Are these official recommendations?',answer:'No. They are curated ideas for practical trip research. Always verify opening hours and details with the official source.'}], 'food-drink': [{question:'Are these ranked restaurants?',answer:'No. These are curated suggestions, not rankings. We do not publish unverified ratings or review counts.'}] };
export function getLocationGuideBySlug(slug:string){ return locationGuides.find(g=>g.slug===slug); }
export function getRelatedLocationGuides(slug:string, limit=5){ const current=getLocationGuideBySlug(slug); const rest=locationGuides.filter(g=>g.slug!==slug); return [...rest.filter(g=>g.regionType===current?.regionType),...rest.filter(g=>g.regionType!==current?.regionType)].slice(0,limit); }
