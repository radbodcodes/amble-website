import { EB_Garamond, IBM_Plex_Mono } from "next/font/google";
import { ApothecaryNav } from "./_components/nav";
import { ApothecaryHero } from "./_components/hero";
import { ApothecaryOutcomes } from "./_components/outcomes";
import { ApothecaryInterlude } from "./_components/interlude";
import { ApothecaryMethodology } from "./_components/methodology";
import { ApothecaryAbout } from "./_components/about";
import { ApothecaryContact } from "./_components/contact";
import { ApothecaryFooter } from "./_components/footer";
import "./apothecary.css";

const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-apothecary-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-apothecary-mono",
  display: "swap",
});

export default function ApothecaryPreview() {
  return (
    <div className={`${serif.variable} ${mono.variable} apothecary-root`}>
      <ApothecaryNav />
      <main>
        <ApothecaryHero />
        <ApothecaryOutcomes />
        <ApothecaryInterlude />
        <ApothecaryMethodology />
        <ApothecaryAbout />
        <ApothecaryContact />
      </main>
      <ApothecaryFooter />
    </div>
  );
}
