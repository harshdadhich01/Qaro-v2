import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { industries } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Industry-Specific Growth Solutions", description: "QARO builds growth systems tailored to hotels, healthcare, education, restaurants and startups for businesses across India and worldwide.", path: "/industries" });

export default function IndustriesPage() {
  return <>
    <PageHero eyebrow="Industry systems / 05" title="We Know Your Industry." description="The same playbook does not fit every market. We build around the customer behaviour, economics and constraints that make yours different." path="/industries" breadcrumbName="Industries" />
    <section className="section industry-directory">{industries.map((item, index) => <Reveal key={item.slug}><Link href={`/industries/${item.slug}`}><span>0{index + 1}</span><div><h2>{item.name}</h2><p>{item.description}</p></div><ArrowUpRight /></Link></Reveal>)}</section>
  </>;
}
