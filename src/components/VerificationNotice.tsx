import { buildVerificationNote, type ListingKind } from '@/lib/public-copy';

type VerificationNoticeProps = {
  kind?: ListingKind;
  compact?: boolean;
  children?: string;
};

export default function VerificationNotice({
  kind = 'generic',
  compact = false,
  children,
}: VerificationNoticeProps) {
  const text = children ?? buildVerificationNote({ needsVerification: true, kind });

  return (
    <p
      className={`rounded-xl border border-amber-200 bg-amber-50 text-amber-950 ${
        compact ? 'mt-3 px-3 py-2 text-xs leading-5' : 'mt-4 px-4 py-3 text-sm leading-6'
      }`}
    >
      {text}
    </p>
  );
}

export function SectionVerificationSummary({ kind = 'generic' }: { kind?: ListingKind }) {
  const subject =
    kind === 'food'
      ? 'food and drink listings'
      : kind === 'attraction'
        ? 'visitor listings'
        : kind === 'stay'
          ? 'accommodation listings'
          : kind === 'park'
            ? 'park listings'
            : 'listings';

  return (
    <aside className="mb-5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950">
      Some {subject} are still being checked against official sources or map-based routes. Always confirm
      current opening times, facilities, prices and policies directly before travelling or booking.
    </aside>
  );
}
