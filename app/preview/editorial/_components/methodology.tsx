const steps = [
  {
    letter: "A",
    label: "Assess",
    description:
      "We listen before we advise. Stakeholder interviews, landscape analysis, and an honest look at where you are today.",
  },
  {
    letter: "M",
    label: "Map",
    description:
      "We build the roadmap together. Clear priorities, real timelines, and a plan your team helped shape so they own it.",
  },
  {
    letter: "B",
    label: "Build",
    description:
      "We develop the frameworks, tools, and capabilities your team needs. Not a deck you\u2019ll never open. Functional tools.",
  },
  {
    letter: "L",
    label: "Launch",
    description:
      "We put the plan into action alongside your team. Facilitation, coaching, and hands-on support from day one.",
  },
  {
    letter: "E",
    label: "Evolve",
    description:
      "We stay as your strategy adapts. Ongoing iteration, capability building, and support as your team grows.",
  },
];

export function EditorialMethodology() {
  return (
    <section
      id="methodology"
      className="relative px-6 md:px-10 lg:px-14 py-24 md:py-32 bg-[#E8DAC4]"
    >
      <div className="folio text-[#14100D] mb-12">
        <span>Part Two</span>
        <span>The Method</span>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-20">
        <h2 className="col-span-12 lg:col-span-10 editorial text-[clamp(36px,6vw,84px)] leading-[0.98] text-[#14100D] scroll-reveal">
          We named the company after the process.{" "}
          <span className="editorial-italic text-[#A8673E]">
            Or maybe it was the other way around.
          </span>
        </h2>
      </div>

      {/* Vertical editorial steps with alternating layout */}
      <ol className="space-y-0">
        {steps.map((step, i) => (
          <li
            key={step.letter}
            className="scroll-reveal grid grid-cols-12 gap-6 border-t-2 border-[#14100D] py-10 md:py-16"
          >
            <div className="col-span-2 md:col-span-1">
              <span className="mono text-[11px] uppercase tracking-[0.22em] text-[#A8673E]">
                Step {i + 1}
              </span>
            </div>
            <div className="col-span-10 md:col-span-3">
              <div className="flex items-baseline gap-3">
                <span className="editorial font-black text-[#A8673E] text-[clamp(72px,10vw,160px)] leading-[0.82]">
                  {step.letter}
                </span>
                <span className="editorial-italic text-[28px] md:text-[44px] text-[#14100D]">
                  {step.label.slice(1)}
                </span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6 pt-4">
              <p className="serif text-[18px] md:text-[22px] leading-[1.6] text-[#14100D]">
                {step.description}
              </p>
            </div>
          </li>
        ))}
        <li className="border-t-2 border-[#14100D]" />
      </ol>
    </section>
  );
}
