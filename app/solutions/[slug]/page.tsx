import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { ServiceVisual } from "@/components/service-visual";
import { getService, industries, services } from "@/content/site";

const seoMetadata: Record<string, { title: string; description: string }> = {
  "growth-strategy": { title: "Growth Strategy & Business Audit Services", description: "Get a prioritised growth roadmap built on a real audit of your traffic, conversions and competitors. Free growth audit from QARO, Kota." },
  branding: { title: "Brand Identity & Design Services in Kota", description: "QARO builds brand identities that command attention and earn trust - logo, visual system, voice and messaging. See our brand work." },
  website: { title: "Website Design & Development in Kota, Rajasthan", description: "Fast, mobile-first, conversion-optimised websites built to rank and convert. Website design and development by QARO in Kota and across India." },
  "ui-ux": { title: "UI/UX Design Services for Apps & Products", description: "Research-backed UI/UX design for apps, products and dashboards that reduce drop-off and build loyalty. See QARO's UI/UX work." },
  "performance-marketing": { title: "Google Ads & Meta Ads Agency in Kota", description: "Conversion-focused Google Ads and Meta Ads campaigns that deliver leads, not just clicks. Performance marketing by QARO in Kota." },
  seo: { title: "SEO Services in Kota, Rajasthan & India", description: "Technical SEO, local SEO for Kota, keyword and content strategy that builds compounding organic rankings on Google. Free SEO audit from QARO." },
  "ai-automation": { title: "AI & WhatsApp Automation for Business", description: "AI chatbots, WhatsApp automation, CRM workflows and lead qualification that run your business on autopilot. AI automation by QARO." },
  analytics: { title: "Analytics, Tracking & Conversion Optimisation", description: "GA4 setup, custom dashboards, attribution and monthly growth reviews so you know exactly what's working. Analytics and optimisation by QARO." }
};

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const seo = seoMetadata[slug];
  return { title: seo?.title ?? service.name, description: seo?.description ?? service.description, alternates: { canonical: `/solutions/${slug}` } };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = services.filter((item) => item.slug !== slug).slice(0, 3);
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://qaro.in";
  return <>
    <PageHero eyebrow={service.eyebrow} title={service.headline} description={service.description} path={`/solutions/${slug}`} breadcrumbName={service.name} backHref="/solutions" backLabel="Solutions" />
    <ServiceVisual service={service} />
    <section className="section detail-split">
      <Reveal><span className="eyebrow">What you get</span><h2>Everything required to move from intent to outcome.</h2><p>{service.outcome}</p></Reveal>
      <div className="deliverable-list">{service.deliverables.map((item, index) => <Reveal key={item} delay={index * 0.06}><div><span><Check size={17} /></span><h3>{item}</h3></div></Reveal>)}</div>
    </section>
    <section className="section related-section"><span className="eyebrow">Often connected with</span><div className="related-links">{related.map((item) => <Link key={item.slug} href={`/solutions/${item.slug}`}>{item.name}<ArrowRight size={18} /></Link>)}</div></section>
    <section className="section context-strip"><div><span className="eyebrow">Built for your context</span><h2>See how this capability works inside your industry.</h2></div><div>{industries.slice(0, 3).map((item) => <Link href={`/industries/${item.slug}`} key={item.slug}>{item.name}<ArrowRight size={17} /></Link>)}</div></section>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: service.name, description: service.description, provider: { "@id": `${base}/#organization` }, areaServed: ["Kota", "Rajasthan", "India"], url: `${base}/solutions/${slug}` }} />
  </>;
}
