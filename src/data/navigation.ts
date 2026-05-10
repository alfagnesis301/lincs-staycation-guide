export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  highlight?: boolean;
}

export const mainNavItems: NavItem[] = [
  { label: 'Places to Stay', href: '/places-to-stay' },
  { label: 'Caravan Parks', href: '/caravan-parks' },
  { label: 'Things to Do', href: '/things-to-do' },
  { label: 'Food & Drink', href: '/food-drink' },
  { label: 'Coast', href: '/lincolnshire-coast' },
  { label: 'Town Guides', href: '/town-guides' },
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
