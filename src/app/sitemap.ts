import type { MetadataRoute } from "next";
import { canonicalUrl, metadataConfig } from "@/data/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return metadataConfig.routes.map((route) => ({
    url: canonicalUrl(route),
    lastModified: new Date("2026-08-02"),
    changeFrequency: route === "/" || route === "/blog" ? "weekly" : "monthly",
    priority: sitemapPriority(route)
  }));
}

function sitemapPriority(route: string) {
  if (route === "/") {
    return 1;
  }

  if (["/services", "/collecte-et-livraison", "/contact"].includes(route)) {
    return 0.9;
  }

  if (["/faq", "/blog", "/a-propos"].includes(route)) {
    return 0.85;
  }

  return 0.75;
}
