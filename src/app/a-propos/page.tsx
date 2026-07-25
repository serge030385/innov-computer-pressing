import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { createPageMetadata } from "@/data/metadata";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "À propos",
    description:
      "Découvrez Innov Computer Pressing, service de pressing situé à Akwa Nord, Douala, avec lavage, express, collecte et livraison.",
    path: "/a-propos"
  }),
  title: "À propos",
  description:
    "Découvrez Innov Computer Pressing, service de pressing situé à Akwa Nord, Douala, avec lavage, express, collecte et livraison."
};

const commitments = [
  "Prendre soin de chaque vêtement",
  "Respecter les délais annoncés",
  "Proposer un service pratique",
  "Être disponible et à l’écoute",
  "Maintenir des prix accessibles"
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-brand-mist py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow">À propos</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black text-brand-navy sm:text-5xl">
            À propos d’Innov Computer Pressing
          </h1>
          <p className="section-copy mt-5">
            Innov Computer Pressing est un service de pressing situé à Akwa Nord, à Douala. Notre
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
    </main>
  );
}
