import { ContactForm } from "@/components/contact-form";

export function EditorialContact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-10 lg:px-14 py-24 md:py-32"
    >
      <div className="folio text-[#14100D] mb-14">
        <span>Coda</span>
        <span>Correspondence</span>
      </div>

      <div className="grid grid-cols-12 gap-10 lg:gap-20 items-start">
        <div className="col-span-12 lg:col-span-6 scroll-reveal">
          <h2 className="editorial text-[clamp(56px,10vw,160px)] leading-[0.9] text-[#14100D]">
            Ready
            <br />
            to
            <br />
            <span className="editorial-italic text-[#A8673E]">walk?</span>
          </h2>
          <hr className="rule-thick my-10" />
          <p className="serif text-[18px] md:text-[22px] leading-[1.6] text-[#14100D]/85 max-w-[480px]">
            Tell us where you are and what&apos;s in the way. No paperwork
            needed. Just a conversation about what matters next.
          </p>
          <div className="mt-10 space-y-2">
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#14100D]/60">
              Correspondence, Open Hours
            </p>
            <a
              href="mailto:letswalk@ambleandco.com"
              className="editorial-italic text-[28px] md:text-[36px] text-[#A8673E] inline-block"
            >
              letswalk@ambleandco.com
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 scroll-reveal border-2 border-[#14100D] p-6 md:p-10 bg-[#F3EADB]">
          <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#14100D]/70 mb-4">
            Letter to the Editors
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
