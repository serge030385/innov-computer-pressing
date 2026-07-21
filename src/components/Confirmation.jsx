import { buildWhatsAppLink, formatPrice } from "../utils/whatsapp";

export default function Confirmation({ language, onNewOrder, order, t }) {
  if (!order) {
    return null;
  }

  const modeLabel = t.checkout.modes[order.fulfillmentMode];
  const paymentLabel = t.checkout.payments[order.paymentMode];

  return (
    <section
      id="confirmation"
      className="bg-brand-ink px-4 py-12 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-black uppercase tracking-normal text-orange-300">
          {t.confirmation.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-black">{t.confirmation.title}</h2>
        <p className="mt-3 text-sm leading-6 text-neutral-300">
          {t.confirmation.helper}
        </p>

        <div className="mt-8 rounded-lg bg-white p-5 text-brand-ink">
          <div className="grid gap-4 sm:grid-cols-2">
            <SummaryLine
              label={t.confirmation.customer}
              value={order.customerName}
            />
            <SummaryLine label={t.confirmation.whatsapp} value={order.whatsapp} />
            <SummaryLine label={t.confirmation.mode} value={modeLabel} />
            <SummaryLine
              label={t.confirmation.preferredTime}
              value={order.preferredTime}
            />
            <SummaryLine label={t.confirmation.payment} value={paymentLabel} />
            {order.fulfillmentMode === "delivery" && (
              <SummaryLine label={t.confirmation.address} value={order.address} />
            )}
          </div>

          <div className="mt-6 border-t border-neutral-200 pt-5">
            <h3 className="font-black">{t.confirmation.products}</h3>
            <div className="mt-3 space-y-3">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between gap-3 rounded-lg bg-neutral-50 px-4 py-3 text-sm"
                >
                  <span className="font-bold">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="font-black">
                    {formatPrice(item.subtotal, language)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {order.comment && (
            <div className="mt-5 rounded-lg bg-orange-50 p-4">
              <p className="text-sm font-black text-brand-orange">
                {t.confirmation.comment}
              </p>
              <p className="mt-1 text-sm text-neutral-700">{order.comment}</p>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-5 text-xl font-black">
            <span>{t.confirmation.total}</span>
            <span>{formatPrice(order.total, language)}</span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={buildWhatsAppLink(order, language)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-green px-5 py-4 text-base font-black text-white transition hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-200"
            >
              {t.confirmation.sendWhatsApp}
            </a>
            <button
              type="button"
              onClick={onNewOrder}
              className="min-h-14 rounded-lg bg-brand-ink px-5 py-4 text-base font-black text-white transition hover:bg-black focus:outline-none focus:ring-4 focus:ring-neutral-300"
            >
              {t.confirmation.newOrder}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryLine({ label, value }) {
  return (
    <div className="rounded-lg bg-neutral-50 px-4 py-3">
      <p className="text-xs font-black uppercase tracking-normal text-neutral-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-black text-brand-ink">{value}</p>
    </div>
  );
}
