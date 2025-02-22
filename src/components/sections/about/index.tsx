import { Apple, ProfessionalHat, Puzzle } from "@/widgets";
import Image from "next/image";

export const About = () => {
  return (
    <section className="relative mb-20 flex w-full flex-col items-center overflow-x-clip p-8 pt-0 md:p-5 md:pt-0 lg:max-w-screen-lg lg:gap-14">
      <div
        id="about"
        className="pt-20 md:flex md:flex-row md:items-start md:justify-center md:gap-10"
      >
        <Image
          src="/profile.webp"
          alt=""
          width={380}
          height={380}
          className="l :h-96 z-10 rounded-3xl md:h-[22rem] md:w-[22rem] lg:w-96"
        />
        <div className="mt-7 px-2 text-left md:z-10 md:mt-0 lg:min-w-[450px]">
          <h2 className="text-[1.9rem] font-bold text-primary md:text-[2.1rem] lg:text-[2.5rem]">
            Thamis Maciel Moura
          </h2>
          <h3 className="text-lg text-primary-foreground lg:pt-2 lg:text-xl">
            Nutricionista CRN 3-66118
          </h3>
          <div className="mb-10 mt-3 w-1/2 border-4 border-accent" />

          <p className="font-inter text-[.95rem] text-primary lg:text-lg">
            Nutricionista especialista em Saúde da Família pela Escola de Saúde
            Pública da Bahia e Secretaria de Saúde da Bahia.
            <br />
            <br />
            Com especialização em Nutrição Vegetariana e Vegana e Fitoterapia
            Clínica. Formada pelo UNASP, São Paulo (2020).
            <br />
            <br />
            Experiência em consumo alimentar, nutrição clínica e ambulatorial,
            com ênfase em doenças crônicas não transmissíveis, práticas
            saudáveis, educação em saúde e bem-estar.
          </p>
        </div>
      </div>
    </section>
  );
};
