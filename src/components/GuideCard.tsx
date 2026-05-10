import Link from 'next/link';
import type { Guide } from '@/data/guides';

interface GuideCardProps {
  guide: Guide;
}

export default function GuideCard({ guide }: GuideCardProps) {
  const categoryColors: Record<string, string> = {
    'Family': 'badge-sage',
    'Coast': 'badge-coast',
    'Dog-Friendly': 'badge-sand',
    'Stays': 'badge-coast',
    'Explore': 'badge-sage',
  };

  return (
    <div className="card-hover bg-white rounded-2xl border border-cream-dark/60 overflow-hidden h-full flex flex-col">
      {/* Visual header */}
      <div className="h-3 bg-gradient-to-r from-sage via-coast to-sand" />

      <div className="p-5 flex flex-col flex-1">
        <span className={`badge ${categoryColors[guide.category] || 'badge-sage'} self-start mb-3 text-[11px]`}>
          {guide.category}
        </span>

        <h3 className="font-heading text-lg font-semibold text-charcoal mb-2 leading-snug">
          {guide.title}
        </h3>

        <p className="text-sm text-charcoal-muted leading-relaxed flex-1 mb-4">
          {guide.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-charcoal-muted">{guide.readingTime}</span>
          <Link
            href={`/blog/${guide.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-sage hover:text-sage-dark transition-colors"
          >
            Read guide
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
