import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/LanguageProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Green Code - Software House",
  description: "Transformamos suas ideias em soluções digitais inovadoras",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
