import Link from 'next/link';
import Image from 'next/image';
import type { Town } from '@/data/towns';
import { getImageCredit } from '@/data/imageCredits';
import ImageCreditComponent from '@/components/ImageCredit';

interface TownCardProps {
  town: Town;
}

export default function TownCard({ town }: TownCardProps) {
  const credit = town.image ? getImageCredit(`town-${town.slug}`) : undefined;
  const regionIcons: Record<string, string> = {
    'City': '🏛️',
    'Coast': '🌊',
    'Market town': '🏘️',
    'Countryside': '🌿',
  };

  const regionGradients: Record<string, string> = {
    'City': 'from-sand-light/20 to-coast/10',
    'Coast': 'from-coast/15 to-sand-light/10',
    'Market town': 'from-sage/10 to-sand-light/10',
    'Countryside': 'from-sage/15 to-sand-light/10',
  };

  return (
    <Link href={`/town-guides/${town.slug}`} className="group block">
      <div className="card-hover bg-white rounded-2xl border border-cream-dark/60 overflow-hidden h-full flex flex-col">
        {/* Visual Header */}
        <div className={`relative aspect-[16/9] bg-gradient-to-br ${regionGradients[town.regionType]} flex items-center justify-center overflow-hidden`}>
          {town.image ? (
            <Image
              src={town.image}
              alt={`${town.name}, Lincolnshire`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <span className="text-4xl" role="img" aria-label={town.regionType}>
              {regionIcons[town.regionType]}
            </span>
          )}
          
          <div className="absolute top-3 right-3">
            <span className="badge bg-white/90 backdrop-blur-sm text-charcoal text-[10px] shadow-sm">
              {town.regionType}
            </span>
          </div>
          {credit && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 px-3 py-1.5">
              <ImageCreditComponent credit={credit} variant="inline" />
            </div>
          )}
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-heading text-xl font-semibold text-charcoal group-hover:text-sage transition-colors mb-1">
            {town.name}
          </h3>
          <p className="text-[11px] font-medium text-coast mb-3">
            Best for: {town.bestFor}
          </p>
          <p className="text-sm text-charcoal-muted leading-relaxed line-clamp-2 flex-1">
            {town.description}
          </p>
          <div className="mt-4 flex items-center gap-1 text-sm font-medium text-sage group-hover:text-sage-dark transition-colors">
            View guide
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
