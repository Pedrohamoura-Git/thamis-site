"use client";

import { Tabs } from "@/components/ui";
import { cn } from "@/lib/utils";
import Image from "next/image";
function TabsContent() {
  const commonClass =
    "relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-accent to-accent-foreground p-8 text-xl font-bold text-white md:p-10 md:text-4xl";
  const tabs = [
    {
      title: "Consulta mensal",
      value: "monthly-consultation",

      content: (
        <div className={cn("", commonClass)}>
          <p className="mt-4 h-3/4 text-base/8 lg:text-lg">
            Avaliação completa, avaliação de exames, suplementação de vitaminas
            e fitoterápicos se necessário, plano alimentar, ebook de receitas e
            outros materiais e apoio via whatsapp 1 vez no mês.
          </p>
          <p className="absolute bottom-8 left-8">Investimento: R$ 210,00</p>
          {/* <DummyContent imgSrc="/1.png" /> */}
        </div>
      ),
    },
    {
      title: "Consulta trimestral",
      value: "quarterly-consultation",
      content: (
        <div className={cn("", commonClass)}>
          <p className="mt-4 h-3/4 text-base/8 lg:text-lg">
            3 consultas + avaliação completa, avaliação de exames, suplementação
            de vitaminas e fitoterápicos se necessário, plano alimentar, ebook
            de receitas e outros materiais e apoio via whatsapp quinzenal.‌
          </p>
          <p className="absolute bottom-8 left-8">Investimento: R$ 630,00</p>
          {/* <DummyContent imgSrc="/1.png" /> */}
        </div>
      ),
    },
    {
      title: "Orientação nutricional",
      value: "nutricional-guidance",
      content: (
        <div className={cn("", commonClass)}>
          <p className="mt-4 h-3/4 text-base/8 lg:text-lg">
            Investir em sua saúde é o melhor presente que você pode se dar.
          </p>
          <p className="absolute bottom-8 left-8">Investimento: R$ 115,50</p>
          {/* <DummyContent imgSrc="/1.png" /> */}
        </div>
      ),
    },
    {
      title: "Plano alimentar semanal",
      value: "weekly-meal-plan",
      content: (
        <div className={cn("", commonClass)}>
          <p className="mt-4 h-3/4 text-base/8 lg:text-lg">
            Plano alimentar semanal (emagrecimento, ganho de massa, diabetes,
            hipertensão, colesterol alto, constipação e etc).
            <br />
            Contêm 3 opções de refeições por cada refeição.
          </p>
          <p className="absolute bottom-8 left-8">Investimento: R$ 262,50</p>
          {/* <DummyContent imgSrc="/1.png" /> */}
        </div>
      ),
    },
    {
      title: "Bioimpedância",
      value: "Bioimpedance",
      content: (
        <div className={cn("", commonClass)}>
          <p className="mt-4 h-3/4 text-base/8 lg:text-lg">
            Exame realizado em consultório, com balança de última geração
            (MEDIANA) com avaliação de parâmetros antropométricos, percentual de
            gordura, massa magra e outros.{" "}
          </p>
          <p className="absolute bottom-8 left-8">Investimento: R$ 105,00</p>
          {/* <DummyContent imgSrc="/1.png" /> */}
        </div>
      ),
    },
    {
      title: "Lista de compras",
      value: "shopping-list",
      content: (
        <div className={cn("", commonClass)}>
          <p className="mt-4 h-3/4 text-base/8 lg:text-lg">
            Diga adeus às listas perdidas e às compras por impulso. Esse serviço
            te ajuda a manter uma alimentação saudável e balanceada.
          </p>
          <p className="absolute bottom-8 left-8">Investimento: R$ 315,00</p>
          {/* <DummyContent imgSrc="/1.png" /> */}
        </div>
      ),
    },
    {
      title: "Consulta social",
      value: "social-consultation",
      content: (
        <div className={cn("", commonClass)}>
          <p className="mt-4 h-3/4 overflow-scroll text-base/7 lg:text-lg">
            Ofereço atendimento nutricional com valor reduzido para tornar o
            serviço acessível a pessoas em situação de vulnerabilidade
            econômica. Essa iniciativa busca promover a saúde e a qualidade de
            vida, fornecendo orientações para prevenir e tratar condições como
            obesidade, diabetes e hipertensão. O valor social cobre os custos
            mínimos, mantendo a qualidade do atendimento e garantindo um cuidado
            ético e inclusivo para a comunidade.
          </p>
          <p className="absolute bottom-8 left-8">Investimento: R$ 50,00</p>
          {/* <DummyContent imgSrc="/1.png" /> */}
        </div>
      ),
    },
  ];

  return (
    <div className="relative mx-auto my-20 flex h-96 w-full max-w-5xl flex-col items-start justify-start [perspective:1000px] md:h-[40rem] lg:my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <Image
      src={imgSrc}
      alt="dummy image"
      width="100"
      height="100"
      className="absolute inset-x-0 -bottom-10 mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
    />
  );
};

export const Plans = () => {
  return (
    <section id="plans" className="p-4">
      <TabsContent />
    </section>
  );
};
