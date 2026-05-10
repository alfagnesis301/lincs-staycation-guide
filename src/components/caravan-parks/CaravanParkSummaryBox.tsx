import type { CaravanParkGuide } from '@/data/caravanParkGuides';

interface Props {
  guide: CaravanParkGuide;
}

export default function CaravanParkSummaryBox({ guide }: Props) {
  // Aggregate top 5 most useful filter chips actually present in this guide
  const tagCounts = new Map<string, number>();
  for (const p of guide.parks) {
    for (const t of p.tags) tagCounts.set(t, (tagCounts.get(t) ?? 0) + 1);
  }
  const popularFilters = Array.from(tagCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([t]) => t);

  const items: Array<{ label: string; value: string; icon: string }> = [
    { label: 'Location', value: `${guide.location}, Lincolnshire`, icon: '📍' },
    { label: 'Listed parks', value: `${guide.parks.length} curated options`, icon: '🏕️' },
    { label: 'Best for', value: guide.contentAngle, icon: '✨' },
    { label: 'Last updated', value: guide.lastUpdated, icon: '🗓️' },
  ];

  return (
    <section className="py-8 bg-white border-b border-cream-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream/40 rounded-2xl border border-cream-dark/40 p-5 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {items.map((it) => (
              <div key={it.label} className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0" aria-hidden="true">{it.icon}</span>
                <div>
                  <dt className="text-xs font-medium text-charcoal-muted uppercase tracking-wide mb-1">{it.label}</dt>
                  <dd className="text-sm text-charcoal leading-snug">{it.value}</dd>
                </div>
              </div>
            ))}
          </div>

          {popularFilters.length > 0 && (
            <div className="mt-5 pt-5 border-t border-cream-dark/40">
              <p className="text-xs font-medium text-charcoal-muted uppercase tracking-wide mb-2">Popular filters in this guide</p>
              <div className="flex flex-wrap gap-1.5">
                {popularFilters.map((t) => (
                  <span key={t} className="badge badge-sage text-[11px]">{t}</span>
                ))}
              </div>
            </div>
          )}

          <p className="mt-5 pt-5 border-t border-cream-dark/40 text-xs text-charcoal-muted leading-relaxed">
            <strong className="text-charcoal">Editorial note:</strong> {guide.editorialNote}
          </p>
        </div>
      </div>
    </section>
  );
}
