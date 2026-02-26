"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);

  return (
    <section
      id="experience"
      className="bg-surface px-8 md:px-16 py-24 md:py-32"
    >
      <div className="font-mono text-[10px] text-accent tracking-[0.25em] uppercase mb-12 flex items-center gap-4 after:content-[''] after:flex-1 after:h-px after:bg-white/5">
        Work History
      </div>
      <h2 className="font-serif text-[clamp(40px,5vw,64px)] font-normal leading-tight mb-16">
        Where I&#39;ve
        <br />
        <em className="italic text-muted">made an impact</em>
      </h2>

      <div ref={ref} className="flex flex-col">
        {experiences.map((exp, i) => (
          <ExperienceItem key={exp.id} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}

function ExperienceItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-4 md:gap-12 py-10 border-b border-white/5 first:border-t first:border-white/5 items-start"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="font-mono text-[11px] text-muted tracking-[0.1em] md:pt-1">
        {exp.period}
      </div>

      <div>
        <div className="font-serif text-2xl mb-1">{exp.company}</div>
        <div className="font-mono text-[13px] text-accent2 tracking-wide mb-4">
          {exp.role}
        </div>
        <p className="text-sm leading-relaxed text-muted max-w-xl">
          {exp.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-3 py-1 border border-white/5 text-muted tracking-[0.08em]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="hidden md:block font-serif text-[80px] text-white/[0.03] leading-none italic select-none">
        {exp.id}
      </div>
    </motion.div>
  );
}
