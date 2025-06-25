"use client"

import { useEffect, useState } from "react"

interface NetworkSVGProps {
  className?: string
}

export function NetworkSVG({ className = "" }: NetworkSVGProps) {
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Variable ajustable para la visibilidad del SVG
  const SVG_VISIBILITY = 0.3 // Ajusta este valor entre 0.1 (muy sutil) y 1.0 (muy visible)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(window.scrollY / totalHeight, 1)
      setScrollY(window.scrollY)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Ajustar opacidad basado en la variable y el scroll
  const getParticleOpacity = () => {
    return (0.4 + scrollProgress * 0.3) * SVG_VISIBILITY
  }

  const getNodeOpacity = () => {
    return (0.15 + scrollProgress * 0.15) * SVG_VISIBILITY
  }

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none z-3 ${className}`}>
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "120vw",
          height: "120vh",
          transform: `translate(-50%, -50%) translateY(${scrollY * 0.002}px) rotate(${scrollProgress * 0.5}deg)`,
        }}
      >
        {/* Rutas invisibles para las animaciones de partículas */}
        <defs>
          <path id="p1" d="M200,150 C350,180 550,140 600,120 C700,90 800,110 900,140" />
          <path id="p2" d="M600,120 C500,200 450,360 400,400 C350,440 250,480 150,450" />
          <path id="p3" d="M400,400 C350,380 200,420 150,450 C100,480 50,450 20,400" />
          <path id="p4" d="M200,150 C300,250 500,300 650,350 C750,380 850,400 950,420" />
          <path id="p5" d="M150,450 C250,400 400,450 600,400 C750,360 900,380 1000,350" />
          <path id="p6" d="M100,200 C200,300 400,250 600,300 C800,350 950,300 1100,350" />
          <path id="p7" d="M300,100 C400,150 500,200 700,180 C850,160 950,200 1050,250" />
          <path id="p8" d="M50,300 C150,250 300,280 450,320 C600,360 750,340 900,380" />
        </defs>

        {/* Partículas animadas que se mueven por las rutas */}
        <g id="transfers">
          <circle className="fill-[#e60023]" r="2" opacity="0">
            <animateMotion dur="20s" repeatCount="indefinite" calcMode="paced">
              <mpath href="#p1" />
            </animateMotion>
            <animate
              attributeName="opacity"
              values={`0;${getParticleOpacity()};${getParticleOpacity()};0`}
              keyTimes="0;0.3;0.7;1"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>
          <circle className="fill-[#e60023]" r="1.5" opacity="0">
            <animateMotion begin="-4s" dur="20s" repeatCount="indefinite" calcMode="paced">
              <mpath href="#p2" />
            </animateMotion>
            <animate
              attributeName="opacity"
              values={`0;${getParticleOpacity()};${getParticleOpacity()};0`}
              keyTimes="0;0.3;0.7;1"
              dur="20s"
              repeatCount="indefinite"
              begin="-4s"
            />
          </circle>
          <circle className="fill-[#e60023]" r="1.5" opacity="0">
            <animateMotion begin="-8s" dur="20s" repeatCount="indefinite" calcMode="paced">
              <mpath href="#p3" />
            </animateMotion>
            <animate
              attributeName="opacity"
              values={`0;${getParticleOpacity()};${getParticleOpacity()};0`}
              keyTimes="0;0.3;0.7;1"
              dur="20s"
              repeatCount="indefinite"
              begin="-8s"
            />
          </circle>
          <circle className="fill-[#e60023]" r="2" opacity="0">
            <animateMotion begin="-12s" dur="20s" repeatCount="indefinite" calcMode="paced">
              <mpath href="#p4" />
            </animateMotion>
            <animate
              attributeName="opacity"
              values={`0;${getParticleOpacity()};${getParticleOpacity()};0`}
              keyTimes="0;0.3;0.7;1"
              dur="20s"
              repeatCount="indefinite"
              begin="-12s"
            />
          </circle>
          <circle className="fill-[#e60023]" r="1" opacity="0">
            <animateMotion begin="-16s" dur="25s" repeatCount="indefinite" calcMode="paced">
              <mpath href="#p5" />
            </animateMotion>
            <animate
              attributeName="opacity"
              values={`0;${getParticleOpacity() * 0.7};${getParticleOpacity() * 0.7};0`}
              keyTimes="0;0.3;0.7;1"
              dur="25s"
              repeatCount="indefinite"
              begin="-16s"
            />
          </circle>
          <circle className="fill-[#e60023]" r="1" opacity="0">
            <animateMotion begin="-20s" dur="25s" repeatCount="indefinite" calcMode="paced">
              <mpath href="#p6" />
            </animateMotion>
            <animate
              attributeName="opacity"
              values={`0;${getParticleOpacity() * 0.7};${getParticleOpacity() * 0.7};0`}
              keyTimes="0;0.3;0.7;1"
              dur="25s"
              repeatCount="indefinite"
              begin="-20s"
            />
          </circle>
          <circle className="fill-[#e60023]" r="1.2" opacity="0">
            <animateMotion begin="-2s" dur="22s" repeatCount="indefinite" calcMode="paced">
              <mpath href="#p7" />
            </animateMotion>
            <animate
              attributeName="opacity"
              values={`0;${getParticleOpacity() * 0.8};${getParticleOpacity() * 0.8};0`}
              keyTimes="0;0.3;0.7;1"
              dur="22s"
              repeatCount="indefinite"
              begin="-2s"
            />
          </circle>
          <circle className="fill-[#e60023]" r="1.2" opacity="0">
            <animateMotion begin="-10s" dur="22s" repeatCount="indefinite" calcMode="paced">
              <mpath href="#p8" />
            </animateMotion>
            <animate
              attributeName="opacity"
              values={`0;${getParticleOpacity() * 0.8};${getParticleOpacity() * 0.8};0`}
              keyTimes="0;0.3;0.7;1"
              dur="22s"
              repeatCount="indefinite"
              begin="-10s"
            />
          </circle>
        </g>

        {/* Nodos principales */}
        <g id="nodes" opacity={getNodeOpacity()}>
          <circle className="fill-none stroke-[#e60023]" strokeWidth="1" cx="200" cy="150" r="20" />
          <circle className="fill-none stroke-[#e60023]" strokeWidth="1" cx="600" cy="120" r="15" />
          <circle className="fill-none stroke-[#e60023]" strokeWidth="1" cx="400" cy="400" r="25" />
          <circle className="fill-none stroke-[#e60023]" strokeWidth="1" cx="150" cy="450" r="12" />
          <circle className="fill-none stroke-[#e60023]" strokeWidth="1" cx="650" cy="350" r="18" />
          <circle className="fill-none stroke-[#e60023]" strokeWidth="1" cx="300" cy="100" r="14" />
          <circle className="fill-none stroke-[#e60023]" strokeWidth="1" cx="900" cy="200" r="16" />
          <circle className="fill-none stroke-[#e60023]" strokeWidth="1" cx="100" cy="300" r="10" />
        </g>
      </svg>
    </div>
  )
}
