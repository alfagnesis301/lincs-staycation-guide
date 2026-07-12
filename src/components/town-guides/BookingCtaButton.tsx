import VerificationNotice from '@/components/VerificationNotice';
import type { ListingKind } from '@/lib/public-copy';
import { AFFILIATE_REL, withBookingAffiliate } from '@/lib/affiliate';

type BookingCtaButtonProps = {
  bookingUrl?: string;
  bookingDeepLinkPending?: boolean;
  officialUrl?: string;
  verificationKind?: ListingKind;
  propertyName?: string;
  propertyTown?: string;
};

// Booking/visit CTA priority:
//   1. Verified affiliate / booking URL -> "View on Booking.com" (sponsored link)
//   2. Verified official website        -> "Visit official website"
//   3. Otherwise                        -> public verification notice (no button)
// Never advertise a future booking link as a primary CTA.
export default function BookingCtaButton({
  bookingUrl,
  bookingDeepLinkPending,
  officialUrl,
  verificationKind = 'stay',
  propertyName,
  propertyTown,
}: BookingCtaButtonProps) {
  if (bookingUrl) {
    return (
      <div className="flex flex-col items-start gap-1.5">
        <a
          href={withBookingAffiliate(bookingUrl)}
          target="_blank"
          rel={AFFILIATE_REL}
          data-property-name={propertyName}
          data-property-town={propertyTown}
          className="inline-flex items-center justify-center rounded-xl bg-sage px-4 py-2.5 text-sm font-semibold text-white hover:bg-sage-dark"
        >
          View on Booking.com
        </a>
        <span className="text-[11px] text-charcoal-muted">Affiliate link</span>
      </div>
    );
  }

  if (officialUrl) {
    return (
      <a
        href={officialUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        data-cta-type="official-website"
        data-property-name={propertyName}
        data-property-town={propertyTown}
        className="inline-flex items-center justify-center rounded-xl border border-sage px-4 py-2.5 text-sm font-semibold text-sage hover:bg-sage hover:text-white"
      >
        Visit official website
      </a>
    );
  }

  if (bookingDeepLinkPending) {
    return <VerificationNotice kind={verificationKind} compact />;
  }

  return null;
}
