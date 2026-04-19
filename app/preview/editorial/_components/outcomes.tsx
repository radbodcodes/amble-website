const outcomes = [
  {
    num: "I.",
    forLine: "Leaders who need a concrete AI plan",
    headline: "AI Strategy and Implementation",
    description:
      "Most companies are experimenting with AI tools but lack a real strategy. We assess where AI makes the biggest impact, build the roadmap, set up the systems, and train your team to run them.",
  },
  {
    num: "II.",
    forLine: "Organizations ready for their next stage of growth",
    headline: "Strategic Planning and Transformation",
    description:
      "Growth stalls when the vision is unclear or the plan doesn\u2019t hold. We facilitate structured engagements that produce a clear vision, real priorities, and an action plan your team can move on.",
  },
  {
    num: "III.",
    forLine: "Teams who aim to perform at higher levels",
    headline: "Team Training and Communication",
    description:
      "Strategy fails when teams can\u2019t deliver it together. We run workshops on communication styles, pitch skills, and audience analysis that give your team practical tools they can use the same day.",
  },
  {
    num: "IV.",
    forLine: "Companies that want a partner, not a consultant",
    headline: "Embedded Advisory",
    description:
      "We don\u2019t hand over a deck and disappear. We embed with your team through execution, providing ongoing coaching, facilitation, and strategic support as the work evolves and grows.",
  },
];

export function EditorialOutcomes() {
  return (
    <section id="outcomes" className="relative px-6 md:px-10 lg:px-14 py-24 md:py-32">
      <div className="folio text-[#14100D] mb-12">
        <span>Part One</span>
        <span>The Practice</span>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
        <h2 className="col-span-12 lg:col-span-10 editorial text-[clamp(36px,6.5vw,92px)] leading-[0.98] text-[#14100D] scroll-reveal">
          AI is moving fast.{" "}
          <span className="editorial-italic text-[#A8673E]">Your strategy,</span>{" "}
          <span className="editorial-italic text-[#A8673E]">your vision,</span>{" "}
          and your team need to keep pace.
        </h2>
      </div>

      <hr className="rule-thick mb-0" />

      {/* Newspaper-style two column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {outcomes.map((item, i) => (
          <article
            key={item.num}
            className={`scroll-reveal p-6 md:p-10 ${
              i % 2 === 0
                ? "md:border-r border-b border-[#14100D]"
                : "border-b border-[#14100D]"
            }`}
          >
            <div className="flex items-start gap-6 mb-6">
              <span className="editorial-italic text-[#A8673E] text-[44px] md:text-[56px] leading-none">
                {item.num}
              </span>
              <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#14100D]/60 pt-3">
                For {item.forLine.toLowerCase()}
              </p>
            </div>
            <h3 className="editorial text-[28px] md:text-[36px] leading-[1.05] text-[#14100D] mb-5">
              {item.headline}
            </h3>
            <p className="serif text-[16px] leading-[1.75] text-[#14100D]/82 drop-cap">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
