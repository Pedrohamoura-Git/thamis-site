import { About, Cta, Footer, Hero, Plans, Traits } from "@/components/sections";

export default function Home() {
  return (
    <div className="w-100vw flex flex-col items-center">
      <main className="row-start-2 flex w-full flex-col items-center">
        <Hero />
        <Traits />
        <About />
        <Cta />
        <Plans />
      </main>
      <Footer />
    </div>
  );
}
