import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center md:flex-row my-5 w-full">
      <div className="h-[350px] w-full relative z-50">
        <Image
          src="/food.jpg"
          height={144}
          width={192}
          alt=""
          className="w-full h-full z-10 absolute top-0 blur-lg"
        />

        <div className="absolute top-0 z-20 h-full">
          <div className="flex flex-col text-center items-start p-5 h-full justify-center gap-14">
            {/* <header className="text-primary-foreground">
              <h1 className="text-2xl font-black-mango-regular md:text-3xl">
                Thamis Moura
              </h1>
              <h2>CRN3 66118</h2>
            </header> */}

            <h3 className="text-4xl font-prompt text-primary-foreground w-96 text-left md:text-4xl">
              Sua jornada para uma vida mais saudável começa aqui!
            </h3>

            <Button
              className="font-noto-sans md:text-lg md:w-48 bg-btn-custom animate-pulse-custom"
              variant="accent-foreground"
              size="lg"
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </div>

      <Image
        src="/site4.webp"
        height={350}
        width={350}
        className="rounded-lg w-full md:h-[290px] md:w-[300px]"
        alt="Imagem de apresentação da Dra. Thamis Moura"
      />
    </section>
  );
};
