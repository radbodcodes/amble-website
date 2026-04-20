export function ApothecaryInterlude() {
  return (
    <section className="relative px-6 md:px-10 lg:px-14 py-28 md:py-40 bg-[color:var(--paper-cool)] border-y border-[color:var(--rule)]">
      <div className="max-w-[1040px] mx-auto">
        <div className="mb-14 flex items-baseline justify-between border-b border-[color:var(--hairline)] pb-4">
          <span className="data text-[color:var(--amber)]">
            NOTE · FIELD OBSERVATION
          </span>
          <span className="data text-[color:var(--ink-faint)]">
            INV. 001 · p. 12
          </span>
        </div>

        <blockquote className="scroll-fade">
          <p className="serif font-normal text-[color:var(--ink)] text-[clamp(28px,4vw,56px)] leading-[1.22] tracking-[-0.01em] max-w-[920px]">
            Technology is easy to acquire.
            <span
              className="italic"
              style={{ color: "var(--amber)" }}
            >
              {" "}Turning it into real value{" "}
            </span>
            is the hard part.
            <span className="dagger">‡</span>
          </p>
        </blockquote>

        <div className="mt-12 pt-6 border-t border-[color:var(--hairline)] flex flex-wrap items-baseline justify-between gap-4">
          <p className="mono text-[12px] text-[color:var(--ink-faint)] leading-[1.7] max-w-[560px]">
            <span className="text-[color:var(--mercury)]">‡</span> Observed
            repeatedly across engagements 2024–2026, n = 47. The gap between
            acquisition and value correlates with the absence of a documented
            operating protocol.
          </p>
          <span className="data text-[color:var(--ink-faint)]">
            — The house, 2026
          </span>
        </div>
      </div>
    </section>
  );
}
