import Link from 'next/link';
import type { Guide } from '@/data/guides';

type BlogArticleProps = {
  guide: Guide;
  relatedGuides: Guide[];
};

function sectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function BlogArticle({ guide, relatedGuides }: BlogArticleProps) {
  const sections = guide.sections ?? [];
  const faqs = guide.faqs ?? [];
  const explicitRelated = guide.relatedGuides ?? [];

  return (
    <article className="bg-white">
      <section className="hero-gradient py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-charcoal-muted">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/" className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{guide.title}</li>
            </ol>
          </nav>
          <span className="badge badge-sage mb-4">{guide.category}</span>
          <h1 className="font-heading text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-charcoal-muted">{guide.description}</p>
          <p className="mt-4 text-sm text-charcoal-muted">
            {guide.readingTime} · Lincs Staycation Guide
            {guide.lastUpdated ? ` · Updated ${guide.lastUpdated}` : ''}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="space-y-5 text-lg leading-8 text-charcoal-muted">
          <p>{guide.intro ?? guide.description}</p>
        </div>

        {sections.length > 0 ? (
          <nav aria-label="Article sections" className="my-8 rounded-2xl border border-cream-dark/60 bg-cream/30 p-5">
            <h2 className="text-base font-semibold text-charcoal">In this guide</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {sections.map((section) => (
                <li key={section.heading}>
                  <a
                    href={`#${sectionId(section.heading)}`}
                    className="block min-h-[44px] rounded-xl px-3 py-2 text-sm font-semibold text-sage underline-offset-4 hover:bg-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.heading} id={sectionId(section.heading)} className="scroll-mt-28 border-t border-cream-dark/50 pt-8">
              <h2 className="font-heading text-2xl font-semibold text-charcoal">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-charcoal-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.links && section.links.length > 0 ? (
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${section.heading} links`}>
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-[44px] items-center rounded-xl border border-sage/30 px-4 py-2 text-sm font-semibold text-sage underline-offset-4 hover:bg-sage hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        {guide.editorialNote ? (
          <section className="mt-14 rounded-2xl border border-sand/60 bg-sand-light/40 p-5">
            <h2 className="font-heading text-xl font-semibold text-charcoal">Editorial note</h2>
            <p className="mt-2 text-base leading-7 text-charcoal-muted">{guide.editorialNote}</p>
          </section>
        ) : null}

        {faqs.length > 0 ? (
          <section className="mt-14">
            <h2 className="font-heading text-2xl font-semibold text-charcoal">FAQs</h2>
            <div className="mt-6 divide-y divide-cream-dark/60 rounded-2xl border border-cream-dark/60 bg-white">
              {faqs.map((faq) => (
                <div key={faq.question} className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-charcoal">{faq.question}</h3>
                  <p className="mt-2 text-base leading-7 text-charcoal-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-14">
          <h2 className="font-heading text-2xl font-semibold text-charcoal">Related guides</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {explicitRelated.map((related) => (
              <Link
                key={related.href}
                href={related.href}
                className="rounded-2xl border border-cream-dark/60 bg-white p-5 shadow-sm hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage"
              >
                {related.label ? <p className="text-xs font-semibold uppercase tracking-wide text-sage">{related.label}</p> : null}
                <p className="mt-1 font-semibold text-charcoal">{related.title}</p>
              </Link>
            ))}
            {relatedGuides.map((related) => (
              <Link
                key={related.id}
                href={`/blog/${related.slug}`}
                className="rounded-2xl border border-cream-dark/60 bg-white p-5 shadow-sm hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-sage">{related.category}</p>
                <p className="mt-1 font-semibold text-charcoal">{related.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
