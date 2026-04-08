"use client";

import Image from "next/image";
import { AnimateOnScroll } from "./animate-on-scroll";

export function About() {
  return (
    <section id="about" className="relative px-6 py-20 md:px-12 lg:px-20 lg:py-[120px] overflow-hidden">
      {/* B&W city photo with people */}
      <Image
        src="/Crosswalk.png"
        alt=""
        fill
        className="object-cover grayscale contrast-[1.05]"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,22,20,0.88)_0%,rgba(26,22,20,0.92)_100%)]" />

      <div className="relative z-[2] mx-auto max-w-[720px]">
        <AnimateOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-pale mb-4">
            About
          </p>
          <h2 className="font-serif text-3xl md:text-[42px] font-normal text-white leading-[1.2] mb-6">
            We&apos;ve been where you are.
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <p className="text-[17px] text-white/70 leading-[1.75] mb-4">
            Our team has built companies, led strategy inside corporates, and
            advised startups from first pitch to scale. We&apos;ve sat in the
            boardroom, the war room, and the founder&apos;s living room.
          </p>
          <p className="text-[17px] text-white/70 leading-[1.75]">
            That range matters. Whether you&apos;re a leadership team inside a
            large organization trying to modernize, or a founder figuring out
            what comes next, we&apos;ve been on your side of the table. We bring
            frameworks from consulting, instincts from building, and the patience
            that comes from knowing there are no shortcuts.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
