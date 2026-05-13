import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import GuideCard from '@/components/GuideCard';
import SectionHeader from '@/components/SectionHeader';
import CaravanParkDisclosureBox from '@/components/caravan-parks/CaravanParkDisclosureBox';
import CaravanParkEditorialNote from '@/components/caravan-parks/CaravanParkEditorialNote';
import PlacesToStayLocationGrid from '@/components/places-to-stay/PlacesToStayLocationGrid';
import {
  getFeaturedPlacesToStayGuides,
  placesToStayGuides,
  placesToStayLandingFaqs,
} from '@/data/placesToStayGuides';
import { guides } from '@/data/guides';

const SITE_URL = 'https://lincsstaycationguide.co.uk';

export const metadata: Metadata = {
  title: 'Places to Stay in Lincolnshire | Hotels, B&Bs, Cottages & Glamping',
  description:
    'Browse places to stay across Lincolnshire, including hotels, B&Bs, holiday cottages, inns, lodges, glamping stays and dog-friendly accommodation by town and coast.',
  alternates: { canonical: '/places-to-stay' },
  openGraph: {
    title: 'Places to Stay in Lincolnshire | Hotels, B&Bs, Cottages & Glamping',
    description:
      'Browse places to stay across Lincolnshire, including hotels, B&Bs, holiday cottages, inns, lodges, glamping stays and dog-friendly accommodation by town and coast.',
    url: `${SITE_URL}/places-to-stay`,
    type: 'website',
  },
};

export default function PlacesToStayPage() {
  const featured = getFeaturedPlacesToStayGuides();
  const relatedEditorial = guides.filter((guide) =>
    ['Stays', 'Coast', 'Family'].includes(guide.category)
  ).slice(0, 3);

  const jsonLdItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Places to Stay in Lincolnshire',
    description:
      'Curated places to stay guides by Lincolnshire location, covering cities, coast, market towns, countryside, the Wolds and the fens.',
    numberOfItems: placesToStayGuides.length,
    itemListElement: placesToStayGuides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${SITE_URL}${guide.href}`,
      name: guide.title,
    })),
  };

  const jsonLdBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Places to Stay', item: `${SITE_URL}/places-to-stay` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-coast/5 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/2 translate-y-1/2 rounded-full bg-sage/5 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge badge-coast mb-4 inline-block">Lincolnshire accommodation</span>
            <h1 className="font-heading mb-5 text-4xl font-bold leading-[1.1] text-charcoal sm:text-5xl lg:text-6xl">
              Places to Stay in <span className="text-sage">Lincolnshire</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-charcoal-muted sm:text-xl">
              Compare hotels, B&amp;Bs, holiday cottages, inns, lodges, glamping stays and practical accommodation
              options across Lincolnshire&apos;s cities, coast, market towns and countryside.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#by-location"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sage px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-sage/20 transition-colors hover:bg-sage-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
              >
                Browse by location
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <Link
                href="/add-your-business"
                className="inline-flex items-center justify-center rounded-xl border border-cream-dark bg-white px-6 py-3.5 text-base font-semibold text-charcoal transition-colors hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
              >
                Add your accommodation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-lg leading-relaxed text-charcoal-muted">
            This hub is designed to help visitors compare Lincolnshire accommodation by location, travel style and the
            kind of base that suits the trip: a city break in Lincoln, a family week on the coast, a Wolds walking stay
            or a quiet countryside weekend.
          </p>
          <p className="text-lg leading-relaxed text-charcoal-muted">
            The live location guides currently prioritise researched and source-linked accommodation options already
            reviewed in the project, especially holiday parks, lodges, touring sites, camping and glamping. Broader
            hotel, B&amp;B, inn and cottage coverage should be added only when verified data is available.
          </p>
        </div>
      </section>

      <section className="bg-cream/40 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Popular places to stay guides"
            subtitle="Frequently searched Lincolnshire locations for coast, city, countryside and market town breaks."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {featured.map((guide) => (
              <Link
                key={guide.id}
                href={guide.href}
                className="group rounded-xl border border-cream-dark/60 bg-white p-4 transition-all hover:border-sage/40 hover:shadow"
              >
                <span className="mb-2 block text-2xl" aria-hidden="true">
                  {guide.regionType === 'Coast' ? '🌊' : guide.regionType === 'City' ? '🏛️' : guide.regionType === 'Wolds' ? '⛰️' : guide.regionType === 'Fens' ? '🌾' : '🌿'}
                </span>
                <h2 className="font-heading text-sm font-semibold leading-snug text-charcoal transition-colors group-hover:text-sage">
                  Places to Stay in {guide.location}
                </h2>
                <span className="mt-1 block text-xs text-charcoal-muted">{guide.options.length} curated options</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PlacesToStayLocationGrid guides={placesToStayGuides} />

      <CaravanParkEditorialNote
        text="Our places to stay guides are curated research pages designed to help visitors compare useful accommodation options. They are not paid rankings. Facilities, prices, availability, pet policies and booking options can change, so always check directly with the accommodation provider or booking platform before making travel plans."
        showCorrectionsCta={false}
      />

      <CaravanParkDisclosureBox />

      {relatedEditorial.length > 0 && (
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Related Lincolnshire guides" />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {relatedEditorial.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={placesToStayLandingFaqs} />

      <CTASection
        title="Run a hotel, B&B, holiday cottage, lodge, campsite or guest accommodation in Lincolnshire?"
        description="Add your business to Lincs Staycation Guide and help visitors discover your accommodation."
        buttonText="Add Your Business"
        buttonHref="/add-your-business"
      />
    </>
  );
}
