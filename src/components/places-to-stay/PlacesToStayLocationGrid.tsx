'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { PlacesToStayGuide } from '@/data/placesToStayGuides';
import type { RegionType } from '@/data/caravanParkGuides';

interface Props {
  guides: PlacesToStayGuide[];
}

const regionIcon: Record<RegionType, string> = {
  City: '🏛️',
  Coast: '🌊',
  'Market town': '🏘️',
  Countryside: '🌿',
  Wolds: '⛰️',
  Fens: '🌾',
};

const allRegions: RegionType[] = ['Coast', 'City', 'Market town', 'Countryside', 'Wolds', 'Fens'];

export default function PlacesToStayLocationGrid({ guides }: Props) {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState<RegionType | null>(null);

  const filtered = useMemo(() => {
    return guides.filter((guide) => {
      const q = search.trim().toLowerCase();
      const matchesRegion = !region || guide.regionType === region;
      const matchesQuery =
        !q ||
        guide.location.toLowerCase().includes(q) ||
        guide.title.toLowerCase().includes(q) ||
        guide.regionType.toLowerCase().includes(q) ||
        guide.bestFor.toLowerCase().includes(q);

      return matchesRegion && matchesQuery;
    });
  }, [guides, region, search]);

  return (
    <section id="by-location" className="bg-cream/30 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-heading mb-3 text-2xl font-bold text-charcoal sm:text-3xl">
            Browse places to stay by location
          </h2>
          <p className="leading-relaxed text-charcoal-muted">
            Compare location-based accommodation guides across Lincolnshire. Current researched options focus on
            verified holiday parks, lodges, touring, camping and glamping while broader hotel and B&amp;B research is
            curated.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-cream-dark/40 bg-white p-4 sm:p-5">
          <div className="relative mb-4">
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by town, coast, countryside or region..."
              className="w-full rounded-xl border border-cream-dark bg-cream/40 py-2.5 pl-10 pr-4 text-sm focus:border-coast focus:outline-none focus:ring-2 focus:ring-coast/20"
              aria-label="Search places to stay guides"
            />
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter places to stay guides by region">
            <button
              type="button"
              onClick={() => setRegion(null)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all sm:text-sm ${
                !region
                  ? 'border-sage bg-sage text-white'
                  : 'border-cream-dark bg-white text-charcoal-light hover:border-sage/30 hover:text-sage'
              }`}
            >
              All regions
            </button>
            {allRegions.map((regionName) => (
              <button
                key={regionName}
                type="button"
                onClick={() => setRegion(region === regionName ? null : regionName)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all sm:text-sm ${
                  region === regionName
                    ? 'border-sage bg-sage text-white'
                    : 'border-cream-dark bg-white text-charcoal-light hover:border-sage/30 hover:text-sage'
                }`}
              >
                <span className="mr-1" aria-hidden="true">{regionIcon[regionName]}</span>
                {regionName}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {filtered.map((guide) => (
              <Link
                key={guide.id}
                href={guide.href}
                className="card-hover group block rounded-2xl border border-cream-dark/60 bg-white p-5 transition-all hover:border-sage/40 hover:shadow-lg hover:shadow-sage/5"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <span className="flex-shrink-0 text-2xl" role="img" aria-label={guide.regionType}>
                    {regionIcon[guide.regionType]}
                  </span>
                  <span className="badge badge-coast text-[11px]">{guide.regionType}</span>
                </div>
                <h3 className="font-heading mb-2 text-lg font-semibold text-charcoal transition-colors group-hover:text-sage">
                  Places to Stay in {guide.location}
                </h3>
                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-charcoal-muted">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between gap-3 text-xs text-charcoal-muted">
                  <span>{guide.options.length} curated options</span>
                  <span className="inline-flex items-center gap-1 font-medium text-sage group-hover:text-sage-dark">
                    View guide
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-cream-dark/40 bg-white py-12 text-center">
            <p className="text-charcoal-muted">No location guides match your search. Try another region or clear the filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
