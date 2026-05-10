export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  href: string;
  subcategories?: string[];
}

export const mainCategories: Category[] = [
  {
    id: 'places-to-stay',
    name: 'Places to Stay',
    slug: 'places-to-stay',
    description: 'Discover hotels, holiday cottages, caravan parks, campsites, glamping stays and B&Bs across Lincolnshire.',
    icon: '🏡',
    href: '/places-to-stay',
    subcategories: [
      'Hotels', 'Holiday cottages', 'Caravan parks', 'Campsites',
      'Glamping', 'B&Bs', 'Dog-friendly stays', 'Family-friendly stays',
      'Luxury stays', 'Budget stays',
    ],
  },
  {
    id: 'things-to-do',
    name: 'Things to Do',
    slug: 'things-to-do',
    description: 'Find attractions, walks, historic sites, museums, family activities, beaches and hidden gems.',
    icon: '🎯',
    href: '/things-to-do',
    subcategories: [
      'Attractions', 'Historic sites', 'Museums', 'Nature reserves',
      'Beaches', 'Walks', 'Family activities', 'Rainy day activities',
      'Free things to do', 'Dog-friendly things to do',
    ],
  },
  {
    id: 'food-drink',
    name: 'Food & Drink',
    slug: 'food-drink',
    description: 'Explore pubs, restaurants, cafés, farm shops, afternoon tea spots and local places to eat.',
    icon: '🍽️',
    href: '/food-drink',
    subcategories: [
      'Restaurants', 'Pubs', 'Cafés', 'Afternoon tea',
      'Farm shops', 'Sunday roast', 'Dog-friendly pubs',
      'Places near the beach', 'Family-friendly restaurants',
    ],
  },
  {
    id: 'dog-friendly',
    name: 'Dog-Friendly Lincolnshire',
    slug: 'dog-friendly',
    description: 'Find dog-friendly stays, pubs, walks, beaches and days out across the county.',
    icon: '🐾',
    href: '/dog-friendly',
    subcategories: [
      'Dog-friendly places to stay', 'Dog-friendly pubs',
      'Dog-friendly walks', 'Dog-friendly beaches',
      'Dog-friendly days out',
    ],
  },
  {
    id: 'family-days-out',
    name: 'Family Days Out',
    slug: 'family-days-out',
    description: 'Plan easy family-friendly activities, rainy day options, free attractions and weekend ideas.',
    icon: '👨‍👩‍👧‍👦',
    href: '/family-days-out',
    subcategories: [
      'Outdoor family days out', 'Rainy day activities',
      'Free things to do', 'Animal attractions',
      'Beaches with children', 'Easy weekend ideas',
    ],
  },
  {
    id: 'lincolnshire-coast',
    name: 'Lincolnshire Coast',
    slug: 'lincolnshire-coast',
    description: 'Explore Skegness, Mablethorpe, Sutton-on-Sea, Chapel St Leonards, Ingoldmells and peaceful coastal spots.',
    icon: '🏖️',
    href: '/lincolnshire-coast',
    subcategories: [
      'Skegness', 'Mablethorpe', 'Sutton-on-Sea',
      'Chapel St Leonards', 'Ingoldmells', 'Anderby Creek',
      'Gibraltar Point', 'Cleethorpes',
    ],
  },
];
