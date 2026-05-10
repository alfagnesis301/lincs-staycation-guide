import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for Lincs Staycation Guide. Please read these terms before using our website.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Use" lastUpdated="3 May 2026">
      <h2>Use of the website</h2>
      <p>
        By accessing and using Lincs Staycation Guide, you agree to comply with these terms of use. If you do not agree with any part of these terms, please do not use the website.
      </p>

      <h2>Informational purpose</h2>
      <p>
        The content on this website is provided for general informational purposes only. It is intended to help visitors and residents discover places to stay, eat and explore across Lincolnshire. The information should not be relied upon as the sole basis for making decisions.
      </p>

      <h2>Accuracy of listings</h2>
      <p>
        We make reasonable efforts to ensure that directory listings and guide content are accurate and up to date. However, we cannot guarantee the accuracy, completeness or current availability of information provided by listed businesses. We recommend contacting businesses directly to confirm details such as opening times, pricing and availability.
      </p>

      <h2>Third-party links</h2>
      <p>
        Our website may contain links to external websites and services. We are not responsible for the content, accuracy or practices of third-party websites. Linking to a third party does not imply endorsement.
      </p>

      <h2>No guarantee of availability or prices</h2>
      <p>
        Listings may reference services, accommodation, dining or activities offered by independent businesses. We do not guarantee the availability, quality, pricing or accuracy of services offered by listed businesses.
      </p>

      <h2>User submissions</h2>
      <p>
        When you submit information through our forms (including contact forms and business submissions), you confirm that the information provided is accurate and that you have the right to submit it. We reserve the right to edit, reject or remove any submitted content.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All original content, design and branding on Lincs Staycation Guide is owned by or licensed to us. You may not reproduce, distribute or use our content without permission, except for personal, non-commercial use.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Lincs Staycation Guide shall not be liable for any direct, indirect, incidental or consequential damages arising from the use of this website or reliance on its content. This includes but is not limited to damages arising from inaccurate listings, third-party services or broken links.
      </p>

      <h2>Changes to terms</h2>
      <p>
        We may update these terms from time to time. Continued use of the website after changes constitutes acceptance of the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about these terms, please contact us at: <a href="mailto:hello@lincsstaycationguide.co.uk">hello@lincsstaycationguide.co.uk</a>
      </p>
    </LegalPageLayout>
  );
}
