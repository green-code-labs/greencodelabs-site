"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "pt" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.services": "Serviços",
    "nav.processes": "Processos",
    "nav.about": "Sobre Nós",
    "nav.contact": "Contato",

    // Header
    "header.freeQuote": "Orçamento Grátis",
    "header.talkToUs": "Fale Conosco",

    // Hero
    "hero.title": "Transformamos suas ideias em soluções digitais inovadoras",
    "hero.subtitle":
      "Somos uma software house especializada em desenvolvimento web, mobile e soluções personalizadas para impulsionar seu negócio.",
    "hero.cta": "Começar Projeto",
    "hero.learnMore": "Saiba Mais",

    // Solutions
    "solutions.title": "Nossas Soluções",
    "solutions.subtitle":
      "Oferecemos uma gama completa de serviços de desenvolvimento para atender todas as suas necessidades digitais",
    "solutions.web.title": "Desenvolvimento Web",
    "solutions.web.description": "Sites e aplicações web responsivas, rápidas e otimizadas para SEO",
    "solutions.mobile.title": "Aplicativos Mobile",
    "solutions.mobile.description": "Apps nativos e híbridos para iOS e Android com performance excepcional",
    "solutions.custom.title": "Sistemas Personalizados",
    "solutions.custom.description": "Soluções sob medida para automatizar e otimizar seus processos de negócio",
    "solutions.ecommerce.title": "E-commerce",
    "solutions.ecommerce.description": "Lojas virtuais completas com integração de pagamentos e gestão de estoque",
    "solutions.api.title": "APIs e Integrações",
    "solutions.api.description": "Desenvolvimento de APIs REST e integrações com sistemas terceiros",
    "solutions.cloud.title": "Soluções em Nuvem",
    "solutions.cloud.description": "Deploy e hospedagem em AWS, Google Cloud e Azure com alta disponibilidade",
    "solutions.consulting.title": "Consultoria Tech",
    "solutions.consulting.description": "Análise técnica e estratégica para escolher as melhores tecnologias",
    "solutions.maintenance.title": "Manutenção e Suporte",
    "solutions.maintenance.description": "Suporte técnico 24/7 e manutenção preventiva de sistemas",

    // Chosen
    "chosen.title": "Por que nos escolher?",
    "chosen.subtitle": "Somos mais que uma software house, somos seu parceiro tecnológico",
    "chosen.team.title": "Equipe Especializada",
    "chosen.team.description": "Desenvolvedores experientes com as mais modernas tecnologias do mercado",
    "chosen.quality.title": "Qualidade Garantida",
    "chosen.quality.description": "Código limpo, testes automatizados e boas práticas de desenvolvimento",
    "chosen.delivery.title": "Entrega no Prazo",
    "chosen.delivery.description": "Metodologia ágil para garantir entregas pontuais e comunicação transparente",
    "chosen.support.title": "Suporte Completo",
    "chosen.support.description": "Acompanhamento pós-entrega e suporte técnico para manter seu projeto funcionando",

    // FAQ
    "faq.title": "Perguntas Frequentes",
    "faq.subtitle": "Tire suas dúvidas sobre nossos serviços e processo de desenvolvimento",
    "faq.q1": "Quanto tempo leva para desenvolver um projeto?",
    "faq.a1":
      "O tempo varia conforme a complexidade do projeto. Sites simples podem levar de 2-4 semanas, enquanto sistemas complexos podem levar de 2-6 meses. Fazemos uma análise detalhada e fornecemos um cronograma realista.",
    "faq.q2": "Vocês oferecem suporte após a entrega?",
    "faq.a2":
      "Sim! Oferecemos suporte técnico e manutenção pós-entrega. Temos planos de suporte mensal que incluem atualizações, correções de bugs e melhorias contínuas.",
    "faq.q3": "Quais tecnologias vocês utilizam?",
    "faq.a3":
      "Trabalhamos com as tecnologias mais modernas do mercado: React, Next.js, Node.js, Python, React Native, Flutter, AWS, Google Cloud, entre outras. Escolhemos a stack ideal para cada projeto.",
    "faq.q4": "Como funciona o processo de desenvolvimento?",
    "faq.a4":
      "Seguimos metodologia ágil com entregas incrementais. O processo inclui: análise de requisitos, prototipagem, desenvolvimento, testes, homologação e entrega. Mantemos comunicação constante durante todo o projeto.",
    "faq.q5": "Vocês desenvolvem aplicativos mobile?",
    "faq.a5":
      "Sim! Desenvolvemos apps nativos para iOS e Android, além de aplicações híbridas usando React Native e Flutter. Focamos em performance, usabilidade e design moderno.",
    "faq.q6": "Qual é o investimento para um projeto?",
    "faq.a6":
      "O investimento varia conforme o escopo e complexidade. Oferecemos orçamentos personalizados após análise detalhada dos requisitos. Entre em contato para uma consulta gratuita.",

    // Contact
    "contact.title": "Entre em Contato",
    "contact.subtitle": "Pronto para transformar sua ideia em realidade? Vamos conversar sobre seu projeto!",
    "contact.talkToUs": "Fale Conosco",
    "contact.description":
      "Estamos aqui para ajudar você a escolher a melhor solução para seu negócio. Entre em contato e receba uma consultoria gratuita.",
    "contact.email": "Email",
    "contact.phone": "Telefone",
    "contact.location": "Localização",

    // Contact Form
    "contact.form.title": "Solicite um Orçamento",
    "contact.form.name": "Seu nome",
    "contact.form.email": "Seu email",
    "contact.form.phone": "Seu telefone",
    "contact.form.company": "Empresa/Organização",
    "contact.form.message": "Conte-nos sobre seu projeto...",
    "contact.form.send": "Enviar Mensagem",
    "contact.form.services": "Serviços de Interesse",
    "contact.form.serviceOptions.web": "Desenvolvimento Web",
    "contact.form.serviceOptions.mobile": "Aplicativos Mobile",
    "contact.form.serviceOptions.ecommerce": "Loja Virtual (E-commerce)",
    "contact.form.serviceOptions.branding": "Identidade Visual & Design",
    "contact.form.serviceOptions.consulting": "Consultoria Técnica",
    "contact.form.serviceOptions.maintenance": "Manutenção e Suporte",
    "contact.form.projectSize": "Porte do Projeto",
    "contact.form.projectSizeOptions.small": "Pequeno (Site simples, Landing Page)",
    "contact.form.projectSizeOptions.medium": "Médio (E-commerce, Sistema Web)",
    "contact.form.projectSizeOptions.large": "Grande (Plataforma complexa, App Mobile)",
    "contact.form.projectSizeOptions.enterprise": "Corporativo (Sistema empresarial, Múltiplas integrações)",
    "contact.form.budget": "Investimento Estimado",
    "contact.form.timeline": "Prazo Desejado",
    "contact.form.timelineOptions.select": "Selecione o prazo desejado",
    "contact.form.timelineOptions.urgent": "Urgente (até 1 mês)",
    "contact.form.timelineOptions.oneToTwo": "1 a 2 meses",
    "contact.form.timelineOptions.threeToSix": "3 a 6 meses",
    "contact.form.timelineOptions.sixPlus": "Acima de 6 meses",
    "contact.form.additionalInfo": "Informações Complementares",
    "contact.form.hasExistingBrand": "Já possui identidade visual definida",
    "contact.form.needsHosting": "Necessita de hospedagem e domínio",
    "contact.form.needsMaintenance": "Deseja plano de manutenção contínua",
    "contact.form.messagePlaceholder":
      "Descreva seu projeto, objetivos, público-alvo e qualquer informação relevante que nos ajude a entender melhor suas necessidades...",
    "contact.form.submit": "Enviar Solicitação",
    "contact.form.sending": "Enviando...",
    "contact.form.successMessage": "Solicitação enviada com sucesso! Nossa equipe entrará em contato em até 24 horas.",
    "contact.form.errorMessage": "Ops! Algo deu errado. Tente novamente ou entre em contato diretamente conosco.",

    // Footer
    "footer.description": "Transformamos ideias em soluções digitais inovadoras. Sua parceira em tecnologia.",
    "footer.services": "Serviços",
    "footer.company": "Empresa",
    "footer.contact": "Contato",
    "footer.rights": "Todos os direitos reservados.",
    "footer.webDev": "Desenvolvimento Web",
    "footer.mobileApps": "Aplicativos Mobile",
    "footer.customSystems": "Sistemas Personalizados",
    "footer.techConsulting": "Consultoria Tech",
    "footer.aboutUs": "Sobre Nós",
    "footer.processes": "Nossos Processos",

    // Services
    "services.title": "Nossos Serviços",
    "services.subtitle":
      "Oferecemos um conjunto completo de soluções digitais para transformar sua ideia em realidade e impulsionar seu negócio.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.processes": "Processes",
    "nav.about": "About Us",
    "nav.contact": "Contact",

    // Header
    "header.freeQuote": "Free Quote",
    "header.talkToUs": "Talk to Us",

    // Hero
    "hero.title": "We transform your ideas into innovative digital solutions",
    "hero.subtitle":
      "We are a software house specialized in web, mobile development and custom solutions to boost your business.",
    "hero.cta": "Start Project",
    "hero.learnMore": "Learn More",

    // Solutions
    "solutions.title": "Our Solutions",
    "solutions.subtitle": "We offer a complete range of development services to meet all your digital needs",
    "solutions.web.title": "Web Development",
    "solutions.web.description": "Responsive, fast and SEO-optimized websites and web applications",
    "solutions.mobile.title": "Mobile Apps",
    "solutions.mobile.description": "Native and hybrid apps for iOS and Android with exceptional performance",
    "solutions.custom.title": "Custom Systems",
    "solutions.custom.description": "Tailor-made solutions to automate and optimize your business processes",
    "solutions.ecommerce.title": "E-commerce",
    "solutions.ecommerce.description": "Complete online stores with payment integration and inventory management",
    "solutions.api.title": "APIs & Integrations",
    "solutions.api.description": "REST API development and third-party system integrations",
    "solutions.cloud.title": "Cloud Solutions",
    "solutions.cloud.description": "Deploy and hosting on AWS, Google Cloud and Azure with high availability",
    "solutions.consulting.title": "Tech Consulting",
    "solutions.consulting.description": "Technical and strategic analysis to choose the best technologies",
    "solutions.maintenance.title": "Maintenance & Support",
    "solutions.maintenance.description": "24/7 technical support and preventive system maintenance",

    // Chosen
    "chosen.title": "Why choose us?",
    "chosen.subtitle": "We are more than a software house, we are your technology partner",
    "chosen.team.title": "Specialized Team",
    "chosen.team.description": "Experienced developers with the most modern technologies on the market",
    "chosen.quality.title": "Guaranteed Quality",
    "chosen.quality.description": "Clean code, automated testing and development best practices",
    "chosen.delivery.title": "On-Time Delivery",
    "chosen.delivery.description": "Agile methodology to ensure timely deliveries and transparent communication",
    "chosen.support.title": "Complete Support",
    "chosen.support.description": "Post-delivery follow-up and technical support to keep your project running",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Get answers about our services and development process",
    "faq.q1": "How long does it take to develop a project?",
    "faq.a1":
      "Time varies according to project complexity. Simple websites can take 2-4 weeks, while complex systems can take 2-6 months. We do a detailed analysis and provide a realistic timeline.",
    "faq.q2": "Do you offer support after delivery?",
    "faq.a2":
      "Yes! We offer technical support and post-delivery maintenance. We have monthly support plans that include updates, bug fixes and continuous improvements.",
    "faq.q3": "What technologies do you use?",
    "faq.a3":
      "We work with the most modern technologies on the market: React, Next.js, Node.js, Python, React Native, Flutter, AWS, Google Cloud, among others. We choose the ideal stack for each project.",
    "faq.q4": "How does the development process work?",
    "faq.a4":
      "We follow agile methodology with incremental deliveries. The process includes: requirements analysis, prototyping, development, testing, approval and delivery. We maintain constant communication throughout the project.",
    "faq.q5": "Do you develop mobile applications?",
    "faq.a5":
      "Yes! We develop native apps for iOS and Android, as well as hybrid applications using React Native and Flutter. We focus on performance, usability and modern design.",
    "faq.q6": "What is the investment for a project?",
    "faq.a6":
      "Investment varies according to scope and complexity. We offer customized quotes after detailed requirements analysis. Contact us for a free consultation.",

    // Contact
    "contact.title": "Contact us",
    "contact.subtitle": "Ready to transform your idea into reality? Let's talk about your project!",
    "contact.talkToUs": "Talk to Us",
    "contact.description":
      "We are here to help you choose the best solution for your business. Contact us and receive a free consultation.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",

    // Contact Form
    "contact.form.title": "Request a Quote",
    "contact.form.name": "Your name",
    "contact.form.email": "Your email",
    "contact.form.phone": "Your phone",
    "contact.form.company": "Company/Organization",
    "contact.form.message": "Tell us about your project...",
    "contact.form.send": "Send Message",
    "contact.form.services": "Services of Interest",
    "contact.form.serviceOptions.web": "Web Development",
    "contact.form.serviceOptions.mobile": "Mobile Applications",
    "contact.form.serviceOptions.ecommerce": "E-commerce Solutions",
    "contact.form.serviceOptions.branding": "Branding & Visual Identity",
    "contact.form.serviceOptions.consulting": "Technical Consulting",
    "contact.form.serviceOptions.maintenance": "Maintenance & Support",
    "contact.form.projectSize": "Project Scope",
    "contact.form.projectSizeOptions.small": "Small (Simple website, Landing page)",
    "contact.form.projectSizeOptions.medium": "Medium (E-commerce, Web system)",
    "contact.form.projectSizeOptions.large": "Large (Complex platform, Mobile app)",
    "contact.form.projectSizeOptions.enterprise": "Enterprise (Corporate system, Multiple integrations)",
    "contact.form.budget": "Estimated Investment",
    "contact.form.timeline": "Desired Timeline",
    "contact.form.timelineOptions.select": "Select your preferred timeline",
    "contact.form.timelineOptions.urgent": "Urgent (within 1 month)",
    "contact.form.timelineOptions.oneToTwo": "1-2 months",
    "contact.form.timelineOptions.threeToSix": "3-6 months",
    "contact.form.timelineOptions.sixPlus": "6+ months",
    "contact.form.additionalInfo": "Additional Requirements",
    "contact.form.hasExistingBrand": "Already have established branding",
    "contact.form.needsHosting": "Need hosting and domain services",
    "contact.form.needsMaintenance": "Require ongoing maintenance plan",
    "contact.form.messagePlaceholder":
      "Please describe your project, goals, target audience, and any relevant information that will help us better understand your requirements...",
    "contact.form.submit": "Send Request",
    "contact.form.sending": "Sending...",
    "contact.form.successMessage": "Request sent successfully! Our team will contact you within 24 hours.",
    "contact.form.errorMessage": "Oops! Something went wrong. Please try again or contact us directly.",

    // Footer
    "footer.description": "We transform ideas into innovative digital solutions. Your technology partner.",
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.webDev": "Web Development",
    "footer.mobileApps": "Mobile Apps",
    "footer.customSystems": "Custom Systems",
    "footer.techConsulting": "Tech Consulting",
    "footer.aboutUs": "About Us",
    "footer.processes": "Our Processes",

    // Services
    "services.title": "Our Services",
    "services.subtitle":
      "We offer a complete set of digital solutions to transform your idea into reality and boost your business.",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
