import { Playfair_Display, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { EditorialMasthead } from "./_components/masthead";
import { EditorialHero } from "./_components/hero";
import { EditorialOutcomes } from "./_components/outcomes";
import { EditorialInterlude } from "./_components/interlude";
import { EditorialMethodology } from "./_components/methodology";
import { EditorialAbout } from "./_components/about";
import { EditorialContact } from "./_components/contact";
import { EditorialFooter } from "./_components/footer";
import { EditorialCursor } from "./_components/cursor";
import "./editorial.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-editorial-italic",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-editorial-mono",
  display: "swap",
});

export default function EditorialPreview() {
  return (
    <div
      className={`${playfair.variable} ${instrument.variable} ${mono.variable} editorial-root`}
    >
      <EditorialCursor />
      <EditorialMasthead />
      <main>
        <EditorialHero />
        <EditorialOutcomes />
        <EditorialInterlude />
        <EditorialMethodology />
        <EditorialAbout />
        <EditorialContact />
      </main>
      <EditorialFooter />
    </div>
  );
}
