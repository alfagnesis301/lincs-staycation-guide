import type { Metadata } from 'next';
import CategoryPageTemplate from '@/components/CategoryPageTemplate';
import { getListingsByCategory } from '@/data/listings';
import { foodDrinkFaqs } from '@/data/faqs';
import { mainCategories } from '@/data/categories';

export const metadata: Metadata = {
  title: 'Food & Drink in Lincolnshire | Pubs, Restaurants, Cafés & Sunday Roasts',
  description: 'Discover the best pubs, restaurants, cafés, farm shops, afternoon tea spots and Sunday roast venues across Lincolnshire. Dog-friendly pubs, family-friendly restaurants and places to eat near the coast.',
  keywords: ['best Sunday roast in Lincolnshire', 'dog-friendly pubs Lincolnshire', 'restaurants in Lincoln', 'Stamford restaurants', 'cafés near Skegness', 'afternoon tea Lincolnshire', 'farm shops Lincolnshire', 'family-friendly restaurants Lincolnshire'],
  openGraph: {
    title: 'Food & Drink in Lincolnshire | Pubs, Restaurants & Cafés',
    description: 'Discover the best pubs, restaurants, cafés, farm shops and Sunday roast venues across Lincolnshire.',
  },
  alternates: { canonical: '/food-drink' },
};

export default function FoodDrinkPage() {
  const category = mainCategories.find((c) => c.slug === 'food-drink')!;
  const listings = getListingsByCategory('food-drink');

  return (
    <CategoryPageTemplate
      title="Food & Drink in Lincolnshire"
      description="Discover the best pubs, restaurants, cafés, farm shops, afternoon tea spots and Sunday roast venues across Lincolnshire. From dog-friendly pubs with beer gardens to family-friendly restaurants near the coast."
      subcategories={category.subcategories || []}
      subcategoryLinks={{ 'Dog-friendly pubs': '/dog-friendly' }}
      listings={listings}
      faqs={foodDrinkFaqs}
      breadcrumbLabel="Food & Drink"
      ctaTitle="Run a food or drink business in Lincolnshire?"
      ctaDescription="Add your pub, restaurant, café or farm shop to the directory and help visitors find you."
      ctaButtonText="Add your venue"
      ctaButtonHref="/add-your-business"
    />
  );
}
