import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import GuideCard from '@/components/GuideCard';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';
import { mainCategories } from '@/data/categories';
import { guides } from '@/data/guides';

export default function HomePage() {
  const featuredGuides = guides.slice(0, 6);

  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lincs Staycation Guide',
    url: 'https://lincsstaycationguide.co.uk',
    description: 'Discover places to stay, things to do, restaurants, beaches, family days out, dog-friendly escapes and town guides across Lincolnshire.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://lincsstaycationguide.co.uk/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lincs Staycation Guide',
    url: 'https://lincsstaycationguide.co.uk',
    description: 'An independent local travel directory for Lincolnshire, UK.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }} />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-coast/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-[1.1]">
                Discover the best of{' '}
                <span className="text-sage">Lincolnshire</span>
              </h1>
              <p className="text-lg sm:text-xl text-charcoal-muted leading-relaxed mb-8 max-w-xl">
                Find places to stay, things to do, restaurants, beaches, family days out and dog-friendly escapes across Lincolnshire.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="/things-to-do"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-sage hover:bg-sage-dark rounded-xl transition-colors shadow-lg shadow-sage/20"
                >
                  Explore Lincolnshire
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/add-your-business"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-charcoal bg-white hover:bg-cream border border-cream-dark rounded-xl transition-colors"
                >
                  Add Your Business
                </Link>
              </div>

              {/* Search Module */}
              <div>
                <p className="text-sm font-medium text-charcoal mb-2">What are you looking for?</p>
                <SearchBar />
              </div>
            </div>

            {/* Hero visual cards */}
            <div className="hidden lg:block" aria-hidden="true">
              <div className="relative">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-lg border border-cream-dark/40 p-5 w-64 absolute -top-4 left-0 rotate-[-3deg]">
                  <div className="h-28 bg-gradient-to-br from-sand-light to-cream rounded-xl mb-3 flex items-center justify-center">
                    <span className="text-3xl">🏛️</span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-charcoal">Historic Lincoln</h3>
                  <p className="text-xs text-charcoal-muted mt-1">Cathedral, castle and cobbled streets</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-lg border border-cream-dark/40 p-5 w-64 absolute top-24 left-44 rotate-[2deg]">
                  <div className="h-28 bg-gradient-to-br from-coast/20 to-cream rounded-xl mb-3 flex items-center justify-center">
                    <span className="text-3xl">🌊</span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-charcoal">Lincolnshire Coast</h3>
                  <p className="text-xs text-charcoal-muted mt-1">Sandy beaches and seaside escapes</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl shadow-lg border border-cream-dark/40 p-5 w-64 absolute top-56 left-8 rotate-[1deg]">
                  <div className="h-28 bg-gradient-to-br from-sage/15 to-cream rounded-xl mb-3 flex items-center justify-center">
                    <span className="text-3xl">🌿</span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-charcoal">Countryside Escapes</h3>
                  <p className="text-xs text-charcoal-muted mt-1">Wolds walks and rural retreats</p>
                </div>

                {/* Spacer for the cards */}
                <div className="h-[380px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro text */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-charcoal-muted leading-relaxed">
            From Lincoln&apos;s historic streets to the Lincolnshire Coast, market towns, countryside walks and seaside holidays, <strong className="text-charcoal">Lincs Staycation Guide</strong> helps you plan your next local escape with confidence.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Plan your Lincolnshire escape"
            subtitle="Browse our main categories to start exploring."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {mainCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Popular Lincolnshire guides"
            subtitle="Practical travel guides and inspiration for your next visit."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Value Section */}
      <section className="py-12 sm:py-16 bg-cream/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal mb-4">
              A practical guide for real local decisions
            </h2>
            <p className="text-charcoal-muted text-lg leading-relaxed">
              Whether you are planning a weekend break, a family day out, a coastal holiday or a countryside escape, Lincs Staycation Guide helps you compare useful local options in one place.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-cream-dark/40 p-6 text-center">
              <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">Local-first categories</h3>
              <p className="text-sm text-charcoal-muted">Organised around what matters most when visiting or exploring Lincolnshire.</p>
            </div>
            <div className="bg-white rounded-2xl border border-cream-dark/40 p-6 text-center">
              <div className="w-12 h-12 bg-coast/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-coast" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">Useful filters</h3>
              <p className="text-sm text-charcoal-muted">Search by town, category, dog-friendly, family-friendly and more.</p>
            </div>
            <div className="bg-white rounded-2xl border border-cream-dark/40 p-6 text-center">
              <div className="w-12 h-12 bg-sand/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">Built for visitors and residents</h3>
              <p className="text-sm text-charcoal-muted">Helpful for holiday planning, weekend breaks and everyday local inspiration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business CTA */}
      <CTASection
        title="Own a tourism, hospitality or local experience business in Lincolnshire?"
        description="Add your business to Lincs Staycation Guide and help visitors discover what you offer."
        buttonText="Add Your Business"
        buttonHref="/add-your-business"
      />
    </>
  );
}
