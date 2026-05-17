'use client';

export type FilterChip = {
  id: string;
  label: string;
  count?: number;
};

type FilterChipsProps = {
  label: string;
  filters: FilterChip[];
  activeFilters: string[];
  onChange: (nextFilters: string[]) => void;
};

export function FilterChips({ label, filters, activeFilters, onChange }: FilterChipsProps) {
  function toggleFilter(filterId: string) {
    const isActive = activeFilters.includes(filterId);
    onChange(isActive ? activeFilters.filter((id) => id !== filterId) : [...activeFilters, filterId]);
  }

  return (
    <div className="rounded-2xl border border-cream-dark/60 bg-white p-4" aria-label={label}>
      <p className="text-sm font-semibold text-charcoal">{label}</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label={label}>
        {filters.map((filter) => {
          const isActive = activeFilters.includes(filter.id);
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => toggleFilter(filter.id)}
              className={[
                'min-h-[44px] rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage',
                isActive
                  ? 'border-sage bg-sage text-white'
                  : 'border-cream-dark/70 bg-cream/30 text-charcoal-muted hover:border-sage/40 hover:bg-sage/10',
              ].join(' ')}
            >
              <span>{filter.label}</span>
              {typeof filter.count === 'number' ? <span className="ml-1 opacity-80">({filter.count})</span> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
