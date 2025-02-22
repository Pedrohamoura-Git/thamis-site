"use client";
import { cn } from "@/lib/utils";
import { Logo } from "@/widgets";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navList = [
    { title: "Inicio", href: "#home" },
    { title: "Sobre mim", href: "#about" },
    { title: "Consultas", href: "#plans" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-400 ease-in-out ${
        isScrolled ? "bg-foreground" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3 md:flex md:items-center md:justify-between md:p-2 lg:px-16">
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
                  : "h-20 w-20 md:h-24 lg:h-28 md:w-24 lg:w-2h-28"
              )}
            />
          </Link>

          <button
            className="navTrigger block cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            <i
              className={cn(
                `block w-8 h-1 rounded mb-1 transition-transform`,
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
          className={cn(`main_list md:block`, isMenuOpen ? "block" : "hidden")}
        >
          <ul className="mt-10 flex h-screen flex-col items-end md:mt-0 md:h-auto md:flex-row md:space-x-8">
            {navList.map(({ title, href }, index) => (
              <li className="py-4" key={title + "-" + index}>
                <Link
                  href={href}
                  className={cn(
                    `text-xl md:text-lg lg:text-xl`,
                    isScrolled
                      ? "text-primary hover:text-green-400"
                      : "text-foreground"
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
