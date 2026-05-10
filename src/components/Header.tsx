'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { mainNavItems } from '@/data/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
            {mainNavItems.slice(0, -1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-charcoal-light hover:text-sage transition-colors rounded-lg hover:bg-cream/60"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/add-your-business"
              className="ml-2 px-4 py-2 text-sm font-medium text-white bg-sage hover:bg-sage-dark rounded-xl transition-colors"
            >
              Add Your Business
            </Link>
            <Link
              href="/advertise"
              className="ml-1 px-4 py-2 text-sm font-medium text-sage border border-sage hover:bg-sage hover:text-white rounded-xl transition-colors"
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-cream transition-colors"
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
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-charcoal hover:bg-cream rounded-xl transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/advertise"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-coast hover:bg-cream rounded-xl transition-colors"
              >
                Advertise
              </Link>
              <div className="pt-4 border-t border-cream-dark mt-4">
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-sm text-charcoal-muted hover:text-charcoal rounded-xl"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-sm text-charcoal-muted hover:text-charcoal rounded-xl"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-sm text-charcoal-muted hover:text-charcoal rounded-xl"
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
