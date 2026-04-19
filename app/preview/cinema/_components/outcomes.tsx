import Image from "next/image";

const outcomes = [
  {
    index: "Plate I",
    tag: "Strategy",
    forLine: "Leaders who need a concrete AI plan",
    headline: "AI Strategy and Implementation",
    description:
      "Most companies are experimenting with AI tools but lack a real strategy. We assess where AI makes the biggest impact, build the roadmap, set up the systems, and train your team to run them.",
  },
  {
    index: "Plate II",
    tag: "Planning",
    forLine: "Organizations ready for their next stage of growth",
    headline: "Strategic Planning and Transformation",
    description:
      "Growth stalls when the vision is unclear or the plan doesn\u2019t hold. We facilitate structured engagements that produce a clear vision, real priorities, and an action plan your team can move on.",
  },
  {
    index: "Plate III",
    tag: "Training",
    forLine: "Teams who aim to perform at higher levels",
    headline: "Team Training and Communication",
    description:
      "Strategy fails when teams can\u2019t deliver it together. We run workshops on communication, pitch skills, and audience analysis that give your team practical tools they can use the same day.",
  },
  {
    index: "Plate IV",
    tag: "Advisory",
    forLine: "Companies that want a partner, not a consultant",
    headline: "Embedded Advisory",
    description:
      "We don\u2019t hand over a deck and disappear. We embed with your team through execution, providing ongoing coaching, facilitation, and strategic support as the work evolves and grows.",
  },
];

export function CinemaOutcomes() {
  return (
    <section
      id="practice"
      className="relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-16 md:pb-24 bg-[color:var(--paper-deep)]"
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Title card */}
        <div className="mb-20 md:mb-28 max-w-[900px] scroll-up">
          <span className="meta text-[color:var(--copper-pale)]">
            · Act I · Practice ·
          </span>
          <h2 className="mt-8 serif font-light text-[clamp(40px,6.5vw,96px)] leading-[1.02] text-white tracking-[-0.025em]">
            AI is moving fast. Your{" "}
            <span className="italic text-[color:var(--copper)]">strategy</span>,
            your{" "}
            <span className="italic text-[color:var(--copper)]">vision</span>,
            and your team need to keep pace.
          </h2>
        </div>

        {/* Plates grid — alternating with photographic inset on even cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {outcomes.map((item, i) => (
            <article
              key={item.index}
              className={`card group relative border border-white/10 p-8 md:p-12 bg-white/[0.015] scroll-up ${
                i % 2 === 1 ? "md:mt-16" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="meta-sm text-[color:var(--copper-pale)]">
                  {item.index} · {item.tag}
                </span>
                <svg
                  className="card-arrow text-[color:var(--copper)]"
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  aria-hidden
                >
                  <path d="M13 1L19 7M19 7L13 13M19 7H0" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>

              <p className="meta-sm text-white/40 mb-4">
                For {item.forLine.toLowerCase()}
              </p>
              <h3 className="serif font-light text-[28px] md:text-[38px] leading-[1.1] text-white mb-6 max-w-[420px]">
                {item.headline}
              </h3>
              <p className="text-[15px] md:text-[16px] text-white/70 leading-[1.75] max-w-[460px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Photographic still — interlude image */}
        <figure className="mt-20 md:mt-28 relative aspect-[21/9] overflow-hidden scroll-up">
          <Image
            src="/hero-city.jpg"
            alt=""
            fill
            className="object-cover duotone-dark"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,12,8,0.7)_0%,transparent_50%,rgba(15,12,8,0.5)_100%)]" />
          <figcaption className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 flex items-end justify-between gap-4">
            <span className="meta-sm text-[color:var(--copper-pale)]">
              · Still from the street · Plate V ·
            </span>
            <span className="meta-sm text-white/50">N 40° 45′ / W 73° 59′</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
