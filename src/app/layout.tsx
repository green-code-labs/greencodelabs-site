import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const barlow = Barlow({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Green Code",
  description: "Transformamos Ideias em Soluções Digitais Inovadoras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} flex flex-col justify-between h-screen`}
      >
        <div>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
