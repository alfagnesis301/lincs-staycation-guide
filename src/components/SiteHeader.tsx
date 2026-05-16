'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { mainNavItems } from '@/data/navigation';
import { ChevDown, Menu, Plus, Search, X } from '@/components/dsn/Icons';
import NavLocationDropdown from '@/components/NavLocationDropdown';

const navItems = mainNavItems.filter((i) => i.href !== '/add-your-business');

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setOpenMobileDropdown(null);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header>
      {/* Desktop nav (≥ md) */}
      <nav className="dsn-nav" aria-label="Main navigation">
        <Link href="/" className="dsn-nav-brand" aria-label="Lincs Staycation Guide — home">
          <span className="dsn-nav-brand-mark">L</span>
          <span className="dsn-nav-brand-text">
            Lincs <em>Staycation</em>
            <br />
            Guide
          </span>
        </Link>
        <div className="dsn-nav-items">
          {navItems.map((item) => (
            item.dropdown ? (
              <NavLocationDropdown
                key={item.href}
                label={item.label}
                href={item.href}
                dropdown={item.dropdown}
                menuId={`desktop-menu-${item.href.replace(/\//g, '-')}`}
              />
            ) : (
              <Link key={item.href} href={item.href} className="dsn-nav-item">
                {item.label}
              </Link>
            )
          ))}
        </div>
        <Link href="/search" className="dsn-nav-search" aria-label="Search">
          <Search width={14} height={14} />
          <span>Search guides…</span>
          <kbd>⌘K</kbd>
        </Link>
        <Link href="/add-your-business" className="dsn-nav-cta primary">
          <Plus width={14} height={14} />
          Add your business
        </Link>
        <Link href="/advertise" className="dsn-nav-cta ghost">
          Advertise
        </Link>
      </nav>

      {/* Mobile nav (< md) */}
      <div className="dsn-mobile-nav">
        <button
          type="button"
          className="icon-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="dsn-mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X width={18} height={18} /> : <Menu width={18} height={18} />}
        </button>
        <Link href="/" className="brand" aria-label="Lincs Staycation Guide — home">
          Lincs <em>Staycation</em>
        </Link>
        <Link href="/search" className="icon-btn" aria-label="Search">
          <Search width={18} height={18} />
        </Link>
      </div>

      {open && (
        <div
          id="dsn-mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          style={{
            position: 'fixed',
            inset: '64px 0 0 0',
            background: 'white',
            zIndex: 49,
            overflowY: 'auto',
            padding: '20px 16px 100px',
          }}
        >
          <nav aria-label="Mobile primary" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {mainNavItems.map((item) => (
              <div key={item.href} style={{ borderBottom: '1px solid var(--line)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{
                      flex: 1,
                      padding: '14px 12px',
                      borderRadius: 10,
                      fontSize: 16,
                      fontWeight: 500,
                      color: 'var(--ink)',
                      textDecoration: 'none',
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <button
                      type="button"
                      aria-label={item.label}
                      aria-expanded={openMobileDropdown === item.href}
                      aria-controls={`mobile-menu-${item.href.replace(/\//g, '-')}`}
                      onClick={() =>
                        setOpenMobileDropdown((current) =>
                          current === item.href ? null : item.href,
                        )
                      }
                      className="icon-btn"
                      style={{ flex: '0 0 auto' }}
                    >
                      <ChevDown
                        width={16}
                        height={16}
                        style={{
                          transform:
                            openMobileDropdown === item.href ? 'rotate(180deg)' : undefined,
                        }}
                      />
                    </button>
                  )}
                </div>
                {item.dropdown && openMobileDropdown === item.href && (
                  <div
                    id={`mobile-menu-${item.href.replace(/\//g, '-')}`}
                    role="menu"
                    aria-label={`${item.label} locations`}
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        item.href === '/town-guides' ? 'repeat(2, minmax(0, 1fr))' : '1fr',
                      gap: 4,
                      maxHeight: '42vh',
                      overflowY: 'auto',
                      padding: '0 4px 12px 12px',
                    }}
                  >
                    {item.dropdown.locations.map((location) => (
                      <Link
                        key={location.href}
                        href={location.href}
                        role="menuitem"
                        onClick={() => setOpen(false)}
                        className="dsn-dropdown-link"
                        style={{
                          padding: '10px 12px',
                          borderRadius: 10,
                          color: 'var(--ink)',
                          textDecoration: 'none',
                          fontSize: 14,
                          background: 'var(--bg-tint)',
                        }}
                      >
                        {location.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/advertise"
              onClick={() => setOpen(false)}
              style={{ padding: '14px 12px', fontSize: 16, color: 'var(--sage-2)', fontWeight: 600 }}
            >
              Advertise
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
