import type { ReactNode } from 'react';
import { AlertCircle, Search } from '@/components/dsn/Icons';

/* ---------------- EmptyState ---------------- */
export function EmptyState({
  title = 'No results match those filters',
  message = 'Try removing a filter, or browse another region.',
  icon,
  actions,
}: {
  title?: string;
  message?: string;
  icon?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div
      role="status"
      style={{
        background: 'white',
        border: '1px solid var(--line)',
        borderRadius: 14,
        padding: '40px 28px',
        textAlign: 'center',
        minHeight: 340,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 14,
          background: 'var(--sage-tint)',
          display: 'grid',
          placeItems: 'center',
          color: 'var(--sage-dark)',
        }}
      >
        {icon ?? <Search width={24} height={24} />}
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 22,
          fontWeight: 500,
          letterSpacing: '-.02em',
          marginTop: 18,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 13.5,
          color: 'var(--ink-3)',
          lineHeight: 1.55,
          marginTop: 8,
          maxWidth: '32ch',
        }}
      >
        {message}
      </p>
      {actions && (
        <div
          style={{
            marginTop: 18,
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {actions}
        </div>
      )}
    </div>
  );
}

/* ---------------- Skeleton primitives ---------------- */
export function Skeleton({
  w,
  h = 12,
  radius = 4,
  style,
}: {
  w?: number | string;
  h?: number | string;
  radius?: number;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden
      className="dsn-skeleton"
      style={{
        display: 'block',
        width: w ?? '100%',
        height: h,
        borderRadius: radius,
        ...style,
      }}
    />
  );
}

export function ListingCardSkeleton() {
  return (
    <div
      style={{
        background: 'white',
        border: '1px solid var(--line)',
        borderRadius: 14,
        overflow: 'hidden',
      }}
    >
      <Skeleton h={0} style={{ aspectRatio: '5 / 3', height: 'auto' }} />
      <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Skeleton w="40%" h={8} />
        <Skeleton w="80%" h={16} />
        <Skeleton w="60%" h={10} />
      </div>
    </div>
  );
}

export function ListingGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading listings"
    >
      <div className="dsn-card-grid">
        {Array.from({ length: count }).map((_, i) => (
          <ListingCardSkeleton key={i} />
        ))}
      </div>
      <div
        style={{
          marginTop: 16,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--ink-3)',
        }}
      >
        <span className="dsn-spinner" />
        Loading listings…
      </div>
    </div>
  );
}

/* ---------------- ErrorState ---------------- */
export function ErrorState({
  code,
  title = "We couldn't load this list",
  message = 'The directory is briefly unreachable. Refresh, or browse by region from the navigation.',
  actions,
}: {
  code?: string;
  title?: string;
  message?: string;
  actions?: ReactNode;
}) {
  return (
    <div
      role="alert"
      style={{
        background: 'white',
        border: '1px solid var(--line)',
        borderLeft: '3px solid oklch(0.62 0.13 35)',
        borderRadius: 14,
        padding: '40px 28px',
        textAlign: 'center',
        minHeight: 340,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 14,
          background: 'oklch(0.95 0.05 35)',
          display: 'grid',
          placeItems: 'center',
          color: 'oklch(0.45 0.13 35)',
        }}
      >
        <AlertCircle width={24} height={24} />
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 22,
          fontWeight: 500,
          letterSpacing: '-.02em',
          marginTop: 18,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 13.5,
          color: 'var(--ink-3)',
          lineHeight: 1.55,
          marginTop: 8,
          maxWidth: '32ch',
        }}
      >
        {message}
      </p>
      {actions && (
        <div
          style={{
            marginTop: 18,
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {actions}
        </div>
      )}
      {code && (
        <div
          style={{
            marginTop: 14,
            fontFamily: 'var(--font-mono)',
            fontSize: 10.5,
            color: 'oklch(0.55 0.13 35)',
          }}
        >
          {code}
        </div>
      )}
    </div>
  );
}
