"use client";
import { useOutsideClick } from "@/hooks";
import { cn } from "@/lib/utils";
import { Logo } from "@/widgets";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(false);
  const ref = useRef<HTMLDivElement>(null);
  const navList = [
    { title: "Inicio", href: "#home" },
    { title: "Sobre mim", href: "#about" },
    { title: "Consultas", href: "#plans" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useOutsideClick(ref, () => setIsMenuOpen(false));

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-400 ease-in-out",
        isMenuOpen ? " bg-muted-light" : "bg-transparent",
        isScrolled && "bg-foreground"
      )}
    >
      <div className="container mx-auto px-6 py-3 md:flex md:items-center md:justify-between md:px-12 md:py-0">
        <div className="flex items-center justify-between">
          <Link href="#home" className="logo">
            <Logo
              width={40}
              height={40}
              fill={isScrolled ? "primary" : "background"}
              className={cn(
                "transition-all ease-linear",
                isScrolled
                  ? "h-12 w-12 lg:h-16 lg:w-16"
                  : "h-16 w-16 md:h-20 lg:h-24 md:w-20 lg:w-24"
              )}
            />
          </Link>

          <button
            className="navTrigger block cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            <i
              className={cn(
                "block w-8 h-1 rounded mb-1 transition-transform",
                isMenuOpen ? "transform rotate-45 translate-y-2" : "",
                isScrolled ? "bg-primary" : "bg-background"
              )}
            ></i>
            <i
              className={cn(
                `block w-8 h-1 rounded mb-1 transition-opacity`,
                isMenuOpen ? "opacity-0" : "",
                isScrolled ? "bg-primary" : "bg-background"
              )}
            ></i>
            <i
              className={cn(
                `block w-8 h-1 rounded transition-transform`,
                isMenuOpen ? "transform -rotate-45 -translate-y-2" : "",
                isScrolled ? "bg-primary" : "bg-background"
              )}
            ></i>
          </button>
        </div>

        <div
          className={cn(`relative md:block`, isMenuOpen ? "block" : "hidden")}
          ref={ref}
        >
          <ul
            className={cn(
              "nav-links mt-10 flex flex-col pb-5 items-end md:mt-0 md:flex-row md:space-x-8 md:p-0",
              isMenuOpen ? "open" : ""
            )}
          >
            {navList.map(({ title, href }, index) => (
              <li className="py-4" key={title + "-" + index}>
                <Link
                  href={href}
                  className={cn(
                    `text-xl md:text-lg lg:text-xl hover:text-accent-variant`,
                    isScrolled ? "text-primary" : "text-foreground"
                  )}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
