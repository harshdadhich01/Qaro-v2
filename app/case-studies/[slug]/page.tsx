import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { caseStudies } from "@/content/site";

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const study = caseStudies.find((x) => x.slug === slug); return study ? { title: study.headline, description: study.result, alternates: { canonical: `/case-studies/${slug}` } } : {}; }

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const study = caseStudies.find((x) => x.slug === slug); if (!study) notFound();
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://qaro.in";
  return <>
    <PageHero eyebrow={`Case study / ${study.industry}`} title={study.headline} description={`${study.result} A focused example of QARO connecting customer experience, demand and measurement.`} path={`/case-studies/${slug}`} breadcrumbName={study.headline} backHref="/case-studies" backLabel="Case studies" />
    <section className="section case-story">
      <Reveal className="case-result"><span className="eyebrow">The result</span><strong>{study.metric}</strong><p>{study.period}</p></Reveal>
      <div>
        <Reveal><span className="eyebrow">01 / Challenge</span><h2>{study.challenge}</h2></Reveal>
        <Reveal><span className="eyebrow">02 / What QARO did</span><h2>{study.work}</h2></Reveal>
        <Reveal><span className="eyebrow">03 / Outcome</span><h2>{study.result}</h2></Reveal>
      </div>
    </section>
    <section className="section next-link"><span>Have a similar constraint?</span><Link href="/contact">Let&apos;s solve it <ArrowRight size={20} /></Link></section>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: study.headline, description: study.result, author: { "@id": `${base}/#organization` }, publisher: { "@id": `${base}/#organization` }, mainEntityOfPage: `${base}/case-studies/${slug}`, inLanguage: "en-IN" }} />
  </>;
}
