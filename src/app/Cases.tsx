"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"

export function Cases() {
  const { t } = useLanguage()

  const cases = [
    {
      title: "E-commerce Fashion",
      description: "Plataforma completa de vendas online com mais de 10.000 produtos",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "App de Delivery",
      description: "Aplicativo mobile para delivery com geolocalização em tempo real",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React Native", "Firebase", "Google Maps"],
    },
    {
      title: "Sistema ERP",
      description: "Sistema de gestão empresarial para controle de estoque e vendas",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Vue.js", "Laravel", "MySQL"],
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nossos Cases</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 hover:border-[#92d81e]/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="aspect-video bg-gray-800 relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-[#92d81e]/10 text-[#92d81e] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#92d81e] text-[#92d81e] hover:bg-[#92d81e] hover:text-black bg-transparent"
                >
                  Ver Projeto
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
