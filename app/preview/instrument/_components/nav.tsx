"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "practice", href: "#practice", num: "01" },
  { label: "method", href: "#method", num: "02" },
  { label: "studio", href: "#studio", num: "03" },
  { label: "contact", href: "#contact", num: "04" },
];

export function InstrumentNav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    const updateTime = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm} ET`);
    };
    updateTime();
    const t = setInterval(updateTime, 30000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(t);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#F1ECE3]/92 backdrop-blur-xl border-b border-[color:var(--hairline)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="grid grid-cols-12 items-center px-6 md:px-10 lg:px-14 py-4">
        <div className="col-span-3 flex items-center gap-3 meta-sm text-[color:var(--ink-faint)]">
          <span className="signal-dot" />
          <span className="hidden md:inline">
            <span className="text-[color:var(--copper)]">A.CO</span> / ONLINE
          </span>
        </div>

        <Link
          href="/preview"
          className="col-span-6 text-center mono font-medium text-[14px] text-[color:var(--ink)] uppercase tracking-[0.18em]"
        >
          <span className="text-[color:var(--copper)]">/</span> amble &amp; co <span className="text-[color:var(--copper)]">/</span>
        </Link>

        <ul className="col-span-3 hidden md:flex items-center justify-end gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group flex items-baseline gap-1.5 meta-sm text-[color:var(--ink-soft)] hover:text-[color:var(--copper)] transition-colors"
              >
                <span className="text-[color:var(--copper)]">{l.num}</span>
                <span>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Thin status strip */}
      <div className="hidden md:flex items-center justify-between px-6 md:px-10 lg:px-14 py-1.5 border-t border-[color:var(--grid)] meta-sm text-[color:var(--ink-faint)] text-[9px]">
        <span>sys.status: nominal · queue: 0 · uptime: 100%</span>
        <span>{time || "00:00 ET"}</span>
      </div>
    </nav>
  );
}
