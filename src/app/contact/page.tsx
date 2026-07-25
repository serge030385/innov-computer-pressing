import type { Metadata } from "next";
import { MapPin, MessageCircle, Navigation, Phone, Truck } from "lucide-react";
import { ContactCard } from "@/components/ContactCard";
import {
  business,
  mapsSearchHref,
  whatsappHref,
  whatsappMessages
} from "@/data/business";
import { createPageMetadata } from "@/data/metadata";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Contact",
    description:
      "Contactez Innov Computer Pressing à Akwa Nord, Douala. Appel, WhatsApp, itinéraire et demande de collecte de linge.",
    path: "/contact"
  }),
  title: "Contact",
  description:
    "Contactez Innov Computer Pressing à Akwa Nord, Douala. Appel, WhatsApp, itinéraire et demande de collecte de linge."
};

export default function ContactPage() {
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    business.mapsQuery
  )}&output=embed`;
  // TODO: remplacer par les coordonnées GPS exactes du pressing.

  return (
    <main>
      <section className="bg-brand-mist py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black text-brand-navy sm:text-5xl">
            Contactez Innov Computer Pressing
          </h1>
          <p className="section-copy mt-5">
            Appelez-nous, écrivez sur WhatsApp ou demandez une collecte de linge à domicile dans
            Douala.
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
    </main>
  );
}
