import type { Metadata } from "next";
import {
  CheckCircle2,
  ClipboardList,
  Home,
  MessageCircle,
  PackageCheck,
  Truck
} from "lucide-react";
import { PickupForm } from "@/components/PickupForm";
import { whatsappHref, whatsappMessages } from "@/data/business";
import { createPageMetadata } from "@/data/metadata";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Collecte et livraison",
    description:
      "Programmez une collecte de linge à domicile avec Innov Computer Pressing à Douala. Le formulaire prépare un message WhatsApp structuré.",
    path: "/collecte-et-livraison"
  }),
  title: "Collecte et livraison",
  description:
    "Programmez une collecte de linge à domicile avec Innov Computer Pressing à Douala. Le formulaire prépare un message WhatsApp structuré."
};

const process = [
  {
    title: "Demandez une collecte",
    description: "Contactez le pressing par WhatsApp ou remplissez le formulaire de demande.",
    icon: MessageCircle
  },
  {
    title: "Communiquez votre adresse",
    description: "Précisez votre quartier, votre adresse et un point de repère facile à trouver.",
    icon: Home
  },
  {
    title: "Confirmez les vêtements",
    description: "Indiquez le service souhaité et les informations utiles sur votre linge.",
    icon: ClipboardList
  },
  {
    title: "Recevez votre linge",
    description: "La livraison est organisée à l’adresse convenue une fois le linge prêt.",
    icon: Truck
  }
];

export default function PickupPage() {
  return (
    <main>
      <section className="bg-brand-mist py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow">Collecte et livraison</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black text-brand-navy sm:text-5xl">
            Programmez le ramassage de votre linge à domicile.
          </h1>
          <p className="section-copy mt-5">
            Expliquez votre besoin, indiquez votre adresse ou un point de repère, puis envoyez votre
            demande directement sur WhatsApp. Aucune donnée n’est enregistrée sur le site.
          </p>
          <a
            href={whatsappHref(whatsappMessages.schedule)}
            target="_blank"
            rel="noreferrer"
            className="button-primary mt-8"
          >
            Programmer une collecte sur WhatsApp
          </a>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Fonctionnement</p>
            <h2 className="section-title mt-3">Une demande claire en quelques étapes</h2>
            <div className="mt-8 grid gap-4">
              {process.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="surface flex gap-4 p-5">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-sky text-brand-navy">
                      <Icon aria-hidden="true" className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="mt-6 rounded-lg bg-brand-navy p-6 text-white">
              <PackageCheck aria-hidden="true" className="size-8 text-brand-orange" />
              <p className="mt-4 text-sm leading-7 text-white/76">
                Pour faciliter la collecte, regroupez les vêtements à récupérer et préparez toute
                information utile sur les textiles délicats ou les demandes urgentes.
              </p>
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-brand-navy">
              <CheckCircle2 aria-hidden="true" className="size-5 text-brand-blue" />
              Validation des champs obligatoires incluse
            </div>
            <PickupForm />
          </div>
        </div>
      </section>
    </main>
  );
}
