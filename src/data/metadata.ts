import type { Metadata } from "next";
import { business, seo } from "@/data/business";

const openGraphImage = {
  url: `${business.websiteUrl}/images/pressing/pressing-hero.png`,
  width: 1680,
  height: 900,
  alt: "Linge propre et vêtements préparés dans un pressing moderne"
};

export const metadataConfig = {
  websiteUrl: business.websiteUrl,
  openGraphImage,
  logoImageUrl: `${business.websiteUrl}/images/logo-innov-computer-pressing.png`,
  routes: ["/", "/services", "/collecte-et-livraison", "/a-propos", "/contact"]
} as const;

export function canonicalUrl(path = "/") {
  return new URL(path, metadataConfig.websiteUrl).toString();
}

type PageMetadataOptions = {
  title?: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "/"
}: PageMetadataOptions): Metadata {
  const resolvedTitle = title ? `${title} | ${business.name}` : seo.title;
  const url = canonicalUrl(path);

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: business.name,
      locale: "fr_CM",
      type: "website",
      images: [{ ...metadataConfig.openGraphImage }]
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [metadataConfig.openGraphImage.url]
    }
  };
}
