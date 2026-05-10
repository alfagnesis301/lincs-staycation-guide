import Link from 'next/link';

/**
 * Small, discreet affiliate disclosure.
 * Render only when at least one listing on the page has an active affiliate link.
 */
export default function AffiliateDisclosureSmall() {
  return (
    <p className="text-xs text-charcoal-muted leading-relaxed">
      Disclosure: Some booking links may earn us a small commission at no extra
      cost to you.{' '}
      <Link
        href="/affiliate-disclosure"
        className="underline decoration-dotted underline-offset-2 hover:text-charcoal"
      >
        Learn more
      </Link>
      .
    </p>
  );
}
