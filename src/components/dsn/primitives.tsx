import type { ReactNode } from 'react';

/* ---------------- Eyebrow ---------------- */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="dsn-eyebrow">
      <span className="dot" />
      {children}
    </span>
  );
}

/* ---------------- SectionHead ----------------
   Canonical pattern: eyebrow → h2 → sub → accent rule + right slot
*/
export function SectionHead({
  eyebrow,
  title,
  sub,
  right,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div className="dsn-section-head">
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 style={{ marginTop: 14 }}>{title}</h2>
        {sub && <p className="sub">{sub}</p>}
        <div className="accent" />
      </div>
      {right && <div className="dsn-section-head-right">{right}</div>}
    </div>
  );
}

/* ---------------- RegionPill ----------------
   Tone: sage (default) · coast · warm · fen
*/
type RegionTone = 'sage' | 'coast' | 'warm' | 'fen';

export function RegionPill({
  tone = 'sage',
  children,
}: {
  tone?: RegionTone;
  children: ReactNode;
}) {
  const cls = tone === 'sage' ? 'dsn-region-pill' : `dsn-region-pill ${tone}`;
  return <span className={cls}>{children}</span>;
}

/* ---------------- AdSlot ----------------
   Reserves CLS-safe min-height. Always renders an AD label.
*/
type AdSize = 'leaderboard' | 'mrec' | 'mobile' | 'sidebar';

export function AdSlot(_props: {
  size?: AdSize;
  slotId: string;
  className?: string;
}) {
  void _props;
  return null;
}

/* ---------------- Breadcrumb ---------------- */
export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav className="dsn-breadcrumb" aria-label="Breadcrumb">
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            {it.href && !last ? (
              <a href={it.href}>{it.label}</a>
            ) : (
              <span className={last ? 'current' : undefined}>{it.label}</span>
            )}
            {!last && <span className="sep">›</span>}
          </span>
        );
      })}
    </nav>
  );
}

/* ---------------- Button (DSN style) ---------------- */
export function Button({
  variant = 'primary',
  size,
  children,
  ...rest
}: {
  variant?: 'primary' | 'ghost';
  size?: 'lg';
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={`dsn-btn ${variant}${size === 'lg' ? ' lg' : ''}`}
      {...rest}
    >
      {children}
    </button>
  );
}
