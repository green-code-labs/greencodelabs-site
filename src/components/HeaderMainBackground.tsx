"use client"

interface HeaderMainBackgroundProps {
  title: string
  subtitle?: string
}

export function HeaderMainBackground({ title, subtitle }: HeaderMainBackgroundProps) {
  return (
    <div className="background-gradient">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#92d81e] rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#7ec617] rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{title}</h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  )
}
