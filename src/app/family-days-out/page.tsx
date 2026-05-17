import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import ListingCard from '@/components/ListingCard';
import GuideCard from '@/components/GuideCard';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import { getListingsByTag } from '@/data/listings';
import { publishedGuides } from '@/data/guides';
import { familyFaqs } from '@/data/faqs';
import PopularCaravanGuidesStrip from '@/components/caravan-parks/PopularCaravanGuidesStrip';

export const metadata: Metadata = {
  title: 'Family Days Out in Lincolnshire | Activities, Attractions, Rainy Day Ideas & Free Days Out',
  description: 'Plan family-friendly activities, attractions, rainy day ideas, free days out, animal parks and weekend adventures across Lincolnshire. Things to do with kids near Lincoln, Skegness and the Wolds.',
  keywords: ['family days out Lincolnshire', 'things to do with kids Lincolnshire', 'rainy day activities Lincolnshire', 'free days out Lincolnshire', 'family attractions near Skegness', 'animal parks Lincolnshire', 'family-friendly beaches Lincolnshire'],
  openGraph: {
    title: 'Family Days Out in Lincolnshire | Activities & Attractions',
    description: 'Plan family-friendly activities, attractions, rainy day ideas and free days out across Lincolnshire.',
  },
  robots: { index: false, follow: true },
  alternates: { canonical: '/family-days-out' },
};

export default function FamilyDaysOutPage() {
  const familyListings = getListingsByTag('Family-friendly');
  const familyGuides = publishedGuides.filter((g) => g.category === 'Family');

  const sections = [
    'Outdoor family days out',
    'Rainy day activities',
    'Free things to do',
    'Animal attractions',
    'Beaches with children',
    'Easy weekend ideas',
  ];

  return (
    <>
      <section className="hero-gradient py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Family Days Out' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Family Days Out in Lincolnshire
          </h1>
          <p className="text-lg text-charcoal-muted leading-relaxed max-w-3xl">
            Plan family-friendly activities, attractions, rainy day ideas, free days out and weekend adventures across Lincolnshire.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-cream-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <span key={section} className="badge badge-sage">{section}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-cream/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Family-friendly listings"
            subtitle="Activities, attractions and days out suitable for families with children."
          />
          {familyListings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {familyListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-cream-dark/40">
              <p className="text-charcoal-muted max-w-xl mx-auto leading-relaxed">
                We are researching family attractions across Lincolnshire and adding them as each one is verified. In the meantime, explore the location guides below or our caravan park reviews for family-friendly stays.
              </p>
              <a href="/add-your-business" className="mt-4 inline-block text-sage font-medium hover:text-sage-dark underline">
                Add a family attraction
              </a>
            </div>
          )}
        </div>
      </section>

      {familyGuides.length > 0 && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Family guides" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {familyGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      )}

      <PopularCaravanGuidesStrip
        ids={['skegness', 'mablethorpe', 'lincoln', 'sutton-on-sea', 'chapel-st-leonards']}
        title="Family caravan park guides"
        subtitle="Curated holiday parks well suited to family caravan and lodge breaks."
      />

      <FAQSection faqs={familyFaqs} />

      <CTASection
        title="Run a family-friendly attraction or activity?"
        description="Add your family attraction, play centre or activity to the directory."
        buttonText="Add Your Business"
        buttonHref="/add-your-business"
      />
    </>
  );
}
