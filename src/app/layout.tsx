import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: {
    default: 'Lincs Staycation Guide | Places to Stay, Eat & Explore in Lincolnshire',
    template: '%s | Lincs Staycation Guide',
  },
  description: 'Discover places to stay, things to do, restaurants, beaches, family days out, dog-friendly escapes and town guides across Lincolnshire.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://lincsstaycationguide.co.uk'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Lincs Staycation Guide',
    title: 'Lincs Staycation Guide | Places to Stay, Eat & Explore in Lincolnshire',
    description: 'Discover places to stay, things to do, restaurants, beaches, family days out, dog-friendly escapes and town guides across Lincolnshire.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lincs Staycation Guide',
    description: 'Discover places to stay, things to do, restaurants, beaches, family days out, dog-friendly escapes and town guides across Lincolnshire.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
