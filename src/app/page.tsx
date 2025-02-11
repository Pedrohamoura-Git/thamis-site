import { About, Footer, Hero, Plans } from "@/components/sections";

export default function Home() {
  return (
    <div className="w-100vw mt-24 flex flex-col items-center">
      <main className="row-start-2 flex w-full flex-col gap-8">
        <Hero />
        <About />
        <Plans />
      </main>
      <Footer />
    </div>
  );
}
