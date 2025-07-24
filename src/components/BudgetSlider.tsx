"use client"
import { Slider } from "@/components/ui/slider"
import { useLanguage } from "./LanguageProvider"

interface BudgetSliderProps {
  value: number[]
  onChange: (value: number[]) => void
}

export function BudgetSlider({ value = [25000], onChange }: BudgetSliderProps) {
  const { t } = useLanguage()

  const formatCurrency = (val: number) => {
    if (val >= 100000) return "R$ 100.000+"
    return `R$ ${val.toLocaleString("pt-BR")}`
  }

  const safeValue = Array.isArray(value) && value.length > 0 ? value : [25000]

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-300">{t("contact.form.budget") as string}</label>
        <span className="text-sm font-medium text-[#92d81e]">{formatCurrency(safeValue[0])}</span>
      </div>
      <Slider value={safeValue} onValueChange={onChange} max={100000} min={5000} step={5000} className="w-full" />
      <div className="flex justify-between text-xs text-gray-400">
        <span>R$ 5.000</span>
        <span>R$ 100.000+</span>
      </div>
    </div>
  )
}
