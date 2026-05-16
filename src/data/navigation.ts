export interface NavLocation {
  label: string;
  href: string;
}

export interface NavDropdown {
  heading: string;
  locations: readonly NavLocation[];
  viewAllHref: string;
  viewAllLabel: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdown;
  highlight?: boolean;
}

// Single source of truth for town display names → slugs. Slugs are validated
// against generateStaticParams in the relevant [slug] routes (locationGuides /
// towns / caravanParkGuides datasets).
const TOWN_NAMES: Record<string, string> = {
  lincoln: 'Lincoln',
  skegness: 'Skegness',
  stamford: 'Stamford',
  louth: 'Louth',
  boston: 'Boston',
  grantham: 'Grantham',
  spalding: 'Spalding',
  sleaford: 'Sleaford',
  mablethorpe: 'Mablethorpe',
  'woodhall-spa': 'Woodhall Spa',
  horncastle: 'Horncastle',
  gainsborough: 'Gainsborough',
  'market-rasen': 'Market Rasen',
  bourne: 'Bourne',
};

const CORE_TOWN_SLUGS = [
  'lincoln',
  'skegness',
  'stamford',
  'louth',
  'boston',
  'grantham',
  'spalding',
  'sleaford',
  'mablethorpe',
  'woodhall-spa',
] as const;

const TOWN_GUIDE_SLUGS = [
  ...CORE_TOWN_SLUGS,
  'horncastle',
  'gainsborough',
  'market-rasen',
  'bourne',
] as const;

const COAST_TOWN_SLUGS = ['skegness', 'mablethorpe'] as const;

const buildLocations = (slugs: readonly string[], basePath: string): NavLocation[] =>
  slugs.map((slug) => ({ label: TOWN_NAMES[slug], href: `${basePath}/${slug}` }));

export const placesToStayLocations: NavLocation[] = buildLocations(
  CORE_TOWN_SLUGS,
  '/places-to-stay',
);

// Caravan park guide slugs are full SEO slugs (best-caravan-parks-near-<town>).
// Linking to existing real routes — see auditoría.
export const caravanParksLocations: NavLocation[] = CORE_TOWN_SLUGS.map((slug) => ({
  label: TOWN_NAMES[slug],
  href: `/caravan-parks/best-caravan-parks-near-${slug}`,
}));

export const thingsToDoLocations: NavLocation[] = buildLocations(
  CORE_TOWN_SLUGS,
  '/things-to-do',
);

export const foodDrinkLocations: NavLocation[] = buildLocations(
  CORE_TOWN_SLUGS,
  '/food-drink',
);

// No /lincolnshire-coast/[slug] route exists — fall back to town-guides for
// coastal towns that have a town-guide entry (Skegness, Mablethorpe).
export const coastLocations: NavLocation[] = buildLocations(
  COAST_TOWN_SLUGS,
  '/town-guides',
);

export const townGuidesLocations: NavLocation[] = buildLocations(
  TOWN_GUIDE_SLUGS,
  '/town-guides',
);

export const mainNavItems: NavItem[] = [
  {
    label: 'Places to Stay',
    href: '/places-to-stay',
    dropdown: {
      heading: 'Places to stay by location',
      locations: placesToStayLocations,
      viewAllHref: '/places-to-stay',
      viewAllLabel: 'View all places to stay',
    },
  },
  {
    label: 'Caravan Parks',
    href: '/caravan-parks',
    dropdown: {
      heading: 'Caravan parks by location',
      locations: caravanParksLocations,
      viewAllHref: '/caravan-parks',
      viewAllLabel: 'View all caravan parks',
    },
  },
  {
    label: 'Things to Do',
    href: '/things-to-do',
    dropdown: {
      heading: 'Things to do by location',
      locations: thingsToDoLocations,
      viewAllHref: '/things-to-do',
      viewAllLabel: 'View all things to do',
    },
  },
  {
    label: 'Food & Drink',
    href: '/food-drink',
    dropdown: {
      heading: 'Food & drink by location',
      locations: foodDrinkLocations,
      viewAllHref: '/food-drink',
      viewAllLabel: 'View all food & drink',
    },
  },
  {
    label: 'Coast',
    href: '/lincolnshire-coast',
    dropdown: {
      heading: 'Coastal locations',
      locations: coastLocations,
      viewAllHref: '/lincolnshire-coast',
      viewAllLabel: 'View all coastal guides',
    },
  },
  {
    label: 'Town Guides',
    href: '/town-guides',
    dropdown: {
      heading: 'Town guides by location',
      locations: townGuidesLocations,
      viewAllHref: '/town-guides',
      viewAllLabel: 'View all town guides',
    },
  },
  { label: 'Add Your Business', href: '/add-your-business' },
];

export const footerExploreLinks: NavItem[] = [
  { label: 'Places to Stay', href: '/places-to-stay' },
  { label: 'Caravan Parks & Holiday Parks', href: '/caravan-parks' },
  { label: 'Things to Do', href: '/things-to-do' },
  { label: 'Food & Drink', href: '/food-drink' },
  { label: 'Lincolnshire Coast', href: '/lincolnshire-coast' },
  { label: 'Dog-Friendly', href: '/dog-friendly' },
  { label: 'Family Days Out', href: '/family-days-out' },
  { label: 'Town Guides', href: '/town-guides' },
  { label: 'Events', href: '/events' },
];

export const footerBusinessLinks: NavItem[] = [
  { label: 'Add Your Business', href: '/add-your-business' },
  { label: 'Advertise', href: '/advertise' },
  { label: 'Business Listing Terms', href: '/business-listing-terms' },
];

export const footerCompanyLinks: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
  { label: 'Editorial Policy', href: '/editorial-policy' },
  { label: 'Image Credits', href: '/image-credits' },
];

export const categoryChips = [
  { label: 'Places to Stay', href: '/places-to-stay' },
  { label: 'Things to Do', href: '/things-to-do' },
  { label: 'Food & Drink', href: '/food-drink' },
  { label: 'Dog-Friendly', href: '/dog-friendly' },
  { label: 'Family Days Out', href: '/family-days-out' },
  { label: 'Beaches', href: '/lincolnshire-coast' },
  { label: 'Events', href: '/events' },
  { label: 'Town Guides', href: '/town-guides' },
];
