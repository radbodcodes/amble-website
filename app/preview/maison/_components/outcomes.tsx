const outcomes = [
  {
    number: "i.",
    tag: "Strategy",
    headline: "AI Strategy & Implementation",
    description:
      "Most companies are experimenting with AI tools but lack a real strategy. We assess where AI makes the biggest impact, build the roadmap, set up the systems, and train your team to run them.",
    forLine: "For leaders who need a concrete AI plan.",
  },
  {
    number: "ii.",
    tag: "Planning",
    headline: "Strategic Planning & Transformation",
    description:
      "Growth stalls when the vision is unclear or the plan does not hold. We facilitate structured engagements that produce a clear vision, real priorities, and an action plan your team can move on.",
    forLine: "For organizations ready for their next stage of growth.",
  },
  {
    number: "iii.",
    tag: "Training",
    headline: "Team Training & Communication",
    description:
      "Strategy fails when teams cannot deliver it together. We run workshops on communication, pitch skills, and audience analysis that give your team practical tools they can use the same day.",
    forLine: "For teams who aim to perform at higher levels.",
  },
  {
    number: "iv.",
    tag: "Advisory",
    headline: "Embedded Advisory",
    description:
      "We do not hand over a deck and disappear. We embed with your team through execution, providing ongoing coaching, facilitation, and strategic support as the work evolves and grows.",
    forLine: "For companies that want a partner, not a consultant.",
  },
];

export function MaisonOutcomes() {
  return (
    <section
      id="practice"
      className="relative px-6 md:px-12 lg:px-20 pt-32 md:pt-48 pb-20 md:pb-32"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-24 md:mb-32 scroll-settle">
          <span className="caps text-[color:var(--accent)]">
            The Collection
          </span>
          <hr className="silk w-32 mx-auto mt-10 mb-10" />
          <h2 className="display text-[color:var(--ink)] text-[clamp(40px,6.2vw,92px)] leading-[1.04] max-w-[1040px] mx-auto">
            Four{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>
              services,
            </span>{" "}
            each made to the measure of the client.
          </h2>
        </div>

        {/* Index rail */}
        <div className="hidden md:flex items-baseline justify-between mb-10 px-2">
          <span className="caps text-[color:var(--ink-faint)]">Index</span>
          <span className="caps text-[color:var(--ink-faint)]">
            Four entries
          </span>
        </div>
        <hr className="silk mb-20 md:mb-24" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-28 gap-y-24 md:gap-y-36">
          {outcomes.map((item, i) => (
            <article
              key={item.number}
              className={`scroll-settle ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="folio text-[22px]">{item.number}</span>
                <span className="caps text-[color:var(--ink-faint)]">
                  {item.tag}
                </span>
              </div>
              <h3 className="display text-[32px] md:text-[42px] leading-[1.12] text-[color:var(--ink)] mb-6">
                {item.headline}
              </h3>
              <p className="specimen text-[color:var(--accent)] mb-6 text-[15px]">
                {item.forLine}
              </p>
              <p className="body text-[16px] md:text-[17px] text-[color:var(--ink-soft)] leading-[1.85] max-w-[500px]">
                {item.description}
              </p>
              <hr className="silk mt-10 w-24" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
