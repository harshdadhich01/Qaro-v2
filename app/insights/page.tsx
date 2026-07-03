import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { insights } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Insights - Growth, Marketing & AI for Businesses", description: "Practical growth, marketing and AI automation insights for businesses across India and worldwide - from QARO, a growth partner.", path: "/insights" });
export default function InsightsPage() { return <><PageHero eyebrow="Perspective / Applied" title="Thinking That Helps You Grow." description="Clear, practical thinking about strategy, marketing, digital products, search and automation - written for people making real decisions." path="/insights" breadcrumbName="Insights" /><section className="section editorial-list">{insights.map((post, index) => <Reveal key={post.slug}><Link href={`/insights/${post.slug}`}><span>0{index + 1}</span><span className="case-tag">{post.category}</span><div><h2>{post.title}</h2><p>{post.summary}</p></div><ArrowUpRight /></Link></Reveal>)}</section></> }
