'use client';

import { useEffect } from 'react';
import {
  CONSENT_CHANGE_EVENT,
  GA4_ID,
  hasAnalyticsConsent,
  trackEvent,
} from '@/lib/analytics';
import { isBookingComUrl } from '@/lib/affiliate';

let gtagLoaded = false;

function loadGtag() {
  if (gtagLoaded || !GA4_ID || typeof window === 'undefined') return;
  gtagLoaded = true;

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  window.gtag = gtag;

  // Consent Mode v2: the script only ever loads after the visitor accepts,
  // but declare granted state explicitly so GA reporting is consistent.
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted',
  });
  gtag('js', new Date());
  gtag('config', GA4_ID, { anonymize_ip: true });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(script);
}

function handleDocumentClick(event: MouseEvent) {
  const target = event.target as Element | null;
  const anchor = target?.closest<HTMLAnchorElement>('a[href]');
  if (!anchor) return;

  const href = anchor.href;
  if (!href.startsWith('http')) return;

  let destinationHost: string;
  try {
    destinationHost = new URL(href).hostname;
  } catch {
    return;
  }
  if (destinationHost === window.location.hostname) return;

  const propertyName = anchor.dataset.propertyName;
  const propertyTown = anchor.dataset.propertyTown;
  const linkPosition = anchor.dataset.linkPosition;

  if (isBookingComUrl(href)) {
    trackEvent('affiliate_click', {
      affiliate_partner: 'booking.com',
      destination: destinationHost,
      property_name: propertyName,
      property_town: propertyTown,
      link_position: linkPosition,
    });
    trackEvent('booking_click', {
      destination: destinationHost,
      property_name: propertyName,
      property_town: propertyTown,
    });
    return;
  }

  if (anchor.dataset.ctaType === 'official-website') {
    trackEvent('official_website_click', {
      destination: destinationHost,
      property_name: propertyName,
      property_town: propertyTown,
    });
    return;
  }

  trackEvent('outbound_click', { destination: destinationHost });
}

export default function AnalyticsProvider() {
  useEffect(() => {
    if (!GA4_ID) return;

    if (hasAnalyticsConsent()) loadGtag();

    const onConsentChange = () => {
      if (hasAnalyticsConsent()) loadGtag();
    };
    window.addEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return null;
}
