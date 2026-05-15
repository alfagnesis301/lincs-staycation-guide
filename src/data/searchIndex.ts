import { mainCategories } from '@/data/categories';
import { guides } from '@/data/guides';
import { categoryChips, placesToStayLocations } from '@/data/navigation';
import { towns } from '@/data/towns';

export interface SearchTarget {
  title: string;
  href: string;
  keywords: string[];
}

const normalize = (value: string) => value.trim().toLowerCase();

const uniqueByHref = (targets: SearchTarget[]) => {
  const seen = new Set<string>();
  return targets.filter((target) => {
    if (seen.has(target.href)) return false;
    seen.add(target.href);
    return true;
  });
};

export const searchTargets: SearchTarget[] = uniqueByHref([
  ...mainCategories.map((category) => ({
    title: category.name,
    href: category.href,
    keywords: [category.description, category.slug, ...(category.subcategories ?? [])],
  })),
  ...categoryChips.map((chip) => ({
    title: chip.label,
    href: chip.href,
    keywords: [chip.label],
  })),
  ...placesToStayLocations.map((location) => ({
    title: `${location.label} places to stay`,
    href: location.href,
    keywords: [location.label, 'accommodation', 'hotel', 'b&b', 'stay'],
  })),
  ...towns.map((town) => ({
    title: `${town.name} town guide`,
    href: `/town-guides/${town.slug}`,
    keywords: [town.name, town.description, town.bestFor, town.regionType, ...town.categories],
  })),
  ...guides.map((guide) => ({
    title: guide.title,
    href: `/blog/${guide.slug}`,
    keywords: [guide.category, guide.description],
  })),
]);

export function findSearchTarget(query: string): SearchTarget | undefined {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return undefined;

  const terms = normalizedQuery.split(/\s+/).filter(Boolean);

  return searchTargets
    .map((target) => {
      const title = normalize(target.title);
      const keywords = target.keywords.map(normalize);
      const haystack = [title, ...keywords].join(' ');

      let score = 0;
      if (title === normalizedQuery) score += 100;
      if (title.startsWith(normalizedQuery)) score += 70;
      if (title.includes(normalizedQuery)) score += 50;
      if (keywords.some((keyword) => keyword.includes(normalizedQuery))) score += 35;
      score += terms.filter((term) => haystack.includes(term)).length * 10;

      return { target, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)[0]?.target;
}
