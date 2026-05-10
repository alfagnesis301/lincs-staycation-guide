import type { Metadata } from 'next';
import CategoryPageTemplate from '@/components/CategoryPageTemplate';
import PopularCaravanGuidesStrip from '@/components/caravan-parks/PopularCaravanGuidesStrip';
import SectionHeader from '@/components/SectionHeader';
import { StayListingCard } from '@/components/town-guides/GuideListingCards';
import { getListingsByCategory } from '@/data/listings';
import { guides } from '@/data/guides';
import { placesToStayFaqs } from '@/data/faqs';
import { mainCategories } from '@/data/categories';
import { lincolnGuide } from '@/data/lincolnGuide';

export const metadata: Metadata = {
  title: 'Places to Stay in Lincolnshire | Hotels, Cottages, Caravan Parks, Glamping & B&Bs',
  description: 'Find the best hotels, holiday cottages, caravan parks, campsites, glamping stays and B&Bs across Lincolnshire. Dog-friendly stays, family-friendly accommodation and affordable countryside breaks.',
  keywords: ['places to stay in Lincolnshire', 'Lincolnshire holiday cottages', 'caravan parks near Skegness', 'dog-friendly stays Lincolnshire', 'affordable countryside stays', 'glamping Lincolnshire', 'family-friendly accommodation Lincolnshire'],
  openGraph: {
    title: 'Places to Stay in Lincolnshire | Hotels, Cottages & Caravan Parks',
    description: 'Find the best hotels, holiday cottages, caravan parks, campsites, glamping stays and B&Bs across Lincolnshire.',
  },
  alternates: { canonical: '/places-to-stay' },
};

export default function PlacesToStayPage() {
  const category = mainCategories.find((c) => c.slug === 'places-to-stay')!;
  const listings = getListingsByCategory('places-to-stay');
  const relatedGuides = guides.filter((g) => g.category === 'Stays');

  return (
    <>
      <CategoryPageTemplate
        title="Places to Stay in Lincolnshire"
        description="Find the best hotels, holiday cottages, caravan parks, campsites, glamping spots and B&Bs for your next Lincolnshire break. From dog-friendly countryside stays to affordable seaside holiday parks."
        subcategories={category.subcategories || []}
        subcategoryLinks={{
          'Caravan parks': '/caravan-parks',
          'Dog-friendly stays': '/dog-friendly',
        }}
        listings={listings}
        guides={relatedGuides}
        faqs={placesToStayFaqs}
        breadcrumbLabel="Places to Stay"
        ctaTitle="List your accommodation"
        ctaDescription="Help visitors find your hotel, cottage, caravan park or guest house by adding your business to the directory."
        ctaButtonText="List your accommodation"
        ctaButtonHref="/add-your-business"
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Places to Stay in Lincoln"
            subtitle="Booking-ready Lincoln accommodation candidates for cathedral city breaks, historic centre visits, weekend stays and practical access to the wider Lincolnshire area."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {lincolnGuide.placesToStay.map((listing) => (
              <StayListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular caravan park guides */}
      <PopularCaravanGuidesStrip
        ids={['skegness', 'mablethorpe', 'lincoln', 'chapel-st-leonards', 'sutton-on-sea']}
        title="Popular caravan park guides"
        subtitle="Compare curated holiday parks, touring sites and lodges across Lincolnshire."
      />
    </>
  );
}
