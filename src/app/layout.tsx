import type { Metadata } from "next";
import { Work_Sans, Inter } from "next/font/google";
import "./globals.css";
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
        {children}
      </body>
    </html>
  );
}
