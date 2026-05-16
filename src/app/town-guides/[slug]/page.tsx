import { notFound } from 'next/navigation';
import Image from 'next/image';
import { towns } from '@/data/towns';
import { getListingsByTown } from '@/data/listings';
import { getImageCredit } from '@/data/imageCredits';
import { lincolnGuide } from '@/data/lincolnGuide';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import ListingCard from '@/components/ListingCard';
import CTASection from '@/components/CTASection';
import AdPlaceholder from '@/components/AdPlaceholder';
import ImageCreditComponent from '@/components/ImageCredit';
import LocationGuideHero from '@/components/town-guides/LocationGuideHero';
import LincolnGuideSections from '@/components/town-guides/LincolnGuideSections';

interface TownGuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return towns.map((town) => ({ slug: town.slug }));
}

export async function generateMetadata({ params }: TownGuidePageProps) {
  const { slug } = await params;
  const town = towns.find((t) => t.slug === slug);
  if (!town) return {};

  if (slug === 'lincoln') {
    return {
      title: 'Lincoln Travel Guide | Places to Stay, Things to Do & Food | Lincs Staycation Guide',
      description:
        'Plan a Lincoln city break with places to stay, nearby caravan parks, historic things to do, food and drink ideas, and practical visitor information for Lincoln, Lincolnshire.',
      openGraph: {
        title: 'Lincoln Travel Guide | Lincs Staycation Guide',
        description:
          'Plan a Lincoln city break with places to stay, nearby caravan parks, historic things to do, food and drink ideas, and practical visitor information.',
      },
      alternates: { canonical: '/town-guides/lincoln' },
    };
  }

  return {
    title: `${town.name} Travel Guide | Things to Do, Places to Stay & Where to Eat in ${town.name}`,
    description: `Discover the best things to do, places to stay, restaurants, pubs and local attractions in ${town.name}, Lincolnshire. An independent local guide.`,
    openGraph: {
      title: `${town.name} Guide | Lincs Staycation Guide`,
      description: `Discover the best things to do, places to stay and where to eat in ${town.name}, Lincolnshire.`,
    },
    alternates: { canonical: `/town-guides/${slug}` },
  };
}

export default async function TownGuidePage({ params }: TownGuidePageProps) {
  const { slug } = await params;
  const town = towns.find((t) => t.slug === slug);
  if (!town) notFound();

  const townListings = getListingsByTown(town.name);
  const imageCredit = town.image ? getImageCredit(`town-${slug}`) : undefined;

  if (slug === 'lincoln') {
    return (
      <>
        <LocationGuideHero
          title={lincolnGuide.title}
          subtitle={lincolnGuide.subtitle}
          intro={lincolnGuide.intro}
          regionBadge={lincolnGuide.regionBadge}
          bestFor={lincolnGuide.bestFor}
          quickFacts={lincolnGuide.quickFacts}
          heroImage={lincolnGuide.heroImage}
        />
        <LincolnGuideSections />
      </>
    );
  }

  const regionIcons: Record<string, string> = {
    'City': '🏛️',
    'Coast': '🌊',
    'Market town': '🏘️',
    'Countryside': '🌿',
  };

  // British-vibe gradient combos per region
  const regionGradients: Record<string, string> = {
    'City': 'from-sand-light/40 via-cream to-coast/10',
    'Coast': 'from-coast/15 via-cream to-sand-light/30',
    'Market town': 'from-sage/10 via-cream to-sand-light/30',
    'Countryside': 'from-sage/15 via-cream to-sand-light/20',
  };

  return (
    <>
      <section className="hero-gradient py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Town Guides', href: '/town-guides' },
            { label: town.name },
          ]} />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl" role="img" aria-label={town.regionType}>
              {regionIcons[town.regionType]}
            </span>
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                {town.name}
              </h1>
              <span className="text-sm font-medium text-coast">{town.regionType} · Best for: {town.bestFor}</span>
            </div>
          </div>
          <p className="text-lg text-charcoal-muted leading-relaxed max-w-3xl">
            {town.description}
          </p>
        </div>
      </section>

      {/* Extended content — anti-thin-content for AdSense */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
            {/* Main content: 3/5 */}
            <div className="md:col-span-3">
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-5">
                Visiting {town.name}
              </h2>
              {town.extendedDescription.map((paragraph, index) => (
                <p key={index} className="text-charcoal-muted leading-relaxed mb-5">
                  {paragraph}
                </p>
              ))}

              {/* Category links */}
              <div className="mt-6">
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">
                  Explore {town.name} on Lincs Staycation Guide
                </h3>
                <div className="flex flex-wrap gap-2">
                  {town.categories.map((cat) => (
                    <a
                      key={cat}
                      href={`/${cat}`}
                      className="badge badge-sage text-[11px] hover:bg-sage/20 transition-colors"
                    >
                      {cat.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar: 2/5 */}
            <div className="md:col-span-2">
              {/* Town photograph */}
              <div className={`relative rounded-2xl aspect-[4/3] overflow-hidden mb-6 ${!town.image ? `bg-gradient-to-br ${regionGradients[town.regionType]} flex items-center justify-center` : ''}`}>
                {town.image ? (
                  <>
                    <Image
                      src={town.image}
                      alt={`${town.name}, Lincolnshire — iconic view`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                    />
                    {imageCredit && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/40 px-3 py-1.5">
                        <ImageCreditComponent credit={imageCredit} variant="inline" />
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center">
                    <span className="text-5xl block mb-2">{regionIcons[town.regionType]}</span>
                    <span className="text-xs text-charcoal-muted font-medium">{town.name}, Lincolnshire</span>
                  </div>
                )}
              </div>

              {/* Quick facts card */}
              <div className="bg-cream/50 rounded-2xl p-5 border border-cream-dark/40">
                <h3 className="font-heading text-base font-semibold text-charcoal mb-3">Quick facts</h3>
                <dl className="space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-charcoal-muted">Region type</dt>
                    <dd className="font-medium text-charcoal">{town.regionType}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-charcoal-muted">Best for</dt>
                    <dd className="font-medium text-charcoal text-right max-w-[60%]">{town.bestFor}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-charcoal-muted">County</dt>
                    <dd className="font-medium text-charcoal">Lincolnshire</dd>
                  </div>
                </dl>
              </div>

              {/* Ad between sidebar content, not near navigation */}
              <AdPlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* Listings */}
      {townListings.length > 0 && (
        <section className="py-12 sm:py-16 bg-cream/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title={`Listings in ${town.name}`} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {townListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </section>
      )}

      {townListings.length === 0 && (
        <section className="py-12 sm:py-16 bg-cream/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12 bg-white rounded-2xl border border-cream-dark/40">
              <p className="text-charcoal-muted max-w-xl mx-auto leading-relaxed mb-4">
                We are researching {town.name} businesses and only publish verified entries. Browse the location category pages below for accommodation, attractions and food &amp; drink options we have already reviewed for the area.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                <a href={`/places-to-stay/${town.slug}`} className="text-sage font-medium hover:text-sage-dark underline">Places to stay</a>
                <a href={`/things-to-do/${town.slug}`} className="text-sage font-medium hover:text-sage-dark underline">Things to do</a>
                <a href={`/food-drink/${town.slug}`} className="text-sage font-medium hover:text-sage-dark underline">Food &amp; drink</a>
                <a href="/add-your-business" className="text-sage font-medium hover:text-sage-dark underline">Add a {town.name} business</a>
              </div>
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Run a business in ${town.name}?`}
        description={`Add your business to our ${town.name} guide and help visitors discover what you offer.`}
        buttonText="Add Your Business"
        buttonHref="/add-your-business"
      />
    </>
  );
}
