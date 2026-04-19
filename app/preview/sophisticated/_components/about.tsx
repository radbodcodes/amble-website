import Image from "next/image";

export function SophisticatedAbout() {
  return (
    <section
      id="studio"
      className="relative overflow-hidden px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-28 md:pb-40 bg-[color:var(--paper-deep)] text-[color:var(--paper)]"
    >
      {/* Faint crosswalk behind */}
      <div className="absolute inset-0 opacity-[0.12]">
        <Image
          src="/Crosswalk.png"
          alt=""
          fill
          className="object-cover grayscale contrast-[1.2]"
        />
      </div>
      <div
        className="mesh"
        style={{
          opacity: 0.3,
          mixBlendMode: "screen",
          background:
            "radial-gradient(circle at 20% 30%, rgba(226,196,167,0.45) 0%, transparent 45%), radial-gradient(circle at 78% 70%, rgba(156,94,55,0.35) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-[2] max-w-[1280px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20">
          <div className="col-span-12 md:col-span-4 scroll-up">
            <span className="meta text-[color:var(--copper-pale)]">
              III · Studio
            </span>
          </div>
          <h2 className="col-span-12 md:col-span-8 serif font-light text-[clamp(36px,5.5vw,84px)] leading-[1.06] text-[color:var(--paper)] tracking-[-0.02em] scroll-up">
            We&apos;ve been{" "}
            <span className="italic text-[color:var(--copper-pale)]">
              where
            </span>{" "}
            you are.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5 md:col-start-5 scroll-up">
            <p className="text-[16px] md:text-[18px] text-[color:var(--paper)]/80 leading-[1.8]">
              Our team has built companies, led strategy inside corporates, and
              advised startups from first pitch to scale. We&apos;ve sat in the
              boardroom, the war room, and the founder&apos;s living room.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 scroll-up">
            <p className="text-[16px] md:text-[18px] text-[color:var(--paper)]/80 leading-[1.8]">
              That range matters. Whether you&apos;re a leadership team inside
              a large organization trying to modernize, or a founder figuring
              out what comes next, we bring frameworks from consulting,
              instincts from building, and the patience that comes from
              knowing there are no shortcuts.
            </p>
          </div>
        </div>

        {/* Stat ledger — tech-precision detail */}
        <div className="mt-20 md:mt-28 pt-10 border-t border-[color:var(--paper)]/15 grid grid-cols-2 md:grid-cols-4 gap-8 scroll-up">
          {[
            { label: "Built", value: "Companies" },
            { label: "Led", value: "Corp. Strategy" },
            { label: "Advised", value: "Founders" },
            { label: "Taught", value: "Teams" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="meta-sm text-[color:var(--copper-pale)] mb-3">
                {stat.label}
              </p>
              <p className="serif font-light text-[24px] md:text-[28px] text-[color:var(--paper)] tracking-[-0.01em]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
