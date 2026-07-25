import type { MetadataRoute } from "next";
import { canonicalUrl, metadataConfig } from "@/data/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return metadataConfig.routes.map((route) => ({
    url: canonicalUrl(route),
    lastModified: new Date("2026-07-20"),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8
  }));
}
