import type { Metadata } from 'next';
import { CategoryHub } from '@/components/CategoryGuidePages';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://lincs-staycation-guide.co.uk';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Places to Stay in Lincolnshire',
  description: 'Find places to stay in Lincolnshire by location, from boutique hotels to holiday cottages.',
  alternates: { canonical: '/places-to-stay' },
  openGraph: {
    title: 'Places to Stay in Lincolnshire | Lincs Staycation Guide',
    description: 'Find places to stay in Lincolnshire by location, from boutique hotels to holiday cottages.',
    url: `${SITE_URL}/places-to-stay`,
    siteName: 'Lincs Staycation Guide',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Places to Stay in Lincolnshire',
    description: 'Find places to stay in Lincolnshire by location, from boutique hotels to holiday cottages.',
  },
};

export default function Page(){ return <CategoryHub kind="places-to-stay" />; }
