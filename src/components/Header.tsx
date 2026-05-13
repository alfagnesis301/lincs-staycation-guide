'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { mainNavItems, placesToStayLocations } from '@/data/navigation';

const placesDropdownId = 'places-to-stay-desktop-menu';
const mobilePlacesDropdownId = 'places-to-stay-mobile-menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlacesOpen, setIsPlacesOpen] = useState(false);
  const [isMobilePlacesOpen, setIsMobilePlacesOpen] = useState(false);
  const placesDropdownRef = useRef<HTMLDivElement>(null);
  const firstPlaceLinkRef = useRef<HTMLAnchorElement>(null);
  const closePlacesTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        placesDropdownRef.current &&
        !placesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsPlacesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPlacesOpen(false);
        setIsMobilePlacesOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobilePlacesOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen((current) => {
      if (current) setIsMobilePlacesOpen(false);
      return !current;
    });
  };

  const focusFirstPlaceLink = () => {
    window.setTimeout(() => firstPlaceLinkRef.current?.focus(), 0);
  };

  const openPlacesDropdown = () => {
    if (closePlacesTimerRef.current) {
      window.clearTimeout(closePlacesTimerRef.current);
      closePlacesTimerRef.current = null;
    }
    setIsPlacesOpen(true);
  };

  const schedulePlacesDropdownClose = () => {
    if (closePlacesTimerRef.current) {
      window.clearTimeout(closePlacesTimerRef.current);
    }
    closePlacesTimerRef.current = window.setTimeout(() => {
      setIsPlacesOpen(false);
      closePlacesTimerRef.current = null;
    }, 180);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Lincs Staycation Guide - Home">
            <span className="text-2xl" role="img" aria-label="Compass icon">🧭</span>
            <span className="font-heading text-lg sm:text-xl font-bold text-charcoal leading-tight">
              Lincs <span className="text-sage">Staycation</span> Guide
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {mainNavItems.slice(0, -1).map((item) => {
              if (item.href === '/places-to-stay') {
                return (
                  <div
                    key={item.href}
                    ref={placesDropdownRef}
                    className="relative"
                    onMouseEnter={openPlacesDropdown}
                    onMouseLeave={schedulePlacesDropdownClose}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className="px-3 py-2 text-sm font-medium text-charcoal-light hover:text-sage transition-colors rounded-l-lg hover:bg-cream/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                        onFocus={openPlacesDropdown}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        className="px-2 py-2 text-charcoal-light hover:text-sage transition-colors rounded-r-lg hover:bg-cream/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                        aria-haspopup="menu"
                        aria-expanded={isPlacesOpen}
                        aria-controls={placesDropdownId}
                        aria-label="Open places to stay by location"
                        onClick={(event) => {
                          event.stopPropagation();
                          setIsPlacesOpen((current) => !current);
                        }}
                        onKeyDown={(event) => {
                          if (event.key === 'ArrowDown') {
                            event.preventDefault();
                            setIsPlacesOpen(true);
                            focusFirstPlaceLink();
                          }
                        }}
                      >
                        <svg
                          className={`h-4 w-4 transition-transform ${isPlacesOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {isPlacesOpen && (
                      <div
                        id={placesDropdownId}
                        role="menu"
                        aria-label="Places to stay by location"
                        className="pointer-events-auto absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border border-cream-dark/70 bg-white p-3 shadow-xl shadow-charcoal/10 ring-1 ring-black/5"
                        onMouseEnter={openPlacesDropdown}
                        onMouseLeave={schedulePlacesDropdownClose}
                      >
                        <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-wide text-charcoal-muted">
                          Places to stay by location
                        </p>
                        <div className="space-y-1">
                          {placesToStayLocations.map((location, index) => (
                            <Link
                              key={location.href}
                              ref={index === 0 ? firstPlaceLinkRef : undefined}
                              href={location.href}
                              role="menuitem"
                              className="block rounded-xl px-3 py-2 text-sm font-medium text-charcoal hover:bg-cream/70 hover:text-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                              onClick={() => setIsPlacesOpen(false)}
                            >
                              {location.label}
                            </Link>
                          ))}
                        </div>
                        <div className="mt-3 border-t border-cream-dark/70 pt-3">
                          <Link
                            href="/places-to-stay"
                            role="menuitem"
                            className="block rounded-xl px-3 py-2 text-sm font-semibold text-sage hover:bg-sage/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                            onClick={() => setIsPlacesOpen(false)}
                          >
                            View all places to stay
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-charcoal-light hover:text-sage transition-colors rounded-lg hover:bg-cream/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/add-your-business"
              className="ml-2 px-4 py-2 text-sm font-medium text-white bg-sage hover:bg-sage-dark rounded-xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            >
              Add Your Business
            </Link>
            <Link
              href="/advertise"
              className="ml-1 px-4 py-2 text-sm font-medium text-sage border border-sage hover:bg-sage hover:text-white rounded-xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            >
              Advertise
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/add-your-business"
              className="px-3 py-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-xs font-medium text-white bg-sage rounded-lg"
            >
              Add Business
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-cream transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden fixed inset-0 top-16 bg-white z-50 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-6 space-y-1">
              {mainNavItems.map((item) => {
                if (item.href === '/places-to-stay') {
                  return (
                    <div key={item.href}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium text-charcoal hover:bg-cream transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                        aria-haspopup="menu"
                        aria-expanded={isMobilePlacesOpen}
                        aria-controls={mobilePlacesDropdownId}
                        onClick={() => setIsMobilePlacesOpen((current) => !current)}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`h-4 w-4 transition-transform ${isMobilePlacesOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isMobilePlacesOpen && (
                        <div
                          id={mobilePlacesDropdownId}
                          role="menu"
                          aria-label="Places to stay by location"
                          className="ml-4 mt-1 space-y-1 border-l border-cream-dark pl-3"
                        >
                          <Link
                            href="/places-to-stay"
                            role="menuitem"
                            onClick={closeMobileMenu}
                            className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-sage hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                          >
                            View all places to stay
                          </Link>
                          {placesToStayLocations.map((location) => (
                            <Link
                              key={location.href}
                              href={location.href}
                              role="menuitem"
                              onClick={closeMobileMenu}
                              className="block rounded-xl px-4 py-2.5 text-sm font-medium text-charcoal-muted hover:bg-cream hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                            >
                              {location.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-base font-medium text-charcoal hover:bg-cream rounded-xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/advertise"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-base font-medium text-coast hover:bg-cream rounded-xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
              >
                Advertise
              </Link>
              <div className="pt-4 border-t border-cream-dark mt-4">
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-sm text-charcoal-muted hover:text-charcoal rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-sm text-charcoal-muted hover:text-charcoal rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-sm text-charcoal-muted hover:text-charcoal rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
