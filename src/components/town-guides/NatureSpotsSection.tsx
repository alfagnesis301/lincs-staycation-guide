import Link from 'next/link';
import type { NatureSpot } from '@/data/nature-spots';

export function NatureSpotsSection({
  townName,
  spots,
}: {
  townName: string;
  spots: NatureSpot[];
}) {
  if (!spots?.length) return null;

  return (
    <section id="parks-nature" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage">
            Parks &amp; nature
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            Parks, nature spots and outdoor spaces in {townName}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-charcoal-muted">
            Useful green spaces, nature reserves, riverside walks and outdoor places to consider when
            planning time outside in or near {townName}. Always check access, facilities and seasonal
            conditions before travelling.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {spots.map((spot) => (
            <article
              key={spot.id}
              className="rounded-2xl border border-cream-dark/60 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold text-sage-dark">
                  {spot.category}
                </span>
                {spot.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-cream/70 px-3 py-1 text-xs font-medium text-charcoal-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mt-4 font-heading text-xl font-semibold text-charcoal">
                {spot.name}
              </h3>

              <p className="mt-2 text-sm font-medium text-charcoal">
                Best for: {spot.bestFor}
              </p>

              <p className="mt-3 text-sm leading-6 text-charcoal-muted">
                {spot.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={spot.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-google-maps-link
                  className="rounded-full bg-sage px-4 py-2 text-sm font-semibold text-white transition hover:bg-sage-dark"
                >
                  View on Google Maps
                </Link>

                {spot.officialWebsiteUrl ? (
                  <Link
                    href={spot.officialWebsiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-cream-dark px-4 py-2 text-sm font-semibold text-charcoal transition hover:bg-cream/50"
                  >
                    Official website
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
