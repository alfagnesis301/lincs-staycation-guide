import { notFound } from 'next/navigation';
import { guides, publishedGuides } from '@/data/guides';
import { BlogArticle } from '@/components/blog/BlogArticle';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return publishedGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug && g.published);
  if (!guide) return {};

  return {
    title: guide.seoTitle ?? guide.title,
    description: guide.metaDescription ?? guide.description,
    openGraph: {
      title: guide.seoTitle ?? guide.title,
      description: guide.metaDescription ?? guide.description,
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

  return <BlogArticle guide={guide} relatedGuides={otherGuides} />;
}
