import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy for Lincs Staycation Guide. Learn about the cookies we use and how to manage your preferences.',
  alternates: { canonical: '/cookie-policy' },
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated="3 May 2026">
      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you interact with the content.
      </p>

      <h2>Essential cookies</h2>
      <p>
        These cookies are necessary for the website to function properly. They include cookies that remember your cookie consent preference. These cannot be disabled without affecting the site&apos;s functionality.
      </p>

      <h2>Analytics cookies</h2>
      <p>
        We may use analytics cookies (such as Google Analytics) to understand how visitors use our website. These cookies collect anonymised data about page views, time on site, browser type and approximate location. This helps us improve the site and create better content.
      </p>

      <h2>Advertising cookies (future use)</h2>
      <p>
        In future, we may use advertising cookies through services such as Google AdSense to display relevant advertisements. These cookies may track browsing habits across websites to serve more relevant ads. This feature is not currently active but may be introduced in the future.
      </p>

      <h2>Affiliate tracking cookies</h2>
      <p>
        Some links on our site may be affiliate links. When you click these links, the affiliate partner may set cookies on your device to track the referral. These cookies are managed by third-party affiliate networks and are subject to their own privacy policies.
      </p>

      <h2>Managing cookies</h2>
      <p>
        You can manage your cookie preferences through our cookie consent banner, which appears when you first visit the site. You can also control cookies through your browser settings:
      </p>
      <ul>
        <li>Most browsers allow you to view, manage and delete cookies in settings</li>
        <li>You can configure your browser to reject all cookies or notify you when a cookie is set</li>
        <li>Disabling certain cookies may affect the functionality of this website</li>
      </ul>

      <h2>Contact</h2>
      <p>
        If you have questions about our cookie policy, please contact us at: <a href="mailto:hello@lincsstaycationguide.co.uk">hello@lincsstaycationguide.co.uk</a>
      </p>
    </LegalPageLayout>
  );
}
