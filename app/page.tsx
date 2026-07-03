import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroVisual } from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { ServiceShowcase } from "@/components/service-showcase";
import { GrowthSystem } from "@/components/growth-system";
import { CountUp } from "@/components/count-up";
import { caseStudies, industries, insights, services, stats } from "@/content/site";
import { siteUrl } from "@/lib/seo";

const faq = [
  ["Why is growth inconsistent even when the team is busy?", "Because disconnected activity creates motion without a shared commercial system. QARO connects strategy, execution and measurement."],
  ["Can QARO work with an existing internal team?", "Yes. We can operate as a focused growth partner, specialist delivery team or extension of your existing capability."],
  ["Where does QARO work?", "QARO works with businesses across India and worldwide through remote-friendly, collaborative delivery."]
];

export default function HomePage() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#headquarters`,
    name: "QARO",
    url: siteUrl,
    email: "hello@qaro.in",
    address: { "@type": "PostalAddress", addressLocality: "Kota", addressRegion: "Rajasthan", addressCountry: "IN" },
    areaServed: [{ "@type": "Country", name: "India" }, { "@type": "Place", name: "Worldwide" }],
    parentOrganization: { "@id": `${siteUrl}/#organization` }
  };
  return (
    <>
      <section className="hero">
        <HeroVisual />
        <div className="hero-grid-overlay" />
        <div className="hero-content">
          <Reveal className="hero-copy">
            <span className="eyebrow"><i /> Independent growth partner / India + Worldwide</span>
            <h1>Growth,<br />Built <em>Smarter.</em></h1>
            <p>QARO connects strategy, design, technology, marketing and AI automation into one growth system for ambitious businesses.</p>
            <div className="hero-actions">
              <Link className="button" href="/solutions">Explore our capabilities <ArrowUpRight size={18} /></Link>
              <Link className="text-link" href="/contact">Book a free strategy call <ArrowRight size={18} /></Link>
            </div>
          </Reveal>
          <div className="hero-index" aria-hidden="true"><span>01</span><span>Connected growth</span></div>
          <div className="hero-scroll" aria-hidden="true"><ArrowDownRight size={18} /> Scroll to discover</div>
        </div>
      </section>

      <section className="stats-band" aria-labelledby="numbers-title">
        <h2 id="numbers-title" className="sr-only">Numbers that matter</h2>
        {stats.map((stat, index) => (
          <Reveal className="stat" key={stat.label} delay={index * 0.06}>
            <CountUp className="stat-number" value={stat.value} /><span>{stat.label}</span>
          </Reveal>
        ))}
      </section>

      <section className="team-strip" aria-labelledby="team-strip-title">
        <Reveal className="team-strip-head">
          <span className="eyebrow"><i /> A team built for scale</span>
          <h2 id="team-strip-title">Talent behind every launch.</h2>
        </Reveal>
        <div className="team-strip-grid">
          {[
            { value: "100+", label: "Editors" },
            { value: "100+", label: "Graphic Designers" },
            { value: "50+", label: "UI/UX Experts" },
          ].map((item, index) => (
            <Reveal className="team-chip" key={item.label} delay={index * 0.08}>
              <CountUp className="team-chip-value" value={item.value} />
              <span className="team-chip-label">{item.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section services-section">
        <Reveal className="section-intro split-intro">
          <div><span className="eyebrow">Eight capabilities / Three systems</span><h2>What we do.<br />See what it gets you.</h2></div>
          <p>Explore by business outcome, not agency department. Every service remains connected to the same growth direction.</p>
        </Reveal>
        <ServiceShowcase services={services} />
      </section>

      <section className="system-story">
        <div className="section">
          <Reveal className="section-intro split-intro">
            <div>
            <span className="eyebrow">This is how we grow you</span>
              <h2>The QARO Growth Engine.<br />Five clear moves.</h2>
            </div>
            <p>From first signal to better output: every move feeds the next, so the system becomes more valuable over time.</p>
          </Reveal>
          <GrowthSystem />
        </div>
      </section>

      <section className="section work-section">
        <Reveal className="section-intro split-intro">
          <div><span className="eyebrow">Evidence over promises</span><h2>Results we&apos;re<br />proud of.</h2></div>
          <Link className="text-link" href="/case-studies">View all case studies <ArrowRight size={18} /></Link>
        </Reveal>
        <div className="case-grid">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} className={`case-panel case-${index + 1}`}>
              <Link href={`/case-studies/${study.slug}`}>
                <span className="case-tag">{study.industry}</span>
                <div className="case-metric">{study.metric}</div>
                <h3>{study.headline}</h3>
                <span className="case-link">Read the case study <ArrowUpRight size={17} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="industry-section">
        <div className="section">
          <Reveal className="section-intro"><span className="eyebrow">Context changes everything</span><h2>We know your industry.</h2><p>Specific markets need specific growth systems.</p></Reveal>
          <div className="industry-track">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={index * 0.06}>
                <Link className="industry-item" href={`/industries/${industry.slug}`}><span>0{index + 1}</span><strong>{industry.name}</strong><ArrowUpRight size={19} /></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section insights-section">
        <Reveal className="section-intro split-intro">
          <div><span className="eyebrow">Useful thinking</span><h2>Ideas you can<br />put to work.</h2></div>
          <Link className="text-link" href="/insights">Explore all insights <ArrowRight size={18} /></Link>
        </Reveal>
        <div className="insight-list">
          {insights.map((post, index) => (
            <Reveal key={post.slug}>
              <Link href={`/insights/${post.slug}`}><span>0{index + 1} / {post.category}</span><h3>{post.title}</h3><ArrowUpRight /></Link>
            </Reveal>
          ))}
        </div>
      </section>

      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }} />
      <JsonLd data={localBusiness} />
    </>
  );
}
