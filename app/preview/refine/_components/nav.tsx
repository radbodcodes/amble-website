"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "What", href: "#outcomes" },
  { label: "How", href: "#methodology" },
  { label: "Who", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function RefineNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F5EFE8]/85 backdrop-blur-md border-b border-[#A8673E]/15"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-baseline justify-between px-6 py-5 md:px-10 lg:px-16">
        <Link
          href="/preview"
          className={`serif text-[22px] tracking-tight transition-colors ${
            scrolled ? "text-[#1A1614]" : "text-white"
          }`}
          style={{ fontStyle: "italic" }}
        >
          Amble <span className="text-[#A8673E]">&</span> Co.
        </Link>
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-[13px] font-medium tracking-[0.08em] uppercase transition-colors ${
                  scrolled
                    ? "text-[#1A1614]/70 hover:text-[#A8673E]"
                    : "text-white/75 hover:text-white"
                }`}
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
