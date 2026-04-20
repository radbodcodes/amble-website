"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Work", href: "#practice" },
  { label: "Method", href: "#method" },
  { label: "Studio", href: "#studio" },
  { label: "Talk", href: "#contact" },
];

export function StatementNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFF6EE]/96 backdrop-blur-md border-b-2 border-[color:var(--ink)]"
          : "bg-transparent border-b-2 border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-14 py-4">
        <Link
          href="/preview"
          className="display text-[26px] md:text-[32px] leading-none text-[color:var(--ink)]"
        >
          Amble<span style={{ color: "var(--coral)" }}>.</span>
        </Link>
        <ul className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-block label px-4 py-2 rounded-full border-2 border-[color:var(--ink)] text-[color:var(--ink)] hover:bg-[color:var(--coral)] hover:border-[color:var(--coral)] transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-block label px-5 py-2 rounded-full bg-[color:var(--ink)] text-[color:var(--cream)] hover:bg-[color:var(--coral-deep)] transition-colors"
        >
          Let&apos;s walk →
        </a>
      </div>
    </nav>
  );
}
