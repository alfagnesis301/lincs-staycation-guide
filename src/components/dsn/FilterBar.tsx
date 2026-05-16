'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useCallback } from 'react';
import { Grid, Map, Sliders } from '@/components/dsn/Icons';

export interface FilterRegion {
  id: string;
  label: string;
  count: number;
}

export function FilterBar({
  regions,
  paramKey = 'region',
  defaultActive = 'all',
  showViewToggle = true,
}: {
  regions: FilterRegion[];
  paramKey?: string;
  defaultActive?: string;
  showViewToggle?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname() ?? '/';
  const params = useSearchParams();
  const active = params?.get(paramKey) ?? defaultActive;
  const view = params?.get('view') ?? 'grid';

  const setParam = useCallback(
    (key: string, value: string | null) => {
      const next = new URLSearchParams(params?.toString() ?? '');
      if (value === null || value === defaultActive) next.delete(key);
      else next.set(key, value);
      const qs = next.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [router, pathname, params, defaultActive],
  );

  return (
    <div className="dsn-filter-bar" role="region" aria-label="Filters">
      <span className="dsn-filter-label">
        <Sliders width={14} height={14} /> Filter
      </span>
      <div className="dsn-chip-row" role="group" aria-label="Filter by region">
        {regions.map((r) => {
          const isActive = active === r.id;
          const disabled = r.count === 0;
          return (
            <button
              key={r.id}
              type="button"
              className={`dsn-chip${isActive ? ' active' : ''}`}
              aria-pressed={isActive}
              disabled={disabled}
              onClick={() => setParam(paramKey, isActive ? null : r.id)}
            >
              {r.label}
              <span className="count">{r.count}</span>
            </button>
          );
        })}
      </div>
      {showViewToggle && (
        <div className="dsn-filter-right">
          <div
            className="dsn-view-toggle"
            role="group"
            aria-label="View as grid or map"
          >
            <button
              type="button"
              className={view === 'grid' ? 'active' : ''}
              aria-pressed={view === 'grid'}
              onClick={() => setParam('view', 'grid')}
            >
              <Grid width={13} height={13} />
              Grid
            </button>
            <button
              type="button"
              className={view === 'map' ? 'active' : ''}
              aria-pressed={view === 'map'}
              onClick={() => setParam('view', 'map')}
            >
              <Map width={13} height={13} />
              Map
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
