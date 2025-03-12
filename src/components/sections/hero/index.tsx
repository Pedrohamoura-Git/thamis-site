"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Arrow } from "@/widgets";
import Link from "next/link";

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
    <section className="parallax z-10 flex min-h-screen w-full flex-col items-center md:flex-row md:overflow-hidden">
      <div className="parallax glossy-effect-custom relative z-50 h-full w-full overflow-hidden before:h-[200%] before:w-[200%] md:h-full">
        <div className="glossy-effect-custom absolute left-1/2 top-[65%] z-20 h-full w-full -translate-x-1/2 md:top-[72%] xl:top-[65%]">
          <h1 className="z-25 m-auto w-96 text-center text-4xl text-foreground md:w-3/4 md:text-5xl lg:text-6xl xl:w-3/5 2xl:w-2/5">
            Sua jornada para uma vida mais saudável começa aqui!
          </h1>

          <div className="relative mt-20">
            <Link href="#about" className="arrow-container">
              <div className="arrow h-6 w-2"></div>
              <div className="arrow h-6 w-2"></div>
              <div className="arrow h-6 w-2"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
