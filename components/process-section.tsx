
"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Palette, Code, Cog, Rocket } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function ProcessSection() {
  const { ref: sectionRef, hasIntersected: sectionVisible } = useIntersectionObserver()

  const steps = [
    {
      icon: Search,
      title: "Consultoría inicial",
      description: "Definimos objetivos, audiencia y flujos críticos.",
      number: "01",
    },
    {
      icon: Palette,
      title: "Diseño UX/UI",
      description: "Wireframes, prototipos y tests de usabilidad.",
      number: "02",
    },
    {
      icon: Code,
      title: "Desarrollo e integración",
      description: "Construcción front-end, back-end, API y conexiones externas.",
      number: "03",
    },
    {
      icon: Cog,
      title: "Automatización y pruebas",
      description: "Configuramos workflows e IA, test de rendimiento.",
      number: "04",
    },
    {
      icon: Rocket,
      title: "Lanzamiento y formación",
      description: "Puesta en producción, monitorización y capacitación a tu equipo.",
      number: "05",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 relative overflow-hidden">
      {/* Efectos parallax de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#e60023]/5 blur-2xl animate-pulse"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-purple-500/5 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-[#e60023]/3 blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Proceso de <span className="text-[#e60023]">trabajo</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Un proceso estructurado y transparente para garantizar el éxito de tu proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`bg-gray-900/50 border-gray-800 hover:border-[#e60023]/50 transition-all duration-500 group relative overflow-hidden hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#e60023]/10 ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: sectionVisible ? `${index * 150}ms` : "0ms",
                transitionDuration: "700ms",
              }}
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-[#e60023]/10 group-hover:text-[#e60023]/20 transition-colors">
                {step.number}
              </div>
              <CardContent className="p-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#e60023]/10 flex items-center justify-center mb-4 group-hover:bg-[#e60023]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <step.icon className="h-6 w-6 text-[#e60023] group-hover:animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#e60023] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
