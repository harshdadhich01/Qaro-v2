import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { GoogleAnalytics } from "@/components/google-analytics";
import { siteUrl } from "@/lib/seo";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const base = siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: { default: "Digital Marketing & Growth Agency | QARO", template: "%s | QARO" },
  description: "QARO is a growth partner combining web design, marketing, SEO and AI automation into one system for businesses across India and worldwide.",
  applicationName: "QARO",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_IN", siteName: "QARO", url: base,
    title: "QARO - Growth, Built Smarter.",
    description: "Web design, marketing, SEO and AI automation in one growth system for businesses across India and worldwide.",
    images: [{ url: "/qaro-growth-engine.webp", width: 1586, height: 992, alt: "QARO connected growth engine" }]
  },
  twitter: { card: "summary_large_image", title: "QARO - Growth, Built Smarter.", description: "Web design, marketing, SEO and AI automation in one growth system for businesses across India and worldwide.", images: ["/qaro-growth-engine.webp"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#080808" }, { media: "(prefers-color-scheme: light)", color: "#f6f4f1" }] };

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${base}/#organization`,
  name: "QARO",
  url: base,
  description: "An India-based growth partner connecting strategy, design, technology, marketing and AI automation for businesses nationally and worldwide.",
  logo: `${base}/qaro-logo.svg`,
  address: { "@type": "PostalAddress", addressLocality: "Kota", addressRegion: "Rajasthan", addressCountry: "IN" },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Place", name: "Worldwide" }
  ],
  knowsAbout: ["Growth strategy", "Branding", "Website design", "Performance marketing", "SEO", "AI automation", "Analytics"],
  email: "hello@qaro.in"
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${base}/#website`,
  url: base,
  name: "QARO",
  description: "Growth strategy, design, technology, marketing and AI automation for businesses across India and worldwide.",
  inLanguage: "en-IN",
  publisher: { "@id": `${base}/#organization` }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${sans.variable} ${display.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <a className="skip-link" href="#main">Skip to content</a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
        <JsonLd data={organization} />
        <JsonLd data={website} />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
