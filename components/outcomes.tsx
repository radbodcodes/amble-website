"use client";

import { AnimateOnScroll } from "./animate-on-scroll";

const outcomes = [
  {
    forLine: "For organizations stuck in short-term thinking",
    headline: "Align your leadership around a 3-year vision",
    description:
      "A structured engagement that produces clarity, commitment, and an action plan your team actually believes in.",
  },
  {
    forLine: "For leaders who know AI matters but aren't sure where it fits",
    headline: "Turn AI curiosity into a real implementation plan",
    description:
      "Walk away with priorities, timelines, and a team that's bought in. Not a vendor pitch. A strategy.",
  },
  {
    forLine: "For founders preparing for investors, buyers, or the press",
    headline:
      "Give your story the precision of a pitch and the warmth of a conversation",
    description:
      "Your brand narrative, sharpened. Built on positioning methodology and field-tested with 100+ founders.",
  },
  {
    forLine:
      "For teams where communication friction slows everything down",
    headline: "Build a team that actually reads the room",
    description:
      "Observable tools for real-time communication. Not personality tests. Skills your team uses the same afternoon.",
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
            We don&apos;t sell services. We solve the problems that keep
            leadership teams up at night.
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {outcomes.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="bg-card border border-primary/10 rounded-lg p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(26,22,20,0.06)]">
                <p className="text-[13px] font-medium text-primary mb-2.5">
                  {item.forLine}
                </p>
                <h3 className="font-serif text-xl md:text-[26px] font-medium text-text leading-[1.25] mb-3">
                  {item.headline}
                </h3>
                <p className="text-[15px] text-text-secondary leading-relaxed">
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
