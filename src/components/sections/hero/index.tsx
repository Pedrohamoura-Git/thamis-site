import Image from "next/image";
import { Button } from "@/components/ui";

export const Hero = () => {
  return (
    <section className="z-10 mb-5 flex w-full flex-col items-center md:max-h-[300px] md:flex-row md:overflow-hidden">
      <div className="glossy-effect-custom relative z-50 w-full overflow-hidden before:h-full before:w-[200%] md:h-full md:before:h-[200%] md:before:w-full">
        <Image
          // src="/home.jpg"
          src="/home-sm.jpg"
          height={400}
          width={192}
          alt=""
          className="z-10 h-full w-full"
        />

        <div className="absolute top-0 z-20 h-full">
          <div className="flex h-full flex-col items-start gap-14 p-5 text-center">
            {/* <header className="text-primary-foreground">
              <h1 className="font-black-mango-regular text-2xl md:text-3xl">
                Thamis Moura
              </h1>
              <h2>CRN3 66118</h2>
            </header> */}

            <h1 className="font-prompt w-96 text-left text-4xl text-foreground md:text-4xl">
              Sua jornada para uma vida mais saudável começa aqui!
            </h1>

            <Button
              className="bg-btn-custom font-noto-sans animate-pulse-custom md:w-48 md:text-lg"
              variant="accent-foreground"
              size="lg"
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
