export function ApothecaryFooter() {
  return (
    <footer className="relative px-6 md:px-10 lg:px-14 pt-16 pb-10 bg-[color:var(--paper)] border-t-2 border-[color:var(--ink)]">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-12 gap-8 pb-10 border-b border-[color:var(--rule)]">
          <div className="col-span-12 md:col-span-5">
            <p className="serif text-[40px] md:text-[56px] leading-[0.95] text-[color:var(--ink)] tracking-[-0.02em]">
              Amble{" "}
              <span className="italic" style={{ color: "var(--amber)" }}>
                &amp;
              </span>{" "}
              Co.
            </p>
            <p className="mt-5 serif italic text-[17px] text-[color:var(--ink-soft)]">
              Unhurried thinking. Unparalleled results.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-6 items-end">
            <div>
              <span className="data text-[color:var(--ink-faint)]">
                Practice
              </span>
              <a
                href="mailto:letswalk@ambleandco.com"
                className="mt-4 block serif italic text-[17px] text-[color:var(--amber)] hover:text-[color:var(--ink)] transition-colors"
              >
                letswalk@ambleandco.com
              </a>
            </div>
            <div>
              <span className="data text-[color:var(--ink-faint)]">
                Established
              </span>
              <p className="mt-4 mono text-[13px] text-[color:var(--ink)]">
                NYC · 2024 · MMXXIV
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 data text-[color:var(--ink-faint)]">
          <span>
            &copy; {new Date().getFullYear()} · Amble &amp; Co. · All rights
            reserved
          </span>
          <span>Typeset in EB Garamond · IBM Plex Mono</span>
        </div>
      </div>
    </footer>
  );
}
