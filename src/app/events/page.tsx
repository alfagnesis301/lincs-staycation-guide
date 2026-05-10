import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'What\'s On in Lincolnshire | Events, Festivals & Markets',
  description: 'Discover upcoming events, seasonal activities, markets, festivals and family-friendly things to do across Lincolnshire.',
  openGraph: {
    title: 'What\'s On in Lincolnshire',
    description: 'Discover upcoming events, seasonal activities, markets, festivals and family-friendly things to do across Lincolnshire.',
  },
  alternates: { canonical: '/events' },
};

const sampleEvents = [
  {
    title: 'Lincolnshire Wolds Walking Festival',
    date: 'May 2026',
    location: 'Various locations, Lincolnshire Wolds',
    category: 'Walking',
    description: 'A programme of guided walks through the Lincolnshire Wolds, suitable for all abilities.',
  },
  {
    title: 'Lincoln Christmas Market',
    date: 'December 2026',
    location: 'Lincoln Cathedral Quarter',
    category: 'Market',
    description: 'One of the largest and most popular Christmas markets in the UK, set around Lincoln Cathedral and Castle.',
  },
  {
    title: 'Skegness Carnival',
    date: 'August 2026',
    location: 'Skegness',
    category: 'Festival',
    description: 'An annual seaside carnival with floats, music, family entertainment and community events.',
  },
  {
    title: 'Stamford Georgian Festival',
    date: 'September 2026',
    location: 'Stamford',
    category: 'Heritage',
    description: 'A celebration of Stamford\'s Georgian heritage with costumed events, market stalls and live music.',
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="hero-gradient py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Events' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
            What&apos;s On in Lincolnshire
          </h1>
          <p className="text-lg text-charcoal-muted leading-relaxed max-w-3xl">
            Discover upcoming events, seasonal activities, markets, festivals and family-friendly things to do across Lincolnshire.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info banner */}
          <div className="bg-coast/5 border border-coast/20 rounded-2xl p-6 mb-10 text-center">
            <p className="text-charcoal-muted">
              🗓️ Event listings are coming soon. Local organisers can submit events through our{' '}
              <a href="/contact" className="text-coast underline hover:text-coast-dark">contact form</a>.
            </p>
          </div>

          <SectionHeader title="Upcoming events" subtitle="Sample seasonal events across Lincolnshire." />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {sampleEvents.map((event) => (
              <div key={event.title} className="card-hover bg-white rounded-2xl border border-cream-dark/60 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge badge-coast text-[11px]">{event.category}</span>
                  <span className="text-xs text-charcoal-muted">{event.date}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">{event.title}</h3>
                <p className="text-sm text-charcoal-muted leading-relaxed mb-3">{event.description}</p>
                <div className="flex items-center gap-1.5 text-xs text-charcoal-muted">
                  <svg className="w-3.5 h-3.5 text-coast" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Organise events in Lincolnshire?"
        description="Submit your event to be featured on our listings page."
        buttonText="Submit an event"
        buttonHref="/contact"
        variant="coast"
      />
    </>
  );
}
