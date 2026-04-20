const steps = [
  {
    n: "01",
    letter: "A",
    label: "Assess",
    description:
      "We listen before we advise. Interviews, landscape, honest look at where you are.",
  },
  {
    n: "02",
    letter: "M",
    label: "Map",
    description:
      "Clear priorities, real timelines, a plan your team helped shape so they own it.",
  },
  {
    n: "03",
    letter: "B",
    label: "Build",
    description:
      "Frameworks, tools, and capabilities. Functional, not a deck you will never open.",
  },
  {
    n: "04",
    letter: "L",
    label: "Launch",
    description:
      "Plan into action alongside your team. Facilitation, coaching, hands-on support.",
  },
  {
    n: "05",
    letter: "E",
    label: "Evolve",
    description:
      "We stay as the strategy adapts. Ongoing iteration, capability building, support.",
  },
];

export function StatementMethodology() {
  return (
    <section
      id="method"
      className="relative bg-[color:var(--coral)] px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-28 md:pb-40"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-20 md:mb-28 scroll-punch max-w-[1200px]">
          <span className="label text-[color:var(--ink)] mb-6 inline-block">
            How we work · five moves
          </span>
          <h2 className="display text-[color:var(--ink)] text-[clamp(56px,10vw,184px)] leading-[0.86]">
            A-M-B-L-E.
            <br />
            <span style={{ color: "var(--cream)" }}>In that order.</span>
          </h2>
          <p className="mt-10 body text-[20px] md:text-[24px] text-[color:var(--ink-soft)] max-w-[700px] leading-[1.4]">
            Five phases. Each delivers something the team can use. Not
            pretty slides. Usable things.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <li
              key={step.n}
              className={`bg-[color:var(--cream)] border-2 border-[color:var(--ink)] rounded-[24px] p-7 scroll-punch ${
                i % 2 === 1 ? "md:mt-10" : ""
              } ${i === 2 ? "bg-[color:var(--ink)] text-[color:var(--cream)]" : ""}`}
            >
              <div
                className={`flex items-baseline justify-between mb-6 pb-4 border-b-2 ${
                  i === 2
                    ? "border-[color:var(--coral)]"
                    : "border-[color:var(--ink)]"
                }`}
              >
                <span
                  className="number text-[56px]"
                  style={{
                    color: i === 2 ? "var(--coral)" : "var(--ink)",
                  }}
                >
                  {step.letter}
                </span>
                <span
                  className="label"
                  style={{
                    color:
                      i === 2 ? "var(--coral-pale)" : "var(--coral-deep)",
                  }}
                >
                  {step.n}
                </span>
              </div>
              <h3
                className={`display text-[24px] md:text-[28px] mb-5 leading-[0.95] ${
                  i === 2
                    ? "text-[color:var(--cream)]"
                    : "text-[color:var(--ink)]"
                }`}
              >
                {step.label}
              </h3>
              <p
                className={`body text-[14px] leading-[1.6] ${
                  i === 2
                    ? "text-[color:var(--cream)]/85"
                    : "text-[color:var(--ink-soft)]"
                }`}
              >
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
