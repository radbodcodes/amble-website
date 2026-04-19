export function SophisticatedFooter() {
  return (
    <footer className="relative px-6 md:px-10 lg:px-14 pt-16 pb-12 bg-[color:var(--paper-deep)] text-[color:var(--paper)]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-12 gap-6 items-end border-b border-[color:var(--paper)]/15 pb-12 mb-8">
          <div className="col-span-12 md:col-span-6">
            <p className="serif font-light italic text-[48px] md:text-[72px] leading-[0.92] text-[color:var(--paper)]">
              Amble <span className="text-[color:var(--copper-pale)]">&amp;</span> Co.
            </p>
            <p className="mt-4 meta-sm text-[color:var(--paper)]/50">
              Unhurried Thinking · Unparalleled Results
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:text-right">
            <a
              href="mailto:letswalk@ambleandco.com"
              className="serif italic font-light text-[22px] md:text-[26px] text-[color:var(--copper-pale)] hover:text-[color:var(--paper)] transition-colors"
            >
              letswalk@ambleandco.com
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 meta-sm text-[color:var(--paper)]/45">
          <span>
            &copy; {new Date().getFullYear()} Amble &amp; Co. All thinking
            reserved.
          </span>
          <span>
            Set in Cormorant Garamond &amp; JetBrains Mono ·{" "}
            <span className="text-[color:var(--copper-pale)]">
              ● All systems quiet
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
