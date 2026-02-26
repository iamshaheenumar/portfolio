"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/lib/data";

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="border-t border-b border-white/5 px-8 md:px-16 py-10 grid grid-cols-2 md:grid-cols-4"
    >
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          className="px-0 md:px-10 py-4 md:py-0 border-r border-white/5 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
        >
          <div className="font-serif text-[52px] text-accent leading-none italic">
            {s.num}
          </div>
          <div className="text-[13px] text-muted mt-2 tracking-wide">
            {s.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
