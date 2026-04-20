import { ContactForm } from "@/components/contact-form";

export function StatementContact() {
  return (
    <section
      id="contact"
      className="relative bg-[color:var(--coral)] px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-28 md:pb-36"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16 md:mb-24 scroll-punch max-w-[1200px]">
          <span className="label text-[color:var(--ink)] mb-6 inline-block">
            Last thing
          </span>
          <h2 className="display text-[color:var(--ink)] text-[clamp(88px,16vw,280px)] leading-[0.82]">
            Let&apos;s
            <br />
            <span style={{ color: "var(--cream)" }}>walk.</span>
          </h2>
          <p className="mt-12 body text-[20px] md:text-[24px] text-[color:var(--ink)] leading-[1.4] max-w-[640px]">
            Tell us where you are and what is in the way. No paperwork. Just a
            conversation about what matters next.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5 scroll-punch">
            <div className="bg-[color:var(--ink)] text-[color:var(--cream)] border-2 border-[color:var(--ink)] rounded-[32px] p-8 md:p-12 h-full">
              <span className="label text-[color:var(--coral-pale)] mb-6 inline-block">
                Or just email
              </span>
              <a
                href="mailto:letswalk@ambleandco.com"
                className="block display text-[26px] md:text-[38px] leading-[0.95] text-[color:var(--coral)] hover:text-[color:var(--cream)] transition-colors break-all"
                style={{ textTransform: "none", letterSpacing: "-0.015em" }}
              >
                letswalk@
                <br />
                ambleandco.com
              </a>
              <hr className="my-10 border-[color:var(--cream)]/25" />
              <p className="body text-[15px] leading-[1.7] text-[color:var(--cream)]/80 max-w-[340px]">
                We answer when we have something real to say. Usually 24–48
                hours. Never a canned response.
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 scroll-punch">
            <div className="bg-[color:var(--cream)] border-2 border-[color:var(--ink)] rounded-[32px] p-8 md:p-12">
              <div className="flex items-baseline justify-between mb-10 pb-5 border-b-2 border-[color:var(--ink)]">
                <span className="label text-[color:var(--coral-deep)]">
                  Start the conversation
                </span>
                <span className="label text-[color:var(--ink-soft)]">
                  01 of 1
                </span>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
