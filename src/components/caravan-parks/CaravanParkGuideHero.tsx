import Breadcrumbs from '@/components/Breadcrumbs';
import type { CaravanParkGuide } from '@/data/caravanParkGuides';

interface Props {
  guide: CaravanParkGuide;
}

export default function CaravanParkGuideHero({ guide }: Props) {
  return (
    <section className="hero-gradient py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Caravan Parks', href: '/caravan-parks' },
            { label: `Best Caravan Parks near ${guide.location}` },
          ]}
        />
        <div className="max-w-3xl">
          <span className="inline-block badge badge-coast mb-3">{guide.regionType}</span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
            {guide.h1}
          </h1>
          <p className="text-lg text-charcoal-muted leading-relaxed mb-3">
            {guide.contentAngle}
          </p>
          <p className="text-base text-charcoal-muted leading-relaxed">
            {guide.intro}
          </p>
        </div>
      </div>
    </section>
  );
}
