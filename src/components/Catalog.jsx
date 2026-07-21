import { interpolate } from "../i18n/translations";
import { CATEGORY_KEYS, STOCK_STATUS } from "../utils/constants";
import { formatPrice } from "../utils/whatsapp";

const statusStyles = {
  [STOCK_STATUS.AVAILABLE]: "bg-green-100 text-green-800 ring-green-200",
  [STOCK_STATUS.LIMITED]: "bg-orange-100 text-orange-800 ring-orange-200",
  [STOCK_STATUS.OUT]: "bg-neutral-200 text-neutral-700 ring-neutral-300",
};

export default function Catalog({
  activeCategory,
  filteredProducts,
  onAddToCart,
  onCategoryChange,
  onSearchChange,
  language,
  search,
  t,
}) {
  return (
    <section id="catalogue" className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-brand-green">
              {t.catalog.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-black text-brand-ink">
              {t.catalog.title}
            </h2>
          </div>

          <label className="block w-full md:max-w-sm">
            <span className="mb-2 block text-sm font-bold text-neutral-700">
              {t.catalog.searchLabel}
            </span>
            <input
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              type="search"
              placeholder={t.catalog.searchPlaceholder}
              className="h-14 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-base text-brand-ink outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
            />
          </label>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {CATEGORY_KEYS.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`min-h-11 shrink-0 rounded-full px-4 py-2 text-sm font-black transition focus:outline-none focus:ring-4 focus:ring-orange-100 ${
                  isActive
                    ? "bg-brand-ink text-white"
                    : "bg-brand-cream text-brand-ink hover:bg-orange-100"
                }`}
              >
                {t.categories[category]}
              </button>
            );
          })}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => {
              const isOut = product.stock === STOCK_STATUS.OUT;

              return (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-soft transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
                >
                  <img
                    src={product.image}
                    alt={interpolate(t.catalog.imageAlt, {
                      name: product.displayName,
                    })}
                    className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="flex min-h-[290px] flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-black leading-6 text-brand-ink">
                        {product.displayName}
                      </h3>
                      <span className="shrink-0 rounded-full bg-brand-green px-3 py-1 text-sm font-black text-white">
                        {formatPrice(product.price, language)}
                      </span>
                    </div>

                    <p className="mt-3 min-h-[52px] text-sm leading-6 text-neutral-600">
                      {product.displayDescription}
                    </p>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-black ring-1 ${
                          statusStyles[product.stock]
                        }`}
                      >
                        {t.stock[product.stock]}
                      </span>
                      <span className="text-xs font-bold text-neutral-500">
                        {t.categories[product.category]}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onAddToCart(product)}
                      disabled={isOut}
                      className={`mt-auto min-h-12 rounded-lg px-4 py-3 text-base font-black transition focus:outline-none focus:ring-4 ${
                        isOut
                          ? "cursor-not-allowed bg-neutral-200 text-neutral-500"
                          : "bg-brand-orange text-white hover:bg-brand-orangeDark focus:ring-orange-200"
                      }`}
                    >
                      {isOut ? t.catalog.unavailable : t.catalog.addToCart}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 rounded-lg border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
            <p className="text-lg font-black text-brand-ink">
              {t.catalog.noResultsTitle}
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              {t.catalog.noResultsBody}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
