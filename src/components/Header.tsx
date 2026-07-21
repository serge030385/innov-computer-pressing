"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  business,
  navLinks,
  whatsappHref,
  whatsappMessages
} from "@/data/business";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="container-page relative flex min-h-[76px] items-center justify-between gap-4">
        <Link href="/" aria-label={`${business.name} - accueil`} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
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

        <div className="hidden items-center gap-3 lg:flex">
          <a href={business.primaryPhoneHref} className="text-sm font-bold text-brand-navy">
            {business.primaryPhone}
          </a>
          <a
            href={whatsappHref(whatsappMessages.pickup)}
            target="_blank"
            rel="noreferrer"
            className="button-primary"
          >
            Demander une collecte
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
