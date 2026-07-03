import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://qaro.in";

export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const brandedTitle = title.includes("QARO") ? title : `${title} | QARO`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: "QARO",
      url: `${siteUrl}${path}`,
      title: brandedTitle,
      description,
      images: [{ url: "/qaro-growth-engine.webp", width: 1586, height: 992, alt: "QARO connected growth engine" }],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: ["/qaro-growth-engine.webp"],
    },
  };
}
