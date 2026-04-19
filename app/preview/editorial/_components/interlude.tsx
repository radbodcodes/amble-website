export function EditorialInterlude() {
  return (
    <section className="relative px-6 md:px-10 lg:px-14 py-32 md:py-48 bg-[color:var(--paper-warm)]">
      <div className="max-w-[1100px] mx-auto">
        <hr className="double-rule mb-16 md:mb-20" />

        <div className="text-center scroll-up">
          <span className="chapter text-[color:var(--accent)]">— Pull Quote —</span>
          <blockquote className="mt-10 md:mt-14 display font-light text-[clamp(32px,4.2vw,64px)] leading-[1.16] text-[color:var(--ink)] tracking-[-0.02em]">
            <span className="display italic text-[color:var(--accent)]">&ldquo;</span>
            Technology is easy to acquire.
            <br />
            Turning it into real{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>value</span> is the hard part.
            <span className="display italic text-[color:var(--accent)]">&rdquo;</span>
          </blockquote>
          <p className="mt-12 label italic text-[color:var(--ink-faint)]">
            — From &ldquo;A Note on Pace,&rdquo; a thing we keep saying.
          </p>
        </div>

        <hr className="double-rule mt-16 md:mt-20" />
      </div>
    </section>
  );
}
