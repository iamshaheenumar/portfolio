"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-12 py-6 transition-all duration-400 ${
        scrolled
          ? "border-b border-white/5 bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <a
        href="#"
        className="font-mono text-xs text-accent tracking-[0.15em] no-underline"
      >
        SU_
      </a>
      <ul className="hidden md:flex gap-9 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-xs tracking-[0.12em] uppercase text-muted hover:text-[var(--text)] transition-colors no-underline"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
