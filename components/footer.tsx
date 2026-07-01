import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries, services } from "@/content/site";
import { Logo } from "@/components/logo";
import { BrandMarquee } from "@/components/brand-marquee";

export function Footer() {
  return (
    <footer className="footer">
      <BrandMarquee />
      <div className="footer-lead">
        <div>
          <span className="eyebrow">The next move</span>
          <h2>Build the system your growth deserves.</h2>
        </div>
        <Link className="button" href="/contact">Book a free consultation <ArrowUpRight size={18} /></Link>
      </div>
      <div className="footer-grid">
        <div>
          <Link className="brand" href="/" aria-label="QARO home">
            <Logo className="brand-logo" />
            <span className="brand-tag">Growth, Built Smarter.</span>
          </Link>
          <p>Design, technology, marketing and automation - connected into one growth engine.</p>
          <address>Kota, Rajasthan, India<br /><a href="mailto:hello@qaro.in">hello@qaro.in</a></address>
        </div>
        <div>
          <span className="footer-label">Solutions</span>
          {services.slice(0, 6).map((item) => <Link key={item.slug} href={`/solutions/${item.slug}`}>{item.name}</Link>)}
        </div>
        <div>
          <span className="footer-label">Industries</span>
          {industries.map((item) => <Link key={item.slug} href={`/industries/${item.slug}`}>{item.name}</Link>)}
        </div>
        <div>
          <span className="footer-label">Company</span>
          <Link href="/case-studies">Case studies</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/about">About QARO</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} QARO. All rights reserved.</span><span>Strategy / Design / Technology / Growth</span></div>
    </footer>
  );
}
