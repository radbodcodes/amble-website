import Image from "next/image";

export function CinemaAbout() {
  return (
    <section
      id="studio"
      className="relative overflow-hidden px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-28 md:pb-40"
    >
      {/* Full-bleed duotone photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Crosswalk.png"
          alt=""
          fill
          className="object-cover duotone-dark kenburns"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,12,8,0.85)_0%,rgba(15,12,8,0.7)_40%,rgba(15,12,8,0.92)_100%)]" />
      </div>

      <div className="relative z-[2] max-w-[1320px] mx-auto">
        <div className="mb-20 md:mb-28 max-w-[900px] scroll-up">
          <span className="meta text-[color:var(--copper-pale)]">
            · Act III · Studio ·
          </span>
          <h2 className="mt-8 serif font-light text-[clamp(44px,7vw,108px)] leading-[0.98] text-white tracking-[-0.03em]">
            We&apos;ve been{" "}
            <span className="italic text-[color:var(--copper)]">where</span>{" "}
            you are.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5 md:col-start-5 scroll-up">
            <p className="text-[17px] md:text-[19px] text-white/85 leading-[1.8]">
              Our team has built companies, led strategy inside corporates, and
              advised startups from first pitch to scale. We&apos;ve sat in the
              boardroom, the war room, and the founder&apos;s living room.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 scroll-up">
            <p className="text-[17px] md:text-[19px] text-white/85 leading-[1.8]">
              That range matters. Whether you&apos;re a leadership team inside
              a large organization trying to modernize, or a founder figuring
              out what comes next, we bring frameworks from consulting,
              instincts from building, and the patience that comes from
              knowing there are no shortcuts.
            </p>
          </div>
        </div>

        {/* Ledger — cinematic credits style */}
        <div className="mt-24 md:mt-32 pt-10 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-8 scroll-up">
          {[
            { label: "Built", value: "Companies" },
            { label: "Led", value: "Strategy" },
            { label: "Advised", value: "Founders" },
            { label: "Taught", value: "Teams" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="meta-sm text-[color:var(--copper-pale)] mb-3">
                {stat.label}
              </p>
              <p className="serif font-light text-[26px] md:text-[32px] text-white tracking-[-0.015em]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
