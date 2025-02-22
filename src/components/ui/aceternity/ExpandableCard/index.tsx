"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks";

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
      <ul className="w-full gap-4 lg:max-w-4xl">
        {cards.map((card) => (
          <motion.li
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="mb-3 flex cursor-pointer flex-col items-center justify-between rounded-xl p-4 hover:bg-foreground md:flex-row"
          >
            <div className="flex w-full flex-row items-center justify-around gap-2">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-20 w-20 rounded-lg object-cover object-top md:h-14 md:w-14"
                />
              </motion.div>

              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="max-w-48 text-center text-lg font-bold capitalize text-primary md:text-left md:text-xl"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-center text-primary md:text-left md:text-lg"
                >
                  {card.description}
                </motion.p>
              </div>
              {/* <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="mt-4 rounded-full bg-accent px-4 py-2 text-sm font-bold text-foreground hover:bg-accent hover:text-white md:mt-0"
              >
                {card.ctaText}
              </motion.button> */}
            </div>
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
    description: "Investimento: R$ 210,00",
    title: "Consulta mensal",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
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
          Investimento: R$ 210,00 */}
        </p>
      );
    },
  },
  {
    // description: "",
    description: "Investimento: R$ 630,00",
    title: "Consulta trimestral",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
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
          Investimento: R$ 630,00 */}
        </p>
      );
    },
  },

  {
    // description: "",
    description: "‌Investimento: R$ 115,50",
    title: "Orientação nutricional",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Saiba mais",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Investir em sua saúde é o melhor presente que você pode se dar!
          {/* <br />
          <br />
          ‌Investimento: R$ 115,50{" "} */}
        </p>
      );
    },
  },
  {
    // description: "",
    description: "Investimento: R$ 262,50",
    title: "Plano alimentar semanal",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
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
          Investimento: R$ 262,50 */}
        </p>
      );
    },
  },
  {
    // description: "",
    description: "‌‌‌‌‌Investimento: R$105,00",
    title: "Bioimpedância",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
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
          ‌‌‌‌‌Investimento: R$105,00 */}
        </p>
      );
    },
  },
  {
    // description: "",
    description: "‌‌‌‌‌Investimento: R$315,00",
    title: "Lista de compras",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Saiba mais",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Diga adeus às listas perdidas e às compras por impulso. Esse serviço
          te ajuda a manter uma alimentação saudável e balanceada.
          {/* <br />
          <br />
          ‌‌‌‌‌Investimento: R$315,00 */}
        </p>
      );
    },
  },
  {
    // description: "",
    description: "‌‌‌‌‌Investimento: R$50,00",
    title: "Consulta social",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
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
          ‌‌‌‌‌Investimento: R$50,00 */}
        </p>
      );
    },
  },
];
