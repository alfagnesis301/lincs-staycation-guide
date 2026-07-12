export const siteConfig = {
  name: 'Lincs Staycation Guide',
  shortName: 'Lincs Staycation',
  domain: 'https://lincs-staycation-guide.co.uk',
  tagline: 'Lincolnshire travel guide',
  description:
    'An independent guide to staying, eating and exploring across Lincolnshire - coast, city, Wolds, Fens and market towns.',
  establishedYear: '2026',
  location: 'Lincoln, UK',
  contactEmail: 'hello@lincs-staycation-guide.co.uk',
  lastEditorialReview: 'May 2026',
  footerDisclaimer:
    'We are a directory, not a booking engine - check current availability, facilities, policies and prices directly with the operator.',
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Editorial Policy', href: '/editorial-policy' },
    { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
  ],
  businessLinks: [
    { label: 'Add Your Business', href: '/add-your-business' },
    { label: 'Advertise', href: '/advertise' },
    { label: 'Business Listing Terms', href: '/business-listing-terms' },
  ],
} as const;

export const getSiteUrl = () => process.env.NEXT_PUBLIC_SITE_URL || siteConfig.domain;
