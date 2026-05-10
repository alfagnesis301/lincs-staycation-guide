import Link from 'next/link';
import type { Category } from '@/data/categories';

interface CategoryCardProps {
  category: Category;
}

/** British-vibe background gradients per category */
const categoryVibes: Record<string, string> = {
  'places-to-stay': 'from-sage/10 via-cream to-sand-light/40',
  'things-to-do': 'from-coast/10 via-cream to-sage/8',
  'food-drink': 'from-sand-light/50 via-cream to-sage/8',
  'dog-friendly': 'from-sage/12 via-cream to-coast/8',
  'family-days-out': 'from-coast/8 via-cream to-sand-light/30',
  'lincolnshire-coast': 'from-coast/15 via-cream to-sand-light/20',
};

export default function CategoryCard({ category }: CategoryCardProps) {
  const vibe = categoryVibes[category.slug] ?? 'from-cream to-sand-light';

  return (
    <Link href={category.href} className="group block">
      <div className="card-hover bg-white rounded-2xl border border-cream-dark/60 overflow-hidden h-full flex flex-col">
        {/* Visual banner — 16:9 aspect ratio, countryside/seaside vibe */}
        <div className={`aspect-[16/9] bg-gradient-to-br ${vibe} flex items-center justify-center relative`}>
          <span className="text-4xl" role="img" aria-label={category.name}>
            {category.icon}
          </span>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-heading text-xl font-semibold text-charcoal mb-2 group-hover:text-sage transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-charcoal-muted leading-relaxed flex-1">
            {category.description}
          </p>
          <div className="mt-4 flex items-center gap-1 text-sm font-medium text-sage group-hover:text-sage-dark transition-colors">
            Explore
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
