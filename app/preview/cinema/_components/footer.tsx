export function CinemaFooter() {
  return (
    <footer className="relative px-6 md:px-10 lg:px-14 pt-16 pb-12 bg-[color:var(--paper-deep)] text-white/90 border-t border-white/10">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-12 gap-6 items-end border-b border-white/15 pb-12 mb-8">
          <div className="col-span-12 md:col-span-6">
            <p className="serif font-light italic text-[56px] md:text-[88px] leading-[0.92] text-white">
              Amble <span className="text-[color:var(--copper)]">&amp;</span> Co.
            </p>
            <p className="mt-6 meta-sm text-white/50">
              · Unhurried Thinking · Unparalleled Results ·
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:text-right">
            <a
              href="mailto:letswalk@ambleandco.com"
              className="serif italic font-light text-[24px] md:text-[30px] text-[color:var(--copper-pale)] hover:text-white transition-colors"
            >
              letswalk@ambleandco.com
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 meta-sm text-white/40">
          <span>
            © {new Date().getFullYear()} · Amble &amp; Co. · All thinking reserved
          </span>
          <span>· Fin ·</span>
        </div>
      </div>
    </footer>
  );
}
