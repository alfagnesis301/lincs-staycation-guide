'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { mainNavItems } from '@/data/navigation';
import { ChevDown, Menu, Plus, Search, X } from '@/components/dsn/Icons';

const navItems = mainNavItems.filter((i) => i.href !== '/add-your-business');

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
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
            <div
              key={item.href}
              style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
              className={item.dropdown ? 'dsn-nav-dropdown' : ''}
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.href)}
              onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="dsn-nav-item"
              >
                {item.label}
                {item.dropdown && <ChevDown width={13} height={13} />}
              </Link>

              {/* Desktop dropdown menu — only show if openDropdown matches */}
              {item.dropdown && openDropdown === item.href && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: -12,
                    marginTop: 4,
                    background: 'var(--bg)',
                    border: '1px solid var(--line)',
                    borderRadius: 12,
                    padding: '12px',
                    minWidth: 240,
                    boxShadow: 'var(--shadow-pop)',
                    zIndex: 50,
                  }}
                  className="dsn-dropdown-menu"
                >
                  <div style={{ paddingBottom: 8, borderBottom: '1px solid var(--line)' }}>
                    <div
                      style={{
                        fontSize: 11,
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        color: 'var(--ink-3)',
                        textTransform: 'uppercase',
                        letterSpacing: 0.5,
                        marginBottom: 8,
                      }}
                    >
                      {item.dropdown.heading}
                    </div>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {item.dropdown.locations.map((loc) => (
                        <Link
                          key={loc.href}
                          href={loc.href}
                          style={{
                            padding: '8px 10px',
                            borderRadius: 8,
                            fontSize: 13,
                            color: 'var(--ink)',
                            textDecoration: 'none',
                          }}
                          className="dsn-dropdown-link"
                        >
                          {loc.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <Link
                    href={item.dropdown.viewAllHref}
                    style={{
                      display: 'block',
                      padding: '8px 10px',
                      marginTop: 8,
                      borderRadius: 8,
                      fontSize: 12,
                      fontWeight: 600,
                      color: 'var(--sage-2)',
                      textDecoration: 'none',
                    }}
                    className="dsn-dropdown-viewall"
                  >
                    {item.dropdown.viewAllLabel}
                  </Link>
                </div>
              )}
            </div>
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
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  padding: '14px 12px',
                  borderRadius: 10,
                  fontSize: 16,
                  fontWeight: 500,
                  color: 'var(--ink)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                {item.label}
              </Link>
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
    </>
  );
}
