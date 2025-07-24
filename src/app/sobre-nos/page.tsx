"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Award, Heart, Lightbulb } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"

const aboutContent = {
  pt: {
    title: "Sobre Nós",
    subtitle: "Transformando ideias em soluções digitais inovadoras desde 2020",
    story: {
      title: "Nossa História",
      content:
        "A Green Code Labs nasceu da paixão por tecnologia e do desejo de ajudar empresas a crescerem no mundo digital. Fundada em 2020, nossa jornada começou com uma visão simples: criar soluções digitais que realmente fazem a diferença na vida das pessoas e no sucesso dos negócios.",
    },
    mission: {
      title: "Nossa Missão",
      content:
        "Capacitar empresas de todos os tamanhos com tecnologia de ponta, design excepcional e estratégias digitais eficazes, criando experiências que conectam marcas aos seus clientes de forma autêntica e impactante.",
    },
    values: [
      {
        icon: Heart,
        title: "Paixão",
        description: "Amamos o que fazemos e isso se reflete em cada projeto que entregamos",
      },
      {
        icon: Target,
        title: "Foco no Cliente",
        description: "Seu sucesso é nosso sucesso. Trabalhamos incansavelmente para superar expectativas",
      },
      {
        icon: Lightbulb,
        title: "Inovação",
        description: "Sempre buscamos as melhores tecnologias e abordagens mais criativas",
      },
      {
        icon: Award,
        title: "Qualidade",
        description: "Excelência em cada detalhe, desde o código até a experiência do usuário",
      },
    ],
    stats: [
      { number: "100+", label: "Projetos Entregues" },
      { number: "50+", label: "Clientes Satisfeitos" },
      { number: "5", label: "Anos de Experiência" },
      { number: "24/7", label: "Suporte Disponível" },
    ],
  },
  en: {
    title: "About Us",
    subtitle: "Transforming ideas into innovative digital solutions since 2020",
    story: {
      title: "Our Story",
      content:
        "Green Code Labs was born from a passion for technology and the desire to help companies grow in the digital world. Founded in 2020, our journey began with a simple vision: create digital solutions that truly make a difference in people's lives and business success.",
    },
    mission: {
      title: "Our Mission",
      content:
        "Empower companies of all sizes with cutting-edge technology, exceptional design and effective digital strategies, creating experiences that connect brands to their customers in an authentic and impactful way.",
    },
    values: [
      {
        icon: Heart,
        title: "Passion",
        description: "We love what we do and this is reflected in every project we deliver",
      },
      {
        icon: Target,
        title: "Client Focus",
        description: "Your success is our success. We work tirelessly to exceed expectations",
      },
      {
        icon: Lightbulb,
        title: "Innovation",
        description: "We always seek the best technologies and most creative approaches",
      },
      {
        icon: Award,
        title: "Quality",
        description: "Excellence in every detail, from code to user experience",
      },
    ],
    stats: [
      { number: "100+", label: "Projects Delivered" },
      { number: "50+", label: "Satisfied Clients" },
      { number: "5", label: "Years of Experience" },
      { number: "24/7", label: "Support Available" },
    ],
  },
}

export default function AboutPage() {
  const { language } = useLanguage()
  const content = aboutContent[language as keyof typeof aboutContent] || aboutContent.pt

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

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {content.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-[#92d81e] mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">{content.story.title}</h2>
                  <p className="text-gray-300 leading-relaxed">{content.story.content}</p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">{content.mission.title}</h2>
                  <p className="text-gray-300 leading-relaxed">{content.mission.content}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                {language === "en" ? "Our Values" : "Nossos Valores"}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.values.map((value, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#92d81e]/10 rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-[#92d81e]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              {language === "en" ? "Want to Work With Us?" : "Quer Trabalhar Conosco?"}
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              {language === "en"
                ? "Join us on this journey and let's create something amazing together"
                : "Junte-se a nós nesta jornada e vamos criar algo incrível juntos"}
            </p>
            <Button asChild size="lg" className="bg-[#92d81e] hover:bg-[#7bc01a] text-black">
              <Link href="/contato">{language === "en" ? "Contact us" : "Entre em Contato"}</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
