export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0f0f23] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#92d81e] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white">Carregando...</p>
      </div>
    </div>
  )
}
