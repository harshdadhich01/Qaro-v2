import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { caseStudies } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Case Studies - Real Growth Results", description: "Real QARO results: 68% more hotel bookings, 287% more clinic enquiries and coaching batches filled 3 weeks early. See the case studies.", path: "/case-studies" });

export default function CaseStudiesPage() {
  return <>
    <PageHero eyebrow="Proof / Not promises" title="Results We're Proud Of." description="The work matters when it changes a number the business cares about. These are a few of those changes." path="/case-studies" breadcrumbName="Case studies" />
    <section className="section case-directory">{caseStudies.map((study, index) => <Reveal key={study.slug}><Link href={`/case-studies/${study.slug}`}><span className="case-number">0{index + 1}</span><span className="case-tag">{study.industry}</span><strong>{study.metric}</strong><div><h2>{study.headline}</h2><p>{study.result}</p></div><ArrowUpRight /></Link></Reveal>)}</section>
  </>;
}
