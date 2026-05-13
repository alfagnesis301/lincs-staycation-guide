import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import SectionHeader from '@/components/SectionHeader';
import CaravanParkDisclosureBox from '@/components/caravan-parks/CaravanParkDisclosureBox';
import CaravanParkEditorialNote from '@/components/caravan-parks/CaravanParkEditorialNote';
import {
  getPlacesToStayGuideBySlug,
  getRelatedPlacesToStayGuides,
  type PlacesToStayListing,
  placesToStayGuides,
} from '@/data/placesToStayGuides';

const SITE_URL = 'https://lincs-staycation-guide.netlify.app';

interface PlacesToStayLocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return placesToStayGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PlacesToStayLocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPlacesToStayGuideBySlug(slug);
  if (!guide) return {};

  const title =
    guide.id === 'boston'
      ? 'Places to Stay in Boston | Hotels, Inns & Guest Accommodation'
      : `Places to Stay in ${guide.location} | Hotels, B&Bs & Accommodation`;
  const description =
    guide.id === 'boston'
      ? 'Compare hotels, inns, guest accommodation and Booking.com-ready places to stay in Boston, Lincolnshire, for heritage breaks, business trips and practical Fenland stays.'
      : `Compare curated places to stay in ${guide.location}, including hotels, B&Bs, inns, cottages and practical accommodation options for Lincolnshire breaks.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${guide.href}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${guide.href}`,
      type: 'article',
    },
  };
}

function getBookingHref(option: PlacesToStayListing) {
  return option.affiliateUrl ?? option.bookingUrl;
}

function BookingAction({ option, compact = false }: { option: PlacesToStayListing; compact?: boolean }) {
  const bookingHref = getBookingHref(option);

  if (bookingHref) {
    return (
      <a
        href={bookingHref}
        target="_blank"
        rel="sponsored nofollow noopener"
        className={compact ? 'text-sm font-semibold text-sage hover:text-sage-dark' : 'btn-primary text-sm'}
      >
        {option.affiliateUrl ? 'Check availability' : 'View on Booking.com'}
      </a>
    );
  }

  if (option.officialWebsiteUrl) {
    return (
      <a
        href={option.officialWebsiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={compact ? 'text-sm font-semibold text-sage hover:text-sage-dark' : 'btn-secondary text-sm'}
      >
        Visit official website
      </a>
    );
  }

  return <span className="text-xs text-charcoal-muted">Booking link coming soon</span>;
}

export default async function PlacesToStayLocationPage({ params }: PlacesToStayLocationPageProps) {
  const { slug } = await params;
  const guide = getPlacesToStayGuideBySlug(slug);
  if (!guide) notFound();

  const related = getRelatedPlacesToStayGuides(guide.slug, 5);
  const url = `${SITE_URL}${guide.href}`;

  const jsonLdCollection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: guide.h1,
    description: guide.description,
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
    numberOfItems: guide.options.length,
    itemListElement: guide.options.map((option, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: option.name,
      description: option.bestFor,
      ...(getBookingHref(option) ? { url: getBookingHref(option) } : {}),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }} />

      <section className="hero-gradient py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Places to Stay', href: '/places-to-stay' },
              { label: guide.h1 },
            ]}
          />

          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="badge badge-coast">{guide.regionType}</span>
              <span className="text-sm font-medium text-charcoal-muted">Last updated: {guide.lastUpdated}</span>
            </div>
            <h1 className="font-heading text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
              {guide.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-charcoal-muted">{guide.intro}</p>
            <p className="mt-3 text-base font-medium text-sage">{guide.subtitle}</p>
            <p className="mt-4 text-sm font-medium text-charcoal">
              <span className="text-charcoal-muted">Best for:</span> {guide.bestFor}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={`Quick comparison for ${guide.location}`}
            subtitle={
              guide.options.length > 0
                ? `${guide.options.length} verified hotel-style accommodation options with source-linked details.`
                : 'Verified hotel-style listings are being reviewed before publication.'
            }
          />
          {guide.options.length > 0 ? (
            <div className="overflow-hidden rounded-2xl border border-cream-dark/60 bg-white">
              <div className="hidden grid-cols-[1.1fr_0.7fr_1.2fr_0.9fr_0.8fr] gap-4 border-b border-cream-dark/60 bg-cream/50 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-charcoal-muted lg:grid">
                <span>Accommodation</span>
                <span>Type</span>
                <span>Best for</span>
                <span>Area</span>
                <span>Booking option</span>
              </div>
              <div className="divide-y divide-cream-dark/50">
                {guide.options.map((option) => (
                  <div
                    key={option.id}
                    className="grid gap-3 px-5 py-4 text-sm lg:grid-cols-[1.1fr_0.7fr_1.2fr_0.9fr_0.8fr] lg:gap-4"
                  >
                    <div>
                      <h2 className="font-heading font-semibold text-charcoal lg:text-sm">{option.name}</h2>
                      <div className="mt-2 flex flex-wrap gap-1.5 lg:hidden">
                        {option.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="badge bg-cream/60 text-[10px] text-charcoal-muted">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-charcoal-muted">{option.type}</p>
                    <p className="text-charcoal-muted">{option.bestFor}</p>
                    <p className="text-charcoal-muted">{option.areaNote}</p>
                    <div>
                      <BookingAction option={option} compact />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-cream-dark/60 bg-cream/40 p-6">
              <h2 className="font-heading text-xl font-semibold text-charcoal">Accommodation listings under review</h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">
                This location page is not using caravan parks or campsites as filler. Hotel, B&amp;B, guest house, inn,
                apartment and cottage listings will be added here only after Booking.com or official source checks.
              </p>
            </div>
          )}
        </div>
      </section>

      {guide.options.length > 0 && (
        <section className="bg-cream/20 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title={`Curated places to stay in and around ${guide.location}`}
              subtitle="No invented ratings, prices, reviews or booking claims. Check the booking platform or provider directly before planning."
            />
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
              {guide.options.map((option) => (
                <article
                  key={option.id}
                  id={option.id}
                  className="scroll-mt-24 rounded-2xl border border-cream-dark/60 bg-white p-5 sm:p-6"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="badge badge-coast text-[10px]">{option.type}</span>
                    <span className="text-xs text-charcoal-muted">{option.areaNote}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold leading-snug text-charcoal sm:text-xl">
                    {option.name}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-charcoal">
                    <span className="font-normal text-charcoal-muted">Best for:</span> {option.bestFor}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{option.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {option.tags.map((tag) => (
                      <span
                        key={tag}
                        className="badge border border-cream-dark/40 bg-cream/60 text-[11px] text-charcoal-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-cream-dark/40 pt-4">
                    <p className="text-xs text-charcoal-muted">
                      Source: <span className="text-charcoal">{option.sourceUrls[0]?.label ?? 'Source under review'}</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <BookingAction option={option} />
                      {option.officialWebsiteUrl && option.bookingUrl && (
                        <a
                          href={option.officialWebsiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-sm"
                        >
                          Visit official website
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {guide.id === 'boston' && (
        <div className="bg-white py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="rounded-2xl border border-cream-dark/60 bg-cream/40 p-5 text-sm text-charcoal-muted">
              Looking for caravan parks, touring sites or holiday parks near Boston?{' '}
              <Link href="/caravan-parks/boston" className="font-semibold text-sage hover:text-sage-dark">
                View Caravan Parks near Boston
              </Link>
              .
            </p>
          </div>
        </div>
      )}

      <CaravanParkEditorialNote
        text="Our places to stay guides are curated research pages designed to help visitors compare useful accommodation options. They are not paid rankings. Facilities, prices, availability, pet policies and booking options can change, so always check directly with the accommodation provider or booking platform before making travel plans."
        showCorrectionsCta
      />

      <CaravanParkDisclosureBox />

      <FAQSection faqs={guide.faqs} />

      <section className="bg-cream/40 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading mb-6 text-2xl font-bold text-charcoal">Related places to stay guides</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {related.map((relatedGuide) => (
              <Link
                key={relatedGuide.id}
                href={relatedGuide.href}
                className="rounded-xl border border-cream-dark/60 bg-white p-4 text-sm font-semibold text-charcoal transition-colors hover:border-sage/50 hover:text-sage"
              >
                Places to Stay in {relatedGuide.location}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Run a hotel, B&B, holiday cottage, inn or guest accommodation near ${guide.location}?`}
        description="Add your business to Lincs Staycation Guide and help visitors discover your accommodation."
        buttonText="Add Your Business"
        buttonHref="/add-your-business"
      />
    </>
  );
}
