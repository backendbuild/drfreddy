import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import '@radix-ui/themes/styles.css';
import Head from "@/landing/head/head"
import Bottom from "@/landing/bottom/bottom"

const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "PUSDOKKES POLRI FINAL",
  description: "Kombes Pol dr. Freddy Worang",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
        <Head />
        <div className="flex-grow py-auto placeholder:group-first:after:">
          {children}
        </div>
        <Bottom />
        </div>
        </body>
    </html>
  );
}
