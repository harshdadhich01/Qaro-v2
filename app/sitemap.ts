import type { MetadataRoute } from "next";
import { caseStudies, industries, insights, services } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://qaro.in";
  const now = new Date();
  const paths = ["", "/solutions", ...services.map((x) => `/solutions/${x.slug}`), "/industries", ...industries.map((x) => `/industries/${x.slug}`), "/case-studies", ...caseStudies.map((x) => `/case-studies/${x.slug}`), "/insights", ...insights.map((x) => `/insights/${x.slug}`), "/about", "/contact"];
  return paths.map((path) => ({ url: `${base}${path}`, lastModified: now, changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : path.split("/").length === 2 ? 0.9 : 0.8 }));
}
