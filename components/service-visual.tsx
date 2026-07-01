import Image from "next/image";
import type { Service } from "@/content/site";

const groups: Record<string, { image: string; label: string; alt: string }> = {
  "growth-strategy": { image: "/services-direction.webp", label: "Direction system", alt: "Strategic signal paths converging toward one precise direction" },
  branding: { image: "/services-direction.webp", label: "Direction system", alt: "Brand paths converging toward one distinctive position" },
  website: { image: "/services-experience.webp", label: "Experience system", alt: "Layered surfaces forming one seamless website experience" },
  "ui-ux": { image: "/services-experience.webp", label: "Experience system", alt: "Complex layers resolving into a clear user experience" },
  seo: { image: "/services-experience.webp", label: "Discovery system", alt: "Digital layers becoming a clear discoverable pathway" },
  "performance-marketing": { image: "/services-momentum.webp", label: "Momentum system", alt: "Measured red signals accelerating through a growth system" },
  "ai-automation": { image: "/services-momentum.webp", label: "Automation system", alt: "Connected signals moving through an automated business system" },
  analytics: { image: "/services-momentum.webp", label: "Optimisation system", alt: "Measured signals compounding into improved performance" }
};

export function ServiceVisual({ service }: { service: Service }) {
  const visual = groups[service.slug];
  return (
    <section className="service-visual-break" aria-label={`${service.name} visual overview`}>
      <Image src={visual.image} alt={visual.alt} fill sizes="100vw" />
      <div className="service-visual-overlay" />
      <div className="service-visual-copy">
        <span>{visual.label}</span>
        <strong>{service.name}</strong>
        <p>{service.outcome}</p>
      </div>
      <div className="service-visual-data" aria-hidden="true"><span>Signal</span><i /><span>System</span><i /><span>Outcome</span></div>
    </section>
  );
}
