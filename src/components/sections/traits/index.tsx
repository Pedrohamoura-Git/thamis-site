import { ProfessionalHat, Apple, Puzzle } from "@/widgets";
import React from "react";

export const Traits = () => {
  const list = [
    {
      icon: <Apple className="h-12 w-12" />,
      title: "Dietas saudáveis",
    },
    {
      icon: <ProfessionalHat className="h-12 w-12" />,
      title: "Profissional Qualificada",
    },
    {
      icon: <Puzzle className="h-12 w-12" />,
      title: "Consultas personalizadas",
    },
  ];

  return (
    <section className="h-full w-full bg-accent">
      <ul className="m-auto p-4 md:flex md:h-[15vh] md:justify-around lg:max-w-screen-lg">
        {list.map(({ icon, title }, index) => (
          <li
            key={title + "-" + index}
            className="flex flex-col items-center justify-center py-6"
          >
            {icon}

            <h4 className="mt-4">{title}</h4>
          </li>
        ))}
      </ul>
    </section>
  );
};
