import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Lincs Staycation Guide. Learn how we collect, use and protect your information.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="3 May 2026">
      <h2>Who we are</h2>
      <p>
        Lincs Staycation Guide is an independent local travel directory for Lincolnshire, UK. This privacy policy explains how we collect, use and protect information when you use our website.
      </p>

      <h2>What information we collect</h2>
      <p>We may collect the following types of information:</p>

      <h3>Contact forms</h3>
      <p>
        When you submit a contact form, we collect the information you provide, including your name, email address, and message content. This is used solely to respond to your enquiry.
      </p>

      <h3>Business submissions</h3>
      <p>
        When a business submits a listing, we collect business details including business name, contact information, category, location and description. This information is used to review and publish directory listings.
      </p>

      <h3>Analytics</h3>
      <p>
        We may use analytics services (such as Google Analytics) to understand how visitors use our website. This data is aggregated and anonymised where possible. Analytics data may include pages visited, time spent on the site, browser type and approximate location.
      </p>

      <h3>Cookies</h3>
      <p>
        We use cookies to improve your browsing experience. See our <a href="/cookie-policy">Cookie Policy</a> for full details.
      </p>

      <h3>Affiliate links</h3>
      <p>
        Some pages may contain affiliate links. When you click on these links, the affiliate partner may use cookies to track the referral. See our <a href="/affiliate-disclosure">Affiliate Disclosure</a> for more information.
      </p>

      <h3>Advertising</h3>
      <p>
        In future, we may display advertising through services such as Google AdSense. These services may use cookies to serve relevant advertisements based on your browsing history.
      </p>

      <h2>How data is used</h2>
      <ul>
        <li>To respond to contact form enquiries</li>
        <li>To review and manage business listing submissions</li>
        <li>To improve the website and user experience</li>
        <li>To understand website traffic and usage patterns</li>
        <li>To support advertising and affiliate features where applicable</li>
      </ul>

      <h2>How data is stored</h2>
      <p>
        Form submissions are processed securely. We take reasonable steps to protect submitted information from unauthorised access, loss or misuse. Data may be stored on secure servers provided by our hosting and email service providers.
      </p>

      <h2>Data sharing</h2>
      <p>
        We do not sell personal information. We may share data with trusted service providers who assist with website operations, analytics and email services, subject to appropriate data processing agreements.
      </p>

      <h2>Your rights</h2>
      <p>
        Under applicable data protection laws, you may have rights including the right to access, correct or delete your personal data. To exercise these rights, please contact us using the details below.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about this privacy policy or how we handle your data, please contact us at: <a href="mailto:hello@lincsstaycationguide.co.uk">hello@lincsstaycationguide.co.uk</a>
      </p>
    </LegalPageLayout>
  );
}
