import { LucideIcon } from "lucide-react";

type ContactCardProps = {
  title: string;
  description: string;
  href: string;
  label: string;
  icon: LucideIcon;
  external?: boolean;
};

export function ContactCard({
  title,
  description,
  href,
  label,
  icon: Icon,
  external = false
}: ContactCardProps) {
  return (
    <article className="surface p-6">
      <div className="flex size-12 items-center justify-center rounded-lg bg-brand-sky text-brand-navy">
        <Icon aria-hidden="true" className="size-6" />
      </div>
      <h2 className="mt-5 text-xl font-bold text-brand-ink">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-brand-navy px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-blue focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
      >
        {label}
      </a>
    </article>
  );
}
