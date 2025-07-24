"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/LanguageProvider"

export function Chosen() {
  const { t } = useLanguage()

  const reasons = [
    {
      title: t("chosen.team.title"),
      description: t("chosen.team.description"),
      icon: "👥",
    },
    {
      title: t("chosen.quality.title"),
      description: t("chosen.quality.description"),
      icon: "✨",
    },
    {
      title: t("chosen.delivery.title"),
      description: t("chosen.delivery.description"),
      icon: "⚡",
    },
    {
      title: t("chosen.support.title"),
      description: t("chosen.support.description"),
      icon: "🛠️",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("chosen.title")}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("chosen.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-[#121225] via-[#1a1a2e] to-[#121225] border-gray-800 hover:border-[#92d81e] transition-all duration-300 group text-center"
            >
              <CardHeader>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <CardTitle className="text-white text-xl">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{reason.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
