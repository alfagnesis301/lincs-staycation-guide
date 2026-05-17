import { mainCategories } from '@/data/categories';
import { publishedGuides } from '@/data/guides';
import {
  caravanParksLocations,
  categoryChips,
  coastLocations,
  foodDrinkLocations,
  placesToStayLocations,
  thingsToDoLocations,
} from '@/data/navigation';
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
  ...thingsToDoLocations.map((location) => ({
    title: `${location.label} things to do`,
    href: location.href,
    keywords: [location.label, 'attractions', 'activities', 'heritage', 'museum', 'family days out'],
  })),
  ...foodDrinkLocations.map((location) => ({
    title: `${location.label} food and drink`,
    href: location.href,
    keywords: [location.label, 'restaurant', 'pub', 'cafe', 'bar', 'food', 'drink'],
  })),
  ...caravanParksLocations.map((location) => ({
    title: `${location.label} caravan parks`,
    href: location.href,
    keywords: [location.label, 'caravan parks', 'holiday parks', 'touring', 'lodges'],
  })),
  ...coastLocations.map((location) => ({
    title: `${location.label} coast guide`,
    href: location.href,
    keywords: [location.label, 'coast', 'beach', 'seaside', 'Lincolnshire coast'],
  })),
  ...towns.map((town) => ({
    title: `${town.name} town guide`,
    href: `/town-guides/${town.slug}`,
    keywords: [town.name, town.description, town.bestFor, town.regionType, ...town.categories],
  })),
  ...publishedGuides.map((guide) => ({
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
