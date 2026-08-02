import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { business, whatsappHref } from "@/data/business";
import { createPageMetadata } from "@/data/metadata";
import { breadcrumbSchema, pageGraph, webPageSchema } from "@/data/schema";
import { landingPages, primarySeoKeywords } from "@/data/seo-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) {
    return {};
  }

  return createPageMetadata({
    title: page.seoTitle,
    description: page.description,
    path: `/${page.slug}`,
    keywords: [...primarySeoKeywords, `pressing ${page.district}`]
  });
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) {
    notFound();
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "Accueil", path: "/" },
    { name: page.district, path: `/${page.slug}` }
  ]);

  const schema = pageGraph(
    webPageSchema({
      path: `/${page.slug}`,
      title: page.seoTitle,
      description: page.description,
      breadcrumbs: [
        { name: "Accueil", path: "/" },
        { name: page.district, path: `/${page.slug}` }
      ]
    }),
    breadcrumbs
  );

  const nearbyPages = page.nearby
    .map((district) => landingPages.find((item) => item.district === district))
    .filter((item): item is (typeof landingPages)[number] =>
      Boolean(item && item.slug !== page.slug)
    );

  return (
    <main id="contenu">
      <JsonLd id="local-landing-schema" data={schema} />
      <section className="bg-brand-mist py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">Pressing Douala</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black text-brand-navy sm:text-5xl">
              {page.h1}
            </h1>
            <p className="section-copy mt-5">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref(
                  `Bonjour Innov-Pressing, je souhaite demander une collecte de linge à ${page.district}.`
                )}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                Demander une collecte
                <ArrowRight aria-hidden="true" className="size-5" />
              </a>
              <Link href="/services" className="button-secondary">
                Voir les services
              </Link>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-soft">
            <Image
              src="/images/pressing/laundry-delivery.png"
              alt={`Collecte et livraison de linge pour pressing ${page.district} à Douala`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg bg-brand-navy p-8 text-white sm:p-10">
            <MapPin aria-hidden="true" className="size-10 text-brand-orange" />
            <h2 className="mt-5 text-3xl font-bold">Service local pour {page.district}</h2>
            <p className="mt-5 text-base leading-8 text-white/76">
              Innov-Pressing est basé à {business.shortAddress}. Selon votre adresse, votre volume
              de linge et le délai souhaité, l’équipe confirme les possibilités de collecte et de
              livraison dans Douala.
            </p>
          </div>
          <div>
            <p className="eyebrow">Avantages</p>
            <h2 className="section-title mt-3">Pourquoi choisir ce service de pressing ?</h2>
            <div className="mt-8 grid gap-4">
              {page.highlights.map((highlight) => (
                <div key={highlight} className="surface flex items-center gap-4 p-5">
                  <CheckCircle2 aria-hidden="true" className="size-6 shrink-0 text-brand-blue" />
                  <p className="font-semibold text-brand-ink">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist py-16 sm:py-20">
        <div className="container-page grid gap-5 lg:grid-cols-2">
          {page.sections.map((section) => (
            <article key={section.title} className="surface p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-brand-ink">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{section.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Maillage local</p>
              <h2 className="section-title mt-3">Autres zones proches</h2>
              <p className="section-copy mt-5">
                Comparez les informations de collecte et de livraison pour d’autres quartiers de
                Douala.
              </p>
            </div>
            <Link href="/faq" className="button-secondary md:shrink-0">
              Questions fréquentes
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nearbyPages.map((nearby) => (
              <Link
                key={nearby.slug}
                href={`/${nearby.slug}`}
                className="rounded-lg border border-brand-blue/15 bg-white p-4 text-sm font-bold text-brand-navy transition hover:border-brand-orange hover:text-brand-orange"
              >
                Pressing {nearby.district}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}
