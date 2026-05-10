import { notFound } from 'next/navigation';
import Link from 'next/link';
import { listings } from '@/data/listings';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import AdPlaceholder from '@/components/AdPlaceholder';

interface ListingPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return listings.map((listing) => ({ id: listing.id }));
}

export async function generateMetadata({ params }: ListingPageProps) {
  const { id } = await params;
  const listing = listings.find((l) => l.id === id);
  if (!listing) return {};

  return {
    title: `${listing.name} | ${listing.category} in ${listing.town}, Lincolnshire`,
    description: listing.description,
    alternates: { canonical: `/places/${id}` },
  };
}

const categoryGradients: Record<string, { from: string; to: string; emoji: string }> = {
  'places-to-stay': { from: 'from-sage/10', to: 'to-cream', emoji: '🏡' },
  'food-drink': { from: 'from-sand-light/60', to: 'to-cream', emoji: '🍽️' },
  'things-to-do': { from: 'from-coast/10', to: 'to-cream', emoji: '🎯' },
};
const defaultGradient = { from: 'from-cream', to: 'to-sand-light', emoji: '📍' };

const categoryLabels: Record<string, string> = {
  'places-to-stay': 'Places to Stay',
  'food-drink': 'Food & Drink',
  'things-to-do': 'Things to Do',
};

export default async function ListingPage({ params }: ListingPageProps) {
  const { id } = await params;
  const listing = listings.find((l) => l.id === id);
  if (!listing) notFound();

  const gradient = categoryGradients[listing.categorySlug] ?? defaultGradient;
  const categoryLabel = categoryLabels[listing.categorySlug] ?? 'Listings';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: listing.name,
    description: listing.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: listing.town,
      addressRegion: 'Lincolnshire',
      addressCountry: 'GB',
    },
    ...(listing.priceRange && listing.priceRange !== 'Free'
      ? { priceRange: listing.priceRange }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="hero-gradient py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: categoryLabel, href: `/${listing.categorySlug}` },
            { label: listing.name },
          ]} />

          <div className="flex items-start gap-4 mb-4">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center flex-shrink-0 border border-cream-dark/40`}>
              <span className="text-3xl" role="img" aria-label={listing.category}>{gradient.emoji}</span>
            </div>
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
                {listing.name}
              </h1>
              <div className="flex items-center gap-2 mt-1 text-sm text-charcoal-muted">
                <svg className="w-4 h-4 text-coast" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{listing.town}, {listing.area}</span>
                <span className="text-cream-dark">·</span>
                <span className="badge badge-sage text-[11px]">{listing.category}</span>
                {listing.isSample && (
                  <span className="badge badge-sample text-[11px]">Sample listing</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 lg:gap-12">

            {/* Main column */}
            <div className="md:col-span-3 space-y-8">
              <div>
                <h2 className="font-heading text-xl font-semibold text-charcoal mb-3">About</h2>
                <p className="text-charcoal-muted leading-relaxed text-base">{listing.description}</p>
              </div>

              {listing.features.length > 0 && (
                <div>
                  <h2 className="font-heading text-xl font-semibold text-charcoal mb-3">Key features</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {listing.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-charcoal">
                        <svg className="w-4 h-4 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {listing.tags.length > 0 && (
                <div>
                  <h2 className="font-heading text-xl font-semibold text-charcoal mb-3">Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    {listing.tags.map((tag) => (
                      <span key={tag} className="badge badge-coast">{tag}</span>
                    ))}
                  </div>
                </div>
              )}

              {listing.isSample && (
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 text-sm text-orange-800">
                  <strong>Sample listing:</strong> This is a demonstration entry showing how business profiles will appear on the directory. It does not represent a real business.{' '}
                  <Link href="/add-your-business" className="underline font-medium hover:text-orange-900">
                    Add your real business here.
                  </Link>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2 space-y-5">
              <div className="bg-cream/50 rounded-2xl p-5 border border-cream-dark/40">
                <h3 className="font-heading text-base font-semibold text-charcoal mb-4">Listing details</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-charcoal-muted">Category</dt>
                    <dd className="font-medium text-charcoal text-right">{listing.category}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-charcoal-muted">Town</dt>
                    <dd className="font-medium text-charcoal">{listing.town}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-charcoal-muted">Area</dt>
                    <dd className="font-medium text-charcoal text-right">{listing.area}</dd>
                  </div>
                  {listing.priceRange && (
                    <div className="flex justify-between">
                      <dt className="text-charcoal-muted">Price range</dt>
                      <dd className="font-medium text-charcoal">{listing.priceRange}</dd>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <dt className="text-charcoal-muted">County</dt>
                    <dd className="font-medium text-charcoal">Lincolnshire</dd>
                  </div>
                </dl>
              </div>

              <Link
                href="/add-your-business"
                className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-sage hover:bg-sage-dark rounded-xl transition-colors"
              >
                List your business here
              </Link>

              <AdPlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-6 bg-cream/30 border-t border-cream-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${listing.categorySlug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-sage hover:text-sage-dark transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to {categoryLabel}
          </Link>
        </div>
      </section>

      <CTASection
        title="Own a business in Lincolnshire?"
        description="Add your business to Lincs Staycation Guide and help visitors discover what you offer."
        buttonText="Add Your Business"
        buttonHref="/add-your-business"
      />
    </>
  );
}
