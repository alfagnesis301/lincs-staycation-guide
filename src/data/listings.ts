export interface Listing {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  town: string;
  area: string;
  description: string;
  tags: string[];
  features: string[];
  priceRange?: string;
  isSample: boolean;
}

// Real business listings only. Sample/placeholder entries were removed so the
// site never publishes fictional businesses. New entries should be added one
// at a time with verified details, sources and image licensing.
export const listings: Listing[] = [];

export function getListingsByCategory(categorySlug: string): Listing[] {
  return listings.filter((listing) => listing.categorySlug === categorySlug);
}

export function getListingsByTown(town: string): Listing[] {
  return listings.filter((listing) => listing.town.toLowerCase() === town.toLowerCase());
}

export function getListingsByTag(tag: string): Listing[] {
  return listings.filter((listing) =>
    listing.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

export function searchListings(query: string): Listing[] {
  const q = query.toLowerCase();
  return listings.filter(
    (listing) =>
      listing.name.toLowerCase().includes(q) ||
      listing.category.toLowerCase().includes(q) ||
      listing.town.toLowerCase().includes(q) ||
      listing.description.toLowerCase().includes(q) ||
      listing.tags.some((t) => t.toLowerCase().includes(q))
  );
}
