"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import logoImg from "@/assets/logo.svg"
import { HeaderMainBackground } from "@/components/HeaderMainBackground"
import Image from "next/image"
import { Mail, Phone, User, MessageSquare, Briefcase, CheckCircle, AlertCircle } from "lucide-react"
import { BudgetSlider } from "./BudgetSlider"
import { ProjectSizeSelector } from "./ProjectSizeSelector"

interface ContactProps {
  hasButton?: boolean
  hasLogo?: boolean
  hasProjectSize?: boolean
  hasBudget?: boolean
  buttonTitle?: string
  title?: string
  subtitle?: string
  prefilledName?: string
  prefilledEmail?: string
}

interface FormData {
  fullName: string
  phone: string
  email: string
  reasons: string[]
  projectSize: string
  budget: number
  customBudget: string
  message: string
}

export function Contact({
  hasButton = true,
  hasProjectSize = false,
  hasBudget = false,
  hasLogo = true,
  buttonTitle = "Agendar Conversa",
  title = "Obrigado por se interessar na Green Code.",
  subtitle = "Estamos ansiosos para ouvir você e discutir como podemos ajudar a criar soluções digitais inovadoras para o seu negócio. Agende uma conversa conosco e descubra nossa proposta personalizada, sem qualquer compromisso.",
  prefilledName = "",
  prefilledEmail = "",
}: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: prefilledName,
    phone: "",
    email: prefilledEmail,
    reasons: [],
    projectSize: "",
    budget: 25000,
    customBudget: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const handleReasonChange = (reasonId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      reasons: checked ? [...prev.reasons, reasonId] : prev.reasons.filter((r) => r !== reasonId),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      if (!formData.fullName || !formData.email) {
        throw new Error("Nome e email são obrigatórios")
      }

      const leadData = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        reasons: formData.reasons.join(", "),
        projectSize: formData.projectSize,
        budget: formData.customBudget || `R$ ${formData.budget.toLocaleString("pt-BR")}`,
        message: formData.message,
        source: "Formulário de Contato",
        timestamp: new Date().toISOString(),
      }

      const response = await fetch("/send-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Erro ${response.status}: ${errorText}`)
      }

      await response.json()
      setSubmitStatus("success")
      setSubmitMessage("Formulário enviado com sucesso! Entraremos em contato em breve.")

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        reasons: [],
        projectSize: "",
        budget: 25000,
        customBudget: "",
        message: "",
      })
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      setSubmitStatus("error")
      setSubmitMessage(error instanceof Error ? error.message : "Erro ao enviar formulário")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full flex justify-center flex-col max-w-[1150px] mx-auto">
    <HeaderMainBackground
      icon={hasLogo && <Image src={logoImg || "/placeholder.svg"} alt="Logomarca" />}
      title={title}
      subtitle={subtitle}
      footerContent={
        hasButton && (
          <Button
            type="button"
            asChild={false}
            className="green-gradient hover:opacity-90 transition-opacity"
          >
            {buttonTitle}
          </Button>
        )
      }
    />

      <div className="bg-gradient-to-br from-[#1e1e38] to-[#2a2a4a] border border-[#3a3a5a] rounded-lg">
        <form onSubmit={handleSubmit} className="container lg:px-10 pb-8 lg:pb-16 pt-8 lg:pt-16 max-w-[60rem] mx-auto">
          {submitStatus !== "idle" && (
            <div
              className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                submitStatus === "success"
                  ? "bg-green-900/20 border border-green-500/30 text-green-400"
                  : "bg-red-900/20 border border-red-500/30 text-red-400"
              }`}
            >
              {submitStatus === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              <span>{submitMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="lg:col-span-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#92d81e] to-[#438e00] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-[#2a2a4a] border border-[#3a3a5a] rounded-lg p-4 hover:border-[#92d81e]/50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="w-5 h-5 text-[#92d81e]" />
                    <Label htmlFor="fullName" className="font-medium text-lg text-white">
                      Nome Completo *
                    </Label>
                  </div>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                    className="bg-[#1e1e38] border-[#3a3a5a] text-white placeholder:text-[#8a8a9a] focus:border-[#92d81e] focus:ring-[#92d81e]/20 h-12"
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#92d81e] to-[#438e00] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-[#2a2a4a] border border-[#3a3a5a] rounded-lg p-4 hover:border-[#92d81e]/50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-5 h-5 text-[#92d81e]" />
                    <Label htmlFor="celular" className="font-medium text-lg text-white">
                      Celular
                    </Label>
                  </div>
                  <Input
                    id="celular"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    className="bg-[#1e1e38] border-[#3a3a5a] text-white placeholder:text-[#8a8a9a] focus:border-[#92d81e] focus:ring-[#92d81e]/20 h-12"
                    placeholder="(99) 9 9999-9999"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#92d81e] to-[#438e00] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-[#2a2a4a] border border-[#3a3a5a] rounded-lg p-4 hover:border-[#92d81e]/50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-5 h-5 text-[#92d81e]" />
                    <Label htmlFor="email" className="font-medium text-lg text-white">
                      E-mail *
                    </Label>
                  </div>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="bg-[#1e1e38] border-[#3a3a5a] text-white placeholder:text-[#8a8a9a] focus:border-[#92d81e] focus:ring-[#92d81e]/20 h-12"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#92d81e] to-[#438e00] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-[#2a2a4a] border border-[#3a3a5a] rounded-lg p-6 hover:border-[#92d81e]/50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="w-5 h-5 text-[#92d81e]" />
                    <Label className="font-medium text-lg text-white">
                      Por que você está entrando em contato conosco?
                    </Label>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { id: "web", label: "Web Design" },
                      { id: "saas", label: "SaaS" },
                      { id: "collaboration", label: "Colaboração" },
                      { id: "others", label: "Outros" },
                    ].map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center gap-3 p-3 bg-[#1e1e38] rounded-lg hover:bg-[#252547] transition-colors"
                      >
                        <Checkbox
                          id={option.id}
                          checked={formData.reasons.includes(option.id)}
                          onCheckedChange={(checked) => handleReasonChange(option.id, checked as boolean)}
                          className="border-[#3a3a5a] data-[state=checked]:bg-[#92d81e] data-[state=checked]:border-[#92d81e]"
                        />
                        <Label htmlFor={option.id} className="font-light text-white cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {hasProjectSize && (
              <ProjectSizeSelector
                value={formData.projectSize}
                onChange={(value) => setFormData((prev) => ({ ...prev, projectSize: value }))}
              />
            )}

            {hasBudget && (
              <BudgetSlider
                value={[formData.budget]} 
                customValue={formData.customBudget}
                onValueChange={(valueArray) => setFormData((prev) => ({ ...prev, budget: valueArray[0] }))}
                onCustomValueChange={(value) => setFormData((prev) => ({ ...prev, customBudget: value }))}
              />
            )}


            <div className="lg:col-span-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#92d81e] to-[#438e00] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-[#2a2a4a] border border-[#3a3a5a] rounded-lg p-4 hover:border-[#92d81e]/50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <MessageSquare className="w-5 h-5 text-[#92d81e]" />
                    <Label htmlFor="message" className="font-medium text-lg text-white">
                      Comentário
                    </Label>
                  </div>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder="Conte-nos mais sobre seu projeto..."
                    className="bg-[#1e1e38] border-[#3a3a5a] text-white placeholder:text-[#8a8a9a] focus:border-[#92d81e] focus:ring-[#92d81e]/20 min-h-[120px] resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="green-gradient hover:opacity-90 transition-opacity px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}