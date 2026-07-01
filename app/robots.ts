import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://qaro.in";
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/_next/", "/admin", "/thank-you"] }], sitemap: `${base}/sitemap.xml`, host: base };
}
