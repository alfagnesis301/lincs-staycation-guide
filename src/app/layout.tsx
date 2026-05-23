import type { Metadata } from 'next';
import { Newsreader, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import MobileTabBar from '@/components/MobileTabBar';
import CookieBanner from '@/components/CookieBanner';
import { getSiteUrl, siteConfig } from '@/lib/site-config';

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
    default: `${siteConfig.name} | Places to Stay, Eat & Explore in Lincolnshire`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.description} ${siteConfig.footerDisclaimer}`,
  metadataBase: new URL(getSiteUrl()),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Places to Stay, Eat & Explore in Lincolnshire`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

const SITE_URL = getSiteUrl();

const siteJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: SITE_URL,
    inLanguage: 'en-GB',
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
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
