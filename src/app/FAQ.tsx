"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { HeaderMainBackground } from "@/components/HeaderMainBackground"
import dragonImg from "@/assets/dragon.svg"

export function FAQ() {
  const faqs = [
    {
      question: "Como a Green Code pode ajudar minha empresa a melhorar com marketing digital?",
      answer:
        "Nossa equipe de especialistas trabalha com SEO, melhorando a visibilidade nos motores de busca, aumentando o tráfego orgânico e, consequentemente, potencializando suas oportunidades de negócio. Gerenciamos suas contas de redes sociais, criando e compartilhando conteúdo que ressoa com seu público e constrói uma presença online forte e consistente. Por fim, criamos e gerimos campanhas de publicidade paga no Google, Facebook, Instagram e outras plataformas, alcançando seu público-alvo de maneira eficaz e aumentando suas conversões.",
    },
    {
      question: "A Green Code desenvolve soluções personalizadas?",
      answer:
        "Sim, desenvolvemos soluções de software personalizadas de acordo com as necessidades específicas de cada cliente. Isso inclui plataformas de CRM, aplicativos de agendamento, sistemas de registro de pagamentos e muito mais.",
    },
    {
      question: "Quais setores a Green Code atende?",
      answer:
        "Atendemos a uma variedade de setores, incluindo: Pequenas e médias empresas (PMEs) Startups Grandes corporações Fintechs e bancos digitais Setor educacional Saúde e bem-estar Varejo e e-commerce",
    },
    {
      question: "Como a Green Code garante a qualidade de seus projetos?",
      answer:
        "Garantimos a qualidade através de metodologias ágeis, testes rigorosos, revisões de código e acompanhamento contínuo durante todo o processo de desenvolvimento.",
    },
    {
      question: "A Green Code oferece suporte e manutenção após a entrega do projeto?",
      answer:
        "Sim, oferecemos serviços de suporte e manutenção para garantir que suas soluções de software funcionem perfeitamente e sejam atualizadas conforme necessário.",
    },
    {
      question: "Como a Green Code pode ajudar minha empresa a obter escalabilidade?",
      answer:
        "Desenvolvemos soluções escaláveis usando arquiteturas modernas e tecnologias robustas que crescem junto com seu negócio, garantindo performance mesmo com o aumento da demanda.",
    },
    {
      question: "Quais são as etapas do processo de desenvolvimento de software na Green Code?",
      answer:
        "Nosso processo inclui: 1. Pesquisa e análise de requisitos 2. Conceituação e planejamento 3. Design de interface e experiência 4. Desenvolvimento e implementação 5. Testes e validação 6. Deploy e suporte contínuo",
    },
    {
      question: "Quanto tempo leva para desenvolver um projeto?",
      answer:
        "O tempo varia conforme a complexidade do projeto. Sites simples podem levar de 2-4 semanas, enquanto aplicações mais complexas podem levar de 2-6 meses.",
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer:
        "Sim! Oferecemos suporte técnico e manutenção contínua para todos os nossos projetos, garantindo que tudo funcione perfeitamente.",
    },
    {
      question: "Trabalham com quais tecnologias?",
      answer:
        "Utilizamos as tecnologias mais modernas do mercado: React, Next.js, Node.js, Python, WordPress, e muito mais.",
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer:
        "Seguimos uma metodologia ágil: análise de requisitos, prototipagem, desenvolvimento, testes e entrega, sempre com o cliente participando do processo.",
    },
  ]

  return (
    <div className="w-full bg-[#1e1e38] min-h-screen">
      <HeaderMainBackground
      title="Perguntas Frequentes"
      subtitle="Aqui você encontra encontra respostas para as dúvidas mais comuns sobre nossos serviços."
      icon={<Image src={dragonImg} alt="Mascote Green Code" />}
        />

      <section className="py-20 bg-[#1e1e38]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-300">Tire suas dúvidas sobre nossos serviços</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#2a2a4a] border border-[#3a3a5a] rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-[#3a3a5a] transition-colors">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="bg-gradient-to-r from-[#92d81e] to-[#57a108] text-black font-bold px-3 py-1 rounded-md min-w-[3rem] text-center">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </div>
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}
