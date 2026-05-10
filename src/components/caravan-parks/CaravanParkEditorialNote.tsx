import Link from 'next/link';

interface Props {
  text?: string;
  /** Show a "Report an update" CTA below the note */
  showCorrectionsCta?: boolean;
}

const DEFAULT_TEXT =
  'These entries are curated candidates, not paid rankings. Facilities, prices, pet policies, opening dates and booking availability can change. Please check directly with each park before planning your trip.';

export default function CaravanParkEditorialNote({
  text = DEFAULT_TEXT,
  showCorrectionsCta = true,
}: Props) {
  return (
    <section className="py-8 bg-cream/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-cream-dark/40 p-5 sm:p-6">
          <h2 className="font-heading text-base font-semibold text-charcoal mb-2 flex items-center gap-2">
            <span aria-hidden="true">📝</span>
            Editorial note
          </h2>
          <p className="text-sm text-charcoal-muted leading-relaxed">{text}</p>

          {showCorrectionsCta && (
            <div className="mt-4 pt-4 border-t border-cream-dark/40">
              <p className="text-xs text-charcoal-muted">
                <strong className="text-charcoal">Found outdated information?</strong> If you manage one of these parks or spot an error,{' '}
                <Link href="/contact?reason=listing-update" className="text-coast hover:text-coast-dark underline font-medium">
                  report an update
                </Link>{' '}
                so we can review the guide.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
