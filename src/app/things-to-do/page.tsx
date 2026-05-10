import type { Metadata } from 'next';
import CategoryPageTemplate from '@/components/CategoryPageTemplate';
import { getListingsByCategory } from '@/data/listings';
import { guides } from '@/data/guides';
import { thingsToDoFaqs } from '@/data/faqs';
import { mainCategories } from '@/data/categories';

export const metadata: Metadata = {
  title: 'Things to Do in Lincolnshire | Attractions, Walks, Days Out & Hidden Gems',
  description: 'Explore the best attractions, historic sites, nature reserves, beaches, countryside walks, museums and family days out across Lincolnshire. Free things to do and dog-friendly activities.',
  keywords: ['things to do in Lincolnshire', 'Lincolnshire attractions', 'walks in Lincolnshire', 'free days out Lincolnshire', 'dog-friendly things to do Lincolnshire', 'Lincolnshire hidden gems', 'family activities Lincolnshire'],
  openGraph: {
    title: 'Things to Do in Lincolnshire | Attractions, Walks & Days Out',
    description: 'Explore the best attractions, historic sites, nature reserves, beaches, walks and family days out across Lincolnshire.',
  },
  alternates: { canonical: '/things-to-do' },
};

export default function ThingsToDoPage() {
  const category = mainCategories.find((c) => c.slug === 'things-to-do')!;
  const listings = getListingsByCategory('things-to-do');
  const relatedGuides = guides.filter((g) => ['Family', 'Explore'].includes(g.category));

  return (
    <CategoryPageTemplate
      title="Things to Do in Lincolnshire"
      description="Explore the best attractions, historic sites, nature reserves, beaches, countryside walks, museums and family days out across Lincolnshire. From free nature reserves to dog-friendly walks in the Wolds."
      heroVariant="sage"
      subcategories={category.subcategories || []}
      subcategoryLinks={{
        Beaches: '/lincolnshire-coast',
        'Family activities': '/family-days-out',
        'Dog-friendly things to do': '/dog-friendly',
      }}
      listings={listings}
      guides={relatedGuides}
      faqs={thingsToDoFaqs}
      breadcrumbLabel="Things to Do"
    />
  );
}
