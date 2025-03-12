"use client";
import { plansContent } from "@/data";
import { ExpandableCard } from "@/components/ui";

export const Plans = () => {
  return (
    <section id="plans" className="relative w-full bg-foreground pb-40 pt-20">
      <div className="mx-auto max-w-md md:max-w-screen-md lg:max-w-screen-lg">
        <h4 className="ml-10 text-2xl font-bold text-primary md:text-3xl lg:text-[2.5rem]">
          Atendimentos & Planos
        </h4>

        <div className="mb-5 ml-10 mt-3 w-1/2 border-4 border-accent" />

        <ExpandableCard cardsContent={plansContent} />
      </div>
    </section>
  );
};
