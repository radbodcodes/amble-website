import { Hero } from "@/components/hero";
import { Outcomes } from "@/components/outcomes";
import { Interlude } from "@/components/interlude";

export default function Home() {
  return (
    <main>
      <Hero />
      <Outcomes />
      <Interlude />
    </main>
  );
}
