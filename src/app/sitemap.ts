import type { MetadataRoute } from 'next';
import { caravanParkGuides } from '@/data/caravanParkGuides';
import { placesToStayGuides } from '@/data/placesToStayGuides';
import { towns } from '@/data/towns';
import { publishedGuides } from '@/data/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lincsstaycationguide.co.uk';
  const now = new Date();

  // /events and /blog are intentionally omitted while they hold no
  // verified, dated content — both pages also send noindex headers.
  const staticRoutes = [
    '',
    '/places-to-stay',
    '/things-to-do',
    '/food-drink',
    '/lincolnshire-coast',
    '/dog-friendly',
    '/family-days-out',
    '/town-guides',
    '/about',
    '/contact',
    '/add-your-business',
    '/advertise',
    '/caravan-parks',
    '/caravan-parks/booking',
    '/image-credits',
    '/privacy-policy',
    '/cookie-policy',
    '/terms',
    '/affiliate-disclosure',
    '/editorial-policy',
    '/business-listing-terms',
  ];

  if (publishedGuides.length > 0) {
    staticRoutes.push('/blog');
  }

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority:
      route === ''
        ? 1
        : route === '/caravan-parks'
          ? 0.9
          : route.includes('policy') || route.includes('terms') || route.includes('disclosure') || route.includes('credits')
            ? 0.3
            : 0.8,
  }));

  // Caravan park guide pages (16 entries)
  const caravanEntries: MetadataRoute.Sitemap = caravanParkGuides.map((g) => ({
    url: `${baseUrl}/caravan-parks/${g.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: ['skegness', 'mablethorpe', 'lincoln', 'chapel-st-leonards', 'sutton-on-sea'].includes(g.id) ? 0.8 : 0.7,
  }));

  // Town guide pages
  const townEntries: MetadataRoute.Sitemap = towns.map((t) => ({
    url: `${baseUrl}/town-guides/${t.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Places to stay location landing pages
  const placesToStayLocationEntries: MetadataRoute.Sitemap = placesToStayGuides.map((guide) => ({
    url: `${baseUrl}${guide.href}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Published blog posts only — drafts/stubs must never appear in the sitemap.
  const blogEntries: MetadataRoute.Sitemap = publishedGuides.map((g) => ({
    url: `${baseUrl}/blog/${g.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...caravanEntries,
    ...townEntries,
    ...placesToStayLocationEntries,
    ...blogEntries,
  ];
}
