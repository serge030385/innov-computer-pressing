import {
  Home,
  LucideIcon,
  MapPinned,
  PackageCheck,
  Scale,
  Shirt,
  Sparkles,
  Timer,
  Truck
} from "lucide-react";
import { whatsappHref } from "@/data/business";
import { Service } from "@/data/services";

const icons: Record<Service["icon"], LucideIcon> = {
  shirt: Shirt,
  scale: Scale,
  sparkles: Sparkles,
  package: PackageCheck,
  timer: Timer,
  home: Home,
  truck: Truck,
  map: MapPinned
};

type ServiceCardProps = {
  service: Service;
  withAction?: boolean;
};

export function ServiceCard({ service, withAction = false }: ServiceCardProps) {
  const Icon = icons[service.icon];

  return (
    <article className="surface group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="flex size-12 items-center justify-center rounded-lg bg-brand-sky text-brand-navy">
        <Icon aria-hidden="true" className="size-6" />
      </div>
      <h3 className="mt-5 text-xl font-bold text-brand-ink">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{service.description}</p>
      {withAction && (
        <a
          href={whatsappHref(service.requestMessage)}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md border border-brand-blue/20 px-4 py-2 text-sm font-bold text-brand-navy transition hover:border-brand-orange hover:text-brand-orange focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-100"
        >
          Demander une information
        </a>
      )}
    </article>
  );
}
