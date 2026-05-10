import Link from 'next/link';

export default function CaravanParkDisclosureBox() {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-coast/5 border border-coast/20 rounded-xl p-4 sm:p-5">
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            <strong className="text-charcoal">Monetisation &amp; disclosure:</strong> Some links may be affiliate links in the future. Sponsored placements will always be clearly labelled. Our editorial notes are intended to help readers compare practical options, not to guarantee availability, pricing or facilities. See our{' '}
            <Link href="/affiliate-disclosure" className="text-coast hover:text-coast-dark underline">
              affiliate disclosure
            </Link>{' '}
            and{' '}
            <Link href="/editorial-policy" className="text-coast hover:text-coast-dark underline">
              editorial policy
            </Link>{' '}
            for more details.
          </p>
        </div>
      </div>
    </section>
  );
}
