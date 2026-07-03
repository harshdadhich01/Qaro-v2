import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { services } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Growth Solutions - Design, Marketing, AI Automation",
  description: "QARO offers integrated growth solutions: website design, performance marketing, SEO, branding and AI automation for businesses across India and worldwide.",
  path: "/solutions"
});

export default function SolutionsPage() {
  return <>
    <PageHero eyebrow="Capabilities / 08" title="One Partner. Every Tool You Need to Grow." description="A senior, connected team across strategy, brand, product, acquisition, search, automation and analytics." path="/solutions" breadcrumbName="Solutions" />
    <section className="section directory-section">
      <div className="directory-list">
        {services.map((service, index) => <Reveal key={service.slug}><Link href={`/solutions/${service.slug}`}><span>0{index + 1}</span><div><h2>{service.name}</h2><p>{service.short}</p></div><ArrowUpRight /></Link></Reveal>)}
      </div>
    </section>
  </>;
}
