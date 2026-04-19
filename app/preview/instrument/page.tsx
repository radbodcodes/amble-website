import { JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import { InstrumentNav } from "./_components/nav";
import { InstrumentHero } from "./_components/hero";
import { InstrumentOutcomes } from "./_components/outcomes";
import { InstrumentInterlude } from "./_components/interlude";
import { InstrumentMethodology } from "./_components/methodology";
import { InstrumentAbout } from "./_components/about";
import { InstrumentContact } from "./_components/contact";
import { InstrumentFooter } from "./_components/footer";
import "./instrument.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-instrument",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export default function InstrumentPreview() {
  return (
    <div className={`${mono.variable} ${cormorant.variable} instrument-root`}>
      <InstrumentNav />
      <main>
        <InstrumentHero />
        <InstrumentOutcomes />
        <InstrumentInterlude />
        <InstrumentMethodology />
        <InstrumentAbout />
        <InstrumentContact />
      </main>
      <InstrumentFooter />
    </div>
  );
}
