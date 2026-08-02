import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { whatsappHref, whatsappMessages } from "@/data/business";
import { createPageMetadata } from "@/data/metadata";
import {
  breadcrumbSchema,
  faqPageSchema,
  pageGraph,
  webPageSchema
} from "@/data/schema";
import { faqItems, primarySeoKeywords } from "@/data/seo-content";

const title = "FAQ pressing à Douala | Innov-Pressing";
const description =
  "Questions sur pressing à Douala, lavage au poids, collecte, livraison, express, rideaux, couettes et repassage.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/faq",
  keywords: primarySeoKeywords
});

const breadcrumbs = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "FAQ", path: "/faq" }
]);

const schema = pageGraph(
  webPageSchema({
    path: "/faq",
    title,
    description,
    breadcrumbs: [
      { name: "Accueil", path: "/" },
      { name: "FAQ", path: "/faq" }
    ]
  }),
  breadcrumbs,
  faqPageSchema(faqItems)
);

export default function FAQPage() {
  return (
    <main id="contenu">
      <JsonLd id="faq-schema" data={schema} />
      <section className="bg-brand-mist py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black text-brand-navy sm:text-5xl">
            FAQ pressing à Douala : lavage, collecte et livraison.
          </h1>
          <p className="section-copy mt-5">
            Retrouvez les réponses aux questions fréquentes sur le pressing à Douala, le lavage au
            poids, le lavage à la pièce, le repassage, les rideaux, les couettes et le service
            express.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-5">
          {faqItems.map((item, index) => (
            <article key={item.question} className="surface p-6">
              <p className="text-sm font-bold text-brand-blue">Question {index + 1}</p>
              <h2 className="mt-2 text-xl font-bold text-brand-ink">{item.question}</h2>
              <p className="mt-3 text-base leading-8 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="container-page flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Besoin d’une réponse précise ?
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Contactez directement Innov-Pressing.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/76 sm:text-lg">
              Indiquez votre quartier, le type de linge et le délai souhaité pour recevoir une
              réponse adaptée à votre demande.
            </p>
          </div>
          <a
            href={whatsappHref(whatsappMessages.information)}
            target="_blank"
            rel="noreferrer"
            className="button-primary shrink-0"
          >
            <MessageCircle aria-hidden="true" className="size-5" />
            Écrire sur WhatsApp
          </a>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-brand-ink">Continuer votre recherche</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Consultez les services, le formulaire de collecte ou les conseils du blog.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="button-secondary">
              Services
            </Link>
            <Link href="/collecte-et-livraison" className="button-secondary">
              Collecte
            </Link>
            <Link href="/blog" className="button-primary">
              Blog
              <ArrowRight aria-hidden="true" className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
