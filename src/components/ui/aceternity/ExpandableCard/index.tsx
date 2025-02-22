"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks";
import { BentoGridItem } from "../bentoGrid";

export const ExpandableCard = () => {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Glossy effect */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>

      {/* Dialog */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute right-2 top-40 flex h-6 w-6 items-center justify-center rounded-full bg-foreground lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-fit w-11/12 max-w-[500px] flex-col overflow-hidden bg-foreground dark:bg-neutral-900 sm:rounded-3xl md:h-fit md:max-h-[90%]"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="h-72 w-full object-cover object-top sm:rounded-tl-lg sm:rounded-tr-lg lg:h-80"
                />
              </motion.div>

              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold capitalize text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-primary"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="hover:animate-pulse-custom rounded-full bg-accent-foreground px-3 py-3 text-sm font-bold text-foreground"
                  >
                    Agendar consulta
                  </motion.a>
                </div>
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-52 flex-col items-start overflow-auto pb-10 text-sm/6 text-primary [-ms-overflow-style:scroll] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] md:h-fit md:text-sm lg:text-base"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Not active cards */}
      <ul className="w-full gap-4 lg:max-w-4xl">
        {cards.map((card) => (
          <motion.li
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="mb-3 cursor-pointer rounded-xl p-4 hover:bg-foreground md:flex-row"
          >
            <motion.div className="group/bento row-span-1 flex h-40 w-full flex-row items-center justify-between rounded-xl border border-transparent bg-foreground p-1 shadow-xl transition duration-200 dark:border-white/[0.2] dark:bg-black md:p-4">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-36 w-40 rounded-lg object-cover object-top md:h-14 md:w-14"
                />
              </motion.div>

              <motion.div className="mx-auto flex flex-col justify-center transition duration-200 group-hover/bento:translate-x-2">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="max-w-52 text-center text-lg font-bold capitalize text-primary md:text-left md:text-xl"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-center text-primary md:text-left md:text-lg"
                >
                  {card.description}
                </motion.p>

                {/* <motion.button
                  layoutId={`button-${card.title}-${id}`}
                  className="mx-auto mt-4 rounded-full bg-accent px-4 py-2 text-sm font-bold text-foreground hover:bg-accent hover:text-white md:mt-0"
                >
                  {card.ctaText}
                </motion.button> */}
              </motion.div>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    // description: "",
    description: "R$ 210,00",
    title: "Consulta mensal",
    src: "/home.jpg",
    ctaText: "Saiba mais",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Avaliação completa, avaliação de exames, suplementação de vitaminas e
          fitoterápicos se necessário, plano alimentar, ebook de receitas e
          outros materiais e apoio via whatsapp 1 vez no mês.
          {/* <br />
          <br />
          R$ 210,00 */}
        </p>
      );
    },
  },
  {
    // description: "",
    description: "R$ 630,00",
    title: "Consulta trimestral",
    src: "/home.jpg",
    ctaText: "Saiba mais",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          3 consultas + avaliação completa, avaliação de exames, suplementação
          de vitaminas e fitoterápicos se necessário, plano alimentar, ebook de
          receitas e outros materiais e apoio via whatsapp quinzenal.‌
          {/* <br />
          <br />
          R$ 630,00 */}
        </p>
      );
    },
  },

  {
    // description: "",
    description: "‌R$ 115,50",
    title: "Orientação nutricional",
    src: "/home.jpg",
    ctaText: "Saiba mais",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Investir em sua saúde é o melhor presente que você pode se dar!
          {/* <br />
          <br />
          ‌R$ 115,50{" "} */}
        </p>
      );
    },
  },
  {
    // description: "",
    description: "R$ 262,50",
    title: "Plano alimentar semanal",
    src: "/home.jpg",
    ctaText: "Saiba mais",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          (emagrecimento, ganho de massa, diabetes, hipertensão, colesterol
          alto, constipação e etc). Contendo 3 opções de refeições por cada
          refeição.
          {/* <br />
          <br />
          R$ 262,50 */}
        </p>
      );
    },
  },
  {
    // description: "",
    description: "‌‌‌‌‌R$ 105,00",
    title: "Bioimpedância",
    src: "/home.jpg",
    ctaText: "Saiba mais",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          exame realizado em consultório, com balança de última geração
          (MEDIANA) com avaliação de parâmetros antropométricos, percentual de
          gordura, massa magra e outros.
          {/* <br />
          <br />
          ‌‌‌‌‌R$ 105,00 */}
        </p>
      );
    },
  },
  {
    // description: "",
    description: "‌‌‌‌‌R$ 315,00",
    title: "Lista de compras",
    src: "/home.jpg",
    ctaText: "Saiba mais",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Diga adeus às listas perdidas e às compras por impulso. Esse serviço
          te ajuda a manter uma alimentação saudável e balanceada.
          {/* <br />
          <br />
          ‌‌‌‌‌R$ 315,00 */}
        </p>
      );
    },
  },
  {
    // description: "",
    description: "‌‌‌‌‌R$ 50,00",
    title: "Consulta social",
    src: "/home.jpg",
    ctaText: "Saiba mais",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Ofereço atendimento nutricional com valor reduzido para tornar o
          serviço acessível a pessoas em situação de vulnerabilidade econômica.
          Essa iniciativa busca promover a saúde e a qualidade de vida,
          fornecendo orientações para prevenir e tratar condições como
          obesidade, diabetes e hipertensão. O valor social cobre os custos
          mínimos, mantendo a qualidade do atendimento e garantindo um cuidado
          ético e inclusivo para a comunidade.
          {/* <br />
          <br />
          ‌‌‌‌‌R$ 50,00 */}
        </p>
      );
    },
  },
];
