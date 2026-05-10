type BookingCtaButtonProps = {
  bookingUrl?: string;
  bookingDeepLinkPending?: boolean;
};

export default function BookingCtaButton({ bookingUrl, bookingDeepLinkPending }: BookingCtaButtonProps) {
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

  if (bookingDeepLinkPending) {
    return (
      <button
        type="button"
        disabled
        className="inline-flex cursor-not-allowed items-center justify-center rounded-xl bg-cream-dark px-4 py-2.5 text-sm font-semibold text-charcoal-muted"
      >
        Booking link coming soon
      </button>
    );
  }

  return null;
}
