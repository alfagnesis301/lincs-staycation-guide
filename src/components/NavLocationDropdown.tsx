'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { NavDropdown } from '@/data/navigation';

interface NavLocationDropdownProps {
  label: string;
  href: string;
  dropdown: NavDropdown;
  menuId: string;
}

export default function NavLocationDropdown({
  label,
  href,
  dropdown,
  menuId,
}: NavLocationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  const open = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
      closeTimerRef.current = null;
    }, 180);
  };

  const focusFirstLink = () => {
    window.setTimeout(() => firstLinkRef.current?.focus(), 0);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={open}
      onMouseLeave={scheduleClose}
    >
      <div className="flex items-center">
        <Link
          href={href}
          className="px-3 py-2 text-sm font-medium text-charcoal-light hover:text-sage transition-colors rounded-l-lg hover:bg-cream/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
          onFocus={open}
        >
          {label}
        </Link>
        <button
          type="button"
          className="px-2 py-2 text-charcoal-light hover:text-sage transition-colors rounded-r-lg hover:bg-cream/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
          aria-haspopup="menu"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label={`Open ${label.toLowerCase()} by location`}
          onClick={(event) => {
            event.stopPropagation();
            setIsOpen((current) => !current);
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              setIsOpen(true);
              focusFirstLink();
            }
          }}
        >
          <svg
            className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          id={menuId}
          role="menu"
          aria-label={dropdown.heading}
          className="pointer-events-auto absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border border-cream-dark/70 bg-white p-3 shadow-xl shadow-charcoal/10 ring-1 ring-black/5"
          onMouseEnter={open}
          onMouseLeave={scheduleClose}
        >
          <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-wide text-charcoal-muted">
            {dropdown.heading}
          </p>
          <div className="space-y-1">
            {dropdown.locations.map((location, index) => (
              <Link
                key={location.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={location.href}
                role="menuitem"
                className="block rounded-xl px-3 py-2 text-sm font-medium text-charcoal hover:bg-cream/70 hover:text-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                onClick={() => setIsOpen(false)}
              >
                {location.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 border-t border-cream-dark/70 pt-3">
            <Link
              href={dropdown.viewAllHref}
              role="menuitem"
              className="block rounded-xl px-3 py-2 text-sm font-semibold text-sage hover:bg-sage/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
              onClick={() => setIsOpen(false)}
            >
              {dropdown.viewAllLabel}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
