import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import GuideCard from '@/components/GuideCard';
import { guides } from '@/data/guides';

export const metadata: Metadata = {
  title: 'Lincolnshire Travel Guides & Local Inspiration | Blog',
  description: 'Read practical travel guides, local tips and inspiration for visiting Lincolnshire. Family days out, beaches, dog-friendly escapes and more.',
  openGraph: {
    title: 'Lincolnshire Travel Guides & Local Inspiration',
    description: 'Read practical travel guides, local tips and inspiration for visiting Lincolnshire.',
  },
  alternates: { canonical: '/blog' },
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
            Lincolnshire Travel Guides & Local Inspiration
          </h1>
          <p className="text-lg text-charcoal-muted leading-relaxed max-w-3xl">
            Practical travel guides, local tips and inspiration for visiting and exploring Lincolnshire.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Latest guides" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {guides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
