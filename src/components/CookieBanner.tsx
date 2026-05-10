'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  const handleManage = () => {
    localStorage.setItem('cookie-consent', 'managed');
    setIsVisible(false);
  };

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
              We use cookies to improve your experience, understand site usage and support future advertising and affiliate features. You can accept or manage your preferences.{' '}
              <a href="/cookie-policy" className="text-coast-light underline hover:text-white">
                Learn more
              </a>
            </p>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={handleReject}
                className="px-4 py-2 text-xs font-medium text-gray-400 hover:text-white border border-gray-600 hover:border-gray-400 rounded-lg transition-colors"
              >
                Reject non-essential
              </button>
              <button
                onClick={handleManage}
                className="px-4 py-2 text-xs font-medium text-gray-300 hover:text-white border border-gray-600 hover:border-gray-400 rounded-lg transition-colors"
              >
                Manage preferences
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
