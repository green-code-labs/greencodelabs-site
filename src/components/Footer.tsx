"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react"
import { useLanguage } from "./LanguageProvider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10">
                <img
                  src="/assets/dragon-logo.png"
                  alt="Green Code Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="text-white">
                <div className="font-bold text-lg leading-none">Green</div>
                <div className="font-bold text-lg leading-none">Code</div>
              </div>
            </div>
            <p className="text-gray-400">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#92d81e] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#92d81e] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#92d81e] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.webDev")}
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.mobileApps")}
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.customSystems")}
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.techConsulting")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nos" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/processos" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.processes")}
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t("footer.contact")}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#92d81e]" />
                <span className="text-gray-400">contato@greencode.dev</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#92d81e]" />
                <span className="text-gray-400">+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#92d81e]" />
                <span className="text-gray-400">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 Green Code. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
