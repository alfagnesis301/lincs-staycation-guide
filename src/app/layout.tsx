import type { Metadata } from 'next';
import { Newsreader, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import MobileTabBar from '@/components/MobileTabBar';
import CookieBanner from '@/components/CookieBanner';

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Lincs Staycation Guide | Places to Stay, Eat & Explore in Lincolnshire',
    template: '%s | Lincs Staycation Guide',
  },
  description:
    'Independent directory of places to stay, things to do, food & drink, caravan parks and town guides across Lincolnshire. We are a directory — book direct with the operator.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://lincsstaycationguide.co.uk'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Lincs Staycation Guide',
    title: 'Lincs Staycation Guide | Places to Stay, Eat & Explore in Lincolnshire',
    description:
      'Independent directory of places to stay, things to do, food & drink, caravan parks and town guides across Lincolnshire.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lincs Staycation Guide',
    description:
      'Independent directory of places to stay, things to do, food & drink, caravan parks and town guides across Lincolnshire.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://lincsstaycationguide.co.uk';

const siteJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lincs Staycation Guide',
    url: SITE_URL,
    inLanguage: 'en-GB',
    description:
      'Independent directory of places to stay, things to do, food & drink, caravan parks, family days out and town guides across Lincolnshire.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lincs Staycation Guide',
    url: SITE_URL,
    logo: `${SITE_URL}/file.svg`,
    sameAs: [],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'editorial',
        url: `${SITE_URL}/contact`,
        availableLanguage: ['English'],
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${newsreader.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <MobileTabBar />
        <CookieBanner />
      </body>
    </html>
  );
}
