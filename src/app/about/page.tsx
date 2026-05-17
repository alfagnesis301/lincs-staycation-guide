import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About the Independent Local Travel Directory',
  description: 'Lincs Staycation Guide is an independent local travel directory for Lincolnshire, UK. Not affiliated with any council or tourism board — focused on honest, practical information for visitors and residents.',
  openGraph: {
    title: 'About Lincs Staycation Guide | Independent Local Guide',
    description: 'An independent local travel directory for Lincolnshire. Not affiliated with any council or tourism board.',
  },
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
            About Lincs Staycation Guide
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Independence banner — key UK trust signal */}
            <div className="bg-sage/8 border-l-4 border-sage rounded-r-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🛡️</span>
                <h2 className="font-heading text-lg font-semibold text-charcoal">Independent Local Guide</h2>
              </div>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Lincs Staycation Guide is <strong className="text-charcoal">fully independent</strong>. We are not affiliated with, funded by, or connected to any local council, official tourism board or government body. Our editorial decisions, listings and recommendations are made independently and are not influenced by paid placements or advertising relationships.
              </p>
            </div>

            <div>
              <p className="text-lg text-charcoal-muted leading-relaxed mb-4">
                Lincs Staycation Guide is an independent local travel directory created to help visitors and residents discover useful places to stay, eat and explore across Lincolnshire.
              </p>
              <p className="text-lg text-charcoal-muted leading-relaxed mb-4">
                Our aim is to make local travel planning easier by bringing together accommodation, attractions, food and drink, coastal spots, family activities, dog-friendly places and town guides in one practical place.
              </p>
              <p className="text-lg text-charcoal-muted leading-relaxed">
                Every listing, guide and recommendation on this site is created or reviewed by our team with a focus on accuracy, usefulness and editorial honesty. We believe visitors deserve clear, practical information — not exaggerated marketing copy.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">What we cover</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Places to stay – hotels, cottages, caravan parks, glamping and more',
                  'Things to do – attractions, walks, historic sites and days out',
                  'Food & drink – pubs, restaurants, cafés and farm shops',
                  'Lincolnshire Coast – beaches, seaside towns and coastal guides',
                  'Dog-friendly – stays, pubs, walks and beaches that welcome dogs',
                  'Family days out – family-friendly activities and rainy day ideas',
                  'Town guides – practical guides for Lincolnshire destinations',
                  'Events – seasonal activities, markets and festivals',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-charcoal-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">Who the guide is for</h2>
              <p className="text-charcoal-muted leading-relaxed mb-3">
                Lincs Staycation Guide is designed for anyone planning a visit to or exploring Lincolnshire, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-charcoal-muted">
                <li>Visitors planning a holiday, weekend break or day out</li>
                <li>Families looking for activities and attractions</li>
                <li>Dog owners searching for friendly places to visit</li>
                <li>Couples planning a romantic getaway</li>
                <li>Residents discovering new local spots</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">Our editorial approach</h2>
              <p className="text-charcoal-muted leading-relaxed mb-3">
                We aim to provide accurate, useful and regularly reviewed content. Our guides are written with a focus on practical information rather than exaggerated marketing claims. We do not publish fake reviews, fabricated testimonials or misleading endorsements.
              </p>
              <p className="text-charcoal-muted leading-relaxed mb-3">
                Where content is sponsored or produced in partnership with a business, it is always clearly labelled. Our independent editorial content is never influenced by advertising or paid placement relationships.
              </p>
              <p className="text-charcoal-muted leading-relaxed">
                Read our full <Link href="/editorial-policy" className="text-coast underline hover:text-coast-dark">Editorial Policy</Link> for more details on how we create and maintain content.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">Our commitment to independence</h2>
              <p className="text-charcoal-muted leading-relaxed mb-3">
                Independence matters. In the UK, visitors increasingly value honest, independent sources of travel information over promotional material. Lincs Staycation Guide is committed to maintaining editorial independence in everything we publish.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-charcoal-muted">
                <li>We are not affiliated with any tourism board, council or destination marketing organisation</li>
                <li>Paid listings and sponsored content are always clearly identified</li>
                <li>Our guides and recommendations are based on usefulness and local relevance, not commercial relationships</li>
                <li>We welcome corrections and feedback from visitors, residents and businesses</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">For local businesses</h2>
              <p className="text-charcoal-muted leading-relaxed mb-4">
                We welcome tourism, hospitality, accommodation, food, drink and activity businesses to join the directory. We offer free basic listings as well as featured and premium placement options.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/add-your-business" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-sage hover:bg-sage-dark rounded-xl transition-colors">
                  Add Your Business
                </Link>
                <Link href="/advertise" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-charcoal border border-cream-dark hover:bg-cream rounded-xl transition-colors">
                  Advertising options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
