import { Hero } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-24 w-100vw">
      <main className="flex flex-col gap-8 row-start-2 w-full">
        <Hero />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
