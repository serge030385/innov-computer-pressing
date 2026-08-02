import type { Metadata } from "next";
import { business, seo } from "@/data/business";
import { blogPosts, landingPages } from "@/data/seo-content";

const openGraphImage = {
  url: `${business.websiteUrl}/images/pressing/pressing-hero.png`,
  width: 1680,
  height: 900,
  alt: "Linge propre et vêtements préparés dans un pressing moderne"
};

export const metadataConfig = {
  websiteUrl: business.websiteUrl,
  openGraphImage,
  logoImageUrl: `${business.websiteUrl}/images/logo-innov-pressing.png`,
  routes: [
    "/",
    "/services",
    "/collecte-et-livraison",
    "/faq",
    "/blog",
    "/a-propos",
    "/contact",
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    ...landingPages.map((page) => `/${page.slug}`)
  ]
} as const;

export function canonicalUrl(path = "/") {
  return new URL(path, metadataConfig.websiteUrl).toString();
}

type PageMetadataOptions = {
  title?: string;
  description: string;
  path?: string;
  keywords?: readonly string[];
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website"
}: PageMetadataOptions): Metadata {
  const resolvedTitle = title ?? seo.title;
  const url = canonicalUrl(path);

  return {
    ...(title ? { title: { absolute: title } } : {}),
    description,
    keywords: [...seo.keywords, ...keywords],
    alternates: {
      canonical: url
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: business.name,
      locale: "fr_CM",
      type,
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
