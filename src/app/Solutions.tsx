"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/LanguageProvider"

export function Solutions() {
  const { t } = useLanguage()

  const solutions = [
    {
      title: t("solutions.web.title"),
      description: t("solutions.web.description"),
      icon: "🌐",
      features: ["Sites Responsivos", "E-commerce", "Sistemas Web", "Landing Pages"],
    },
    {
      title: t("solutions.mobile.title"),
      description: t("solutions.mobile.description"),
      icon: "📱",
      features: ["Apps Nativos", "Apps Híbridos", "UI/UX Design", "Publicação nas Stores"],
    },
    {
      title: t("solutions.custom.title"),
      description: t("solutions.custom.description"),
      icon: "⚙️",
      features: ["ERP/CRM", "APIs REST", "Integrações", "Automações"],
    },
    {
      title: t("solutions.ecommerce.title"),
      description: t("solutions.ecommerce.description"),
      icon: "🛒",
      features: ["Lojas Online", "Pagamentos", "Gestão de Estoque", "Analytics"],
    },
    {
      title: t("solutions.api.title"),
      description: t("solutions.api.description"),
      icon: "🔗",
      features: ["REST APIs", "GraphQL", "Webhooks", "Documentação"],
    },
    {
      title: t("solutions.cloud.title"),
      description: t("solutions.cloud.description"),
      icon: "☁️",
      features: ["AWS", "Google Cloud", "Azure", "DevOps"],
    },
    {
      title: t("solutions.consulting.title"),
      description: t("solutions.consulting.description"),
      icon: "💡",
      features: ["Arquitetura", "Code Review", "Performance", "Segurança"],
    },
    {
      title: t("solutions.maintenance.title"),
      description: t("solutions.maintenance.description"),
      icon: "🔧",
      features: ["Suporte 24/7", "Atualizações", "Monitoramento", "Backup"],
    },
  ]

  return (
    <section className="py-20 bg-[#0f0f23]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("solutions.title")}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("solutions.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-[#121225] via-[#1a1a2e] to-[#121225] border-gray-800 hover:border-[#92d81e] transition-all duration-300 group"
            >
              <CardHeader>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <CardTitle className="text-white text-xl">{solution.title}</CardTitle>
                <CardDescription className="text-gray-300">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature, featureIndex) => (
                    <Badge
                      key={featureIndex}
                      variant="secondary"
                      className="bg-[#92d81e]/10 text-[#92d81e] border-[#92d81e]/20"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
