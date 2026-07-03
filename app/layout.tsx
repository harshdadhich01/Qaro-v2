import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://qaro.in";

export const metadata: Metadata = {
  metadataBase: new URL(base),

  title: {
    default: "Digital Marketing & Growth Agency in Kota | QARO",
    template: "%s | QARO",
  },

  description:
    "QARO is a growth partner in Kota combining website design, marketing, SEO and AI automation into one connected system.",

  applicationName: "QARO",

  appleWebApp: {
    title: "Qaro",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "QARO",
    url: base,
    title: "QARO - Growth, Built Smarter.",
    description:
      "Design, technology, marketing and automation in one growth system.",
    images: [
      {
        url: "/qaro-growth-engine.webp",
        width: 1586,
        height: 992,
        alt: "QARO connected growth engine",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "QARO - Growth, Built Smarter.",
    description: "One connected growth system for ambitious businesses.",
    images: ["/qaro-growth-engine.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
    { media: "(prefers-color-scheme: light)", color: "#f6f4f1" },
  ],
};

const organization = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${base}/#organization`,
  name: "QARO",
  url: base,
  description:
    "A growth partner connecting strategy, design, technology, marketing and AI automation.",
  logo: `${base}/qaro-logo.svg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kota",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  areaServed: ["Kota", "Rajasthan", "India"],
  email: "hello@qaro.in",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${sans.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
        <JsonLd data={organization} />
      </body>
    </html>
  );
}
