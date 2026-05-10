interface PageHeroProps {
  title: string;
  description: string;
  variant?: 'default' | 'coast' | 'sage';
}

export default function PageHero({ title, description, variant = 'default' }: PageHeroProps) {
  const gradientClass = variant === 'coast'
    ? 'hero-gradient-coast'
    : variant === 'sage'
      ? 'hero-gradient-sage'
      : 'hero-gradient';

  return (
    <section className={`${gradientClass} py-12 sm:py-16 lg:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg text-charcoal-muted leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
