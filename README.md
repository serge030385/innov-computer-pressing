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

## SEO premium

Le site contient maintenant :

- une FAQ SEO disponible sur `/faq` avec schema `FAQPage` ;
- un blog disponible sur `/blog` avec des articles de conseils linge et pressing ;
- des landing pages locales : `/pressing-akwa`, `/pressing-akwa-nord`, `/pressing-bonapriso`, `/pressing-deido`, `/pressing-bali`, `/pressing-bonamoussadi`, `/pressing-logpom`, `/pressing-makepe` ;
- un sitemap dynamique qui inclut les pages principales, le blog, les articles et les pages quartier ;
- des données structurées Schema.org pour LocalBusiness, DryCleaningOrLaundry, Organization, WebSite, WebPage, Breadcrumb, FAQPage et BlogPosting.

Les contenus SEO principaux sont centralisés dans `src/data/seo-content.ts`.
Les données structurées sont centralisées dans `src/data/schema.ts`.

## Déploiement sur Vercel

1. Connecter le dépôt à Vercel.
2. Garder les commandes par défaut détectées par Vercel :
   - Build command : `npm run build`
   - Install command : `npm install`
3. Utiliser le domaine définitif du site : `https://innov-pressing.com`.
4. Déployer.

## Préparation Google

- Google Search Console : ajouter la propriété `https://innov-pressing.com`, vérifier le domaine puis soumettre `https://innov-pressing.com/sitemap.xml`.
- Google Analytics 4 : créer une propriété GA4, récupérer l’identifiant de mesure et l’ajouter dans `NEXT_PUBLIC_GA_MEASUREMENT_ID`. Le composant `src/components/Analytics.tsx` reste inactif tant que cette variable n’est pas définie.
- Google Business Profile : utiliser le nom `Innov-Pressing`, l’adresse à Akwa Nord, les numéros de téléphone, le domaine définitif et des photos réelles du pressing.
- TODO : compléter les horaires d’ouverture et les coordonnées GPS exactes dans les données structurées dès qu’ils sont confirmés.

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
