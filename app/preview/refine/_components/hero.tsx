"use client";

import Image from "next/image";

export function RefineHero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-end">
      <Image
        src="/hero-city.jpg"
        alt=""
        fill
        className="object-cover grayscale contrast-[1.1]"
        priority
      />
      {/* Deeper, directional copper wash */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(26,22,20,0.6)_0%,rgba(140,82,42,0.72)_45%,rgba(168,103,62,0.62)_100%)]" />
      {/* Subtle vignette for the baseline */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(26,22,20,0.5)_0%,transparent_60%)]" />

      {/* Editorial frame */}
      <div className="absolute top-[22vh] left-6 md:left-10 lg:left-16 z-[2] flex items-center gap-3 reveal delay-1">
        <span className="inline-block w-10 h-px bg-white/70" />
        <span className="text-white/80 text-[11px] font-semibold uppercase tracking-[0.28em]">
          Amble &amp; Co. — est. unhurried
        </span>
      </div>

      {/* Main display */}
      <div className="relative z-[2] w-full px-6 md:px-10 lg:px-16 pb-16 md:pb-24 lg:pb-28">
        <div className="grid grid-cols-12 gap-6 items-end">
          <h1 className="col-span-12 lg:col-span-10 display text-white text-[clamp(56px,11vw,168px)] leading-[0.92] tracking-[-0.035em]">
            <span className="block reveal">Unhurried</span>
            <span className="block reveal delay-1 pl-[8vw] md:pl-[14vw]">
              thinking,
            </span>
            <span className="block reveal delay-2 italic font-light">
              unparalleled
            </span>
            <span className="block reveal delay-3 pl-[16vw] md:pl-[26vw] text-[#E2B08E]">
              results.
            </span>
          </h1>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-7 lg:col-span-5 lg:col-start-2 reveal delay-4">
            <p className="text-white/85 text-[16px] md:text-[18px] leading-[1.65] max-w-[520px]">
              We partner with forward-thinking organizations that want to turn
              AI curiosity into AI strategy. No deck delivered and disappeared.
              A plan, the systems, and the team that runs them.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-4 lg:col-start-8 flex md:justify-end reveal delay-5">
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 text-white"
            >
              <span className="w-12 h-12 rounded-full border border-white/70 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-[#A8673E] group-hover:border-white">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1 11L11 1M11 1H3M11 1V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
              <span className="text-[15px] font-medium tracking-wide uppercase">
                Let&apos;s walk
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Baseline meta row */}
      <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10 lg:left-16 lg:right-16 z-[2] flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.2em] text-white/55 reveal delay-5">
        <span>N. America · Global</span>
        <span>Strategy · AI · Training · Advisory</span>
        <span className="hidden md:inline">Scroll ↓</span>
      </div>
    </section>
  );
}
