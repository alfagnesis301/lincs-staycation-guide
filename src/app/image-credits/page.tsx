import type { Metadata } from 'next';
import Link from 'next/link';
import { imageCredits } from '@/data/imageCredits';
import {
  bookableCaravanParks,
  getParkImage,
} from '@/data/bookableCaravanParks';
import ImageCreditComponent from '@/components/ImageCredit';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Image Credits | Lincs Staycation Guide',
  description: 'Full attribution for all images used on Lincs Staycation Guide, including source, author, licence and any modifications made.',
  alternates: { canonical: '/image-credits' },
};

export default function ImageCreditsPage() {
  return (
    <LegalPageLayout title="Image Credits" lastUpdated="4 May 2026">
      <h2>About the images on this site</h2>
      <p>
        All town and location photographs used on Lincs Staycation Guide are sourced from <strong>Wikimedia Commons</strong> under Creative Commons licences. Every image is downloaded and stored locally — we do not hotlink from third-party websites. Full attribution for every photograph is recorded on this page and in <code>/public/images/ATTRIBUTIONS.md</code>.
      </p>
      <p>
        We are committed to legal, transparent and properly attributed image use. If you believe an image has been used incorrectly or you are the author and wish to discuss its use, please <Link href="/contact" className="text-coast underline hover:text-coast-dark">contact us</Link>.
      </p>

      <h2>Our image policy</h2>
      <ul>
        <li>We only use photographs with a clear reusable Creative Commons or public domain licence.</li>
        <li>We do not source images from Google Images, TripAdvisor, Booking.com, Visit Lincolnshire, Facebook, Instagram, hotel or restaurant websites, or private travel blogs.</li>
        <li>All images are downloaded and stored locally in <code>/public/images/lincolnshire/</code> — no hotlinking.</li>
        <li>Images are resized and optimised for web use. Original source URLs are preserved in attribution records.</li>
        <li>This page is updated whenever new images are added to the site.</li>
      </ul>

      {(() => {
        const townCount = imageCredits.filter((c) => c.id.startsWith('town-')).length;
        const coastalCount = imageCredits.filter((c) => c.id.startsWith('coastal-')).length;
        const caravanCount = bookableCaravanParks.length;
        const total = townCount + coastalCount + caravanCount;
        return (
          <>
            <h2>Image library overview ({total} total)</h2>
            <p className="text-sm text-charcoal-muted">
              Town and area images: <strong>{townCount}</strong> · Coastal area images: <strong>{coastalCount}</strong> · Caravan and holiday park images: <strong>{caravanCount}</strong>.
            </p>
          </>
        );
      })()}

      {/* Full credit cards rendered outside the prose layout */}
      <div className="not-prose mt-6 space-y-4">
        {/* Town photographs */}
        <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 mb-3">
          Town and area images ({imageCredits.filter((c) => c.id.startsWith('town-')).length})
        </h3>
        {imageCredits.filter(c => c.id.startsWith('town-')).map((credit) => (
          <ImageCreditComponent key={credit.id} credit={credit} variant="card" />
        ))}
        {/* Coastal photographs */}
        <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-3">
          Coastal area images ({imageCredits.filter((c) => c.id.startsWith('coastal-')).length})
        </h3>
        {imageCredits.filter(c => c.id.startsWith('coastal-')).map((credit) => (
          <ImageCreditComponent key={credit.id} credit={credit} variant="card" />
        ))}

        {/* Caravan park photographs */}
        <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-3">
          Accommodation and caravan park images ({bookableCaravanParks.length})
        </h3>
        <p className="text-sm text-charcoal-muted leading-relaxed mb-4">
          Each caravan park card uses either an exact image of the park (where a
          Creative Commons or public-domain image has been verified) or a
          contextual photo of the surrounding area. We never imply that the
          photographers endorse Lincs Staycation Guide or the park.
        </p>

        <div className="space-y-4">
          {bookableCaravanParks.map((park) => {
            const { image, status } = getParkImage(park);
            if (!image) {
              return (
                <div
                  key={park.id}
                  id={`listing-${park.id}`}
                  className="rounded-xl border border-cream-dark/60 bg-white p-4 text-sm text-charcoal-muted"
                >
                  <p className="font-heading text-base text-charcoal mb-1">
                    {park.name}
                  </p>
                  <p className="text-xs">
                    No verified image yet. A placeholder icon is shown on the
                    card.
                  </p>
                </div>
              );
            }
            return (
              <div
                key={park.id}
                id={`listing-${park.id}`}
                className="rounded-xl border border-cream-dark/60 bg-white p-4 text-sm"
              >
                <p className="font-heading text-base font-semibold text-charcoal mb-1">
                  {park.name}{' '}
                  <span className="text-xs font-normal text-charcoal-muted">
                    ·{' '}
                    {status === 'verified-public-use'
                      ? 'Exact-park image'
                      : status === 'area-context-image'
                        ? 'Area-context image'
                        : status === 'permission-needed'
                          ? 'Permission needed'
                          : 'Placeholder'}
                  </span>
                </p>
                <ul className="space-y-0.5 text-xs text-charcoal-muted">
                  <li>
                    <strong className="text-charcoal">Image:</strong> {image.alt}
                  </li>
                  <li>
                    <strong className="text-charcoal">Author:</strong>{' '}
                    {image.credit}
                  </li>
                  <li>
                    <strong className="text-charcoal">Source:</strong>{' '}
                    <a
                      href={image.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-dotted hover:text-charcoal"
                    >
                      {image.sourceName}
                    </a>
                  </li>
                  <li>
                    <strong className="text-charcoal">Licence:</strong>{' '}
                    <a
                      href={image.licenceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-dotted hover:text-charcoal"
                    >
                      {image.licence}
                    </a>
                  </li>
                  {image.modifications && (
                    <li>
                      <strong className="text-charcoal">Modifications:</strong>{' '}
                      {image.modifications}
                    </li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </LegalPageLayout>
  );
}
