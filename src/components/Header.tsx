"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import logoImg from "@/assets/logo.svg"
import Link from "next/link"
import { Button } from "./ui/button"
import { MenuIcon, X } from "lucide-react"
import { usePathname } from "next/navigation"

export const routes = [
  { text: "Home", path: "/" },
  { text: "Serviços", path: "/servicos" },
  { text: "Processos", path: "/processos" },
  { text: "Sobre Nós", path: "/sobre-nos" },
  { text: "Blog", path: "https://blog.greencodelabs.com", external: true },
  { text: "Contato", path: "/contato" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="w-full bg-[#1e1e38] sticky top-0 z-50 border-b border-[#2a2a4a]">
      <div className="container mx-auto flex px-4 py-4 justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logoImg || "/placeholder.svg"} alt="Green Code" width={40} height={40} className="w-10 h-10" />
            <span className="font-bold text-xl text-white">Green Code</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-8">
            {routes.map((link) => {
              if (link.text === "Contato") return null

              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`text-base font-medium transition-colors ${
                      pathname === link.path && !link.external ? "text-[#92d81e]" : "text-white hover:text-[#92d81e]"
                    }`}
                  >
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            className="border-[#92d81e] text-[#92d81e] hover:bg-[#92d81e] hover:text-white"
            asChild
          >
            <Link href="/contato">Contate-nos</Link>
          </Button>
          <Button className="bg-[#92d81e] hover:bg-[#7ec617] text-white" asChild>
            <Link href="/contato">Iniciar Projeto</Link>
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>
      <div
        ref={menuRef}
        className={`md:hidden absolute inset-x-0 bg-[#1e1e38] border-b border-[#2a2a4a] transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex flex-col gap-4">
            {routes.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`block py-2 text-lg font-medium ${
                    pathname === link.path && !link.external ? "text-[#92d81e]" : "text-white"
                  }`}
                  onClick={toggleMenu}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Button
              variant="outline"
              className="w-full border-[#92d81e] text-[#92d81e] hover:bg-[#92d81e] hover:text-white"
              asChild
            >
              <Link href="/contato">Contate-nos</Link>
            </Button>
            <Button className="w-full bg-[#92d81e] hover:bg-[#7ec617] text-white" asChild>
              <Link href="/contato">Iniciar Projeto</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
