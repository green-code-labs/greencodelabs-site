"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { BudgetSlider } from "@/components/BudgetSlider"
import { useLanguage } from "@/components/LanguageProvider"

interface ContactProps {
  buttonTitle?: string
  hasBudget?: boolean
}

export function Contact({ buttonTitle, hasBudget = false }: ContactProps) {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    budget: 5000,
    projectSize: "small",
    services: [] as string[],
    timeline: "",
    hasExistingBrand: false,
    needsHosting: false,
    needsMaintenance: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          budget: 5000,
          projectSize: "small",
          services: [],
          timeline: "",
          hasExistingBrand: false,
          needsHosting: false,
          needsMaintenance: false,
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        services: [...prev.services, service],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        services: prev.services.filter((s) => s !== service),
      }))
    }
  }

  const projectSizeOptions = [
    { value: "small", label: t("contact.form.projectSizeOptions.small") },
    { value: "medium", label: t("contact.form.projectSizeOptions.medium") },
    { value: "large", label: t("contact.form.projectSizeOptions.large") },
    { value: "enterprise", label: t("contact.form.projectSizeOptions.enterprise") },
  ]

  return (
    <section className="py-20 bg-[#0f0f23]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("contact.title")}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#121225] via-[#1a1a2e] to-[#121225] rounded-2xl p-8 md:p-12 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white font-medium">
                    {t("contact.form.name")} *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="bg-[#0f0f23] border-gray-700 text-white focus:border-[#92d81e]"
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">
                    {t("contact.form.email")} *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="bg-[#0f0f23] border-gray-700 text-white focus:border-[#92d81e]"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white font-medium">
                    {t("contact.form.phone")}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    className="bg-[#0f0f23] border-gray-700 text-white focus:border-[#92d81e]"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white font-medium">
                    {t("contact.form.company")}
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                    className="bg-[#0f0f23] border-gray-700 text-white focus:border-[#92d81e]"
                    placeholder="Nome da sua empresa"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-white font-medium text-lg">{t("contact.form.services")}</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {[ 
                    { key: "web", label: t("contact.form.serviceOptions.web") },
                    { key: "mobile", label: t("contact.form.serviceOptions.mobile") },
                    { key: "ecommerce", label: t("contact.form.serviceOptions.ecommerce") },
                    { key: "branding", label: t("contact.form.serviceOptions.branding") },
                    { key: "consulting", label: t("contact.form.serviceOptions.consulting") },
                    { key: "maintenance", label: t("contact.form.serviceOptions.maintenance") },
                  ].map((service) => (
                    <div key={service.key} className="flex items-center space-x-3">
                      <Checkbox
                        id={service.key}
                        checked={formData.services.includes(service.key)}
                        onCheckedChange={(checked) => handleServiceChange(service.key, checked as boolean)}
                        className="border-gray-600 data-[state=checked]:bg-[#92d81e] data-[state=checked]:border-[#92d81e]"
                      />
                      <Label htmlFor={service.key} className="text-gray-300 cursor-pointer">
                        {service.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-white font-medium text-lg">{t("contact.form.projectSize")}</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {projectSizeOptions.map((option) => (
                    <div key={option.value} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id={`size-${option.value}`}
                        name="projectSize"
                        value={option.value}
                        checked={formData.projectSize === option.value}
                        onChange={(e) => setFormData((prev) => ({ ...prev, projectSize: e.target.value }))}
                        className="w-4 h-4 text-[#92d81e] bg-[#0f0f23] border-gray-600 focus:ring-[#92d81e] focus:ring-2"
                      />
                      <Label htmlFor={`size-${option.value}`} className="text-gray-300 cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {hasBudget && (
                <div className="space-y-4">
                  <Label className="text-white font-medium text-lg">{t("contact.form.budget")}</Label>
                  <BudgetSlider
                    value={[formData.budget]}
                    onChange={(budgetArray) => setFormData((prev) => ({ ...prev, budget: budgetArray[0] }))}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="timeline" className="text-white font-medium">
                  {t("contact.form.timeline")}
                </Label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData((prev) => ({ ...prev, timeline: e.target.value }))}
                  className="w-full bg-[#0f0f23] border border-gray-700 text-white rounded-md px-3 py-2 focus:border-[#92d81e] focus:outline-none"
                >
                  <option value="">{t("contact.form.timelineOptions.select")}</option>
                  <option value="urgent">{t("contact.form.timelineOptions.urgent")}</option>
                  <option value="1-2months">{t("contact.form.timelineOptions.oneToTwo")}</option>
                  <option value="3-6months">{t("contact.form.timelineOptions.threeToSix")}</option>
                  <option value="6+months">{t("contact.form.timelineOptions.sixPlus")}</option>
                </select>
              </div>

              <div className="space-y-4">
                <Label className="text-white font-medium text-lg">{t("contact.form.additionalInfo")}</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="hasExistingBrand"
                      checked={formData.hasExistingBrand}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, hasExistingBrand: checked as boolean }))
                      }
                      className="border-gray-600 data-[state=checked]:bg-[#92d81e] data-[state=checked]:border-[#92d81e]"
                    />
                    <Label htmlFor="hasExistingBrand" className="text-gray-300 cursor-pointer">
                      {t("contact.form.hasExistingBrand")}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="needsHosting"
                      checked={formData.needsHosting}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, needsHosting: checked as boolean }))
                      }
                      className="border-gray-600 data-[state=checked]:bg-[#92d81e] data-[state=checked]:border-[#92d81e]"
                    />
                    <Label htmlFor="needsHosting" className="text-gray-300 cursor-pointer">
                      {t("contact.form.needsHosting")}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="needsMaintenance"
                      checked={formData.needsMaintenance}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, needsMaintenance: checked as boolean }))
                      }
                      className="border-gray-600 data-[state=checked]:bg-[#92d81e] data-[state=checked]:border-[#92d81e]"
                    />
                    <Label htmlFor="needsMaintenance" className="text-gray-300 cursor-pointer">
                      {t("contact.form.needsMaintenance")}
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white font-medium">
                  {t("contact.form.message")} *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="bg-[#0f0f23] border-gray-700 text-white focus:border-[#92d81e] min-h-[120px]"
                  placeholder={t("contact.form.messagePlaceholder")}
                  required
                />
              </div>

              <div className="text-center pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#92d81e] hover:bg-[#7bc142] text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t("contact.form.sending") : buttonTitle || t("contact.form.submit")}
                </Button>
              </div>

              {submitStatus === "success" && (
                <div className="text-center p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <p className="text-green-400 font-medium">{t("contact.form.successMessage")}</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="text-center p-4 bg-red-900/20 border border-red-700 rounded-lg">
                  <p className="text-red-400 font-medium">{t("contact.form.errorMessage")}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
