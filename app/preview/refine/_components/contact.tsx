import { ContactForm } from "@/components/contact-form";

export function RefineContact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-10 lg:px-16 py-28 md:py-36"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-start">
          <div className="col-span-12 lg:col-span-6 scroll-reveal">
            <p className="eyebrow mb-6">
              <span className="rule" />
              Let&apos;s Walk
            </p>
            <h2 className="display text-[clamp(40px,6vw,84px)] leading-[1.02] text-[#1A1614] mb-8">
              Ready to <em className="italic text-[#A8673E]">walk?</em>
            </h2>
            <p className="text-[17px] text-[#5C504A] leading-[1.7] max-w-[480px] mb-10">
              Tell us where you are and what&apos;s in the way. No paperwork
              needed. Just a conversation about what matters next.
            </p>
            <div className="border-t border-[#A8673E]/25 pt-6">
              <p className="text-[12px] uppercase tracking-[0.22em] text-[#5C504A] mb-2">
                Or email directly
              </p>
              <a
                href="mailto:letswalk@ambleandco.com"
                className="display text-[24px] md:text-[28px] text-[#A8673E] italic"
              >
                letswalk@ambleandco.com
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 scroll-reveal">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
