"use client"

import { useEffect, useState } from "react"

interface AnimatedSVGProps {
  className?: string
}

export function FloatingElements({ className = "" }: AnimatedSVGProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Círculos flotantes */}
      <svg
        className="absolute top-20 left-10 w-32 h-32 text-[#e60023]/10"
        style={{
          transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`,
        }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
        <circle
          cx="50"
          cy="50"
          r="25"
          fill="currentColor"
          opacity="0.3"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </svg>

      {/* Líneas onduladas */}
      <svg
        className="absolute top-40 right-20 w-48 h-24 text-purple-500/10"
        style={{
          transform: `translateY(${scrollY * -0.15}px) translateX(${Math.sin(scrollY * 0.01) * 10}px)`,
        }}
        viewBox="0 0 200 100"
      >
        <path
          d="M0,50 Q50,10 100,50 T200,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse"
        />
        <path
          d="M0,60 Q50,20 100,60 T200,60"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="1"
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </svg>

      {/* Hexágonos */}
      <svg
        className="absolute bottom-40 left-1/4 w-20 h-20 text-[#e60023]/15"
        style={{
          transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * -0.03}deg)`,
        }}
        viewBox="0 0 100 100"
      >
        <polygon
          points="50,5 85,25 85,75 50,95 15,75 15,25"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse"
        />
      </svg>

      {/* Partículas pequeñas */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#e60023]/20 rounded-full animate-pulse"
          style={{
            top: `${20 + i * 15}%`,
            right: `${10 + i * 8}%`,
            transform: `translateY(${scrollY * (0.05 + i * 0.02)}px)`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  )
}

export function InteractiveGrid({ className = "" }: AnimatedSVGProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full text-gray-800/30"
        style={{
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

export function CodeElements({ className = "" }: AnimatedSVGProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Brackets animados */}
      <svg
        className="absolute top-32 right-10 w-16 h-24 text-[#e60023]/20"
        style={{
          transform: `translateY(${scrollY * 0.12}px)`,
        }}
        viewBox="0 0 40 60"
      >
        <path d="M10,5 L5,5 L5,55 L10,55" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
        <path
          d="M30,5 L35,5 L35,55 L30,55"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </svg>

      {/* Elementos de código */}
      <div
        className="absolute bottom-32 right-1/4 text-purple-400/30 font-mono text-sm"
        style={{
          transform: `translateY(${scrollY * -0.08}px)`,
        }}
      >
        <div className="animate-pulse" style={{ animationDelay: "0s" }}>
          {"<div>"}
        </div>
        <div className="animate-pulse ml-4" style={{ animationDelay: "0.3s" }}>
          {"className="}
        </div>
        <div className="animate-pulse" style={{ animationDelay: "0.6s" }}>
          {"</div>"}
        </div>
      </div>
    </div>
  )
}
