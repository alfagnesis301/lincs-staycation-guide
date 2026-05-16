import type { ReactNode } from 'react';
import Link from 'next/link';
import { Bed, Castle, Compass, Map as MapIco, Pin } from '@/components/dsn/Icons';
import { Breadcrumb, SectionHead } from '@/components/dsn/primitives';
import { LocationHero } from '@/components/dsn/sections';

export interface TownGuideTemplateProps {
  town: string;
  region: string;            // e.g. "City · Cathedral"
  lead: string;              // 1-2 sentence introduction
  body?: string;
  bestFor?: string;
  italic?: string;           // e.g. "Travel Guide"
  imageLabel?: string;       // image watermark, e.g. "Lincoln Cathedral · Steep Hill"
  imageContext?: string;     // overlay name, e.g. "Cathedral & old town"
  quickFacts?: {
    regionType?: string;
    bestFor?: string;
    county?: string;
    goodBaseFor?: string;
  };
  sections?: {
    id: string;
    eyebrow: string;
    title: string;
    sub?: string;
    children: ReactNode;
  }[];
  /** TouristDestination JSON-LD */
  jsonLd?: Record<string, unknown>;
}

export function TownGuideTemplate({
  town,
  region,
  lead,
  body,
  bestFor,
  italic = 'Travel Guide',
  imageLabel,
  imageContext,
  quickFacts,
  sections = [],
  jsonLd,
}: TownGuideTemplateProps) {
  const facts = [
    quickFacts?.regionType && {
      icon: <Pin width={13} height={13} />,
      head: 'Region type',
      value: quickFacts.regionType,
    },
    quickFacts?.bestFor && {
      icon: <Castle width={13} height={13} />,
      head: 'Best for',
      value: quickFacts.bestFor,
    },
    quickFacts?.county && {
      icon: <MapIco width={13} height={13} />,
      head: 'County',
      value: quickFacts.county,
    },
    quickFacts?.goodBaseFor && {
      icon: <Compass width={13} height={13} />,
      head: 'Good base for',
      value: quickFacts.goodBaseFor,
    },
  ].filter(Boolean) as { icon: ReactNode; head: string; value: ReactNode }[];

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <div style={{ padding: '20px 60px 0' }}>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Town Guides', href: '/town-guides' },
            { label: town },
          ]}
        />
      </div>

      <LocationHero
        region={region}
        title={town}
        italic={italic}
        lead={lead}
        body={body}
        bestFor={bestFor}
        imageLabel={imageLabel}
        imageContext={imageContext}
        primaryCta={{
          label: `Where to stay`,
          href: `/places-to-stay/${town.toLowerCase().replace(/\s+/g, '-')}`,
          icon: <Bed width={15} height={15} />,
        }}
        quickFacts={facts}
      />

      {/* Sticky sub-nav */}
      {sections.length > 0 && (
        <nav
          aria-label="On this page"
          style={{
            position: 'sticky',
            top: 60,
            zIndex: 20,
            background: 'white',
            borderBottom: '1px solid var(--line)',
            padding: '12px 60px',
            display: 'flex',
            gap: 8,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="dsn-chip"
              style={{ textDecoration: 'none' }}
            >
              {s.title}
            </a>
          ))}
          <Link
            href={`/places-to-stay/${town.toLowerCase().replace(/\s+/g, '-')}`}
            className="dsn-btn ghost"
            style={{ marginLeft: 'auto', padding: '8px 14px', fontSize: 13 }}
          >
            Save guide
          </Link>
        </nav>
      )}

      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`dsn-section${i % 2 === 1 ? ' tint' : ''}`}
        >
          <SectionHead eyebrow={s.eyebrow} title={s.title} sub={s.sub} />
          {s.children}
        </section>
      ))}
    </>
  );
}
