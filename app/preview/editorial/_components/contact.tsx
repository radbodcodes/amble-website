import { ContactForm } from "@/components/contact-form";

export function EditorialContact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-10 lg:px-14 pt-28 md:pt-40 pb-24 md:pb-32"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-20 md:mb-28 scroll-up">
          <span className="chapter text-[color:var(--accent)]">— Correspondence —</span>
          <h2 className="mt-8 display font-light text-[clamp(52px,8vw,128px)] leading-[0.95] text-[color:var(--ink)] tracking-[-0.025em]">
            Ready to{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>walk?</span>
          </h2>
          <p className="mt-10 serif text-[17px] md:text-[19px] text-[color:var(--ink-soft)] leading-[1.7] max-w-[620px] mx-auto">
            Tell us where you are and what is in the way. No paperwork needed.
            Just a conversation about what matters next.
          </p>
        </div>

        <hr className="double-rule mb-16 md:mb-20" />

        <div className="grid grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 md:col-span-5 scroll-up">
            <span className="chapter text-[color:var(--accent)]">Or — directly</span>
            <a
              href="mailto:letswalk@ambleandco.com"
              className="mt-6 block display italic font-light text-[26px] md:text-[32px] text-[color:var(--accent)] hover:underline underline-offset-[6px] break-all"
            >
              letswalk@ambleandco.com
            </a>
            <p className="mt-10 serif text-[16px] text-[color:var(--ink-soft)] leading-[1.75] max-w-[420px]">
              Letters are welcome at any hour. We reply when we have
              something considered to say.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 scroll-up">
            <div className="border border-[color:var(--hairline)] bg-[color:var(--paper)] p-8 md:p-12">
              <div className="flex items-baseline justify-between mb-8">
                <span className="chapter text-[color:var(--accent)]">Form I</span>
                <span className="label italic text-[color:var(--ink-faint)]">Confidential</span>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
