'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bookmark, Compass, Home, Map, Menu } from '@/components/dsn/Icons';

const tabs = [
  { id: 'home',   label: 'Home',   href: '/',              match: (p: string) => p === '/' },
  { id: 'browse', label: 'Browse', href: '/places-to-stay',match: (p: string) => p.startsWith('/places-to-stay') || p.startsWith('/things-to-do') },
  { id: 'map',    label: 'Map',    href: '/town-guides',   match: (p: string) => p.startsWith('/town-guides') || p.startsWith('/lincolnshire-coast') },
  { id: 'saved',  label: 'Saved',  href: '/saved',         match: (p: string) => p.startsWith('/saved') },
  { id: 'more',   label: 'More',   href: '/about',         match: (p: string) => p.startsWith('/about') || p.startsWith('/contact') },
];

export default function MobileTabBar() {
  const pathname = usePathname() ?? '/';
  return (
    <nav className="dsn-mobile-tab-bar" aria-label="Mobile tab bar">
      {tabs.map((t) => {
        const active = t.match(pathname);
        const Icon = { home: Home, browse: Compass, map: Map, saved: Bookmark, more: Menu }[t.id]!;
        return (
          <Link
            key={t.id}
            href={t.href}
            className={`dsn-mobile-tab${active ? ' active' : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            <span className="icon">
              <Icon width={22} height={22} />
            </span>
            <span>{t.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
