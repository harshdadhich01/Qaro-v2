import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";

export function PageHero({ eyebrow, title, description, path, breadcrumbName, backHref, backLabel, index = "01" }: { eyebrow: string; title: string; description: string; path: string; breadcrumbName?: string; backHref?: string; backLabel?: string; index?: string }) {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://qaro.in";
  const items = [
    { "@type": "ListItem", position: 1, name: "Home", item: base },
    ...(backHref ? [{ "@type": "ListItem", position: 2, name: backLabel ?? "Back", item: `${base}${backHref}` }] : []),
    { "@type": "ListItem", position: backHref ? 3 : 2, name: breadcrumbName ?? title, item: `${base}${path}` }
  ];
  return (
    <section className="page-hero">
      <div className="page-hero-signal" aria-hidden="true"><i /><i /><i /></div>
      <Reveal className="page-hero-inner">
        {backHref && <Link className="back-link" href={backHref}><ArrowLeft size={16} /> {backLabel ?? "Back"}</Link>}
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link className="text-link" href="/contact">Start a conversation <ArrowUpRight size={18} /></Link>
      </Reveal>
      <span className="page-index" aria-hidden="true">{index}</span>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items }} />
    </section>
  );
}
