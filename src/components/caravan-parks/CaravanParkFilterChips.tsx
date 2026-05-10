interface Props {
  filters: string[];
}

/**
 * Static, server-rendered filter chips. They are visual cues today and
 * are designed so client-side filtering can be added later without
 * affecting indexable content (which is always rendered in full).
 */
export default function CaravanParkFilterChips({ filters }: Props) {
  return (
    <section className="py-6 bg-white" aria-label="Useful filters in this guide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-medium text-charcoal-muted uppercase tracking-wide mb-3">
          Useful filters in this guide
        </p>
        <div className="flex flex-wrap gap-1.5">
          {filters.map((f) => (
            <span
              key={f}
              className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border bg-white text-charcoal-light border-cream-dark"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
