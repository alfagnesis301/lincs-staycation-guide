import Link from 'next/link';
import type { Listing } from '@/data/listings';
import GoogleMapsLinkButton from '@/components/GoogleMapsLinkButton';

interface ListingCardProps {
  listing: Listing;
}

/** British-vibe gradient combos mapped by category slug */
const categoryGradients: Record<string, { from: string; to: string; emoji: string }> = {
  'places-to-stay': { from: 'from-sage/10', to: 'to-cream', emoji: '🏡' },
  'food-drink': { from: 'from-sand-light/60', to: 'to-cream', emoji: '🍽️' },
  'things-to-do': { from: 'from-coast/10', to: 'to-cream', emoji: '🎯' },
};

/** Default for unlisted slugs */
const defaultGradient = { from: 'from-cream', to: 'to-sand-light', emoji: '📍' };

export default function ListingCard({ listing }: ListingCardProps) {
  const gradient = categoryGradients[listing.categorySlug] ?? defaultGradient;

  // LocalBusiness JSON-LD schema (only descriptive fields — no fake data)
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
    <div className="card-hover bg-white rounded-2xl border border-cream-dark/60 overflow-hidden h-full flex flex-col">
      {/* JSON-LD for this listing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Visual placeholder — 4:3 aspect ratio, British vibe gradients */}
      <div className={`relative aspect-[4/3] bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center`}>
        <div className="text-center p-4">
          <span className="text-4xl block mb-1" role="img" aria-label={listing.category}>
            {gradient.emoji}
          </span>
          <span className="text-xs text-charcoal-muted font-medium">{listing.category}</span>
        </div>
        {listing.isSample && (
          <span className="absolute top-3 right-3 badge badge-sample text-[11px]">
            Sample listing
          </span>
        )}
        {listing.priceRange && (
          <span className="absolute top-3 left-3 badge badge-sage text-[11px]">
            {listing.priceRange}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading text-lg font-semibold text-charcoal leading-snug">
            {listing.name}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-charcoal-muted mb-3">
          <svg className="w-3.5 h-3.5 text-coast" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{listing.town}, {listing.area}</span>
        </div>

        <p className="text-sm text-charcoal-muted leading-relaxed flex-1 mb-4">
          {listing.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {listing.tags.map((tag) => (
            <span key={tag} className="badge badge-coast text-[11px]">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={`/places/${listing.id}`}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] text-sm font-medium text-sage border border-sage/30 hover:bg-sage hover:text-white rounded-xl transition-all"
          >
            View details
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <GoogleMapsLinkButton
            listing={{
              name: listing.name,
              town: listing.town,
              area: listing.area,
              googleMapsUrl: listing.googleMapsUrl,
              location: listing.location,
            }}
          />
        </div>
      </div>
    </div>
  );
}
