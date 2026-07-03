import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/case-studies/kota-guesthouse-direct-bookings", destination: "/case-studies/guesthouse-direct-bookings-68-percent", permanent: true },
      { source: "/case-studies/kota-clinic-patient-inquiries", destination: "/case-studies/clinic-8-to-31-inquiries", permanent: true },
      { source: "/case-studies/kota-coaching-batches-filled-early", destination: "/case-studies/coaching-batches-filled-early", permanent: true },
      { source: "/insights/google-ads-vs-meta-ads-kota-business", destination: "/insights/google-ads-vs-meta-ads-which-first", permanent: true },
      { source: "/insights/local-seo-checklist-kota", destination: "/insights/local-seo-checklist-for-businesses", permanent: true },
    ];
  },
};

export default nextConfig;
