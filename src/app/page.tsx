import Link from 'next/link';
import { CTABanner, HowItWorks } from '@/components/dsn/sections';
import { SectionHead } from '@/components/dsn/primitives';
import { GuideCard } from '@/components/dsn/cards';
import { ArrowDown, Bed, Coffee, Compass, Map as MapIco, Tent } from '@/components/dsn/Icons';
import { publishedGuides } from '@/data/guides';

export const metadata = {
  title: {
    absolute: 'Lincs Staycation Guide | Lincolnshire Travel, Towns & Breaks',
  },
  description:
    'Plan Lincolnshire staycations with independent town guides, places to stay, caravan parks, things to do, food and drink, coast ideas and practical visitor tips.',
};

// Region filter rows — pulled from CMS in production. Placeholder counts here
// are illustrative; replace with live CMS aggregation when the dataset wires in.
// Popular town guides: small editorial set, not the full location browser.
const POPULAR_GUIDES = [
  { href: '/town-guides/lincoln',   tag: 'City',        tone: 'sage' as const,  title: 'Lincoln',     sub: 'Cathedral city, historic streets and independent food.',     media: '' as const,      imageSrc: '/images/lincolnshire/lincoln.jpg' },
  { href: '/town-guides/skegness',  tag: 'Coast',       tone: 'coast' as const, title: 'Skegness',    sub: 'Seaside resort with sandy beaches and family attractions.',  media: 'coast' as const, imageSrc: '/images/lincolnshire/skegness.jpg' },
  { href: '/town-guides/stamford',  tag: 'Market town', tone: 'warm' as const,  title: 'Stamford',    sub: 'Georgian stone streets, boutique stays and quiet courtyards.', media: 'warm' as const,  imageSrc: '/images/lincolnshire/stamford.jpg' },
  { href: '/town-guides/louth',     tag: 'Wolds',       tone: 'sage' as const,  title: 'Louth',       sub: 'Gateway market town for the Lincolnshire Wolds AONB.',       media: 'wolds' as const, imageSrc: '/images/lincolnshire/louth.jpg' },
  { href: '/town-guides/boston',    tag: 'Fens',        tone: 'fen' as const,   title: 'Boston',      sub: "Historic port town with St Botolph's Stump.",                 media: 'fen' as const,   imageSrc: '/images/lincolnshire/boston.jpg' },
];

const EXPLORE_AREAS = [
  {
    href: '/places-to-stay',
    label: 'Places to Stay',
    title: 'Hotels, B&Bs, inns and cottages',
    sub: 'Browse accommodation candidates by Lincolnshire location.',
    icon: <Bed width={16} height={16} />,
  },
  {
    href: '/caravan-parks',
    label: 'Caravan Parks',
    title: 'Holiday parks and touring bases',
    sub: 'Compare coastal, countryside and family-friendly park guides.',
    icon: <Tent width={16} height={16} />,
  },
  {
    href: '/things-to-do',
    label: 'Things to Do',
    title: 'Attractions, walks and rainy-day ideas',
    sub: 'Find heritage sites, museums, beaches and family days out.',
    icon: <Compass width={16} height={16} />,
  },
  {
    href: '/food-drink',
    label: 'Food & Drink',
    title: 'Pubs, cafes, restaurants and local food',
    sub: 'Use curated candidate lists, then check menus direct.',
    icon: <Coffee width={16} height={16} />,
  },
];

const FEATURED_EDITORIAL_GUIDES = publishedGuides
  .filter((guide) => ['best-beaches', 'dog-friendly-days-out', 'weekend-breaks', 'rainy-day-activities'].includes(guide.slug))
  .slice(0, 4);

export default function HomePage() {
  return (
    <>
      <section className="dsn-hero">
        <div className="dsn-hero-grid" aria-hidden />
        <span className="dsn-eyebrow">
          <span className="dot" />
          Lincolnshire travel guide
        </span>
        <h1 className="dsn-hero-title">
          Plan a better <em>Lincolnshire</em> staycation.
        </h1>
        <p className="dsn-hero-sub">
          Independent town guides, coast ideas, caravan park round-ups, places to
          stay, food and drink candidates, and practical visitor tips for city
          breaks, family days out and quieter countryside escapes.
        </p>
        <div className="dsn-hero-actions">
          <Link href="/town-guides" className="dsn-btn primary lg">
            Browse town guides <ArrowDown width={15} height={15} />
          </Link>
          <Link href="/lincolnshire-coast" className="dsn-btn ghost lg">
            Explore the coast <MapIco width={15} height={15} />
          </Link>
        </div>
        <div className="dsn-hero-meta">
          {[
            { value: '14', label: 'Town guides' },
            { value: '6', label: 'Region types' },
            { value: 'May 2026', label: 'Last updated' },
          ].map((s, i) => (
            <span key={s.label} style={{ display: 'contents' }}>
              <div className="item">
                <span className="num">{s.value}</span>
                <span className="lbl">{s.label}</span>
              </div>
              {i < 2 && <div className="sep" />}
            </span>
          ))}
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-charcoal-muted">
          Independently curated and updated as guides are reviewed. Always check opening times, prices,
          availability and facilities directly before travelling.
        </p>
      </section>

      <section className="dsn-section tint">
        <SectionHead
          eyebrow="By town"
          title="Popular guides"
          sub="Start with a small editorial selection of strong bases for city breaks, coastal holidays, market-town weekends and Wolds exploring."
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
              media={g.media}
              imageSrc={g.imageSrc}
              imageAlt={`${g.title}, Lincolnshire`}
            />
          ))}
        </div>
      </section>

      {/* Ad slot — below the fold, between sections */}
      <section className="dsn-section">
        <SectionHead
          eyebrow="Explore"
          title="Choose the guide that matches your trip"
          sub="Every section is built for planning, with internal links by town and clear reminders to check details direct before travelling."
        />
        <div className="dsn-card-grid">
          {EXPLORE_AREAS.map((area) => (
            <Link key={area.href} href={area.href} className="dsn-card" style={{ padding: 24 }}>
              <span className="dsn-iconchip">{area.icon}</span>
              <span className="badge badge-coast" style={{ marginTop: 16 }}>
                {area.label}
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 24,
                  fontWeight: 500,
                  marginTop: 12,
                }}
              >
                {area.title}
              </h2>
              <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.55, marginTop: 8 }}>
                {area.sub}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {FEATURED_EDITORIAL_GUIDES.length > 0 && (
        <section className="dsn-section tint">
          <SectionHead
            eyebrow="Planning guides"
            title="Popular Lincolnshire guides"
            sub="Practical editorial guides for beaches, dog-friendly days out, weekend breaks and rainy-day backup plans."
            right={
              <Link href="/blog" className="dsn-link">
                All guides
              </Link>
            }
          />
          <div className="dsn-card-grid cols-4">
            {FEATURED_EDITORIAL_GUIDES.map((guide) => (
              <GuideCard
                key={guide.id}
                href={`/blog/${guide.slug}`}
                tag={guide.category}
                tone={guide.category === 'Coast' ? 'coast' : guide.category === 'Stays' ? 'warm' : 'sage'}
                title={guide.title}
                sub={guide.description}
                media={guide.category === 'Coast' ? 'coast' : guide.category === 'Stays' ? 'warm' : ''}
              />
            ))}
          </div>
        </section>
      )}

      <section className="dsn-section tint">
        <SectionHead
          eyebrow="How it works"
          title="An honest, independent guide"
          sub="We do not publish invented ratings, fake prices or unsupported reviews. Venue and accommodation details should always be checked with the operator before you travel."
        />
        <HowItWorks />
      </section>

      <section className="dsn-section">
        <SectionHead
          eyebrow="Visitor planning"
          title="How this guide helps visitors"
          sub="Editorial blocks replace unverified testimonials, so the homepage stays useful without presenting unsupported claims."
        />
        <div className="dsn-card-grid">
          {[
            ['Pick the right base', 'Compare city, coast, Wolds, Fens and countryside destinations before choosing where to stay.'],
            ['Build a practical itinerary', 'Use town guides for one-day plans, weekend ideas, rainy-day options and family-friendly suggestions.'],
            ['Check details safely', 'Accommodation, menus, facilities and opening hours change, so every guide points visitors back to direct checks.'],
          ].map(([title, body]) => (
            <article key={title} className="dsn-card" style={{ padding: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 500 }}>
                {title}
              </h2>
              <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6, marginTop: 10 }}>
                {body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Ad slot — between content sections */}
      <CTABanner
        eyebrow="For local businesses"
        title="Run a B&B, caravan park or guest house in Lincolnshire?"
        body="Join Lincolnshire's independent staycation directory. Free basic listing — premium featured placements available."
        primary={{ label: 'Add your business', href: '/add-your-business' }}
        secondary={{ label: 'See pricing', href: '/advertise' }}
        stats={[
          { n: '14', l: 'Town guides' },
          { n: '6',   l: 'Region types' },
          { n: 'Free', l: 'Basic listing' },
          { n: 'Direct', l: 'You handle bookings' },
        ]}
      />

      {/* Footer-area ad, above dark footer */}
    </>
  );
}
