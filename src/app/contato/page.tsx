"use client"

import { Contact } from "@/components/Contact"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useLanguage } from "@/components/LanguageProvider"

export default function ContatoPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-[#0f0f23]">
      <Header />

      <div className="pt-20">
        <Contact />
      </div>

      <Footer />
    </div>
  )
}
