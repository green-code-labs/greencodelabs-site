"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { useLanguage } from "./LanguageProvider"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/assets/dragon-logo.png"
                alt="Green Code Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="text-white">
              <div className="font-bold text-lg leading-none">Green</div>
              <div className="font-bold text-lg leading-none">Code</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              {t("nav.home")}
            </Link>
            <Link href="/servicos" className="text-gray-300 hover:text-white transition-colors">
              {t("nav.services")}
            </Link>
            <Link href="/processos" className="text-gray-300 hover:text-white transition-colors">
              {t("nav.processes")}
            </Link>
            <Link href="/sobre-nos" className="text-gray-300 hover:text-white transition-colors">
              {t("nav.about")}
            </Link>
            <Link href="/contato" className="text-gray-300 hover:text-white transition-colors">
              {t("nav.contact")}
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link href="/contato">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
                {t("header.freeQuote")}
              </Button>
            </Link>
            <Link href="/contato">
              <Button className="bg-[#92d81e] hover:bg-[#7bc142] text-black">{t("header.talkToUs")}</Button>
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/servicos"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.services")}
              </Link>
              <Link
                href="/processos"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.processes")}
              </Link>
              <Link
                href="/sobre-nos"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/contato"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>
              <div className="flex items-center justify-between pt-4">
                <LanguageSwitcher />
                <div className="flex space-x-2">
                  <Link href="/contato">
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 bg-transparent">
                      {t("header.freeQuote")}
                    </Button>
                  </Link>
                  <Link href="/contato">
                    <Button size="sm" className="bg-[#92d81e] hover:bg-[#7bc142] text-black">
                      {t("header.talkToUs")}
                    </Button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}