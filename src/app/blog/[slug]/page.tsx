import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { whatsappHref, whatsappMessages } from "@/data/business";
import { createPageMetadata } from "@/data/metadata";
import {
  articleSchema,
  breadcrumbSchema,
  pageGraph,
  webPageSchema
} from "@/data/schema";
import { blogPosts } from "@/data/seo-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return createPageMetadata({
    title: post.seoTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: "article"
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "Accueil", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` }
  ]);

  const schema = pageGraph(
    webPageSchema({
      path: `/blog/${post.slug}`,
      title: post.seoTitle,
      description: post.description,
      breadcrumbs: [
        { name: "Accueil", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` }
      ]
    }),
    breadcrumbs,
    articleSchema(post)
  );

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main id="contenu">
      <JsonLd id="article-schema" data={schema} />
      <article>
        <section className="bg-brand-mist py-16 sm:py-20">
          <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow">Conseils pressing</p>
              <h1 className="mt-3 max-w-4xl text-4xl font-black text-brand-navy sm:text-5xl">
                {post.title}
              </h1>
              <p className="section-copy mt-5">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays aria-hidden="true" className="size-4 text-brand-orange" />
                  Publié le 2 août 2026
                </span>
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-soft">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_0.22fr]">
            <div className="max-w-4xl">
              <div className="mb-8 flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-md bg-brand-sky px-3 py-1 text-xs font-bold text-brand-navy"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              {post.sections.map((section) => (
                <section key={section.heading} className="mb-12">
                  <h2 className="text-3xl font-bold text-brand-ink">{section.heading}</h2>
                  <div className="mt-5 grid gap-5">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-slate-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              <section className="rounded-lg bg-brand-mist p-6 sm:p-8">
                <h2 className="text-3xl font-bold text-brand-ink">
                  Checklist avant de confier votre linge
                </h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold text-brand-ink">Informations à préparer</h3>
                    <ul className="mt-4 grid list-disc gap-3 pl-5 text-sm leading-7 text-slate-700">
                      <li>Le type de vêtement ou de linge concerné.</li>
                      <li>Les taches visibles et les produits déjà utilisés.</li>
                      <li>Le quartier de collecte ou de livraison à Douala.</li>
                      <li>Le délai souhaité, surtout pour une demande express.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-ink">Liens internes utiles</h3>
                    <div className="mt-4 grid gap-3">
                      <Link href="/services" className="text-sm font-bold text-brand-navy hover:text-brand-orange">
                        Voir les services de pressing
                      </Link>
                      <Link
                        href="/collecte-et-livraison"
                        className="text-sm font-bold text-brand-navy hover:text-brand-orange"
                      >
                        Programmer une collecte de linge
                      </Link>
                      <Link href="/faq" className="text-sm font-bold text-brand-navy hover:text-brand-orange">
                        Consulter la FAQ pressing
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="surface p-5">
                <h2 className="text-lg font-bold text-brand-ink">Liens utiles</h2>
                <nav className="mt-4 grid gap-3" aria-label="Liens utiles article">
                  <Link href="/services" className="text-sm font-semibold text-brand-navy hover:text-brand-orange">
                    Services de pressing
                  </Link>
                  <Link
                    href="/collecte-et-livraison"
                    className="text-sm font-semibold text-brand-navy hover:text-brand-orange"
                  >
                    Collecte et livraison
                  </Link>
                  <Link href="/faq" className="text-sm font-semibold text-brand-navy hover:text-brand-orange">
                    FAQ pressing
                  </Link>
                  <a
                    href={whatsappHref(whatsappMessages.information)}
                    target="_blank"
                    rel="noreferrer"
                    className="button-primary mt-2"
                  >
                    WhatsApp
                  </a>
                </nav>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <section className="bg-brand-mist py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">À lire aussi</p>
              <h2 className="section-title mt-3">Autres conseils pour votre linge</h2>
            </div>
            <Link href="/blog" className="button-secondary md:shrink-0">
              Tous les articles
              <ArrowRight aria-hidden="true" className="size-5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {relatedPosts.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`} className="surface p-5 transition hover:shadow-soft">
                <h3 className="text-xl font-bold text-brand-ink">{related.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{related.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
