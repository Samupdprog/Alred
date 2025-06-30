"use client"

import { useState } from "react"
import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCookies } from "@/hooks/use-cookies"

export function CookieSettings() {
  const { preferences, resetConsent } = useCookies()
  const [showReset, setShowReset] = useState(false)

  if (!preferences) return null

  const handleResetConsent = () => {
    resetConsent()
    setShowReset(false)
    // Reload page to show cookie banner again
    window.location.reload()
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setShowReset(!showReset)}
        className="text-gray-600 hover:text-red-600 text-xs"
      >
        <Cookie className="w-3 h-3 mr-1" />
        Configurar Cookies
      </Button>

      {showReset && (
        <div className="absolute bottom-full mb-2 left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-[200px]">
          <p className="text-xs text-gray-600 mb-2">¿Quieres cambiar tus preferencias de cookies?</p>
          <div className="flex gap-2">
            <Button size="sm" onClick={handleResetConsent} className="text-xs bg-red-600 hover:bg-red-700">
              Reconfigurar
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setShowReset(false)} className="text-xs">
              Cancelar
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
