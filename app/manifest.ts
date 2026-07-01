import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "QARO - Growth, Built Smarter.", short_name: "QARO", description: "Strategy, design, technology, marketing and automation in one growth system.", start_url: "/", display: "standalone", background_color: "#080808", theme_color: "#e10600" };
}
