"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Puedo combinar planes o añadir módulos extra?",
      answer:
        "Sí, todas las opciones son 100% modulares. Podemos ajustar cualquier módulo de automatización, IA o integración a tu medida.",
    },
    {
      question: "¿Cómo se factura el soporte?",
      answer: "El soporte estándar está incluido en todos los planes; el soporte 24/7 tiene otro coste.",
    },
    {
      question: "¿Qué tiempo de entrega tienen los proyectos?",
      answer: "Depende del poryecto y las funcionales que se quieran tener. Un proyecto medio con una web y unas cuantas funcionalidades tarda aproximadamente de 3 a 4 semanas.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Preguntas <span className="text-[#e60023]">frecuentes</span>
          </h2>
          <p className="text-xl text-gray-400">Resolvemos las dudas más comunes sobre nuestros servicios</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-[#e60023]/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-[#e60023] transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
