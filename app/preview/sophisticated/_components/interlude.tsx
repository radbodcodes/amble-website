export function SophisticatedInterlude() {
  return (
    <section className="relative px-6 md:px-10 lg:px-14 py-32 md:py-48 bg-[color:var(--paper-warm)] overflow-hidden">
      <div className="mesh" style={{ opacity: 0.4 }} />

      <div className="relative z-[2] max-w-[1100px] mx-auto text-center">
        <span className="meta text-[color:var(--copper)] scroll-up">
          · Aside ·
        </span>
        <blockquote className="mt-10 md:mt-14 serif font-light text-[clamp(28px,3.8vw,52px)] leading-[1.22] text-[color:var(--ink)] tracking-[-0.015em] scroll-up">
          Technology is easy to acquire.
          <br />
          Turning it into real{" "}
          <span className="italic text-[color:var(--copper)]">value</span> is
          the hard part.
        </blockquote>
        <p className="mt-12 meta-sm text-[color:var(--ink-faint)] scroll-up">
          — A thing we keep saying, because it keeps being true.
        </p>
      </div>
    </section>
  );
}
