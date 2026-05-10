import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Advertise with Lincs Staycation Guide',
  description: 'Reach visitors, families, couples, dog owners and local residents planning trips, days out and short breaks across Lincolnshire.',
  openGraph: {
    title: 'Advertise with Lincs Staycation Guide',
    description: 'Reach visitors planning trips and short breaks across Lincolnshire.',
  },
  alternates: { canonical: '/advertise' },
};

const advertisingOptions = [
  {
    title: 'Featured directory listing',
    description: 'Enhanced business profile with priority placement, photos, promotional text and a featured badge.',
    icon: '⭐',
  },
  {
    title: 'Sponsored town guide',
    description: 'Feature your business prominently within a relevant town or area guide.',
    icon: '📍',
  },
  {
    title: 'Sponsored category placement',
    description: 'Priority visibility within a specific category page such as Places to Stay or Food & Drink.',
    icon: '📂',
  },
  {
    title: 'Sponsored article',
    description: 'A clearly labelled sponsored guide or feature article showcasing your business or destination.',
    icon: '📝',
  },
  {
    title: 'Seasonal campaign',
    description: 'Timed promotional placement during peak seasons, holidays or local events.',
    icon: '🗓️',
  },
  {
    title: 'Newsletter sponsorship',
    description: 'Reach subscribers directly through a sponsored section in our future email newsletter.',
    icon: '📧',
  },
];

export default function AdvertisePage() {
  return (
    <>
      <section className="hero-gradient-coast py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Advertise' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Advertise with Lincs Staycation Guide
          </h1>
          <p className="text-lg text-charcoal-muted leading-relaxed max-w-3xl">
            Reach visitors, families, couples, dog owners and local residents planning trips, days out and short breaks across Lincolnshire.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal mb-8">Advertising options</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {advertisingOptions.map((option) => (
              <div key={option.title} className="card-hover bg-white rounded-2xl border border-cream-dark/60 p-6">
                <span className="text-2xl mb-3 block">{option.icon}</span>
                <h3 className="font-heading text-base font-semibold text-charcoal mb-2">{option.title}</h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-cream/50 rounded-2xl p-8 border border-cream-dark/40 text-center">
            <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">Pricing</h3>
            <p className="text-charcoal-muted mb-6">
              Packages start from affordable monthly options for local businesses. Get in touch for a tailored quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-coast hover:bg-coast-dark rounded-xl transition-colors"
            >
              Request advertising information
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
