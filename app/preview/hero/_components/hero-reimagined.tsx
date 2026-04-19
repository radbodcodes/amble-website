"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function BigStar({
  size = 400,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

export function HeroReimagined() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const starRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const starScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const lineX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const lineX2 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero-reimagined"
      className="relative min-h-[120vh] overflow-hidden bg-[#1A1614]"
    >
      <Image
        src="/hero-city.jpg"
        alt=""
        fill
        className="object-cover grayscale contrast-[1.15] opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(168,103,62,0.55)_0%,rgba(26,22,20,0.92)_70%)]" />

      {/* Gigantic rotating star behind everything */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#A8673E]/22 pointer-events-none"
        style={{ rotate: starRotate, scale: starScale }}
      >
        <BigStar size={720} />
      </motion.div>

      {/* Sticky content */}
      <motion.div
        className="sticky top-0 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-24"
        style={{ opacity: contentOpacity }}
      >
        <div className="relative max-w-[1400px] mx-auto w-full">
          {/* Top frame */}
          <div className="flex items-center gap-4 mb-10">
            <motion.span
              className="inline-block w-16 h-px bg-[#E2B08E]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformOrigin: "left" }}
            />
            <span className="text-[#E2B08E] text-[11px] font-semibold uppercase tracking-[0.32em]">
              Est. Amble &amp; Co.
            </span>
          </div>

          {/* Kinetic display */}
          <motion.h1
            className="font-serif text-white leading-[0.88] tracking-[-0.04em]"
            style={{ y: subtitleY }}
          >
            <motion.span
              className="block text-[clamp(48px,9vw,140px)] font-light"
              style={{ x: lineX }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            >
              Unhurried
            </motion.span>
            <motion.span
              className="block text-[clamp(48px,9vw,140px)] pl-[6vw] md:pl-[12vw]"
              style={{ x: lineX2 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            >
              thinking,
            </motion.span>
            <motion.span
              className="block text-[clamp(48px,9vw,140px)] italic font-extralight text-[#E2B08E]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            >
              unparalleled
            </motion.span>
            <motion.span
              className="block text-[clamp(48px,9vw,140px)] font-light pl-[18vw] md:pl-[28vw]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            >
              results.
            </motion.span>
          </motion.h1>

          <div className="mt-16 md:mt-20 grid grid-cols-12 gap-6 items-end">
            <motion.p
              className="col-span-12 md:col-span-6 text-[16px] md:text-[18px] text-white/80 leading-[1.7] max-w-[500px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              We partner with forward-thinking organizations that want to
              transform AI curiosity into AI strategy.
            </motion.p>
            <motion.div
              className="col-span-12 md:col-span-6 md:justify-self-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-5 text-white"
              >
                <span className="relative w-14 h-14 rounded-full border border-white/70 flex items-center justify-center overflow-hidden">
                  <span className="absolute inset-0 bg-[#E2B08E] scale-0 group-hover:scale-100 transition-transform duration-400 rounded-full" />
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="relative z-10 group-hover:text-[#1A1614] transition-colors"
                  >
                    <path
                      d="M1 11L11 1M11 1H3M11 1V9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                <span className="text-[14px] font-semibold tracking-[0.22em] uppercase">
                  Let&apos;s Walk
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom baseline */}
      <div className="absolute bottom-8 left-0 right-0 px-6 md:px-12 lg:px-20 z-[3] flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-white/55">
        <span>Strategy · AI · Training · Advisory</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          ↓ Scroll
        </motion.span>
      </div>
    </section>
  );
}
