import { Hero } from "./Hero";
import { FAQ } from "./FAQ";
import { Chosen } from "./Chosen";
import { Solutions } from "./Solutions";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex items-center flex-col gap-5">
      <Hero />
      <Solutions />
      <Chosen />
      <FAQ />
      <Contact />
    </main>
  );
}
