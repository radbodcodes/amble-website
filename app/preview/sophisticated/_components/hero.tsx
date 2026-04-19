"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function SophisticatedHero() {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 1.2 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 1.2 });
  const imgX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const imgY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouse}
      className="relative min-h-[96vh] overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-10 lg:px-14"
    >
      {/* Subtle gradient mesh */}
      <div className="mesh" />

      {/* Top meta row */}
      <div className="relative z-[2] flex items-center justify-between mb-16 md:mb-24 reveal-fade">
        <span className="meta text-[color:var(--ink-faint)]">
          Amble &amp; Co. · Strategy &amp; AI · Est. MMXXIV
        </span>
        <span className="meta text-[color:var(--ink-faint)] hidden md:inline">
          Issue <span className="text-[color:var(--copper)]">001</span> / Unhurried
        </span>
      </div>

      <div className="relative z-[2] grid grid-cols-12 gap-8 lg:gap-12 items-end">
        {/* Left: headline + lede */}
        <div className="col-span-12 lg:col-span-7 xl:col-span-7">
          <h1 className="serif font-light text-[color:var(--ink)] text-[clamp(44px,7vw,104px)] leading-[1.02] tracking-[-0.02em]">
            <span className="block reveal d-100">Unhurried</span>
            <span className="block reveal d-300">
              thinking,
              <span className="serif italic font-light text-[color:var(--copper)]">
                {" "}unparalleled
              </span>
            </span>
            <span className="block reveal d-500">
              <span className="serif italic font-light text-[color:var(--copper)]">
                results.
              </span>
            </span>
          </h1>

          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
            <p className="md:col-span-8 reveal d-700 text-[16px] md:text-[18px] text-[color:var(--ink-soft)] leading-[1.7] max-w-[520px]">
              We partner with forward-thinking organizations that want to
              transform AI curiosity into AI strategy. No deck delivered and
              disappeared. A plan, the systems, and the team that runs them.
            </p>
            <div className="md:col-span-4 reveal d-800">
              <a
                href="#contact"
                className="link mono text-[13px] text-[color:var(--ink)] uppercase tracking-[0.2em]"
              >
                <span>Let&apos;s Walk</span>
                <svg
                  className="arrow"
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M9 1L13 5M13 5L9 9M13 5H0"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right: framed portrait */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-5 reveal-slow d-500">
          <motion.figure
            className="relative aspect-[4/5] overflow-hidden max-w-[460px] mx-auto lg:ml-auto lg:mr-0"
            style={{ x: imgX, y: imgY }}
          >
            {/* Crosshair corners */}
            <span className="absolute -top-px -left-px w-4 h-4 z-10 border-t border-l border-[color:var(--ink)]/40" />
            <span className="absolute -top-px -right-px w-4 h-4 z-10 border-t border-r border-[color:var(--ink)]/40" />
            <span className="absolute -bottom-px -left-px w-4 h-4 z-10 border-b border-l border-[color:var(--ink)]/40" />
            <span className="absolute -bottom-px -right-px w-4 h-4 z-10 border-b border-r border-[color:var(--ink)]/40" />

            <Image
              src="/hero-city.jpg"
              alt=""
              fill
              className="object-cover grayscale contrast-[1.08]"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,24,21,0.05)_0%,rgba(156,94,55,0.18)_100%)]" />
          </motion.figure>

          {/* Photo caption */}
          <figcaption className="mt-4 flex items-center justify-between max-w-[460px] mx-auto lg:ml-auto lg:mr-0">
            <span className="meta-sm text-[color:var(--ink-faint)]">
              Plate i. Work in progress.
            </span>
            <span className="meta-sm text-[color:var(--copper)]">
              N 40° 45′ / W 73° 59′
            </span>
          </figcaption>
        </div>
      </div>

      {/* Bottom meta row */}
      <div className="relative z-[2] mt-20 md:mt-28 pt-8 border-t border-[color:var(--hairline)] reveal-fade d-800 flex flex-wrap items-center justify-between gap-4">
        <span className="meta text-[color:var(--ink-faint)]">
          · Strategy &nbsp;·&nbsp; AI Implementation &nbsp;·&nbsp; Training &nbsp;·&nbsp; Embedded Advisory
        </span>
        <motion.span
          className="meta text-[color:var(--ink-faint)] flex items-center gap-3"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--copper)]" />
          Scroll
        </motion.span>
      </div>
    </section>
  );
}
