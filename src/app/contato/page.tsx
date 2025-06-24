"use client"

import { Contact } from "@/components/Contact"
import { FAQ } from "../FAQ"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Contato() {
  const searchParams = useSearchParams()
  const [prefilledData, setPrefilledData] = useState({
    name: "",
    email: "",
    source: "",
  })

  useEffect(() => {
    const name = searchParams.get("name") || ""
    const email = searchParams.get("email") || ""
    const source = searchParams.get("source") || ""

    setPrefilledData({ name, email, source })
  }, [searchParams])

  return (
    <div className="container flex flex-col gap-5 lg:gap-10 !p-0 max-w-[1150px]">
      {prefilledData.source === "hero" && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-4">
          <p className="text-green-400 text-center">
            ✅ Obrigado pelo interesse! Complete as informações abaixo para receber seu orçamento personalizado.
          </p>
        </div>
      )}

      <Contact
        hasLogo={false}
        hasButton={false}
        hasBudget
        hasProjectSize
        title="Contate-nos"
        subtitle="Entre em contato conosco hoje e deixe-nos ajudá-lo com qualquer dúvida ou dúvida que você possa ter."
        prefilledName={prefilledData.name}
        prefilledEmail={prefilledData.email}
      />
      <FAQ />
    </div>
  )
}
