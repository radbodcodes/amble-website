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
      <div className="grid grid-cols-12 items-center px-6 md:px-10 lg:px-14 py-6">
        <div className="col-span-3 meta-sm text-white/50 hidden md:block">
          A · CO
        </div>
        <Link
          href="/preview"
          className="col-span-6 text-center serif italic font-light text-[22px] md:text-[26px] text-white"
        >
          Amble <span className="text-[color:var(--copper)]">&amp;</span> Co.
        </Link>
        <ul className="col-span-3 hidden md:flex items-center justify-end gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="meta-sm text-white/70 hover:text-[color:var(--copper)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
