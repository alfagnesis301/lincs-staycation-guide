'use client';

import { useState, useEffect } from 'react';
import { CONSENT_CHANGE_EVENT, CONSENT_STORAGE_KEY } from '@/lib/analytics';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!consent || consent === 'managed') {
      // 'managed' was written by an old banner version that stored no real
      // preference — re-ask instead of guessing.
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const storeConsent = (value: 'accepted' | 'rejected') => {
    localStorage.setItem(CONSENT_STORAGE_KEY, value);
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
    setIsVisible(false);
  };

  const handleAccept = () => storeConsent('accepted');
  const handleReject = () => storeConsent('rejected');

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 cookie-banner-enter"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="bg-charcoal/95 backdrop-blur-sm border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-gray-300 flex-1 leading-relaxed">
              We use optional analytics cookies to understand how the site is used. No analytics run unless you accept.{' '}
              <a href="/cookie-policy" className="text-coast-light underline hover:text-white">
                Learn more
              </a>
            </p>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={handleReject}
                className="px-4 py-2 text-xs font-semibold text-gray-200 hover:text-white border border-gray-500 hover:border-gray-300 rounded-lg transition-colors"
              >
                Reject non-essential
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 text-xs font-semibold text-white bg-sage hover:bg-sage-dark rounded-lg transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
