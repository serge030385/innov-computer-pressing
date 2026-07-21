import type { MetadataRoute } from "next";
import { business } from "@/data/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/collecte-et-livraison", "/a-propos", "/contact"];

  return routes.map((route) => ({
    url: `${business.siteUrl}${route}`,
    lastModified: new Date("2026-07-20"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
