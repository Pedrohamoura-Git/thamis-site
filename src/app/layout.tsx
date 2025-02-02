import type { Metadata } from "next";
import { Geist, Geist_Mono, Prompt, Noto_Sans } from "next/font/google";
import "./globals.css";
import { FloatingNavbar } from "@/components/FloatingNavbar";
import { Logo } from "../widgets/logo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-prompt",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
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
        className={`${geistSans.variable} ${geistMono.variable} ${prompt.variable} ${notoSans.variable} antialiased`}
      >
        <FloatingNavbar
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
              link: "/about",
            },
            {
              name: "Contact",
              link: "/contact",
            },
          ]}
          isVisibleAtTop
          className="max-w-11/12 w-11/12 top-4 md:top-10 flex gap-6 justify-around"
        />
        {children}
      </body>
    </html>
  );
}
