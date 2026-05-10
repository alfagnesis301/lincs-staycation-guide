import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import BusinessSubmissionForm from '@/components/BusinessSubmissionForm';

export const metadata: Metadata = {
  title: 'Add Your Business to Lincs Staycation Guide',
  description: 'Submit your tourism, hospitality, accommodation, food, drink or activity business in Lincolnshire to our local travel directory.',
  openGraph: {
    title: 'Add Your Business to Lincs Staycation Guide',
    description: 'Submit your Lincolnshire business to our local travel directory.',
  },
  alternates: { canonical: '/add-your-business' },
};

export default function AddYourBusinessPage() {
  return (
    <>
      <section className="hero-gradient-sage py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Add Your Business' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Add Your Business to Lincs Staycation Guide
          </h1>
          <p className="text-lg text-charcoal-muted leading-relaxed max-w-3xl">
            Run a tourism, hospitality, accommodation, food, drink, attraction, activity or local experience business in Lincolnshire? Submit your details to be considered for inclusion in our directory.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Listing options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            <div className="bg-cream/40 rounded-2xl p-6 border border-cream-dark/40">
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">Free Listing</h3>
              <ul className="space-y-2 text-sm text-charcoal-muted">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Business name
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Category
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Town or area
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Short description
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Website link
                </li>
              </ul>
            </div>

            <div className="bg-sage/5 rounded-2xl p-6 border-2 border-sage/30 relative">
              <span className="absolute -top-3 right-4 badge badge-sage text-[11px]">Popular</span>
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">Featured Listing</h3>
              <ul className="space-y-2 text-sm text-charcoal-muted">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Enhanced profile
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Priority placement
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Photos
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Promotional text
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Featured badge
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Link from relevant guides
                </li>
              </ul>
            </div>

            <div className="bg-coast/5 rounded-2xl p-6 border border-coast/20">
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">Premium Partner</h3>
              <ul className="space-y-2 text-sm text-charcoal-muted">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-coast flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Featured placement across category pages
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-coast flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Sponsored guide opportunities
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-coast flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Seasonal campaigns
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-coast flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Direct enquiry support
                </li>
              </ul>
            </div>
          </div>

          {/* Note */}
          <div className="bg-cream/40 rounded-xl p-4 mb-10 text-sm text-charcoal-muted">
            <strong className="text-charcoal">Note:</strong> All submissions are reviewed before publication. We may edit listing descriptions for clarity, accuracy and editorial quality.
          </div>

          {/* Submission form */}
          <div className="max-w-3xl relative">
            <h2 className="font-heading text-2xl font-semibold text-charcoal mb-6">Submit your business</h2>
            <BusinessSubmissionForm />
          </div>
        </div>
      </section>
    </>
  );
}
