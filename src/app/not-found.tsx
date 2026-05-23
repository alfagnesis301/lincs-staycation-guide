import Link from 'next/link';

const usefulLinks = [
  { label: 'Town guides', href: '/town-guides' },
  { label: 'Places to stay', href: '/places-to-stay' },
  { label: 'Caravan parks', href: '/caravan-parks' },
  { label: 'Things to do', href: '/things-to-do' },
];

export default function NotFound() {
  return (
    <section className="hero-gradient min-h-[60vh] py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sage">
          Page not found
        </p>
        <h1 className="font-heading mb-4 text-4xl font-bold text-charcoal sm:text-5xl">
          We could not find that Lincolnshire guide
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-charcoal-muted">
          The page may have moved, or the guide may still be in editorial review. Use one of the main sections below to keep browsing verified pages.
        </p>
        <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-sage px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-sage-dark"
          >
            Return home
          </Link>
          <Link
            href="/search"
            className="inline-flex items-center justify-center rounded-xl border border-cream-dark px-6 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-cream"
          >
            Search guides
          </Link>
        </div>
        <nav aria-label="Useful sections" className="flex flex-wrap justify-center gap-3">
          {usefulLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-cream-dark bg-white px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-sage hover:text-sage-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
