"use client"

import { Button } from "@/components/ui/button"
import { HeaderMainBackground } from "@/components/HeaderMainBackground"
import { useLanguage } from "@/components/LanguageProvider"
import Link from "next/link"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a] overflow-hidden">

      <HeaderMainBackground
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button size="lg" className="bg-[#92d81e] hover:bg-[#7bc142] text-black font-semibold px-8 py-4 text-lg">
                {t("hero.cta")}
              </Button>
            </Link>
            <Link href="/sobre-nos">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent px-8 py-4 text-lg"
              >
                {t("hero.learnMore")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
