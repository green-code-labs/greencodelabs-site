"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"

const processSteps = {
  pt: {
    title: "Nosso Processo",
    subtitle: "Uma metodologia comprovada para entregar resultados excepcionais",
    steps: [
      {
        number: "01",
        title: "Descoberta e Planejamento",
        description:
          "Entendemos profundamente seu negócio, objetivos e desafios para criar uma estratégia personalizada.",
        details: [
          "Análise completa do seu negócio e mercado",
          "Definição de objetivos e KPIs",
          "Pesquisa de concorrência e benchmarking",
          "Criação do roadmap do projeto",
        ],
        icon: "/assets/icons/agil1.svg",
      },
      {
        number: "02",
        title: "Design e Prototipagem",
        description:
          "Criamos wireframes, protótipos e designs que refletem sua marca e proporcionam a melhor experiência do usuário.",
        details: [
          "Wireframes e arquitetura da informação",
          "Design system e identidade visual",
          "Protótipos interativos",
          "Testes de usabilidade",
        ],
        icon: "/assets/icons/agil2.svg",
      },
      {
        number: "03",
        title: "Desenvolvimento",
        description:
          "Transformamos o design em realidade usando as melhores tecnologias e práticas de desenvolvimento.",
        details: [
          "Desenvolvimento ágil com entregas incrementais",
          "Código limpo e documentado",
          "Integração com APIs e sistemas existentes",
          "Otimização de performance",
        ],
        icon: "/assets/icons/agil3.svg",
      },
      {
        number: "04",
        title: "Testes e Otimização",
        description:
          "Realizamos testes rigorosos para garantir qualidade, performance e segurança antes do lançamento.",
        details: [
          "Testes funcionais e de integração",
          "Testes de performance e carga",
          "Auditoria de segurança",
          "Otimização para SEO e acessibilidade",
        ],
        icon: "/assets/icons/test1.svg",
      },
      {
        number: "05",
        title: "Lançamento e Suporte",
        description: "Fazemos o deploy cuidadoso e oferecemos suporte contínuo para garantir o sucesso do seu projeto.",
        details: [
          "Deploy em ambiente de produção",
          "Monitoramento e analytics",
          "Treinamento da equipe",
          "Suporte técnico e manutenção",
        ],
        icon: "/assets/icons/tool.svg",
      },
    ],
  },
  en: {
    title: "Our Process",
    subtitle: "A proven methodology to deliver exceptional results",
    steps: [
      {
        number: "01",
        title: "Discovery and Planning",
        description: "We deeply understand your business, goals and challenges to create a personalized strategy.",
        details: [
          "Complete analysis of your business and market",
          "Definition of objectives and KPIs",
          "Competition research and benchmarking",
          "Project roadmap creation",
        ],
        icon: "/assets/icons/agil1.svg",
      },
      {
        number: "02",
        title: "Design and Prototyping",
        description:
          "We create wireframes, prototypes and designs that reflect your brand and provide the best user experience.",
        details: [
          "Wireframes and information architecture",
          "Design system and visual identity",
          "Interactive prototypes",
          "Usability testing",
        ],
        icon: "/assets/icons/agil2.svg",
      },
      {
        number: "03",
        title: "Development",
        description: "We transform design into reality using the best technologies and development practices.",
        details: [
          "Agile development with incremental deliveries",
          "Clean and documented code",
          "Integration with APIs and existing systems",
          "Performance optimization",
        ],
        icon: "/assets/icons/agil3.svg",
      },
      {
        number: "04",
        title: "Testing and Optimization",
        description: "We conduct rigorous testing to ensure quality, performance and security before launch.",
        details: [
          "Functional and integration testing",
          "Performance and load testing",
          "Security audit",
          "SEO and accessibility optimization",
        ],
        icon: "/assets/icons/test1.svg",
      },
      {
        number: "05",
        title: "Launch and Support",
        description: "We carefully deploy and offer continuous support to ensure your project's success.",
        details: [
          "Production environment deployment",
          "Monitoring and analytics",
          "Team training",
          "Technical support and maintenance",
        ],
        icon: "/assets/icons/tool.svg",
      },
    ],
  },
}

export default function ProcessPage() {
  const { language } = useLanguage()
  const content = processSteps[language as keyof typeof processSteps] || processSteps.pt

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1e38] via-[#2a2a4a] to-[#1e1e38]">
      <Header />

      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">{content.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{content.subtitle}</p>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {content.steps.map((step, index) => (
                <div key={index} className="relative">
                  {index < content.steps.length - 1 && (
                    <div className="hidden lg:block absolute left-1/2 top-full w-px h-12 bg-gradient-to-b from-[#92d81e] to-transparent transform -translate-x-1/2 z-10" />
                  )}

                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="order-2 lg:order-1">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-[#92d81e] rounded-full flex items-center justify-center text-black font-bold text-lg mr-4">
                              {step.number}
                            </div>
                            <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                          </div>
                          <p className="text-gray-300 text-lg mb-6 leading-relaxed">{step.description}</p>
                          <ul className="space-y-3">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-[#92d81e] mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center">
                          <div className="w-32 h-32 bg-[#92d81e]/10 rounded-full flex items-center justify-center">
                            <img src={step.icon || "/placeholder.svg"} alt={step.title} className="w-16 h-16" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              {language === "en" ? "Ready to Start Your Journey?" : "Pronto para Começar sua Jornada?"}
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              {language === "en"
                ? "Let's discuss your project and create something amazing together"
                : "Vamos conversar sobre seu projeto e criar algo incrível juntos"}
            </p>
            <Button asChild size="lg" className="bg-[#92d81e] hover:bg-[#7bc01a] text-black">
              <Link href="/contato">{language === "en" ? "Start Your Project" : "Iniciar Seu Projeto"}</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
