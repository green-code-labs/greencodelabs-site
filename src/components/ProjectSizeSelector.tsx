"use client"
import { useLanguage } from "./LanguageProvider"

interface ProjectSizeSelectorProps {
  value: string
  onChange: (value: string) => void
}

export function ProjectSizeSelector({ value, onChange }: ProjectSizeSelectorProps) {
  const { t } = useLanguage()

  const sizes = [
    { id: "small", label: t("contact.form.projectSizes.small") as string },
    { id: "medium", label: t("contact.form.projectSizes.medium") as string },
    { id: "large", label: t("contact.form.projectSizes.large") as string },
    { id: "enterprise", label: t("contact.form.projectSizes.enterprise") as string },
  ]

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-300">{t("contact.form.projectSize") as string}</label>
      <div className="grid grid-cols-2 gap-3">
        {sizes.map((size) => (
          <button
            key={size.id}
            type="button"
            onClick={() => onChange(size.id)}
            className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
              value === size.id
                ? "border-[#92d81e] bg-[#92d81e]/10 text-[#92d81e]"
                : "border-gray-600 text-gray-300 hover:border-gray-500"
            }`}
          >
            {size.label}
          </button>
        ))}
      </div>
    </div>
  )
}
