"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Zap, TrendingUp, Headphones, Sparkles } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function BenefitsSection() {
  const { ref: titleRef, hasIntersected: titleVisible } = useIntersectionObserver()
  const { ref: cardsRef, hasIntersected: cardsVisible } = useIntersectionObserver()

  const benefits = [
    {
      icon: CheckCircle,
      title: "Solución integral",
      description: "De la web pública al core de tu gestión",
    },
    {
      icon: Zap,
      title: "UI/UX de alto nivel",
      description: "Interfaces limpias, coherentes y centradas en el usuario",
    },
    {
      icon: TrendingUp,
      title: "Escalabilidad",
      description: "Tus procesos crecen y evolucionan sin romper la experiencia",
    },
    {
      icon: Headphones,
      title: "Soporte premium",
      description: "Acompañamiento continuo y formación para tu equipo",
    },
    {
      icon: Sparkles,
      title: "Innovación constante",
      description: "Incorporamos IA y últimas tendencias tecnológicas",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Beneficios de elegir{" "}
            <span className="text-[#e60023] bg-gradient-to-r from-[#e60023] to-[#ff4757] bg-clip-text text-transparent">
              Alred
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trabajamos contigo para crear soluciones que realmente transformen tu negocio
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`bg-gray-900/30 backdrop-blur-sm border-gray-800 hover:border-[#e60023]/50 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#e60023]/10 ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: cardsVisible ? `${index * 150}ms` : "0ms",
                transitionDuration: "700ms",
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#e60023]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e60023]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <benefit.icon className="h-6 w-6 text-[#e60023] group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#e60023] transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
