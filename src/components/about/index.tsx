import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center md:flex-row w-full px-8"
    >
      <Image
        src="/profile.webp"
        alt=""
        width={380}
        height={380}
        className="rounded-3xl"
      />

      <div className="py-7 text-left">
        <h2 className="text-primary text-4xl font-bold">Thamis Maciel Moura</h2>
        <h3 className="text-foreground text-lg">Nutricionista CRN 3-66118</h3>

        <p className="text-primary text-[.95rem] font-inter mt-4">
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
