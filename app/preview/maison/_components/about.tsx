export function MaisonAbout() {
  return (
    <section
      id="studio"
      className="relative px-6 md:px-12 lg:px-20 pt-32 md:pt-48 pb-32 md:pb-48 bg-[color:var(--bone)]"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-24 md:mb-32 scroll-settle">
          <span className="caps text-[color:var(--accent)]">The Atelier</span>
          <hr className="silk w-32 mx-auto mt-10 mb-10" />
          <h2 className="display text-[color:var(--ink)] text-[clamp(44px,6.8vw,104px)] leading-[1] max-w-[1000px] mx-auto">
            Made in
            <span className="italic" style={{ color: "var(--accent)" }}>
              {" "}New York,{" "}
            </span>
            measured for your team.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Seamless still-life card in place of photography */}
          <div className="col-span-12 md:col-span-5 scroll-settle">
            <div className="swatch-frame aspect-[4/5] relative flex items-center justify-center">
              <div className="relative z-[1] flex flex-col items-center text-center p-10">
                <span className="caps text-[color:var(--gold)] mb-6">
                  Specimen ii
                </span>
                {/* Minimal monogram */}
                <div className="flex items-baseline justify-center gap-2">
                  <span className="display italic text-[120px] md:text-[160px] leading-none text-[color:var(--ink)]">
                    A
                  </span>
                  <span
                    className="display text-[60px] leading-none"
                    style={{ color: "var(--accent)" }}
                  >
                    &amp;
                  </span>
                  <span className="display italic text-[120px] md:text-[160px] leading-none text-[color:var(--ink)]">
                    Co
                  </span>
                </div>
                <hr className="silk w-20 my-8" />
                <p className="specimen text-[color:var(--ink-soft)] text-[15px] leading-[1.5]">
                  The house monogram,
                  <br />
                  stamped in oxblood.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 scroll-settle">
            <p className="display italic font-light text-[clamp(22px,2.6vw,36px)] leading-[1.35] text-[color:var(--ink)]">
              Our team has built companies, led strategy inside corporates, and
              advised startups from first pitch to scale.
            </p>
            <p className="mt-10 body text-[17px] md:text-[18px] text-[color:var(--ink-soft)] leading-[1.85] max-w-[560px]">
              Whether you are a leadership team inside a large organization
              trying to modernize, or a founder figuring out what comes next,
              we bring frameworks from consulting, instincts from building, and
              the patience that comes from knowing there are no shortcuts.
            </p>

            <hr className="silk mt-14 mb-10" />

            <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Built", value: "Companies" },
                { label: "Led", value: "Strategy" },
                { label: "Advised", value: "Founders" },
                { label: "Taught", value: "Teams" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="caps text-[color:var(--accent)] mb-3">
                    {stat.label}
                  </dt>
                  <dd className="display italic text-[22px] md:text-[26px] text-[color:var(--ink)]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
