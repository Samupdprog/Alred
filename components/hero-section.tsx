"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { NetworkSVG } from "@/components/network-svg"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, hasIntersected } = useIntersectionObserver()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative z-10">
      <NetworkSVG />
      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="text-center">
          <div
            className={`inline-flex items-center gap-2 bg-[#e60023]/10 border border-[#e60023]/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <Sparkles className="h-4 w-4 text-[#e60023] animate-pulse" />
            <span className="text-sm text-gray-300">Tu aliado en páginas web, dashboards y automatización con IA</span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Transforma tu negocio con{" "}
            <span className="relative inline-block">
              <span className="text-[#e60023] bg-gradient-to-r from-[#e60023] via-[#ff4757] to-[#e60023] bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                webs de impacto
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
            </span>{" "}
            y procesos automáticos
          </h1>

          <p
            className={`text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            En Alred, con sede en Tenerife, creamos tu presencia online en Canarias y optimizamos tu operación interna con dashboards intuitivos y flujos de trabajo automatizados, potenciados por inteligencia artificial.
          </p>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <Button
              size="lg"
              className="bg-[#e60023] hover:bg-[#c5001e] text-white px-8 py-4 text-lg font-semibold rounded-full group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#e60023]/25"
            >
              Empieza ahora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        <div
          ref={ref}
          className={`mt-20 relative transition-all duration-1000 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#e60023]/20 to-purple-600/20 rounded-3xl blur-3xl animate-pulse"></div>
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-[#e60023]/30 transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="text-3xl font-bold text-[#e60023] mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={2025} suffix="" />
                </div>
                <div className="text-gray-400">Iniciamos este proyecto con visión a largo plazo</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-[#e60023] mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={24} suffix="/7" />
                </div>
                <div className="text-gray-400">Soporte disponible</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-[#e60023] mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={99} suffix="%" />
                </div>
                <div className="text-gray-400">Satisfacción del cliente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
