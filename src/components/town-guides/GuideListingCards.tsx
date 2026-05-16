import Link from 'next/link';
import type { ReactNode } from 'react';
import type {
  CaravanParkListing,
  FoodDrinkListing,
  StayListing,
  ThingToDoListing,
} from '@/data/lincolnGuide';
import BookingCtaButton from './BookingCtaButton';
import ImageCreditLink from './ImageCreditLink';
import GoogleMapsLinkButton from '@/components/GoogleMapsLinkButton';
import type { ListingLocationInput } from '@/lib/googleMaps';

function toMapsInput(listing: {
  name: string;
  location?: string;
  googleMapsUrl?: string;
  mapLocation?: {
    address?: string;
    town?: string;
    postcode?: string;
    googleMapsUrl?: string;
    googleMapsQuery?: string;
  };
}): ListingLocationInput {
  return {
    name: listing.name,
    town: listing.mapLocation?.town,
    areaNote: listing.location,
    address: listing.mapLocation?.address,
    postcode: listing.mapLocation?.postcode,
    googleMapsUrl: listing.googleMapsUrl,
    location: listing.mapLocation,
  };
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span key={tag} className="badge bg-cream/60 text-[11px] text-charcoal-muted">
          {tag}
        </span>
      ))}
    </div>
  );
}

function CardShell({ children, id }: { children: ReactNode; id: string }) {
  return (
    <article id={id} className="scroll-mt-24 rounded-2xl border border-cream-dark/60 bg-white p-5 shadow-sm">
      {children}
    </article>
  );
}

export function StayListingCard({ listing }: { listing: StayListing }) {
  return (
    <CardShell id={listing.id}>
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <span className="badge badge-sage mb-2 text-[10px]">{listing.category}</span>
          <h3 className="font-heading text-xl font-semibold leading-snug text-charcoal">{listing.name}</h3>
          <p className="mt-1 text-xs text-charcoal-muted">{listing.location}</p>
        </div>
        {listing.image?.imageCreditId ? <ImageCreditLink imageCreditId={listing.image.imageCreditId} /> : null}
      </div>
      <p className="mb-2 text-sm font-medium text-charcoal">
        <span className="font-normal text-charcoal-muted">Best for:</span> {listing.bestFor}
      </p>
      <p className="mb-4 text-sm leading-relaxed text-charcoal-muted">{listing.description}</p>
      <TagList tags={listing.tags} />
      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-cream-dark/50 pt-4">
        <BookingCtaButton
          bookingUrl={listing.bookingUrl}
          bookingDeepLinkPending={listing.bookingDeepLinkPending}
        />
        <GoogleMapsLinkButton listing={toMapsInput(listing)} />
      </div>
    </CardShell>
  );
}

export function CaravanParkCard({ listing }: { listing: CaravanParkListing }) {
  return (
    <CardShell id={listing.id}>
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <span className="badge badge-coast mb-2 text-[10px]">{listing.category}</span>
          <h3 className="font-heading text-xl font-semibold leading-snug text-charcoal">{listing.name}</h3>
          <p className="mt-1 text-xs text-charcoal-muted">{listing.location}</p>
        </div>
        {listing.image?.imageCreditId ? <ImageCreditLink imageCreditId={listing.image.imageCreditId} /> : null}
      </div>
      <p className="mb-2 text-sm font-medium text-charcoal">
        <span className="font-normal text-charcoal-muted">Best for:</span> {listing.bestFor}
      </p>
      <p className="mb-4 text-sm leading-relaxed text-charcoal-muted">{listing.description}</p>
      <TagList tags={listing.tags} />
      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-cream-dark/50 pt-4">
        <BookingCtaButton
          bookingUrl={listing.bookingUrl}
          bookingDeepLinkPending={listing.bookingDeepLinkPending}
        />
        <GoogleMapsLinkButton listing={toMapsInput(listing)} />
      </div>
    </CardShell>
  );
}

export function ThingToDoCard({ listing }: { listing: ThingToDoListing }) {
  return (
    <CardShell id={listing.id}>
      <span className="badge badge-sand mb-2 text-[10px]">{listing.category}</span>
      <h3 className="font-heading text-xl font-semibold leading-snug text-charcoal">{listing.name}</h3>
      <p className="mt-1 text-xs text-charcoal-muted">{listing.location}</p>
      <p className="my-4 text-sm leading-relaxed text-charcoal-muted">{listing.description}</p>
      <TagList tags={listing.tags} />
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-cream-dark/50 pt-4">
        {listing.image?.imageCreditId ? <ImageCreditLink imageCreditId={listing.image.imageCreditId} /> : <span />}
        <div className="flex flex-wrap items-center gap-3">
          {listing.officialUrl ? (
            <a
              href={listing.officialUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-sm font-semibold text-sage hover:text-sage-dark"
            >
              Visit official website
            </a>
          ) : (
            <span className="text-sm font-medium text-charcoal-muted">Details being verified</span>
          )}
          <GoogleMapsLinkButton listing={toMapsInput(listing)} variant="inline" />
        </div>
      </div>
    </CardShell>
  );
}

export function FoodDrinkCard({ listing }: { listing: FoodDrinkListing }) {
  return (
    <CardShell id={listing.id}>
      <span className="badge badge-sage mb-2 text-[10px]">{listing.category}</span>
      <h3 className="font-heading text-xl font-semibold leading-snug text-charcoal">{listing.name}</h3>
      <p className="mt-1 text-xs text-charcoal-muted">{listing.location}</p>
      <p className="my-4 text-sm leading-relaxed text-charcoal-muted">{listing.description}</p>
      <TagList tags={listing.tags} />
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-cream-dark/50 pt-4">
        {listing.reviewVerificationNeeded ? (
          <span className="text-xs text-charcoal-muted">Review details need verification before publication.</span>
        ) : (
          <span />
        )}
        <div className="flex flex-wrap items-center gap-3">
          {listing.officialUrl ? (
            <a
              href={listing.officialUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-sm font-semibold text-sage hover:text-sage-dark"
            >
              Visit website
            </a>
          ) : null}
          <GoogleMapsLinkButton listing={toMapsInput(listing)} variant="inline" />
          {!listing.officialUrl && !getMapsHrefHint(listing) ? (
            <span className="text-sm font-medium text-charcoal-muted">Details being verified</span>
          ) : null}
        </div>
      </div>
    </CardShell>
  );
}

function getMapsHrefHint(listing: { name: string; location?: string; googleMapsUrl?: string }) {
  return Boolean(listing.name && (listing.location || listing.googleMapsUrl));
}

export function RelatedGuides({ links }: { links: { label: string; href: string }[] }) {
  return (
    <section className="bg-cream/20 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-charcoal">Related guides</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-cream-dark/60 bg-white p-4 text-sm font-semibold text-charcoal hover:border-sage/50 hover:text-sage"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
