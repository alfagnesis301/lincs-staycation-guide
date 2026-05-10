import Link from 'next/link';
import type { ImageCredit } from '@/data/imageCredits';

interface ImageCreditProps {
  credit: ImageCredit;
  /**
   * 'inline'  — one-line caption rendered below an image (default)
   * 'card'    — full card for use on the /image-credits page
   */
  variant?: 'inline' | 'card';
}

export default function ImageCreditComponent({ credit, variant = 'inline' }: ImageCreditProps) {
  if (variant === 'inline') {
    return (
      <p className="text-[10px] text-white/80 leading-snug">
        <span className="font-medium">Photo:</span>{' '}
        <a
          href={credit.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition-colors"
        >
          {credit.author}
        </a>
        {' via '}{credit.source}{' · '}{credit.licence}{' · '}
        <Link
          href={`/image-credits#${credit.id}`}
          className="underline hover:text-white transition-colors"
        >
          Full credits
        </Link>
      </p>
    );
  }

  // card variant — used on /image-credits page
  return (
    <div id={credit.id} className="bg-white rounded-2xl border border-cream-dark/60 p-5 space-y-3 scroll-mt-24">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-base font-semibold text-charcoal leading-snug">
          {credit.title}
        </h3>
        <span className="badge badge-coast text-[11px] flex-shrink-0">{credit.licence}</span>
      </div>

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
        <div>
          <dt className="text-xs font-medium text-charcoal-muted uppercase tracking-wide mb-0.5">Author / tool</dt>
          <dd className="text-charcoal">{credit.author}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium text-charcoal-muted uppercase tracking-wide mb-0.5">Source</dt>
          <dd>
            <a
              href={credit.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-coast hover:text-coast-dark underline transition-colors"
            >
              {credit.source}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium text-charcoal-muted uppercase tracking-wide mb-0.5">Licence</dt>
          <dd>
            <a
              href={credit.licenceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-coast hover:text-coast-dark underline transition-colors"
            >
              {credit.licence}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium text-charcoal-muted uppercase tracking-wide mb-0.5">Local file</dt>
          <dd className="font-mono text-xs text-charcoal-muted break-all">{credit.localPath}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium text-charcoal-muted uppercase tracking-wide mb-0.5">Used on</dt>
          <dd className="text-charcoal">{credit.pageUsedOn}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium text-charcoal-muted uppercase tracking-wide mb-0.5">Modifications</dt>
          <dd className="text-charcoal">{credit.modifications}</dd>
        </div>
      </dl>
    </div>
  );
}
