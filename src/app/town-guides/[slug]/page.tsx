import { notFound } from 'next/navigation';
import { towns } from '@/data/towns';
import { getTownGuideProfile } from '@/data/townGuideProfiles';
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

export default async function TownGuidePage({ params }: TownGuidePageProps) {
  const { slug } = await params;
  const town = towns.find((t) => t.slug === slug);
  const profile = getTownGuideProfile(slug);

  if (!town || !profile) notFound();

  return <FullTownGuidePage slug={slug} />;
}
