import Link from 'next/link';
import { notFound } from 'next/navigation';
import { placesToStayLocations } from '@/data/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';

interface PlacesToStayLocationPageProps {
  params: Promise<{ slug: string }>;
}

const locations = placesToStayLocations.map((location) => ({
  name: location.label,
  slug: location.href.split('/').filter(Boolean).at(-1) || '',
  href: location.href,
}));

function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export async function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: PlacesToStayLocationPageProps) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};

  return {
    title: `Places to Stay in ${location.name} | Lincs Staycation Guide`,
    description: `Compare places to stay in ${location.name}, Lincolnshire, including hotels, guest accommodation, inns and useful booking-ready accommodation options.`,
    alternates: { canonical: location.href },
    openGraph: {
      title: `Places to Stay in ${location.name} | Lincs Staycation Guide`,
      description: `Compare places to stay in ${location.name}, Lincolnshire, including hotels, guest accommodation, inns and useful booking-ready accommodation options.`,
    },
  };
}

export default async function PlacesToStayLocationPage({ params }: PlacesToStayLocationPageProps) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  return (
    <>
      <section className="hero-gradient py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Places to Stay', href: '/places-to-stay' },
            { label: location.name },
          ]} />
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage">
              Lincolnshire accommodation guide
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              Places to Stay in {location.name}
            </h1>
            <p className="mt-5 text-lg text-charcoal-muted leading-relaxed">
              Compare hotels, guest accommodation, inns, cottages and booking-ready stays in {location.name}.
              Detailed listings are being curated and will be added soon.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
            <div className="rounded-2xl border border-cream-dark/60 bg-cream/30 p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-charcoal">
                Accommodation listings are being reviewed
              </h2>
              <p className="mt-4 text-charcoal-muted leading-relaxed">
                This page is reserved for verified accommodation options in {location.name}. The guide will focus on
                useful, locally relevant places to stay rather than unverified listings, invented reviews or placeholder
                booking links.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/town-guides/${slug}`}
                  className="inline-flex items-center justify-center rounded-xl bg-sage px-5 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                >
                  Explore {location.name} guide
                </Link>
                <Link
                  href="/add-your-business"
                  className="inline-flex items-center justify-center rounded-xl border border-sage px-5 py-3 text-sm font-semibold text-sage hover:bg-sage hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                >
                  Add your business
                </Link>
              </div>
            </div>

            <aside className="rounded-2xl border border-cream-dark/60 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-lg font-semibold text-charcoal">
                Browse nearby stay guides
              </h2>
              <div className="mt-4 space-y-2">
                {placesToStayLocations
                  .filter((item) => item.href !== location.href)
                  .slice(0, 6)
                  .map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-charcoal-muted hover:bg-cream hover:text-charcoal transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
              </div>
              <Link
                href="/places-to-stay"
                className="mt-5 block rounded-xl border-t border-cream-dark pt-4 text-sm font-semibold text-sage hover:text-sage-dark"
              >
                View all places to stay
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
