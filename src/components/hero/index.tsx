import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex flex-col gap-7 items-center md:flex-row my-5">
      <div className="flex flex-col text-center gap-7 items-center md:items-start">
        <header>
          <h1 className="text-2xl text-accent font-black-mango-regular md:text-3xl">
            Thamis Moura
          </h1>
          <h2>CRN3 66118</h2>
        </header>

        <h3 className="text-3xl font-prompt text-accent-foreground w-96 md:text-left md:text-4xl">
          Sua jornada para uma vida mais saudável começa aqui!
        </h3>

        <Button
          className="w-40 font-noto-sans md:text-lg md:w-48"
          variant="accent-foreground"
          size="lg"
        >
          Começar agora
        </Button>
      </div>

      <Image
        src="/site4.webp"
        height={400}
        width={400}
        className="rounded-lg md:h-[290px] md:w-[300px]"
        alt="Imagem de apresentação da Dra. Thamis Moura"
      />
    </section>
  );
};
