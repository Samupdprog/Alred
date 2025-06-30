"use client"

import { useState, useEffect } from "react"
import { X, Cookie, Shield, BarChart3, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("alred-cookie-consent")
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    setPreferences(allAccepted)
    saveCookiePreferences(allAccepted)
    setIsVisible(false)
  }

  const handleAcceptSelected = () => {
    saveCookiePreferences(preferences)
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    setPreferences(onlyEssential)
    saveCookiePreferences(onlyEssential)
    setIsVisible(false)
  }

  const saveCookiePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("alred-cookie-consent", JSON.stringify(prefs))
    localStorage.setItem("alred-cookie-timestamp", new Date().toISOString())

    // Here you would typically initialize your analytics/marketing scripts
    if (prefs.analytics) {
      // Initialize Google Analytics or other analytics
      console.log("Analytics cookies accepted")
    }
    if (prefs.marketing) {
      // Initialize marketing pixels, etc.
      console.log("Marketing cookies accepted")
    }
    if (prefs.functional) {
      // Initialize functional cookies
      console.log("Functional cookies accepted")
    }
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "essential") return // Can't disable essential cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-md">
        <Card className="border-2 border-red-500/20 bg-white/95 backdrop-blur-lg shadow-2xl">
          <CardContent className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 rounded-lg">
                  <Cookie className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Gestión de Cookies</h3>
                  <p className="text-sm text-gray-600">Respetamos tu privacidad</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Main Content */}
            {!showDetails ? (
              <div className="space-y-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Utilizamos cookies para mejorar tu experiencia, analizar el tráfico del sitio y personalizar el
                  contenido. Puedes aceptar todas las cookies o personalizar tus preferencias.
                </p>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Button onClick={handleAcceptAll} className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                      Aceptar Todas
                    </Button>
                    <Button
                      onClick={handleRejectAll}
                      variant="outline"
                      className="flex-1 border-gray-300 hover:bg-gray-50 bg-transparent"
                    >
                      Solo Esenciales
                    </Button>
                  </div>
                  <Button
                    onClick={() => setShowDetails(true)}
                    variant="ghost"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Personalizar Cookies
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-3">
                  {/* Essential Cookies */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-green-600" />
                      <div>
                        <p className="font-medium text-sm text-gray-900">Cookies Esenciales</p>
                        <p className="text-xs text-gray-600">Necesarias para el funcionamiento básico</p>
                      </div>
                    </div>
                    <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                      Siempre activas
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-4 h-4 text-blue-600" />
                      <div>
                        <p className="font-medium text-sm text-gray-900">Cookies de Análisis</p>
                        <p className="text-xs text-gray-600">Nos ayudan a mejorar el sitio web</p>
                      </div>
                    </div>
                    <button
                      onClick={() => togglePreference("analytics")}
                      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                        preferences.analytics ? "bg-red-600" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                          preferences.analytics ? "translate-x-5" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Settings className="w-4 h-4 text-purple-600" />
                      <div>
                        <p className="font-medium text-sm text-gray-900">Cookies de Marketing</p>
                        <p className="text-xs text-gray-600">Para contenido personalizado</p>
                      </div>
                    </div>
                    <button
                      onClick={() => togglePreference("marketing")}
                      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                        preferences.marketing ? "bg-red-600" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                          preferences.marketing ? "translate-x-5" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Functional Cookies */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Cookie className="w-4 h-4 text-orange-600" />
                      <div>
                        <p className="font-medium text-sm text-gray-900">Cookies Funcionales</p>
                        <p className="text-xs text-gray-600">Para funciones avanzadas del sitio</p>
                      </div>
                    </div>
                    <button
                      onClick={() => togglePreference("functional")}
                      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                        preferences.functional ? "bg-red-600" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                          preferences.functional ? "translate-x-5" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button onClick={handleAcceptSelected} className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                    Guardar Preferencias
                  </Button>
                  <Button
                    onClick={() => setShowDetails(false)}
                    variant="outline"
                    className="border-gray-300 hover:bg-gray-50"
                  >
                    Volver
                  </Button>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Puedes cambiar tus preferencias en cualquier momento desde la configuración.{" "}
                <a href="/privacy" className="text-red-600 hover:text-red-700 underline">
                  Política de Privacidad
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
