import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SearchBar from '@/components/SearchBar';
import { searchTargets } from '@/data/searchIndex';

export const metadata: Metadata = {
  title: 'Search Lincolnshire Guides',
  description: 'Search Lincs Staycation Guide by town, category, attraction or staycation topic.',
  alternates: { canonical: '/search' },
  robots: { index: false, follow: true },
};

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function findMatches(query: string) {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return [];
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);

  return searchTargets
    .map((target) => {
      const haystack = [target.title, ...target.keywords].map(normalize).join(' ');
      const score =
        (normalize(target.title).includes(normalizedQuery) ? 40 : 0) +
        terms.filter((term) => haystack.includes(term)).length * 10;
      return { target, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map((result) => result.target);
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = '' } = await searchParams;
  const matches = findMatches(q);

  return (
    <>
      <section className="hero-gradient py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Search' }]} />
          <h1 className="font-heading mb-4 text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            Search Lincolnshire guides
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-charcoal-muted">
            Search by town, coast, caravan parks, family days out, dog-friendly ideas, places to stay or food and drink.
          </p>
          <div className="mt-8 max-w-2xl">
            <SearchBar showChips />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {q ? (
            <>
              <h2 className="font-heading text-2xl font-semibold text-charcoal">
                Results for &ldquo;{q}&rdquo;
              </h2>
              {matches.length > 0 ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {matches.map((target) => (
                    <Link
                      key={target.href}
                      href={target.href}
                      className="rounded-2xl border border-cream-dark/60 bg-cream/20 p-5 transition hover:border-sage/50 hover:bg-white"
                    >
                      <h3 className="font-heading text-lg font-semibold text-charcoal">{target.title}</h3>
                      <p className="mt-2 text-sm text-sage">{target.href}</p>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="mt-4 max-w-2xl text-charcoal-muted">
                  No matching guide found. Try a town name such as Lincoln, Skegness or Stamford, or browse by category below.
                </p>
              )}
            </>
          ) : (
            <div className="max-w-2xl rounded-2xl border border-cream-dark/60 bg-cream/30 p-6">
              <h2 className="font-heading text-2xl font-semibold text-charcoal">Start with a category</h2>
              <p className="mt-3 text-charcoal-muted">
                Use the search box above, or browse town guides, places to stay, things to do, food and drink, caravan parks and coast guides.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
