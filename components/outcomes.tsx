"use client";

import { AnimateOnScroll } from "./animate-on-scroll";

const outcomes = [
  {
    forLine: "Leaders who need a concrete AI plan",
    headline: "AI Strategy and Implementation",
    description:
      "Most companies are experimenting with AI tools but lack a real strategy. We assess where AI makes the biggest impact, build the roadmap, set up the systems, and train your team to run them.",
  },
  {
    forLine: "Organizations ready for their next stage of growth",
    headline: "Strategic Planning and Transformation",
    description:
      "Growth stalls when the vision is unclear or the plan doesn\u2019t hold. We facilitate structured strategy engagements that produce a 3-year vision, clear priorities, and an action plan your team can actually move on.",
  },
  {
    forLine: "Teams who aim to perform at a higher level",
    headline: "Team Training and Communication",
    description:
      "Strategy fails when teams can\u2019t deliver it together. We run workshops on communication styles, pitch skills, and audience analysis that give your team observable, practical tools they use the same day.",
  },
  {
    forLine: "Companies that want a partner, not a consultant",
    headline: "Embedded Advisory",
    description:
      "We don\u2019t hand over a deck and disappear. We embed with your team through execution, providing ongoing coaching, facilitation, and strategic support as the work evolves.",
  },
];

export function Outcomes() {
  return (
    <section id="outcomes" className="px-6 py-20 md:px-12 lg:px-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimateOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-[42px] font-normal text-text leading-[1.2] max-w-[600px] mb-16">
            AI is moving fast. Your strategy, your vision, and your team need to keep pace.
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {outcomes.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="bg-card border border-primary/10 rounded-lg p-6 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(26,22,20,0.06)]">
                <p className="text-[15px] font-medium text-primary mb-2.5">
                  {item.forLine}
                </p>
                <h3 className="font-serif text-xl md:text-[26px] font-medium text-text leading-[1.25] mb-3">
                  {item.headline}
                </h3>
                <p className="text-[17px] text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
