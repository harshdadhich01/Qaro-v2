import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <section className="not-found"><span className="eyebrow">404 / Off route</span><h1>This path doesn&apos;t lead anywhere.</h1><p>The useful pages are still exactly where they should be.</p><Link className="button" href="/"><ArrowLeft size={18} /> Back to QARO</Link></section>;
}
