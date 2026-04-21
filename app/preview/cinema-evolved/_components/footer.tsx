export function CinemaFooter() {
  return (
    <footer className="paper-section relative px-6 md:px-10 lg:px-14 pt-16 pb-10 border-t border-[color:var(--ink)]/15">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-12 gap-6 items-end border-b border-[color:var(--ink)]/15 pb-12 mb-8">
          <div className="col-span-12 md:col-span-6">
            <p className="serif font-light italic text-[56px] md:text-[88px] leading-[0.92] text-[color:var(--ink)]">
              Amble <span className="text-[color:var(--copper-deep)]">&amp;</span> Co.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:text-right">
            <a
              href="mailto:letswalk@ambleandco.com"
              className="link-inline text-[24px] md:text-[30px] font-light"
            >
              letswalk@ambleandco.com
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 text-[13px] text-[color:var(--ink)]/55">
          <span>© {new Date().getFullYear()} · Amble &amp; Co.</span>
          <span>Unhurried thinking. Unparalleled results.</span>
        </div>
      </div>
    </footer>
  );
}
