// Booking.com affiliate links via CJ Affiliate (Commission Junction).
//
// Property URLs are stored in the data files as plain Booking.com links.
// At render time they are wrapped in a CJ deep link:
//
//   https://www.dpbolvw.net/click-{PID}-{LINK_ID}?sid={hotel-slug}&url={encoded property URL}
//
// verified end-to-end on 13 Jul 2026: the redirect lands on the property
// page carrying pub/site tracking, and the click shows in CJ reports.
//
// PID 101754317 is the "Lincs Staycation Guide" website property in the
// CJ publisher account; 15734754 is Booking.com UK's evergreen
// deep-linkable text link. Both values are public by nature (they appear
// in every affiliate URL on the live site), so they ship as defaults and
// can be overridden per-environment without a code change.
//
// sid carries the hotel slug so per-property clicks can be reconciled in
// CJ reports alongside the GA4 affiliate_click events.

const CJ_PID = process.env.NEXT_PUBLIC_CJ_PID || '101754317';
const CJ_BOOKING_LINK_ID = process.env.NEXT_PUBLIC_CJ_BOOKING_LINK_ID || '15734754';
const CJ_CLICK_HOST = 'https://www.dpbolvw.net';

// Hosts CJ uses for click redirects; needed to recognise decorated links.
const CJ_CLICK_DOMAINS = [
  'dpbolvw.net',
  'jdoqocy.com',
  'anrdoezrs.net',
  'kqzyfj.com',
  'tkqlhce.com',
];

export function isBookingComUrl(url: string | undefined): url is string {
  if (!url) return false;
  try {
    const host = new URL(url).hostname.toLowerCase();
    return host === 'booking.com' || host.endsWith('.booking.com');
  } catch {
    return false;
  }
}

/** True for CJ click-redirect URLs (i.e. already-decorated affiliate links). */
export function isAffiliateRedirectUrl(url: string | undefined): url is string {
  if (!url) return false;
  try {
    const host = new URL(url).hostname.toLowerCase().replace(/^www\./, '');
    return CJ_CLICK_DOMAINS.some((d) => host === d || host.endsWith(`.${d}`));
  } catch {
    return false;
  }
}

/** Best-effort short identifier for CJ's sid parameter, e.g. the hotel slug. */
function propertySid(url: URL): string {
  const match = url.pathname.match(/\/hotel\/[a-z]{2}\/([a-z0-9-]+)\.html/i);
  return (match?.[1] ?? url.pathname.replace(/[^a-zA-Z0-9-]+/g, '-')).slice(0, 60);
}

/**
 * Wraps a Booking.com property URL in the CJ affiliate deep link.
 * Non-Booking URLs and unparsable values are returned unchanged, so every
 * caller can pass its CTA URL through without checking first.
 */
export function withBookingAffiliate(url: string): string;
export function withBookingAffiliate(url: string | undefined): string | undefined;
export function withBookingAffiliate(url: string | undefined): string | undefined {
  if (!url || !isBookingComUrl(url) || !CJ_PID || !CJ_BOOKING_LINK_ID) return url;
  try {
    const destination = new URL(url);
    const sid = propertySid(destination);
    return `${CJ_CLICK_HOST}/click-${CJ_PID}-${CJ_BOOKING_LINK_ID}?sid=${encodeURIComponent(sid)}&url=${encodeURIComponent(destination.toString())}`;
  } catch {
    return url;
  }
}

/** rel value required for paid/affiliate outbound links. */
export const AFFILIATE_REL = 'sponsored nofollow noopener noreferrer';
