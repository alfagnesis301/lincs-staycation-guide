import Link from 'next/link';

export function EditorialNote() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-cream-dark/70 bg-cream/40 p-5 sm:p-6">
          <h2 className="font-heading text-xl font-semibold text-charcoal">Editorial note</h2>
          <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
            These listings are curated research candidates designed to help visitors compare useful options in and around Lincoln. Accommodation availability, facilities, booking options, opening hours and food reviews can change, so always check directly with the booking provider or venue before planning your visit.
          </p>
        </div>
      </div>
    </section>
  );
}

export function BusinessCTA() {
  return (
    <section className="bg-gradient-to-r from-sage/10 via-sage/5 to-cream py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
          Run an accommodation, attraction or food business in Lincoln?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-charcoal-muted">
          Add your business to Lincs Staycation Guide and help visitors discover places to stay, eat and explore in Lincoln and across Lincolnshire.
        </p>
        <Link
          href="/add-your-business"
          className="mt-6 inline-flex rounded-xl bg-sage px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sage/20 hover:bg-sage-dark"
        >
          Add Your Business
        </Link>
      </div>
    </section>
  );
}

export function CorrectionsCTA() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-coast/20 bg-coast/5 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal">Found outdated information?</h2>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">
              If you manage one of these listings or spot an error, contact us so we can review and update the guide.
            </p>
          </div>
          <Link
            href="/contact?reason=listing-update"
            className="mt-4 inline-flex shrink-0 rounded-xl bg-coast px-5 py-2.5 text-sm font-semibold text-white hover:bg-coast-dark sm:mt-0"
          >
            Report an update
          </Link>
        </div>
      </div>
    </section>
  );
}
