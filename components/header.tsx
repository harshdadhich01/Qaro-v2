"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { Logo } from "@/components/logo";

const links = [
  ["Solutions", "/solutions"],
  ["Industries", "/industries"],
  ["Case studies", "/case-studies"],
  ["Insights", "/insights"],
  ["About", "/about"]
];

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="QARO home" onClick={() => setOpen(false)}>
        <Logo className="brand-logo" />
      </Link>

      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <Link key={href} className={pathname === href ? "is-active" : ""} href={href} onClick={() => setOpen(false)}>{label}</Link>
        ))}
        <Link className="mobile-contact" href="/contact" onClick={() => setOpen(false)}>Start a project <ArrowUpRight size={17} /></Link>
      </nav>

      <div className="header-actions">
        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
          <Sun size={16} />
          <span className={theme === "dark" ? "toggle-dot dark" : "toggle-dot"} />
          <Moon size={15} />
        </button>
        <Link className="button button-small" href="/contact">Let&apos;s grow together <ArrowUpRight size={16} /></Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
