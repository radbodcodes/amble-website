"use client";

import { AnimateOnScroll } from "./animate-on-scroll";

export function About() {
  return (
    <section id="about" className="bg-dark px-6 py-20 md:px-12 lg:px-20 lg:py-[120px]">
      <div className="mx-auto max-w-[720px]">
        <AnimateOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-pale mb-4">
            About
          </p>
          <h2 className="font-serif text-3xl md:text-[40px] font-normal text-white leading-[1.2] mb-6">
            Walking alongside organizations that are ready to tackle
            what&apos;s hard.
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <p className="text-[16px] text-white/70 leading-[1.75] mb-4">
            Amble & Co. partners with organizations in beauty, wellness, and
            CPG who are ready to embrace AI and new ways of working.
          </p>
          <p className="text-[16px] text-white/70 leading-[1.75]">
            Acquiring technology is easy. Turning it into real value at the
            counter, across regions, and on a global scale is hard. If
            you&apos;re ready to tackle what&apos;s hard, we&apos;ll walk
            alongside you to make it easy.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
