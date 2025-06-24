export function Chosen() {
  const stats = [
    { number: "100+", label: "Projetos Entregues" },
    { number: "50+", label: "Clientes Satisfeitos" },
    { number: "5+", label: "Anos de Experiência" },
    { number: "24/7", label: "Suporte Disponível" },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-[#92d81e] to-[#438e00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Por que nos escolher?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Somos especialistas em transformar ideias em soluções digitais de sucesso
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/90 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
