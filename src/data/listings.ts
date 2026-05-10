export interface Listing {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  town: string;
  area: string;
  description: string;
  tags: string[];
  features: string[];
  priceRange?: string;
  isSample: boolean;
}

export const listings: Listing[] = [
  {
    id: 'sample-coastal-holiday-park',
    name: 'Coastal Holiday Park',
    category: 'Caravan Park',
    categorySlug: 'places-to-stay',
    town: 'Skegness',
    area: 'Lincolnshire Coast',
    description: 'A sample family-friendly holiday park listing used to demonstrate how directory profiles will appear. Located near sandy beaches with modern facilities and entertainment.',
    tags: ['Family-friendly', 'Near beach', 'Parking'],
    features: ['Online booking', 'Open all year', 'Family-friendly', 'Free parking'],
    priceRange: '££',
    isSample: true,
  },
  {
    id: 'sample-countryside-cottage',
    name: 'Countryside Cottage Retreat',
    category: 'Holiday Cottage',
    categorySlug: 'places-to-stay',
    town: 'Woodhall Spa',
    area: 'Lincolnshire Countryside',
    description: 'A sample self-catering cottage listing set in peaceful Lincolnshire countryside. Ideal for couples and small families looking for a quiet getaway.',
    tags: ['Dog-friendly', 'Countryside', 'Self-catering'],
    features: ['Dog-friendly', 'Free parking', 'Outdoor seating'],
    priceRange: '£££',
    isSample: true,
  },
  {
    id: 'sample-historic-city-stay',
    name: 'Historic City Stay',
    category: 'Boutique Hotel',
    categorySlug: 'places-to-stay',
    town: 'Lincoln',
    area: 'Lincoln',
    description: 'A sample boutique hotel listing in the heart of historic Lincoln. Walking distance to the Cathedral, Castle and independent shops.',
    tags: ['City break', 'Couples', 'Near attractions'],
    features: ['Online booking', 'Wheelchair accessible'],
    priceRange: '£££',
    isSample: true,
  },
  {
    id: 'sample-family-farm',
    name: 'Family Farm Day Out',
    category: 'Family Attraction',
    categorySlug: 'things-to-do',
    town: 'Near Louth',
    area: 'Lincolnshire Wolds',
    description: 'A sample family attraction listing featuring farm animals, outdoor play areas and seasonal activities in the Lincolnshire Wolds.',
    tags: ['Family-friendly', 'Outdoor', 'Animals'],
    features: ['Family-friendly', 'Free parking', 'Open all year', 'Outdoor seating'],
    priceRange: '£',
    isSample: true,
  },
  {
    id: 'sample-seaside-cafe',
    name: 'Seaside Café',
    category: 'Café',
    categorySlug: 'food-drink',
    town: 'Mablethorpe',
    area: 'Lincolnshire Coast',
    description: 'A sample beachside café listing offering breakfasts, light lunches and homemade cakes with views across the Lincolnshire Coast.',
    tags: ['Breakfast', 'Dog-friendly', 'Near beach'],
    features: ['Dog-friendly', 'Outdoor seating', 'Near beach'],
    priceRange: '£',
    isSample: true,
  },
  {
    id: 'sample-country-pub',
    name: 'Country Pub & Garden',
    category: 'Pub',
    categorySlug: 'food-drink',
    town: 'Stamford',
    area: 'South Lincolnshire',
    description: 'A sample traditional country pub listing with a beer garden, Sunday roasts and locally sourced ingredients in the heart of Stamford.',
    tags: ['Sunday roast', 'Outdoor seating', 'Parking'],
    features: ['Dog-friendly', 'Free parking', 'Outdoor seating'],
    priceRange: '££',
    isSample: true,
  },
  {
    id: 'sample-budget-campsite',
    name: 'Wolds Camping Ground',
    category: 'Campsite',
    categorySlug: 'places-to-stay',
    town: 'Horncastle',
    area: 'Lincolnshire Wolds',
    description: 'A sample campsite listing in the Lincolnshire Wolds offering grass pitches, basic facilities and access to scenic walking routes.',
    tags: ['Budget-friendly', 'Countryside', 'Dog-friendly'],
    features: ['Dog-friendly', 'Free parking', 'Budget-friendly'],
    priceRange: '£',
    isSample: true,
  },
  {
    id: 'sample-nature-reserve',
    name: 'Coastal Nature Reserve Walk',
    category: 'Nature Reserve',
    categorySlug: 'things-to-do',
    town: 'Gibraltar Point',
    area: 'Lincolnshire Coast',
    description: 'A sample nature reserve listing offering coastal walks, birdwatching hides and unspoilt sand dune landscapes near Skegness.',
    tags: ['Free entry', 'Dog-friendly', 'Nature'],
    features: ['Dog-friendly', 'Free parking', 'Open all year'],
    priceRange: 'Free',
    isSample: true,
  },
  {
    id: 'sample-glamping-site',
    name: 'Woodland Glamping Pods',
    category: 'Glamping',
    categorySlug: 'places-to-stay',
    town: 'Woodhall Spa',
    area: 'Lincolnshire Countryside',
    description: 'A sample glamping listing featuring cosy woodland pods with hot tubs, fire pits and stargazing in the Lincolnshire countryside.',
    tags: ['Couples', 'Countryside', 'Luxury'],
    features: ['Online booking', 'Free parking', 'Luxury'],
    priceRange: '£££',
    isSample: true,
  },
  {
    id: 'sample-fish-and-chips',
    name: 'Traditional Seaside Chippy',
    category: 'Restaurant',
    categorySlug: 'food-drink',
    town: 'Skegness',
    area: 'Lincolnshire Coast',
    description: 'A sample fish and chip shop listing offering fresh, locally caught fish, mushy peas and seaside dining near the beach.',
    tags: ['Family-friendly', 'Near beach', 'Budget-friendly'],
    features: ['Family-friendly', 'Near beach', 'Budget-friendly'],
    priceRange: '£',
    isSample: true,
  },
  {
    id: 'sample-historic-site',
    name: 'Medieval Castle Ruins',
    category: 'Historic Site',
    categorySlug: 'things-to-do',
    town: 'Lincoln',
    area: 'Lincoln',
    description: 'A sample historic attraction listing showcasing centuries of history with guided tours, seasonal events and panoramic city views.',
    tags: ['History', 'Family-friendly', 'Educational'],
    features: ['Wheelchair accessible', 'Family-friendly', 'Open all year'],
    priceRange: '££',
    isSample: true,
  },
  {
    id: 'sample-farm-shop',
    name: 'Wolds Farm Shop & Kitchen',
    category: 'Farm Shop',
    categorySlug: 'food-drink',
    town: 'Louth',
    area: 'Lincolnshire Wolds',
    description: 'A sample farm shop listing offering locally sourced produce, fresh baked goods, a café kitchen and seasonal hampers.',
    tags: ['Local produce', 'Café', 'Parking'],
    features: ['Free parking', 'Dog-friendly', 'Outdoor seating'],
    priceRange: '££',
    isSample: true,
  },
];

export function getListingsByCategory(categorySlug: string): Listing[] {
  return listings.filter((listing) => listing.categorySlug === categorySlug);
}

export function getListingsByTown(town: string): Listing[] {
  return listings.filter((listing) => listing.town.toLowerCase() === town.toLowerCase());
}

export function getListingsByTag(tag: string): Listing[] {
  return listings.filter((listing) =>
    listing.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

export function searchListings(query: string): Listing[] {
  const q = query.toLowerCase();
  return listings.filter(
    (listing) =>
      listing.name.toLowerCase().includes(q) ||
      listing.category.toLowerCase().includes(q) ||
      listing.town.toLowerCase().includes(q) ||
      listing.description.toLowerCase().includes(q) ||
      listing.tags.some((t) => t.toLowerCase().includes(q))
  );
}
