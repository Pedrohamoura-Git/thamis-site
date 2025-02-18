"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Arrow } from "@/widgets";

export const Hero = () => {
  const [imageSrc, setImageSrc] = useState("/home-sm.jpg");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc("/home-sm.jpg");
      } else if (window.innerWidth <= 1024) {
        setImageSrc("/basil-herbs-green-mediterranean-40720.jpg");
      } else {
        setImageSrc("/home-2.jpg");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="z-10 mb-5 flex w-full flex-col items-center md:flex-row md:overflow-hidden">
      <div className="glossy-effect-custom relative z-50 h-screen w-full overflow-hidden before:h-[200%] before:w-[200%] md:h-full">
        <Image
          src={imageSrc}
          height={5207}
          width={3673}
          alt="Imagem de fundo"
          className="z-10 h-full w-full object-cover"
        />

        <div className="absolute left-1/2 top-2/3 z-20 -translate-x-1/2">
          <h1 className="font-prompt w-96 text-center text-4xl text-foreground md:text-4xl">
            Sua jornada para uma vida mais saudável começa aqui!
          </h1>

          <Arrow href="#about" />
        </div>
      </div>
    </section>
  );
};
