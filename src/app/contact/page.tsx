import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Lincs Staycation Guide. General enquiries, listing updates, advertising, partnerships and corrections.',
  openGraph: {
    title: 'Contact Lincs Staycation Guide',
    description: 'Get in touch with Lincs Staycation Guide for enquiries, listing updates and advertising.',
  },
  alternates: { canonical: '/contact' },
};

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
            Have a question, listing update, advertising enquiry or correction? Get in touch and we will do our best to help.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2 relative">
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div className="bg-cream/50 rounded-2xl p-6 border border-cream-dark/40">
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">Email us</h3>
                <p className="text-sm text-charcoal-muted mb-2">
                  For general enquiries:
                </p>
                <p className="text-sm text-coast font-medium">
                  hello@lincs-staycation-guide.co.uk
                </p>
              </div>

              <div className="bg-cream/50 rounded-2xl p-6 border border-cream-dark/40">
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">Response time</h3>
                <p className="text-sm text-charcoal-muted">
                  We aim to respond to all enquiries within a few working days.
                </p>
              </div>

              <div className="bg-cream/50 rounded-2xl p-6 border border-cream-dark/40">
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">For businesses</h3>
                <p className="text-sm text-charcoal-muted">
                  To add or update a listing, please use our{' '}
                  <a href="/add-your-business" className="text-coast underline hover:text-coast-dark">
                    business submission form
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
