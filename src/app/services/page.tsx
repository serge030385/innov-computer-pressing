import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCard } from "@/components/ServiceCard";
import { whatsappHref, whatsappMessages } from "@/data/business";
import { createPageMetadata } from "@/data/metadata";
import { breadcrumbSchema, pageGraph, webPageSchema } from "@/data/schema";
import { blogPosts, primarySeoKeywords } from "@/data/seo-content";
import { services } from "@/data/services";

const title = "Services de pressing à Douala | Innov-Pressing";
const description =
  "Lavage à la pièce, lavage au poids, repassage, express, rideaux et couettes : nos services de pressing à Douala.";

export const metadata: Metadata = {
  ...createPageMetadata({
    title,
    description,
    path: "/services",
    keywords: primarySeoKeywords
  }),
  description
};

const breadcrumbs = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Services", path: "/services" }
]);

const schema = pageGraph(
  webPageSchema({
    path: "/services",
    title,
    description,
    breadcrumbs: [
      { name: "Accueil", path: "/" },
      { name: "Services", path: "/services" }
    ]
  }),
  breadcrumbs
);

export default function ServicesPage() {
  return (
    <main id="contenu">
      <JsonLd id="services-schema" data={schema} />
      <section className="bg-brand-mist py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow">Nos services</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black text-brand-navy sm:text-5xl">
            Services de pressing à Douala : lavage, repassage et collecte.
          </h1>
          <p className="section-copy mt-5">
            Choisissez le service adapté à votre linge : lavage à la pièce, lavage au poids,
            repassage, pressing express, collecte et livraison à domicile dans Douala.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} withAction />
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-orange-200 bg-orange-50 p-6">
            <div className="flex gap-4">
              <AlertTriangle aria-hidden="true" className="mt-1 size-6 shrink-0 text-brand-orange" />
              <div>
                <h2 className="text-xl font-bold text-brand-ink">Service express en 2 heures</h2>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  La disponibilité du service express dépend du type de linge et de la quantité à
                  traiter. Veuillez nous contacter avant votre déplacement.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <article className="surface p-6">
              <h2 className="text-2xl font-bold text-brand-ink">Nettoyage de vêtements à Douala</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Chemises, pantalons, robes, costumes et linge du quotidien peuvent être orientés
                vers un lavage à la pièce ou un lavage au poids selon la matière, l’état et la
                quantité.
              </p>
            </article>
            <article className="surface p-6">
              <h2 className="text-2xl font-bold text-brand-ink">Rideaux, couettes et linge volumineux</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Les rideaux et couettes nécessitent une vérification de la taille, du garnissage et
                de l’étiquette. Contactez-nous pour confirmer la faisabilité avant la collecte.
              </p>
            </article>
            <article className="surface p-6">
              <h2 className="text-2xl font-bold text-brand-ink">Repassage et finitions</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Le repassage aide à préparer vos chemises, tenues de travail et vêtements habillés
                avec un rendu net, utile pour les journées professionnelles à Douala.
              </p>
            </article>
          </div>

          <div className="mt-10 rounded-lg bg-brand-navy p-8 text-white sm:p-10">
            <h2 className="text-3xl font-bold">Vous avez un besoin particulier ?</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/76">
              Contactez-nous directement pour les vêtements délicats, les grandes quantités ou les
              demandes professionnelles.
            </p>
            <a
              href={whatsappHref(whatsappMessages.information)}
              target="_blank"
              rel="noreferrer"
              className="button-primary mt-6"
            >
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist py-14">
        <div className="container-page flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-brand-ink">Besoin d’un ramassage ou d’un conseil ?</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Programmez une collecte, consultez la FAQ ou lisez nos conseils d’entretien du linge.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/collecte-et-livraison" className="button-secondary">
              Collecte et livraison
              <ArrowRight aria-hidden="true" className="size-5" />
            </Link>
            <Link href="/faq" className="button-secondary">
              FAQ pressing
            </Link>
            <Link href={`/blog/${blogPosts[0].slug}`} className="button-secondary">
              Conseils pressing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
