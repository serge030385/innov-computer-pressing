import { WHATSAPP_PHONE } from "./constants";
import { DEFAULT_LANGUAGE, getDictionary } from "../i18n/translations";

export function formatPrice(value, language = DEFAULT_LANGUAGE) {
  const dictionary = getDictionary(language);
  const amount = new Intl.NumberFormat(dictionary.locale, {
    maximumFractionDigits: 0,
  }).format(value);

  return `${amount} TRY`;
}

export function buildWhatsAppMessage(order, language = order.language) {
  const activeLanguage = language || DEFAULT_LANGUAGE;
  const dictionary = getDictionary(activeLanguage);
  const labels = dictionary.whatsapp.labels;
  const products = order.items
    .map(
      (item) =>
        `- ${item.name} x${item.quantity} (${formatPrice(
          item.subtotal,
          activeLanguage
        )})`
    )
    .join("\n");

  const addressLine =
    order.fulfillmentMode === "delivery"
      ? `${labels.address}: ${order.address || dictionary.whatsapp.noAddress}`
      : `${labels.address}: ${dictionary.whatsapp.pickupAddress}`;

  return [
    dictionary.whatsapp.greeting,
    "",
    `${labels.name}: ${order.customerName}`,
    `${labels.phone}: ${order.whatsapp}`,
    "",
    `${labels.products}:`,
    products,
    "",
    `${labels.total}: ${formatPrice(order.total, activeLanguage)}`,
    `${labels.mode}: ${dictionary.checkout.modes[order.fulfillmentMode]}`,
    addressLine,
    `${labels.preferredTime}: ${order.preferredTime}`,
    `${labels.comment}: ${order.comment || dictionary.whatsapp.noComment}`,
    `${labels.payment}: ${dictionary.checkout.payments[order.paymentMode]}`,
  ].join("\n");
}

export function buildWhatsAppLink(order, language = order.language) {
  const message = encodeURIComponent(buildWhatsAppMessage(order, language));
  return `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
}
