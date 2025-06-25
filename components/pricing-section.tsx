"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function PricingSection() {
  const { ref: titleRef, hasIntersected: titleVisible } = useIntersectionObserver()
  const { ref: cardsRef, hasIntersected: cardsVisible } = useIntersectionObserver()

  const plans = [
    {
      name: "Básico",
      price: "49",
      description: "Pequeños negocios y autónomos",
      features: ["Hasta 5 páginas públicas", "Formulario de contacto", "Dashboard inicial", "1 workflow automatizado"],
      popular: false,
    },
    {
      name: "Profesional",
      price: "99",
      description: "Pymes con necesidades medias",
      features: [
        "Hasta 15 páginas públicas",
        "Sistema de reservas o tienda básica",
        "Dashboard avanzado",
        "5 workflows + IA ligera",
        "2 integraciones externas",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "199",
      description: "Grandes empresas y franquicias",
      features: [
        "Páginas ilimitadas",
        "E-commerce completo",
        "Dashboards personalizados",
        "Workflows ilimitados + IA avanzada",
        "Integraciones a medida",
        "Soporte 24/7",
      ],
      popular: false,
    },
  ]

  return (
    <section id="planes" className="py-20 px-4 sm:px-6 lg:px-8 mb-20">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Planes y{" "}
            <span className="text-[#e60023] bg-gradient-to-r from-[#e60023] to-[#ff4757] bg-clip-text text-transparent">
              precios
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Elige el plan que mejor se adapte a las necesidades de tu negocio
          </p>
          <p className="text-sm text-gray-500">*Precios sin IVA. Suscripciones mínimas de 6 meses.</p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-gray-900/50 border-gray-800 hover:border-[#e60023]/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-[#e60023]/20 ${
                plan.popular ? "ring-2 ring-[#e60023]/50 scale-105 hover:scale-110" : "hover:scale-105"
              } ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: cardsVisible ? `${index * 200}ms` : "0ms",
                transitionDuration: "800ms",
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <div className="bg-[#e60023] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Star className="h-3 w-3 animate-spin" />
                    Más popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white group-hover:text-[#e60023] transition-colors duration-300">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-400 mb-4">{plan.description}</CardDescription>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-[#e60023] group-hover:scale-110 transition-transform duration-300">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-1">€/mes</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`flex items-start transition-all duration-300 ${
                        cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                      }`}
                      style={{ transitionDelay: `${index * 200 + featureIndex * 100}ms` }}
                    >
                      <Check className="h-5 w-5 text-[#e60023] mr-3 mt-0.5 flex-shrink-0 group-hover:animate-pulse" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full transform hover:scale-105 transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#e60023] hover:bg-[#c5001e] text-white shadow-lg hover:shadow-[#e60023]/30"
                      : "bg-transparent border border-[#e60023] text-[#e60023] hover:bg-[#e60023] hover:text-white"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Contratar ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
