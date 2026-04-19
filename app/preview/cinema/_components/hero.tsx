import Image from "next/image";

export function CinemaHero() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden">
      {/* Full-bleed duotone photograph */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/hero-city.jpg"
            alt=""
            fill
            className="object-cover duotone kenburns"
            priority
          />
          {/* Copper duotone overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,12,8,0.45)_0%,rgba(196,122,78,0.25)_50%,rgba(15,12,8,0.85)_100%)]" />
          {/* Bottom-left vignette for text legibility */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_70%,rgba(15,12,8,0.65)_0%,transparent_55%)]" />
        </div>
      </div>

      {/* Cinematic framing marks — corner tick marks */}
      <span className="absolute top-28 left-6 md:left-10 lg:left-14 w-8 h-px bg-[color:var(--copper-pale)]/60 z-[3]" />
      <span className="absolute top-28 left-6 md:left-10 lg:left-14 w-px h-8 bg-[color:var(--copper-pale)]/60 z-[3]" />
      <span className="absolute bottom-12 right-6 md:right-10 lg:right-14 w-8 h-px bg-[color:var(--copper-pale)]/60 z-[3]" />
      <span className="absolute bottom-12 right-6 md:right-10 lg:right-14 w-px h-8 bg-[color:var(--copper-pale)]/60 z-[3]" />

      {/* Overlaid content */}
      <div className="relative z-[2] min-h-[100vh] flex flex-col justify-between px-6 md:px-10 lg:px-14 pt-28 md:pt-36 pb-12">
        {/* Top meta */}
        <div className="flex items-center justify-between reveal-fade">
          <span className="meta text-[color:var(--copper-pale)]">
            · Reel 001 / Unhurried ·
          </span>
          <span className="meta text-white/50 hidden md:inline">
            Picture · New York · Est. MMXXIV
          </span>
        </div>

        {/* Bottom-left headline — cinematic title card */}
        <div className="max-w-[1080px]">
          <p className="meta text-[color:var(--copper-pale)] mb-6 md:mb-8 reveal d-100">
            An Amble &amp; Co. presentation
          </p>
          <h1 className="serif font-light text-white text-[clamp(64px,11vw,180px)] leading-[0.92] tracking-[-0.03em]">
            <span className="block reveal d-200">Unhurried</span>
            <span className="block italic text-[color:var(--copper-pale)] reveal d-400">
              thinking.
            </span>
          </h1>
          <p className="mt-8 md:mt-12 serif font-light italic text-[22px] md:text-[32px] text-[color:var(--copper-pale)] max-w-[620px] reveal d-600">
            Unparalleled results.
          </p>

          <div className="mt-14 md:mt-20 flex flex-wrap items-end justify-between gap-6 pt-6 border-t border-white/15 reveal-fade d-700">
            <p className="text-[15px] md:text-[17px] text-white/80 leading-[1.7] max-w-[540px]">
              We partner with forward-thinking organizations that want to
              transform AI curiosity into AI strategy. A plan, the systems,
              and the team that runs them.
            </p>
            <a
              href="#contact"
              className="link mono text-[13px] text-[color:var(--copper-pale)] uppercase"
            >
              <span>Begin the walk</span>
              <svg
                className="arrow"
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                aria-hidden
              >
                <path d="M11 1L15 5M15 5L11 9M15 5H0" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
