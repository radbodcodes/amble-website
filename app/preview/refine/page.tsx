import { Fraunces } from "next/font/google";
import { RefineHero } from "./_components/hero";
import { RefineOutcomes } from "./_components/outcomes";
import { RefineInterlude } from "./_components/interlude";
import { RefineMethodology } from "./_components/methodology";
import { RefineAbout } from "./_components/about";
import { RefineContact } from "./_components/contact";
import { RefineFooter } from "./_components/footer";
import { RefineNav } from "./_components/nav";
import "./refine.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  axes: ["SOFT", "opsz"],
  display: "swap",
});

export default function RefinePreview() {
  return (
    <div className={`${fraunces.variable} refine-root`}>
      <RefineNav />
      <main>
        <RefineHero />
        <RefineOutcomes />
        <RefineInterlude />
        <RefineMethodology />
        <RefineAbout />
        <RefineContact />
        <RefineFooter />
      </main>
    </div>
  );
}
