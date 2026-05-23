import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'What\'s On in Lincolnshire | Events, Festivals & Markets',
  description: 'Discover upcoming events, seasonal activities, markets, festivals and family-friendly things to do across Lincolnshire.',
  openGraph: {
    title: 'What\'s On in Lincolnshire',
    description: 'Discover upcoming events, seasonal activities, markets, festivals and family-friendly things to do across Lincolnshire.',
  },
  alternates: { canonical: '/events' },
  // Holding page — keep out of the index until we have a curated, dated programme.
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream/30 border border-cream-dark/40 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="font-heading text-2xl font-semibold text-charcoal mb-3">Events programme in research</h2>
            <p className="text-charcoal-muted leading-relaxed mb-4">
              We are building a curated, dated programme of Lincolnshire events. We only list events once dates, venues and organiser details have been confirmed &mdash; rather than publishing speculative entries.
            </p>
            <p className="text-charcoal-muted leading-relaxed">
              Organising an event in Lincolnshire? Submit your details for editorial review using the form below.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Organise an event in Lincolnshire?"
        description="Submit details of your event for editorial review and possible inclusion in our directory."
        buttonText="Submit an event"
        buttonHref="/contact?reason=event-submission"
        variant="coast"
      />
    </>
  );
}
