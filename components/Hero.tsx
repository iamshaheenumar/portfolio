"use client";

import { motion } from "framer-motion";

const floatingCards = [
  {
    className: "top-[20%] left-[10%]",
    label: "Current Role",
    value: "Founding\nEngineer",
    sub: "Clinch Tech · Dubai",
    delay: 0,
  },
  {
    className: "top-[45%] right-[8%]",
    label: "Revenue Impact",
    value: "$1M+",
    sub: "Monthly · B2B Platform",
    delay: 0.15,
  },
  {
    className: "bottom-[20%] left-[20%]",
    label: "Scale",
    value: "2500+",
    sub: "Corporate Clients",
    delay: 0.3,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      {/* Left */}
      <div className="flex flex-col justify-center px-8 md:px-16 pt-32 pb-20 relative z-10">
        <motion.div
          {...fadeUp(0.2)}
          className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-8 flex items-center gap-4 before:content-[''] before:w-10 before:h-px before:bg-accent before:shrink-0"
        >
          Senior Frontend Engineer
        </motion.div>

        <motion.h1
          {...fadeUp(0.35)}
          className="font-serif text-[clamp(56px,7vw,96px)] leading-none font-normal mb-2"
        >
          Shaheen
          <br />
          <em className="italic text-accent">Umar</em>
        </motion.h1>

        <motion.p
          {...fadeUp(0.45)}
          className="font-serif text-[clamp(24px,3vw,40px)] text-muted italic leading-snug mb-10"
        >
          8+ years crafting interfaces
        </motion.p>

        <motion.p
          {...fadeUp(0.55)}
          className="text-[15px] leading-relaxed text-muted max-w-md mb-12"
        >
          Turning complex workflows into seamless digital experiences. From
          insurance platforms to gifting ecosystems — I build frontends that
          scale, delight, and perform.
        </motion.p>

        <motion.div {...fadeUp(0.65)} className="flex gap-4 flex-wrap">
          <a
            href="#contact"
            className="bg-accent text-bg px-8 py-3.5 font-mono text-xs tracking-[0.1em] uppercase font-medium hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,240,96,0.25)] transition-all no-underline"
          >
            Get in touch
          </a>
          <a
            href="#experience"
            className="border border-white/10 text-muted px-8 py-3.5 font-mono text-xs tracking-[0.1em] uppercase hover:border-white/40 hover:text-[var(--text)] transition-all no-underline"
          >
            View Work
          </a>
        </motion.div>
      </div>

      {/* Right */}
      <div className="relative hidden md:flex items-center justify-center">
        <div className="absolute inset-0 grid-bg" />
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            className={`absolute ${card.className} bg-surface border border-white/5 px-6 py-5`}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.8 + card.delay },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: card.delay,
              },
            }}
          >
            <div className="font-mono text-[10px] text-accent tracking-[0.15em] mb-2">
              {card.label}
            </div>
            <div className="font-serif text-[28px] leading-tight whitespace-pre-line">
              {card.value}
            </div>
            <div className="text-[11px] text-muted mt-1">{card.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
