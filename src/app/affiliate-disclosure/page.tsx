import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'Affiliate disclosure for Lincs Staycation Guide. Learn about our use of affiliate links and how they work.',
  alternates: { canonical: '/affiliate-disclosure' },
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalPageLayout title="Affiliate Disclosure" lastUpdated="3 May 2026">
      <h2>Affiliate links</h2>
      <p>
        Some pages on Lincs Staycation Guide may contain affiliate links. This means that if you click on a link and make a purchase or booking through that link, we may earn a small commission from the affiliate partner.
      </p>

      <h2>How affiliate links work</h2>
      <p>
        When you click on an affiliate link, you are directed to the third-party website. The affiliate partner may use cookies to track the referral. If you complete a purchase or booking, we may receive a commission.
      </p>

      <h2>No extra cost to you</h2>
      <p>
        Using our affiliate links does not affect the price you pay. Where applicable, you pay the same price whether you use our link or navigate to the site directly.
      </p>

      <h2>Editorial independence</h2>
      <p>
        Affiliate relationships do not influence our editorial content. We include affiliate links only where we believe the linked product, service or booking platform may be useful to our readers. Our guides and recommendations are based on usefulness and relevance, not affiliate commissions.
      </p>

      <h2>Sponsored content</h2>
      <p>
        Where content is sponsored or created in partnership with a business, it will be clearly labelled. Sponsored content is always identified separately from our independent editorial content.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about our affiliate practices, please contact us at: <a href="mailto:hello@lincs-staycation-guide.co.uk">hello@lincs-staycation-guide.co.uk</a>
      </p>
    </LegalPageLayout>
  );
}
