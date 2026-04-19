import Image from "next/image";

export function EditorialHero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-10 lg:px-14">
      <div className="max-w-[1320px] mx-auto">
        {/* Issue masthead */}
        <div className="border-b-2 border-[color:var(--rule)] pb-6 mb-16 md:mb-20 reveal-fade">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <span className="chapter text-[color:var(--ink)]">
              The Amble Review · Volume I · Issue One
            </span>
            <span className="chapter text-[color:var(--ink-faint)]">
              New York · MMXXIV
            </span>
          </div>
        </div>

        {/* Headline, centered like a magazine cover */}
        <div className="text-center mb-16 md:mb-20 max-w-[1100px] mx-auto">
          <span className="label text-[color:var(--accent)] reveal d-100">
            — A working paper on strategy, technology, and the pace of good work —
          </span>
          <h1 className="mt-10 display font-light text-[color:var(--ink)] text-[clamp(52px,8.5vw,132px)] leading-[0.96] tracking-[-0.025em]">
            <span className="block reveal d-200">Unhurried</span>
            <span className="block italic reveal d-400" style={{ color: "var(--accent)" }}>
              thinking,
            </span>
            <span className="block reveal d-600">unparalleled results.</span>
          </h1>
        </div>

        {/* Large photograph, full width */}
        <figure className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden reveal-slow d-300">
          <Image
            src="/hero-city.jpg"
            alt=""
            fill
            className="object-cover grayscale contrast-[1.05]"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(31,26,20,0.6)_100%)]" />
          <figcaption className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 flex items-baseline justify-between gap-6 text-white">
            <span className="label italic text-white/90 text-[13px] md:text-[15px]">
              Plate i. · A view from the street, looking up.
            </span>
            <span className="chapter text-white/70">Photograph</span>
          </figcaption>
        </figure>

        {/* Lede column — drop cap, editorial voice */}
        <div className="mt-20 md:mt-28 grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-4 reveal d-500">
            <span className="chapter text-[color:var(--accent)]">— Opening —</span>
            <p className="mt-4 label text-[color:var(--ink-soft)]">
              by the partners,
              <br />
              written from the studio
            </p>
          </div>

          <div className="col-span-12 md:col-span-8 reveal d-700">
            <p className="dropcap lede text-[color:var(--ink)]">
              We partner with forward-thinking organizations that want to
              transform AI curiosity into real AI strategy. Not a deck delivered
              and disappeared. A plan, the systems, and the team that runs them.
              The process is slower than it looks and better for it.
            </p>

            <div className="mt-10 pt-6 border-t border-[color:var(--hairline)] flex items-center justify-between gap-6">
              <a
                href="#contact"
                className="display italic text-[20px] md:text-[24px] text-[color:var(--accent)] underline underline-offset-[6px] decoration-[1px] hover:decoration-2 transition-all"
              >
                Continue with us →
              </a>
              <span className="chapter text-[color:var(--ink-faint)]">pp. 1–7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
