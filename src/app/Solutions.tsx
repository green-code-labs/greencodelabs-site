import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, ShoppingCart, Lightbulb, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function Solutions() {
  const solutions = [
    {
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web modernas, responsivas e otimizadas para performance",
      icon: <Globe className="h-8 w-8" />,
      color: "from-[#92d81e] to-[#7ec617]",
      features: ["React/Next.js", "Node.js", "TypeScript", "SEO Otimizado"],
      popular: false,
    },
    {
      title: "Aplicativos Mobile",
      description: "Apps nativos e híbridos para iOS e Android com experiência excepcional",
      icon: <Smartphone className="h-8 w-8" />,
      color: "from-[#7ec617] to-[#6bb30f]",
      features: ["React Native", "Flutter", "iOS/Android", "Push Notifications"],
      popular: true,
    },
    {
      title: "E-commerce",
      description: "Lojas virtuais completas e otimizadas para conversão e vendas",
      icon: <ShoppingCart className="h-8 w-8" />,
      color: "from-[#6bb30f] to-[#57a108]",
      features: ["Shopify", "WooCommerce", "Pagamentos", "Analytics"],
      popular: false,
    },
    {
      title: "Consultoria Digital",
      description: "Estratégias digitais personalizadas para acelerar seu crescimento",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "from-[#57a108] to-[#438e00]",
      features: ["Estratégia", "UX/UI Design", "Marketing", "Automação"],
      popular: false,
    },
  ]

  const stats = [
    { number: "100+", label: "Projetos Entregues" },
    { number: "50+", label: "Clientes Satisfeitos" },
    { number: "5+", label: "Anos de Experiência" },
    { number: "24/7", label: "Suporte Técnico" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#141414] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#92d81e] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7ec617] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 space-y-6">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
            Nossas Especialidades
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossas{" "}
            <span className="bg-gradient-to-r from-[#92d81e] to-[#7ec617] bg-clip-text text-transparent">Soluções</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas para transformar sua presença digital e acelerar seu crescimento no mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
            >
              {solution.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-[#92d81e] to-[#7ec617] text-white border-0">Popular</Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                >
                  {solution.icon}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-[#92d81e] transition-colors">
                  {solution.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">{solution.description}</p>

                <div className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-[#92d81e] flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="w-full text-[#92d81e] hover:bg-[#92d81e] hover:text-white transition-all group/btn"
                  asChild
                >
                  <Link href="/contato">
                    Saiba Mais
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#92d81e] to-[#7ec617] bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Pronto para transformar sua ideia em realidade?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar o próximo nível
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#92d81e] to-[#7ec617] hover:from-[#7ec617] hover:to-[#6bb30f] text-white border-0 px-8"
              asChild
            >
              <Link href="/contato">
                Iniciar Projeto
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Ver Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
