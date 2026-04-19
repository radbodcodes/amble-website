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

export function RefineMethodology() {
  return (
    <section
      id="methodology"
      className="relative px-6 md:px-10 lg:px-16 py-28 md:py-36 bg-[#EDE4D9]"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-4 scroll-reveal">
            <p className="eyebrow">
              <span className="rule" />
              Method
            </p>
          </div>
          <h2 className="col-span-12 md:col-span-8 display text-[clamp(36px,5vw,72px)] leading-[1.04] text-[#1A1614] scroll-reveal">
            We named the company after the process.
            <br />
            <span className="italic text-[#A8673E]">Or maybe it was the other way around.</span>
          </h2>
        </div>

        {/* Horizontal timeline on desktop, stacked on mobile */}
        <ol className="relative">
          <div className="hidden md:block absolute left-0 right-0 top-[48px] h-px bg-[#A8673E]/30" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4">
            {steps.map((step, i) => (
              <li
                key={step.label}
                className="relative scroll-reveal"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* Node on the timeline */}
                <div className="hidden md:flex absolute left-0 top-[40px] w-4 h-4 rounded-full bg-[#A8673E] ring-4 ring-[#EDE4D9]" />
                <div className="md:pt-20">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="serif text-[#A8673E]/40 text-[80px] leading-none">
                      {step.letter}
                    </span>
                    <span className="display text-[22px] text-[#1A1614]">
                      {step.label.slice(1)}
                    </span>
                  </div>
                  <p className="text-[14px] leading-[1.7] text-[#5C504A]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
}
