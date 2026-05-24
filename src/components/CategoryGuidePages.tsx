import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import SectionHeader from '@/components/SectionHeader';
import CaravanParkEditorialNote from '@/components/caravan-parks/CaravanParkEditorialNote';
import CaravanParkDisclosureBox from '@/components/caravan-parks/CaravanParkDisclosureBox';
import GoogleMapsLinkButton from '@/components/GoogleMapsLinkButton';
import VerificationNotice from '@/components/VerificationNotice';
import { NatureSpotsSection } from '@/components/town-guides/NatureSpotsSection';
import {
  categoryLandingFaqs,
  getRelatedLocationGuides,
  locationGuides,
  type FoodAndDrinkOption,
  type LocationGuideBase,
  type PlaceToStay,
  type ThingToDo,
} from '@/data/locationGuides';
import { natureSpotsByTown } from '@/data/nature-spots';
import { getTownGuideProfile, type TownAttraction } from '@/data/townGuideProfiles';
import { getPublicListingDescription, type ListingKind } from '@/lib/public-copy';

type Kind = 'places-to-stay' | 'things-to-do' | 'food-drink';

const cfg = {
  'places-to-stay': {
    title: 'Places to Stay in Lincolnshire',
    lead: 'Browse hotels, B&Bs, guest houses, inns, apartments and holiday cottages by Lincolnshire location.',
    label: 'Places to Stay',
    base: '/places-to-stay',
    cta: 'Add your accommodation',
    subjectLabel: 'accommodation listings',
  },
  'things-to-do': {
    title: 'Things to Do in Lincolnshire',
    lead: 'Browse attractions, heritage sites, nature reserves, beaches, walks and family activities by Lincolnshire location.',
    label: 'Things to Do',
    base: '/things-to-do',
    cta: 'Add an attraction',
    subjectLabel: 'attractions',
  },
  'food-drink': {
    title: 'Food & Drink in Lincolnshire',
    lead: 'Browse restaurants, pubs, cafes, bars and food stops by Lincolnshire location.',
    label: 'Food & Drink',
    base: '/food-drink',
    cta: 'Add your venue',
    subjectLabel: 'food and drink venues',
  },
} satisfies Record<
  Kind,
  {
    title: string;
    lead: string;
    label: string;
    base: string;
    cta: string;
    subjectLabel: string;
  }
>;

const popularByKind: Record<Kind, string[]> = {
  'places-to-stay': ['lincoln', 'skegness', 'stamford', 'woodhall-spa', 'mablethorpe'],
  'things-to-do': ['lincoln', 'skegness', 'stamford', 'boston', 'woodhall-spa', 'grantham'],
  'food-drink': ['lincoln', 'stamford', 'louth', 'woodhall-spa', 'skegness'],
};

type CategoryItem = PlaceToStay | ThingToDo | FoodAndDrinkOption;

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

function attractionToThingToDo(attraction: TownAttraction, guide: LocationGuideBase): ThingToDo {
  return {
    id: `${guide.slug}-${slugify(attraction.name)}`,
    name: attraction.name,
    slug: slugify(attraction.name),
    town: guide.name,
    category: attraction.category,
    shortDescription: attraction.description,
    officialWebsiteUrl: attraction.officialWebsiteUrl,
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${attraction.name} ${guide.name} Lincolnshire`)}`,
    sourceUrls: attraction.officialWebsiteUrl
      ? [{ label: `${attraction.name} official website`, url: attraction.officialWebsiteUrl, type: 'Official website' }]
      : [],
    imageGuidance: `Use an attributed Wikimedia or official exterior image for ${attraction.name} if available.`,
    needsVerification: true,
  };
}

function items(g: LocationGuideBase, k: Kind): CategoryItem[] {
  if (k === 'things-to-do') {
    const townProfile = getTownGuideProfile(g.slug);
    return townProfile ? townProfile.attractions.map((attraction) => attractionToThingToDo(attraction, g)) : g.thingsToDo;
  }

  return k === 'food-drink' ? g.foodDrink : g.placesToStay;
}

function itemLabel(o: CategoryItem) {
  return 'type' in o ? o.type : o.category;
}

function listingKind(kind: Kind): ListingKind {
  if (kind === 'places-to-stay') return 'stay';
  if (kind === 'things-to-do') return 'attraction';
  return 'food';
}

function itemSummary(o: CategoryItem, kind: Kind) {
  const publicKind = listingKind(kind);
  if ('bestFor' in o) {
    return getPublicListingDescription(
      {
        name: o.name,
        town: o.town,
        type: o.type,
        bestFor: o.bestFor,
        description: o.bestFor,
        officialWebsiteUrl: o.officialWebsiteUrl,
        bookingUrl: o.bookingUrl,
        affiliateUrl: o.affiliateUrl,
      },
      publicKind,
    );
  }
  if ('shortDescription' in o) {
    return getPublicListingDescription(
      {
        name: o.name,
        town: o.town,
        type: o.category,
        description: o.shortDescription,
        officialWebsiteUrl: o.officialWebsiteUrl,
      },
      publicKind,
    );
  }
  return getPublicListingDescription(
    {
      name: o.name,
      town: o.town,
      type: o.type,
    },
    publicKind,
  );
}

function officialWebsiteUrl(o: CategoryItem) {
  return 'officialWebsiteUrl' in o ? o.officialWebsiteUrl : undefined;
}

function itemNeedsVerification(o: CategoryItem) {
  return o.needsVerification === true;
}

export function CategoryHub({ kind }: { kind: Kind }) {
  const c = cfg[kind];
  const popular = popularByKind[kind]
    .map((slug) => locationGuides.find((g) => g.slug === slug))
    .filter(Boolean) as LocationGuideBase[];

  return (
    <>
      <section className="hero-gradient py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="badge badge-coast mb-4 inline-block">Lincolnshire guides</span>
          <h1 className="font-heading mb-5 text-4xl font-bold leading-[1.1] text-charcoal sm:text-5xl">
            {c.title}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-charcoal-muted">{c.lead}</p>
          <a href="#by-location" className="btn-primary mt-7 inline-flex">
            Browse by location
          </a>
        </div>
      </section>

      <section className="bg-cream/40 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Popular guides"
            subtitle="A short editorial selection of strong bases for this category."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((g) => (
              <Link
                key={g.id}
                href={`${c.base}/${g.slug}`}
                className="group rounded-xl border border-cream-dark/60 bg-white p-5 transition hover:border-sage/40 hover:shadow"
              >
                <span className="badge badge-coast mb-2 inline-block text-[10px]">{g.regionType}</span>
                <h2 className="font-heading text-base font-semibold text-charcoal group-hover:text-sage">
                  {c.label} in {g.name}
                </h2>
                <span className="mt-2 block text-sm leading-relaxed text-charcoal-muted">{g.contentAngle}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="by-location" className="bg-cream/30 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Browse by location" subtitle="Browse all town guides in this category index." />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {locationGuides.map((g) => (
              <Link
                key={g.id}
                href={`${c.base}/${g.slug}`}
                className="card-hover group rounded-2xl border border-cream-dark/60 bg-white p-5 transition hover:border-sage/40 hover:shadow-lg"
              >
                <div className="mb-3 flex justify-between gap-3">
                  <span className="badge badge-coast text-[11px]">{g.regionType}</span>
                  <span className="text-xs text-charcoal-muted">{items(g, kind).length} options</span>
                </div>
                <h3 className="font-heading mb-2 text-lg font-semibold text-charcoal group-hover:text-sage">
                  {c.label} in {g.name}
                </h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-charcoal-muted">{g.contentAngle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CaravanParkEditorialNote
        text="These guides are independently researched. We avoid unsupported rankings, invented ratings, fake prices and unsafe image claims."
        showCorrectionsCta={false}
      />
      <CaravanParkDisclosureBox />
      <FAQSection faqs={categoryLandingFaqs[kind]} />
      <CTASection
        title={`${c.cta} in Lincolnshire?`}
        description="Submit details for editorial review and help visitors discover useful local options."
        buttonText="Add Your Business"
        buttonHref="/add-your-business"
      />
    </>
  );
}

export function LocationCategoryPage({ guide, kind }: { guide: LocationGuideBase; kind: Kind }) {
  const c = cfg[kind];
  const list = items(guide, kind);
  const related = getRelatedLocationGuides(guide.slug, 5);
  const natureSpots = kind === 'things-to-do' ? natureSpotsByTown[guide.slug] ?? [] : [];

  return (
    <>
      <section className="hero-gradient py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="text-sage">
              Home
            </Link>
            <span className="mx-2 text-charcoal-muted">/</span>
            <Link href={c.base} className="text-sage">
              {c.label}
            </Link>
          </nav>
          <span className="badge badge-coast mb-4 inline-block">{guide.regionType}</span>
          <h1 className="font-heading text-3xl font-bold leading-tight text-charcoal sm:text-5xl">
            {c.label} in {guide.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-charcoal-muted">{guide.contentAngle}</p>
        </div>
      </section>

      {guide.sourceStatus !== 'verified' ? (
        <section className="bg-white py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <VerificationNotice>
              This location guide is still in editorial review. Check official sources before booking, travelling or relying on facilities.
            </VerificationNotice>
          </div>
        </section>
      ) : null}

      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-4">
            {[
              ['Location', guide.name],
              ['Listed options', String(list.length)],
              ['Best for', guide.contentAngle],
              ['Last updated', guide.lastUpdated],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-cream-dark/60 bg-cream/30 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-muted">{label}</p>
                <p className="mt-2 text-sm font-semibold text-charcoal">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream/20 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={`Quick comparison for ${guide.name}`}
            subtitle="Curated local options. Always verify official details before travel or booking."
          />
          <div className="overflow-hidden rounded-2xl border border-cream-dark/60 bg-white">
            <div className="hidden grid-cols-[1fr_0.7fr_1.4fr] gap-4 border-b border-cream-dark/60 bg-cream/50 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-charcoal-muted lg:grid">
              <span>Name</span>
              <span>Type</span>
              <span>Planning note</span>
            </div>
            {list.map((o) => (
              <article
                key={o.id}
                className="grid gap-3 border-b border-cream-dark/50 px-5 py-4 text-sm last:border-b-0 lg:grid-cols-[1fr_0.7fr_1.4fr]"
              >
                <h2 className="font-heading font-semibold text-charcoal">{o.name}</h2>
                <p className="text-charcoal-muted">{itemLabel(o)}</p>
                <p className="text-charcoal-muted">{itemSummary(o, kind)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Curated listings"
            subtitle="Detailed information for each location. Check official sources for current opening, booking, access and visitor details."
          />
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {list.map((o) => {
              const websiteUrl = officialWebsiteUrl(o);
              const summary = itemSummary(o, kind);
              return (
                <article key={o.id} className="rounded-2xl border border-cream-dark/60 bg-white p-5">
                  <span className="badge badge-coast mb-3 inline-block text-[10px]">{itemLabel(o)}</span>
                  <h3 className="font-heading text-xl font-semibold text-charcoal">{o.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{summary}</p>
                  {itemNeedsVerification(o) ? (
                    <div className="mt-4">
                      <VerificationNotice kind={listingKind(kind)} compact />
                    </div>
                  ) : null}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-cream-dark/40 pt-4">
                    <p className="text-xs text-charcoal-muted">Use official sources for live details.</p>
                    <div className="flex flex-wrap items-center gap-3">
                      {websiteUrl ? (
                        <a
                          href={websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-sage hover:text-sage-dark"
                        >
                          Official website
                        </a>
                      ) : null}
                      <GoogleMapsLinkButton
                        listing={{ name: o.name, town: o.town, googleMapsUrl: o.googleMapsUrl, location: o.location }}
                        variant="inline"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {kind === 'things-to-do' ? (
        <NatureSpotsSection townName={guide.name} spots={natureSpots} />
      ) : null}
      <CaravanParkEditorialNote
        text="This guide is independently curated, not a paid ranking. Details can change, so always check official sources before making plans."
        showCorrectionsCta
        subjectLabel={c.subjectLabel}
      />
      <FAQSection faqs={categoryLandingFaqs[kind]} />
      <section className="bg-cream/40 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading mb-6 text-2xl font-bold text-charcoal">Related guides</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`${c.base}/${r.slug}`}
                className="rounded-xl border border-cream-dark/60 bg-white p-4 text-sm font-semibold text-charcoal hover:border-sage/50 hover:text-sage"
              >
                {c.label} in {r.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title={`${c.cta} near ${guide.name}?`}
        description="Send updates, corrections or inclusion requests for editorial review."
        buttonText="Add Your Business"
        buttonHref="/add-your-business"
      />
    </>
  );
}
