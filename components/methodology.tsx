"use client";

import { AnimateOnScroll } from "./animate-on-scroll";

const steps = [
  {
    label: "Assess",
    description:
      "We listen before we advise. Stakeholder interviews, landscape analysis, and an honest look at where you are today.",
  },
  {
    label: "Map",
    description:
      "We build the roadmap together. Clear priorities, real timelines, and a plan your team helped shape.",
  },
  {
    label: "Build",
    description:
      "We develop the frameworks, tools, and capabilities your team needs. Not a deck you\u2019ll never open. Working tools.",
  },
  {
    label: "Launch",
    description:
      "We put the plan into action alongside your team. Facilitation, coaching, and hands-on support from day one.",
  },
  {
    label: "Evolve",
    description:
      "We stay as your strategy adapts. Ongoing iteration, capability building, and support as your team and goals grow.",
  },
];

function StepCard({ step, delay }: { step: (typeof steps)[number]; delay: number }) {
  return (
    <AnimateOnScroll delay={delay}>
      <div className="relative bg-card border border-primary/10 rounded-lg p-8 md:p-10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(26,22,20,0.06)] min-h-[200px]">
        <span className="absolute -top-4 -right-2 font-serif text-[120px] md:text-[150px] leading-none text-primary/[0.07] select-none pointer-events-none">
          {step.label[0]}
        </span>
        <div className="relative z-[1]">
          <h3 className="font-serif text-xl md:text-[26px] font-medium text-text mb-3">
            <span className="text-primary font-semibold">{step.label[0]}</span>
            {step.label.slice(1)}
          </h3>
          <p className="text-[17px] text-text-secondary leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export function Methodology() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimateOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-4">
            How We Work
          </p>
          <h2 className="font-serif text-3xl md:text-[42px] font-normal text-text leading-[1.2] mb-16">
            We named the company after the process.
            <br />
            Or maybe it was the other way around.
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {steps.map((step, i) => (
            <StepCard key={step.label} step={step} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
