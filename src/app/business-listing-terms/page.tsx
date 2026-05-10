import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Business Listing Terms',
  description: 'Terms and conditions for business listings on Lincs Staycation Guide.',
  alternates: { canonical: '/business-listing-terms' },
};

export default function BusinessListingTermsPage() {
  return (
    <LegalPageLayout title="Business Listing Terms" lastUpdated="3 May 2026">
      <h2>Submission and publication</h2>
      <p>
        Submission of a business listing does not guarantee publication. All submissions are reviewed by our editorial team before being published on the directory.
      </p>

      <h2>Accurate information</h2>
      <p>
        Businesses must submit accurate and up-to-date information. This includes the business name, category, location, contact details and description. Providing false or misleading information may result in removal of the listing.
      </p>

      <h2>Editorial discretion</h2>
      <p>
        Lincs Staycation Guide may edit listing descriptions for clarity, accuracy and editorial quality. We aim to maintain a consistent standard across all listings while preserving the intended meaning of submitted content.
      </p>

      <h2>Removal of listings</h2>
      <p>
        Listings may be removed if the information is found to be inaccurate, misleading, outdated or no longer relevant. We will make reasonable efforts to notify the listing contact before removal where possible.
      </p>

      <h2>Paid placements</h2>
      <p>
        Paid listings, featured placements and sponsored content will be clearly identified where appropriate. Paid placements do not affect the editorial independence of our guides and reviews.
      </p>

      <h2>Business responsibility</h2>
      <p>
        Businesses are responsible for their own services, pricing, availability and compliance with applicable laws and regulations. Lincs Staycation Guide acts as a directory and does not endorse, guarantee or take responsibility for the services provided by listed businesses.
      </p>

      <h2>Updates and removal requests</h2>
      <p>
        To request an update to or removal of your listing, please contact us at: <a href="mailto:hello@lincsstaycationguide.co.uk">hello@lincsstaycationguide.co.uk</a>
      </p>
    </LegalPageLayout>
  );
}
