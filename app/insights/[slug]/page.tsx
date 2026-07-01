import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { insights } from "@/content/site";

export function generateStaticParams() { return insights.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const post = insights.find((x) => x.slug === slug); return post ? { title: post.title, description: post.summary, alternates: { canonical: `/insights/${slug}` } } : {}; }
export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const post = insights.find((x) => x.slug === slug); if (!post) notFound(); const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://qaro.in";
  return <><PageHero eyebrow={`${post.category} / QARO perspective`} title={post.title} description={post.summary} path={`/insights/${slug}`} breadcrumbName={post.title} backHref="/insights" backLabel="Insights" />
    <article className="article-body">
      <p className="article-lead">The right channel is the one that matches how demand exists in your market and can be measured against a commercial outcome.</p>
      <h2>Start with the customer&apos;s current behaviour</h2><p>Search captures intent that already exists. Social platforms are better at earning attention before someone is actively looking. That distinction matters more than a generic recommendation about which platform is cheaper.</p>
      <h2>Build measurement before scale</h2><p>Track qualified enquiries, appointments, bookings or revenue - not impressions alone. A small campaign with clean feedback will teach you more than a large campaign with unclear attribution.</p>
      <blockquote>Choose the channel after defining the demand state, conversion event and learning goal.</blockquote>
      <h2>What should you do next?</h2><p>Run one focused test with a useful landing experience, reliable tracking and a clear review date. Then move budget toward the strongest evidence.</p>
      <Link className="button" href="/contact">Discuss your growth plan <ArrowRight size={18} /></Link>
    </article>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.summary, datePublished: post.date, dateModified: post.date, author: { "@id": `${base}/#organization` }, publisher: { "@id": `${base}/#organization` }, mainEntityOfPage: `${base}/insights/${slug}`, inLanguage: "en-IN" }} />
  </>;
}
