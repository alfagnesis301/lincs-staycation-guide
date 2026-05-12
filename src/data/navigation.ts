export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  highlight?: boolean;
}

export const placesToStayLocations: NavItem[] = [
  { label: 'Lincoln', href: '/places-to-stay/lincoln' },
  { label: 'Skegness', href: '/places-to-stay/skegness' },
  { label: 'Stamford', href: '/places-to-stay/stamford' },
  { label: 'Louth', href: '/places-to-stay/louth' },
  { label: 'Boston', href: '/places-to-stay/boston' },
  { label: 'Grantham', href: '/places-to-stay/grantham' },
  { label: 'Spalding', href: '/places-to-stay/spalding' },
  { label: 'Sleaford', href: '/places-to-stay/sleaford' },
  { label: 'Mablethorpe', href: '/places-to-stay/mablethorpe' },
  { label: 'Woodhall Spa', href: '/places-to-stay/woodhall-spa' },
];

export const mainNavItems: NavItem[] = [
  { label: 'Places to Stay', href: '/places-to-stay', children: placesToStayLocations },
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
