import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { business, navLinks } from "@/data/business";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand-navy text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label={`${business.name} - accueil`} className="inline-flex">
            <Logo tone="dark" />
          </Link>
          <p className="mt-5 max-w-sm text-lg font-semibold">{business.slogan}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/72">
            Services de pressing, lavage, repassage, collecte et livraison dans Douala.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold">Liens rapides</h2>
          <nav className="mt-4 grid gap-2" aria-label="Liens du pied de page">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/72 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-base font-bold">Coordonnées</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/72">
            <p className="flex gap-2">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-orange" />
              {business.shortAddress}
            </p>
            <a className="flex gap-2 transition hover:text-white" href={business.primaryPhoneHref}>
              <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-orange" />
              {business.primaryPhone}
            </a>
            <a className="flex gap-2 transition hover:text-white" href={business.secondaryPhoneHref}>
              <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-orange" />
              {business.secondaryPhone}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <p className="container-page text-sm text-white/62">
          © 2026 Innov-Pressing. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
