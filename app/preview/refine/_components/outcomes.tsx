const outcomes = [
  {
    index: "01",
    forLine: "Leaders who need a concrete AI plan",
    headline: "AI Strategy and Implementation",
    description:
      "Most companies are experimenting with AI tools but lack a real strategy. We assess where AI makes the biggest impact, build the roadmap, set up the systems, and train your team to run them.",
  },
  {
    index: "02",
    forLine: "Organizations ready for their next stage of growth",
    headline: "Strategic Planning and Transformation",
    description:
      "Growth stalls when the vision is unclear or the plan doesn\u2019t hold. We facilitate structured engagements that produce a clear vision, real priorities, and an action plan your team can move on.",
  },
  {
    index: "03",
    forLine: "Teams who aim to perform at higher levels",
    headline: "Team Training and Communication",
    description:
      "Strategy fails when teams can\u2019t deliver it together. We run workshops on communication styles, pitch skills, and audience analysis that give your team practical tools they can use the same day.",
  },
  {
    index: "04",
    forLine: "Companies that want a partner, not a consultant",
    headline: "Embedded Advisory",
    description:
      "We don\u2019t hand over a deck and disappear. We embed with your team through execution, providing ongoing coaching, facilitation, and strategic support as the work evolves and grows.",
  },
];

export function RefineOutcomes() {
  return (
    <section
      id="outcomes"
      className="relative px-6 md:px-10 lg:px-16 py-28 md:py-36"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4 scroll-reveal">
            <p className="eyebrow">
              <span className="rule" />
              Practice
            </p>
            <p className="mt-6 text-[13px] text-[#5C504A] uppercase tracking-[0.14em]">
              Four outcomes. One partnership.
            </p>
          </div>
          <h2 className="col-span-12 md:col-span-8 display text-[clamp(36px,5vw,72px)] leading-[1.02] text-[#1A1614] scroll-reveal">
            AI is moving fast. Your <em className="text-[#A8673E]">strategy</em>,
            your <em className="text-[#A8673E]">vision</em>, and your team need
            to keep pace.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-y-0">
          {outcomes.map((item, i) => {
            // Asymmetric column placement
            const colSpan =
              i % 2 === 0 ? "md:col-span-7" : "md:col-span-5 md:col-start-8";
            return (
              <article
                key={item.index}
                className={`col-span-12 ${colSpan} py-10 md:py-14 border-t border-[#A8673E]/25 scroll-reveal group`}
              >
                <div className="flex items-start gap-6 md:gap-10">
                  <span className="serif italic text-[#A8673E] text-[32px] md:text-[40px] leading-none mt-2 shrink-0">
                    {item.index}
                  </span>
                  <div>
                    <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[#A8673E] mb-3">
                      For {item.forLine.toLowerCase()}
                    </p>
                    <h3 className="display text-[28px] md:text-[40px] leading-[1.1] text-[#1A1614] mb-5 transition-colors group-hover:text-[#A8673E]">
                      {item.headline}
                    </h3>
                    <p className="text-[15px] md:text-[17px] text-[#5C504A] leading-[1.7] max-w-[560px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
          <div className="col-span-12 border-t border-[#A8673E]/25" />
        </div>
      </div>
    </section>
  );
}
