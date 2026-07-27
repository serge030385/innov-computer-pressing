import Image from "next/image";

type LogoProps = {
  compact?: boolean;
  tone?: "light" | "dark";
};

export function Logo({ compact = false, tone = "light" }: LogoProps) {
  const nameClass = tone === "dark" ? "text-white" : "text-brand-navy";

  return (
    <span className="flex items-center gap-3">
      <span className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-brand-blue/15 bg-white p-1.5 shadow-sm">
        <Image
          src="/images/logo-innov-pressing.png"
          alt="Logo Innov-Pressing"
          width={1024}
          height={1024}
          sizes="56px"
          className="h-full w-full object-contain"
          priority
        />
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className={`block text-sm font-black uppercase tracking-normal ${nameClass}`}>
            Innov-
          </span>
          <span className="block text-sm font-black uppercase tracking-normal text-brand-orange">
            Pressing
          </span>
        </span>
      )}
    </span>
  );
}
