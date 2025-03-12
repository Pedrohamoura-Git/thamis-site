"use client";
import Image from "next/image";
import React, { JSX, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks";
import { Button } from "../../shadcn";

type ExpandableCardProps = {
  cardsContent: {
    description: string;
    title: string;
    src: string;
    ctaText: string;
    whatsAppMessage: string;
    content: () => JSX.Element;
  }[];
};

export const ExpandableCard = ({ cardsContent }: ExpandableCardProps) => {
  const [active, setActive] = useState<
    (typeof cardsContent)[number] | boolean | null
  >(null);
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
              className="flex h-fit w-11/12 max-w-[500px] flex-col overflow-hidden rounded-lg bg-foreground dark:bg-neutral-900 sm:rounded-3xl md:h-fit md:max-h-[90%]"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  quality={100}
                  width={500}
                  height={500}
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
                      className="font-bold capitalize text-neutral-700 dark:text-neutral-200 md:text-2xl"
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

                  <Button
                    variant="accent-foreground"
                    className="hover:animate-pulse-custom rounded-xl bg-accent-foreground px-3 py-3 text-sm font-bold text-foreground hover:bg-accent-foreground"
                    message={active.whatsAppMessage}
                    size="md"
                  >
                    Agendar consulta
                  </Button>
                </div>
                <div className="relative">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-64 flex-col items-start overflow-auto p-4 text-sm/6 text-primary [-ms-overflow-style:scroll] [-webkit-overflow-scrolling:touch] md:text-base"
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
      <ul className="mx-auto flex w-full list-inside list-disc flex-col gap-2 md:grid md:grid-cols-2 lg:max-w-4xl lg:pt-16 xl:max-w-5xl">
        {cardsContent.map((card) => (
          <motion.li
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="cursor-pointer rounded-xl hover:bg-foreground"
          >
            <motion.div className="group/bento row-span-1 flex h-40 w-full flex-row items-center justify-between rounded-xl border border-black/5 bg-foreground p-1 shadow-xl transition duration-200 dark:border-white/[0.2] dark:bg-black md:px-2">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={200}
                  height={200}
                  src={card.src}
                  alt={card.title}
                  className="h-36 w-40 rounded-lg object-cover object-top md:h-36 md:w-36"
                />
              </motion.div>

              <motion.div className="mx-auto flex flex-col justify-center transition duration-200 group-hover/bento:translate-x-2">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="max-w-52 text-center text-lg font-bold capitalize text-primary md:max-w-60 lg:text-xl"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-center text-primary md:text-lg"
                >
                  {card.description}
                </motion.p>
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
