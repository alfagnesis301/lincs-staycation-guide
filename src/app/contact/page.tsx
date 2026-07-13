import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Lincs Staycation Guide by email. General enquiries, listing updates, advertising, partnerships and corrections.',
  openGraph: {
    title: 'Contact Lincs Staycation Guide',
    description:
      'Get in touch with Lincs Staycation Guide for enquiries, listing updates and advertising.',
  },
  alternates: { canonical: '/contact' },
};

const email = siteConfig.contactEmail;

const mailto = (subject?: string) =>
  subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;

const topics: { label: string; subject: string }[] = [
  { label: 'General enquiry', subject: 'General enquiry' },
  { label: 'Listing update or correction', subject: 'Listing update or correction' },
  { label: 'Advertising', subject: 'Advertising enquiry' },
  { label: 'Partnership', subject: 'Partnership enquiry' },
];

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Contact Lincs Staycation Guide
          </h1>
          <p className="text-lg text-charcoal-muted leading-relaxed max-w-3xl">
            Have a question, listing update, advertising enquiry or correction? Send us an email and
            we will do our best to help.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Primary email card */}
          <div className="rounded-3xl border border-cream-dark/50 bg-cream/40 p-8 sm:p-10 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/10 text-sage">
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal">
              Email us directly
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-charcoal-muted leading-relaxed">
              The best way to reach us is by email. We read every message and reply personally,
              usually within a few working days.
            </p>
            <a
              href={mailto()}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sage px-6 py-3 text-base font-semibold text-white hover:bg-sage-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email {email}
            </a>
          </div>

          {/* Topic shortcuts (replace the old reason dropdown) */}
          <div className="mt-10">
            <h3 className="font-heading text-lg font-semibold text-charcoal text-center">
              What is your enquiry about?
            </h3>
            <p className="mt-1 text-center text-sm text-charcoal-muted">
              Choose a topic and we will pre-fill the subject line for you.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {topics.map((t) => (
                <a
                  key={t.subject}
                  href={mailto(t.subject)}
                  className="group flex items-center justify-between rounded-xl border border-cream-dark/50 bg-white px-4 py-3 hover:border-sage/60 hover:bg-cream/30 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                >
                  <span className="text-sm font-medium text-charcoal">{t.label}</span>
                  <svg
                    className="h-4 w-4 text-charcoal-muted group-hover:text-sage transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Supporting cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-cream-dark/40 bg-cream/50 p-6">
              <h3 className="font-heading text-base font-semibold text-charcoal mb-2">
                Response time
              </h3>
              <p className="text-sm text-charcoal-muted">
                We aim to respond to all enquiries within a few working days.
              </p>
            </div>

            <div className="rounded-2xl border border-cream-dark/40 bg-cream/50 p-6">
              <h3 className="font-heading text-base font-semibold text-charcoal mb-2">
                For businesses
              </h3>
              <p className="text-sm text-charcoal-muted">
                To add or update a listing, use our{' '}
                <a
                  href="/add-your-business"
                  className="text-coast underline hover:text-coast-dark"
                >
                  business submission form
                </a>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-cream-dark/40 bg-cream/50 p-6">
              <h3 className="font-heading text-base font-semibold text-charcoal mb-2">
                Advertising
              </h3>
              <p className="text-sm text-charcoal-muted">
                Keen to reach our visitors? See our{' '}
                <a href="/advertise" className="text-coast underline hover:text-coast-dark">
                  advertising options
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
