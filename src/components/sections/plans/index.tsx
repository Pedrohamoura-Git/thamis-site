"use client";
import { plansContent } from "@/data";
import { ExpandableCard } from "@/components/ui";
import { motion } from "framer-motion";

export const Plans = () => {
  return (
    <section
      id="plans"
      className="relative w-full bg-foreground px-4 pb-40 pt-20"
    >
      <div className="mx-auto max-w-md md:max-w-screen-md lg:max-w-screen-lg">
        <h4 className="w-fit text-2xl font-bold text-primary md:text-3xl lg:text-[2.5rem]">
          <span>Atendimentos & Planos</span>

          <motion.div
            className="mb-5 mt-3 border-4 border-accent"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </h4>

        <ExpandableCard cardsContent={plansContent} />
      </div>
    </section>
  );
};
