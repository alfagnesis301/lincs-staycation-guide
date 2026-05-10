import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="hero-gradient min-h-[60vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center">
        <span className="text-6xl block mb-6">🧭</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal mb-4">
          Page not found
        </h1>
        <p className="text-lg text-charcoal-muted mb-8">
          Sorry, we couldn&apos;t find that page. It may have been moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-sage hover:bg-sage-dark rounded-xl transition-colors"
          >
            Return home
          </Link>
          <Link
            href="/things-to-do"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-charcoal border border-cream-dark hover:bg-cream rounded-xl transition-colors"
          >
            Explore Lincolnshire guides
          </Link>
        </div>
      </div>
    </div>
  );
}
