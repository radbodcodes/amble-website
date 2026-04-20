export function MaisonFooter() {
  return (
    <footer className="relative px-6 md:px-12 lg:px-20 pt-20 pb-12 bg-[color:var(--ivory)] border-t border-[color:var(--hairline)]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center pb-14 mb-10 border-b border-[color:var(--hairline)]">
          <div
            aria-hidden
            className="w-1 h-1 rotate-45 bg-[color:var(--gold)] mx-auto mb-8"
          />
          <p className="display font-light text-[48px] md:text-[84px] leading-[0.95] tracking-[0.02em] uppercase text-[color:var(--ink)]">
            Amble{" "}
            <span
              className="specimen normal-case"
              style={{ color: "var(--accent)" }}
            >
              &amp;
            </span>{" "}
            Co
          </p>
          <p className="mt-6 specimen text-[color:var(--ink-faint)] text-[17px]">
            Unhurried thinking. Unparalleled results.
          </p>
          <a
            href="mailto:letswalk@ambleandco.com"
            className="mt-8 inline-block specimen text-[17px] md:text-[19px] text-[color:var(--accent)] hover:text-[color:var(--ink)] transition-colors"
          >
            letswalk@ambleandco.com
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 caps text-[color:var(--ink-faint)]">
          <span>
            &copy; {new Date().getFullYear()} · Amble &amp; Co · All rights
            reserved
          </span>
          <span>Maison · New York</span>
        </div>
      </div>
    </footer>
  );
}
