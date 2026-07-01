"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <motion.div ref={ref} className="hero-visual" style={{ y, scale }} aria-hidden="true">
      <Image src="/qaro-growth-engine.webp" alt="" fill priority sizes="(max-width: 800px) 100vw, 72vw" />
      <div className="hero-visual-shade" />
      <motion.div className="orbit orbit-one" animate={{ rotate: 360 }} transition={{ duration: 32, ease: "linear", repeat: Infinity }} />
      <motion.div className="orbit orbit-two" animate={{ rotate: -360 }} transition={{ duration: 46, ease: "linear", repeat: Infinity }} />
    </motion.div>
  );
}
