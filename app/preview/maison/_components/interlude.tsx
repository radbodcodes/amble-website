export function MaisonInterlude() {
  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-36 md:py-56 bg-[color:var(--bone)]">
      <div className="max-w-[1020px] mx-auto text-center scroll-settle">
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 mx-auto mb-10 text-[color:var(--accent)]"
          aria-hidden
        >
          <path
            d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
            fill="currentColor"
            opacity="0.85"
          />
        </svg>
        <hr className="silk w-40 mx-auto mb-14" />
        <blockquote className="display text-[color:var(--ink)] text-[clamp(30px,4.5vw,64px)] leading-[1.18]">
          Technology is
          <span className="italic" style={{ color: "var(--accent)" }}>
            {" "}easy{" "}
          </span>
          to acquire.
          <br />
          Turning it into real
          <span className="italic" style={{ color: "var(--accent)" }}>
            {" "}value{" "}
          </span>
          is the hard part.
        </blockquote>
        <hr className="silk w-40 mx-auto mt-14" />
        <p className="mt-10 caps text-[color:var(--ink-faint)]">
          House philosophy, in twenty-one words
        </p>
      </div>
    </section>
  );
}
