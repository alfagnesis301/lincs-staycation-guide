import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import BookableParksList from '@/components/caravan-parks/BookableParksList';
import CaravanParkDisclosureBox from '@/components/caravan-parks/CaravanParkDisclosureBox';
import AffiliateDisclosureSmall from '@/components/caravan-parks/AffiliateDisclosureSmall';
import CTASection from '@/components/CTASection';
import {
  bookableCaravanParks,
  hasActiveAffiliateLinks,
  sortParks,
} from '@/data/bookableCaravanParks';
import { getSiteUrl, siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Caravan Parks in Lincolnshire with Booking Options',
  description:
    'Compare caravan parks in Lincolnshire, Skegness, Chapel St Leonards, Woodhall Spa and nearby areas. Find booking options, holiday parks, campsites and family-friendly caravan stays.',
  alternates: { canonical: '/caravan-parks/booking' },
  openGraph: {
    title: 'Caravan Parks in Lincolnshire with Booking Options',
    description:
      'Compare caravan parks, holiday parks, touring sites, lodges and glamping stays across Lincolnshire.',
    url: `${siteConfig.domain}/caravan-parks/booking`,
    type: 'website',
  },
};

export default function BookableCaravanParksPage() {
  const sorted = sortParks(bookableCaravanParks, 'recommended');
  const showAffiliateDisclosure = hasActiveAffiliateLinks();
  const siteUrl = getSiteUrl();

  const jsonLdItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Caravan Parks in Lincolnshire with Booking Options',
    description:
      'Caravan and holiday parks across Lincolnshire, with booking options and visitor-focused tags.',
    numberOfItems: sorted.length,
    itemListElement: sorted.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      ...(p.officialUrl ? { url: p.officialUrl } : {}),
    })),
  };

  const jsonLdBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Caravan Parks',
        item: `${siteUrl}/caravan-parks`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Booking Options',
        item: `${siteUrl}/caravan-parks/booking`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />

      {/* Hero */}
      <section className="hero-gradient-sage py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Caravan Parks', href: '/caravan-parks' },
              { label: 'Booking Options' },
            ]}
          />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Caravan Parks in Lincolnshire with Booking Options
          </h1>
          <p className="text-lg text-charcoal-muted leading-relaxed max-w-3xl">
            Finding a caravan park with easy booking options can save time and
            help visitors compare availability, prices and locations. This guide
            highlights caravan parks in Lincolnshire and nearby coastal areas,
            with clear options for families, touring breaks, lodge stays and
            quieter countryside escapes.
          </p>

          {showAffiliateDisclosure && (
            <div className="mt-5 max-w-3xl">
              <AffiliateDisclosureSmall />
            </div>
          )}
        </div>
      </section>

      {/* List with filters/sort */}
      <BookableParksList />

      {/* Existing site-wide editorial disclosure (kept for trust, not the affiliate banner) */}
      <CaravanParkDisclosureBox />

      <CTASection
        title="Run a caravan park, holiday park or lodge retreat?"
        description="If you operate a Lincolnshire park and would like to be considered for a sponsored or featured listing, get in touch."
        buttonText="Add Your Business"
        buttonHref="/add-your-business"
      />
    </>
  );
}
