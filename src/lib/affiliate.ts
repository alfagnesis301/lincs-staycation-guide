// Booking.com affiliate link handling.
//
// Property URLs are stored in the data files as plain Booking.com links.
// The affiliate ID is applied at render time from NEXT_PUBLIC_BOOKING_AID,
// so activating tracking for every listing is a single environment variable
// on the host (no data rewrite needed).
//
// NEXT_PUBLIC_BOOKING_AID must be the numeric `aid` from the Booking.com
// Partner Hub tracked-link generator. Never commit the value to the repo.

const BOOKING_AID = process.env.NEXT_PUBLIC_BOOKING_AID;

export function isBookingComUrl(url: string | undefined): url is string {
  if (!url) return false;
  try {
    const host = new URL(url).hostname.toLowerCase();
    return host === 'booking.com' || host.endsWith('.booking.com');
  } catch {
    return false;
  }
}

/**
 * Returns the URL with the Booking.com affiliate `aid` applied.
 * Non-Booking URLs and URLs that already carry an `aid` are returned as-is.
 * If no affiliate ID is configured the original URL is returned unchanged,
 * so links keep working before the partner account is approved.
 */
export function withBookingAffiliate(url: string): string;
export function withBookingAffiliate(url: string | undefined): string | undefined;
export function withBookingAffiliate(url: string | undefined): string | undefined {
  if (!url || !BOOKING_AID || !isBookingComUrl(url)) return url;
  try {
    const decorated = new URL(url);
    if (!decorated.searchParams.has('aid')) {
      decorated.searchParams.set('aid', BOOKING_AID);
    }
    return decorated.toString();
  } catch {
    return url;
  }
}

/** rel value required for paid/affiliate outbound links. */
export const AFFILIATE_REL = 'sponsored nofollow noopener noreferrer';
