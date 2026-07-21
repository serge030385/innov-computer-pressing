import { formatPrice } from "../utils/whatsapp";
import { interpolate } from "../i18n/translations";

export default function Cart({
  items,
  language,
  onCheckout,
  onRemove,
  onUpdateQuantity,
  t,
  total,
}) {
  const isEmpty = items.length === 0;

  return (
    <section id="panier" className="bg-neutral-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-brand-green">
            {t.cart.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-black text-brand-ink">
            {t.cart.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
            {t.cart.helper}
          </p>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-soft">
          {isEmpty ? (
            <div className="py-8 text-center">
              <p className="text-lg font-black text-brand-ink">
                {t.cart.emptyTitle}
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                {t.cart.emptyBody}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg border border-neutral-200 p-4"
                >
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt=""
                      className="h-16 w-16 shrink-0 rounded-lg object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-black leading-5 text-brand-ink">
                            {item.displayName}
                          </h3>
                          <p className="mt-1 text-sm font-bold text-brand-green">
                            {formatPrice(item.price, language)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemove(item.id)}
                          className="rounded-lg px-3 py-2 text-sm font-black text-red-700 transition hover:bg-red-50 focus:outline-none focus:ring-4 focus:ring-red-100"
                        >
                          {t.cart.remove}
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex h-11 items-center rounded-lg border border-neutral-200">
                          <button
                            type="button"
                            aria-label={interpolate(t.cart.decrease, {
                              name: item.displayName,
                            })}
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity - 1)
                            }
                            className="h-11 w-11 text-lg font-black text-brand-ink transition hover:bg-neutral-100 focus:outline-none focus:ring-4 focus:ring-orange-100"
                          >
                            -
                          </button>
                          <input
                            aria-label={interpolate(t.cart.quantity, {
                              name: item.displayName,
                            })}
                            min="1"
                            type="number"
                            value={item.quantity}
                            onChange={(event) =>
                              onUpdateQuantity(item.id, event.target.value)
                            }
                            className="h-11 w-14 border-x border-neutral-200 text-center font-black outline-none"
                          />
                          <button
                            type="button"
                            aria-label={interpolate(t.cart.increase, {
                              name: item.displayName,
                            })}
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity + 1)
                            }
                            className="h-11 w-11 text-lg font-black text-brand-ink transition hover:bg-neutral-100 focus:outline-none focus:ring-4 focus:ring-orange-100"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-sm font-black text-brand-ink">
                          {formatPrice(item.subtotal, language)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 border-t border-neutral-200 pt-5">
            <div className="flex items-center justify-between text-lg font-black text-brand-ink">
              <span>{t.cart.total}</span>
              <span>{formatPrice(total, language)}</span>
            </div>
            <button
              type="button"
              disabled={isEmpty}
              onClick={onCheckout}
              className={`mt-5 min-h-14 w-full rounded-lg px-5 py-4 text-base font-black transition focus:outline-none focus:ring-4 ${
                isEmpty
                  ? "cursor-not-allowed bg-neutral-200 text-neutral-500"
                  : "bg-brand-green text-white hover:bg-green-800 focus:ring-green-200"
              }`}
            >
              {t.cart.checkout}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
