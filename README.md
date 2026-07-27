# Innov-Pressing

Site officiel d’Innov-Pressing, pressing situé à Akwa Nord, Douala. Le projet est construit avec Next.js App Router, TypeScript, Tailwind CSS et Lucide React.

## Installation

```bash
npm install
npm run dev
```

Le site local est ensuite disponible sur l’URL affichée par Next.js.

## Vérification

```bash
npm run lint
npm run build
```

## Déploiement sur Vercel

1. Connecter le dépôt à Vercel.
2. Garder les commandes par défaut détectées par Vercel :
   - Build command : `npm run build`
   - Install command : `npm install`
3. Utiliser le domaine définitif du site : `https://innov-pressing.com`.
4. Déployer.

## Modifier les informations du pressing

Toutes les coordonnées principales sont centralisées dans `src/data/business.ts` :

- nom de l’entreprise ;
- slogan ;
- adresse ;
- téléphones ;
- numéros WhatsApp ;
- recherche Google Maps ;
- URL du site : `https://innov-pressing.com`.

## Remplacer le logo et les images

- Logo : placer le logo officiel ici : `public/images/logo-innov-pressing.png`.
- Image principale : remplacer `public/images/pressing/pressing-hero.png` par une photo réelle du pressing, de vêtements propres ou d’un espace de travail.
- Image collecte/livraison : remplacer `public/images/pressing/laundry-delivery.png` par une photo réelle du véhicule, du ramassage ou de la livraison du pressing.
- Google Maps : la page contact utilise une recherche basée sur `Pharmacie Akwa Nord, Douala, Cameroun`. Remplacer `mapsQuery` dans `src/data/business.ts` lorsque les coordonnées GPS exactes du pressing sont disponibles.
- Numéros de téléphone : modifier `primaryPhone`, `secondaryPhone`, `primaryWhatsApp` et `secondaryWhatsApp` dans `src/data/business.ts`.

## Formulaire de collecte

Le formulaire de la page “Collecte et livraison” ne stocke aucune donnée. Il valide les champs obligatoires, prépare un message WhatsApp structuré et ouvre la conversation avec le numéro principal du pressing.
