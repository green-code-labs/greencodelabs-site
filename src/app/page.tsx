"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Hero } from "./Hero"
import { Solutions } from "./Solutions"
import { Chosen } from "./Chosen"
import { FAQ } from "./FAQ"
import { Contact } from "@/components/Contact"
import { LanguageProvider } from "@/components/LanguageProvider"

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black">
        <Header />
        <Hero />
        <Solutions />
        <Chosen />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}
