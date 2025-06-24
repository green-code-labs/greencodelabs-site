"use client"

import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DollarSign } from "lucide-react"

interface BudgetSliderProps {
  value: number[]
  customValue: string
  onValueChange: (value: number[]) => void
  onCustomValueChange: (value: string) => void
}

export function BudgetSlider({
  value,
  customValue,
  onValueChange,
  onCustomValueChange,
}: BudgetSliderProps) {
  const formatCurrency = (value: number) => {
    if (value >= 100000) return "R$ 100.000+"
    return `R$ ${value.toLocaleString("pt-BR")}`
  }

  return (
    <div className="lg:col-span-2">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#92d81e] to-[#438e00] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <div className="relative bg-[#2a2a4a] border border-[#3a3a5a] rounded-lg p-6 hover:border-[#92d81e]/50 transition-colors duration-300">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-5 h-5 text-[#92d81e]" />
            <div>
              <Label className="font-medium text-lg text-white block">Seu orçamento</Label>
              <span className="font-light text-sm text-[#8a8a9a]">Deslize para indicar sua faixa de orçamento</span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-[#92d81e] font-medium min-w-[80px]">R$ 0</span>
              <div className="flex-1">
                <Slider
                  value={value}
                  onValueChange={onValueChange}
                  max={100000}
                  min={0}
                  step={5000}
                  className="w-full"
                />
              </div>
              <span className="text-[#92d81e] font-medium min-w-[100px]">R$ 100.000+</span>
            </div>

            <div className="text-center">
              <span className="text-white text-lg font-medium">
                Valor selecionado: <span className="text-[#92d81e]">{formatCurrency(value[0])}</span>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Label htmlFor="otherPrice" className="font-medium text-white min-w-[100px]">
                Outro Valor
              </Label>
              <Input
                id="otherPrice"
                value={customValue}
                onChange={(e) => onCustomValueChange(e.target.value)}
                className="bg-[#1e1e38] border-[#3a3a5a] text-white placeholder:text-[#8a8a9a] focus:border-[#92d81e] focus:ring-[#92d81e]/20 max-w-[200px]"
                placeholder="R$ 0,00"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
