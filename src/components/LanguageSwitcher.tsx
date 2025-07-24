"use client"

import { useLanguage } from "./LanguageProvider"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === "pt" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("pt")}
        className={`text-xs ${
          language === "pt"
            ? "bg-[#92d81e] text-black hover:bg-[#7bc142]"
            : "text-gray-300 hover:text-white hover:bg-gray-800"
        }`}
      >
        PT
      </Button>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={`text-xs ${
          language === "en"
            ? "bg-[#92d81e] text-black hover:bg-[#7bc142]"
            : "text-gray-300 hover:text-white hover:bg-gray-800"
        }`}
      >
        EN
      </Button>
    </div>
  )
}
