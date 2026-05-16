import { notFound } from 'next/navigation';
import Link from 'next/link';
import { towns } from '@/data/towns';
import { lincolnGuide } from '@/data/lincolnGuide';
import { getTownGuideProfile } from '@/data/townGuideProfiles';
import { TownGuideTemplate } from '@/components/dsn/TownGuideTemplate';
import LincolnGuideSections from '@/components/town-guides/LincolnGuideSections';
import FullTownGuidePage from '@/components/town-guides/FullTownGuidePage';

interface TownGuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return towns.map((town) => ({ slug: town.slug }));
}

export async function generateMetadata({ params }: TownGuidePageProps) {
  const { slug } = await params;
  const town = towns.find((t) => t.slug === slug);
  const profile = getTownGuideProfile(slug);
  if (!town || !profile) return {};

  return {
    title: profile.seoTitle,
    description: profile.metaDescription,
    openGraph: {
      title: profile.seoTitle,
      description: profile.metaDescription,
    },
    alternates: { canonical: `/town-guides/${slug}` },
  };
}

const REGION_LABEL: Record<string, string> = {
  City: 'City · Cathedral',
  Coast: 'Coast · Seaside',
  'Market town': 'Market town · Wolds',
  Countryside: 'Countryside · AONB',
};

const GOOD_BASE_FOR: Record<string, string> = {
  City: 'County exploring, day trips',
  Coast: 'Beach holidays, caravan parks',
  'Market town': 'Countryside walks, day trips',
  Countryside: 'Walking, cycling, rural breaks',
};

export default async function TownGuidePage({ params }: TownGuidePageProps) {
  const { slug } = await params;
  const town = towns.find((t) => t.slug === slug);
  const profile = getTownGuideProfile(slug);
  if (!town) notFound();
  if (profile) return <FullTownGuidePage slug={slug} />;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: town.name,
    description: town.description,
    url: `https://lincs-staycation-guide.co.uk/town-guides/${slug}`,
    touristType: town.bestFor,
    geo: {
      '@type': 'GeoCoordinates',
    },
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Lincolnshire',
    },
  };

  if (slug === 'lincoln') {
    return (
      <TownGuideTemplate
        town="Lincoln"
        region={REGION_LABEL[town.regionType] ?? town.regionType}
        lead={lincolnGuide.intro}
        bestFor={lincolnGuide.bestFor}
        imageLabel="Lincoln Cathedral · Steep Hill"
        imageContext="Cathedral & old town"
        quickFacts={{
          regionType: town.regionType,
          bestFor: town.bestFor,
          county: 'Lincolnshire',
          goodBaseFor: GOOD_BASE_FOR[town.regionType],
        }}
        sections={[
          {
            id: 'lincoln-guide',
            eyebrow: 'Full guide',
            title: 'Exploring Lincoln',
            children: <LincolnGuideSections />,
          },
        ]}
        jsonLd={jsonLd}
      />
    );
  }

  const categoryLinks = town.categories.map((cat) => ({
    label: cat.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    href: `/${cat}`,
  }));

  return (
    <TownGuideTemplate
      town={town.name}
      region={REGION_LABEL[town.regionType] ?? town.regionType}
      lead={town.description}
      bestFor={town.bestFor}
      imageLabel={`${town.name} · Lincolnshire`}
      quickFacts={{
        regionType: town.regionType,
        bestFor: town.bestFor,
        county: 'Lincolnshire',
        goodBaseFor: GOOD_BASE_FOR[town.regionType],
      }}
      sections={[
        {
          id: 'visiting',
          eyebrow: 'About the destination',
          title: `Visiting ${town.name}`,
          children: (
            <div style={{ maxWidth: 720 }}>
              {town.extendedDescription.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: 16.5,
                    lineHeight: 1.65,
                    color: 'var(--ink-2)',
                    marginBottom: i < town.extendedDescription.length - 1 ? 20 : 0,
                  }}
                >
                  {p}
                </p>
              ))}
              {categoryLinks.length > 0 && (
                <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {categoryLinks.map((c) => (
                    <Link key={c.href} href={c.href} className="dsn-chip">
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ),
        },
        {
          id: 'where-to-stay',
          eyebrow: 'Places to stay',
          title: `Where to stay in ${town.name}`,
          sub: 'Independently verified — all options link direct to the operator.',
          children: (
            <div
              style={{
                padding: '28px 32px',
                background: 'var(--bg-tint)',
                borderRadius: 16,
                border: '1px solid var(--line)',
                textAlign: 'center',
              }}
            >
              <p style={{ fontSize: 15, color: 'var(--ink-2)', marginBottom: 20 }}>
                We are researching verified accommodation in {town.name} and will publish
                options as we confirm them. Browse all options via the link below.
              </p>
              <Link
                href={`/places-to-stay/${slug}`}
                className="dsn-btn"
                style={{ display: 'inline-flex' }}
              >
                Browse places to stay in {town.name}
              </Link>
            </div>
          ),
        },
      ]}
      jsonLd={jsonLd}
    />
  );
}
