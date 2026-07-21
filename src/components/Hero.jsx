import { LANGUAGES } from "../i18n/translations";

export default function Hero({ cartCount, language, onLanguageChange, t }) {
  return (
    <section className="pattern-band border-b border-orange-100">
      <div className="mx-auto flex min-h-[520px] max-w-6xl flex-col justify-center px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-14 flex flex-wrap items-center justify-between gap-4">
          <a href="#accueil" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-ink text-lg font-black text-white">
              FS
            </span>
            <span>
              <span className="block text-lg font-black leading-tight text-brand-ink">
                FatouShop
              </span>
              <span className="block text-sm font-bold text-brand-green">
                Express Izmir
              </span>
            </span>
          </a>

          <div className="flex items-center gap-2">
            <div
              aria-label={t.nav.language}
              className="flex rounded-full bg-white p-1 shadow-soft ring-1 ring-black/5"
              role="group"
            >
              {LANGUAGES.map((option) => {
                const isActive = language === option.code;

                return (
                  <button
                    aria-pressed={isActive}
                    className={`h-10 min-w-10 rounded-full px-3 text-sm font-black transition focus:outline-none focus:ring-4 focus:ring-orange-100 ${
                      isActive
                        ? "bg-brand-orange text-white"
                        : "text-neutral-700 hover:bg-orange-50"
                    }`}
                    key={option.code}
                    onClick={() => onLanguageChange(option.code)}
                    title={option.name}
                    type="button"
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            <a
              href="#panier"
              className="rounded-full bg-white px-4 py-3 text-sm font-black text-brand-ink shadow-soft ring-1 ring-black/5"
            >
              {t.nav.cart} ({cartCount})
            </a>
          </div>
        </header>

        <div id="accueil" className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-brand-green ring-1 ring-green-100">
            {t.hero.eyebrow}
          </p>
          <h1 className="text-4xl font-black leading-[1.05] tracking-normal text-brand-ink sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-bold leading-8 text-neutral-900 sm:text-2xl">
            {t.hero.slogan}
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-neutral-700">
            {t.hero.reassurance}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#catalogue"
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-orange px-6 py-4 text-base font-black text-white shadow-soft transition hover:bg-brand-orangeDark focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              {t.hero.viewProducts}
            </a>
            <a
              href="#commande"
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-ink px-6 py-4 text-base font-black text-white transition hover:bg-black focus:outline-none focus:ring-4 focus:ring-neutral-300"
            >
              {t.hero.orderNow}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
