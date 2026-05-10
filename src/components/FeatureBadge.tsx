interface FeatureBadgeProps {
  label: string;
  variant?: 'sage' | 'coast' | 'sand' | 'sample';
}

export default function FeatureBadge({ label, variant = 'sage' }: FeatureBadgeProps) {
  const variantClass: Record<string, string> = {
    sage: 'badge-sage',
    coast: 'badge-coast',
    sand: 'badge-sand',
    sample: 'badge-sample',
  };

  return (
    <span className={`badge ${variantClass[variant]}`}>
      {label}
    </span>
  );
}
