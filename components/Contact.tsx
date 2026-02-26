"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { contact } from "@/lib/data";

const contactLinks = [
  { icon: "✉", label: contact.email, href: `mailto:${contact.email}` },
  { icon: "☎", label: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { icon: "in", label: "linkedin.com/in/shaheenumar", href: contact.linkedin },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="bg-surface px-8 md:px-16 py-24 md:py-32 text-center relative overflow-hidden"
    >
      {/* Ghost text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-serif text-[20vw] text-white/[0.02] whitespace-nowrap">
          CONNECT
        </span>
      </div>

      <div ref={ref} className="relative z-10">
        <div className="font-mono text-[10px] text-accent tracking-[0.25em] uppercase mb-12 flex items-center justify-center gap-4">
          Contact
        </div>

        <motion.h2
          className="font-serif text-[clamp(40px,5vw,64px)] font-normal leading-tight mb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Let&apos;s build
          <br />
          <em className="italic text-muted">something great</em>
        </motion.h2>

        <motion.p
          className="text-[15px] text-muted max-w-md mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Currently based in Dubai, UAE. Open to senior and lead frontend roles,
          consulting, and interesting product challenges.
        </motion.p>

        <div className="flex justify-center gap-4 flex-wrap">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono text-[13px] text-muted hover:text-accent border border-white/5 hover:border-accent px-8 py-5 flex items-center gap-3 transition-all no-underline"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <span>{link.icon}</span>
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
