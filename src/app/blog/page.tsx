import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/data/metadata";
import { breadcrumbSchema, pageGraph, webPageSchema } from "@/data/schema";
import { blogPosts, primarySeoKeywords } from "@/data/seo-content";

const title = "Blog pressing Douala | Conseils Innov-Pressing";
const description =
  "Conseils pressing à Douala : taches, costumes, robes, rideaux, couettes, repassage et entretien des vêtements.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/blog",
  keywords: primarySeoKeywords
});

const breadcrumbs = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Blog", path: "/blog" }
]);

const schema = pageGraph(
  webPageSchema({
    path: "/blog",
    title,
    description,
    breadcrumbs: [
      { name: "Accueil", path: "/" },
      { name: "Blog", path: "/blog" }
    ]
  }),
  breadcrumbs
);

export default function BlogPage() {
  return (
    <main id="contenu">
      <JsonLd id="blog-schema" data={schema} />
      <section className="bg-brand-mist py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow">Blog</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black text-brand-navy sm:text-5xl">
            Conseils pressing à Douala pour mieux entretenir vos vêtements.
          </h1>
          <p className="section-copy mt-5">
            Guides pratiques sur les taches difficiles, costumes, robes, rideaux, couettes,
            repassage de chemises, lavage au poids et entretien du linge à Douala.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="surface flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[16/10]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2">
                  {post.keywords.slice(0, 2).map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-md bg-brand-sky px-3 py-1 text-xs font-bold text-brand-navy"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <h2 className="mt-5 text-2xl font-bold text-brand-ink">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-slate-500">{post.readTime}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange transition hover:text-brand-orangeDark"
                  >
                    Lire
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="container-page flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Besoin d’un service maintenant ?
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Passez du conseil à la prise en charge.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/76 sm:text-lg">
              Demandez un lavage, un repassage, une collecte ou une livraison de linge à Douala.
            </p>
          </div>
          <Link href="/services" className="button-primary shrink-0">
            Voir les services
          </Link>
        </div>
      </section>
    </main>
  );
}
