export function InstrumentInterlude() {
  return (
    <section className="relative px-6 md:px-10 lg:px-14 py-32 md:py-48 bg-[color:var(--paper-warm)] overflow-hidden">
      <div className="grid-bg" style={{ opacity: 0.4 }} />
      <div className="scanline" />

      <div className="relative z-[2] max-w-[1100px] mx-auto">
        <div className="border border-[color:var(--hairline)] p-10 md:p-16 bg-[color:var(--paper)]">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-[color:var(--hairline)]">
            <span className="meta text-[color:var(--copper)]">// observation</span>
            <span className="meta-sm text-[color:var(--ink-faint)]">001.log</span>
          </div>
          <blockquote className="serif font-light text-[clamp(28px,3.8vw,52px)] leading-[1.22] text-[color:var(--ink)] tracking-[-0.015em] scroll-up">
            Technology is easy to acquire.
            <br />
            Turning it into real{" "}
            <span className="italic text-[color:var(--copper)]">value</span> is
            the hard part.
          </blockquote>
          <div className="mt-10 pt-6 border-t border-[color:var(--hairline)] flex items-center justify-between">
            <p className="meta-sm text-[color:var(--ink-faint)]">
              src / field_notes / observation.md
            </p>
            <span className="flex items-center gap-2 meta-sm text-[color:var(--copper)]">
              <span className="signal-dot" />
              verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
