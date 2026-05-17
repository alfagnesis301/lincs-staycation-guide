import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import ListingCard from '@/components/ListingCard';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import { coastalAreas } from '@/data/towns';
import { listings } from '@/data/listings';
import { coastFaqs } from '@/data/faqs';
import { publishedGuides } from '@/data/guides';
import GuideCard from '@/components/GuideCard';
import PopularCaravanGuidesStrip from '@/components/caravan-parks/PopularCaravanGuidesStrip';

export const metadata: Metadata = {
  title: 'Lincolnshire Coast Guide | Skegness, Mablethorpe, Beaches & Seaside Breaks',
  description: 'Plan coastal days out, seaside breaks, beach walks and family holidays across the Lincolnshire Coast. Skegness, Mablethorpe, Sutton-on-Sea, Chapel St Leonards, Ingoldmells and quieter coastal spots.',
  keywords: ['Lincolnshire coast', 'Skegness beach', 'Mablethorpe beach', 'seaside holidays Lincolnshire', 'best beaches Lincolnshire', 'dog-friendly beaches near Skegness', 'family holidays Skegness', 'quiet beaches Lincolnshire'],
  openGraph: {
    title: 'Lincolnshire Coast Guide | Beaches & Seaside Breaks',
    description: 'Plan coastal days out, seaside breaks and family holidays across the Lincolnshire Coast.',
  },
  alternates: { canonical: '/lincolnshire-coast' },
};

export default function LincolnshireCoastPage() {
  const coastListings = listings.filter((l) => l.area === 'Lincolnshire Coast');
  const coastGuides = publishedGuides.filter((g) => g.category === 'Coast');

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient-coast py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Lincolnshire Coast' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Lincolnshire Coast Guide
          </h1>
          <p className="text-lg text-charcoal-muted leading-relaxed max-w-3xl">
            Plan coastal days out and seaside breaks across Skegness, Mablethorpe, Sutton-on-Sea, Chapel St Leonards, Ingoldmells and quieter coastal spots.
          </p>
        </div>
      </section>

      {/* Coastal Areas */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Explore the coast"
            subtitle="Discover seaside towns and coastal destinations along the Lincolnshire Coast."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coastalAreas.map((area) => (
              <Link key={area.slug} href={`/town-guides/${area.slug}`} className="group block">
                <div className="card-hover bg-white rounded-2xl border border-cream-dark/60 overflow-hidden h-full">
                  <div className="h-28 bg-gradient-to-br from-coast/15 to-cream flex items-center justify-center">
                    <span className="text-sm font-semibold uppercase tracking-wide text-coast" aria-hidden="true">Coast</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-base font-semibold text-charcoal group-hover:text-coast transition-colors mb-1">
                      {area.name}
                    </h3>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coast Listings */}
      {coastListings.length > 0 && (
        <section className="py-12 sm:py-16 bg-cream/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Coastal listings" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {coastListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coast Guides */}
      {coastGuides.length > 0 && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Coastal guides" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {coastGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      )}

      <PopularCaravanGuidesStrip
        ids={['skegness', 'mablethorpe', 'chapel-st-leonards', 'sutton-on-sea']}
        title="Popular coastal caravan park guides"
        subtitle="Compare curated holiday parks, touring sites and lodges along the Lincolnshire Coast."
        background="white"
      />

      <FAQSection faqs={coastFaqs} />

      <CTASection
        title="Run a coastal business in Lincolnshire?"
        description="Add your seaside accommodation, café, attraction or activity to the directory."
        buttonText="Add Your Business"
        buttonHref="/add-your-business"
        variant="coast"
      />
    </>
  );
}
