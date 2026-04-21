import Image from "next/image";

export function CinemaHero() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden letterbox">
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
          {/* Warm umber gradient with copper bloom */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,19,10,0.35)_0%,rgba(139,79,29,0.22)_48%,rgba(20,16,10,0.92)_100%)]" />
          {/* Sodium streetlamp copper glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_70%,rgba(212,111,52,0.38)_0%,rgba(24,19,10,0.45)_42%,transparent_72%)]" />
          {/* Subtle cool rim on the right — Gattaca architectural cyan */}
          <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(46,70,84,0.28)_0%,transparent_35%)]" />
        </div>
      </div>

      {/* Orbital motif — slow-rotating thin line circles upper right */}
      <div className="absolute top-28 right-6 md:right-10 lg:right-14 w-24 h-24 md:w-32 md:h-32 z-[4] pointer-events-none opacity-60">
        <svg viewBox="0 0 120 120" className="absolute inset-0 orbit-slow">
          <circle cx="60" cy="60" r="58" stroke="var(--azure-glow)" strokeWidth="0.5" fill="none" strokeDasharray="2 4" />
          <circle cx="60" cy="2" r="1.5" fill="var(--copper-glow)" />
        </svg>
        <svg viewBox="0 0 120 120" className="absolute inset-0 orbit">
          <circle cx="60" cy="60" r="44" stroke="var(--copper)" strokeWidth="0.5" fill="none" />
          <circle cx="60" cy="16" r="1" fill="var(--azure-glow)" />
        </svg>
      </div>

      {/* Cinematic corner tick marks — copper bottom-left, cool top-left */}
      <span className="absolute top-28 left-6 md:left-10 lg:left-14 w-7 h-px bg-[color:var(--azure-glow)]/70 z-[6]" />
      <span className="absolute top-28 left-6 md:left-10 lg:left-14 w-px h-7 bg-[color:var(--azure-glow)]/70 z-[6]" />
      <span className="absolute bottom-24 right-6 md:right-10 lg:right-14 w-7 h-px bg-[color:var(--copper-pale)]/70 z-[6]" />
      <span className="absolute bottom-24 right-6 md:right-10 lg:right-14 w-px h-7 bg-[color:var(--copper-pale)]/70 z-[6]" />

      {/* Overlaid content */}
      <div className="relative z-[2] min-h-[100vh] flex flex-col justify-between px-6 md:px-10 lg:px-14 pt-32 md:pt-40 pb-20">
        {/* Top HUD — mission data readout */}
        <div className="flex items-start justify-between reveal-fade gap-6">
          <span className="data-sm text-[color:var(--copper-pale)] mt-2">
            SEQ.01 / AMB — NYC
          </span>
          <div className="hud hidden md:flex w-[280px]">
            <div className="hud-row">
              <span className="data-sm hud-label">COORD</span>
              <span className="data-num hud-value text-[11px]">40.7128° N · 74.0060° W</span>
            </div>
            <div className="hud-row">
              <span className="data-sm hud-label">STATUS</span>
              <span className="data-num hud-value text-[11px]">ACCEPTING ENGAGEMENTS</span>
            </div>
            <div className="hud-row">
              <span className="data-sm hud-label">TEMPO</span>
              <span className="data-num hud-value text-[11px]">UNHURRIED</span>
            </div>
          </div>
        </div>

        {/* Title block */}
        <div className="max-w-[1080px]">
          <h1 className="serif font-light text-[color:var(--paper)] text-[clamp(64px,10vw,176px)] leading-[0.92] tracking-[-0.035em]">
            <span className="block reveal d-100">Unhurried</span>
            <span className="block italic text-[color:var(--copper-glow)] reveal d-300">
              thinking.
            </span>
          </h1>
          <p className="mt-8 md:mt-12 serif font-light italic text-[22px] md:text-[30px] text-[color:var(--copper-pale)] max-w-[620px] reveal d-500">
            Unparalleled results.
          </p>

          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pt-8 border-t border-[color:var(--hairline)] reveal-fade d-700">
            <p className="md:col-span-7 text-[16px] md:text-[18px] text-[color:var(--paper)]/85 leading-[1.65] max-w-[560px]">
              We partner with forward-thinking organizations that want to
              transform AI curiosity into AI strategy. A plan, the systems,
              and the team that runs them.
            </p>
            <div className="md:col-span-5 flex md:justify-end items-center">
              <a href="#contact" className="link-cta">
                <span>Begin the walk</span>
                <svg
                  className="arrow"
                  width="22"
                  height="14"
                  viewBox="0 0 22 14"
                  fill="none"
                  aria-hidden
                >
                  <path d="M15 1L21 7M21 7L15 13M21 7H0" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
