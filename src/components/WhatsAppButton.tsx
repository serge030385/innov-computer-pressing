import { MessageCircle } from "lucide-react";
import { whatsappHref, whatsappMessages } from "@/data/business";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref(whatsappMessages.information)}
      target="_blank"
      rel="noreferrer"
      aria-label="Écrire à Innov-Pressing sur WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#128C7E] px-4 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-[#0F756B] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200 sm:bottom-6 sm:right-6"
    >
      <MessageCircle aria-hidden="true" className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
