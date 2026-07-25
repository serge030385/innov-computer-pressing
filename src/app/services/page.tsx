import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { whatsappHref, whatsappMessages } from "@/data/business";
import { createPageMetadata } from "@/data/metadata";
import { services } from "@/data/services";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Nos services",
    description:
      "Découvrez les services d’Innov Computer Pressing à Douala : lavage à la pièce, lavage au poids, repassage, express, collecte et livraison.",
    path: "/services"
  }),
  title: "Nos services",
  description:
    "Découvrez les services d’Innov Computer Pressing à Douala : lavage à la pièce, lavage au poids, repassage, express, collecte et livraison."
};

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-brand-mist py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow">Nos services</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black text-brand-navy sm:text-5xl">
            Des services de pressing clairs, pratiques et accessibles.
          </h1>
          <p className="section-copy mt-5">
            Choisissez le service adapté à votre linge, puis contactez-nous pour confirmer les
            détails selon la nature des vêtements et la quantité à traiter.
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
        <div className="container-page flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-brand-ink">Besoin d’un ramassage à domicile ?</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Programmez une collecte et indiquez votre quartier dans Douala.
            </p>
          </div>
          <Link href="/collecte-et-livraison" className="button-secondary">
            Collecte et livraison
            <ArrowRight aria-hidden="true" className="size-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
