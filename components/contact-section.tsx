"use client";

import { AnimateOnScroll } from "./animate-on-scroll";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 md:px-12 lg:px-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <AnimateOnScroll>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-3xl md:text-[48px] font-normal text-text leading-[1.2] mb-5">
              Ready to Walk?
            </h2>
            <p className="text-[16px] text-text-secondary leading-[1.7] mb-8">
              Tell us where you are and what&apos;s in the way. No paperwork
              needed. Just a conversation about what matters next.
            </p>
            <p className="text-[16px] font-medium text-primary">
              Or email us directly:{" "}
              <a
                href="mailto:letswalk@ambleandco.com"
                className="underline underline-offset-2"
              >
                letswalk@ambleandco.com
              </a>
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.15}>
            <ContactForm />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
