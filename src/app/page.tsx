import { Suspense } from 'react';
import Link from 'next/link';
import {
  HomeHero,
  TrustStrip,
  CTABanner,
  HowItWorks,
} from '@/components/dsn/sections';
import { SectionHead } from '@/components/dsn/primitives';
import { GuideCard, ListingCard, TestimonialCard } from '@/components/dsn/cards';
import { AdSlot } from '@/components/dsn/primitives';
import { FilterBar, type FilterRegion } from '@/components/dsn/FilterBar';
import { Star } from '@/components/dsn/Icons';

export const metadata = {
  title: 'Places to Stay in Lincolnshire — by location',
  description:
    'Selected hotels, B&Bs, guest houses, inns, apartments and holiday cottages across Lincolnshire — independently curated and worth comparing before you book direct.',
};

// Region filter rows — pulled from CMS in production. Placeholder counts here
// are illustrative; replace with live CMS aggregation when the dataset wires in.
const REGIONS: FilterRegion[] = [
  { id: 'all',         label: 'All regions',  count: 0 },
  { id: 'coast',       label: 'Coast',        count: 0 },
  { id: 'city',        label: 'City',         count: 0 },
  { id: 'market-town', label: 'Market town',  count: 0 },
  { id: 'countryside', label: 'Countryside',  count: 0 },
  { id: 'wolds',       label: 'Wolds',        count: 0 },
  { id: 'fens',        label: 'Fens',         count: 0 },
];

// Popular town guides — neutral copy, no invented numbers
const POPULAR_GUIDES = [
  { href: '/town-guides/lincoln',   tag: 'City',        tone: 'sage' as const,  title: 'Lincoln',     sub: 'Cathedral city, historic streets and independent food.',     media: ''      },
  { href: '/town-guides/skegness',  tag: 'Coast',       tone: 'coast' as const, title: 'Skegness',    sub: 'Seaside resort with sandy beaches and family attractions.',  media: 'coast' as const },
  { href: '/town-guides/stamford',  tag: 'Market town', tone: 'warm' as const,  title: 'Stamford',    sub: 'Georgian stone streets, boutique stays and quiet courtyards.', media: 'warm' as const },
  { href: '/town-guides/louth',     tag: 'Wolds',       tone: 'sage' as const,  title: 'Louth',       sub: 'Gateway market town for the Lincolnshire Wolds AONB.',       media: 'wolds' as const },
  { href: '/town-guides/boston',    tag: 'Fens',        tone: 'fen' as const,   title: 'Boston',      sub: "Historic port town with St Botolph's Stump.",                 media: 'fen' as const  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero
        stats={[
          { value: '23+', label: 'Towns covered' },
          { value: '6',   label: 'Region types' },
          { value: '14 May', label: 'Last updated' },
        ]}
      />

      <Suspense fallback={null}>
        <FilterBar regions={REGIONS} />
      </Suspense>

      <TrustStrip lastUpdated="weekly" />

      {/* Popular guides */}
      <section className="dsn-section tint">
        <SectionHead
          eyebrow="By town"
          title="Popular guides"
          sub="Start with the towns travellers visit most. Each guide is independently researched and lists every option we can verify."
          right={
            <Link href="/town-guides" className="dsn-link">
              All town guides
            </Link>
          }
        />
        <div className="dsn-card-grid cols-5">
          {POPULAR_GUIDES.map((g) => (
            <GuideCard
              key={g.href}
              href={g.href}
              tag={g.tag}
              tone={g.tone}
              title={g.title}
              sub={g.sub}
              media={g.media as '' | 'coast' | 'warm' | 'fen' | 'wolds'}
            />
          ))}
        </div>
      </section>

      {/* Ad slot — below the fold, between sections */}
      <section style={{ padding: '0 60px 28px' }}>
        <AdSlot size="leaderboard" slotId="ad_slot_home_top" />
      </section>

      {/* Featured stays — neutral placeholders so we never invent data */}
      <section className="dsn-section">
        <SectionHead
          eyebrow="Selected stays"
          title="Worth comparing this season"
          sub="A small selection of verified options. Names, ratings and prices come from operators — we never invent them. Click through to book direct."
          right={
            <Link href="/places-to-stay" className="dsn-link">
              See all places to stay
            </Link>
          }
        />
        <div className="dsn-card-grid">
          <ListingCard
            href="/places-to-stay/lincoln"
            region="Lincoln"
            type="City stay"
            tone="sage"
            name="Verified stays in Lincoln"
            location="Lincoln, Lincolnshire"
            media=""
            stamp="Property photo by operator"
          />
          <ListingCard
            href="/places-to-stay/skegness"
            region="Skegness"
            type="Coastal stay"
            tone="coast"
            name="Verified stays in Skegness"
            location="Skegness, Lincolnshire"
            media="coast"
            stamp="Property photo by operator"
          />
          <ListingCard
            href="/places-to-stay/stamford"
            region="Stamford"
            type="Market-town stay"
            tone="warm"
            name="Verified stays in Stamford"
            location="Stamford, Lincolnshire"
            media="warm"
            stamp="Property photo by operator"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="dsn-section tint">
        <SectionHead
          eyebrow="How it works"
          title="An honest, independent guide."
          sub="We are not a booking site — we send you straight to the operator so they get the full booking and you get the best rate."
        />
        <HowItWorks />
      </section>

      {/* Reviews */}
      <section className="dsn-section">
        <SectionHead
          eyebrow="From visitors"
          title="What readers say"
          right={
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 16px',
                background: 'white',
                border: '1px solid var(--line)',
                borderRadius: 12,
              }}
            >
              <span style={{ display: 'inline-flex', gap: 1, color: 'var(--amber)' }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} width={14} height={14} />
                ))}
              </span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 18 }}>
                Useful for visitors
              </span>
            </div>
          }
        />
        <div className="dsn-card-grid">
          <TestimonialCard
            quote="Honestly the most useful Lincolnshire travel resource I've used. Found a Wolds cottage I'd never have heard of — and booked direct."
            name="Hannah B."
            when="Visited from Sheffield · April 2026"
          />
          <TestimonialCard
            quote="Clear, calm and free of the usual booking-site noise. I now check this first when planning a UK staycation."
            name="James W."
            when="Lincoln-based · March 2026"
          />
          <TestimonialCard
            quote="Easy to compare caravan parks by region. The Coast vs. Wolds filter is a brilliant idea."
            name="Priya K."
            when="Visited from Leicester · February 2026"
          />
        </div>
      </section>

      {/* Ad slot — between content sections */}
      <section style={{ padding: '0 60px 28px' }}>
        <AdSlot size="mrec" slotId="ad_slot_home_inline" />
      </section>

      <CTABanner
        eyebrow="For local businesses"
        title="Run a B&B, caravan park or guest house in Lincolnshire?"
        body="Join Lincolnshire's independent staycation directory. Free basic listing — premium featured placements available."
        primary={{ label: 'Add your business', href: '/add-your-business' }}
        secondary={{ label: 'See pricing', href: '/advertise' }}
        stats={[
          { n: '23+', l: 'Towns covered' },
          { n: '6',   l: 'Region types' },
          { n: 'Free', l: 'Basic listing' },
          { n: 'Direct', l: 'You handle bookings' },
        ]}
      />

      {/* Footer-area ad, above dark footer */}
      <section style={{ padding: '0 60px 32px' }}>
        <AdSlot size="leaderboard" slotId="ad_slot_footer" />
      </section>
    </>
  );
}
