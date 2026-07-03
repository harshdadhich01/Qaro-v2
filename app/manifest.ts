import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "QARO - Growth, Built Smarter.", short_name: "QARO", description: "Web design, marketing, SEO and AI automation in one growth system for businesses across India and worldwide.", start_url: "/", display: "standalone", background_color: "#080808", theme_color: "#e10600" };
}
