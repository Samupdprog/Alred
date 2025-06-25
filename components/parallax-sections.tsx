"use client"

import { useEffect, useState } from "react"

export function ParallaxEffects() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Elementos parallax para la sección de proceso */}
      <div className="fixed inset-0 pointer-events-none z-4 overflow-hidden">
        {/* Círculos flotantes que se mueven con parallax */}
        <div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-[#e60023]/10 to-purple-500/10 blur-xl"
          style={{
            top: "60%",
            left: "10%",
            transform: `translateY(${scrollY * 0.15}px) translateX(${Math.sin(scrollY * 0.002) * 20}px)`,
          }}
        />
        <div
          className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-xl"
          style={{
            top: "70%",
            right: "15%",
            transform: `translateY(${scrollY * -0.12}px) translateX(${Math.cos(scrollY * 0.003) * 15}px)`,
          }}
        />
        <div
          className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-[#e60023]/8 to-pink-500/8 blur-2xl"
          style={{
            top: "80%",
            left: "50%",
            transform: `translateY(${scrollY * 0.08}px) translateX(${Math.sin(scrollY * 0.001) * 30}px)`,
          }}
        />

        {/* Formas geométricas */}
        <div
          className="absolute w-16 h-16 border border-[#e60023]/20 rotate-45"
          style={{
            top: "65%",
            right: "25%",
            transform: `translateY(${scrollY * 0.1}px) rotate(${45 + scrollY * 0.05}deg)`,
          }}
        />
        <div
          className="absolute w-12 h-12 border border-purple-500/20"
          style={{
            top: "75%",
            left: "20%",
            transform: `translateY(${scrollY * -0.08}px) rotate(${scrollY * 0.03}deg)`,
          }}
        />

        {/* Líneas decorativas */}
        <svg
          className="absolute"
          style={{
            top: "60%",
            left: "30%",
            width: "200px",
            height: "100px",
            transform: `translateY(${scrollY * 0.06}px) rotate(${scrollY * 0.02}deg)`,
          }}
        >
          <path d="M0,50 Q50,10 100,50 T200,50" fill="none" stroke="rgba(230, 0, 35, 0.1)" strokeWidth="2" />
          <path d="M0,60 Q50,20 100,60 T200,60" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1" />
        </svg>

        {/* Partículas flotantes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#e60023]/30 rounded-full"
            style={{
              top: `${65 + i * 3}%`,
              left: `${15 + i * 8}%`,
              transform: `translateY(${scrollY * (0.04 + i * 0.01)}px) translateX(${Math.sin(scrollY * 0.001 + i) * 10}px)`,
            }}
          />
        ))}

        {/* Elementos para la sección de contacto */}
        <div
          className="absolute w-28 h-28 rounded-full bg-gradient-to-br from-[#e60023]/15 to-orange-500/15 blur-xl"
          style={{
            top: "85%",
            right: "10%",
            transform: `translateY(${scrollY * 0.18}px) scale(${1 + Math.sin(scrollY * 0.001) * 0.1})`,
          }}
        />
        <div
          className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/12 to-purple-500/12 blur-lg"
          style={{
            top: "90%",
            left: "25%",
            transform: `translateY(${scrollY * -0.14}px) rotate(${scrollY * 0.04}deg)`,
          }}
        />

        {/* Hexágono animado */}
        <svg
          className="absolute w-16 h-16"
          style={{
            top: "88%",
            right: "30%",
            transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.06}deg)`,
          }}
        >
          <polygon points="8,2 14,6 14,14 8,18 2,14 2,6" fill="none" stroke="rgba(230, 0, 35, 0.15)" strokeWidth="1" />
        </svg>
      </div>
    </>
  )
}
