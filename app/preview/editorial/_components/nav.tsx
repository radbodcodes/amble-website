"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Practice", href: "#practice" },
  { label: "Method", href: "#method" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export function EditorialNav() {
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
          ? "bg-[#F4EEE3]/92 backdrop-blur-md border-b border-[color:var(--hairline)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="grid grid-cols-12 items-center px-6 md:px-10 lg:px-14 py-6">
        <div className="col-span-3 hidden md:block">
          <span className="chapter text-[color:var(--ink-faint)]">Vol. I · № 001</span>
        </div>
        <Link
          href="/preview"
          className="col-span-6 text-center display italic font-light text-[28px] md:text-[34px] text-[color:var(--ink)]"
        >
          Amble <span className="not-italic text-[color:var(--accent)]">&amp;</span> Co.
        </Link>
        <ul className="col-span-3 hidden md:flex items-center justify-end gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="label text-[color:var(--ink-soft)] hover:text-[color:var(--accent)] transition-colors"
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
