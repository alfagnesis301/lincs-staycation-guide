import { getGoogleMapsLink, type ListingLocationInput } from '@/lib/googleMaps';

interface Props {
  listing: ListingLocationInput;
  variant?: 'button' | 'inline';
  className?: string;
}

export default function GoogleMapsLinkButton({ listing, variant = 'button', className }: Props) {
  const link = getGoogleMapsLink(listing);
  if (!link) return null;

  if (variant === 'inline') {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.ariaLabel}
        data-google-maps-link={link.isVerified ? 'verified' : 'search'}
        className={
          className ??
          'inline-flex items-center gap-1.5 text-sm font-medium text-charcoal-muted hover:text-sage transition-colors'
        }
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {link.label}
      </a>
    );
  }

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.ariaLabel}
      data-google-maps-link={link.isVerified ? 'verified' : 'search'}
      className={
        className ??
        'inline-flex items-center gap-1.5 px-3 py-2 min-h-[40px] text-sm font-medium text-charcoal border border-cream-dark/70 hover:border-sage hover:text-sage rounded-xl transition-colors'
      }
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      {link.label}
    </a>
  );
}
