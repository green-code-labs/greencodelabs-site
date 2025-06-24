import { HeaderMainBackground } from "@/components/HeaderMainBackground"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Palette,
  Smartphone,
  Globe,
  Megaphone,
  Zap,
  Users,
  Shield,
  Lightbulb,
  Rocket,
  Target,
  Settings,
} from "lucide-react"

export default function Servicos() {
  const services = [
    {
      category: "Design",
      description: "Criamos designs impressionantes e centrados no usuário que cativam seu público e elevam sua marca.",
      icon: <Palette className="h-8 w-8" />,
      color: "from-[#92d81e] to-[#7ec617]",
      services: [
        {
          title: "User Experience (UX) Design",
          items: [
            { icon: <Users className="h-5 w-5" />, text: "Pesquisa de usuário e desenvolvimento de persona" },
            { icon: <Settings className="h-5 w-5" />, text: "Arquitetura da Informação e Wireframing" },
            { icon: <Target className="h-5 w-5" />, text: "Prototipagem interativa e testes de usuário" },
            { icon: <Lightbulb className="h-5 w-5" />, text: "Design de UI e Branding Visual" },
          ],
        },
        {
          title: "User Interface (UI) Design",
          items: [
            { icon: <Zap className="h-5 w-5" />, text: "Design de interface intuitivo e visualmente atraente" },
            { icon: <Palette className="h-5 w-5" />, text: "Iconografia e Ilustração Personalizadas" },
            { icon: <Settings className="h-5 w-5" />, text: "Seleção de tipografia e paleta de cores" },
            { icon: <Smartphone className="h-5 w-5" />, text: "Design responsivo para vários dispositivos" },
          ],
        },
        {
          title: "Branding",
          items: [
            { icon: <Rocket className="h-5 w-5" />, text: "Design de logotipo e desenvolvimento de identidade visual" },
            { icon: <Target className="h-5 w-5" />, text: "Estratégia e Posicionamento de Marca" },
            { icon: <Settings className="h-5 w-5" />, text: "Diretrizes de marca e guias de estilo" },
            { icon: <Lightbulb className="h-5 w-5" />, text: "Design de materiais de marketing" },
          ],
        },
      ],
    },
    {
      category: "Desenvolvimento",
      description:
        "Construímos soluções digitais robustas e escaláveis usando as últimas tecnologias e melhores práticas.",
      icon: <Code2 className="h-8 w-8" />,
      color: "from-[#7ec617] to-[#6bb30f]",
      services: [
        {
          title: "Desenvolvimento Web",
          items: [
            { icon: <Globe className="h-5 w-5" />, text: "Desenvolvimento Front-End" },
            { icon: <Settings className="h-5 w-5" />, text: "Desenvolvimento Back-End" },
            { icon: <Code2 className="h-5 w-5" />, text: "Desenvolvimento de CMS (WordPress, Drupal)" },
            { icon: <Rocket className="h-5 w-5" />, text: "Desenvolvimento de E-Commerce (Magento, Shopify)" },
          ],
        },
        {
          title: "Mobile App Development",
          items: [
            { icon: <Smartphone className="h-5 w-5" />, text: "Aplicativos nativos para iOS e Android" },
            { icon: <Code2 className="h-5 w-5" />, text: "Aplicativos multiplataforma (React Native, Flutter)" },
            { icon: <Lightbulb className="h-5 w-5" />, text: "Prototipagem e integração de design UI/UX" },
            { icon: <Shield className="h-5 w-5" />, text: "Teste, implantação e manutenção" },
          ],
        },
        {
          title: "Software Personalizado",
          items: [
            { icon: <Settings className="h-5 w-5" />, text: "Desenvolvimento de software empresarial" },
            { icon: <Globe className="h-5 w-5" />, text: "Aplicativos Web personalizados" },
            { icon: <Zap className="h-5 w-5" />, text: "Integração com APIs e sistemas de terceiros" },
            { icon: <Rocket className="h-5 w-5" />, text: "Modernização de sistemas legados" },
          ],
        },
      ],
    },
    {
      category: "Marketing Digital",
      description: "Aumentamos a visibilidade da sua marca, impulsionamos o engajamento e maximizamos seu ROI.",
      icon: <Megaphone className="h-8 w-8" />,
      color: "from-[#6bb30f] to-[#57a108]",
      services: [
        {
          title: "Serviços de Mídia Digital",
          items: [
            { icon: <Users className="h-5 w-5" />, text: "Gestão de Mídias Sociais" },
            { icon: <Target className="h-5 w-5" />, text: "Otimização para Motores de Busca (SEO)" },
            { icon: <Zap className="h-5 w-5" />, text: "Gestão de Tráfego Pago (Google Ads, Meta, LinkedIn)" },
            { icon: <Lightbulb className="h-5 w-5" />, text: "Marketing de Conteúdo" },
          ],
        },
        {
          title: "Desenvolvimento Ágil",
          items: [
            { icon: <Rocket className="h-5 w-5" />, text: "Desenvolvimento Iterativo e Sprints" },
            { icon: <Settings className="h-5 w-5" />, text: "Metodologia Scrum ou Kanban" },
            { icon: <Target className="h-5 w-5" />, text: "Atualizações regulares de progresso" },
            { icon: <Zap className="h-5 w-5" />, text: "Melhoria Contínua e Feedback" },
          ],
        },
        {
          title: "Garantia de Qualidade",
          items: [
            { icon: <Shield className="h-5 w-5" />, text: "Planejamento e Execução de Testes" },
            { icon: <Users className="h-5 w-5" />, text: "Teste Funcional e de Usabilidade" },
            { icon: <Zap className="h-5 w-5" />, text: "Testes de Performance e Segurança" },
            { icon: <Settings className="h-5 w-5" />, text: "Rastreamento de Bugs e Resolução" },
          ],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1e38] via-[#2a2a4a] to-[#1e1e38]">
      <HeaderMainBackground
        title="Nossos Serviços"
        subtitle="Transforme sua marca com nossas soluções digitais inovadoras que cativam e engajam seu público."
      />

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="space-y-20">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-12">
              <div className="text-center space-y-6">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                >
                  {category.icon}
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">{category.category}</h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{category.description}</p>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm">
                    Nossos serviços de {category.category} incluem:
                  </Badge>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <Card
                    key={serviceIndex}
                    className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                  >
                    <CardContent className="p-8 space-y-6">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#92d81e] transition-colors">
                        {service.title}
                      </h3>
                      <div className="space-y-4">
                        {service.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-4 group/item">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[#92d81e] to-[#7ec617] flex items-center justify-center text-white group-hover/item:scale-110 transition-transform">
                              {item.icon}
                            </div>
                            <p className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
