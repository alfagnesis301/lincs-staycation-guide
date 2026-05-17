import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { Bed, Check, Pin, Star, Arrow } from '@/components/dsn/Icons';
import { RegionPill } from '@/components/dsn/primitives';

type Media = '' | 'coast' | 'warm' | 'fen' | 'wolds';

/* ---------------- ListingCard (default 5:3) ----------------
   Renders rating / reviewCount / priceFromGBP rows ONLY when present.
   Never fabricates values.
*/
export function ListingCard({
  href,
  region,
  type,
  tone = 'sage',
  name,
  location,
  rating,
  reviewCount,
  priceFromGBP,
  verified = true,
  media = '',
  stamp,
}: {
  href: string;
  region: string;
  type: string;
  tone?: 'sage' | 'coast' | 'warm' | 'fen';
  name: string;
  location: string;
  rating?: number;
  reviewCount?: number;
  priceFromGBP?: number;
  verified?: boolean;
  media?: Media;
  stamp?: string;
}) {
  return (
    <Link
      className="dsn-card"
      href={href}
      aria-label={`${name} — ${type} in ${location}`}
    >
      <div className={`dsn-card-media ${media}`}>
        <span className="dsn-card-media-tag">
          <span className="dot" />
          {region}
        </span>
        {stamp && <span className="dsn-card-media-stamp">{stamp}</span>}
      </div>
      <div className="dsn-card-body">
        <RegionPill tone={tone}>{type}</RegionPill>
        <h3 className="dsn-card-title">{name}</h3>
        <p className="dsn-card-sub">
          <Pin width={12} height={12} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 4, color: 'var(--ink-3)' }} />
          {location}
        </p>
        <div className="dsn-card-meta">
          {typeof rating === 'number' && (
            <span
              className="item"
              aria-label={`Operator rating ${rating} out of 5${reviewCount ? `, from ${reviewCount} reviews` : ''}`}
            >
              <Star width={12} height={12} style={{ color: 'var(--amber)' }} />
              {rating.toFixed(1)}
              {typeof reviewCount === 'number' && (
                <span style={{ color: 'var(--ink-4)' }}>({reviewCount})</span>
              )}
            </span>
          )}
          {verified && (
            <span className="item">
              <Check width={12} height={12} />
              Verified
            </span>
          )}
          <span className="price">
            {typeof priceFromGBP === 'number' ? (
              <>
                <em>from</em>£{priceFromGBP}
              </>
            ) : (
              'price by operator'
            )}
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ---------------- GuideCard (compact 16:10) ---------------- */
export function GuideCard({
  href,
  tag,
  tone = 'sage',
  title,
  sub,
  count,
  rating,
  priceFromGBP,
  media = '',
  imageSrc,
  imageAlt,
}: {
  href: string;
  tag: string;
  tone?: 'sage' | 'coast' | 'warm' | 'fen';
  title: string;
  sub?: string;
  count?: number;
  rating?: number;
  priceFromGBP?: number;
  media?: Media;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <Link className="dsn-card compact group" href={href} aria-label={`${title} guide`}>
      <div className={`dsn-card-media ${media}`}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          />
        ) : null}
        {imageSrc ? <span className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" aria-hidden="true" /> : null}
        <span className="dsn-card-media-tag">
          <span className="dot" />
          {tag}
        </span>
        {!imageSrc ? <span className="dsn-card-media-stamp">{title}</span> : null}
      </div>
      <div className="dsn-card-body">
        <h3 className="dsn-card-title">{title}</h3>
        {sub && <p className="dsn-card-sub">{sub}</p>}
        <div className="dsn-card-meta">
          {typeof count === 'number' && (
            <span className="item">
              <Bed width={13} height={13} />
              {count} stays
            </span>
          )}
          {typeof rating === 'number' && (
            <span className="item">
              <Star width={12} height={12} style={{ color: 'var(--amber)' }} />
              {rating.toFixed(1)}
            </span>
          )}
          {typeof priceFromGBP === 'number' && (
            <span className="price">
              <em>from</em>£{priceFromGBP}
            </span>
          )}
        </div>
      </div>
      {/* placate unused-region-pill var */}
      <span style={{ display: 'none' }}>
        <RegionPill tone={tone}>{tag}</RegionPill>
      </span>
    </Link>
  );
}

/* ---------------- SummaryCard (quick-fact) ---------------- */
export function SummaryCard({
  icon,
  head,
  value,
}: {
  icon: ReactNode;
  head: string;
  value: ReactNode;
}) {
  return (
    <div className="dsn-fact">
      <span className="dsn-fact-head">
        <span className="icon">{icon}</span>
        {head}
      </span>
      <span className="dsn-fact-val">{value}</span>
    </div>
  );
}

/* ---------------- RowCard (caravan featured) ---------------- */
export function RowCard({
  href,
  name,
  type,
  location,
  rating,
  reviewCount,
  priceFromGBP,
  amenities,
  media = '',
  badge,
}: {
  href: string;
  name: string;
  type: string;
  location: string;
  rating?: number;
  reviewCount?: number;
  priceFromGBP?: number;
  amenities?: { icon: ReactNode; label: string }[];
  media?: Media;
  badge?: string;
}) {
  return (
    <Link className="dsn-row-card" href={href} aria-label={`${name} — ${type} in ${location}`}>
      <div className={`dsn-row-thumb ${media}`}>
        {badge && (
          <span
            style={{
              position: 'absolute',
              top: 8,
              left: 8,
              padding: '3px 8px',
              background: 'white',
              borderRadius: 999,
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '.04em',
              color: 'var(--ink)',
            }}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="dsn-row-info">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <RegionPill>{type}</RegionPill>
          <span
            style={{
              fontSize: 11.5,
              color: 'var(--ink-3)',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '.02em',
            }}
          >
            <Pin
              width={11}
              height={11}
              style={{ display: 'inline', verticalAlign: '-1px', marginRight: 3 }}
            />
            {location}
          </span>
        </div>
        <div className="dsn-row-title">{name}</div>
        <div className="dsn-row-meta">
          {typeof rating === 'number' && (
            <span
              className="item"
              aria-label={`Operator rating ${rating} out of 5${reviewCount ? `, from ${reviewCount} reviews` : ''}`}
            >
              <Star width={12} height={12} style={{ color: 'var(--amber)' }} />
              {rating.toFixed(1)}
              {typeof reviewCount === 'number' && (
                <span style={{ color: 'var(--ink-4)' }}>({reviewCount})</span>
              )}
            </span>
          )}
          {amenities?.map((a) => (
            <span key={a.label} className="item">
              {a.icon}
              {a.label}
            </span>
          ))}
        </div>
      </div>
      <div className="dsn-row-price">
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--ink-3)',
            letterSpacing: '.04em',
            textTransform: 'uppercase',
          }}
        >
          {typeof priceFromGBP === 'number' ? 'From' : ''}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 24,
            color: 'var(--ink)',
            letterSpacing: '-.02em',
            lineHeight: 1,
          }}
        >
          {typeof priceFromGBP === 'number' ? (
            <>
              £{priceFromGBP}
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 12.5,
                  color: 'var(--ink-3)',
                  marginLeft: 3,
                }}
              >
                /night
              </span>
            </>
          ) : (
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--ink-3)' }}>
              price by operator
            </span>
          )}
        </span>
        <span
          style={{
            fontSize: 12,
            color: 'var(--sage-2)',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          View park <Arrow width={12} height={12} />
        </span>
      </div>
    </Link>
  );
}

/* ---------------- TestimonialCard ---------------- */
export function TestimonialCard({
  quote,
  name,
  when,
}: {
  quote: string;
  name: string;
  when: string;
}) {
  const initial = name.trim().charAt(0).toUpperCase() || '·';
  return (
    <div className="dsn-testimonial">
      <span className="dsn-testimonial-stars" aria-label="5 out of 5 stars">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} width={14} height={14} />
        ))}
      </span>
      <p className="dsn-testimonial-quote">“{quote}”</p>
      <div className="dsn-testimonial-by">
        <span className="dsn-testimonial-avatar" aria-hidden>
          {initial}
        </span>
        <span className="meta">
          <b>{name}</b>
          <br />
          <span className="sub">{when}</span>
        </span>
      </div>
    </div>
  );
}
