import Link from 'next/link';
import { caravanParkGuides } from '@/data/caravanParkGuides';
import SectionHeader from '@/components/SectionHeader';

interface Props {
  /** Slug ids of guides to show in this strip, in order */
  ids: string[];
  title?: string;
  subtitle?: string;
  background?: 'cream' | 'white';
}

export default function PopularCaravanGuidesStrip({
  ids,
  title = 'Popular caravan park guides',
  subtitle = 'Compare caravan, lodge and touring options across Lincolnshire.',
  background = 'cream',
}: Props) {
  const items = ids
    .map((id) => caravanParkGuides.find((g) => g.id === id))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  if (items.length === 0) return null;

  const bg = background === 'white' ? 'bg-white' : 'bg-cream/40';

  return (
    <section className={`py-12 sm:py-16 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={title} subtitle={subtitle} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {items.map((g) => (
            <Link
              key={g.id}
              href={`/caravan-parks/${g.slug}`}
              className="group bg-white rounded-xl border border-cream-dark/60 p-4 hover:border-sage/40 hover:shadow-sm transition-all"
            >
              <span className="block text-xl mb-2" aria-hidden="true">
                {g.regionType === 'Coast' ? '🌊' : g.regionType === 'City' ? '🏛️' : g.regionType === 'Wolds' ? '⛰️' : g.regionType === 'Fens' ? '🌾' : '🌿'}
              </span>
              <h3 className="font-heading text-sm font-semibold text-charcoal group-hover:text-sage transition-colors leading-snug">
                Caravan Parks near {g.location} to Compare
              </h3>
              <span className="text-[11px] text-charcoal-muted block mt-1">
                {g.parks.length} options
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/caravan-parks"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sage hover:text-sage-dark transition-colors"
          >
            See all 16 caravan park location guides
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
