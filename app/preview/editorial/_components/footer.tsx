export function EditorialFooter() {
  return (
    <footer className="relative px-6 md:px-10 lg:px-14 pt-16 pb-12 bg-[color:var(--paper-deep)] text-[color:var(--paper)]">
      <div className="max-w-[1320px] mx-auto">
        <div className="border-b border-[color:var(--paper)]/20 pb-10 mb-8 text-center">
          <p className="display italic font-light text-[56px] md:text-[88px] leading-[0.95] text-[color:var(--paper)]">
            Amble <span className="not-italic" style={{ color: "var(--accent-soft)" }}>&amp;</span> Co.
          </p>
          <p className="mt-6 label italic text-[color:var(--paper)]/70">
            Unhurried Thinking. Unparalleled Results.
          </p>
          <a
            href="mailto:letswalk@ambleandco.com"
            className="mt-8 inline-block display italic text-[20px] md:text-[24px] text-[color:var(--accent-soft)] underline underline-offset-[5px] decoration-[1px]"
          >
            letswalk@ambleandco.com
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 chapter text-[color:var(--paper)]/50">
          <span>
            &copy; {new Date().getFullYear()} · Amble &amp; Co. · All thinking reserved.
          </span>
          <span>Typeset in Fraunces · Printed in New York</span>
        </div>
      </div>
    </footer>
  );
}
