import Link from 'next/link';
import type { CaravanParkGuide } from '@/data/caravanParkGuides';

interface Props {
  currentGuide: CaravanParkGuide;
  related: CaravanParkGuide[];
}

export default function RelatedCaravanGuides({ currentGuide, related }: Props) {
  // Build dynamic related links pointing to other parts of the site
  const generalLinks: Array<{ label: string; href: string }> = [
    { label: `Places to stay in ${currentGuide.location}`, href: `/places-to-stay/${currentGuide.id}` },
    { label: `Things to do in ${currentGuide.location}`, href: `/things-to-do` },
    { label: 'Dog-friendly stays in Lincolnshire', href: '/dog-friendly' },
    { label: 'Family days out in Lincolnshire', href: '/family-days-out' },
  ];

  if (currentGuide.regionType === 'Coast') {
    generalLinks.unshift({ label: 'Lincolnshire Coast guide', href: '/lincolnshire-coast' });
  }

  return (
    <section className="py-12 sm:py-16 bg-cream/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">Related guides</h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Other caravan park guides */}
          <div>
            <h3 className="font-heading text-base font-semibold text-charcoal mb-3">More caravan park guides</h3>
            <ul className="space-y-2">
              {related.map((g) => (
                <li key={g.id}>
                  <Link
                    href={`/caravan-parks/${g.slug}`}
                    className="group flex items-center gap-2 text-sm text-charcoal hover:text-sage transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Best Caravan Parks near {g.location}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/caravan-parks"
                  className="group flex items-center gap-2 text-sm font-medium text-coast hover:text-coast-dark transition-colors mt-2"
                >
                  Browse all 16 caravan park guides
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Other useful pages */}
          <div>
            <h3 className="font-heading text-base font-semibold text-charcoal mb-3">Plan more of your {currentGuide.location} trip</h3>
            <ul className="space-y-2">
              {generalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-charcoal hover:text-sage transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 text-coast flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
