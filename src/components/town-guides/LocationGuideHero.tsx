import Image from 'next/image';
import type { PublicImage } from '@/data/lincolnGuide';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageCreditLink from './ImageCreditLink';

type QuickFact = {
  label: string;
  value: string;
};

type LocationGuideHeroProps = {
  title: string;
  subtitle: string;
  intro: string;
  regionBadge: string;
  bestFor: string;
  quickFacts: QuickFact[];
  heroImage?: PublicImage;
};

export default function LocationGuideHero({
  title,
  subtitle,
  intro,
  regionBadge,
  bestFor,
  quickFacts,
  heroImage,
}: LocationGuideHeroProps) {
  return (
    <section className="hero-gradient py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Town Guides', href: '/town-guides' },
            { label: 'Lincoln' },
          ]}
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
          <div>
            <span className="badge badge-coast mb-4">{regionBadge}</span>
            <h1 className="font-heading text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-charcoal-muted">
              {subtitle}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-charcoal-muted">
              {intro}
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-charcoal">
              <span className="font-semibold">Best for:</span> {bestFor}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-xl shadow-charcoal/10">
            <div className="relative aspect-[4/3] bg-cream">
              {heroImage ? (
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              ) : null}
            </div>
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <p className="text-xs text-charcoal-muted">Lincoln area-context image</p>
              <ImageCreditLink imageCreditId={heroImage?.imageCreditId} />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-cream-dark/60 bg-white/75 p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-charcoal-muted">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm font-medium leading-snug text-charcoal">{fact.value}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
