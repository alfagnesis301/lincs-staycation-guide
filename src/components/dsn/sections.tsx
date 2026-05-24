import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowDown,
  Bed,
  Calendar,
  Check,
  Map as MapIco,
  Plus,
  Shield,
  User,
} from '@/components/dsn/Icons';
import { Button, Eyebrow } from '@/components/dsn/primitives';

/* ---------------- TrustStrip ---------------- */
export function TrustStrip({
  verifiedCount,
  lastUpdated,
  monthlyVisitors,
}: {
  verifiedCount?: number;
  lastUpdated?: string;
  monthlyVisitors?: string;
}) {
  return (
    <div className="dsn-trust" role="region" aria-label="Independence and trust signals">
      <span className="label">Trusted source</span>
      <div className="dsn-trust-items">
        <span className="dsn-trust-item">
          <Shield width={14} height={14} />
          Independently curated
        </span>
        {typeof verifiedCount === 'number' && (
          <span className="dsn-trust-item">
            <Check width={14} height={14} />
            {verifiedCount} verified businesses
          </span>
        )}
        {lastUpdated && (
          <span className="dsn-trust-item">
            <Calendar width={14} height={14} />
            Updated {lastUpdated}
          </span>
        )}
        {monthlyVisitors && (
          <span className="dsn-trust-item">
            <User width={14} height={14} />
            {monthlyVisitors}
          </span>
        )}
      </div>
    </div>
  );
}

/* ---------------- HomeHero ---------------- */
export function HomeHero({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <section className="dsn-hero">
      <div className="dsn-hero-grid" aria-hidden />
      <Eyebrow>Lincolnshire Guides · Places to Stay</Eyebrow>
      <h1 className="dsn-hero-title">
        Places to stay in <em>Lincolnshire</em>, by location.
      </h1>
      <p className="dsn-hero-sub">
        Browse hotels, B&amp;Bs, guest houses, inns, apartments and holiday
        cottages across the coast, Wolds, Fens, city and market towns — selected
        options worth comparing in one place.
      </p>
      <div className="dsn-hero-actions">
        <Link href="/places-to-stay" className="dsn-btn primary lg">
          Browse by location <ArrowDown width={15} height={15} />
        </Link>
        <Link href="/town-guides" className="dsn-btn ghost lg">
          View town guides <MapIco width={15} height={15} />
        </Link>
      </div>
      {stats.length > 0 && (
        <div className="dsn-hero-meta">
          {stats.map((s, i) => (
            <span key={s.label} style={{ display: 'contents' }}>
              <div className="item">
                <span className="num">{s.value}</span>
                <span className="lbl">{s.label}</span>
              </div>
              {i < stats.length - 1 && <div className="sep" />}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

/* ---------------- LocationHero (town guide) ---------------- */
export function LocationHero({
  region,
  title,
  italic,
  lead,
  body,
  bestFor,
  imageLabel,
  imageContext,
  primaryCta,
  ghostCta,
  quickFacts,
}: {
  region: string;
  title: string;
  italic?: string;
  lead: string;
  body?: string;
  bestFor?: string;
  imageLabel?: string;
  imageContext?: string;
  primaryCta?: { label: string; href: string; icon?: ReactNode };
  ghostCta?: { label: string; href: string; icon?: ReactNode };
  quickFacts?: { icon: ReactNode; head: string; value: ReactNode }[];
}) {
  return (
    <section className="dsn-loc-hero">
      <div className="dsn-loc-hero-grid">
        <div>
          <span className="dsn-region-pill">{region}</span>
          <h1>
            {title}
            {italic && (
              <>
                {' '}
                <em>{italic}</em>
              </>
            )}
          </h1>
          <p className="lead">{lead}</p>
          {body && <p className="body">{body}</p>}
          {bestFor && (
            <div className="best-for">
              <b>Best for:</b>
              {bestFor}
            </div>
          )}
        </div>
        <div>
          <div className="dsn-loc-image">
            {imageLabel && <div className="dsn-loc-image-watermark">{imageLabel}</div>}
            {imageContext && (
              <div className="dsn-loc-image-overlay">
                <span>
                  <span className="lbl">Area context</span>
                  <br />
                  <span className="name">{imageContext}</span>
                </span>
              </div>
            )}
          </div>
          {(primaryCta || ghostCta) && (
            <div style={{ marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="dsn-btn primary"
                  style={{ flex: 1, justifyContent: 'center', minWidth: 140 }}
                >
                  {primaryCta.icon}
                  {primaryCta.label}
                </Link>
              )}
              {ghostCta && (
                <Link
                  href={ghostCta.href}
                  className="dsn-btn ghost"
                  style={{ flex: 1, justifyContent: 'center', minWidth: 140 }}
                >
                  {ghostCta.icon}
                  {ghostCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      {quickFacts && quickFacts.length > 0 && (
        <div className="dsn-facts">
          {quickFacts.map((f) => (
            <div key={f.head} className="dsn-fact">
              <span className="dsn-fact-head">
                <span className="icon">{f.icon}</span>
                {f.head}
              </span>
              <span className="dsn-fact-val">{f.value}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

/* ---------------- CaravanHero ---------------- */
export function CaravanHero() {
  return (
    <section className="dsn-cv-hero">
      <div className="dsn-cv-hero-grid">
        <div>
          <Eyebrow>Lincolnshire Caravan Parks</Eyebrow>
          <h1>
            Caravan Parks &amp; Holiday Parks in <em>Lincolnshire</em>
          </h1>
          <p className="lead">
            Compare caravan parks, touring sites, holiday lodges, glamping stays
            and family-friendly breaks across Lincolnshire&apos;s coast,
            countryside, market towns and city areas.
          </p>
          <div
            style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap' }}
          >
            <Link href="#by-region" className="dsn-btn primary lg">
              Explore by location <ArrowDown width={15} height={15} />
            </Link>
            <Link href="/add-your-business" className="dsn-btn ghost lg">
              <Plus width={15} height={15} />
              Add your holiday park
            </Link>
          </div>
          <div
            style={{
              marginTop: 28,
              display: 'flex',
              gap: 24,
              flexWrap: 'wrap',
              fontSize: 13,
              color: 'var(--ink-3)',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Check width={14} height={14} style={{ color: 'var(--sage-2)' }} />
              Selected parks worth comparing
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Check width={14} height={14} style={{ color: 'var(--sage-2)' }} />
              Touring · static · glamping · lodge
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Check width={14} height={14} style={{ color: 'var(--sage-2)' }} />
              Free to use — booked direct
            </span>
          </div>
        </div>
        <div className="dsn-cv-hero-collage">
          <div className="dsn-cv-tile-1">
            <Image
              src="/images/lincolnshire/skegness.jpg"
              alt="Skegness seafront on the Lincolnshire Coast"
              fill
              priority
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" aria-hidden="true" />
            <span className="dsn-cv-tile-label">Coast · Skegness</span>
          </div>
          <div className="dsn-cv-tile-2">
            <Image
              src="/images/lincolnshire/louth.jpg"
              alt="Louth and the Lincolnshire Wolds area"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" aria-hidden="true" />
            <span className="dsn-cv-tile-label">Wolds · Louth</span>
          </div>
          <div className="dsn-cv-tile-3">
            <Image
              src="/images/lincolnshire/stamford.jpg"
              alt="Historic Stamford, useful for countryside and glamping breaks nearby"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" aria-hidden="true" />
            <span className="dsn-cv-tile-label">Glamping · Stamford</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTABanner ---------------- */
export function CTABanner({
  eyebrow,
  title,
  body,
  primary,
  secondary,
  stats,
}: {
  eyebrow: string;
  title: string;
  body: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  stats?: { n: string; l: string }[];
}) {
  return (
    <section className="dsn-section">
      <div className="dsn-cta-banner">
        <div style={{ position: 'relative' }}>
          <span
            className="dsn-eyebrow"
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: 'oklch(0.85 0.04 145)',
              borderColor: 'rgba(255,255,255,0.16)',
            }}
          >
            <span className="dot" />
            {eyebrow}
          </span>
          <h3 style={{ marginTop: 14 }}>{title}</h3>
          <p>{body}</p>
          <div className="actions" style={{ marginTop: 22 }}>
            {primary && (
              <Link href={primary.href} className="dsn-btn primary">
                <Plus width={14} height={14} />
                {primary.label}
              </Link>
            )}
            {secondary && (
              <Link href={secondary.href} className="dsn-btn ghost">
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
        {stats && (
          <div className="stats">
            {stats.map((s) => (
              <div key={s.l} className="stat">
                <div className="n">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- FAQGrid (with JSON-LD) ---------------- */
export function FAQGrid({
  items,
  emitJsonLd = true,
}: {
  items: { q: string; a: string }[];
  emitJsonLd?: boolean;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((x) => ({
      '@type': 'Question',
      name: x.q,
      acceptedAnswer: { '@type': 'Answer', text: x.a },
    })),
  };
  return (
    <>
      {emitJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 14,
        }}
      >
        {items.map((x) => (
          <details
            key={x.q}
            style={{
              background: 'white',
              border: '1px solid var(--line)',
              borderRadius: 14,
              padding: '20px 22px',
            }}
          >
            <summary
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 19,
                fontWeight: 500,
                letterSpacing: '-.02em',
                cursor: 'pointer',
                listStyle: 'none',
              }}
            >
              {x.q}
            </summary>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                color: 'var(--ink-2)',
                marginTop: 10,
              }}
            >
              {x.a}
            </p>
          </details>
        ))}
      </div>
    </>
  );
}

/* ---------------- HowItWorks ---------------- */
export function HowItWorks() {
  const steps = [
    {
      n: '01',
      icon: <MapIco width={18} height={18} />,
      h: 'Pick a region',
      p: 'Choose by region type — Coast, Wolds, City, Fens — or jump straight to a town guide.',
    },
    {
      n: '02',
      icon: <Bed width={18} height={18} />,
      h: 'Compare options',
      p: 'Compare stay types, locations and practical details, then use official websites or map-based routes where available.',
    },
    {
      n: '03',
      icon: <Calendar width={18} height={18} />,
      h: 'Check live details',
      p: 'Confirm current availability, facilities, policies and prices directly with the operator or booking platform before committing.',
    },
  ];
  return (
    <div className="dsn-card-grid">
      {steps.map((s) => (
        <div
          key={s.n}
          className="dsn-card"
          style={{ padding: 24, gap: 12, display: 'flex', flexDirection: 'column' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span className="dsn-iconchip">{s.icon}</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--ink-4)',
                letterSpacing: '.06em',
              }}
            >
              {s.n} / 03
            </span>
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: '-.02em',
              marginTop: 8,
            }}
          >
            {s.h}
          </h3>
          <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)' }}>
            {s.p}
          </p>
        </div>
      ))}
    </div>
  );
}

/* placate the importer linter — Button is re-exported for convenience */
export { Button };
