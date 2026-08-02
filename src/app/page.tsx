import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Home,
  MapPin,
  Phone,
  Sparkles,
  Truck,
  WalletCards
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCard } from "@/components/ServiceCard";
import { business, seo, whatsappHref, whatsappMessages } from "@/data/business";
import { createPageMetadata } from "@/data/metadata";
import { breadcrumbSchema, pageGraph, webPageSchema } from "@/data/schema";
import { blogPosts, faqItems, landingPages, primarySeoKeywords } from "@/data/seo-content";
import { services } from "@/data/services";

export const metadata: Metadata = createPageMetadata({
  description: seo.description,
  path: "/",
  keywords: primarySeoKeywords
});

const indicators = [
  "Collecte à domicile",
  "Livraison à domicile",
  "Service express en 2 heures",
  "Disponible à Douala"
];

const reasons = [
  {
    title: "Vitesse",
    description: "Un traitement rapide de vos vêtements.",
    icon: Clock3
  },
  {
    title: "Qualité",
    description: "Une attention particulière portée à chaque article.",
    icon: Sparkles
  },
  {
    title: "Soin de vos vêtements",
    description: "Des méthodes adaptées aux différents types de textiles.",
    icon: CheckCircle2
  },
  {
    title: "Prix abordables",
    description: "Des services accessibles pour répondre à vos besoins quotidiens.",
    icon: WalletCards
  }
];

const pickupSteps = [
  "Contactez-nous",
  "Indiquez votre adresse et vos besoins",
  "Nous collectons votre linge",
  "Nous vous le livrons une fois prêt"
];

const homeBreadcrumbs = breadcrumbSchema([{ name: "Accueil", path: "/" }]);

const homeSchema = pageGraph(
  webPageSchema({
    path: "/",
    title: seo.title,
    description: seo.description,
    breadcrumbs: [{ name: "Accueil", path: "/" }]
  }),
  homeBreadcrumbs
);

export default function HomePage() {
  return (
    <main id="contenu">
      <JsonLd id="home-schema" data={homeSchema} />
      <section className="soft-grid overflow-hidden">
        <div className="container-page grid min-h-[calc(100vh-76px)] items-center gap-10 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
          <div className="fade-up">
            <p className="eyebrow">{business.displayName}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-normal text-brand-navy sm:text-6xl lg:text-7xl">
              Pressing à Douala avec collecte et livraison de linge
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              Innov-Pressing propose lavage à la pièce, lavage au poids, repassage, pressing
              express et nettoyage de vêtements à Akwa Nord et dans les quartiers de Douala.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref(whatsappMessages.pickup)}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                Demander une collecte
                <ArrowRight aria-hidden="true" className="size-5" />
              </a>
              <Link href="/contact" className="button-secondary">
                Nous contacter
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {indicators.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
                  <CheckCircle2 aria-hidden="true" className="size-5 text-brand-blue" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative fade-up">
            <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-white shadow-soft">
              <Image
                src="/images/pressing/pressing-hero.png"
                alt="Linge propre plié dans un pressing moderne"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/92 p-4 shadow-card backdrop-blur sm:left-auto sm:w-72">
              <p className="text-sm font-bold text-brand-navy">Service pratique à Douala</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Collecte, lavage, repassage et livraison selon vos besoins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
            <Image
              src="/images/pressing/pressing-hero.png"
              alt="Vêtements propres préparés avec soin"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-right"
            />
          </div>
          <div>
            <p className="eyebrow">Votre quotidien simplifié</p>
            <h2 className="section-title mt-3">Un pressing au service de votre quotidien</h2>
            <p className="section-copy mt-5">
              Innov-Pressing prend soin de vos vêtements grâce à un service rapide,
              pratique et accessible. Notre pressing à Douala propose le lavage à la pièce, le
              lavage au poids, le lavage express, le repassage ainsi que la collecte et la livraison
              à domicile.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Nos services</p>
              <h2 className="section-title mt-3">Un entretien adapté à chaque besoin</h2>
            </div>
            <Link href="/services" className="button-secondary md:shrink-0">
              Voir tous nos services
              <ArrowRight aria-hidden="true" className="size-5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Zones desservies</p>
              <h2 className="section-title mt-3">Pressing à Akwa Nord et dans Douala</h2>
              <p className="section-copy mt-5">
                Retrouvez des informations dédiées pour organiser le lavage, le repassage, la
                collecte et la livraison de linge dans plusieurs quartiers de Douala.
              </p>
            </div>
            <Link href="/collecte-et-livraison" className="button-secondary md:shrink-0">
              Organiser une collecte
              <ArrowRight aria-hidden="true" className="size-5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {landingPages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="surface p-5 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <h3 className="text-lg font-bold text-brand-ink">Pressing {page.district}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow">Pourquoi nous choisir</p>
            <h2 className="section-title mt-3">Pourquoi choisir Innov-Pressing ?</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article key={reason.title} className="rounded-lg border border-slate-200 bg-white p-6">
                  <Icon aria-hidden="true" className="size-8 text-brand-orange" />
                  <h3 className="mt-5 text-xl font-bold text-brand-ink">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{reason.description}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-8 rounded-lg border border-brand-blue/15 bg-brand-sky p-6 text-brand-navy">
            <p className="text-lg font-bold">Un service pensé pour le linge de tous les jours.</p>
            <p className="mt-2 text-sm leading-7">
              Qualité, rapidité et accessibilité restent au centre de chaque prestation, sans
              promesses inventées ni chiffres artificiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Collecte et livraison</p>
            <h2 className="section-title mt-3">Nous collectons et livrons votre linge à domicile</h2>
            <p className="section-copy mt-5">
              Gagnez du temps en programmant le ramassage de votre linge. Notre équipe se déplace
              dans Douala, récupère vos vêtements et vous les retourne propres et soigneusement
              préparés.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pickupSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold leading-6 text-brand-ink">{step}</p>
                </div>
              ))}
            </div>
            <a
              href={whatsappHref(whatsappMessages.schedule)}
              target="_blank"
              rel="noreferrer"
              className="button-primary mt-8"
            >
              Programmer une collecte sur WhatsApp
            </a>
          </div>
          <div className="grid gap-5">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-soft">
              <Image
                src="/images/pressing/laundry-delivery.png"
                alt="Véhicule de livraison transportant du linge propre"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-lg bg-brand-navy p-6 text-white shadow-soft">
              <Truck aria-hidden="true" className="size-12 text-brand-orange" />
              <h3 className="mt-5 text-2xl font-bold">Un ramassage simple dans Douala</h3>
              <p className="mt-4 text-sm leading-7 text-white/76">
                Indiquez votre quartier, votre adresse ou un point de repère clair. L’équipe
                confirme ensuite les vêtements à collecter et l’organisation de la livraison.
              </p>
              <div className="mt-6 grid gap-3">
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <Home aria-hidden="true" className="size-5 text-brand-blue" />
                  Collecte à domicile
                </p>
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <MapPin aria-hidden="true" className="size-5 text-brand-blue" />
                  Disponible à Douala
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="container-page flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Service express
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Besoin de votre linge rapidement ?</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/76 sm:text-lg">
              Découvrez notre service de lavage express en 2 heures, disponible selon le type de
              vêtement, la quantité de linge et la charge de travail du pressing.
            </p>
          </div>
          <a
            href={whatsappHref(whatsappMessages.express)}
            target="_blank"
            rel="noreferrer"
            className="button-primary shrink-0"
          >
            Vérifier la disponibilité
          </a>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">FAQ SEO</p>
            <h2 className="section-title mt-3">Questions fréquentes sur le pressing à Douala</h2>
            <p className="section-copy mt-5">
              Des réponses concrètes sur la collecte de linge, la livraison, le lavage au poids,
              les rideaux, les couettes, le repassage et le service express.
            </p>
            <Link href="/faq" className="button-secondary mt-8">
              Voir la FAQ complète
              <ArrowRight aria-hidden="true" className="size-5" />
            </Link>
          </div>
          <div className="grid gap-4">
            {faqItems.slice(0, 4).map((item) => (
              <article key={item.question} className="surface p-5">
                <h3 className="text-lg font-bold text-brand-ink">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-mist py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Conseils linge</p>
              <h2 className="section-title mt-3">Guides pratiques pour entretenir vos vêtements</h2>
            </div>
            <Link href="/blog" className="button-secondary md:shrink-0">
              Lire le blog
              <ArrowRight aria-hidden="true" className="size-5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.slug} className="surface overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue">
                    {post.readTime}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-brand-ink">{post.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex text-sm font-bold text-brand-orange">
                    Lire l’article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow">Avis clients</p>
            <h2 className="section-title mt-3">Les témoignages de nos clients</h2>
          </div>
          <div className="mt-8 rounded-lg border border-dashed border-brand-blue/35 bg-brand-sky/70 p-8 text-center">
            <p className="text-base font-semibold text-brand-navy">
              Les témoignages de nos clients seront bientôt disponibles.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container-page">
          <div className="rounded-lg bg-brand-mist p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div>
              <h2 className="text-3xl font-bold text-brand-ink">Essayez-nous aujourd’hui !</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Confiez votre linge à une équipe qui mise sur la rapidité, la qualité et le soin de
                vos vêtements.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <a href={business.primaryPhoneHref} className="button-secondary">
                <Phone aria-hidden="true" className="size-5" />
                Appeler maintenant
              </a>
              <a
                href={whatsappHref(whatsappMessages.information)}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                Écrire sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
