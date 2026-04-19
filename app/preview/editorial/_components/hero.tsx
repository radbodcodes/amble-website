"use client";

import Image from "next/image";

export function EditorialHero() {
  return (
    <section className="relative px-6 md:px-10 lg:px-14 pt-14 md:pt-20 pb-20 md:pb-28 border-b-4 border-[#14100D]">
      <div className="folio text-[#14100D] mb-10 md:mb-14">
        <span>Feature · Issue One</span>
        <span>The Consulting Dispatch</span>
      </div>

      <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-start">
        {/* Left: oversized serif masthead */}
        <div className="col-span-12 lg:col-span-8 relative">
          <h1 className="editorial font-black text-[clamp(56px,13vw,200px)] leading-[0.82] text-[#14100D]">
            Unhurried
            <br />
            <span className="editorial-italic font-normal text-[#A8673E]">
              thinking,
            </span>
            <br />
            unparalleled
            <br />
            <span className="editorial-italic font-normal text-[#A8673E]">
              results.
            </span>
          </h1>

          {/* Decorative rotated block */}
          <div className="absolute -top-4 right-0 md:right-12 rotate-[8deg] bg-[#A8673E] text-[#F3EADB] px-4 py-2 mono text-[10px] uppercase tracking-[0.22em] hidden md:block">
            An essay in five acts
          </div>
        </div>

        {/* Right: lede + image stack */}
        <aside className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/hero-city.jpg"
              alt=""
              fill
              className="object-cover grayscale contrast-[1.1]"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(168,103,62,0.28)_0%,rgba(92,36,16,0.55)_100%)] mix-blend-multiply" />
            {/* Caption */}
            <div className="absolute bottom-3 left-3 right-3 mono text-[9px] uppercase tracking-[0.22em] text-[#F3EADB] flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-[#F3EADB]" />
              <span>Plate i. A city at work.</span>
            </div>
          </div>

          <p className="editorial-italic text-[#14100D] text-[22px] md:text-[26px] leading-[1.35]">
            &ldquo;We partner with forward-thinking organizations that want to
            transform AI curiosity into AI strategy.&rdquo;
          </p>

          <a
            href="#contact"
            className="group self-start relative inline-flex items-center gap-3 px-6 py-3 bg-[#14100D] text-[#F3EADB] mono text-[11px] uppercase tracking-[0.28em] hover:bg-[#A8673E] transition-colors"
          >
            <span>Let&apos;s Walk</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>

          <div className="mono text-[10px] uppercase tracking-[0.22em] text-[#14100D]/60 space-y-1">
            <p>By the Partners of Amble &amp; Co.</p>
            <p>
              Pages 2–9 · Reading time, without hurry
            </p>
          </div>
        </aside>
      </div>

      {/* Marquee of the promise */}
      <div className="relative mt-16 md:mt-24 overflow-hidden border-y-2 border-[#14100D] py-6">
        <div className="marquee flex gap-16 whitespace-nowrap editorial text-[#14100D] text-[56px] md:text-[84px] leading-none">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              <span>Strategy</span>
              <span className="editorial-italic text-[#A8673E]">·</span>
              <span>AI</span>
              <span className="editorial-italic text-[#A8673E]">·</span>
              <span>Training</span>
              <span className="editorial-italic text-[#A8673E]">·</span>
              <span>Advisory</span>
              <span className="editorial-italic text-[#A8673E]">·</span>
              <span className="editorial-italic">Unhurried</span>
              <span className="editorial-italic text-[#A8673E]">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
