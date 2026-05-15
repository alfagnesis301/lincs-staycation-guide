import { notFound } from 'next/navigation';
import Link from 'next/link';
import { guides } from '@/data/guides';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdPlaceholder from '@/components/AdPlaceholder';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
    robots: {
      index: false,
      follow: false,
    },
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
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const otherGuides = guides.filter((g) => g.id !== guide.id).slice(0, 3);

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
          <div className="bg-coast/5 border border-coast/20 rounded-2xl p-6 mb-8 text-center">
            <p className="text-charcoal-muted">
              📝 This guide is coming soon. We are currently researching and writing comprehensive, useful content for this topic. Check back shortly for the full guide.
            </p>
          </div>

          <div className="prose max-w-none">
            <p className="text-charcoal-muted leading-relaxed mb-6">
              {guide.description}
            </p>
            <p className="text-charcoal-muted leading-relaxed">
              In the full guide, we will cover practical tips, recommended places, useful local knowledge and suggestions to help you make the most of your time in Lincolnshire. All content will be independently written with a focus on accuracy and local usefulness.
            </p>
          </div>

          <AdPlaceholder />

          {/* Related guides */}
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
