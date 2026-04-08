"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StarMotif } from "./star-motif";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 py-20 md:px-12 lg:px-20 overflow-hidden">
      {/* B&W city photo */}
      <Image
        src="/hero-city.jpg"
        alt=""
        fill
        className="object-cover grayscale contrast-[1.1]"
        priority
      />

      {/* Warm copper overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(140,82,42,0.93)_0%,rgba(168,103,62,0.88)_30%,rgba(180,110,65,0.85)_60%,rgba(140,82,42,0.90)_100%)]" />

      {/* Star motifs */}
      <StarMotif size={28} className="absolute top-[18%] right-[14%] opacity-20 z-[1]" />
      <StarMotif size={18} className="absolute top-[50%] right-[28%] opacity-[0.12] z-[1]" />
      <StarMotif size={14} className="absolute bottom-[18%] right-[10%] opacity-[0.15] z-[1]" />

      {/* Content */}
      <div className="relative z-[2] max-w-[780px]">
        <motion.h1
          className="font-serif text-5xl md:text-6xl lg:text-[76px] font-normal text-white leading-[1.08] tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Unhurried Thinking,
          <br />
          <em>Unparalleled</em> Results.
        </motion.h1>

        <motion.p
          className="text-[17px] md:text-[19px] text-white/85 leading-relaxed max-w-[520px] mt-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        >
          We partner with forward-thinking organizations who want to turn
          their AI curiosity into AI strategy.
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block bg-white text-primary px-9 py-4 rounded-sm font-semibold text-[15px] tracking-wide hover:-translate-y-0.5 hover:shadow-lg transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
        >
          Let&apos;s Walk
        </motion.a>
      </div>
    </section>
  );
}
