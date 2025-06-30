"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MessageSquare, ArrowRight } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { ContactForm } from "./contact-form"
import { FormField, FormItem, FormLabel, FormControl, Input, FormMessage } from "@/components/ui/form"

export function ContactSection() {
  const { ref: sectionRef, hasIntersected: sectionVisible } = useIntersectionObserver()

  const contactMethods = [
    {
      icon: Mail,
      title: "Correo electrónico",
      value: "alredspd@gmail.com",
      action: "Enviar email",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+34 683 382 977",
      action: "Llamar ahora",
    },
    {
      icon: MessageSquare,
      title: "Formulario",
      value: "Contacto directo",
      action: "Contactar",
    },
  ]

  return (
    <section ref={sectionRef} id="contacto" className="py-0 px-4 sm:px-6 lg:px-8 relative overflow-hidden pb-20 mt-20">
      {/* Efectos parallax de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-10 w-36 h-36 rounded-full bg-gradient-to-br from-[#e60023]/8 to-purple-500/8 blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-10 left-10 w-28 h-28 rounded-full bg-gradient-to-br from-blue-500/8 to-[#e60023]/8 blur-xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-20 h-20 border border-[#e60023]/20 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Listo para transformar tu <span className="text-[#e60023]">negocio</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Contáctanos hoy mismo y descubre cómo Alred puede llevarte al siguiente nivel digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className={`bg-gray-900/50 border-gray-800 hover:border-[#e60023]/50 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#e60023]/10 ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: sectionVisible ? `${index * 200}ms` : "0ms",
                transitionDuration: "700ms",
              }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#e60023]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#e60023]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <method.icon className="h-8 w-8 text-[#e60023] group-hover:animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 mb-4">{method.value}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-[#e60023] text-[#e60023] hover:bg-[#e60023] hover:text-white group/button transform hover:scale-105 transition-all duration-300"
                >
                  {method.action}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Formulario con margen inferior */}
        <div className="mb-12">
          <ContactForm />
        </div>

        {/* Call to action */}
        <div
          className={`text-center transition-all duration-1000 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="inline-block p-0">
            <h3 className="text-2xl font-bold text-white mb-4">Comienza tu transformación digital hoy</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Agenda una consulta gratuita y descubre el potencial de tu negocio
            </p>
            <a
              href="#contacto"
              className="bg-[#e60023] hover:bg-[#c5001e] text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#e60023]/30 inline-block"
            >
              Agenda tu consulta gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
