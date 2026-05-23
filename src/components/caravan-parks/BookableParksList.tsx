'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  bookableCaravanParks,
  getParkImage,
  sortParks,
  tagLabel,
  type BookableCaravanPark,
  type SortOption,
  type VisitorTag,
} from '@/data/bookableCaravanParks';

type FilterId =
  | 'all'
  | 'compare-first'
  | 'family-friendly'
  | 'dog-friendly'
  | 'near-beach'
  | 'touring'
  | 'lodges'
  | 'glamping'
  | 'fishing'
  | 'quiet-stays'
  | 'open-all-year'
  | 'skegness'
  | 'chapel-st-leonards'
  | 'mablethorpe'
  | 'lincoln-woodhall';

const FILTERS: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'All parks' },
  { id: 'compare-first', label: 'Compare first' },
  { id: 'family-friendly', label: 'Family-friendly' },
  { id: 'dog-friendly', label: 'Dog-friendly' },
  { id: 'near-beach', label: 'Near beach' },
  { id: 'touring', label: 'Touring & camping' },
  { id: 'lodges', label: 'Lodges' },
  { id: 'glamping', label: 'Glamping' },
  { id: 'fishing', label: 'Fishing' },
  { id: 'quiet-stays', label: 'Quiet stays' },
  { id: 'open-all-year', label: 'Open all year' },
  { id: 'skegness', label: 'Skegness area' },
  { id: 'chapel-st-leonards', label: 'Chapel St Leonards area' },
  { id: 'mablethorpe', label: 'Mablethorpe area' },
  { id: 'lincoln-woodhall', label: 'Lincoln / Woodhall Spa area' },
];

const SORT_OPTIONS: { id: SortOption; label: string }[] = [
  { id: 'recommended', label: 'Compare first' },
  { id: 'alphabetical', label: 'Sort alphabetically' },
  { id: 'location', label: 'Sort by location' },
  { id: 'familyFriendly', label: 'Family-friendly first' },
  { id: 'dogFriendly', label: 'Dog-friendly first' },
  { id: 'nearBeach', label: 'Near beach first' },
  { id: 'touringCamping', label: 'Touring & camping first' },
  { id: 'lodges', label: 'Lodges first' },
  { id: 'glamping', label: 'Glamping first' },
  { id: 'quietStays', label: 'Quiet stays first' },
];

// Visitor-facing badge styling. Discrete, professional, no priority language.
const TAG_BADGE: Record<VisitorTag, string> = {
  'family-friendly': 'bg-blue-50 text-blue-800 border border-blue-100',
  'dog-friendly': 'bg-emerald-50 text-emerald-800 border border-emerald-100',
  'near-beach': 'bg-sky-50 text-sky-800 border border-sky-100',
  touring: 'bg-amber-50 text-amber-800 border border-amber-100',
  lodges: 'bg-stone-50 text-stone-800 border border-stone-200',
  glamping: 'bg-violet-50 text-violet-800 border border-violet-100',
  fishing: 'bg-teal-50 text-teal-800 border border-teal-100',
  'quiet-stays': 'bg-gray-50 text-gray-700 border border-gray-200',
  'open-all-year': 'bg-cream text-charcoal border border-cream-dark/60',
};

const COMPARE_FIRST_BADGE = 'bg-indigo-50 text-indigo-800 border border-indigo-100';

function applyFilter(parks: BookableCaravanPark[], filter: FilterId): BookableCaravanPark[] {
  switch (filter) {
    case 'all':
      return parks;
    case 'compare-first':
      return parks.filter(
        (p) =>
          p.internalMonetizationPriority === 'very-high' ||
          p.internalMonetizationPriority === 'high'
      );
    case 'family-friendly':
    case 'dog-friendly':
    case 'near-beach':
    case 'touring':
    case 'lodges':
    case 'glamping':
    case 'fishing':
    case 'quiet-stays':
    case 'open-all-year':
      return parks.filter((p) => p.tags.includes(filter as VisitorTag));
    case 'skegness':
      return parks.filter((p) => p.area === 'Skegness' || p.area === 'Ingoldmells');
    case 'chapel-st-leonards':
      return parks.filter((p) => p.area === 'Chapel St Leonards');
    case 'mablethorpe':
      return parks.filter((p) => p.area === 'Mablethorpe' || p.area === 'Sutton-on-Sea');
    case 'lincoln-woodhall':
      return parks.filter((p) => p.area === 'Lincoln' || p.area === 'Woodhall Spa');
    default:
      return parks;
  }
}

const SECTIONS: {
  id: 'recommended' | 'more' | 'direct';
  title: string;
  intro: string;
  match: (p: BookableCaravanPark) => boolean;
}[] = [
  {
    id: 'recommended',
    title: 'Caravan parks to compare first',
    intro:
      'These options are grouped first to help visitors compare useful caravan parks, holiday parks, touring sites and lodge stays across Lincolnshire.',
    match: (p) =>
      p.internalMonetizationPriority === 'very-high' ||
      p.internalMonetizationPriority === 'high',
  },
  {
    id: 'more',
    title: 'More bookable caravan parks',
    intro:
      'These parks may also be available through travel platforms, private listings or direct booking options.',
    match: (p) => p.internalMonetizationPriority === 'medium',
  },
  {
    id: 'direct',
    title: 'Direct booking and smaller parks',
    intro:
      'These parks are typically booked directly with the operator. They can still be a useful option for visitors looking for quieter or smaller stays.',
    match: (p) => p.internalMonetizationPriority === 'low',
  },
];

export default function BookableParksList() {
  const [filter, setFilter] = useState<FilterId>('all');
  const [sort, setSort] = useState<SortOption>('recommended');

  const filtered = useMemo(
    () => sortParks(applyFilter(bookableCaravanParks, filter), sort),
    [filter, sort]
  );

  const useSections = filter === 'all' && sort === 'recommended';

  return (
    <section className="py-10 sm:py-14 bg-cream/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label="Filter parks">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={`text-xs sm:text-sm px-3 py-1.5 rounded-full border transition-colors ${
                filter === f.id
                  ? 'bg-sage text-white border-sage'
                  : 'bg-white text-charcoal border-cream-dark/60 hover:border-sage/50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="mb-8 flex items-center gap-3">
          <label htmlFor="park-sort" className="text-sm text-charcoal-muted">
            Sort:
          </label>
          <select
            id="park-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="text-sm bg-white border border-cream-dark/60 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-sage/40"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
          <span className="ml-auto text-xs text-charcoal-muted">
            {filtered.length} park{filtered.length === 1 ? '' : 's'}
          </span>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <p className="text-charcoal-muted text-sm">
            No parks match this filter. Try a different option.
          </p>
        ) : useSections ? (
          SECTIONS.map((section) => {
            const items = filtered.filter(section.match);
            if (items.length === 0) return null;
            return (
              <div key={section.id} className="mb-12">
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-charcoal mb-2">
                  {section.title}
                </h2>
                <p className="text-sm text-charcoal-muted leading-relaxed mb-5 max-w-3xl">
                  {section.intro}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((p) => (
                    <ParkCard key={p.id} park={p} />
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <ParkCard key={p.id} park={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/** Visitor-facing badges shown on each card (max ~3). Never exposes internal data. */
function visitorBadges(park: BookableCaravanPark): { key: string; label: string; cls: string }[] {
  const badges: { key: string; label: string; cls: string }[] = [];
  const isCompareFirst =
    park.internalMonetizationPriority === 'very-high' ||
    park.internalMonetizationPriority === 'high';
  if (isCompareFirst) {
    badges.push({ key: 'compare-first', label: 'Compare first', cls: COMPARE_FIRST_BADGE });
  }
  // Pick up to 2 most-relevant tags after the comparison badge.
  const tagOrder: VisitorTag[] = [
    'family-friendly',
    'near-beach',
    'lodges',
    'touring',
    'glamping',
    'fishing',
    'dog-friendly',
    'quiet-stays',
    'open-all-year',
  ];
  for (const t of tagOrder) {
    if (badges.length >= 3) break;
    if (park.tags.includes(t)) {
      badges.push({ key: t, label: tagLabel(t), cls: TAG_BADGE[t] });
    }
  }
  return badges;
}

function ParkCard({ park }: { park: BookableCaravanPark }) {
  const hasAffiliate = Boolean(park.affiliateUrl && park.affiliateUrl.trim());
  const hasOfficial = Boolean(park.officialUrl && park.officialUrl.trim());
  const badges = visitorBadges(park);
  const { image, status } = getParkImage(park);

  return (
    <article
      id={`listing-${park.id}`}
      className="bg-white rounded-2xl border border-cream-dark/60 overflow-hidden flex flex-col h-full hover:shadow-sm transition-shadow"
    >
      {/* Image / placeholder */}
      <div className="relative w-full aspect-[16/10] bg-cream/60">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-3xl text-charcoal-muted/60">
            <span aria-hidden="true">🏖️</span>
            <span className="sr-only">{park.name}</span>
          </div>
        )}
        {image && (
          <Link
            href={`/image-credits#listing-${park.id}`}
            aria-label={`Photo credits for ${park.name}`}
            className="absolute bottom-2 right-2 text-[10px] bg-white/85 hover:bg-white text-charcoal-muted px-2 py-0.5 rounded-full border border-white/60 shadow-sm"
          >
            {status === 'area-context-image' ? 'Area photo · credits' : 'Photo credits'}
          </Link>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
      <div className="flex items-center gap-1.5 mb-3 flex-wrap">
        {badges.map((b) => (
          <span
            key={b.key}
            className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${b.cls}`}
          >
            {b.label}
          </span>
        ))}
      </div>

      <h3 className="font-heading text-base font-semibold text-charcoal leading-snug mb-1">
        {park.name}
      </h3>
      <p className="text-xs text-charcoal-muted mb-3">📍 {park.location}</p>

      <p className="text-xs text-charcoal-muted leading-relaxed mb-2">
        <strong className="text-charcoal">Good for:</strong> {park.bestFor}
      </p>
      <p className="text-xs text-charcoal-muted leading-relaxed mb-3">{park.description}</p>

      {park.tags.length > 0 && (
        <p className="text-[11px] text-charcoal-muted mb-4">
          {park.tags.map(tagLabel).join(' · ')}
        </p>
      )}

      <div className="mt-auto flex flex-col gap-2">
        {hasAffiliate ? (
          <>
            <a
              href={park.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex items-center justify-center text-sm font-semibold bg-sage text-white px-4 py-2 rounded-lg hover:bg-sage-dark transition-colors"
            >
              Check availability
            </a>
            <span className="text-[10px] uppercase tracking-wide text-charcoal-muted text-center">
              Affiliate link
            </span>
          </>
        ) : hasOfficial ? (
          <a
            href={park.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-sm font-semibold bg-sage text-white px-4 py-2 rounded-lg hover:bg-sage-dark transition-colors"
          >
            Visit official website
          </a>
        ) : (
          <span className="inline-flex items-center justify-center text-xs italic text-charcoal-muted px-4 py-2">
            Details being verified
          </span>
        )}
      </div>
      </div>
    </article>
  );
}
