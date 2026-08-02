import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, MessageCircle, Navigation, Phone, Truck } from "lucide-react";
import { ContactCard } from "@/components/ContactCard";
import { JsonLd } from "@/components/JsonLd";
import {
  business,
  mapsSearchHref,
  whatsappHref,
  whatsappMessages
} from "@/data/business";
import { createPageMetadata } from "@/data/metadata";
import { breadcrumbSchema, pageGraph, webPageSchema } from "@/data/schema";
import { primarySeoKeywords } from "@/data/seo-content";

const title = "Contact | Innov-Pressing Douala";
const description =
  "Contactez Innov-Pressing à Akwa Nord, Douala : téléphone, WhatsApp, itinéraire et collecte de linge.";

export const metadata: Metadata = {
  ...createPageMetadata({
    title,
    description,
    path: "/contact",
    keywords: primarySeoKeywords
  }),
  description
};

const breadcrumbs = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Contact", path: "/contact" }
]);

const schema = pageGraph(
  webPageSchema({
    path: "/contact",
    title,
    description,
    breadcrumbs: [
      { name: "Accueil", path: "/" },
      { name: "Contact", path: "/contact" }
    ]
  }),
  breadcrumbs
);

export default function ContactPage() {
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    business.mapsQuery
  )}&output=embed`;
  // TODO: remplacer par les coordonnées GPS exactes du pressing.

  return (
    <main id="contenu">
      <JsonLd id="contact-schema" data={schema} />
      <section className="bg-brand-mist py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black text-brand-navy sm:text-5xl">
            Contactez Innov-Pressing
          </h1>
          <p className="section-copy mt-5">
            Appelez-nous, écrivez sur WhatsApp ou demandez une collecte de linge à domicile dans
            Douala, Akwa Nord et quartiers proches.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="surface p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-brand-ink">Coordonnées</h2>
            <div className="mt-6 grid gap-5 text-slate-700">
              <p className="flex gap-3 leading-7">
                <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand-orange" />
                <span>
                  <strong className="block text-brand-ink">Adresse</strong>
                  {business.address}.
                </span>
              </p>
              <a className="flex gap-3 leading-7 transition hover:text-brand-blue" href={business.primaryPhoneHref}>
                <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand-orange" />
                <span>
                  <strong className="block text-brand-ink">Téléphone principal</strong>
                  {business.primaryPhone}
                </span>
              </a>
              <a className="flex gap-3 leading-7 transition hover:text-brand-blue" href={business.secondaryPhoneHref}>
                <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand-orange" />
                <span>
                  <strong className="block text-brand-ink">Téléphone secondaire</strong>
                  {business.secondaryPhone}
                </span>
              </a>
              <div className="flex gap-3 leading-7">
                <MessageCircle
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 text-brand-orange"
                />
                <span>
                  <strong className="block text-brand-ink">WhatsApp</strong>
                  <span className="mt-1 flex flex-wrap gap-2">
                    <a
                      href={whatsappHref(whatsappMessages.information)}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md bg-brand-sky px-3 py-1 text-sm font-semibold text-brand-navy transition hover:text-brand-blue"
                    >
                      {business.primaryPhone}
                    </a>
                    <a
                      href={whatsappHref(
                        whatsappMessages.information,
                        business.secondaryWhatsApp
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md bg-brand-sky px-3 py-1 text-sm font-semibold text-brand-navy transition hover:text-brand-blue"
                    >
                      {business.secondaryPhone}
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <ContactCard
              title="Appeler le pressing"
              description="Parlez directement avec l’équipe pour confirmer un besoin ou une disponibilité."
              href={business.primaryPhoneHref}
              label="Appeler maintenant"
              icon={Phone}
            />
            <ContactCard
              title="Écrire sur WhatsApp"
              description="Envoyez un message rapide au numéro principal WhatsApp."
              href={whatsappHref(whatsappMessages.information)}
              label="Ouvrir WhatsApp"
              icon={MessageCircle}
              external
            />
            <ContactCard
              title="Obtenir l’itinéraire"
              description="Ouvrez Google Maps avec une recherche basée sur Pharmacie Akwa Nord."
              href={mapsSearchHref()}
              label="Voir sur Google Maps"
              icon={Navigation}
              external
            />
            <ContactCard
              title="Demander une collecte"
              description="Programmez un ramassage de linge à domicile dans Douala."
              href={whatsappHref(whatsappMessages.pickup)}
              label="Demander une collecte"
              icon={Truck}
              external
            />
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container-page">
          <div className="overflow-hidden rounded-lg border border-slate-200 shadow-card">
            <iframe
              title="Carte Google Maps - Pharmacie Akwa Nord, Douala"
              src={mapsUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0 sm:h-[460px]"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-mist py-14">
        <div className="container-page flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-brand-ink">Avant de nous contacter</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Vous pouvez consulter les services, la FAQ ou préparer directement votre demande de
              collecte de linge.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="button-secondary">
              Services
            </Link>
            <Link href="/faq" className="button-secondary">
              FAQ
            </Link>
            <Link href="/collecte-et-livraison" className="button-primary">
              Collecte
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
