export interface Guide {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  readingTime: string;
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
  },
  {
    id: 'best-beaches',
    title: 'Best Beaches in Lincolnshire',
    slug: 'best-beaches',
    category: 'Coast',
    description: 'A guide to the best sandy beaches, quiet coastal spots and family-friendly seaside destinations along the Lincolnshire Coast.',
    readingTime: '7 min read',
  },
  {
    id: 'dog-friendly-days-out',
    title: 'Dog-Friendly Days Out in Lincolnshire',
    slug: 'dog-friendly-days-out',
    category: 'Dog-Friendly',
    description: 'Where to take your dog for walks, pub lunches, beach days and countryside adventures across Lincolnshire.',
    readingTime: '6 min read',
  },
  {
    id: 'weekend-breaks',
    title: 'Weekend Breaks in Lincolnshire',
    slug: 'weekend-breaks',
    category: 'Stays',
    description: 'Plan a weekend escape with ideas for couples, families and groups, from countryside cottages to coastal getaways.',
    readingTime: '9 min read',
  },
  {
    id: 'best-places-to-stay',
    title: 'Best Places to Stay in Lincolnshire',
    slug: 'best-places-to-stay',
    category: 'Stays',
    description: 'A practical guide to accommodation options across Lincolnshire, from boutique hotels to budget-friendly campsites.',
    readingTime: '10 min read',
  },
  {
    id: 'rainy-day-activities',
    title: 'Rainy Day Activities in Lincolnshire',
    slug: 'rainy-day-activities',
    category: 'Family',
    description: 'Indoor ideas for when the weather turns, including museums, soft play centres, cinemas and indoor attractions.',
    readingTime: '5 min read',
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
