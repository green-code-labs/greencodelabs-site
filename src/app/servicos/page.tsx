"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Code, Smartphone, Globe, Zap, Shield, Users } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"
import { Contact } from "@/components/Contact"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const services = [
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Desenvolvimento Web",
    titleEn: "Web Development",
    description: "Sites e aplicações web modernas, responsivas e otimizadas para performance máxima.",
    descriptionEn: "Modern, responsive websites and web applications optimized for maximum performance.",
    features: [
      "Sites Institucionais",
      "Aplicações Web (SPA/PWA)",
      "Sistemas de Gestão",
      "Portais Corporativos",
      "Landing Pages",
      "Blogs e CMS",
    ],
    featuresEn: [
      "Corporate Websites",
      "Web Applications (SPA/PWA)",
      "Management Systems",
      "Corporate Portals",
      "Landing Pages",
      "Blogs and CMS",
    ],
    technologies: ["React", "Next.js", "Vue.js", "Node.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Aplicativos Mobile",
    titleEn: "Mobile Apps",
    description: "Apps nativos e híbridos para iOS e Android com experiência excepcional do usuário.",
    descriptionEn: "Native and hybrid apps for iOS and Android with exceptional user experience.",
    features: [
      "Apps Nativos (iOS/Android)",
      "Apps Híbridos",
      "Progressive Web Apps",
      "UI/UX Design",
      "Publicação nas Stores",
      "Manutenção e Updates",
    ],
    featuresEn: [
      "Native Apps (iOS/Android)",
      "Hybrid Apps",
      "Progressive Web Apps",
      "UI/UX Design",
      "Store Publishing",
      "Maintenance and Updates",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase"],
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "Sistemas Personalizados",
    titleEn: "Custom Systems",
    description: "Soluções sob medida para automatizar e otimizar seus processos de negócio.",
    descriptionEn: "Tailor-made solutions to automate and optimize your business processes.",
    features: [
      "ERPs Personalizados",
      "CRMs Sob Medida",
      "APIs e Integrações",
      "Automação de Processos",
      "Dashboards Analytics",
      "Sistemas de Workflow",
    ],
    featuresEn: [
      "Custom ERPs",
      "Tailor-made CRMs",
      "APIs and Integrations",
      "Process Automation",
      "Analytics Dashboards",
      "Workflow Systems",
    ],
    technologies: ["Python", "Django", "FastAPI", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "E-commerce",
    titleEn: "E-commerce",
    description: "Lojas virtuais completas com pagamento, estoque e gestão integrada.",
    descriptionEn: "Complete online stores with payment, inventory and integrated management.",
    features: [
      "Lojas Virtuais Completas",
      "Integração de Pagamentos",
      "Gestão de Estoque",
      "Painel Administrativo",
      "SEO e Marketing",
      "Analytics e Relatórios",
    ],
    featuresEn: [
      "Complete Online Stores",
      "Payment Integration",
      "Inventory Management",
      "Admin Panel",
      "SEO and Marketing",
      "Analytics and Reports",
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "Google Analytics"],
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Consultoria Digital",
    titleEn: "Digital Consulting",
    description: "Estratégias digitais para acelerar o crescimento e otimização do seu negócio.",
    descriptionEn: "Digital strategies to accelerate growth and optimization of your business.",
    features: [
      "Auditoria Técnica",
      "Arquitetura de Software",
      "Otimização de Performance",
      "Segurança Digital",
      "Estratégia de Tecnologia",
      "Treinamento de Equipes",
    ],
    featuresEn: [
      "Technical Audit",
      "Software Architecture",
      "Performance Optimization",
      "Digital Security",
      "Technology Strategy",
      "Team Training",
    ],
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Suporte & Manutenção",
    titleEn: "Support & Maintenance",
    description: "Suporte contínuo e manutenção para manter seus sistemas sempre atualizados.",
    descriptionEn: "Continuous support and maintenance to keep your systems always updated.",
    features: [
      "Suporte Técnico 24/7",
      "Manutenção Preventiva",
      "Updates e Patches",
      "Backup e Recuperação",
      "Monitoramento Contínuo",
      "Relatórios Mensais",
    ],
    featuresEn: [
      "24/7 Technical Support",
      "Preventive Maintenance",
      "Updates and Patches",
      "Backup and Recovery",
      "Continuous Monitoring",
      "Monthly Reports",
    ],
    technologies: ["Monitoring Tools", "Backup Solutions", "Security Updates", "Performance Optimization"],
  },
]

export default function ServicosPage() {
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const { language, t } = useLanguage()

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-[#0f0f23]">
      <Header />

      <section className="py-20 bg-gradient-to-br from-[#121225] via-[#1a1a2e] to-[#121225] mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("services.title")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("services.subtitle")}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1a1a2e] border border-[#2a2a4a] rounded-xl overflow-hidden hover:border-[#92d81e] transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#92d81e]/10 rounded-lg flex items-center justify-center text-[#92d81e]">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {language === "en" ? service.titleEn : service.title}
                      </h3>
                      <p className="text-[#92d81e] font-semibold">

                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {language === "en" ? service.descriptionEn : service.description}
                  </p>

                  <button
                    onClick={() => toggleService(index)}
                    className="flex items-center justify-between w-full text-left text-white font-medium hover:text-[#92d81e] transition-colors"
                  >
                    <span>{language === "en" ? "View details" : "Ver detalhes"}</span>
                    {expandedService === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {expandedService === index && (
                  <div className="px-8 pb-8 border-t border-[#2a2a4a]">
                    <div className="pt-6 space-y-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">
                          {language === "en" ? "What's included:" : "O que está incluído:"}
                        </h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {(language === "en" ? service.featuresEn : service.features).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-[#92d81e] rounded-full"></div>
                              <span className="text-sm text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-3">
                          {language === "en" ? "Technologies used:" : "Tecnologias utilizadas:"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-[#92d81e]/10 text-[#92d81e] rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <a
                          href="/contato"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[#92d81e] text-black rounded-lg hover:bg-[#7bc016] transition-colors font-semibold"
                        >
                          {language === "en" ? "Request Quote" : "Solicitar Orçamento"}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      <Footer />
    </div>
  )
}
