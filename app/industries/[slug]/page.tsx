import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { getIndustry, industries, services } from "@/content/site";

const industryMetadata: Record<string, { title: string; description: string }> = {
  hotels: { title: "Digital Marketing for Hotels in Kota, Rajasthan", description: "QARO helps hotels and guesthouses in Kota increase direct bookings, improve visibility and cut OTA dependency through websites, SEO and ads." },
  healthcare: { title: "Digital Marketing for Clinics & Hospitals in Kota", description: "QARO helps clinics and hospitals in Kota build patient trust online, rank locally and automate appointments. Book a free clinic growth audit." },
  education: { title: "Admission Marketing for Coaching Institutes in Kota", description: "QARO helps coaching institutes, schools and colleges in Kota fill batches with SEO, lead funnels and admission-season ad campaigns." },
  restaurants: { title: "Digital Marketing for Restaurants in Kota", description: "QARO grows restaurants in Kota with Google Maps optimisation, social media, Meta Ads and WhatsApp reservation automation." },
  startups: { title: "Growth Partner for Startups in Kota & India", description: "QARO helps early-stage startups build brand, websites, user acquisition and automation - lean, fast and built to scale. Free startup audit." }
};

export function generateStaticParams() { return industries.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const item = getIndustry(slug); if (!item) return {};
  const seo = industryMetadata[slug];
  return { title: seo?.title ?? `Digital Growth for ${item.name} in Kota`, description: seo?.description ?? item.description, alternates: { canonical: `/industries/${slug}` } };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = getIndustry(slug); if (!item) notFound();
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://qaro.in";
  const faqs = item.challenges.map((challenge) => ({ question: `How does QARO address: ${challenge.toLowerCase()}?`, answer: `QARO diagnoses the root cause, then combines the right strategy, technology, marketing and automation into a measured ${item.name.toLowerCase()} growth system.` }));
  return <>
    <PageHero eyebrow={`${item.name} / Kota + India`} title={item.headline} description={item.description} path={`/industries/${slug}`} breadcrumbName={item.name} backHref="/industries" backLabel="Industries" />
    <section className="section pain-section"><Reveal><span className="eyebrow">What we hear</span><h2>The problem is rarely a lack of effort.</h2></Reveal><div>{item.challenges.map((challenge, index) => <Reveal className="pain-row" key={challenge}><span>0{index + 1}</span><h3>{challenge}</h3></Reveal>)}</div></section>
    <section className="system-section"><div className="section"><Reveal className="section-intro"><span className="eyebrow">The QARO {item.name} system</span><h2>Built around the whole customer journey.</h2></Reveal><div className="system-grid">{item.system.map((step, index) => <Reveal key={step}><span>0{index + 1}</span><h3>{step}</h3><p>Designed, activated and measured as part of one connected commercial system.</p></Reveal>)}</div></div></section>
    <section className="section related-section"><span className="eyebrow">Relevant capabilities</span><div className="related-links">{services.slice(2, 7).map((service) => <Link key={service.slug} href={`/solutions/${service.slug}`}>{service.name}<ArrowRight size={18} /></Link>)}</div></section>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ProfessionalService", name: `QARO - ${item.name} growth partner`, url: `${base}/industries/${slug}`, areaServed: ["Kota", "Rajasthan", "India"], parentOrganization: { "@id": `${base}/#organization` } }} />
  </>;
}
