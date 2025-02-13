import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { CalendarCheck2 } from "lucide-react";

export const Cta = ({ className }: { className: String }) => {
  return (
    <div
      id="cta"
      className={cn(
        "card-background mx-auto w-[90%] rounded-[50px] bg-muted px-8 py-12 md:flex md:items-center md:justify-around md:gap-10 md:p-12 lg:max-w-screen-lg",
        className
      )}
    >
      <div className="md:max-w-[21rem] lg:max-w-xl">
        <h3 className="text-3xl/10 font-bold lg:text-4xl/normal">
          Você merece se sentir bem com você mesmo e ter autonomia alimentar.
        </h3>

        <p className="my-5 md:mt-7 md:text-xl">
          Atendimento online em todo Brasil
        </p>
      </div>

      <Button
        className="bg-btn-custom animate-pulse-custom mt-4 w-48 lg:p-6"
        variant="accent-foreground"
        size="lg"
      >
        <CalendarCheck2 size={64} />
        <span className="ml-1">Agendar consulta</span>
      </Button>
    </div>
  );
};
