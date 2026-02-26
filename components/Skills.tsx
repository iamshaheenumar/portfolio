"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="px-8 md:px-16 py-24 md:py-32">
      <div className="font-mono text-[10px] text-accent tracking-[0.25em] uppercase mb-12 flex items-center gap-4 after:content-[''] after:flex-1 after:h-px after:bg-white/5">
        Expertise
      </div>
      <h2 className="font-serif text-[clamp(40px,5vw,64px)] font-normal leading-tight mb-16">
        Tools &amp;
        <br />
        <em className="italic text-muted">technologies</em>
      </h2>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="group bg-bg hover:bg-surface p-9 relative overflow-hidden transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-accent group-hover:h-full transition-all duration-400 ease-out" />

            <div className="text-[28px] mb-4">{skill.icon}</div>
            <div className="font-serif text-[22px] mb-2">{skill.name}</div>
            <div className="text-[13px] text-muted leading-relaxed">
              {skill.items}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
