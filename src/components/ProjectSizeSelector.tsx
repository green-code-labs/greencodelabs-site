"use client"

import { Label } from "@/components/ui/label"
import { Briefcase } from "lucide-react"

interface ProjectSizeSelectorProps {
  value: string
  onChange: (value: string) => void
}

export function ProjectSizeSelector({ value, onChange }: ProjectSizeSelectorProps) {
  const projectSizes = [
    { id: "pequeno", label: "Pequeno" },
    { id: "medio", label: "Médio" },
    { id: "grande", label: "Grande" },
    { id: "outros", label: "Outros" },
  ]

  return (
    <div className="lg:col-span-2">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#92d81e] to-[#438e00] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <div className="relative bg-[#2a2a4a] border border-[#3a3a5a] rounded-lg p-6 hover:border-[#92d81e]/50 transition-colors duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-5 h-5 text-[#92d81e]" />
            <Label className="font-medium text-lg text-white">Qual tamanho do seu projeto?</Label>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projectSizes.map((option) => (
              <div
                key={option.id}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
                  value === option.id
                    ? "bg-[#92d81e]/20 border border-[#92d81e]"
                    : "bg-[#1e1e38] hover:bg-[#252547]"
                }`}
                onClick={() => onChange(option.id)}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-colors ${
                    value === option.id ? "bg-[#92d81e] border-[#92d81e]" : "border-[#3a3a5a]"
                  }`}
                >
                  {value === option.id && <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>}
                </div>
                <Label className="font-light text-white cursor-pointer">{option.label}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
