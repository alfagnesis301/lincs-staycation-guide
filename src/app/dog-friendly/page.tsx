import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import ListingCard from '@/components/ListingCard';
import GuideCard from '@/components/GuideCard';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import { getListingsByTag } from '@/data/listings';
import { publishedGuides } from '@/data/guides';
import { dogFriendlyFaqs } from '@/data/faqs';
import PopularCaravanGuidesStrip from '@/components/caravan-parks/PopularCaravanGuidesStrip';

export const metadata: Metadata = {
  title: 'Dog-Friendly Lincolnshire | Stays, Pubs, Walks, Beaches & Days Out',
  description: 'Plan dog-friendly stays, pubs, walks, beaches and days out across Lincolnshire, with checks for current pet policies before travelling.',
  keywords: ['dog-friendly Lincolnshire', 'dog-friendly beaches near Skegness', 'dog-friendly pubs Lincolnshire', 'pet-friendly holiday cottages Lincolnshire', 'dog walks Lincolnshire Wolds', 'dog-friendly days out Lincolnshire'],
  openGraph: {
    title: 'Dog-Friendly Lincolnshire | Stays, Pubs, Walks & Beaches',
    description: 'Plan dog-friendly stays, pubs, walks, beaches and days out across Lincolnshire with current policy checks.',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  alternates: { canonical: '/dog-friendly' },
};

export default function DogFriendlyPage() {
  const dogListings = getListingsByTag('Dog-friendly');
  const dogGuides = publishedGuides.filter((g) => g.category === 'Dog-Friendly');

  const sections = [
    'Dog-friendly places to stay',
    'Dog-friendly pubs',
    'Dog-friendly walks',
    'Dog-friendly beaches',
    'Dog-friendly days out',
  ];

  return (
    <>
      <section className="hero-gradient-sage py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Dog-Friendly' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Dog-Friendly Lincolnshire
          </h1>
          <p className="text-lg text-charcoal-muted leading-relaxed max-w-3xl">
            Find dog-friendly stays, pubs, walks, beaches and days out across Lincolnshire.
          </p>
        </div>
      </section>

      {/* Section links */}
      <section className="py-8 bg-white border-b border-cream-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <span key={section} className="badge badge-sage">{section}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="py-12 sm:py-16 bg-cream/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Dog-friendly listings"
            subtitle="Places across Lincolnshire that welcome your four-legged friend."
          />
          {dogListings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {dogListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-cream-dark/40">
              <p className="text-charcoal-muted max-w-xl mx-auto leading-relaxed">
                We are building this section with verified dog-friendly pubs, stays, walks and attractions. Pet policies change frequently, so each entry is checked before publication. Browse our caravan park guides below for dog-friendly options in the meantime.
              </p>
              <a href="/add-your-business" className="mt-4 inline-block text-sage font-medium hover:text-sage-dark underline">
                Add a dog-friendly business
              </a>
            </div>
          )}
        </div>
      </section>

      {dogGuides.length > 0 && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Dog-friendly guides" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {dogGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      )}

      <PopularCaravanGuidesStrip
        ids={['louth', 'boston', 'spalding', 'lincoln', 'woodhall-spa']}
        title="Dog-friendly caravan park guides"
        subtitle="Caravan park location guides where dog-friendly options feature prominently. Always confirm pet policies with each park."
      />

      <FAQSection faqs={dogFriendlyFaqs} />

      <CTASection
        title="Run a dog-friendly business?"
        description="Add your dog-friendly pub, accommodation, walk or attraction to the directory."
        buttonText="Add Your Business"
        buttonHref="/add-your-business"
      />
    </>
  );
}
