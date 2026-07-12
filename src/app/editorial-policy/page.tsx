import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Editorial Policy | Independent Content Standards',
  description: 'How Lincs Staycation Guide creates, reviews and maintains content as an independent local travel directory. Our commitment to accuracy, honesty and editorial independence.',
  alternates: { canonical: '/editorial-policy' },
};

export default function EditorialPolicyPage() {
  return (
    <LegalPageLayout title="Editorial Policy" lastUpdated="3 May 2026">
      <h2>Our editorial standards</h2>
      <p>
        Content on Lincs Staycation Guide is created by our editorial team with a focus on practical, useful and accurate information. As an <strong>independent local travel directory</strong>, we are not influenced by any tourism board, council or external organisation. Our guides, listings and pages are written to help visitors and residents make informed decisions about places to stay, eat and explore across Lincolnshire.
      </p>

      <h2>Local usefulness</h2>
      <p>
        We prioritise content that is genuinely useful for people planning visits to or exploring Lincolnshire. Our categories, guides and listings are organised to reflect how people actually search for local travel information.
      </p>

      <h2>Accuracy checks</h2>
      <p>
        We make reasonable efforts to verify the accuracy of information before publication. However, details such as opening times, pricing and availability may change. We encourage users to confirm details directly with businesses before visiting.
      </p>

      <h2>Listing reviews</h2>
      <p>
        All business listing submissions are reviewed before publication. We assess listings for accuracy, relevance and editorial quality. We reserve the right to edit descriptions for clarity, correct factual errors, or decline listings that do not meet our standards.
      </p>

      <h2>Sponsored content labelling</h2>
      <p>
        Where content has been created in partnership with a business or as a result of a paid arrangement, it will be clearly labelled as sponsored. Sponsored content is always identified separately from our independent editorial content.
      </p>

      <h2>Corrections policy</h2>
      <p>
        If you notice an error or outdated information on our website, please contact us. We will review and correct verified errors as promptly as possible. You can report issues through our <a href="/contact">contact form</a>.
      </p>

      <h2>No fake reviews</h2>
      <p>
        We do not publish fake reviews, fabricated testimonials or misleading endorsements. Where user reviews or ratings are introduced in the future, they will be subject to moderation and verification processes.
      </p>

      <h2>Independence and editorial integrity</h2>
      <p>
        Lincs Staycation Guide is a <strong>fully independent directory</strong>. We are not affiliated with any local council, official tourism board, destination marketing organisation or government body. Our editorial decisions are made independently and are not influenced by paid listings, advertising relationships or commercial partnerships.
      </p>
      <p>
        We believe that editorial independence is essential for building trust with our readers. Visitors to Lincolnshire deserve honest, practical information â€” not promotional copy written to satisfy advertisers. This commitment to independence is central to everything we publish.
      </p>

      <h2>Transparency</h2>
      <p>
        We are committed to being transparent about how our content is created and funded. Where we earn revenue through advertising, affiliate links or paid listings, this is clearly disclosed. Our <a href="/affiliate-disclosure">Affiliate Disclosure</a>, <a href="/advertise">Advertising page</a> and <a href="/business-listing-terms">Business Listing Terms</a> provide full details.
      </p>

      <h2>Contact to report errors</h2>
      <p>
        If you believe any information on our website is inaccurate, outdated or misleading, please contact us at: <a href="mailto:hello@lincs-staycation-guide.co.uk">hello@lincs-staycation-guide.co.uk</a>
      </p>
    </LegalPageLayout>
  );
}
