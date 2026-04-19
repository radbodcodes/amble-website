"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Practice", href: "#practice" },
  { label: "Method", href: "#method" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export function SophisticatedNav() {
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
          ? "bg-[#F5F1EB]/88 backdrop-blur-xl border-b border-[color:var(--hairline-soft)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="grid grid-cols-12 items-center px-6 md:px-10 lg:px-14 py-5">
        <div className="col-span-3 meta-sm text-[color:var(--ink-faint)] hidden md:block">
          A · CO
        </div>
        <Link
          href="/preview"
          className="col-span-6 text-center serif text-[22px] md:text-[26px] text-[color:var(--ink)]"
        >
          Amble <span className="text-[color:var(--copper)] italic">&amp;</span> Co.
        </Link>
        <ul className="col-span-3 hidden md:flex items-center justify-end gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="meta-sm text-[color:var(--ink-soft)] hover:text-[color:var(--copper)] transition-colors"
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
