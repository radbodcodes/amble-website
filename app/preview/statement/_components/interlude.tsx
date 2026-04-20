export function StatementInterlude() {
  return (
    <section className="relative bg-[color:var(--ink)] px-6 md:px-10 lg:px-14 py-28 md:py-44 overflow-hidden">
      {/* Oversized background word */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="display text-[28vw] leading-none"
          style={{
            color: "var(--coral)",
            opacity: 0.16,
          }}
        >
          VALUE
        </span>
      </div>

      <div className="relative max-w-[1240px] mx-auto scroll-punch">
        <span className="label text-[color:var(--coral)] mb-8 inline-block">
          The Point
        </span>
        <blockquote className="display text-[clamp(44px,8vw,140px)] leading-[0.92] text-[color:var(--cream)]">
          Tech is
          <span
            className="italic"
            style={{
              color: "var(--coral)",
              fontStyle: "italic",
              fontWeight: 400,
              fontFamily: "serif",
            }}
          >
            {" "}easy{" "}
          </span>
          to buy.
          <br />
          Making it
          <span
            style={{
              color: "var(--coral)",
            }}
          >
            {" "}work{" "}
          </span>
          is the job.
        </blockquote>
        <p className="mt-16 body text-[17px] md:text-[19px] text-[color:var(--coral-pale)] max-w-[560px] leading-[1.6]">
          It is never the technology. It is the people, the process, the
          measurement, and the discipline to keep showing up. That is what we
          do.
        </p>
      </div>
    </section>
  );
}
