import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { towns } from '@/data/towns';
import { caravanParkGuides } from '@/data/caravanParkGuides';
import { getImageCredit } from '@/data/imageCredits';
import { natureSpotsByTown } from '@/data/nature-spots';
import {
  getLocationGuideBySlug,
  getRelatedLocationGuides,
  type FoodAndDrinkOption,
  type PlaceToStay,
} from '@/data/locationGuides';
import { getTownGuideProfile, type TownAttraction } from '@/data/townGuideProfiles';
import { getGoogleMapsLink } from '@/lib/googleMaps';
import { AFFILIATE_REL, isBookingComUrl, withBookingAffiliate } from '@/lib/affiliate';
import AffiliateDisclosureSmall from '@/components/caravan-parks/AffiliateDisclosureSmall';
import {
  getPublicListingDescription,
  shouldShowListingVerificationNotice,
  uniquePublicTags,
  type ListingKind,
} from '@/lib/public-copy';
import Breadcrumbs from '@/components/Breadcrumbs';
import VerificationNotice, { SectionVerificationSummary } from '@/components/VerificationNotice';
import { NatureSpotsSection } from '@/components/town-guides/NatureSpotsSection';
import { QuickLinks, lincolnQuickLinks } from '@/components/navigation/QuickLinks';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://lincs-staycation-guide.co.uk';

function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${query}, Lincolnshire`)}`;
}

function slugTitle(slug: string) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function makeFaqs(town: string, profile: NonNullable<ReturnType<typeof getTownGuideProfile>>) {
  return [
    {
      question: `Is ${town} good for a weekend break?`,
      answer: `Yes. ${town} works well for ${profile.bestFor.toLowerCase()} A ${profile.suggestedStayLength.toLowerCase()} stay is usually enough for the main highlights, with extra time for nearby day trips.`,
    },
    { question: `What is ${town} known for?`, answer: `${town} is known for ${profile.knownFor.toLowerCase()}` },
    { question: `Where should I stay in ${town}?`, answer: profile.stayAdvice },
    {
      question: `What are the main things to do in ${town}?`,
      answer: `Key ideas include ${profile.attractions.slice(0, 6).map((a) => a.name).join(', ')}. Always check current opening details before travelling.`,
    },
    {
      question: `Is ${town} good for families?`,
      answer: 'It can be, especially if you plan around the family-friendly and outdoor options in this guide. Check facilities, age suitability and seasonal opening directly with each venue.',
    },
    {
      question: `Are there caravan parks near ${town}?`,
      answer: 'Yes. This guide separates nearby caravan and holiday parks from hotels, B&Bs and guest accommodation so visitors can compare the right type of stay.',
    },
    {
      question: `Can you visit ${town} without a car?`,
      answer: 'You can explore the town centre without a car in most cases, but a car usually helps for countryside, coast, estate, aviation or nature reserve day trips.',
    },
  ];
}

function Section({
  id,
  eyebrow,
  title,
  children,
  tint = false,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  tint?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-12 sm:py-16 ${tint ? 'bg-cream/30' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow ? <span className="badge badge-coast mb-3 inline-block text-[10px]">{eyebrow}</span> : null}
        <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function CtaLink({
  href,
  children,
  propertyName,
  propertyTown,
}: {
  href: string;
  children: React.ReactNode;
  propertyName?: string;
  propertyTown?: string;
}) {
  const external = href.startsWith('http');
  const maps = /^https:\/\/(www\.)?google\./i.test(href);
  const booking = isBookingComUrl(href);
  return (
    <span className="inline-flex flex-col items-start gap-1">
      <a
        href={booking ? withBookingAffiliate(href) : href}
        target={external ? '_blank' : undefined}
        rel={external ? (booking ? AFFILIATE_REL : 'noopener noreferrer nofollow') : undefined}
        data-google-maps-link={maps ? true : undefined}
        data-property-name={propertyName}
        data-property-town={propertyTown}
        aria-label={maps ? 'View map/details on Google Maps (opens in a new tab)' : undefined}
        className="inline-flex rounded-xl bg-sage px-4 py-2 text-sm font-semibold text-white hover:bg-sage-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage"
      >
        {children}
      </a>
      {booking ? <span className="text-[11px] text-charcoal-muted">Affiliate link</span> : null}
    </span>
  );
}

function InfoCard({
  title,
  meta,
  body,
  tags = [],
  ctaHref,
  ctaLabel,
  verificationKind,
}: {
  title: string;
  meta: string;
  body: string;
  tags?: string[];
  ctaHref: string;
  ctaLabel: string;
  verificationKind?: ListingKind;
}) {
  return (
    <article className="rounded-2xl border border-cream-dark/60 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-muted">{meta}</p>
      <h3 className="mt-2 font-heading text-xl font-semibold text-charcoal">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{body}</p>
      {tags.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="badge bg-cream/60 text-[11px] text-charcoal-muted">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      {verificationKind ? (
        <div className="mt-4">
          <VerificationNotice kind={verificationKind} compact />
        </div>
      ) : null}
      <div className="mt-5 border-t border-cream-dark/50 pt-4">
        <CtaLink href={ctaHref} propertyName={title} propertyTown={meta}>{ctaLabel}</CtaLink>
      </div>
    </article>
  );
}

function ThingCard({
  item,
  town,
  showVerificationNotice = true,
}: {
  item: TownAttraction;
  town: string;
  showVerificationNotice?: boolean;
}) {
  return (
    <InfoCard
      title={item.name}
      meta={item.category}
      body={item.description}
      tags={item.tags}
      ctaHref={item.officialWebsiteUrl ?? mapsSearchUrl(`${item.name} ${town}`)}
      ctaLabel={item.officialWebsiteUrl ? 'Visit official website' : 'View map/details'}
      verificationKind={item.needsVerification && showVerificationNotice ? 'attraction' : undefined}
    />
  );
}

export default function FullTownGuidePage({ slug }: { slug: string }) {
  const town = towns.find((t) => t.slug === slug);
  const profile = getTownGuideProfile(slug);
  const locationGuide = getLocationGuideBySlug(slug);
  const caravanGuide = caravanParkGuides.find((g) => g.id === slug);
  const credit = getImageCredit(`town-${slug}`);
  if (!town || !profile || !locationGuide || !credit) notFound();

  const faqs = makeFaqs(town.name, profile);
  const canonical = `${SITE_URL}/town-guides/${slug}`;
  const related = getRelatedLocationGuides(slug, 4);
  const heroSrc = town.image ?? credit.localPath;
  const natureSpots = natureSpotsByTown[town.slug] ?? [];
  const visibleStays = (locationGuide.placesToStay as PlaceToStay[]).slice(0, 5);
  const visibleParks = (caravanGuide?.parks ?? []).slice(0, 5);
  const visibleFood = (locationGuide.foodDrink as FoodAndDrinkOption[]).slice(0, 5);
  const showStayVerificationSummary =
    visibleStays.filter((stay) =>
      shouldShowListingVerificationNotice({ needsVerification: stay.needsVerification, sourceUrls: stay.sourceUrls }),
    ).length >= 3;
  const showParkVerificationSummary = visibleParks.filter((park) => park.needsVerification).length >= 3;
  const showAttractionVerificationSummary = profile.attractions.filter((item) => item.needsVerification).length >= 3;
  const showFoodVerificationSummary =
    visibleFood.filter((venue) =>
      shouldShowListingVerificationNotice({ needsVerification: venue.needsVerification, sourceUrls: venue.sourceUrls }),
    ).length >= 3;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Guide',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonical,
      },
      headline: `${town.name} Travel Guide | Lincs Staycation Guide`,
      description: profile.shortIntro,
      image: `${SITE_URL}${credit.localPath}`,
      inLanguage: 'en-GB',
      publisher: {
        '@type': 'Organization',
        name: 'Lincs Staycation Guide',
        url: SITE_URL,
      },
      hasPart: [
        {
          '@type': 'WebPage',
          name: `Where to stay in ${town.name}`,
          url: `${canonical}#places-to-stay`,
        },
        {
          '@type': 'WebPage',
          name: `Things to do in ${town.name}`,
          url: `${canonical}#things-to-do`,
        },
        {
          '@type': 'WebPage',
          name: `Food & drink in ${town.name}`,
          url: `${canonical}#food-drink`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Town Guides', item: `${SITE_URL}/town-guides` },
        { '@type': 'ListItem', position: 3, name: town.name, item: canonical },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TouristDestination',
      name: `${town.name}, Lincolnshire`,
      description: profile.shortIntro,
      url: canonical,
      touristType: profile.bestFor,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Lincolnshire' },
      image: `${SITE_URL}${credit.localPath}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: `${SITE_URL}${credit.localPath}`,
      name: credit.title,
      creator: {
        '@type': 'Person',
        name: credit.author,
      },
      copyrightNotice: `© ${credit.author}, ${credit.licence}`,
      license: credit.licenceUrl,
      acquireLicensePage: credit.sourceUrl,
      creditText: `${credit.author} via ${credit.source}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `Things to do in ${town.name}`,
      itemListElement: profile.attractions.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero-gradient py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Town Guides', href: '/town-guides' }, { label: town.name }]} />
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_480px] lg:items-center">
            <div>
              <span className="badge badge-coast mb-4 inline-block">{profile.regionBadge}</span>
              <h1 className="font-heading text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
                {town.name} Travel Guide
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-charcoal-muted">{profile.shortIntro}</p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-charcoal">
                <span className="font-semibold">Best for:</span> {profile.bestFor}
              </p>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-xl shadow-charcoal/10">
              <div className="relative aspect-[4/3] bg-cream">
                <Image
                  src={heroSrc}
                  alt={`${town.name}, Lincolnshire - ${credit.title}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs leading-relaxed text-charcoal-muted">
                Photo:{' '}
                <a href={credit.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">{credit.author}</a>{' '}
                via {credit.source} - {credit.licence} - <Link href={`/image-credits#${credit.id}`} className="underline">Full credits</Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <QuickLinks links={slug === 'lincoln' ? lincolnQuickLinks : [
          { label: 'Where to stay', href: '#places-to-stay', description: 'Hotels, inns, B&Bs, guest houses and cottages.' },
          { label: 'Things to do', href: '#things-to-do', description: 'Attractions, walks and rainy-day ideas.' },
          { label: 'Parks & nature', href: '#parks-nature', description: 'Outdoor spaces and green breaks.' },
          { label: 'Food & drink', href: '#food-drink', description: 'Pubs, cafes and restaurants.' },
          { label: 'Nearby caravan parks', href: '#caravan-parks', description: 'Touring, lodges and holiday parks.' },
        ]} />
        <div className="-mt-2 mb-6">
          <CtaLink href={mapsSearchUrl(town.name)}>View map/details</CtaLink>
        </div>
      </div>

      <Section id="summary" eyebrow="Quick summary" title={`${town.name} at a glance`}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['Region type', profile.regionBadge],
            ['Best for', profile.bestFor],
            ['Good base for', profile.goodBaseFor],
            ['Suggested stay length', profile.suggestedStayLength],
            ['Best seasons', profile.bestSeasons],
            ['Last updated', locationGuide.lastUpdated],
            ['Editorial note', profile.verificationStatus],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-cream-dark/60 bg-cream/30 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-muted">{label}</p>
              <p className="mt-2 text-sm font-semibold leading-snug text-charcoal">{value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="visiting" eyebrow="About" title={`Visiting ${town.name}`} tint>
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-charcoal-muted">
          <p>{profile.shortIntro}</p>
          {town.extendedDescription.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </Section>

      <Section id="itineraries" eyebrow="Plans" title={`Suggested itineraries for ${town.name}`}>
        <div className="grid gap-5 lg:grid-cols-2">
          {profile.itineraries.map((plan) => (
            <article key={plan.title} className="rounded-2xl border border-cream-dark/60 bg-white p-5">
              <h3 className="font-heading text-xl font-semibold text-charcoal">{plan.title}</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-charcoal-muted">
                {plan.items.map((item) => <li key={item}>{item}</li>)}
              </ol>
            </article>
          ))}
        </div>
      </Section>

      <Section id="places-to-stay" eyebrow="Accommodation" title={`Places to Stay in ${town.name}`} tint>
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-charcoal-muted">
          This section focuses on hotels, B&Bs, guest houses, inns, apartments and cottages. Caravan and holiday parks are listed separately so visitors can compare the right type of stay.
        </p>
        <div className="mb-6">
          <AffiliateDisclosureSmall />
        </div>
        {showStayVerificationSummary ? <SectionVerificationSummary kind="stay" /> : null}
        <div className="grid gap-5 lg:grid-cols-2">
          {visibleStays.map((stay) => {
            const maps = getGoogleMapsLink({ name: stay.name, town: town.name, location: stay.location });
            const ctaHref = stay.affiliateUrl ?? stay.bookingUrl ?? stay.officialWebsiteUrl ?? maps?.href ?? mapsSearchUrl(`${stay.name} ${town.name}`);
            const ctaLabel = stay.affiliateUrl ? 'Check availability' : stay.bookingUrl ? 'View on Booking.com' : stay.officialWebsiteUrl ? 'Visit official website' : 'View map/details';
            const showNotice = shouldShowListingVerificationNotice({
              needsVerification: stay.needsVerification,
              sourceUrls: stay.sourceUrls,
            });
            return (
              <InfoCard
                key={stay.id}
                title={stay.name}
                meta={`${stay.type} - ${town.name}`}
                body={getPublicListingDescription({
                  name: stay.name,
                  town: town.name,
                  type: stay.type,
                  bestFor: stay.bestFor,
                  description: stay.bestFor,
                  officialWebsiteUrl: stay.officialWebsiteUrl,
                  bookingUrl: stay.bookingUrl,
                  affiliateUrl: stay.affiliateUrl,
                  sourceUrls: stay.sourceUrls,
                }, 'stay')}
                tags={uniquePublicTags([stay.type, 'No caravan parks'])}
                ctaHref={ctaHref}
                ctaLabel={ctaLabel}
                verificationKind={showNotice && !showStayVerificationSummary ? 'stay' : undefined}
              />
            );
          })}
        </div>
      </Section>

      <Section id="caravan-parks" eyebrow="Holiday parks" title={`Caravan Parks near ${town.name}`}>
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-charcoal-muted">
          These nearby options are separated from hotels and guest accommodation. Distances, facilities, dog policies, touring pitches, lodges, glamping and fishing should be verified with each park.
        </p>
        {showParkVerificationSummary ? <SectionVerificationSummary kind="park" /> : null}
        <div className="grid gap-5 lg:grid-cols-2">
          {visibleParks.map((park) => {
            const maps = getGoogleMapsLink({ name: park.name, areaNote: park.locationContext ?? town.name, location: park.location });
            return (
              <InfoCard
                key={park.id}
                title={park.name}
                meta={park.locationContext ?? `near ${town.name}`}
                body={getPublicListingDescription({
                  name: park.name,
                  town: town.name,
                  type: 'Caravan park',
                  description: park.description,
                  tags: park.tags,
                  bookingUrl: park.bookingUrl,
                  affiliateUrl: park.affiliateUrl,
                  officialWebsiteUrl: park.sourceUrl,
                }, 'park')}
                tags={uniquePublicTags(park.tags.slice(0, 6))}
                ctaHref={park.bookingUrl ?? park.affiliateUrl ?? park.sourceUrl ?? maps?.href ?? mapsSearchUrl(`${park.name} ${town.name}`)}
                ctaLabel={park.affiliateUrl ? 'Check availability' : park.bookingUrl ? 'View on Booking.com' : park.sourceUrl ? 'Visit official website' : 'View map/details'}
                verificationKind={park.needsVerification && !showParkVerificationSummary ? 'park' : undefined}
              />
            );
          })}
        </div>
      </Section>

      <Section id="things-to-do" eyebrow="Attractions" title={`Things to Do in ${town.name}`} tint>
        {showAttractionVerificationSummary ? <SectionVerificationSummary kind="attraction" /> : null}
        <div className="grid gap-5 lg:grid-cols-2">
          {profile.attractions.map((item) => (
            <ThingCard
              key={item.name}
              item={item}
              town={town.name}
              showVerificationNotice={!showAttractionVerificationSummary}
            />
          ))}
        </div>
      </Section>

      <NatureSpotsSection townName={town.name} spots={natureSpots} />

      <Section id="food-drink" eyebrow="Food and drink" title={`Food & Drink in ${town.name}`}>
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-charcoal-muted">
          These food and drink options are included as practical local ideas, not rankings. Check current opening hours, menus and booking requirements directly before visiting.
        </p>
        {showFoodVerificationSummary ? <SectionVerificationSummary kind="food" /> : null}
        <div className="grid gap-5 lg:grid-cols-2">
          {visibleFood.map((venue) => {
            const maps = getGoogleMapsLink({ name: venue.name, town: town.name, location: venue.location });
            const showNotice = shouldShowListingVerificationNotice({
              needsVerification: venue.needsVerification,
              sourceUrls: venue.sourceUrls,
            });
            const ctaHref = venue.officialWebsiteUrl ?? maps?.href ?? mapsSearchUrl(`${venue.name} ${town.name}`);
            return (
              <InfoCard
                key={venue.id}
                title={venue.name}
                meta={venue.type}
                body={getPublicListingDescription({
                  name: venue.name,
                  town: town.name,
                  type: venue.type,
                  description: venue.description,
                  officialWebsiteUrl: venue.officialWebsiteUrl,
                  sourceUrls: venue.sourceUrls,
                }, 'food')}
                tags={[venue.type, 'Check menus direct', 'No ratings published']}
                ctaHref={ctaHref}
                ctaLabel={venue.officialWebsiteUrl ? 'Visit official website' : 'View map/details'}
                verificationKind={showNotice && !showFoodVerificationSummary ? 'food' : undefined}
              />
            );
          })}
        </div>
      </Section>

      <Section id="practical-tips" eyebrow="Visitor tips" title={`Practical visitor tips for ${town.name}`} tint>
        <ul className="grid gap-3 text-sm leading-relaxed text-charcoal-muted sm:grid-cols-2">
          {profile.practicalTips.map((tip) => <li key={tip} className="rounded-xl border border-cream-dark/60 bg-white p-4">{tip}</li>)}
        </ul>
      </Section>

      <Section id="image-use" eyebrow="Image use" title="Image credits and licensing">
        <div className="rounded-2xl border border-cream-dark/60 bg-white p-5 text-sm leading-relaxed text-charcoal-muted">
          <p>Hero image: {credit.title}. Photo: {credit.author} via {credit.source}. Licence: {credit.licence}. Stored locally at {credit.localPath}; no hotlinking.</p>
          <p className="mt-2">
            Source: <a href={credit.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-sage underline">{credit.sourceUrl}</a>
          </p>
          <p className="mt-2"><Link href={`/image-credits#${credit.id}`} className="text-sage underline">Full image credits</Link></p>
        </div>
      </Section>

      <Section id="faqs" eyebrow="FAQs" title={`${town.name} FAQs`} tint>
        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-2xl border border-cream-dark/60 bg-white p-5">
              <summary className="cursor-pointer font-heading text-lg font-semibold text-charcoal">{faq.question}</summary>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="related-guides" eyebrow="Keep planning" title="Related guides">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { label: `Places to Stay in ${town.name}`, href: `/places-to-stay/${slug}` },
            { label: `Caravan Parks near ${town.name}`, href: `/caravan-parks/best-caravan-parks-near-${slug}` },
            { label: `Things to Do in ${town.name}`, href: `/things-to-do/${slug}` },
            { label: `Food & Drink in ${town.name}`, href: `/food-drink/${slug}` },
            ...related.map((r) => ({ label: slugTitle(r.slug), href: `/town-guides/${r.slug}` })),
          ].slice(0, 9).map((link) => (
            <Link key={link.href} href={link.href} className="rounded-xl border border-cream-dark/60 bg-white p-4 text-sm font-semibold text-charcoal hover:border-sage/50 hover:text-sage">
              {link.label}
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-gradient-to-r from-sage/10 via-sage/5 to-cream py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">Run a visitor business in {town.name}?</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal-muted">
            Submit your details for editorial review so visitors can discover useful local accommodation, attractions and food stops.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/add-your-business" className="btn-primary">Add Your Business</Link>
            <Link href="/contact?reason=listing-update" className="btn-secondary">Report an update</Link>
          </div>
        </div>
      </section>
    </>
  );
}
