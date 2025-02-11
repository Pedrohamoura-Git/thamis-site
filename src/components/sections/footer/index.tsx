import { Button } from "@/components/ui";
import { Logo } from "@/widgets";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-20 flex w-full flex-col justify-start gap-7 bg-muted p-10 text-sm text-primary-foreground">
      <div className="flex items-center gap-5">
        <Logo width={80} height={80} fill="white" />

        <div className="flex flex-col items-center">
          <h5 className="font-black-mango-regular text-2xl md:text-3xl">
            Dra. Thamis Moura
          </h5>
          <h6 className="text-xs uppercase">nutricionista</h6>
          <h6 className="text-xs uppercase">CRNSP 66118</h6>
        </div>
      </div>

      <div>
        <h5 className="mb-2 text-base font-bold text-foreground">Navegue</h5>

        <ul>
          <li className="my-2">
            <Link href="/#hero">Inicio</Link>
          </li>
          <li className="my-2">
            <Link href="/#about">Quem sou</Link>
          </li>
          <li className="my-2">
            <Link href="/#plans">Consultas</Link>
          </li>
        </ul>
      </div>

      <div>
        <h5 className="mb-2 text-base font-bold text-foreground">Horários</h5>

        <p>Segunda a sexta: 08h-18h</p>
        <p>Sábado: 09h-12h</p>
      </div>

      <div>
        <h5 className="mb-2 text-base font-bold text-foreground">
          Atendimento online
        </h5>

        <p>Em todo lugar do Brasil</p>
      </div>

      <div>
        <h5 className="mb-2 text-base font-bold text-foreground">Contato</h5>

        <p>thamismoura@gmail.com</p>
      </div>

      <Button
        className="bg-btn-custom font-noto-sans animate-pulse-custom w-48 md:text-lg"
        variant="accent-foreground"
        size="lg"
      >
        Agendar sua consulta
      </Button>
    </footer>
  );
};
