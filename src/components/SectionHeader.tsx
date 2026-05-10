interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ title, subtitle, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={`mb-8 lg:mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-charcoal-muted text-lg leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-sage to-coast rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
