import { notFound } from 'next/navigation';
import Link from 'next/link';
import { guides, publishedGuides } from '@/data/guides';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdPlaceholder from '@/components/AdPlaceholder';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Only generate routes for published articles. Drafts are not built/indexed.
  return publishedGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug && g.published);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
    },
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug && g.published);
  if (!guide) notFound();

  const otherGuides = publishedGuides.filter((g) => g.id !== guide.id).slice(0, 3);

  return (
    <>
      <section className="hero-gradient py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: guide.title },
          ]} />
          <span className="badge badge-sage mb-4">{guide.category}</span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
            {guide.title}
          </h1>
          <p className="text-lg text-charcoal-muted leading-relaxed">
            {guide.description}
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-charcoal-muted">
            <span>{guide.readingTime}</span>
            <span>·</span>
            <span>Lincs Staycation Guide</span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <p className="text-charcoal-muted leading-relaxed mb-6">
              {guide.description}
            </p>
          </div>

          <AdPlaceholder />

          {otherGuides.length > 0 && (
            <div className="mt-12 pt-8 border-t border-cream-dark/40">
              <h2 className="font-heading text-xl font-semibold text-charcoal mb-6">Related guides</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {otherGuides.map((g) => (
                  <Link key={g.id} href={`/blog/${g.slug}`} className="group block p-4 bg-cream/30 rounded-xl hover:bg-cream transition-colors">
                    <span className="badge badge-sage text-[10px] mb-2">{g.category}</span>
                    <h3 className="font-heading text-sm font-semibold text-charcoal group-hover:text-sage transition-colors leading-snug">
                      {g.title}
                    </h3>
                    <span className="text-xs text-charcoal-muted mt-1 block">{g.readingTime}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
