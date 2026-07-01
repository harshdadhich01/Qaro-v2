"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Crosshair, Layers, Rocket, ScanSearch } from "lucide-react";

const steps = [
  { number: "01", title: "Diagnose", copy: "Find the real constraint.", Icon: ScanSearch },
  { number: "02", title: "Prioritise", copy: "Choose the highest-leverage move.", Icon: Crosshair },
  { number: "03", title: "Build", copy: "Create the connected system.", Icon: Layers },
  { number: "04", title: "Activate", copy: "Put it in market with evidence.", Icon: Rocket },
  { number: "05", title: "Compound", copy: "Learn, improve and scale.", Icon: Activity }
];

export function GrowthSystem() {
  const reduced = useReducedMotion();
  return (
    <div className="growth-system">
      <div className="growth-rail" aria-hidden="true">
        <motion.span
          initial={reduced ? false : { scaleX: 0 }}
          whileInView={reduced ? undefined : { scaleX: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <i />
      </div>
      <ol>
        {steps.map(({ number, title, copy, Icon }, index) => (
          <motion.li
            key={number}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.55, delay: index * 0.11 }}
          >
            <span>{number}</span>
            <div><Icon size={21} /><i aria-hidden="true" /></div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </motion.li>
        ))}
      </ol>
      <div className="growth-loop" aria-hidden="true"><span>Input</span><i /><span>Learning</span><i /><span>Better output</span></div>
    </div>
  );
}
