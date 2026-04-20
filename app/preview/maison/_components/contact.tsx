import { ContactForm } from "@/components/contact-form";

export function MaisonContact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 lg:px-20 pt-32 md:pt-48 pb-28 md:pb-40"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-24 md:mb-32 scroll-settle">
          <span className="caps text-[color:var(--accent)]">
            Correspondence
          </span>
          <hr className="silk w-32 mx-auto mt-10 mb-10" />
          <h2 className="display text-[color:var(--ink)] text-[clamp(56px,9vw,148px)] leading-[0.94]">
            Shall we{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>
              walk?
            </span>
          </h2>
          <p className="mt-12 body text-[17px] md:text-[19px] text-[color:var(--ink-soft)] leading-[1.8] max-w-[620px] mx-auto">
            Tell us where you are and what is in the way. No paperwork. A
            letter begins the conversation.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 md:col-span-5 scroll-settle">
            <span className="caps text-[color:var(--accent)]">
              Or by post
            </span>
            <a
              href="mailto:letswalk@ambleandco.com"
              className="mt-8 block display italic font-light text-[26px] md:text-[34px] text-[color:var(--accent)] hover:text-[color:var(--ink)] transition-colors break-all"
            >
              letswalk@ambleandco.com
            </a>
            <hr className="silk mt-12 mb-10" />
            <p className="body text-[15px] text-[color:var(--ink-soft)] leading-[1.85] max-w-[420px]">
              Letters are welcome at any hour. We reply when we have something
              considered to say.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 scroll-settle">
            <div className="swatch-frame p-10 md:p-14">
              <div className="relative z-[1]">
                <div className="flex items-baseline justify-between mb-10">
                  <span className="caps text-[color:var(--accent)]">
                    Form i — Private
                  </span>
                  <span className="folio text-[16px]">Est. MMXXIV</span>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
