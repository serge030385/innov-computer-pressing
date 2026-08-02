export const business = {
  name: "Innov-Pressing",
  displayName: "INNOV-PRESSING",
  slogan: "Votre linge, notre priorité.",
  subtitle: "Confiez-nous vos vêtements, nous en prendrons soin !",
  address:
    "Akwa Nord, à quelques mètres de la pharmacie Akwa Nord, Douala, Cameroun",
  shortAddress: "Akwa Nord, Douala",
  city: "Douala",
  country: "Cameroun",
  primaryPhone: "+237 652 73 01 36",
  secondaryPhone: "+237 694 28 68 06",
  primaryPhoneHref: "tel:+237652730136",
  secondaryPhoneHref: "tel:+237694286806",
  primaryWhatsApp: "237652730136",
  secondaryWhatsApp: "237694286806",
  mapsQuery: "Pharmacie Akwa Nord, Douala, Cameroun",
  websiteUrl: "https://innov-pressing.com"
} as const;

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/collecte-et-livraison", label: "Collecte" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" }
] as const;

export const whatsappMessages = {
  pickup:
    "Bonjour Innov-Pressing, je souhaite demander une collecte de linge à domicile.",
  schedule:
    "Bonjour Innov-Pressing, je souhaite programmer une collecte de linge. Voici mon quartier et mon adresse :",
  express:
    "Bonjour Innov-Pressing, je souhaite savoir si le service express en 2 heures est disponible aujourd’hui.",
  information:
    "Bonjour Innov-Pressing, je souhaite obtenir des informations sur vos services."
} as const;

export function whatsappHref(
  message: string,
  phone: string = business.primaryWhatsApp
) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function mapsSearchHref() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    business.mapsQuery
  )}`;
}

export const seo = {
  title: "Innov-Pressing | Pressing à Douala – Collecte & Livraison",
  description:
    "Innov-Pressing propose pressing à Douala, lavage au poids, repassage, collecte et livraison à Akwa Nord et quartiers proches.",
  keywords: [
    "pressing Douala",
    "pressing Akwa",
    "pressing Akwa Nord",
    "laverie Douala",
    "pressing Cameroun",
    "nettoyage vêtements Douala",
    "lavage au poids Douala",
    "lavage à la pièce Douala",
    "pressing livraison Douala",
    "collecte linge Douala",
    "pressing express Douala",
    "repassage Douala",
    "nettoyage rideaux Douala",
    "nettoyage couettes Douala",
    "Innov-Pressing"
  ]
} as const;
