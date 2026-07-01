"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Compass, Layers3, Zap } from "lucide-react";
import { useState } from "react";
import type { Service } from "@/content/site";

const modules = [
  {
    id: "direction",
    number: "01",
    name: "Direction",
    statement: "Know where to move before you spend.",
    outcome: "Position, prioritise and align.",
    image: "/services-direction.webp",
    alt: "Red signal paths converging on a precise strategic direction",
    slugs: ["growth-strategy", "branding"],
    Icon: Compass
  },
  {
    id: "experience",
    number: "02",
    name: "Experience",
    statement: "Turn attention into trust and action.",
    outcome: "Design, build and make discoverable.",
    image: "/services-experience.webp",
    alt: "Layered glass surfaces forming one seamless digital experience",
    slugs: ["website", "ui-ux", "seo"],
    Icon: Layers3
  },
  {
    id: "momentum",
    number: "03",
    name: "Momentum",
    statement: "Create a system that learns and compounds.",
    outcome: "Acquire, automate and optimise.",
    image: "/services-momentum.webp",
    alt: "Red signal network accelerating through a measured growth system",
    slugs: ["performance-marketing", "ai-automation", "analytics"],
    Icon: Zap
  }
];

export function ServiceShowcase({ services }: { services: Service[] }) {
  const [active, setActive] = useState("direction");
  const reduced = useReducedMotion();

  return (
    <div className="capability-showcase">
      <div className="capability-tabs" role="tablist" aria-label="Service capability groups">
        {modules.map(({ id, number, name, statement, Icon }) => (
          <button
            key={id}
            role="tab"
            aria-selected={active === id}
            aria-controls={`capability-${id}`}
            id={`tab-${id}`}
            className={active === id ? "is-active" : ""}
            onClick={() => setActive(id)}
          >
            <span>{number}</span>
            <Icon size={20} />
            <strong>{name}</strong>
            <small>{statement}</small>
            <i aria-hidden="true" />
          </button>
        ))}
      </div>

      <div className="capability-canvas">
        {modules.map((module) => {
          const selected = active === module.id;
          const related = services.filter((service) => module.slugs.includes(service.slug));
          return (
            <motion.article
              key={module.id}
              id={`capability-${module.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${module.id}`}
              aria-hidden={!selected}
              className={selected ? "capability-pane is-active" : "capability-pane"}
              animate={reduced ? undefined : { opacity: selected ? 1 : 0, scale: selected ? 1 : 1.025, x: selected ? 0 : 18 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src={module.image} alt={module.alt} fill sizes="(max-width: 820px) 100vw, 68vw" />
              <div className="capability-shade" />
              <div className="capability-signal" aria-hidden="true"><span /><span /><span /></div>
              <div className="capability-copy">
                <span>{module.number} / Capability system</span>
                <h3>{module.name}</h3>
                <p>{module.outcome}</p>
                <div className="capability-links">
                  {related.map((service) => (
                    <Link key={service.slug} href={`/solutions/${service.slug}`}>
                      <span><strong>{service.name}</strong><small>{service.short}</small></span>
                      <ArrowUpRight size={18} />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
