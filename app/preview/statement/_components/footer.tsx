export function StatementFooter() {
  return (
    <footer className="relative bg-[color:var(--ink)] text-[color:var(--cream)] px-6 md:px-10 lg:px-14 pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="border-b-2 border-[color:var(--cream)]/15 pb-14 mb-8">
          <p className="display text-[clamp(88px,18vw,320px)] leading-[0.82] text-[color:var(--cream)]">
            Amble<span style={{ color: "var(--coral)" }}>.</span>
          </p>
          <div className="mt-10 grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-6">
              <p className="label text-[color:var(--coral-pale)] mb-4">
                Tagline
              </p>
              <p className="body text-[18px] md:text-[22px] text-[color:var(--cream)] leading-[1.35]">
                Unhurried thinking. Unparalleled results.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 md:text-right">
              <p className="label text-[color:var(--coral-pale)] mb-4">
                Reach us
              </p>
              <a
                href="mailto:letswalk@ambleandco.com"
                className="body-medium text-[18px] md:text-[22px] text-[color:var(--coral)] hover:text-[color:var(--cream)] transition-colors"
              >
                letswalk@ambleandco.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 label text-[color:var(--cream)]/50">
          <span>
            &copy; {new Date().getFullYear()} · Amble &amp; Co · Made in NYC
          </span>
          <span>Built loud. Walked slow.</span>
        </div>
      </div>
    </footer>
  );
}
