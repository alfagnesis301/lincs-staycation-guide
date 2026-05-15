import type { Metadata } from 'next';
import { CategoryHub } from '@/components/CategoryGuidePages';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://lincsstaycationguide.co.uk';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Places to Stay in Lincolnshire',
  description: 'Research-led Lincolnshire places to stay guides by location from the revised PDF.',
  alternates: { canonical: '/places-to-stay' },
  openGraph: {
    title: 'Places to Stay in Lincolnshire | Lincs Staycation Guide',
    description: 'Research-led Lincolnshire places to stay guides by location from the revised PDF.',
    url: `${SITE_URL}/places-to-stay`,
    siteName: 'Lincs Staycation Guide',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Places to Stay in Lincolnshire',
    description: 'Research-led Lincolnshire places to stay guides by location from the revised PDF.',
  },
};

export default function Page(){ return <CategoryHub kind="places-to-stay" />; }
