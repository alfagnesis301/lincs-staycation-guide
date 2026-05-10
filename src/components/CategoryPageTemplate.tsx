'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ListingCard from '@/components/ListingCard';
import GuideCard from '@/components/GuideCard';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import SectionHeader from '@/components/SectionHeader';
import AdPlaceholder from '@/components/AdPlaceholder';
import type { Listing } from '@/data/listings';
import type { Guide } from '@/data/guides';
import type { FAQ } from '@/data/faqs';

interface CategoryPageTemplateProps {
  title: string;
  description: string;
  heroVariant?: 'default' | 'coast' | 'sage';
  subcategories: string[];
  /** Map a subcategory name to a route — that chip becomes a link instead of a filter. */
  subcategoryLinks?: Record<string, string>;
  listings: Listing[];
  guides?: Guide[];
  faqs: FAQ[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
  breadcrumbLabel: string;
}

export default function CategoryPageTemplate({
  title,
  description,
  heroVariant = 'default',
  subcategories,
  subcategoryLinks,
  listings,
  guides = [],
  faqs,
  ctaTitle = 'Own a local business in Lincolnshire?',
  ctaDescription = 'Add your business to Lincs Staycation Guide and reach visitors exploring the county.',
  ctaButtonText = 'Add Your Business',
  ctaButtonHref = '/add-your-business',
  breadcrumbLabel,
}: CategoryPageTemplateProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      const matchesSearch = !searchQuery ||
        listing.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.town.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesSubcategory = !activeSubcategory ||
        listing.category.toLowerCase() === activeSubcategory.toLowerCase() ||
        listing.tags.some((t) => t.toLowerCase() === activeSubcategory.toLowerCase());

      return matchesSearch && matchesSubcategory;
    });
  }, [listings, searchQuery, activeSubcategory]);

  const gradientClass = heroVariant === 'coast'
    ? 'hero-gradient-coast'
    : heroVariant === 'sage'
      ? 'hero-gradient-sage'
      : 'hero-gradient';

  return (
    <>
      {/* Hero */}
      <section className={`${gradientClass} py-12 sm:py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: breadcrumbLabel }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg text-charcoal-muted leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-cream-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="relative max-w-md mb-4">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              placeholder="Search listings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-cream/40 border border-cream-dark rounded-xl text-sm focus:outline-none focus:border-coast focus:ring-2 focus:ring-coast/20"
              aria-label="Search listings"
            />
          </div>

          {/* Subcategory chips */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by subcategory">
            <button
              onClick={() => setActiveSubcategory(null)}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border transition-all ${
                !activeSubcategory
                  ? 'bg-sage text-white border-sage'
                  : 'bg-white text-charcoal-light border-cream-dark hover:border-sage/30 hover:text-sage'
              }`}
            >
              All
            </button>
            {subcategories.map((sub) => {
              const href = subcategoryLinks?.[sub];
              if (href) {
                return (
                  <Link
                    key={sub}
                    href={href}
                    className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border bg-white text-charcoal-light border-cream-dark hover:border-sage/30 hover:text-sage transition-all"
                  >
                    {sub} →
                  </Link>
                );
              }
              return (
                <button
                  key={sub}
                  onClick={() => setActiveSubcategory(activeSubcategory === sub ? null : sub)}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border transition-all ${
                    activeSubcategory === sub
                      ? 'bg-sage text-white border-sage'
                      : 'bg-white text-charcoal-light border-cream-dark hover:border-sage/30 hover:text-sage'
                  }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="py-12 sm:py-16 bg-cream/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Featured listings"
            subtitle={`Showing ${filteredListings.length} listing${filteredListings.length !== 1 ? 's' : ''}`}
          />
          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {filteredListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-cream-dark/40">
              <p className="text-charcoal-muted">No listings match your search. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Guides */}
      {guides.length > 0 && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Related guides" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {guides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ad between content sections, never near nav buttons */}
      <AdPlaceholder />

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* Business CTA */}
      <CTASection
        title={ctaTitle}
        description={ctaDescription}
        buttonText={ctaButtonText}
        buttonHref={ctaButtonHref}
      />
    </>
  );
}
