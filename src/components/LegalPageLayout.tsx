interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="bg-white">
      <div className="hero-gradient py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-2">
            {title}
          </h1>
          <p className="text-sm text-charcoal-muted">Last updated: {lastUpdated}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="prose prose-lg max-w-none text-charcoal-light leading-relaxed [&_h2]:font-heading [&_h2]:text-charcoal [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:text-charcoal [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2 [&_a]:text-coast [&_a]:underline [&_a]:hover:text-coast-dark [&_strong]:text-charcoal [&_em]:text-charcoal-muted">
          {children}
        </div>
      </div>
    </div>
  );
}
