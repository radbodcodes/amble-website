"use client";

import Image from "next/image";
import { AnimateOnScroll } from "./animate-on-scroll";

export function Interlude() {
  return (
    <section className="relative h-[280px] md:h-[400px] overflow-hidden">
      <Image
        src="/interlude-city.jpg"
        alt=""
        fill
        className="object-cover grayscale contrast-[1.05]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,22,20,0.75)_0%,rgba(140,82,42,0.65)_100%)]" />
      <div className="relative z-[2] flex items-center justify-center h-full px-6">
        <AnimateOnScroll>
          <p className="font-serif text-2xl md:text-[38px] font-normal text-white text-center leading-[1.3]">
            Technology is easy to acquire.
            <br />
            Turning it into real <em>value</em> is the hard part.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
