import VerificationNotice from '@/components/VerificationNotice';
import type { ListingKind } from '@/lib/public-copy';

type BookingCtaButtonProps = {
  bookingUrl?: string;
  bookingDeepLinkPending?: boolean;
  officialUrl?: string;
  verificationKind?: ListingKind;
};

// Booking/visit CTA priority:
//   1. Verified affiliate / booking URL -> "Check availability on Booking" (sponsored link)
//   2. Verified official website        -> "Visit official website"
//   3. Otherwise                        -> public verification notice (no button)
// Never advertise a future booking link as a primary CTA.
export default function BookingCtaButton({
  bookingUrl,
  bookingDeepLinkPending,
  officialUrl,
  verificationKind = 'stay',
}: BookingCtaButtonProps) {
  if (bookingUrl) {
    return (
      <div className="flex flex-col items-start gap-1.5">
        <a
          href={bookingUrl}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="inline-flex items-center justify-center rounded-xl bg-sage px-4 py-2.5 text-sm font-semibold text-white hover:bg-sage-dark"
        >
          Check availability on Booking
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
