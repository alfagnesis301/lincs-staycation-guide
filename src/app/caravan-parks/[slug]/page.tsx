import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  caravanParkGuides,
  getCaravanParkGuideBySlug,
  getRelatedCaravanParkGuides,
} from '@/data/caravanParkGuides';
import CaravanParkGuideHero from '@/components/caravan-parks/CaravanParkGuideHero';
import CaravanParkSummaryBox from '@/components/caravan-parks/CaravanParkSummaryBox';
import CaravanParkComparisonTable from '@/components/caravan-parks/CaravanParkComparisonTable';
import CaravanParkFilterChips from '@/components/caravan-parks/CaravanParkFilterChips';
import CaravanParkListingCard from '@/components/caravan-parks/CaravanParkListingCard';
import CaravanParkEditorialNote from '@/components/caravan-parks/CaravanParkEditorialNote';
import CaravanParkDisclosureBox from '@/components/caravan-parks/CaravanParkDisclosureBox';
import RelatedCaravanGuides from '@/components/caravan-parks/RelatedCaravanGuides';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import SectionHeader from '@/components/SectionHeader';

const SITE_URL = 'https://lincs-staycation-guide.co.uk';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caravanParkGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getCaravanParkGuideBySlug(slug);
  if (!guide) return {};

  const url = `${SITE_URL}/caravan-parks/${guide.slug}`;
  return {
    title: guide.seoTitle,
    description: guide.metaDescription,
    alternates: { canonical: `/caravan-parks/${guide.slug}` },
    openGraph: {
      title: guide.seoTitle,
      description: guide.metaDescription,
      url,
      type: 'article',
    },
  };
}

export default async function CaravanParkGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getCaravanParkGuideBySlug(slug);
  if (!guide) notFound();

  const related = getRelatedCaravanParkGuides(guide.slug, 5);
  const url = `${SITE_URL}/caravan-parks/${guide.slug}`;

  // ============== Schema JSON-LD ==============
  const jsonLdBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Caravan Parks', item: `${SITE_URL}/caravan-parks` },
      { '@type': 'ListItem', position: 3, name: guide.h1, item: url },
    ],
  };

  const jsonLdCollection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: guide.h1,
    description: guide.metaDescription,
    url,
    inLanguage: 'en-GB',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Lincs Staycation Guide',
      url: SITE_URL,
    },
  };

  const jsonLdItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: guide.h1,
    numberOfItems: guide.parks.length,
    itemListElement: guide.parks.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      description: p.bestFor,
      ...(p.sourceUrl && !p.needsVerification ? { url: p.sourceUrl } : {}),
    })),
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* 1. Hero with breadcrumbs */}
      <CaravanParkGuideHero guide={guide} />

      {/* 2. Quick summary box */}
      <CaravanParkSummaryBox guide={guide} />

      {/* 3. Comparison table */}
      <CaravanParkComparisonTable parks={guide.parks} />

      {/* 4. Filter chips (visual cues) */}
      <CaravanParkFilterChips filters={guide.filters} />

      {/* 5. Curated listings */}
      <section className="py-12 sm:py-16 bg-cream/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={`Curated caravan and holiday park options near ${guide.location}`}
            subtitle={`${guide.parks.length} curated parks compared`}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            {guide.parks.map((p) => (
              <CaravanParkListingCard key={p.id} listing={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Editorial note + corrections CTA */}
      <CaravanParkEditorialNote text={guide.editorialNote} showCorrectionsCta />

      {/* 7. Disclosure */}
      <CaravanParkDisclosureBox />

      {/* 8. FAQs */}
      <FAQSection faqs={guide.faqs} />

      {/* 9. Business CTA */}
      <CTASection
        title={`Run a holiday park, campsite or accommodation business near ${guide.location}?`}
        description="Add your business to Lincs Staycation Guide and help visitors discover your accommodation, touring pitches, lodges or holiday homes."
        buttonText="Add Your Business"
        buttonHref="/add-your-business"
      />

      {/* 10. Related guides */}
      <RelatedCaravanGuides currentGuide={guide} related={related} />
    </>
  );
}
