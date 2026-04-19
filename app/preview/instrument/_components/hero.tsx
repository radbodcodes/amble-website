"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function InstrumentHero() {
  return (
    <section className="relative min-h-[96vh] overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-10 lg:px-14">
      <div className="grid-bg" />
      <div className="scanline" />

      {/* Top instrument bar — coordinates, grid refs */}
      <div className="relative z-[2] flex items-center justify-between mb-16 md:mb-24 reveal-fade pb-4 border-b border-[color:var(--hairline)]">
        <div className="flex items-center gap-6 meta text-[color:var(--ink-faint)]">
          <span className="bracket-open bracket-close">
            <span className="text-[color:var(--copper)]">amble.co</span>
          </span>
          <span className="hidden md:inline">/ build.001</span>
          <span className="hidden md:inline">/ N40.7° W73.9°</span>
        </div>
        <div className="flex items-center gap-4 meta text-[color:var(--ink-faint)]">
          <span className="signal-dot" />
          <span>LIVE · STRATEGY STACK v4.7</span>
        </div>
      </div>

      <div className="relative z-[2] grid grid-cols-12 gap-8 lg:gap-12 items-end">
        <div className="col-span-12 lg:col-span-7">
          <p className="mono meta text-[color:var(--copper)] mb-8 reveal d-100">
            <span className="prompt" />01 · Initialize
          </p>
          <h1 className="serif font-light text-[color:var(--ink)] text-[clamp(44px,7.2vw,108px)] leading-[1.02] tracking-[-0.02em]">
            <span className="block reveal d-200">Unhurried</span>
            <span className="block reveal d-400">
              thinking,
              <span className="italic text-[color:var(--copper)]"> unparalleled</span>
            </span>
            <span className="block reveal d-600">
              <span className="italic text-[color:var(--copper)]">results.</span>
            </span>
          </h1>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
            <p className="md:col-span-8 reveal d-700 mono text-[13px] text-[color:var(--ink-soft)] leading-[1.8] max-w-[560px]">
              <span className="text-[color:var(--copper)]">&gt; </span>
              partner_with(orgs).transform(ai_curiosity, ai_strategy);
              <br />
              <span className="text-[color:var(--copper)]">&gt; </span>
              deliver(plan, systems, team);
              <br />
              <span className="text-[color:var(--copper)]">&gt; </span>
              stay_until(it_works === true);
            </p>
            <div className="md:col-span-4 reveal d-800">
              <a
                href="#contact"
                className="link mono text-[13px] text-[color:var(--ink)] uppercase tracking-[0.2em]"
              >
                <span>./start_walk</span>
                <svg className="arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                  <path d="M9 1L13 5M13 5L9 9M13 5H0" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 reveal-slow d-500">
          <figure className="relative aspect-[4/5] overflow-hidden max-w-[460px] mx-auto lg:ml-auto lg:mr-0">
            {/* Measurement marks — corner technical detail */}
            <span className="absolute top-0 left-0 px-2 py-1 mono text-[9px] text-[color:var(--copper)] bg-[color:var(--paper)]/90 z-10 uppercase tracking-[0.18em]">
              00.00
            </span>
            <span className="absolute top-0 right-0 px-2 py-1 mono text-[9px] text-[color:var(--copper)] bg-[color:var(--paper)]/90 z-10 uppercase tracking-[0.18em]">
              N40.74
            </span>
            <span className="absolute bottom-0 left-0 px-2 py-1 mono text-[9px] text-[color:var(--copper)] bg-[color:var(--paper)]/90 z-10 uppercase tracking-[0.18em]">
              W73.99
            </span>
            <span className="absolute bottom-0 right-0 px-2 py-1 mono text-[9px] text-[color:var(--copper)] bg-[color:var(--paper)]/90 z-10 uppercase tracking-[0.18em]">
              f/2.8 · 1/60
            </span>

            <Image
              src="/hero-city.jpg"
              alt=""
              fill
              className="object-cover grayscale contrast-[1.1]"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,19,16,0.05)_0%,rgba(156,94,55,0.18)_100%)]" />
          </figure>

          <figcaption className="mt-4 flex items-center justify-between max-w-[460px] mx-auto lg:ml-auto lg:mr-0">
            <span className="meta-sm text-[color:var(--ink-faint)]">
              / image_001.jpg
            </span>
            <motion.span
              className="meta-sm text-[color:var(--copper)] flex items-center gap-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <span className="signal-dot" />
              SAMPLED
            </motion.span>
          </figcaption>
        </div>
      </div>

      {/* Metrics bar */}
      <div className="relative z-[2] mt-20 md:mt-28 pt-6 border-t border-[color:var(--hairline)] reveal-fade d-800 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "capabilities", value: "04" },
          { label: "frameworks", value: "12+" },
          { label: "pace", value: "deliberate" },
          { label: "bullshit", value: "00.00" },
        ].map((m) => (
          <div key={m.label} className="flex items-baseline gap-3">
            <span className="mono text-[24px] md:text-[32px] font-medium text-[color:var(--copper)] leading-none">
              {m.value}
            </span>
            <span className="meta-sm text-[color:var(--ink-faint)]">
              / {m.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
