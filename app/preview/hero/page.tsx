import { Outcomes } from "@/components/outcomes";
import { Interlude } from "@/components/interlude";
import { Methodology } from "@/components/methodology";
import { About } from "@/components/about";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroReimagined } from "./_components/hero-reimagined";
import { PreviewNav } from "./_components/preview-nav";

export default function HeroVariantPreview() {
  return (
    <>
      <PreviewNav />
      <main>
        <HeroReimagined />
        <Outcomes />
        <Interlude />
        <Methodology />
        <About />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
