'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categoryChips } from '@/data/navigation';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  showChips?: boolean;
}

export default function SearchBar({
  onSearch,
  placeholder = 'Search places, towns, activities or stays...',
  showChips = true,
}: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative" role="search" aria-label="Search the directory">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (onSearch) onSearch(e.target.value);
            }}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-4 bg-white border border-cream-dark rounded-2xl text-base text-charcoal placeholder:text-charcoal-muted focus:outline-none focus:border-coast focus:ring-2 focus:ring-coast/20 shadow-sm"
            aria-label="Search the directory"
          />
        </div>
      </form>

      {showChips && (
        <div className="flex flex-wrap gap-2 mt-4" role="navigation" aria-label="Quick category filters">
          {categoryChips.map((chip) => (
            <Link
              key={chip.href}
              href={chip.href}
              className="inline-flex items-center px-3.5 py-1.5 bg-white/80 hover:bg-white text-xs sm:text-sm font-medium text-charcoal-light hover:text-sage border border-cream-dark hover:border-sage/30 rounded-full transition-all"
            >
              {chip.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
