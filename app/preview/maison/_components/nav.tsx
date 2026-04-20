"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Maison", href: "#practice" },
  { label: "Method", href: "#method" },
  { label: "Atelier", href: "#studio" },
  { label: "Correspondence", href: "#contact" },
];

export function MaisonNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-700 ${
        scrolled
          ? "bg-[#FBF7F0]/95 backdrop-blur-md border-b border-[color:var(--hairline)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="grid grid-cols-12 items-center px-6 md:px-12 lg:px-20 py-7">
        <div className="col-span-3 hidden md:flex items-center gap-3">
          <span
            aria-hidden
            className="w-1 h-1 rotate-45 bg-[color:var(--gold)]"
          />
          <span className="caps text-[color:var(--ink-faint)]">Est. MMXXIV</span>
        </div>
        <Link
          href="/preview"
          className="col-span-6 text-center display font-light text-[24px] md:text-[30px] tracking-[0.22em] text-[color:var(--ink)] uppercase"
        >
          Amble <span className="specimen normal-case text-[color:var(--accent)]">&amp;</span> Co
        </Link>
        <ul className="col-span-3 hidden md:flex items-center justify-end gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="caps text-[color:var(--ink-soft)] hover:text-[color:var(--accent)] transition-colors"
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
