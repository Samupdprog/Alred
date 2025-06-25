"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, BarChart3, Bot, ArrowRight } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function ServicesSection() {
  const { ref: titleRef, hasIntersected: titleVisible } = useIntersectionObserver()
  const { ref: cardsRef, hasIntersected: cardsVisible } = useIntersectionObserver()

  const services = [
    {
      icon: Globe,
      title: "Desarrollo de Sitios Web Públicos",
      description: "Diseñamos experiencias digitales profesionales, modernas y estéticas para tu público.",
      features: [
        "Diseño a medida: estética moderna, responsive y centrada en la experiencia de usuario",
        "Landings y catálogos: desde restaurantes y cafeterías hasta tiendas online",
        "Optimización SEO: para que te encuentren en Google desde el primer día",
        "Integración de reservas y formularios: recoge datos y gestiona citas directamente en tu web",
      ],
      buttonText: "Solicitar presupuesto",
      gradient: "from-[#e60023]/20 to-orange-500/20",
    },
    {
      icon: BarChart3,
      title: "Dashboards y Gestión de Procesos",
      description: "Optimiza tu operación interna con paneles intuitivos y control total de tus procesos.",
      features: [
        "Paneles interactivos: visualiza tus métricas clave en tiempo real",
        "Control de tareas y proyectos: asigna, supervisa y reporta sin salir de tu panel",
        "Gestión de clientes y proveedores: base de datos centralizada, filtros y búsquedas avanzadas",
        "Informes automatizados: recibe reportes periódicos por email o en tu propia plataforma",
      ],
      buttonText: "Contactanos",
      gradient: "from-blue-500/20 to-[#e60023]/20",
    },
    {
      icon: Bot,
      title: "Automatización Inteligente (con IA)",
      description: "Potencia tu negocio con inteligencia artificial y automatización avanzada.",
      features: [
        "Workflows automáticos: dispara acciones según reglas personalizadas",
        "Chatbots y asistentes: atención al cliente 24/7 mediante IA conversacional",
        "Análisis predictivo: toma decisiones basadas en datos y machine learning",
        "Integraciones: conecta tu web y tu dashboard con CRM, ERP y otras herramientas",
      ],
      buttonText: "Automatiza tu negocio",
      gradient: "from-purple-500/20 to-[#e60023]/20",
    },
  ]

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Nuestros{" "}
            <span className="text-[#e60023] bg-gradient-to-r from-[#e60023] to-[#ff4757] bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluciones integrales para transformar tu presencia digital y optimizar tus procesos internos
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-gray-900/50 border-gray-800 hover:border-[#e60023]/50 transition-all duration-500 group immersive-card depth-shadow hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#e60023]/10 ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: cardsVisible ? `${index * 200}ms` : "0ms",
                transitionDuration: "800ms",
              }}
            >
              <CardHeader>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-float`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <service.icon className="h-8 w-8 text-white group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-[#e60023] transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`text-sm text-gray-300 flex items-start transition-all duration-300 ${
                        cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                      }`}
                      style={{ transitionDelay: `${index * 200 + featureIndex * 100}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-[#e60023] rounded-full mt-2 mr-3 flex-shrink-0 group-hover:animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-transparent border-[#e60023] text-[#e60023] hover:bg-[#e60023] hover:text-white group/button transform hover:scale-105 transition-all duration-300"
                >
                  <a href="#contacto">
                    {service.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
