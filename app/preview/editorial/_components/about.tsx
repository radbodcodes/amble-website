import Image from "next/image";

export function EditorialAbout() {
  return (
    <section
      id="studio"
      className="relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-28 md:pb-40 bg-[color:var(--paper-warm)]"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-20 md:mb-28 scroll-up">
          <span className="chapter text-[color:var(--accent)]">— Part Three · The Studio —</span>
          <h2 className="mt-8 display font-light text-[clamp(40px,6vw,96px)] leading-[1.02] text-[color:var(--ink)] tracking-[-0.025em] max-w-[1000px] mx-auto">
            We&apos;ve been{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>where</span>{" "}
            you are.
          </h2>
        </div>

        <hr className="double-rule mb-16 md:mb-20" />

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Editorial photograph */}
          <figure className="col-span-12 md:col-span-5 scroll-up">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/Crosswalk.png"
                alt=""
                fill
                className="object-cover grayscale contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(31,26,20,0.25)_100%)]" />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between label italic text-[color:var(--ink-faint)]">
              <span>Plate ii. Crosswalk, morning.</span>
              <span className="chapter">Field notes</span>
            </figcaption>
          </figure>

          {/* Editorial prose — two columns */}
          <div className="col-span-12 md:col-span-7 scroll-up">
            <p className="dropcap lede text-[color:var(--ink)]">
              Our team has built companies, led strategy inside corporates, and
              advised startups from first pitch to scale. We have sat in the
              boardroom, the war room, and the founder&apos;s living room. That
              range matters.
            </p>
            <p className="mt-8 serif text-[17px] md:text-[18px] text-[color:var(--ink-soft)] leading-[1.8]">
              Whether you&apos;re a leadership team inside a large organization
              trying to modernize, or a founder figuring out what comes next, we
              bring frameworks from consulting, instincts from building, and the
              patience that comes from knowing there are no shortcuts.
            </p>

            <hr className="mt-12 border-[color:var(--hairline)]" />

            <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Built", value: "Companies" },
                { label: "Led", value: "Strategy" },
                { label: "Advised", value: "Founders" },
                { label: "Taught", value: "Teams" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="chapter text-[color:var(--accent)] mb-2">{stat.label}</dt>
                  <dd className="display italic font-light text-[22px] md:text-[28px] text-[color:var(--ink)]">
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
