"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Practice", href: "#practice" },
  { label: "Method", href: "#method" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export function CinemaNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-700 ${
        scrolled
          ? "bg-[#0F0C08]/70 backdrop-blur-xl border-b border-white/8"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-14 py-6 gap-6">
        <Link
          href="/preview"
          className="serif italic font-light text-[22px] md:text-[26px] text-[color:var(--paper)]"
        >
          Amble <span className="text-[color:var(--copper-glow)]">&amp;</span> Co.
        </Link>
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-nav">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
