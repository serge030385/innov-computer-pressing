export type ServiceIcon =
  | "shirt"
  | "scale"
  | "sparkles"
  | "package"
  | "timer"
  | "home"
  | "truck"
  | "map";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  requestMessage: string;
};

export const services: Service[] = [
  {
    id: "lavage-piece",
    title: "Lavage à la pièce",
    description:
      "Confiez-nous vos chemises, pantalons, robes, costumes et autres vêtements pour un entretien adapté.",
    icon: "shirt",
    requestMessage:
      "Bonjour Innov Computer Pressing, je souhaite obtenir des informations sur le lavage à la pièce."
  },
  {
    id: "lavage-poids",
    title: "Lavage au poids",
    description:
      "Une solution pratique et économique pour le nettoyage de plusieurs vêtements.",
    icon: "scale",
    requestMessage:
      "Bonjour Innov Computer Pressing, je souhaite obtenir des informations sur le lavage au poids."
  },
  {
    id: "lavage-repassage",
    title: "Lavage et repassage",
    description:
      "Vos vêtements sont lavés, repassés et soigneusement préparés avant leur restitution.",
    icon: "sparkles",
    requestMessage:
      "Bonjour Innov Computer Pressing, je souhaite obtenir des informations sur le lavage et repassage."
  },
  {
    id: "laver-emporter",
    title: "Laver et emporter",
    description:
      "Déposez votre linge et récupérez-le propre dans les meilleurs délais.",
    icon: "package",
    requestMessage:
      "Bonjour Innov Computer Pressing, je souhaite obtenir des informations sur le service laver et emporter."
  },
  {
    id: "express",
    title: "Lavage express en 2 heures",
    description:
      "Un service rapide pour vos besoins urgents, selon la nature et la quantité du linge.",
    icon: "timer",
    requestMessage:
      "Bonjour Innov Computer Pressing, je souhaite savoir si le service express en 2 heures est disponible aujourd’hui."
  },
  {
    id: "collecte",
    title: "Collecte à domicile",
    description: "Nous récupérons votre linge directement à votre domicile.",
    icon: "home",
    requestMessage:
      "Bonjour Innov Computer Pressing, je souhaite demander une collecte de linge à domicile."
  },
  {
    id: "livraison",
    title: "Livraison à domicile",
    description:
      "Une fois votre linge prêt, nous vous le livrons à l’adresse convenue.",
    icon: "truck",
    requestMessage:
      "Bonjour Innov Computer Pressing, je souhaite obtenir des informations sur la livraison à domicile."
  },
  {
    id: "ramassage-douala",
    title: "Ramassage dans Douala",
    description:
      "Notre service de ramassage couvre différents quartiers de Douala.",
    icon: "map",
    requestMessage:
      "Bonjour Innov Computer Pressing, je souhaite savoir si le ramassage est disponible dans mon quartier."
  }
];

export const pickupServiceOptions = [
  "Lavage à la pièce",
  "Lavage au poids",
  "Lavage et repassage",
  "Lavage express",
  "Collecte et livraison",
  "Autre demande"
] as const;
