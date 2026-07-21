import { useMemo, useState } from "react";
import { formatPrice } from "../utils/whatsapp";

const initialForm = {
  customerName: "",
  whatsapp: "",
  fulfillmentMode: "pickup",
  address: "",
  preferredTime: "",
  comment: "",
  paymentMode: "payOnPickup",
};

const fulfillmentOptions = ["pickup", "delivery"];
const paymentOptions = ["payOnDelivery", "payOnPickup"];

export default function CheckoutForm({ items, language, onSubmit, t, total }) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  const isDelivery = form.fulfillmentMode === "delivery";

  const canSubmit = useMemo(
    () =>
      items.length > 0 &&
      form.customerName.trim() &&
      form.whatsapp.trim() &&
      form.preferredTime.trim() &&
      (!isDelivery || form.address.trim()),
    [form, isDelivery, items.length]
  );

  function updateField(field, value) {
    setForm((current) => {
      const next = { ...current, [field]: value };

      if (field === "fulfillmentMode" && value === "pickup") {
        next.address = "";
        next.paymentMode = "payOnPickup";
      }

      if (field === "fulfillmentMode" && value === "delivery") {
        next.paymentMode = "payOnDelivery";
      }

      return next;
    });
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!canSubmit) {
      setError(t.checkout.requiredError);
      return;
    }

    onSubmit(form);
  }

  return (
    <section id="commande" className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_380px]">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-brand-green">
            {t.checkout.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-black text-brand-ink">
            {t.checkout.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
            {t.checkout.helper}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <Field label={t.checkout.fullName} required>
              <input
                aria-label={t.checkout.fullName}
                value={form.customerName}
                onChange={(event) =>
                  updateField("customerName", event.target.value)
                }
                className="form-input"
                placeholder={t.checkout.fullNamePlaceholder}
                type="text"
              />
            </Field>

            <Field label={t.checkout.whatsapp} required>
              <input
                aria-label={t.checkout.whatsapp}
                value={form.whatsapp}
                onChange={(event) => updateField("whatsapp", event.target.value)}
                className="form-input"
                placeholder="+90..."
                type="tel"
              />
            </Field>

            <Field label={t.checkout.mode} required>
              <div className="grid gap-3 sm:grid-cols-2">
                {fulfillmentOptions.map((mode) => (
                  <RadioCard
                    checked={form.fulfillmentMode === mode}
                    key={mode}
                    label={t.checkout.modes[mode]}
                    name="fulfillmentMode"
                    onChange={() => updateField("fulfillmentMode", mode)}
                    value={mode}
                  />
                ))}
              </div>
            </Field>

            {isDelivery && (
              <Field label={t.checkout.address} required>
                <textarea
                  aria-label={t.checkout.address}
                  value={form.address}
                  onChange={(event) => updateField("address", event.target.value)}
                  className="form-input min-h-24 resize-y"
                  placeholder={t.checkout.addressPlaceholder}
                />
              </Field>
            )}

            <Field label={t.checkout.preferredTime} required>
              <input
                aria-label={t.checkout.preferredTime}
                value={form.preferredTime}
                onChange={(event) =>
                  updateField("preferredTime", event.target.value)
                }
                className="form-input"
                inputMode="numeric"
                placeholder={t.checkout.preferredTimePlaceholder}
                type="text"
              />
            </Field>

            <Field label={t.checkout.comment}>
              <textarea
                aria-label={t.checkout.comment}
                value={form.comment}
                onChange={(event) => updateField("comment", event.target.value)}
                className="form-input min-h-24 resize-y"
                placeholder={t.checkout.commentPlaceholder}
              />
            </Field>

            <Field label={t.checkout.payment} required>
              <div className="grid gap-3 sm:grid-cols-2">
                {paymentOptions.map((payment) => (
                  <RadioCard
                    checked={form.paymentMode === payment}
                    key={payment}
                    label={t.checkout.payments[payment]}
                    name="paymentMode"
                    onChange={() => updateField("paymentMode", payment)}
                    value={payment}
                  />
                ))}
              </div>
            </Field>

            {error && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="min-h-14 w-full rounded-lg bg-brand-orange px-5 py-4 text-base font-black text-white transition hover:bg-brand-orangeDark focus:outline-none focus:ring-4 focus:ring-orange-200 disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-500"
              disabled={!canSubmit}
            >
              {t.checkout.submit}
            </button>
          </form>
        </div>

        <aside className="h-fit rounded-lg border border-neutral-200 bg-neutral-50 p-5">
          <h3 className="text-lg font-black text-brand-ink">
            {t.checkout.quickSummary}
          </h3>
          <div className="mt-4 space-y-3">
            {items.length === 0 ? (
              <p className="text-sm text-neutral-600">
                {t.checkout.addBeforeOrdering}
              </p>
            ) : (
              items.map((item) => (
                <div
                  className="flex justify-between gap-3 text-sm"
                  key={item.id}
                >
                  <span className="font-bold text-neutral-700">
                    {item.displayName} x{item.quantity}
                  </span>
                  <span className="font-black text-brand-ink">
                    {formatPrice(item.subtotal, language)}
                  </span>
                </div>
              ))
            )}
          </div>
          <div className="mt-5 border-t border-neutral-200 pt-4">
            <div className="flex justify-between text-base font-black text-brand-ink">
              <span>{t.cart.total}</span>
              <span>{formatPrice(total, language)}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({ children, label, required = false }) {
  return (
    <div className="block">
      <span className="mb-2 block text-sm font-black text-neutral-800">
        {label}
        {required && <span className="text-brand-orange"> *</span>}
      </span>
      {children}
    </div>
  );
}

function RadioCard({ checked, label, name, onChange, value }) {
  return (
    <label
      className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm font-black transition ${
        checked
          ? "border-brand-green bg-green-50 text-brand-green"
          : "border-neutral-200 bg-white text-neutral-700 hover:border-orange-200"
      }`}
    >
      <input
        aria-label={label}
        checked={checked}
        className="h-4 w-4 accent-brand-green"
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
      />
      <span>{label}</span>
    </label>
  );
}
