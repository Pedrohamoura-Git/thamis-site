"use client";

import { ExpandableCard, Tabs } from "@/components/ui";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Cta } from "@/components";

export const Plans = () => {
  return (
    <section id="plans" className="relative mt-20 w-full bg-foreground">
      <div className="mx-auto max-w-md pb-40 md:max-w-screen-sm">
        <h4 className="ml-10 text-2xl font-bold text-primary md:text-3xl lg:text-[2.5rem]">
          Atendimentos & Planos
        </h4>

        <div className="mb-5 ml-10 mt-3 w-1/2 border-4 border-accent" />

        <ExpandableCard />
      </div>
    </section>
  );
};
