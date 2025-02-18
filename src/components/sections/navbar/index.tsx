"use client";
import { Logo } from "@/widgets";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        // isScrolled ? "bg-foreground py-0" : "bg-transparent py-8"
        isScrolled ? "bg-primary" : "bg-accent"
      }`}
    >
      <div className="container mx-auto px-6 py-3 md:flex md:items-center md:justify-between md:p-2">
        <div className="flex items-center justify-between">
          <div className="logo">
            <Logo
              width={40}
              height={40}
              fill="white"
              className={`${
                isScrolled ? "h-12 w-12" : "h-32 w-32"
              } transition-all ease-linear`}
            />
          </div>

          <button
            className="navTrigger block cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            <i
              className={`block w-8 h-1 bg-white rounded mb-1 transition-transform ${
                isMenuOpen ? "transform rotate-45 translate-y-2" : ""
              }`}
            ></i>
            <i
              className={`block w-8 h-1 bg-white rounded mb-1 transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></i>
            <i
              className={`block w-8 h-1 bg-white rounded transition-transform ${
                isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            ></i>
          </button>
        </div>

        <div
          className={`main_list ${isMenuOpen ? "block" : "hidden"} md:block`}
        >
          <ul className="mt-10 flex h-screen flex-col items-end md:mt-0 md:h-auto md:flex-row md:space-x-8">
            <li className="py-4">
              <Link
                href="#home"
                className="text-3xl text-foreground hover:text-green-400 md:text-xl"
              >
                Inicio
              </Link>
            </li>
            <li className="py-4">
              <Link
                href="#about"
                className="text-3xl text-foreground hover:text-green-400 md:text-xl"
              >
                Quem sou
              </Link>
            </li>
            <li className="py-4">
              <Link
                href="#plans"
                className="text-3xl text-foreground hover:text-green-400 md:text-xl"
              >
                Consultas
              </Link>
            </li>
            <li className="py-4">
              <Link
                href="#"
                className="text-3xl text-foreground hover:text-green-400 md:text-xl"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
