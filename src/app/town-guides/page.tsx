import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import TownCard from '@/components/TownCard';
import { towns } from '@/data/towns';

export const metadata: Metadata = {
  title: 'Lincolnshire Town Guides | Lincoln, Skegness, Stamford & More',
  description: 'Explore practical travel guides for Lincolnshire\'s cities, towns and coastal destinations.',
  openGraph: {
    title: 'Lincolnshire Town Guides',
    description: 'Compare Lincolnshire city, coast, market-town and countryside guides for practical trip planning.',
  },
  alternates: { canonical: '/town-guides' },
};

export default function TownGuidesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Lincolnshire Town Guides',
    description: 'Town-by-town Lincolnshire planning guides covering stays, attractions, food stops and local context.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero-gradient py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Town Guides' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Lincolnshire Town Guides
          </h1>
          <p className="text-lg text-charcoal-muted leading-relaxed max-w-3xl">
            Explore practical travel guides for Lincolnshire&apos;s cities, towns and coastal destinations.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Cities & towns" subtitle="Browse guides by destination." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
            {towns.map((town) => (
              <TownCard key={town.id} town={town} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
