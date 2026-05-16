import type { Metadata } from 'next';
import Link from 'next/link';
import {
  caravanParkGuides,
  getFeaturedCaravanParkGuides,
  type RegionType,
} from '@/data/caravanParkGuides';
import { CaravanHero, CTABanner, FAQGrid } from '@/components/dsn/sections';
import { SectionHead, AdSlot } from '@/components/dsn/primitives';
import { GuideCard, RowCard } from '@/components/dsn/cards';
import { Home, Leaf, Sun, Tent, Arrow } from '@/components/dsn/Icons';

export const metadata: Metadata = {
  title: 'Caravan Parks & Holiday Parks in Lincolnshire',
  description:
    'Compare caravan parks, holiday parks, touring sites, lodges, glamping stays and family-friendly coastal parks across Lincolnshire — independently curated.',
  alternates: { canonical: '/caravan-parks' },
  openGraph: {
    title: 'Caravan Parks & Holiday Parks in Lincolnshire',
    description:
      'Compare caravan parks, holiday parks, touring sites, lodges, glamping stays and family-friendly coastal parks across Lincolnshire.',
    url: 'https://lincsstaycationguide.co.uk/caravan-parks',
    type: 'website',
  },
};

const PARK_TYPES = [
  {
    icon: <Home width={22} height={22} />,
    h: 'Static caravans',
    p: 'Family-friendly resorts with on-site pools, clubs and entertainment.',
    who: 'Best for: families, couples, weeks-away breaks',
    href: '#by-region',
  },
  {
    icon: <Tent width={22} height={22} />,
    h: 'Touring sites',
    p: 'Pitches for caravans, motorhomes and tents — quiet, well-equipped, often dog-friendly.',
    who: 'Best for: touring caravanners, motorhomes',
    href: '#by-region',
  },
  {
    icon: <Leaf width={22} height={22} />,
    h: 'Glamping',
    p: "Shepherd's huts, safari tents, pods and yurts. Often in countryside or Wolds locations.",
    who: 'Best for: short breaks, couples, off-grid stays',
    href: '#by-region',
  },
  {
    icon: <Sun width={22} height={22} />,
    h: 'Holiday lodges',
    p: 'Premium self-catering — hot tubs, lake views, more space than a static.',
    who: 'Best for: larger groups, special occasions',
    href: '#by-region',
  },
];

const REGION_TONE: Record<RegionType, 'sage' | 'coast' | 'warm' | 'fen'> = {
  City:         'sage',
  Coast:        'coast',
  'Market town': 'warm',
  Countryside:  'sage',
  Wolds:        'sage',
  Fens:         'fen',
};

const LANDING_FAQS = [
  {
    q: 'Are these parks bookable through Lincs Staycation Guide?',
    a: 'No — we are a directory, not a booking engine. Each listing links straight to the park or operator so you book direct and get the best rate.',
  },
  {
    q: 'How do you decide which parks are listed?',
    a: "Listings are editorially curated. We verify every park independently before publishing. Operators cannot pay for an organic listing.",
  },
  {
    q: "What does 'featured' mean?",
    a: 'Featured placement is editor-selected and rotates seasonally. We highlight a small number of parks that match the time of year and reader interest.',
  },
  {
    q: 'Can I add my caravan park to the directory?',
    a: 'Yes. Use the “Add your holiday park” button. Basic listings are free; premium placements start at our published rate.',
  },
];

export default function CaravanParksPage() {
  const featured = getFeaturedCaravanParkGuides(5);
  const byRegion = caravanParkGuides;

  return (
    <>
      <CaravanHero />

      {/* Intro */}
      <section className="dsn-section" style={{ paddingBottom: 0 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 56,
          }}
          className="dsn-intro-grid"
        >
          <div>
            <span className="dsn-eyebrow">
              <span className="dot" />
              About this guide
            </span>
            <h2
              style={{
                marginTop: 14,
                fontSize: 32,
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                letterSpacing: '-.022em',
              }}
            >
              An honest comparison, not a booking engine.
            </h2>
          </div>
          <div>
            <p
              style={{
                fontSize: 16.5,
                lineHeight: 1.65,
                color: 'var(--ink-2)',
              }}
            >
              Whether you are planning a family seaside break, a quiet touring
              holiday, a dog-friendly countryside escape or a lodge stay with
              extra comfort, this guide helps you compare caravan parks and
              holiday parks across Lincolnshire.
            </p>
            <p
              style={{
                fontSize: 16.5,
                lineHeight: 1.65,
                color: 'var(--ink-2)',
                marginTop: 14,
              }}
            >
              From the Lincolnshire Coast to the Wolds, market towns,
              countryside villages and city breaks near Lincoln, browse
              practical location-based guides and check directly with each
              park before booking.
            </p>
          </div>
        </div>
      </section>

      {/* Browse by type */}
      <section className="dsn-section">
        <SectionHead
          eyebrow="Browse by type"
          title="What sort of park are you looking for?"
        />
        <div className="dsn-card-grid cols-4">
          {PARK_TYPES.map((t) => (
            <Link
              key={t.h}
              href={t.href}
              className="dsn-card"
              style={{ padding: 24, gap: 14, flexDirection: 'column' }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  className="dsn-iconchip"
                  style={{ width: 44, height: 44, borderRadius: 12 }}
                >
                  {t.icon}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 22,
                  fontWeight: 500,
                  letterSpacing: '-.02em',
                  marginTop: 4,
                }}
              >
                {t.h}
              </h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-2)' }}>
                {t.p}
              </p>
              <p
                style={{
                  fontSize: 12,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--ink-3)',
                  marginTop: 'auto',
                  paddingTop: 10,
                  borderTop: '1px dashed var(--line)',
                }}
              >
                {t.who}
              </p>
              <span
                style={{
                  color: 'var(--sage-2)',
                  fontSize: 13,
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                Explore parks <Arrow width={12} height={12} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured parks (use real data — never invent ratings or prices) */}
      {featured.length > 0 && (
        <section className="dsn-section tint">
          <SectionHead
            eyebrow="Featured · Editorial picks"
            title="Worth comparing this season"
            sub="A small set of parks chosen by our editors. We never invent ratings or prices — visit each park's own site for live availability."
            right={
              <Link href="/caravan-parks/booking" className="dsn-link">
                Browse all
              </Link>
            }
          />
          <div className="dsn-row-list">
            {featured.map((g) => {
              const tone = REGION_TONE[g.regionType];
              const media =
                tone === 'coast' ? 'coast' : tone === 'warm' ? 'warm' : tone === 'fen' ? 'fen' : '';
              return (
                <RowCard
                  key={g.id}
                  href={`/caravan-parks/${g.slug}`}
                  name={g.h1 || g.title}
                  type={g.regionType}
                  location={g.location}
                  media={media}
                  badge={g.contentAngle ? 'EDITORS’ PICK' : undefined}
                />
              );
            })}
          </div>
        </section>
      )}

      {/* Ad slot — after featured, between sections */}
      <section style={{ padding: '0 60px 28px' }}>
        <AdSlot size="leaderboard" slotId="ad_slot_caravan_inline" />
      </section>

      {/* By region */}
      <section className="dsn-section" id="by-region">
        <SectionHead
          eyebrow="By region"
          title="Browse parks by region"
          sub="Coast for families, Wolds for countryside, Fens for quiet touring — pick the area that suits the trip."
        />
        <div className="dsn-card-grid cols-4">
          {byRegion.slice(0, 12).map((g) => {
            const tone = REGION_TONE[g.regionType];
            const media =
              tone === 'coast' ? 'coast' : tone === 'warm' ? 'warm' : tone === 'fen' ? 'fen' : '';
            return (
              <GuideCard
                key={g.id}
                href={`/caravan-parks/${g.slug}`}
                tag={g.regionType}
                tone={tone}
                title={g.location}
                sub={g.contentAngle}
                media={media}
              />
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="dsn-section tint">
        <SectionHead eyebrow="FAQ" title="Things visitors usually ask" />
        <FAQGrid items={LANDING_FAQS} />
      </section>

      <CTABanner
        eyebrow="For park operators"
        title="Run a caravan or holiday park in Lincolnshire?"
        body="List your park alongside Lincolnshire's independently curated directory. Free basic listings; premium placements available."
        primary={{ label: 'Add your holiday park', href: '/add-your-business' }}
        secondary={{ label: 'See advertising options', href: '/advertise' }}
      />

      <section style={{ padding: '0 60px 32px' }}>
        <AdSlot size="leaderboard" slotId="ad_slot_footer" />
      </section>
    </>
  );
}
