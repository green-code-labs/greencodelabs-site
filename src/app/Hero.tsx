"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export function Hero() {
  const [email, setEmail] = useState("")

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transforme ideias em <span className="green-text-gradient">soluções digitais</span> de alto impacto
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Desenvolvemos software personalizado que impulsiona o crescimento do seu negócio, com tecnologias modernas
              e processos ágeis.
            </p>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-[#2a2a4a] border-[#3d3d5c] h-12 text-white focus:border-[#92d81e] focus:ring-[#92d81e]/20"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button className="bg-[#92d81e] hover:bg-[#7ec617] text-white h-12 px-6" asChild>
                  <Link href="/contato">
                    Fale Conosco <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-[#92d81e] mr-2" />
                  <span>Orçamento gratuito</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-[#92d81e] mr-2" />
                  <span>Suporte especializado</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-[#92d81e] mr-2" />
                  <span>Tecnologias modernas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="code-window w-full">
              <div className="flex bg-[#2a2a4a] px-4 py-2">
                <div className="code-tab">main.tsx</div>
                <div className="code-tab bg-[#121225]">api.ts</div>
                <div className="code-tab">styles.css</div>
              </div>
              <div className="code-content">
                {[
                  { num: 1, code: 'import { GreenCode } from "./lib";' },
                  { num: 2, code: "" },
                  { num: 3, code: "function App() {" },
                  { num: 4, code: "  return (" },
                  { num: 5, code: "    <GreenCode" },
                  { num: 6, code: '      solution="personalizada"' },
                  { num: 7, code: "      technologies={[" },
                  { num: 8, code: '        "React", "Node.js",' },
                  { num: 9, code: '        "TypeScript", "AWS"' },
                  { num: 10, code: "      ]}" },
                  { num: 11, code: "      quality={100}" },
                  { num: 12, code: "    />" },
                  { num: 13, code: "  );" },
                  { num: 14, code: "}" },
                  { num: 15, code: "" },
                  { num: 16, code: "export default App;" },
                ].map((line) => (
                  <div key={line.num} className="code-line">
                    <span className="line-number">{line.num}</span>
                    <span className="code-text">
                      {line.code.includes("import") ? (
                        <>
                          <span className="keyword">import</span> {"{ GreenCode }"}{" "}
                          <span className="keyword">from</span> <span className="string">"./lib"</span>;
                        </>
                      ) : line.code.includes("function") ? (
                        <>
                          <span className="keyword">function</span> <span className="function">App</span>() {"{"}
                        </>
                      ) : line.code.includes("export") ? (
                        <>
                          <span className="keyword">export</span> <span className="keyword">default</span> App;
                        </>
                      ) : (
                        line.code
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
