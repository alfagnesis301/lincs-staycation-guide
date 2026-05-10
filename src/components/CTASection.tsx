import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant?: 'sage' | 'coast';
}

export default function CTASection({ title, description, buttonText, buttonHref, variant = 'sage' }: CTASectionProps) {
  const bgClass = variant === 'coast'
    ? 'bg-gradient-to-r from-coast/10 via-coast/5 to-cream'
    : 'bg-gradient-to-r from-sage/10 via-sage/5 to-cream';

  const btnClass = variant === 'coast'
    ? 'bg-coast hover:bg-coast-dark'
    : 'bg-sage hover:bg-sage-dark';

  return (
    <section className={`${bgClass} py-12 sm:py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal mb-4">
            {title}
          </h2>
          <p className="text-charcoal-muted text-lg leading-relaxed mb-6">
            {description}
          </p>
          <Link
            href={buttonHref}
            className={`inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white ${btnClass} rounded-xl transition-colors shadow-lg shadow-sage/20`}
          >
            {buttonText}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
