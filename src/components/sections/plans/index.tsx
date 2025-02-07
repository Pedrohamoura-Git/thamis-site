"use client";

import { Tabs } from "@/components/ui";
import Image from "next/image";

function TabsDemo() {
  const tabs = [
    {
      title: "Consulta mensal",
      value: "monthly-consultation",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Consulta mensal</p>
          <DummyContent imgSrc="/1.png" />
        </div>
      ),
    },
    {
      title: "Consulta trimestral",
      value: "quarterly-consultation",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Consulta trimestral</p>
          <DummyContent imgSrc="/2.png" />
        </div>
      ),
    },
    {
      title: "Orientação nutricional",
      value: "nutricional-guidance",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Orientação nutricional</p>
          <DummyContent imgSrc="/3.png" />
        </div>
      ),
    },
    {
      title: "Plano alimentar semanal",
      value: "weekly-meal-plan",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Plano alimentar semanal</p>
          <DummyContent imgSrc="/4.png" />
        </div>
      ),
    },
    {
      title: "Bioimpedância",
      value: "Bioimpedance",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Bioimpedância</p>
          <DummyContent imgSrc="/5.png" />
        </div>
      ),
    },
    {
      title: "Lista de compras",
      value: "shopping-list",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Lista de compras</p>
          <DummyContent imgSrc="/5.png" />
        </div>
      ),
    },
    {
      title: "Consulta social",
      value: "social-consultation",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Consulta social</p>
          <DummyContent imgSrc="/5.png" />
        </div>
      ),
    },
  ];

  return (
    <div className="b relative mx-auto my-40 flex h-[20rem] w-full max-w-5xl flex-col items-start justify-start [perspective:1000px] md:h-[40rem]">
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
    <div>
      {/* <Tabs /> */}
      <TabsDemo />
    </div>
  );
};
