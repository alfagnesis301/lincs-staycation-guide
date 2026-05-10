import type { CaravanParkListing } from '@/data/caravanParkGuides';

interface Props {
  listing: CaravanParkListing;
}

const LISTING_TYPE_EMOJI: Record<string, string> = {
  'Caravan park': '🚐',
  'Holiday park': '🏖️',
  'Touring site': '⛺',
  Camping: '🏕️',
  Glamping: '🛖',
  Lodges: '🏡',
  'Holiday home ownership': '🔑',
  Fishing: '🎣',
  'Adults-only': '👤',
  'Family-friendly': '👨‍👩‍👧',
  'Self-catering': '🍳',
  Resort: '🌴',
};

export default function CaravanParkListingCard({ listing }: Props) {
  const primaryType = listing.listingType?.[0];
  const emoji = primaryType ? LISTING_TYPE_EMOJI[primaryType] ?? '📍' : '📍';

  return (
    <article
      id={listing.id}
      className="bg-white rounded-2xl border border-cream-dark/60 p-5 sm:p-6 scroll-mt-24"
    >
      <div className="flex items-start gap-4 mb-3">
        <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center flex-shrink-0 text-2xl" aria-hidden="true">
          {emoji}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-lg sm:text-xl font-semibold text-charcoal leading-snug">
            {listing.name}
          </h3>
          <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
            {listing.featured && (
              <span className="badge badge-sage text-[10px]">Featured</span>
            )}
            {listing.isOutsideLincolnshire && (
              <span className="badge badge-sample text-[10px]">Outside Lincolnshire</span>
            )}
            {listing.listingType?.slice(0, 3).map((lt) => (
              <span key={lt} className="badge badge-coast text-[10px]">{lt}</span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm font-medium text-charcoal mb-2">
        <span className="text-charcoal-muted font-normal">Best for:</span> {listing.bestFor}
      </p>

      <p className="text-sm text-charcoal-muted leading-relaxed mb-4">
        {listing.description}
      </p>

      {listing.locationContext && (
        <p className="text-xs text-charcoal-muted mb-3">
          <strong className="text-charcoal">Location notes:</strong> {listing.locationContext}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 mb-4">
        {listing.tags.map((t) => (
          <span key={t} className="badge text-[11px] bg-cream/60 text-charcoal-muted border border-cream-dark/40">
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-cream-dark/40">
        <p className="text-xs text-charcoal-muted">
          Source: <span className="text-charcoal">{listing.sourceLabel}</span>
        </p>
        {listing.bookingUrl ? (
          <div className="flex flex-col items-end gap-1">
            <a
              href={listing.bookingUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-sage hover:text-sage-dark transition-colors"
            >
              Check availability on Booking
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <span className="text-[11px] text-charcoal-muted">Affiliate link</span>
          </div>
        ) : listing.bookingDeepLinkPending ? (
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-xl bg-cream-dark px-4 py-2 text-sm font-medium text-charcoal-muted"
          >
            Booking link coming soon
          </button>
        ) : listing.needsVerification ? (
          <p className="text-xs text-charcoal-muted italic">
            Source to be verified before publication.
          </p>
        ) : listing.sourceUrl ? (
          <a
            href={listing.sourceUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-sage hover:text-sage-dark transition-colors"
          >
            Visit official website
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        ) : null}
      </div>
    </article>
  );
}
