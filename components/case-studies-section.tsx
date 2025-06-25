"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function CaseStudiesSection() {
  const cases = [
    {
      company: "La Baranda.",
      quote: "Con Alred mejoramos la gestión de reservas, ayudando al personal y acelerando los procesos.",
      industry: "Restauración",
    },
    {
      company: "EcoFashion",
      quote:
        "Su automatización con IA nos permitió reducir un 40% la carga operativa y mejorar la experiencia del cliente.",
      industry: "E-commerce",
    },
  ]

  return (
    <section id="casos" className="py-20 px-4 sm:px-6 lg:px-8 mb-0 pb-0">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Casos de <span className="text-[#e60023]">éxito</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubre cómo hemos ayudado a nuestros clientes a transformar sus negocios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((case_, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-[#e60023]/50 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-[#e60023] mb-4" />
                <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">"{case_.quote}"</blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white group-hover:text-[#e60023] transition-colors">
                      {case_.company}
                    </div>
                    <div className="text-sm text-gray-400">{case_.industry}</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#e60023]/10 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#e60023]"></div>
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
