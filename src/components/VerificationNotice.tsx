import { buildVerificationNote, type ListingKind } from '@/lib/public-copy';

type VerificationNoticeProps = {
  kind?: ListingKind;
  compact?: boolean;
  children?: string;
};

export default function VerificationNotice({
  compact = false,
  children,
}: VerificationNoticeProps) {
  const text = children ?? buildVerificationNote({ needsVerification: true });

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
