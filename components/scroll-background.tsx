"use client"

import { useEffect, useState } from "react"

export function ScrollBackground() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(window.scrollY / totalHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Crear múltiples capas de gradientes que se mueven independientemente
  const getBackgroundLayers = () => {
    const progress = scrollProgress

    // Capa base que cambia muy sutilmente
    const baseHue = 220 + progress * 40 // De azul oscuro a púrpura
    const baseSaturation = 15 + progress * 10 // Saturación muy baja
    const baseLightness = 8 + Math.sin(progress * Math.PI) * 3 // Oscilación sutil

    // Gradientes flotantes que se mueven
    const gradient1X = 20 + Math.sin(progress * Math.PI * 2) * 30
    const gradient1Y = 30 + Math.cos(progress * Math.PI * 1.5) * 20
    const gradient1Opacity = 0.03 + Math.sin(progress * Math.PI) * 0.02

    const gradient2X = 80 + Math.cos(progress * Math.PI * 1.8) * 25
    const gradient2Y = 70 + Math.sin(progress * Math.PI * 2.2) * 15
    const gradient2Opacity = 0.02 + Math.cos(progress * Math.PI * 1.3) * 0.015

    const gradient3X = 50 + Math.sin(progress * Math.PI * 1.2) * 20
    const gradient3Y = 50 + Math.cos(progress * Math.PI * 1.7) * 25
    const gradient3Opacity = 0.025 + Math.sin(progress * Math.PI * 0.8) * 0.01

    return {
      background: `
        hsl(${baseHue}, ${baseSaturation}%, ${baseLightness}%),
        radial-gradient(circle at ${gradient1X}% ${gradient1Y}%, rgba(230, 0, 35, ${gradient1Opacity}) 0%, transparent 60%),
        radial-gradient(circle at ${gradient2X}% ${gradient2Y}%, rgba(139, 92, 246, ${gradient2Opacity}) 0%, transparent 50%),
        radial-gradient(circle at ${gradient3X}% ${gradient3Y}%, rgba(59, 130, 246, ${gradient2Opacity * 0.8}) 0%, transparent 70%),
        radial-gradient(ellipse at ${50 + progress * 20}% ${30 + progress * 40}%, rgba(230, 0, 35, ${0.01 + progress * 0.02}) 0%, transparent 80%)
      `,
    }
  }

  return (
    <>
      {/* Capa base fija */}
      <div className="fixed inset-0 bg-gray-950 z-0" />

      {/* Capa de gradientes animados */}
      <div
        className="fixed inset-0 pointer-events-none z-1 transition-all duration-500 ease-out"
        style={getBackgroundLayers()}
      />

      {/* Capa de textura sutil */}
      <div
        className="fixed inset-0 pointer-events-none z-2 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.005) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(230, 0, 35, 0.008) 0%, transparent 50%),
            linear-gradient(45deg, transparent 49%, rgba(255, 255, 255, 0.002) 50%, transparent 51%)
          `,
          transform: `translateY(${scrollProgress * 20}px) rotate(${scrollProgress * 0.5}deg)`,
        }}
      />
    </>
  )
}
