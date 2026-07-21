"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  business,
  navLinks,
  whatsappHref,
  whatsappMessages
} from "@/data/business";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center rounded-md border border-slate-200 bg-white text-brand-navy shadow-sm transition hover:border-brand-blue focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
      >
        {open ? (
          <X aria-hidden="true" size={22} />
        ) : (
          <Menu aria-hidden="true" size={22} />
        )}
      </button>

      {open && (
        <div className="absolute left-4 right-4 top-[76px] rounded-lg border border-slate-200 bg-white p-3 shadow-soft">
          <nav aria-label="Menu mobile" className="grid gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-brand-sky text-brand-navy"
                      : "text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <a
            href={whatsappHref(whatsappMessages.pickup)}
            target="_blank"
            rel="noreferrer"
            className="button-primary mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            Demander une collecte
          </a>
          <a
            href={business.primaryPhoneHref}
            className="mt-2 flex min-h-11 items-center justify-center rounded-md text-sm font-semibold text-brand-navy"
          >
            {business.primaryPhone}
          </a>
        </div>
      )}
    </div>
  );
}
