export const business = {
  name: "Innov Computer Pressing",
  displayName: "INNOV COMPUTER PRESSING",
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
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://innov-computer-pressing.vercel.app"
} as const;

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Nos services" },
  { href: "/collecte-et-livraison", label: "Collecte et livraison" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" }
] as const;

export const whatsappMessages = {
  pickup:
    "Bonjour Innov Computer Pressing, je souhaite demander une collecte de linge à domicile.",
  schedule:
    "Bonjour Innov Computer Pressing, je souhaite programmer une collecte de linge. Voici mon quartier et mon adresse :",
  express:
    "Bonjour Innov Computer Pressing, je souhaite savoir si le service express en 2 heures est disponible aujourd’hui.",
  information:
    "Bonjour Innov Computer Pressing, je souhaite obtenir des informations sur vos services."
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
  title: "Innov Computer Pressing | Pressing, collecte et livraison à Douala",
  description:
    "Innov Computer Pressing propose le lavage à la pièce, le lavage au poids, le lavage express en 2 heures, la collecte et la livraison de linge à domicile dans Douala.",
  keywords: [
    "pressing Douala",
    "pressing Akwa Nord",
    "laverie Douala",
    "lavage vêtements Douala",
    "collecte linge Douala",
    "livraison linge Douala",
    "lavage express Douala",
    "Innov Computer Pressing"
  ]
} as const;
