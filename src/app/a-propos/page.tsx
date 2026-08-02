import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { createPageMetadata } from "@/data/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageGraph, webPageSchema } from "@/data/schema";
import { primarySeoKeywords } from "@/data/seo-content";

const title = "À propos de Innov-Pressing";
const description =
  "Découvrez Innov-Pressing, pressing à Akwa Nord Douala, dédié au lavage, repassage, collecte et livraison.";

export const metadata: Metadata = {
  ...createPageMetadata({
    title,
    description,
    path: "/a-propos",
    keywords: primarySeoKeywords
  }),
  description
};

const commitments = [
  "Prendre soin de chaque vêtement",
  "Respecter les délais annoncés",
  "Proposer un service pratique",
  "Être disponible et à l’écoute",
  "Maintenir des prix accessibles"
];

const breadcrumbs = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/a-propos" }
]);

const schema = pageGraph(
  webPageSchema({
    path: "/a-propos",
    title,
    description,
    breadcrumbs: [
      { name: "Accueil", path: "/" },
      { name: "À propos", path: "/a-propos" }
    ]
  }),
  breadcrumbs
);

export default function AboutPage() {
  return (
    <main id="contenu">
      <JsonLd id="about-schema" data={schema} />
      <section className="bg-brand-mist py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow">À propos</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black text-brand-navy sm:text-5xl">
            À propos d’Innov-Pressing
          </h1>
          <p className="section-copy mt-5">
            Innov-Pressing est un service de pressing situé à Akwa Nord, à Douala. Notre
            objectif est de faciliter l’entretien du linge grâce à des services rapides, pratiques
            et accessibles, notamment le lavage à la pièce, le lavage au poids, le service express,
            la collecte et la livraison à domicile.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-lg bg-brand-navy p-8 text-white sm:p-10">
            <h2 className="text-3xl font-bold">Notre approche</h2>
            <p className="mt-5 text-base leading-8 text-white/76">
              Le pressing met l’accent sur un service clair, direct et utile au quotidien. Chaque
              demande peut être confirmée par téléphone ou WhatsApp afin d’éviter les déplacements
              inutiles et de préciser les besoins avant la prise en charge du linge.
            </p>
          </div>
          <div>
            <p className="eyebrow">Engagements</p>
            <h2 className="section-title mt-3">Des engagements simples et concrets</h2>
            <div className="mt-8 grid gap-4">
              {commitments.map((commitment) => (
                <div key={commitment} className="surface flex items-center gap-4 p-5">
                  <CheckCircle2 aria-hidden="true" className="size-6 shrink-0 text-brand-blue" />
                  <p className="font-semibold text-brand-ink">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist py-14">
        <div className="container-page flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-brand-ink">Besoin d’un service de pressing à Douala ?</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Consultez nos services, nos réponses fréquentes ou demandez une collecte de linge.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="button-secondary">
              Services
            </Link>
            <Link href="/faq" className="button-secondary">
              FAQ
            </Link>
            <Link href="/contact" className="button-primary">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
