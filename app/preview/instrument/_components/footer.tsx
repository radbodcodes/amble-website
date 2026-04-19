export function InstrumentFooter() {
  return (
    <footer className="relative px-6 md:px-10 lg:px-14 pt-16 pb-10 bg-[color:var(--paper-deep)] text-[color:var(--paper)]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-12 gap-6 items-end border-b border-[color:var(--paper)]/20 pb-12 mb-8">
          <div className="col-span-12 md:col-span-6">
            <p className="mono text-[14px] uppercase tracking-[0.2em] text-[color:var(--copper-bright)] mb-3">
              / amble &amp; co / build.001
            </p>
            <p className="serif font-light italic text-[48px] md:text-[72px] leading-[0.92] text-[color:var(--paper)]">
              Amble <span className="text-[color:var(--copper-bright)]">&amp;</span> Co.
            </p>
            <p className="mt-4 meta-sm text-[color:var(--paper)]/50">
              unhurried_thinking · unparalleled_results
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:text-right space-y-3">
            <p className="meta-sm text-[color:var(--paper)]/40">direct_line:</p>
            <a
              href="mailto:letswalk@ambleandco.com"
              className="mono font-medium text-[16px] md:text-[20px] text-[color:var(--copper-bright)] hover:text-[color:var(--paper)] transition-colors"
            >
              letswalk@ambleandco.com
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mono meta-sm text-[color:var(--paper)]/40">
          <span>
            © {new Date().getFullYear()} Amble &amp; Co. · rights.reserved
          </span>
          <span className="flex items-center gap-6">
            <span>v4.7.0</span>
            <span className="flex items-center gap-2">
              <span className="signal-dot" />
              <span>systems.nominal</span>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
