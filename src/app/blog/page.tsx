import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import GuideCard from '@/components/GuideCard';
import { publishedGuides } from '@/data/guides';

const hasPublished = publishedGuides.length > 0;

export const metadata: Metadata = {
  title: 'Lincolnshire Travel Guides & Local Inspiration | Blog',
  description: 'Read practical travel guides, local tips and inspiration for visiting Lincolnshire. Family days out, beaches, dog-friendly escapes and more.',
  openGraph: {
    title: 'Lincolnshire Travel Guides & Local Inspiration',
    description: 'Read practical travel guides, local tips and inspiration for visiting Lincolnshire.',
  },
  alternates: { canonical: '/blog' },
  // While there are no published articles, keep the holding page out of the index.
  robots: hasPublished ? undefined : { index: false, follow: true },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Lincolnshire Travel Guides & Local Inspiration',
    description: 'Practical travel guides and local inspiration for visiting Lincolnshire.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero-gradient py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Lincolnshire Travel Guides &amp; Local Inspiration
          </h1>
          <p className="text-lg text-charcoal-muted leading-relaxed max-w-3xl">
            Practical travel guides, local tips and inspiration for visiting and exploring Lincolnshire.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasPublished ? (
            <>
              <SectionHeader title="Latest guides" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                {publishedGuides.map((guide) => (
                  <GuideCard key={guide.id} guide={guide} />
                ))}
              </div>
            </>
          ) : (
            <div className="max-w-2xl mx-auto text-center bg-cream/30 border border-cream-dark/40 rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-3">
                Travel guides in research
              </h2>
              <p className="text-charcoal-muted leading-relaxed mb-4">
                Our editorial team is researching long-form Lincolnshire travel guides covering family days out, the coast, dog-friendly escapes and weekend breaks. We publish guides only once they have been written, fact-checked and properly credited.
              </p>
              <p className="text-charcoal-muted leading-relaxed">
                In the meantime, browse our{' '}
                <Link href="/town-guides" className="text-sage font-medium underline hover:text-sage-dark">town guides</Link>,{' '}
                <Link href="/caravan-parks" className="text-sage font-medium underline hover:text-sage-dark">caravan park guides</Link> and{' '}
                <Link href="/lincolnshire-coast" className="text-sage font-medium underline hover:text-sage-dark">Lincolnshire Coast</Link> sections.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
