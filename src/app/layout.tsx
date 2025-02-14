import type { Metadata } from "next";
import { Work_Sans, Noto_Sans, Inter } from "next/font/google";
import "./globals.css";
import { FloatingNavbar } from "@/components";
import { Logo } from "../widgets/logo";
import { Navbar } from "@/components";

const workdSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Home - Nutricionista | Thamis Moura",
  description: "Site oficial da Nutricionista Thamis Maciel Moura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${workdSans.className} antialiased scroll-smooth bg-foreground`}
      >
        <Navbar />

        {/* <FloatingNavbar
          navItems={[
            {
              name: "",
              link: "/",
              icon: <Logo width={40} height={40} />,
            },
            {
              name: "Home",
              link: "/",
            },
            {
              name: "About",
              link: "#about",
            },
            {
              name: "Contact",
              link: "/contact",
            },
          ]}
          isVisibleAtTop
          className="top-4 flex w-11/12 max-w-md justify-around gap-6 md:top-10"
        /> */}
        {children}
      </body>
    </html>
  );
}
