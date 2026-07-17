import type { RegionType, FAQItem } from './caravanParkGuides';

export type SourceStatus = 'research-draft' | 'needs-verification' | 'verified';
export type BookingStatus = 'booking-search-fallback' | 'booking-confirmed' | 'official-site-only' | 'unknown';
export type PlaceToStayType = 'Hotel' | 'B&B' | 'Guest house' | 'Inn' | 'Apartment' | 'Holiday cottage';
export type ThingToDoCategory = 'Historic site' | 'Museum' | 'Family-friendly' | 'Nature' | 'Beach' | 'Walk' | 'Shopping' | 'Market' | 'Rainy day' | 'Free activity' | 'Wildlife' | 'Garden' | 'Heritage' | 'Entertainment' | 'Other';
export type FoodAndDrinkType = 'Restaurant' | 'Pub' | 'Cafe' | 'Bar' | 'Seafood' | 'Tea room' | 'Bakery' | 'Sunday roast' | 'Farm shop' | 'Other';
export interface CategorySourceUrl { label: string; url: string; type: 'Booking.com' | 'Official website' | 'Editorial source' | 'Map/search'; checkedDate?: string; }
export interface ListingLocation { address?: string; town?: string; postcode?: string; googleMapsUrl?: string; googleMapsQuery?: string; latitude?: number; longitude?: number; }
export interface PlaceToStay { id:string; name:string; slug:string; town:string; type:PlaceToStayType; bestFor:string; sourceNote:string; bookingStatus:BookingStatus; bookingUrl?:string; officialWebsiteUrl?:string; affiliateUrl?:string; sourceUrls:CategorySourceUrl[]; imageGuidance:string; needsVerification:boolean; googleMapsUrl?:string; location?:ListingLocation; }
export interface ThingToDo { id:string; name:string; slug:string; town:string; category:ThingToDoCategory; shortDescription:string; officialWebsiteUrl?:string; sourceUrls:CategorySourceUrl[]; imageGuidance:string; needsVerification:boolean; googleMapsUrl?:string; location?:ListingLocation; }
export interface FoodAndDrinkOption { id:string; name:string; slug:string; town:string; type:FoodAndDrinkType; description:string; cuisineOrStyle?:string; officialWebsiteUrl?:string; sourceUrls:CategorySourceUrl[]; imageGuidance:string; needsVerification:boolean; googleMapsUrl?:string; location?:ListingLocation; }
export interface LocationGuideBase { id:string; name:string; slug:string; regionType:RegionType; contentAngle:string; lastUpdated:string; sourceStatus:SourceStatus; placesToStay:PlaceToStay[]; thingsToDo:ThingToDo[]; foodDrink:FoodAndDrinkOption[]; }
export const locationGuides = [
  {
    "id": "lincoln",
    "name": "Lincoln",
    "slug": "lincoln",
    "regionType": "City",
    "contentAngle": "History, cathedral city breaks and practical bases near the historic centre.",
    "lastUpdated": "15 July 2026",
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
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Rest Hotel official website",
            "url": "https://www.theresthotellincoln.co.uk/the-rest-hotel-lincoln",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          },
          {
            "label": "The Rest Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-rest-lincoln.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.theresthotellincoln.co.uk/the-rest-hotel-lincoln",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-rest-lincoln.html"
      },
      {
        "id": "tower-hotel",
        "name": "Tower Hotel",
        "slug": "tower-hotel",
        "town": "Lincoln",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Tower Hotel as a hotel base in Lincoln for city-break, heritage and short Lincolnshire stay planning. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Tower Hotel official website",
            "url": "https://www.thetowerlincoln.com/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          },
          {
            "label": "Tower Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/tower.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.thetowerlincoln.com/",
        "bookingUrl": "https://www.booking.com/hotel/gb/tower.html"
      },
      {
        "id": "the-white-hart-hotel-lincoln",
        "name": "The White Hart Hotel Lincoln",
        "slug": "the-white-hart-hotel-lincoln",
        "town": "Lincoln",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The White Hart Hotel Lincoln as a hotel base in Lincoln for city-break, heritage and short Lincolnshire stay planning. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The White Hart Hotel official website",
            "url": "https://whitehart-lincoln.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          },
          {
            "label": "The White Hart Hotel Lincoln Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/thewhitehart.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://whitehart-lincoln.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/thewhitehart.html"
      },
      {
        "id": "holiday-inn-lincoln-by-ihg",
        "name": "Holiday Inn Lincoln by IHG",
        "slug": "holiday-inn-lincoln-by-ihg",
        "town": "Lincoln",
        "type": "Inn",
        "bestFor": "Useful for visitors comparing Holiday Inn Lincoln by IHG as an inn base in Lincoln for city-break, heritage and short Lincolnshire stay planning. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Holiday Inn Lincoln IHG official page",
            "url": "https://www.ihg.com/holidayinn/hotels/us/en/lincoln/eamln/hoteldetail",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          },
          {
            "label": "Holiday Inn Lincoln by IHG Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/courtyardlincoln.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.ihg.com/holidayinn/hotels/us/en/lincoln/eamln/hoteldetail",
        "bookingUrl": "https://www.booking.com/hotel/gb/courtyardlincoln.html"
      },
      {
        "id": "woodcocks-lincoln-by-marston-s-inns",
        "name": "Woodcocks, Lincoln by Marston's Inns",
        "slug": "woodcocks-lincoln-by-marston-s-inns",
        "town": "Lincoln",
        "type": "Inn",
        "bestFor": "Useful for visitors comparing Woodcocks, Lincoln by Marston's Inns as an inn base in Lincoln for city-break, heritage and short Lincolnshire stay planning. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Woodcocks Hotel Lincoln Marston's Inns official page",
            "url": "https://www.marstonsinns.co.uk/inns/woodcocks-hotel-lincoln/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          },
          {
            "label": "Woodcocks, Lincoln by Marston's Inns Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-woodcocks-lodge.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.marstonsinns.co.uk/inns/woodcocks-hotel-lincoln/",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-woodcocks-lodge.html"
      },
      {
        "id": "doubletree-by-hilton-lincoln",
        "name": "DoubleTree by Hilton Lincoln",
        "slug": "doubletree-by-hilton-lincoln",
        "town": "Lincoln",
        "type": "Hotel",
        "bestFor": "A modern waterfront hotel on Brayford Wharf North with a rooftop restaurant and views towards Lincoln Cathedral. Its position suits city breaks combining the waterside, university quarter and rail station, with the historic uphill core a steady walk away. Check parking options, room categories and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "DoubleTree by Hilton Lincoln official page",
            "url": "https://www.hilton.com/en/hotels/huylndi-doubletree-lincoln/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "DoubleTree by Hilton Lincoln Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/doubletree-by-hilton-lincoln.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.hilton.com/en/hotels/huylndi-doubletree-lincoln/",
        "bookingUrl": "https://www.booking.com/hotel/gb/doubletree-by-hilton-lincoln.html"
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
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
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
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
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
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
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
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
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
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
      }
    ],
    "foodDrink": [
      {
        "id": "the-jews-house-restaurant",
        "name": "The Jews House Restaurant",
        "slug": "the-jews-house-restaurant",
        "town": "Lincoln",
        "type": "Restaurant",
        "sourceUrls": [
          {
            "label": "The Jews House Restaurant official website",
            "url": "https://www.jewshouserestaurant.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "The Jews House Restaurant is a restaurant listing to consider in Lincoln when comparing sit-down meals around city centre, Cathedral Quarter and heritage itineraries. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting.",
        "officialWebsiteUrl": "https://www.jewshouserestaurant.co.uk/"
      },
      {
        "id": "olivares-tapas-bar",
        "name": "Olivares Tapas Bar",
        "slug": "olivares-tapas-bar",
        "town": "Lincoln",
        "type": "Bar",
        "sourceUrls": [
          {
            "label": "Olivares Tapas Bar official website",
            "url": "https://www.olivarestapas.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "A bar or casual venue in Lincoln to consider for drinks, coffee or an informal break during city centre, Cathedral Quarter and heritage itineraries. Check current hours, menus, booking arrangements, accessibility and service details directly with the venue.",
        "officialWebsiteUrl": "https://www.olivarestapas.co.uk/"
      },
      {
        "id": "dough-loco",
        "name": "Dough LoCo",
        "slug": "dough-loco",
        "town": "Lincoln",
        "type": "Restaurant",
        "sourceUrls": [
          {
            "label": "Dough LoCo official website",
            "url": "https://www.doughloco.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "A Lincoln restaurant listing for visitors comparing places to eat as part of city centre, Cathedral Quarter and heritage itineraries. Use it as a starting point for meal planning rather than a ranking. Check current hours, menus, booking needs, accessibility information and dietary options directly with the venue.",
        "officialWebsiteUrl": "https://www.doughloco.co.uk/"
      },
      {
        "id": "rising-cafe",
        "name": "Rising Cafe",
        "slug": "rising-cafe",
        "town": "Lincoln",
        "type": "Cafe",
        "sourceUrls": [
          {
            "label": "Rising Cafe Lincoln official page",
            "url": "https://www.risingcafe.co.uk/lincoln",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "Rising Cafe is a cafe listing to consider for a daytime stop in Lincoln, especially while planning breaks around city centre, Cathedral Quarter and heritage itineraries. It may suit coffee, lunch or a pause between local stops. Check current opening hours, menus, accessibility details and any booking requirements directly with the cafe before visiting.",
        "officialWebsiteUrl": "https://www.risingcafe.co.uk/lincoln"
      },
      {
        "id": "bar-unico",
        "name": "Bar Unico",
        "slug": "bar-unico",
        "town": "Lincoln",
        "type": "Bar",
        "sourceUrls": [
          {
            "label": "Bar Unico Lincoln official website",
            "url": "https://barunicolincoln.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "A bar or casual venue in Lincoln to consider for drinks, coffee or an informal break during city centre, Cathedral Quarter and heritage itineraries. Check current hours, menus, booking arrangements, accessibility and service details directly with the venue.",
        "officialWebsiteUrl": "https://barunicolincoln.co.uk/"
      }
    ]
  },
  {
    "id": "skegness",
    "name": "Skegness",
    "slug": "skegness",
    "regionType": "Coast",
    "contentAngle": "Classic seaside holidays, family coastal breaks and coastal entertainment.",
    "lastUpdated": "15 July 2026",
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
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Quorn official website",
            "url": "https://quornhotel.net/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          },
          {
            "label": "The Quorn Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-quorn.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://quornhotel.net/",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-quorn.html"
      },
      {
        "id": "southview-park-hotel",
        "name": "Southview Park Hotel",
        "slug": "southview-park-hotel",
        "town": "Skegness",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Southview Park Hotel as a hotel base in Skegness for coastal breaks, family trip planning and seaside weekends. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Southview Park Hotel Parkdean Resorts official page",
            "url": "https://www.parkdeanresorts.co.uk/location/east-anglia-lincolnshire/southview/hotel/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          },
          {
            "label": "Southview Park Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/southviewpark.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.parkdeanresorts.co.uk/location/east-anglia-lincolnshire/southview/hotel/",
        "bookingUrl": "https://www.booking.com/hotel/gb/southviewpark.html"
      },
      {
        "id": "north-shore-hotel",
        "name": "North Shore Hotel",
        "slug": "north-shore-hotel",
        "town": "Skegness",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing North Shore Hotel as a hotel base in Skegness for coastal breaks, family trip planning and seaside weekends. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "North Shore Hotel official website",
            "url": "https://www.northshorehotel.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          },
          {
            "label": "North Shore Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/northshore.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.northshorehotel.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/northshore.html"
      },
      {
        "id": "the-saxby-hotel",
        "name": "The Saxby Hotel",
        "slug": "the-saxby-hotel",
        "town": "Skegness",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The Saxby Hotel as a hotel base in Skegness for coastal breaks, family trip planning and seaside weekends. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Saxby Hotel official website",
            "url": "https://thesaxby.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          },
          {
            "label": "The Saxby Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-saxby.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://thesaxby.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-saxby.html"
      },
      {
        "id": "the-fountaindale-skegness",
        "name": "The Fountaindale Skegness",
        "slug": "the-fountaindale-skegness",
        "town": "Skegness",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The Fountaindale Skegness as a hotel base in Skegness for coastal breaks, family trip planning and seaside weekends. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Fountaindale Guesthouse official website",
            "url": "https://fountaindaleguesthouse.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          },
          {
            "label": "The Fountaindale Skegness Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-fountaindale-skegness.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://fountaindaleguesthouse.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-fountaindale-skegness.html"
      },
      {
        "id": "the-vine-hotel-skegness",
        "name": "The Vine Hotel",
        "slug": "the-vine-hotel-skegness",
        "town": "Skegness",
        "type": "Hotel",
        "bestFor": "An 18th-century hotel set among gardens in the quieter Seacroft area of Skegness, around fifteen minutes' walk from the beach and close to Seacroft Golf Club. Its restaurant, bars and leafy setting suit visitors who want a calmer base than the central seafront. Confirm dining times, parking and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Vine Hotel official website",
            "url": "https://thevinehotel.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "The Vine Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/vinehotel.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://thevinehotel.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/vinehotel.html"
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
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
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
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
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
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
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
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
      }
    ],
    "foodDrink": [
      {
        "id": "fleece-inn",
        "name": "Fleece Inn",
        "slug": "fleece-inn",
        "town": "Skegness",
        "type": "Pub",
        "sourceUrls": [
          {
            "label": "Visit Lincs Coast listing for The Fleece Inn",
            "url": "https://visitlincscoast.co.uk/business-directory/the-fleece-inn",
            "type": "Editorial source",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
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
        "sourceUrls": [
          {
            "label": "The Steamboat Cookhouse + Pub official page",
            "url": "https://www.cookhouseandpub.co.uk/en-gb/locations/skegness",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "A Skegness tea room option to consider for a quieter food break linked to seaside day out, seafront and family coastal trips. Confirm current opening times, menus, booking requirements and accessibility details directly before visiting.",
        "officialWebsiteUrl": "https://www.cookhouseandpub.co.uk/en-gb/locations/skegness"
      },
      {
        "id": "the-hide-at-herons-mead",
        "name": "The Hide at Herons Mead",
        "slug": "the-hide-at-herons-mead",
        "town": "Skegness",
        "type": "Restaurant",
        "sourceUrls": [
          {
            "label": "The Hide at Herons Mead official page",
            "url": "https://heronsmead.co.uk/the-hide/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "The Hide at Herons Mead is a restaurant listing to consider in Skegness when comparing sit-down meals around seaside day out, seafront and family coastal trips. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting.",
        "officialWebsiteUrl": "https://heronsmead.co.uk/the-hide/"
      },
      {
        "id": "tarantino",
        "name": "Tarantino",
        "slug": "tarantino",
        "town": "Skegness",
        "type": "Restaurant",
        "sourceUrls": [
          {
            "label": "Tarantino Skegness official website",
            "url": "https://www.tarantino-skegness.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "A restaurant in Skegness to add to a food shortlist while planning time around seaside day out, seafront and family coastal trips. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling.",
        "officialWebsiteUrl": "https://www.tarantino-skegness.co.uk/"
      }
    ]
  },
  {
    "id": "stamford",
    "name": "Stamford",
    "slug": "stamford",
    "regionType": "Market town",
    "contentAngle": "Georgian town breaks, Burghley House, Rutland Water and countryside weekends.",
    "lastUpdated": "15 July 2026",
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
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Crown Hotel official website",
            "url": "https://www.kneadpubs.co.uk/the-crown-hotel/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          },
          {
            "label": "Crown Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-crown-stamford.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.kneadpubs.co.uk/the-crown-hotel/",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-crown-stamford.html"
      },
      {
        "id": "the-george-hotel-of-stamford",
        "name": "The George Hotel of Stamford",
        "slug": "the-george-hotel-of-stamford",
        "town": "Stamford",
        "type": "Hotel",
        "bestFor": "A celebrated former coaching inn on the southern approach to Stamford, trading for centuries, with 45 individually designed rooms, an oak-panelled restaurant and gardens. It suits slower Georgian-townscape weekends a short drive from Burghley House. Confirm dining reservations, parking and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The George Hotel of Stamford official website",
            "url": "https://www.georgehotelofstamford.com/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "The George Hotel of Stamford Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-george-of-stamford.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.georgehotelofstamford.com/",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-george-of-stamford.html"
      },
      {
        "id": "the-william-cecil",
        "name": "The William Cecil",
        "slug": "the-william-cecil",
        "town": "Stamford",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The William Cecil as a hotel base in Stamford for historic market-town breaks, local dining and nearby countryside exploring. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The William Cecil official website",
            "url": "https://www.woodford.group/williamcecil",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          },
          {
            "label": "The William Cecil Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-william-cecil.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.woodford.group/williamcecil",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-william-cecil.html"
      },
      {
        "id": "the-bull-and-swan",
        "name": "The Bull and Swan",
        "slug": "the-bull-and-swan",
        "town": "Stamford",
        "type": "Inn",
        "bestFor": "Useful for visitors comparing The Bull and Swan as an inn base in Stamford for historic market-town breaks, local dining and nearby countryside exploring. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Bull & Swan official website",
            "url": "https://www.woodford.group/bullandswan",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          },
          {
            "label": "The Bull And Swan Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-bull-and-swan.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.woodford.group/bullandswan",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-bull-and-swan.html"
      },
      {
        "id": "old-bank-apartments",
        "name": "Old Bank Apartments",
        "slug": "old-bank-apartments",
        "town": "Stamford",
        "type": "Apartment",
        "bestFor": "Useful for visitors comparing Old Bank Apartments as an apartment base in Stamford for historic market-town breaks, local dining and nearby countryside exploring. Confirm current access details, availability, parking, accessibility, house rules and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Old Bank Apartments Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/old-bank-apartments-stamford.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "bookingUrl": "https://www.booking.com/hotel/gb/old-bank-apartments-stamford.html"
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
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
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
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
      },
      {
        "id": "stamford-corn-exchange-theatre",
        "name": "Stamford Corn Exchange Theatre",
        "slug": "stamford-corn-exchange-theatre",
        "town": "Stamford",
        "category": "Family-friendly",
        "shortDescription": "Stamford Corn Exchange Theatre is a family-focused attraction to compare around Stamford when planning market-town breaks, independent shopping and historic centre walks. Check age suitability, opening times, ticketing, facilities, accessibility and seasonal rules directly before travelling.",
        "officialWebsiteUrl": "https://www.stamfordcornexchange.co.uk/",
        "sourceUrls": [
          {
            "label": "Stamford Corn Exchange Theatre official website",
            "url": "https://www.stamfordcornexchange.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
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
        "officialWebsiteUrl": "https://www.orbisstamford.co.uk/",
        "sourceUrls": [
          {
            "label": "Orbis Stamford official website",
            "url": "https://www.orbisstamford.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "Orbis Stamford is a restaurant listing to consider in Stamford when comparing sit-down meals around market-town breaks, independent shopping and historic centre walks. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "the-slanted-door",
        "name": "The Slanted Door",
        "slug": "the-slanted-door",
        "town": "Stamford",
        "type": "Restaurant",
        "officialWebsiteUrl": "https://www.theslanteddoor.co.uk/",
        "sourceUrls": [
          {
            "label": "The Slanted Door official website",
            "url": "https://www.theslanteddoor.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "A restaurant in Stamford to add to a food shortlist while planning time around market-town breaks, independent shopping and historic centre walks. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling."
      },
      {
        "id": "the-mad-turk",
        "name": "The Mad Turk",
        "slug": "the-mad-turk",
        "town": "Stamford",
        "type": "Restaurant",
        "officialWebsiteUrl": "https://themadturk.co.uk/",
        "sourceUrls": [
          {
            "label": "The Mad Turk official website",
            "url": "https://themadturk.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
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
        "officialWebsiteUrl": "https://www.georgehotelofstamford.com/our-restaurants-bars",
        "sourceUrls": [
          {
            "label": "The George of Stamford restaurants and bars official page",
            "url": "https://www.georgehotelofstamford.com/our-restaurants-bars",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
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
    "lastUpdated": "15 July 2026",
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
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Beaumont Accommodation Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-beaumont.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "bookingUrl": "https://www.booking.com/hotel/gb/the-beaumont.html"
      },
      {
        "id": "best-western-plus-kenwick-park-hotel",
        "name": "Best Western Plus Kenwick Park Hotel",
        "slug": "best-western-plus-kenwick-park-hotel",
        "town": "Louth",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Best Western Plus Kenwick Park Hotel as a hotel base in Louth for quieter market-town stays, Wolds exploring and short Lincolnshire breaks. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Best Western Plus Kenwick Park Hotel official page",
            "url": "https://www.bestwestern.com/en_US/book/louth/hotel-rooms/best-western-plus-kenwick-park-hotel/propertyCode.83858.html",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          },
          {
            "label": "Best Western Plus Kenwick Park Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/kenwick-parkhotel.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.bestwestern.com/en_US/book/louth/hotel-rooms/best-western-plus-kenwick-park-hotel/propertyCode.83858.html",
        "bookingUrl": "https://www.booking.com/hotel/gb/kenwick-parkhotel.html"
      },
      {
        "id": "brackenborough-hotel",
        "name": "Brackenborough Hotel",
        "slug": "brackenborough-hotel",
        "town": "Louth",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing Brackenborough Hotel as a hotel base in Louth for quieter market-town stays, Wolds exploring and short Lincolnshire breaks. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Brackenborough Lakes Resort official website",
            "url": "https://brackenboroughlakesresort.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          },
          {
            "label": "Brackenborough Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/brackenborough-arms.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://brackenboroughlakesresort.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/brackenborough-arms.html"
      },
      {
        "id": "the-masons-arms",
        "name": "The Masons Arms",
        "slug": "the-masons-arms",
        "town": "Louth",
        "type": "Inn",
        "bestFor": "Useful for visitors comparing The Masons Arms as an inn base in Louth for quieter market-town stays, Wolds exploring and short Lincolnshire breaks. Check current room details, food service, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Masons Arms official website",
            "url": "https://www.the-masons-arms.com/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          },
          {
            "label": "The Masons Arms Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-masons-arms-louth1.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.the-masons-arms.com/",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-masons-arms-louth1.html"
      },
      {
        "id": "the-kings-head",
        "name": "The Kings Head",
        "slug": "the-kings-head",
        "town": "Louth",
        "type": "Hotel",
        "bestFor": "Useful for visitors comparing The Kings Head as a hotel base in Louth for quieter market-town stays, Wolds exploring and short Lincolnshire breaks. Confirm current room details, availability, parking, accessibility, pet policies and cancellation terms directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The King's Head official website",
            "url": "https://www.kingsheadlouth.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          },
          {
            "label": "The Kings Head Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-kings-head-louth.html",
            "type": "Booking.com",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.kingsheadlouth.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-kings-head-louth.html"
      },
      {
        "id": "the-priory-hotel-louth",
        "name": "The Priory Hotel",
        "slug": "the-priory-hotel-louth",
        "town": "Louth",
        "type": "Hotel",
        "bestFor": "A characterful hotel in a Gothic-style listed building on Eastgate, within walking distance of Louth town centre, with gardens, a bar and free parking. It suits food-and-market weekends in the Wolds capital. Check breakfast service, room styles and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Priory Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-priory-louth.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "bookingUrl": "https://www.booking.com/hotel/gb/the-priory-louth.html"
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
        "officialWebsiteUrl": "https://www.achurchnearyou.com/church/15101/",
        "sourceUrls": [
          {
            "label": "Church of England official St James, Louth listing",
            "url": "https://www.achurchnearyou.com/church/15101/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
      },
      {
        "id": "louth-museum",
        "name": "Louth Museum",
        "slug": "louth-museum",
        "town": "Louth",
        "category": "Museum",
        "shortDescription": "Louth Museum is a museum or indoor attraction to consider in Louth for local history, culture or a weather-flexible stop during Wolds market-town visits and quieter short breaks. Check current opening times, admission, facilities and accessibility directly before travelling.",
        "officialWebsiteUrl": "https://www.louthmuseum.org.uk/",
        "sourceUrls": [
          {
            "label": "Louth Museum official website",
            "url": "https://www.louthmuseum.org.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
      },
      {
        "id": "hubbard-s-hills",
        "name": "Hubbard's Hills",
        "slug": "hubbard-s-hills",
        "town": "Louth",
        "category": "Nature",
        "shortDescription": "Hubbard's Hills is a nature or walking option to compare around Louth for a quieter outdoor stop during Wolds market-town visits and quieter short breaks. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
        "officialWebsiteUrl": "https://www.louthtowncouncil.gov.uk/hubbards-hills/",
        "sourceUrls": [
          {
            "label": "Louth Town Council Hubbard's Hills page",
            "url": "https://www.louthtowncouncil.gov.uk/hubbards-hills/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
      },
      {
        "id": "lincolnshire-wolds-railway",
        "name": "Lincolnshire Wolds Railway",
        "slug": "lincolnshire-wolds-railway",
        "town": "Louth",
        "category": "Heritage",
        "shortDescription": "Lincolnshire Wolds Railway is a nature or walking option to compare around Louth for a quieter outdoor stop during Wolds market-town visits and quieter short breaks. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
        "officialWebsiteUrl": "https://www.lincolnshirewoldsrailway.co.uk/",
        "sourceUrls": [
          {
            "label": "Lincolnshire Wolds Railway official website",
            "url": "https://www.lincolnshirewoldsrailway.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
      }
    ],
    "foodDrink": [
      {
        "id": "the-masons-arms",
        "name": "The Masons Arms",
        "slug": "the-masons-arms",
        "town": "Louth",
        "type": "Pub",
        "officialWebsiteUrl": "https://www.the-masons-arms.com/",
        "sourceUrls": [
          {
            "label": "The Masons Arms official website",
            "url": "https://www.the-masons-arms.com/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "The Masons Arms is a pub option to compare in or around Louth, useful for visitors planning a relaxed meal, drinks stop or break during Wolds market-town visits and quieter short breaks. Confirm current opening hours, menus, booking requirements, dog policy and accessibility details directly with the pub before travelling."
      },
      {
        "id": "the-greyhound-inn",
        "name": "The Greyhound Inn",
        "slug": "the-greyhound-inn",
        "town": "Louth",
        "type": "Pub",
        "officialWebsiteUrl": "https://www.greyhoundlouth.co.uk/home",
        "sourceUrls": [
          {
            "label": "The Greyhound Inn official website",
            "url": "https://www.greyhoundlouth.co.uk/home",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "A pub listing around Louth for visitors building a practical food stop into Wolds market-town visits and quieter short breaks. It may suit a casual meal or drinks break, depending on current service. Check opening times, menus, booking rules, pet policy and accessibility details directly with the pub."
      },
      {
        "id": "the-ranch-steakhouse-and-grill",
        "name": "The Ranch Steakhouse & Grill",
        "slug": "the-ranch-steakhouse-and-grill",
        "town": "Louth",
        "type": "Restaurant",
        "officialWebsiteUrl": "https://www.theranchlouth.co.uk/",
        "sourceUrls": [
          {
            "label": "The Ranch Steakhouse & Grill official website",
            "url": "https://www.theranchlouth.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "A Louth tea room option to consider for a quieter food break linked to Wolds market-town visits and quieter short breaks. Confirm current opening times, menus, booking requirements and accessibility details directly before visiting."
      },
      {
        "id": "via-italia",
        "name": "Via Italia",
        "slug": "via-italia",
        "town": "Louth",
        "type": "Restaurant",
        "officialWebsiteUrl": "https://www.viaitalialouth.com/",
        "sourceUrls": [
          {
            "label": "Via Italia official website",
            "url": "https://www.viaitalialouth.com/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "Via Italia is a restaurant listing to consider in Louth when comparing sit-down meals around Wolds market-town visits and quieter short breaks. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting."
      },
      {
        "id": "the-kings-head",
        "name": "The Kings Head",
        "slug": "the-kings-head",
        "town": "Louth",
        "type": "Restaurant",
        "officialWebsiteUrl": "https://www.kingsheadlouth.co.uk/",
        "sourceUrls": [
          {
            "label": "The King's Head official website",
            "url": "https://www.kingsheadlouth.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
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
    "lastUpdated": "15 July 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "the-white-hart-hotel-boston",
        "name": "The White Hart Hotel, Boston",
        "slug": "the-white-hart-hotel-boston",
        "town": "Boston",
        "type": "Hotel",
        "bestFor": "A 19th-century coaching inn on the River Witham in the centre of Boston, a short walk from St Botolph's Church and the market place. Its riverside position works well for exploring the town on foot, with an eatery and coffee house on site. Confirm current room details, parking and availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The White Hart Hotel, Boston official website",
            "url": "https://whitehartboston.com/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "The White Hart Hotel, Boston Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/white-hart-hotel.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://whitehartboston.com/",
        "bookingUrl": "https://www.booking.com/hotel/gb/white-hart-hotel.html"
      },
      {
        "id": "boston-west-hotel",
        "name": "Boston West Hotel",
        "slug": "boston-west-hotel",
        "town": "Boston",
        "type": "Hotel",
        "bestFor": "A countryside hotel at the Boston West golf and leisure site on the western edge of town, with a driving range and nine-hole course. It suits visitors who want parking, space and a quieter setting a short drive from central Boston. Check golf packages, dining and room availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Boston West Hotel official website",
            "url": "https://www.awayresorts.co.uk/parks/lincolnshire/appletree/hotel/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "Boston West Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/boston-west.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.awayresorts.co.uk/parks/lincolnshire/appletree/hotel/",
        "bookingUrl": "https://www.booking.com/hotel/gb/boston-west.html"
      },
      {
        "id": "the-old-kings-head",
        "name": "The Old Kings Head",
        "slug": "the-old-kings-head",
        "town": "Boston",
        "type": "Hotel",
        "bestFor": "A restored 16th-century Grade II listed building in the village of Kirton, around ten minutes' drive south of Boston. Its nine individually styled rooms suit visitors who prefer a small heritage property to a town-centre hotel. Confirm opening arrangements, parking and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Old Kings Head official website",
            "url": "https://www.theoldkingshead.com/en",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "The Old Kings Head Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-old-kings-head.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.theoldkingshead.com/en",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-old-kings-head.html"
      },
      {
        "id": "quayside-hotel-and-bar",
        "name": "Quayside Hotel & Bar",
        "slug": "quayside-hotel-and-bar",
        "town": "Boston",
        "type": "Hotel",
        "bestFor": "A Grade II listed hotel and bar on London Road beside Boston's old port area, long associated with the town's fishing heritage. Thirteen rooms in a walkable riverside spot make it a practical base for town-centre visits. Check room types, food service and availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Quayside Hotel & Bar official website",
            "url": "https://www.thequaysidehotel.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "Quayside Hotel & Bar Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/quayside-amp-bar.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.thequaysidehotel.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/quayside-amp-bar.html"
      },
      {
        "id": "the-kings-arms",
        "name": "The Kings Arms",
        "slug": "the-kings-arms",
        "town": "Boston",
        "type": "Inn",
        "bestFor": "A Grade II listed pub with five en-suite rooms on Horncastle Road, about a quarter of a mile from Boston town centre near the Maud Foster Windmill. It suits visitors who want a friendly pub stay within walking distance of the Stump. Confirm breakfast arrangements, parking and current prices directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Kings Arms Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-king-39-s-arms-boston.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "bookingUrl": "https://www.booking.com/hotel/gb/the-king-39-s-arms-boston.html"
      },
      {
        "id": "supreme-inn-boston",
        "name": "Supreme Inn Boston",
        "slug": "supreme-inn-boston",
        "town": "Boston",
        "type": "Inn",
        "bestFor": "A modern roadside inn at Bicker Bar on the A17, around eight miles south-west of Boston. Its location suits drivers touring south Lincolnshire who want practical en-suite rooms, on-site dining and free parking rather than a town-centre base. Check current room details, food service times and availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Supreme Inns official website",
            "url": "https://supremeinns.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "Supreme Inn Boston Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/supreme-inns.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://supremeinns.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/supreme-inns.html"
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
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
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
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
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
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
      },
      {
        "id": "rspb-frampton-marsh",
        "name": "RSPB Frampton Marsh",
        "slug": "rspb-frampton-marsh",
        "town": "Boston",
        "category": "Wildlife",
        "shortDescription": "RSPB Frampton Marsh is a visitor stop to compare in Boston while building heritage stops, market-place visits and south Lincolnshire routes. Check current opening times, facilities, access and any booking requirements directly before travelling.",
        "sourceUrls": [
          {
            "label": "RSPB Frampton Marsh official page",
            "url": "https://www.rspb.org.uk/days-out/reserves/frampton-marsh",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.rspb.org.uk/days-out/reserves/frampton-marsh"
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
        "sourceUrls": [
          {
            "label": "The White Hart Boston official website",
            "url": "https://whitehartboston.com/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "A restaurant in Boston to add to a food shortlist while planning time around heritage stops, market-place visits and south Lincolnshire routes. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling.",
        "officialWebsiteUrl": "https://whitehartboston.com/"
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
    "lastUpdated": "15 July 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "angel-and-royal-hotel",
        "name": "Angel and Royal Hotel",
        "slug": "angel-and-royal-hotel",
        "town": "Grantham",
        "type": "Hotel",
        "bestFor": "One of England's oldest coaching inns, trading on Grantham High Street since the medieval period, with 31 individually styled bedrooms. It suits heritage-minded visitors who want to stay in the town centre near St Wulfram's Church. Confirm parking arrangements, current room details and availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Angel and Royal Hotel official website",
            "url": "https://www.angelandroyal.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "Angel and Royal Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-angel-and-royal-hotel.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.angelandroyal.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-angel-and-royal-hotel.html"
      },
      {
        "id": "belton-woods-hotel-spa-and-golf-resort",
        "name": "Belton Woods Hotel, Spa & Golf Resort",
        "slug": "belton-woods-hotel-spa-and-golf-resort",
        "town": "Grantham",
        "type": "Hotel",
        "bestFor": "A countryside resort hotel in 475 acres of grounds north of Grantham, with golf courses, a spa and leisure facilities. It suits golf breaks and family stays where on-site activities matter more than a town-centre location. Check spa access, golf bookings and room availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Belton Woods Hotel, Spa & Golf Resort official website",
            "url": "https://www.beltonwoods.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "Belton Woods Hotel, Spa & Golf Resort Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/belton-woods.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.beltonwoods.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/belton-woods.html"
      },
      {
        "id": "the-avenue-hotel",
        "name": "The Avenue Hotel",
        "slug": "the-avenue-hotel",
        "town": "Grantham",
        "type": "Hotel",
        "bestFor": "A family-run guest house on Avenue Road, a short walk from Grantham town centre and the railway station. It suits visitors who want a practical, affordable base with parking for country-house day trips to Belton and Belvoir. Confirm breakfast options, check-in times and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Avenue Hotel official website",
            "url": "https://www.avenuehotel.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "The Avenue Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-avenue-grantham.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.avenuehotel.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-avenue-grantham.html"
      },
      {
        "id": "the-barn-hotel-and-spa",
        "name": "The Barn Hotel & Spa",
        "slug": "the-barn-hotel-and-spa",
        "town": "Grantham",
        "type": "Hotel",
        "bestFor": "A converted barn hotel in Marston, about a mile from the A1 and ten minutes north of Grantham, now part of the Sure Hotel Collection by Best Western. An indoor pool, sauna and treatment rooms suit spa-led stays outside town. Check spa opening, dining and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Barn Hotel & Spa official website",
            "url": "https://theoldebarnhotel.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "The Barn Hotel & Spa Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-olde-barn-hotel-sure-hotel-collection-by-best-western.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://theoldebarnhotel.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-olde-barn-hotel-sure-hotel-collection-by-best-western.html"
      },
      {
        "id": "urban-hotel-grantham",
        "name": "Urban Hotel Grantham",
        "slug": "urban-hotel-grantham",
        "town": "Grantham",
        "type": "Hotel",
        "bestFor": "A hotel on Swingbridge Road on the southern side of Grantham with a pool, gym and on-site restaurant. It suits visitors who want leisure facilities and free parking within a short drive of the town centre and the A1. Confirm leisure access, room types and current prices directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Urban Hotel Grantham official website",
            "url": "https://www.urbanhotelgrantham.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "Urban Hotel Grantham Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/urban-lincolnshire.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.urbanhotelgrantham.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/urban-lincolnshire.html"
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
        "sourceUrls": [
          {
            "label": "Belton House National Trust page",
            "url": "https://www.nationaltrust.org.uk/visit/nottinghamshire-lincolnshire/belton-estate",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.nationaltrust.org.uk/visit/nottinghamshire-lincolnshire/belton-estate"
      },
      {
        "id": "belvoir-castle",
        "name": "Belvoir Castle",
        "slug": "belvoir-castle",
        "town": "Grantham",
        "category": "Historic site",
        "shortDescription": "Belvoir Castle is a heritage-focused stop to consider in Grantham when adding local history to short stays, route stops and A1 corridor trips. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
        "sourceUrls": [
          {
            "label": "Belvoir Castle official website",
            "url": "https://www.belvoircastle.com/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.belvoircastle.com/"
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
        "sourceUrls": [
          {
            "label": "Grantham Museum official website",
            "url": "https://www.granthammuseum.org.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.granthammuseum.org.uk/"
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
    "lastUpdated": "15 July 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "tulip-queen-spalding-by-marston-s-inns",
        "name": "Tulip Queen, Spalding by Marston's Inns",
        "slug": "tulip-queen-spalding-by-marston-s-inns",
        "town": "Spalding",
        "type": "Inn",
        "bestFor": "A purpose-built Marston's inn beside its own family pub-restaurant on the edge of Spalding. It suits visitors who want predictable chain-style rooms, easy parking and food on site while exploring the south Lincolnshire fens. Check family room options and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Tulip Queen, Spalding by Marston's Inns official website",
            "url": "https://marstonsinns.co.uk/inns/tulip-queen-hotel-spalding/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "Tulip Queen, Spalding by Marston's Inns Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/tulip-queen-by-marston-39-s-inns.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://marstonsinns.co.uk/inns/tulip-queen-hotel-spalding/",
        "bookingUrl": "https://www.booking.com/hotel/gb/tulip-queen-by-marston-39-s-inns.html"
      },
      {
        "id": "woodhouse-farm-lodge",
        "name": "Woodhouse Farm Lodge",
        "slug": "woodhouse-farm-lodge",
        "town": "Spalding",
        "type": "B&B",
        "bestFor": "A rural lodge stay outside Spalding with gardens, a shared lounge and an indoor pool. It suits couples and families who prefer a countryside setting within a short drive of Springfields and the town centre. Confirm pool access, breakfast arrangements and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Woodhouse Farm Lodge Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/woodhouse-farm-lodge.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "bookingUrl": "https://www.booking.com/hotel/gb/woodhouse-farm-lodge.html"
      },
      {
        "id": "the-red-lion-hotel",
        "name": "The Red Lion Hotel",
        "slug": "the-red-lion-hotel",
        "town": "Spalding",
        "type": "Hotel",
        "bestFor": "An 18th-century coaching inn on the Market Place in central Spalding, refurbished and family run, with seventeen en-suite rooms. Its position suits visitors exploring the town, riverside and weekly markets on foot. Check pet policies, parking and current room details directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Red Lion Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-red-lion-spalding.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "bookingUrl": "https://www.booking.com/hotel/gb/the-red-lion-spalding.html"
      },
      {
        "id": "woodlands-hotel",
        "name": "Woodlands Hotel",
        "slug": "woodlands-hotel",
        "town": "Spalding",
        "type": "Hotel",
        "bestFor": "An Edwardian house hotel on Pinchbeck Road, around ten minutes' walk from Spalding town centre, with a patio garden and free parking. It suits quieter breaks and garden-trail visits in bulb country. Confirm breakfast times, room choices and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Woodlands Hotel official website",
            "url": "https://woodlandshotelspalding.com/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "Woodlands Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/woodlands-spalding.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://woodlandshotelspalding.com/",
        "bookingUrl": "https://www.booking.com/hotel/gb/woodlands-spalding.html"
      },
      {
        "id": "cley-hall",
        "name": "Cley Hall",
        "slug": "cley-hall",
        "town": "Spalding",
        "type": "Hotel",
        "bestFor": "A Georgian Grade II listed house overlooking the River Welland, a few minutes on foot from central Spalding, with gardens, a terrace and a bar-lounge. It suits visitors who want period character on the riverside. Check dining arrangements, parking and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Cley Hall official website",
            "url": "https://www.cleyhall.com/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "Cley Hall Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/cley-hall.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.cleyhall.com/",
        "bookingUrl": "https://www.booking.com/hotel/gb/cley-hall.html"
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
        "sourceUrls": [
          {
            "label": "Ayscoughfee Hall official page",
            "url": "https://www.sholland.gov.uk/ayscoughfee",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.sholland.gov.uk/ayscoughfee"
      },
      {
        "id": "springfields-outlet-shopping-and-leisure",
        "name": "Springfields Outlet Shopping & Leisure",
        "slug": "springfields-outlet-shopping-and-leisure",
        "town": "Spalding",
        "category": "Shopping",
        "shortDescription": "Springfields Outlet Shopping & Leisure is a shopping or browsing stop to consider in Spalding as part of Fenland visits, gardens and countryside days. Opening times, market days and individual business hours can vary, so check current details before travelling.",
        "sourceUrls": [
          {
            "label": "Springfields Outlet official website",
            "url": "https://springfieldsshopping.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://springfieldsshopping.co.uk/"
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
        "category": "Wildlife",
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
    "lastUpdated": "15 July 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "the-solo",
        "name": "The SOLO",
        "slug": "the-solo",
        "town": "Sleaford",
        "type": "Hotel",
        "bestFor": "A boutique hotel in the former bank chambers in the heart of Sleaford, opened in 2021 with eight rooms above its own bistro bar. It suits town-centre stays near the station, The Hub and the River Slea. Confirm bar opening, breakfast options and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The SOLO official website",
            "url": "https://www.thesolo.bar/chambers",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "The SOLO Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/no-1-bank-chambers.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.thesolo.bar/chambers",
        "bookingUrl": "https://www.booking.com/hotel/gb/no-1-bank-chambers.html"
      },
      {
        "id": "marquis-of-granby",
        "name": "Marquis of Granby",
        "slug": "marquis-of-granby",
        "town": "Sleaford",
        "type": "Hotel",
        "bestFor": "A traditional inn on Northgate in central Sleaford with a garden, bar and restaurant below its guest rooms. It suits visitors who want a walkable pub base for the town's heritage stops and the Sleaford Navigation. Check food service days, parking and current room details directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Marquis of Granby Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/marquis-of-granby-lincoln.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "bookingUrl": "https://www.booking.com/hotel/gb/marquis-of-granby-lincoln.html"
      },
      {
        "id": "the-finch-hatton-arms",
        "name": "The Finch Hatton Arms",
        "slug": "the-finch-hatton-arms",
        "town": "Sleaford",
        "type": "Inn",
        "bestFor": "A former hunting lodge turned country inn in the village of Ewerby, around four miles east of Sleaford. Its restaurant, garden and quiet village setting suit countryside breaks over town-centre convenience. Confirm dining times, room types and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Finch Hatton Arms official website",
            "url": "https://thefinchhatton.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "The Finch Hatton Arms Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-finch-hatton-arms.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://thefinchhatton.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-finch-hatton-arms.html"
      },
      {
        "id": "the-mallards",
        "name": "The Mallards",
        "slug": "the-mallards",
        "town": "Sleaford",
        "type": "Hotel",
        "bestFor": "A family-run hotel at Eastgate in Sleaford town centre with eight en-suite rooms, including ground-floor and family options. Its position suits rail arrivals and flat walks along the River Slea. Check breakfast arrangements, accessibility details and current prices directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Mallards Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-mallards-lincolnshire.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "bookingUrl": "https://www.booking.com/hotel/gb/the-mallards-lincolnshire.html"
      },
      {
        "id": "riverside-guest-house",
        "name": "Riverside Guest House",
        "slug": "riverside-guest-house",
        "town": "Sleaford",
        "type": "Guest house",
        "bestFor": "A small guest house on West Banks beside the River Slea, a short stroll from Sleaford's centre. En-suite rooms, a private car park and continental breakfast suit walkers and low-key overnight stops. Confirm room availability, parking and check-in times directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Riverside Guest House Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/riverside-guest-house-sleaford.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "bookingUrl": "https://www.booking.com/hotel/gb/riverside-guest-house-sleaford.html"
      }
    ],
    "thingsToDo": [
      {
        "id": "hub-national-centre-for-craft-and-design",
        "name": "Hub - National Centre for Craft and Design",
        "slug": "hub-national-centre-for-craft-and-design",
        "town": "Sleaford",
        "category": "Museum",
        "shortDescription": "Hub - National Centre for Craft and Design is a visitor stop to compare in Sleaford while building market-town stops, rail-linked visits and local heritage routes. Check current opening times, facilities, access and any booking requirements directly before travelling.",
        "sourceUrls": [
          {
            "label": "The Hub Sleaford official website",
            "url": "https://hub-sleaford.org.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://hub-sleaford.org.uk/"
      },
      {
        "id": "cogglesford-watermill",
        "name": "Cogglesford Watermill",
        "slug": "cogglesford-watermill",
        "town": "Sleaford",
        "category": "Heritage",
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
        "sourceUrls": [
          {
            "label": "Heckington Windmill official website",
            "url": "https://www.heckingtonwindmill.org.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.heckingtonwindmill.org.uk/"
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
        "sourceUrls": [
          {
            "label": "Finch Hatton official website",
            "url": "https://thefinchhatton.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "A pub listing around Sleaford for visitors building a practical food stop into market-town stops, rail-linked visits and local heritage routes. It may suit a casual meal or drinks break, depending on current service. Check opening times, menus, booking rules, pet policy and accessibility details directly with the pub.",
        "officialWebsiteUrl": "https://thefinchhatton.co.uk/"
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
    "lastUpdated": "15 July 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "white-heather-guest-house",
        "name": "White Heather Guest House",
        "slug": "white-heather-guest-house",
        "town": "Mablethorpe",
        "type": "Guest house",
        "bestFor": "A six-room Victorian guest house off Mablethorpe High Street, about a four-minute walk from the beach, run as a guest house since the 1930s. Cooked breakfasts and private parking suit classic seaside stays. Confirm seasonal opening, house rules and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "White Heather Guest House official website",
            "url": "https://whiteheatherguesthouse.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "White Heather Guest House Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/white-heather-guest-house.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://whiteheatherguesthouse.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/white-heather-guest-house.html"
      },
      {
        "id": "the-victoria-guest-house",
        "name": "The Victoria Guest House",
        "slug": "the-victoria-guest-house",
        "town": "Mablethorpe",
        "type": "Guest house",
        "bestFor": "A guest house on Victoria Road around three minutes' walk from Mablethorpe Beach, with a bar, garden, sauna and family rooms. It suits families and couples who want to be close to the seafront without staying on the busiest stretch. Check room options, facilities and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Victoria Guest House Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-victoria-guest-house.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "bookingUrl": "https://www.booking.com/hotel/gb/the-victoria-guest-house.html"
      },
      {
        "id": "the-cross-guest-house",
        "name": "The Cross Guest House",
        "slug": "the-cross-guest-house",
        "town": "Mablethorpe",
        "type": "Guest house",
        "bestFor": "A guest house with an adjoining touring park on Alford Road on the landward edge of Mablethorpe, with facilities for guests with reduced mobility. It suits visitors who want parking, space and a quieter base a short drive from the beach. Confirm breakfast choices, accessibility details and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Cross Guest House official website",
            "url": "https://www.the-cross-guesthouse.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "The Cross Guest House Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-cross-guest-house.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.the-cross-guesthouse.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-cross-guest-house.html"
      },
      {
        "id": "park-view-guest-house",
        "name": "Park View Guest House",
        "slug": "park-view-guest-house",
        "town": "Mablethorpe",
        "type": "Guest house",
        "bestFor": "A licensed guest house across from the seafront gardens in Mablethorpe, with a private car park and a small bar with an open fire in winter. It suits traditional bed-and-breakfast seaside breaks. The owners take bookings directly, so check room availability and current prices with the guest house before travelling.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "official-site-only",
        "sourceUrls": [
          {
            "label": "Park View Guest House official website",
            "url": "https://parkviewguest.house/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://parkviewguest.house/"
      },
      {
        "id": "the-beach-house-mablethorpe",
        "name": "The Beach House",
        "slug": "the-beach-house-mablethorpe",
        "town": "Mablethorpe",
        "type": "Holiday cottage",
        "bestFor": "A self-catering beach house sleeping six to eight, a couple of hundred metres from Mablethorpe's sands, with a hot tub, garden and off-road parking. It suits family or group stays wanting kitchen facilities rather than serviced rooms. Confirm occupancy, pet rules and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Beach House Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-beach-house-mablethorpe.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "bookingUrl": "https://www.booking.com/hotel/gb/the-beach-house-mablethorpe.html"
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
        "category": "Wildlife",
        "shortDescription": "Mablethorpe Seal Sanctuary and Wildlife Centre is a nature or walking option to compare around Mablethorpe for a quieter outdoor stop during beach days, promenade time and casual coastal breaks. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
        "sourceUrls": [
          {
            "label": "Mablethorpe Seal Sanctuary official website",
            "url": "https://mablethorpesealsanctuary.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://mablethorpesealsanctuary.co.uk/"
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
    "lastUpdated": "15 July 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "village-limits-bed-and-breakfast-rooms",
        "name": "Village Limits Bed and Breakfast Rooms",
        "slug": "village-limits-bed-and-breakfast-rooms",
        "town": "Woodhall Spa",
        "type": "B&B",
        "bestFor": "A small bed and breakfast on the wooded edge of Woodhall Spa with air-conditioned rooms, cooked-to-order breakfasts and free parking. Its quiet setting suits couples touring the village, golf courses and aviation heritage. Confirm room availability, breakfast times and current prices directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Village Limits Bed and Breakfast Rooms official website",
            "url": "https://www.villagelimits.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "Village Limits Bed and Breakfast Rooms Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/village-limits.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.villagelimits.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/village-limits.html"
      },
      {
        "id": "the-dower-house-hotel",
        "name": "The Dower House Hotel",
        "slug": "the-dower-house-hotel",
        "town": "Woodhall Spa",
        "type": "Hotel",
        "bestFor": "A country house hotel in two acres of gardens and woodland beside the National Golf Centre fairways, a short walk from the Kinema in the Woods. Its restaurant and garden outlook suit slower village breaks. Check dinner service, room styles and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Dower House Hotel official website",
            "url": "https://www.dowerhousehotel.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "The Dower House Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-dower-house-woodhall-spa.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.dowerhousehotel.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-dower-house-woodhall-spa.html"
      },
      {
        "id": "petwood-hotel",
        "name": "Petwood Hotel",
        "slug": "petwood-hotel",
        "town": "Woodhall Spa",
        "type": "Hotel",
        "bestFor": "A 1905 country house hotel in thirty acres of gardens, known as the wartime officers' mess of 617 Squadron, with a memorabilia-filled Squadron Bar. It suits heritage-led stays and garden afternoons in Woodhall Spa. Confirm event closures, dining and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Petwood Hotel official website",
            "url": "https://www.petwood.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "Petwood Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/petwood.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.petwood.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/petwood.html"
      },
      {
        "id": "the-golf-hotel",
        "name": "The Golf Hotel",
        "slug": "the-golf-hotel",
        "town": "Woodhall Spa",
        "type": "Hotel",
        "bestFor": "An 1880s hotel in seven acres of lawns and woodland on The Broadway, a couple of minutes from the village centre and next to the championship golf courses. It suits golf groups and traditional countryside stays. Check group bookings, dining and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Golf Hotel official website",
            "url": "https://www.thegolf-hotel.com/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "The Golf Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/golfhotellincs.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.thegolf-hotel.com/",
        "bookingUrl": "https://www.booking.com/hotel/gb/golfhotellincs.html"
      },
      {
        "id": "the-inn-at-woodhall-spa",
        "name": "The Inn at Woodhall Spa",
        "slug": "the-inn-at-woodhall-spa",
        "town": "Woodhall Spa",
        "type": "Inn",
        "bestFor": "A village inn with en-suite rooms above a pub and brasserie, around five minutes' walk from the Kinema in the Woods. It suits visitors who want food, real ales and a central Woodhall Spa base under one roof. Confirm dining times, room types and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Inn at Woodhall Spa official website",
            "url": "https://www.theinnatwoodhallspa.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "The Inn at Woodhall Spa Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-inn-at-woodhall-spa.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.theinnatwoodhallspa.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-inn-at-woodhall-spa.html"
      }
    ],
    "thingsToDo": [
      {
        "id": "the-kinema-in-the-woods",
        "name": "The Kinema in the Woods",
        "slug": "the-kinema-in-the-woods",
        "town": "Woodhall Spa",
        "category": "Entertainment",
        "shortDescription": "The Kinema in the Woods is a nature or walking option to compare around Woodhall Spa for a quieter outdoor stop during relaxed Wolds-edge stays, heritage stops and leisure breaks. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
        "sourceUrls": [
          {
            "label": "Kinema in the Woods official website",
            "url": "https://thekinemainthewoods.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://thekinemainthewoods.co.uk/"
      },
      {
        "id": "woodhall-spa-cottage-museum",
        "name": "Woodhall Spa Cottage Museum",
        "slug": "woodhall-spa-cottage-museum",
        "town": "Woodhall Spa",
        "category": "Museum",
        "shortDescription": "Woodhall Spa Cottage Museum is a museum or indoor attraction to consider in Woodhall Spa for local history, culture or a weather-flexible stop during relaxed Wolds-edge stays, heritage stops and leisure breaks. Check current opening times, admission, facilities and accessibility directly before travelling.",
        "sourceUrls": [
          {
            "label": "Woodhall Spa Cottage Museum official website",
            "url": "https://www.cottagemuseum.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.cottagemuseum.co.uk/"
      },
      {
        "id": "jubilee-park",
        "name": "Jubilee Park",
        "slug": "jubilee-park",
        "town": "Woodhall Spa",
        "category": "Nature",
        "shortDescription": "Jubilee Park is a nature or walking option to compare around Woodhall Spa for a quieter outdoor stop during relaxed Wolds-edge stays, heritage stops and leisure breaks. Confirm access, parking, seasonal conditions and visitor facilities before travelling.",
        "sourceUrls": [
          {
            "label": "Jubilee Park official website",
            "url": "https://www.jubileeparkwoodhallspa.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.jubileeparkwoodhallspa.co.uk/"
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
        "sourceUrls": [
          {
            "label": "Petwood Hotel official website",
            "url": "https://www.petwood.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "Petwood Hotel Restaurant is a restaurant listing to consider in Woodhall Spa when comparing sit-down meals around relaxed Wolds-edge stays, heritage stops and leisure breaks. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting.",
        "officialWebsiteUrl": "https://www.petwood.co.uk/"
      },
      {
        "id": "the-inn-at-woodhall-spa",
        "name": "The Inn at Woodhall Spa",
        "slug": "the-inn-at-woodhall-spa",
        "town": "Woodhall Spa",
        "type": "Pub",
        "sourceUrls": [
          {
            "label": "The Inn at Woodhall Spa official website",
            "url": "https://www.theinnatwoodhallspa.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "A pub listing around Woodhall Spa for visitors building a practical food stop into relaxed Wolds-edge stays, heritage stops and leisure breaks. It may suit a casual meal or drinks break, depending on current service. Check opening times, menus, booking rules, pet policy and accessibility details directly with the pub.",
        "officialWebsiteUrl": "https://www.theinnatwoodhallspa.co.uk/"
      }
    ]
  },
  {
    "id": "horncastle",
    "name": "Horncastle",
    "slug": "horncastle",
    "regionType": "Wolds",
    "contentAngle": "Antiques, Lincolnshire Wolds villages and countryside breaks.",
    "lastUpdated": "15 July 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "the-admiral-rodney-hotel",
        "name": "The Admiral Rodney Hotel",
        "slug": "the-admiral-rodney-hotel",
        "town": "Horncastle",
        "type": "Hotel",
        "bestFor": "An 18th-century coaching inn on North Street in the centre of Horncastle, now a Grade II listed hotel with an eatery and coffee house. It suits antiques-trail browsing and Wolds touring on foot from the door. Check parking, dining times and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Admiral Rodney Hotel official website",
            "url": "https://admiralrodney.com/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "The Admiral Rodney Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/admiralrodney.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://admiralrodney.com/",
        "bookingUrl": "https://www.booking.com/hotel/gb/admiralrodney.html"
      },
      {
        "id": "magpies-restaurant-with-rooms",
        "name": "Magpies Restaurant with Rooms",
        "slug": "magpies-restaurant-with-rooms",
        "town": "Horncastle",
        "type": "Hotel",
        "bestFor": "A family-run restaurant with rooms in a row of 200-year-old cottages on East Street, with three en-suite bedrooms above a long-established dining room. It suits food-led weekends in the southern Wolds. Confirm dinner reservations, breakfast times and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Magpies Restaurant with Rooms official website",
            "url": "https://www.magpiesrestaurant.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "Magpies Restaurant with Rooms Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/magpies-restaurant-with-rooms.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.magpiesrestaurant.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/magpies-restaurant-with-rooms.html"
      },
      {
        "id": "laurel-lodge",
        "name": "Laurel Lodge",
        "slug": "laurel-lodge",
        "town": "Horncastle",
        "type": "B&B",
        "bestFor": "A bed and breakfast on a quiet street near the centre of Horncastle, with a garden and free parking. It suits couples and walkers who want a calm base for the Wolds and the Spa Trail to Woodhall Spa. Check room choices, breakfast arrangements and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Laurel Lodge Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/laurel-lodge.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "bookingUrl": "https://www.booking.com/hotel/gb/laurel-lodge.html"
      },
      {
        "id": "mountain-ash",
        "name": "Mountain Ash",
        "slug": "mountain-ash",
        "town": "Horncastle",
        "type": "Hotel",
        "bestFor": "A rural bed and breakfast on the edge of Horncastle with garden views, packed-lunch options and pet-friendly rooms on request. It suits walkers and cyclists heading into the Lincolnshire Wolds. Confirm directions, dog policies and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Mountain Ash Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/mountain-ash.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "bookingUrl": "https://www.booking.com/hotel/gb/mountain-ash.html"
      },
      {
        "id": "the-bull-hotel",
        "name": "The Bull Hotel",
        "slug": "the-bull-hotel",
        "town": "Horncastle",
        "type": "Inn",
        "bestFor": "A traditional family-run pub with rooms in Horncastle's market place, offering bed and breakfast above a working local bar. It suits visitors who want a simple, central stay among the town's antiques shops. Check food service, parking and current room details directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Bull Hotel official website",
            "url": "https://thebullhotel.org.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "The Bull Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-bull-lincoln.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://thebullhotel.org.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-bull-lincoln.html"
      }
    ],
    "thingsToDo": [
      {
        "id": "horncastle-antiques-centre",
        "name": "Horncastle Antiques Centre",
        "slug": "horncastle-antiques-centre",
        "town": "Horncastle",
        "category": "Shopping",
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
        "category": "Market",
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
        "sourceUrls": [
          {
            "label": "Magpies Restaurant official website",
            "url": "https://www.magpiesrestaurant.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "Magpies Restaurant with Rooms is a restaurant listing to consider in Horncastle when comparing sit-down meals around antiques browsing, market-town stops and Wolds itineraries. It may suit visitors planning lunch, dinner or a slower break during a local itinerary. Check current opening hours, menus, booking requirements, accessibility details and dietary information directly with the venue before visiting.",
        "officialWebsiteUrl": "https://www.magpiesrestaurant.co.uk/"
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
        "sourceUrls": [
          {
            "label": "Admiral Rodney official website",
            "url": "https://admiralrodney.com/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "A Horncastle restaurant listing for visitors comparing places to eat as part of antiques browsing, market-town stops and Wolds itineraries. Use it as a starting point for meal planning rather than a ranking. Check current hours, menus, booking needs, accessibility information and dietary options directly with the venue.",
        "officialWebsiteUrl": "https://admiralrodney.com/"
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
    "lastUpdated": "15 July 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "brampton-dales-farm",
        "name": "Brampton Dales Farm",
        "slug": "brampton-dales-farm",
        "town": "Gainsborough",
        "type": "Hotel",
        "bestFor": "A farm-based bed and breakfast on a 26-acre estate outside Gainsborough, with detached en-suite rooms away from the main farmhouse. It suits visitors who want rural quiet within reach of the Old Hall and the Trent villages. Confirm directions, breakfast times and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Brampton Dales Farm official website",
            "url": "https://www.bramptondalesfarm.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "Brampton Dales Farm Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/brampton-dales-farm.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.bramptondalesfarm.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/brampton-dales-farm.html"
      },
      {
        "id": "hickman-hill-hotel",
        "name": "Hickman Hill Hotel",
        "slug": "hickman-hill-hotel",
        "town": "Gainsborough",
        "type": "Hotel",
        "bestFor": "A hotel in a historic building on the hill above Gainsborough town centre, with a garden, bar and restaurant. It suits visitors combining Gainsborough Old Hall with West Lindsey countryside drives. Check evening dining, parking and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Hickman Hill Hotel official website",
            "url": "https://www.hickmanhill.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "Hickman Hill Hotel Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/hickman-hill.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.hickmanhill.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/hickman-hill.html"
      },
      {
        "id": "black-swan-guest-house",
        "name": "Black Swan Guest House",
        "slug": "black-swan-guest-house",
        "town": "Gainsborough",
        "type": "Guest house",
        "bestFor": "An 18th-century former coaching inn in the village of Marton, five miles south of Gainsborough on the road to Lincoln, with rooms in the main house and a converted stable block. A pet-friendly policy and cooked breakfasts suit touring stays. Confirm dog arrangements, room location and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "Black Swan Guest House official website",
            "url": "https://blackswanguesthouse.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "Black Swan Guest House Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/black-swan-guest-house.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://blackswanguesthouse.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/black-swan-guest-house.html"
      },
      {
        "id": "the-black-horse-inn",
        "name": "The Black Horse Inn",
        "slug": "the-black-horse-inn",
        "town": "Gainsborough",
        "type": "Inn",
        "bestFor": "A village pub with six en-suite rooms in a separate building at Blyton, around four miles north of Gainsborough. It suits visitors who want a country local with food, beer and a straightforward overnight base. The pub handles stays directly, so check room availability and current prices with the inn before travelling.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "official-site-only",
        "sourceUrls": [
          {
            "label": "The Black Horse Inn official website",
            "url": "https://www.blackhorseblyton.com/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.blackhorseblyton.com/"
      },
      {
        "id": "thonock-park-b-and-b",
        "name": "Thonock Park B&B",
        "slug": "thonock-park-b-and-b",
        "town": "Gainsborough",
        "type": "B&B",
        "bestFor": "A bed and breakfast in the Thonock parkland area on the northern edge of Gainsborough, with air-conditioned rooms close to the town's golf course. It suits golf visits and low-key overnight stops. Booking is handled by the operator, so confirm room details and current availability directly before travelling.",
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
            "checkedDate": "2026-05-24"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false
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
    "lastUpdated": "15 July 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "the-advocate-arms",
        "name": "The Advocate Arms",
        "slug": "the-advocate-arms",
        "town": "Market Rasen",
        "type": "Inn",
        "bestFor": "An 18th-century restaurant with rooms on Queen Street in the centre of Market Rasen, with boutique-style bedrooms above a busy kitchen. It suits race-day visits and Wolds food weekends. Confirm race-fixture demand, dinner bookings and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Advocate Arms official website",
            "url": "https://advocatearms.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "The Advocate Arms Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/advocate-arms.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://advocatearms.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/advocate-arms.html"
      },
      {
        "id": "the-olive",
        "name": "The Olive",
        "slug": "the-olive",
        "town": "Market Rasen",
        "type": "Hotel",
        "bestFor": "A Catalan tapas restaurant on King Street with guest rooms to the rear, within walking distance of Market Rasen Racecourse. It suits visitors pairing an evening meal with a simple overnight stay. The venue takes bookings directly, so check room availability and current prices before travelling.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "official-site-only",
        "sourceUrls": [
          {
            "label": "The Olive official website",
            "url": "https://www.theolivemarketrasen.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.theolivemarketrasen.co.uk/"
      },
      {
        "id": "woldview-house-b-and-b",
        "name": "Woldview House B&B",
        "slug": "woldview-house-b-and-b",
        "town": "Market Rasen",
        "type": "B&B",
        "bestFor": "A small bed and breakfast base for the northern Wolds near Market Rasen, with free parking and cooked breakfasts. It suits walkers and race-goers who prefer a personal, owner-run property. Booking is handled directly with the owners, so confirm room availability and current prices before travelling.",
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
        "bestFor": "Self-catering farm accommodation on the edge of Market Rasen countryside, suited to visitors who want independent space and parking for Wolds walking or race weekends. Availability is managed by the operator, so confirm apartment details, occupancy and current prices directly before travelling.",
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
        "bestFor": "A pub with rooms dating from the 1800s on the A46 at Market Rasen, with a garden, bar and free private parking. It suits stopovers between Lincoln and Grimsby as well as race-day stays. Check food service, room types and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The White Swan Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-white-swan-market-rasen1.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "bookingUrl": "https://www.booking.com/hotel/gb/the-white-swan-market-rasen1.html"
      }
    ],
    "thingsToDo": [
      {
        "id": "market-rasen-racecourse",
        "name": "Market Rasen Racecourse",
        "slug": "market-rasen-racecourse",
        "town": "Market Rasen",
        "category": "Entertainment",
        "shortDescription": "Market Rasen Racecourse is a shopping or browsing stop to consider in Market Rasen as part of Wolds countryside stays, market-town stops and race-day plans. Opening times, market days and individual business hours can vary, so check current details before travelling.",
        "sourceUrls": [
          {
            "label": "Market Rasen Racecourse official page",
            "url": "https://www.thejockeyclub.co.uk/market-rasen/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.thejockeyclub.co.uk/market-rasen/"
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
        "category": "Heritage",
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
        "sourceUrls": [
          {
            "label": "Advocate Arms official website",
            "url": "https://advocatearms.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "The Advocate Arms is a pub option to compare in or around Market Rasen, useful for visitors planning a relaxed meal, drinks stop or break during Wolds countryside stays, market-town stops and race-day plans. Confirm current opening hours, menus, booking requirements, dog policy and accessibility details directly with the pub before travelling.",
        "officialWebsiteUrl": "https://advocatearms.co.uk/"
      },
      {
        "id": "the-olive",
        "name": "The Olive",
        "slug": "the-olive",
        "town": "Market Rasen",
        "type": "Restaurant",
        "sourceUrls": [
          {
            "label": "The Olive official website",
            "url": "https://www.theolivemarketrasen.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Do not reuse venue photos unless permission is granted; use an area image or request a press image.",
        "needsVerification": false,
        "description": "A restaurant in Market Rasen to add to a food shortlist while planning time around Wolds countryside stays, market-town stops and race-day plans. It may be useful for visitors who want a seated meal before or after exploring the local area. Confirm opening times, menus, booking arrangements, accessibility and dietary details directly with the restaurant before travelling.",
        "officialWebsiteUrl": "https://www.theolivemarketrasen.co.uk/"
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
    "lastUpdated": "15 July 2026",
    "sourceStatus": "research-draft",
    "placesToStay": [
      {
        "id": "the-wishing-well-inn",
        "name": "The Wishing Well Inn",
        "slug": "the-wishing-well-inn",
        "town": "Bourne",
        "type": "Inn",
        "bestFor": "A stone-built village inn at Dyke, on the northern edge of Bourne, with pub rooms and a restaurant. It suits visitors who want a classic pub stay near Bourne Woods and the town centre. Confirm food times, room options and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Wishing Well Inn Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-wishing-well-inn.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "bookingUrl": "https://www.booking.com/hotel/gb/the-wishing-well-inn.html"
      },
      {
        "id": "the-angel-at-bourne",
        "name": "The Angel at Bourne",
        "slug": "the-angel-at-bourne",
        "town": "Bourne",
        "type": "Hotel",
        "bestFor": "An 18th-century coaching inn on the Market Place in the centre of Bourne, modernised with bed-and-breakfast rooms above its bar and grill. It suits town-centre stays within an easy drive of Grimsthorpe Castle and Bourne Wood. Check breakfast choices, parking and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Angel at Bourne Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-angel-at-bourne.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "bookingUrl": "https://www.booking.com/hotel/gb/the-angel-at-bourne.html"
      },
      {
        "id": "the-six-bells-witham-on-the-hill",
        "name": "The Six Bells Witham on the Hill",
        "slug": "the-six-bells-witham-on-the-hill",
        "town": "Bourne",
        "type": "Hotel",
        "bestFor": "A restored pub with rooms at Witham on the Hill, a village between Bourne and Stamford, with a wood-fired kitchen and three dining areas. It suits countryside food stays within reach of both towns. Confirm dinner service days, room details and current availability directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Six Bells Witham on the Hill Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-six-bells.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "bookingUrl": "https://www.booking.com/hotel/gb/the-six-bells.html"
      },
      {
        "id": "the-bull-inn-rippingale",
        "name": "The Bull Inn Rippingale",
        "slug": "the-bull-inn-rippingale",
        "town": "Bourne",
        "type": "Inn",
        "bestFor": "A high-street village pub in Rippingale, a few miles north of Bourne, with en-suite rooms in an annexe behind the inn. It suits quiet rural overnights with pub food downstairs. Check current menus, room availability and prices directly before booking.",
        "sourceNote": "We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.",
        "bookingStatus": "booking-confirmed",
        "sourceUrls": [
          {
            "label": "The Bull Inn Rippingale official website",
            "url": "https://www.rippingalebull.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          },
          {
            "label": "The Bull Inn Rippingale Booking.com property page",
            "url": "https://www.booking.com/hotel/gb/the-bull-inn-bourne.html",
            "type": "Booking.com",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Use approved booking-platform images if available; otherwise use a public area image or request permission.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.rippingalebull.co.uk/",
        "bookingUrl": "https://www.booking.com/hotel/gb/the-bull-inn-bourne.html"
      },
      {
        "id": "glen-house-annexe",
        "name": "Glen House Annexe",
        "slug": "glen-house-annexe",
        "town": "Bourne",
        "type": "Holiday cottage",
        "bestFor": "A self-contained annexe stay on the edge of Bourne suited to visitors who want independent space rather than a serviced room. Availability and house arrangements are managed by the owners, so confirm current details, occupancy and prices directly before travelling.",
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
        "sourceUrls": [
          {
            "label": "Bourne Woods Forestry England page",
            "url": "https://www.forestryengland.uk/bourne-woods",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://www.forestryengland.uk/bourne-woods"
      },
      {
        "id": "grimsthorpe-castle-park-and-gardens",
        "name": "Grimsthorpe Castle Park and Gardens",
        "slug": "grimsthorpe-castle-park-and-gardens",
        "town": "Bourne",
        "category": "Historic site",
        "shortDescription": "Grimsthorpe Castle Park and Gardens is a heritage-focused stop to consider in Bourne when adding local history to south Lincolnshire market-town stops and Fens-edge routes. Check current opening arrangements, admission details, facilities and accessibility information directly before travelling.",
        "sourceUrls": [
          {
            "label": "Grimsthorpe Castle official website",
            "url": "https://grimsthorpe.co.uk/",
            "type": "Official website",
            "checkedDate": "2026-07-15"
          }
        ],
        "imageGuidance": "Exact public image may exist on Wikimedia Commons or Geograph; verify licence.",
        "needsVerification": false,
        "officialWebsiteUrl": "https://grimsthorpe.co.uk/"
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
        "category": "Nature",
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
