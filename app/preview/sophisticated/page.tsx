import { JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import { SophisticatedNav } from "./_components/nav";
import { SophisticatedHero } from "./_components/hero";
import { SophisticatedOutcomes } from "./_components/outcomes";
import { SophisticatedInterlude } from "./_components/interlude";
import { SophisticatedMethodology } from "./_components/methodology";
import { SophisticatedAbout } from "./_components/about";
import { SophisticatedContact } from "./_components/contact";
import { SophisticatedFooter } from "./_components/footer";
import "./sophisticated.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-sophisticated-serif",
  display: "swap",
});

export default function SophisticatedPreview() {
  return (
    <div className={`${mono.variable} ${cormorant.variable} sophisticated-root`}>
      <SophisticatedNav />
      <main>
        <SophisticatedHero />
        <SophisticatedOutcomes />
        <SophisticatedInterlude />
        <SophisticatedMethodology />
        <SophisticatedAbout />
        <SophisticatedContact />
      </main>
      <SophisticatedFooter />
    </div>
  );
}
