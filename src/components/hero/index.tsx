import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex flex-col gap-7 items-center">
      <div className="flex flex-col text-center">
        <h1 className="text-2xl text-accent font-black-mango-regular">
          Thamis Moura
        </h1>
        <h2>CRN3 66118</h2>

        <h3 className="mt-10 text-3xl font-prompt-bold text-accent-foreground w-96">
          Sua jornada para uma vida mais saudável começa aqui!
        </h3>
      </div>

      <Button className="" variant="accent-foreground" size="lg">
        Começar agora
      </Button>

      <Image
        src="/site4.webp"
        height={400}
        width={400}
        className="rounded-lg"
        alt="Imagem de apresentação da Dra. Thamis Moura"
      />
    </section>
  );
};
