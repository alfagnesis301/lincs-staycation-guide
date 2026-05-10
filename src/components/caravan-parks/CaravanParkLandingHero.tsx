import Link from 'next/link';

export default function CaravanParkLandingHero() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-coast/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="max-w-3xl">
          <span className="inline-block badge badge-coast mb-4">Lincolnshire caravan parks</span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-5 leading-[1.1]">
            Caravan Parks &amp; Holiday Parks in <span className="text-sage">Lincolnshire</span>
          </h1>
          <p className="text-lg sm:text-xl text-charcoal-muted leading-relaxed mb-8 max-w-2xl">
            Compare caravan parks, touring sites, holiday lodges, glamping stays and family-friendly breaks across Lincolnshire&apos;s coast, countryside, market towns and city areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#by-location"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-sage hover:bg-sage-dark rounded-xl transition-colors shadow-lg shadow-sage/20"
            >
              Explore by location
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <Link
              href="/add-your-business"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-charcoal bg-white hover:bg-cream border border-cream-dark rounded-xl transition-colors"
            >
              Add your holiday park
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
