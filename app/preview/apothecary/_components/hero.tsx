export function ApothecaryHero() {
  return (
    <section className="relative pt-32 md:pt-44 pb-20 md:pb-28 px-6 md:px-10 lg:px-14">
      <div className="max-w-[1320px] mx-auto">
        {/* Dossier header bar — like a specimen label */}
        <div className="fade border-b border-[color:var(--rule)] pb-4 mb-16 md:mb-24 flex flex-wrap items-baseline justify-between gap-4">
          <span className="data text-[color:var(--ink)]">
            DOSSIER 001 · FOLIO 01
          </span>
          <span className="data text-[color:var(--ink-faint)]">
            N 40.7128° W 74.0060° · NYC
          </span>
          <span className="data text-[color:var(--amber)]">
            FILED · 2024-03
          </span>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-16">
          {/* Left: headline + lede */}
          <div className="col-span-12 md:col-span-7">
            <p className="data text-[color:var(--amber)] mb-8 fade d-100">
              § 01 · ABSTRACT
            </p>
            <h1 className="serif font-normal text-[color:var(--ink)] text-[clamp(44px,7vw,112px)] leading-[1.02] tracking-[-0.015em]">
              <span className="block fade d-200">Unhurried</span>
              <span
                className="block italic fade d-400"
                style={{ color: "var(--amber)" }}
              >
                thinking,
              </span>
              <span className="block fade d-500">unparalleled results.</span>
            </h1>

            <p className="mt-12 serif text-[19px] md:text-[22px] text-[color:var(--ink)] leading-[1.55] max-w-[580px] fade d-600">
              We partner with forward-thinking organizations that want to turn
              AI curiosity into real AI strategy. Not a deck delivered and
              disappeared. A documented protocol<span className="dagger">†</span>{" "}
              your team can run without us.
            </p>

            <div className="mt-10 pt-5 border-t border-[color:var(--hairline)] max-w-[580px] fade d-700">
              <p className="mono text-[12px] text-[color:var(--ink-faint)] leading-[1.7]">
                <span className="text-[color:var(--mercury)]">†</span> Protocol
                — the written, repeatable procedure by which a result is
                produced. Opposite of a PowerPoint.
              </p>
            </div>

            <div className="mt-12 flex items-baseline gap-6 fade d-700">
              <a
                href="#contact"
                className="inline-flex items-baseline gap-3 serif text-[19px] italic text-[color:var(--amber)] hover:text-[color:var(--ink)] transition-colors"
              >
                <span>Begin intake</span>
                <span aria-hidden>→</span>
              </a>
              <span className="mono text-[11px] text-[color:var(--ink-faint)] tracking-[0.15em]">
                EST. 2024 · NYC
              </span>
            </div>
          </div>

          {/* Right: diagrammatic specimen panel */}
          <div className="col-span-12 md:col-span-5 fade d-500">
            <figure className="dossier graph p-6 md:p-8 aspect-[4/5] relative">
              <span className="dossier-stamp">Fig. 1 — System Schema</span>

              <div className="relative w-full h-full flex items-center justify-center">
                <svg
                  viewBox="0 0 300 380"
                  className="w-full h-full"
                  aria-hidden
                >
                  {/* Horizontal strata — AI system layers */}
                  {[
                    { y: 60, label: "INPUT · HUMAN JUDGMENT", c: "var(--ink)" },
                    { y: 110, label: "CONTEXT LAYER", c: "var(--amber)" },
                    { y: 160, label: "REASONING", c: "var(--ink)" },
                    { y: 210, label: "TOOLS · EXECUTION", c: "var(--amber)" },
                    { y: 260, label: "OUTPUT · VALIDATION", c: "var(--ink)" },
                    { y: 310, label: "FEEDBACK LOOP", c: "var(--mercury)" },
                  ].map((s) => (
                    <g key={s.y}>
                      <line
                        x1="40"
                        y1={s.y}
                        x2="260"
                        y2={s.y}
                        stroke={s.c as string}
                        strokeWidth="0.8"
                        strokeDasharray="2 2"
                      />
                      <circle cx="40" cy={s.y} r="2.2" fill={s.c as string} />
                      <circle cx="260" cy={s.y} r="2.2" fill={s.c as string} />
                      <text
                        x="150"
                        y={s.y - 6}
                        textAnchor="middle"
                        fontSize="8"
                        fontFamily="IBM Plex Mono, monospace"
                        letterSpacing="0.16em"
                        fill={s.c as string}
                      >
                        {s.label}
                      </text>
                    </g>
                  ))}

                  {/* Center vertical — the throughline */}
                  <line
                    x1="150"
                    y1="50"
                    x2="150"
                    y2="320"
                    stroke="var(--ink)"
                    strokeWidth="0.5"
                    opacity="0.4"
                  />

                  {/* Measurement ticks */}
                  <line x1="20" y1="50" x2="20" y2="320" stroke="var(--ink)" strokeWidth="0.4" opacity="0.3" />
                  {[50, 110, 170, 230, 290].map((y) => (
                    <line key={y} x1="16" y1={y} x2="24" y2={y} stroke="var(--ink)" strokeWidth="0.4" opacity="0.3" />
                  ))}
                  <text x="10" y="42" fontSize="7" fontFamily="IBM Plex Mono" fill="var(--ink)" opacity="0.5">cm</text>
                </svg>
              </div>

              <figcaption className="mt-4 pt-3 border-t border-[color:var(--hairline)] flex items-baseline justify-between">
                <span className="data text-[color:var(--ink-faint)]">
                  Schema, six layers
                </span>
                <span className="data text-[color:var(--amber)]">
                  n = 6
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
