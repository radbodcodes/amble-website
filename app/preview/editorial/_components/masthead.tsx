"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function EditorialMasthead() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[#F3EADB]/95 backdrop-blur border-b border-[#14100D]" : "bg-[#F3EADB] border-b border-[#14100D]"
      }`}
    >
      <div className="px-6 md:px-10 lg:px-14 py-3 flex items-center justify-between">
        <div className="mono text-[10px] uppercase tracking-[0.22em] text-[#14100D]/70 flex items-center gap-5">
          <span>Vol. I · No. 1</span>
          <span className="hidden md:inline">{new Date().getFullYear()}</span>
        </div>
        <Link href="/preview" className="editorial-italic text-[22px] md:text-[28px] text-[#14100D]">
          Amble &amp; Co.
        </Link>
        <div className="mono text-[10px] uppercase tracking-[0.22em] text-[#14100D]/70 hidden md:flex items-center gap-5">
          <a href="#contact" className="hover:text-[#A8673E]">Let&apos;s Walk →</a>
        </div>
      </div>
      <nav className="px-6 md:px-10 lg:px-14 py-2 border-t border-[#14100D]/25 flex items-center justify-center gap-8 mono text-[10px] uppercase tracking-[0.25em]">
        <a href="#outcomes" className="hover:text-[#A8673E]">Practice</a>
        <span className="text-[#14100D]/30">✦</span>
        <a href="#methodology" className="hover:text-[#A8673E]">Method</a>
        <span className="text-[#14100D]/30">✦</span>
        <a href="#about" className="hover:text-[#A8673E]">Masthead</a>
        <span className="text-[#14100D]/30">✦</span>
        <a href="#contact" className="hover:text-[#A8673E]">Correspondence</a>
      </nav>
    </header>
  );
}
