import type { Metadata } from 'next';
import Link from 'next/link';
import { caravanParkGuides, getFeaturedCaravanParkGuides } from '@/data/caravanParkGuides';
import CaravanParkLandingHero from '@/components/caravan-parks/CaravanParkLandingHero';
import CaravanParkLocationGrid from '@/components/caravan-parks/CaravanParkLocationGrid';
import CaravanParkEditorialNote from '@/components/caravan-parks/CaravanParkEditorialNote';
import CaravanParkDisclosureBox from '@/components/caravan-parks/CaravanParkDisclosureBox';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import SectionHeader from '@/components/SectionHeader';
import GuideCard from '@/components/GuideCard';
import { guides } from '@/data/guides';

export const metadata: Metadata = {
  title: 'Caravan Parks & Holiday Parks in Lincolnshire | Lincs Staycation Guide',
  description:
    'Compare caravan parks, holiday parks, touring sites, lodges, glamping stays and family-friendly coastal parks across Lincolnshire.',
  alternates: { canonical: '/caravan-parks' },
  openGraph: {
    title: 'Caravan Parks & Holiday Parks in Lincolnshire',
    description:
      'Compare caravan parks, holiday parks, touring sites, lodges, glamping stays and family-friendly coastal parks across Lincolnshire.',
    url: 'https://lincsstaycationguide.co.uk/caravan-parks',
    type: 'website',
  },
};

const LANDING_FAQS = [
  {
    question: 'How are these caravan park guides organised?',
    answer:
      'Each guide focuses on one Lincolnshire location and compares curated holiday park, caravan park, touring, glamping and lodge options in and around that area. Some entries are slightly outside the town and are clearly labelled.',
  },
  {
    question: 'Are these rankings or paid placements?',
    answer:
      'No. These are curated research pages, not paid rankings. Sponsored placements will be clearly labelled when introduced. Editorial notes are intended to help readers compare practical options.',
  },
  {
    question: 'Can I add my caravan park or holiday park?',
    answer:
      'Yes. If you operate a caravan park, holiday park, lodge retreat, touring site or glamping business in Lincolnshire, you can submit your business through the Add Your Business page. Submission does not guarantee publication — every listing is reviewed editorially.',
  },
  {
    question: 'How often are the guides updated?',
    answer:
      'Each location guide shows a "last updated" date. We aim to review every guide at least twice a year, but facilities, prices and pet policies can change at any time — always confirm details with each park before booking.',
  },
  {
    question: 'Do you handle bookings?',
    answer:
      'No. Lincs Staycation Guide is a directory and editorial guide, not a booking platform. Links go to the official park website or a recognised source — bookings are made directly with the park.',
  },
];

export default function CaravanParksLandingPage() {
  const featured = getFeaturedCaravanParkGuides(5);
  const allGuides = caravanParkGuides;

  // Related editorial guides from the existing /blog data, if any match
  const relatedEditorial = guides.filter((g) =>
    ['Coast', 'Stays', 'Family'].includes(g.category)
  ).slice(0, 3);

  // ItemList JSON-LD for all 16 caravan park guides
  const jsonLdItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Caravan Parks & Holiday Parks in Lincolnshire',
    description:
      'Curated caravan park, holiday park, touring site and lodge guides for 16 Lincolnshire locations.',
    numberOfItems: allGuides.length,
    itemListElement: allGuides.map((g, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://lincsstaycationguide.co.uk/caravan-parks/${g.slug}`,
      name: g.title,
    })),
  };

  const jsonLdBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://lincsstaycationguide.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Caravan Parks', item: 'https://lincsstaycationguide.co.uk/caravan-parks' },
    ],
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: LANDING_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      <CaravanParkLandingHero />

      {/* Intro SEO copy */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-charcoal-muted leading-relaxed mb-4">
            Whether you are planning a family seaside break, a quiet touring holiday, a dog-friendly countryside escape or a lodge stay with extra comfort, this guide helps you compare caravan parks and holiday parks across Lincolnshire.
          </p>
          <p className="text-lg text-charcoal-muted leading-relaxed mb-6">
            From the Lincolnshire Coast to the Wolds, market towns, countryside villages and city breaks near Lincoln, browse practical location-based guides and check directly with each park before booking.
          </p>
          <Link
            href="/caravan-parks/booking"
            className="inline-flex items-center gap-2 bg-sage text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-sage-dark transition-colors"
          >
            See parks with booking options →
          </Link>
        </div>
      </section>

      {/* Featured guides strip */}
      <section className="py-10 sm:py-14 bg-cream/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Popular caravan park guides"
            subtitle="Some of our most-searched Lincolnshire locations for caravan and holiday park breaks."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {featured.map((g) => (
              <Link
                key={g.id}
                href={`/caravan-parks/${g.slug}`}
                className="group bg-white rounded-xl border border-cream-dark/60 p-4 hover:border-sage/40 hover:shadow transition-all"
              >
                <span className="block text-2xl mb-2" aria-hidden="true">
                  {g.regionType === 'Coast' ? '🌊' : g.regionType === 'City' ? '🏛️' : g.regionType === 'Wolds' ? '⛰️' : g.regionType === 'Fens' ? '🌾' : '🌿'}
                </span>
                <h3 className="font-heading text-sm font-semibold text-charcoal group-hover:text-sage transition-colors leading-snug">
                  Best Caravan Parks near {g.location}
                </h3>
                <span className="text-xs text-charcoal-muted block mt-1">{g.parks.length} options</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All locations grid (with search/filter) */}
      <CaravanParkLocationGrid guides={allGuides} />

      {/* Editorial */}
      <CaravanParkEditorialNote
        text="Our caravan park guides are curated research pages designed to help visitors compare useful options. They are not paid rankings. Facilities, prices, pet policies and availability can change, so always check with the official park website before making travel plans."
        showCorrectionsCta={false}
      />

      {/* Disclosure */}
      <CaravanParkDisclosureBox />

      {/* Related editorial guides */}
      {relatedEditorial.length > 0 && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Related Lincolnshire guides" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {relatedEditorial.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <FAQSection faqs={LANDING_FAQS} />

      {/* Business CTA */}
      <CTASection
        title="Run a holiday park, campsite, lodge retreat or touring site in Lincolnshire?"
        description="Add your business to Lincs Staycation Guide and help visitors discover your accommodation."
        buttonText="Add Your Business"
        buttonHref="/add-your-business"
      />
    </>
  );
}
