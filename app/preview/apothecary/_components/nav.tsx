"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { n: "01", label: "Services", href: "#practice" },
  { n: "02", label: "Protocol", href: "#method" },
  { n: "03", label: "Dossier", href: "#studio" },
  { n: "04", label: "Intake", href: "#contact" },
];

export function ApothecaryNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#FCFBF6]/95 backdrop-blur-md border-b border-[color:var(--rule)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="ruler" aria-hidden />
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-14 py-5">
        <Link
          href="/preview"
          className="flex items-baseline gap-3"
        >
          <span className="serif text-[24px] md:text-[28px] text-[color:var(--ink)] tracking-[-0.01em]">
            Amble <span className="italic" style={{ color: "var(--amber)" }}>&amp;</span> Co.
          </span>
          <span className="data text-[color:var(--ink-faint)] hidden md:inline">
            · Clinical Practice
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="flex items-baseline gap-2 group"
              >
                <span className="data text-[color:var(--amber)]">{l.n}</span>
                <span className="sc text-[14px] text-[color:var(--ink-soft)] group-hover:text-[color:var(--ink)] transition-colors">
                  {l.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
