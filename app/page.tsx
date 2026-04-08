import { Hero } from "@/components/hero";
import { Outcomes } from "@/components/outcomes";
import { Methodology } from "@/components/methodology";
import { Interlude } from "@/components/interlude";
import { About } from "@/components/about";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Outcomes />
      <Interlude />
      <Methodology />
      <About />
      <ContactSection />
      <Footer />
    </main>
  );
}
