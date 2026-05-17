import Link from 'next/link';

export type QuickLinkItem = {
  label: string;
  href: string;
  description?: string;
};

type QuickLinksProps = {
  title?: string;
  ariaLabel?: string;
  links: QuickLinkItem[];
};

export function QuickLinks({
  title = 'Plan this guide',
  ariaLabel = 'Page sections',
  links,
}: QuickLinksProps) {
  if (!links.length) return null;

  return (
    <nav aria-label={ariaLabel} className="my-6 rounded-2xl border border-cream-dark/60 bg-white p-4 shadow-sm">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-charcoal-muted">{title}</h2>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className="group block min-h-[44px] rounded-xl border border-cream-dark/70 bg-cream/30 px-4 py-3 transition hover:border-sage/40 hover:bg-sage/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage"
            >
              <span className="block font-semibold text-charcoal group-hover:text-sage">{link.label}</span>
              {link.description ? (
                <span className="mt-1 block text-sm leading-5 text-charcoal-muted">{link.description}</span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export const lincolnQuickLinks: QuickLinkItem[] = [
  {
    label: 'Where to stay',
    href: '#places-to-stay',
    description: 'Hotels, inns, B&Bs, guest houses and cottages.',
  },
  {
    label: 'Things to do',
    href: '#things-to-do',
    description: 'Heritage, museums, walks and attractions.',
  },
  {
    label: 'Parks & nature',
    href: '#parks-nature',
    description: 'Green spaces and outdoor ideas.',
  },
  {
    label: 'Food & drink',
    href: '#food-drink',
    description: 'Pubs, cafes, restaurants and meal stops.',
  },
  {
    label: 'Nearby caravan parks',
    href: '#caravan-parks',
    description: 'Touring, lodges and countryside alternatives.',
  },
];
