"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type Parsed = { prefix: string; target: number; suffix: string; decimals: number; pad: number };

function parseValue(value: string): Parsed {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)([\s\S]*)$/);
  if (!match) return { prefix: "", target: 0, suffix: value, decimals: 0, pad: 0 };
  const [, prefix, numeric, suffix] = match;
  const decimals = numeric.includes(".") ? numeric.split(".")[1].length : 0;
  const pad = numeric.split(".")[0].length;
  return { prefix, target: parseFloat(numeric), suffix, decimals, pad };
}

function format(current: number, { decimals, pad }: Parsed) {
  const fixed = current.toFixed(decimals);
  if (decimals === 0) return fixed.padStart(pad, "0");
  const [intPart, decPart] = fixed.split(".");
  return `${intPart.padStart(pad, "0")}.${decPart}`;
}

export function CountUp({ value, className, duration = 1.6 }: { value: string; className?: string; duration?: number }) {
  const parsed = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : `${parsed.prefix}${format(0, parsed)}${parsed.suffix}`);

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, parsed.target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(`${parsed.prefix}${format(latest, parsed)}${parsed.suffix}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduced]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
