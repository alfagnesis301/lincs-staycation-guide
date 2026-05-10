import type { CaravanParkListing } from '@/data/caravanParkGuides';

interface Props {
  parks: CaravanParkListing[];
}

export default function CaravanParkComparisonTable({ parks }: Props) {
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-charcoal mb-2">Quick comparison</h2>
        <p className="text-sm text-charcoal-muted mb-6">A summary of all curated parks in this guide. Tap a row on mobile to scroll the full description below.</p>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-cream-dark/60">
          <table className="w-full text-sm">
            <thead className="bg-cream/50 text-charcoal">
              <tr>
                <th scope="col" className="text-left font-semibold px-4 py-3">Park / site</th>
                <th scope="col" className="text-left font-semibold px-4 py-3">Best for</th>
                <th scope="col" className="text-left font-semibold px-4 py-3">Good for</th>
                <th scope="col" className="text-left font-semibold px-4 py-3">Location notes</th>
                <th scope="col" className="text-left font-semibold px-4 py-3">More</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cream-dark/40">
              {parks.map((p) => (
                <tr key={p.id} className="hover:bg-cream/20">
                  <td className="px-4 py-3 font-medium text-charcoal align-top">
                    {p.name}
                    {p.isOutsideLincolnshire && (
                      <span className="ml-2 badge badge-sample text-[10px]">Outside Lincs</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-charcoal-muted align-top">{p.bestFor}</td>
                  <td className="px-4 py-3 align-top">
                    <div className="flex flex-wrap gap-1">
                      {p.tags.slice(0, 3).map((t) => (
                        <span key={t} className="badge badge-coast text-[10px]">{t}</span>
                      ))}
                      {p.tags.length > 3 && (
                        <span className="text-[10px] text-charcoal-muted">+{p.tags.length - 3}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-charcoal-muted align-top">
                    {p.locationContext ?? '—'}
                  </td>
                  <td className="px-4 py-3 align-top">
                    <a
                      href={`#${p.id}`}
                      className="text-sage font-medium hover:text-sage-dark hover:underline text-xs"
                    >
                      View details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {parks.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="block bg-cream/30 rounded-xl border border-cream-dark/50 p-4 hover:border-sage/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-medium text-charcoal text-sm leading-snug">{p.name}</h3>
                {p.isOutsideLincolnshire && (
                  <span className="badge badge-sample text-[10px] flex-shrink-0">Outside Lincs</span>
                )}
              </div>
              <p className="text-xs text-charcoal-muted mb-2">{p.bestFor}</p>
              <div className="flex flex-wrap gap-1">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="badge badge-coast text-[10px]">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
