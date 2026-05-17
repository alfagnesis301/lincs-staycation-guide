'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { CaravanParkGuide, RegionType } from '@/data/caravanParkGuides';

interface Props {
  guides: CaravanParkGuide[];
}

const regionIcon: Record<RegionType, string> = {
  City: '🏛️',
  Coast: '🌊',
  'Market town': '🏘️',
  Countryside: '🌿',
  Wolds: '⛰️',
  Fens: '🌾',
};

const ALL_REGIONS: RegionType[] = ['Coast', 'City', 'Market town', 'Countryside', 'Wolds', 'Fens'];

export default function CaravanParkLocationGrid({ guides }: Props) {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState<RegionType | null>(null);

  const filtered = useMemo(() => {
    return guides.filter((g) => {
      const matchesRegion = !region || g.regionType === region;
      const q = search.trim().toLowerCase();
      const matchesQuery =
        !q ||
        g.location.toLowerCase().includes(q) ||
        g.title.toLowerCase().includes(q) ||
        g.regionType.toLowerCase().includes(q) ||
        (g.nearbyAreas?.some((a) => a.toLowerCase().includes(q)) ?? false);
      return matchesRegion && matchesQuery;
    });
  }, [guides, search, region]);

  return (
    <section id="by-location" className="py-12 sm:py-16 lg:py-20 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal mb-3">
            Browse caravan park guides by location
          </h2>
          <p className="text-charcoal-muted leading-relaxed">
            Each guide compares curated holiday parks, touring sites, lodges and glamping in and around the area. Always check directly with each park before booking.
          </p>
        </div>

        {/* Search + filters */}
        <div className="bg-white rounded-2xl border border-cream-dark/40 p-4 sm:p-5 mb-8">
          <div className="relative mb-4">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by town, coast, countryside or park type..."
              className="w-full pl-10 pr-4 py-2.5 bg-cream/40 border border-cream-dark rounded-xl text-sm focus:outline-none focus:border-coast focus:ring-2 focus:ring-coast/20"
              aria-label="Search caravan park guides"
            />
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by region">
            <button
              type="button"
              onClick={() => setRegion(null)}
              aria-pressed={!region}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border transition-all ${
                !region
                  ? 'bg-sage text-white border-sage'
                  : 'bg-white text-charcoal-light border-cream-dark hover:border-sage/30 hover:text-sage'
              }`}
            >
              All regions
            </button>
            {ALL_REGIONS.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRegion(region === r ? null : r)}
                aria-pressed={region === r}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border transition-all ${
                  region === r
                    ? 'bg-sage text-white border-sage'
                    : 'bg-white text-charcoal-light border-cream-dark hover:border-sage/30 hover:text-sage'
                }`}
              >
                <span className="mr-1" aria-hidden="true">{regionIcon[r]}</span>
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {filtered.map((g) => (
              <Link
                key={g.id}
                href={`/caravan-parks/${g.slug}`}
                className="group block bg-white rounded-2xl border border-cream-dark/60 p-5 hover:border-sage/40 hover:shadow-lg hover:shadow-sage/5 transition-all card-hover"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-2xl flex-shrink-0" role="img" aria-label={g.regionType}>
                    {regionIcon[g.regionType]}
                  </span>
                  <span className="badge badge-coast text-[11px]">{g.regionType}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal group-hover:text-sage transition-colors mb-2">
                  Best Caravan Parks near {g.location}
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed mb-4 line-clamp-3">
                  {g.contentAngle}
                </p>
                <div className="flex items-center justify-between text-xs text-charcoal-muted">
                  <span>{g.parks.length} curated options</span>
                  <span className="inline-flex items-center gap-1 text-sage font-medium group-hover:text-sage-dark">
                    View guide
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-cream-dark/40">
            <p className="text-charcoal-muted">No location guides match your search. Try a different region or clear the filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
