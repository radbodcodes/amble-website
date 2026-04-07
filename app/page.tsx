import { Hero } from "@/components/hero";
import { Outcomes } from "@/components/outcomes";
import { Interlude } from "@/components/interlude";
import { About } from "@/components/about";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Outcomes />
      <Interlude />
      <About />
      <ContactSection />
    </main>
  );
}
