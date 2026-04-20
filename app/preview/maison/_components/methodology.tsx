const steps = [
  {
    letter: "A",
    roman: "i.",
    label: "Assess",
    description:
      "We listen before we advise. Stakeholder interviews, landscape analysis, and an honest look at where you are today.",
  },
  {
    letter: "M",
    roman: "ii.",
    label: "Map",
    description:
      "We build the roadmap together. Clear priorities, real timelines, and a plan your team helped shape so they own it.",
  },
  {
    letter: "B",
    roman: "iii.",
    label: "Build",
    description:
      "We develop the frameworks, tools, and capabilities your team needs. Not a deck you will never open. Functional tools.",
  },
  {
    letter: "L",
    roman: "iv.",
    label: "Launch",
    description:
      "We put the plan into action alongside your team. Facilitation, coaching, and hands-on support from day one.",
  },
  {
    letter: "E",
    roman: "v.",
    label: "Evolve",
    description:
      "We stay as your strategy adapts. Ongoing iteration, capability building, and support as your team grows.",
  },
];

export function MaisonMethodology() {
  return (
    <section
      id="method"
      className="relative px-6 md:px-12 lg:px-20 pt-32 md:pt-48 pb-24 md:pb-40"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-24 md:mb-32 scroll-settle">
          <span className="caps text-[color:var(--accent)]">The Method</span>
          <hr className="silk w-32 mx-auto mt-10 mb-10" />
          <h2 className="display text-[color:var(--ink)] text-[clamp(40px,6vw,88px)] leading-[1.04] max-w-[1040px] mx-auto">
            Five{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>
              movements,
            </span>{" "}
            performed in sequence.
          </h2>
        </div>

        <ol className="space-y-20 md:space-y-28">
          {steps.map((step, i) => (
            <li
              key={step.letter}
              className="grid grid-cols-12 gap-x-8 md:gap-x-16 gap-y-6 items-baseline scroll-settle"
            >
              <div className="col-span-12 md:col-span-2 flex md:flex-col items-baseline md:items-start gap-4 md:gap-2">
                <span className="caps text-[color:var(--ink-faint)]">
                  Movement
                </span>
                <span className="folio text-[22px]">{step.roman}</span>
              </div>
              <div className="col-span-12 md:col-span-10 flex items-baseline gap-6 md:gap-12">
                <span className="display italic text-[96px] md:text-[180px] leading-[0.8] text-[color:var(--accent)] tracking-[-0.05em]">
                  {step.letter}
                </span>
                <div className="pt-3 md:pt-6">
                  <h3 className="display text-[30px] md:text-[44px] leading-[1.08] text-[color:var(--ink)]">
                    {step.label}
                  </h3>
                  <p className="mt-5 body text-[16px] md:text-[17px] text-[color:var(--ink-soft)] leading-[1.85] max-w-[520px]">
                    {step.description}
                  </p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="col-span-12 pt-10">
                  <hr className="silk" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
