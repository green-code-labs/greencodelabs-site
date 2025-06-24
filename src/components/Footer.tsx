import Image from "next/image"
import Link from "next/link"
import logoImg from "@/assets/logo.svg"
import { Facebook } from "@/assets/icons/Facebook"
import { Instagram } from "@/assets/icons/Instagram"
import { LinkedIn } from "@/assets/icons/LinkedIn"

const footerRoutes = [
  { text: "Home", path: "/" },
  { text: "Serviços", path: "/servicos" },
  { text: "Processos", path: "/processos" },
  { text: "Sobre Nós", path: "/sobre-nos" },
  { text: "Blog", path: "https://blog.greencodelabs.com", external: true },
  { text: "Contato", path: "/contato" },
]

export function Footer() {
  return (
    <footer className="bg-[#171730] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src={logoImg || "/placeholder.svg"} alt="Green Code" width={40} height={40} />
              <span className="font-bold text-xl">Green Code</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando ideias em soluções digitais de alto impacto com tecnologias modernas e processos ágeis.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com/greencodeti"
                className="text-gray-400 hover:text-[#92d81e]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-400 hover:text-[#92d81e]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-400 hover:text-[#92d81e]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {footerRoutes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    target={route.external ? "_blank" : undefined}
                    rel={route.external ? "noopener noreferrer" : undefined}
                    className="text-gray-400 hover:text-[#92d81e]"
                  >
                    {route.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-[#92d81e]">
                  Desenvolvimento Web
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-[#92d81e]">
                  Aplicativos Mobile
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-[#92d81e]">
                  UX/UI Design
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-[#92d81e]">
                  Consultoria em TI
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-[#92d81e]">
                  DevOps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <strong className="text-white">Email:</strong> contato@greencodelabs.com
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Telefone:</strong> +55 (11) 9999-9999
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Endereço:</strong> Av. Paulista, 1000 - São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2a2a4a] pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Green Code Labs. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/politica-de-privacidade" className="text-gray-400 hover:text-[#92d81e] text-sm">
                Política de Privacidade
              </Link>
              <Link href="/termos-de-uso" className="text-gray-400 hover:text-[#92d81e] text-sm">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
