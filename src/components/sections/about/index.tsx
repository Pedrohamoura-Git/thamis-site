import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      className="flex w-full flex-col items-center px-8 md:flex-row md:items-start md:justify-center md:gap-10 lg:gap-14"
    >
      <Image
        src="/profile.webp"
        alt=""
        width={380}
        height={380}
        className="rounded-3xl md:h-72 md:w-72 lg:h-96 lg:w-96"
      />

      <div className="mt-7 px-2 text-left md:mt-0 lg:min-w-[450px]">
        <h2 className="text-[1.9rem] font-bold text-primary md:text-[2.1rem] lg:text-[2.5rem]">
          Thamis Maciel Moura
        </h2>
        <h3 className="text-lg text-foreground lg:pt-2 lg:text-xl">
          Nutricionista CRN 3-66118
        </h3>

        <p className="font-inter mt-4 text-[.95rem] text-primary lg:text-lg">
          Nutricionista especialista em Saúde da Família pela Escola de Saúde
          Pública da Bahia e Secretaria de Saúde da Bahia.
          <br />
          <br />
          Com especialização em Nutrição Vegetariana e Vegana e Fitoterapia
          Clínica. Formada pelo UNASP, São Paulo (2020).
          <br />
          <br />
          Experiência em consumo alimentar, nutrição clínica e ambulatorial, com
          ênfase em doenças crônicas não transmissíveis, práticas saudáveis,
          educação em saúde e bem-estar.
        </p>
      </div>
    </section>
  );
};
