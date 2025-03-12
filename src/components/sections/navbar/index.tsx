"use client";
import { useOutsideClick } from "@/hooks";
import { cn } from "@/lib/utils";
import { Instagram, Logo } from "@/widgets";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(false);
  const ref = useRef<HTMLDivElement>(null);
  const navList = [
    { content: "Inicio", href: "#home" },
    { content: "Sobre mim", href: "#about" },
    { content: "Consultas", href: "#plans" },
    {
      content: (
        <Instagram
          className="mr-2"
          width={30}
          height={30}
          fill={isScrolled ? "primary" : "background"}
        />
      ),
      href: "https://www.instagram.com/thamismmoura",
      blank: true,
    },

    // <Link
    //   className="mt-1 flex items-center"
    //   href="https://www.instagram.com/thamismmoura"
    //   target="_blank"
    // >
    //   <Instagram
    //     className="mr-2"
    //     width={30}
    //     height={30}
    //     fill={isScrolled ? "primary" : "background"}
    //   />
    // </Link>,
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

          <div className="flex items-center gap-2 md:hidden">
            <Link
              className="mt-1 flex items-center"
              href="https://www.instagram.com/thamismmoura"
              target="_blank"
            >
              <Instagram
                className="mr-2"
                width={30}
                height={30}
                fill={isScrolled ? "primary" : "background"}
              />
            </Link>

            <button
              className="navTrigger block cursor-pointer"
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
            {navList.map(({ content, href, blank }, index) => (
              <li className="py-4" key={"list-item-" + index}>
                <Link
                  href={href}
                  className={cn(
                    `text-xl md:text-lg lg:text-xl hover:text-accent-variant`,
                    isScrolled ? "text-primary" : "text-foreground"
                  )}
                  target={blank ? "_blank" : "_self"}
                >
                  {content}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
