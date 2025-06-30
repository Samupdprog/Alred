"use client"

import { useState, useEffect } from "react"

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

export function useCookies() {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null)
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const savedPreferences = localStorage.getItem("alred-cookie-consent")
    if (savedPreferences) {
      const prefs = JSON.parse(savedPreferences)
      setPreferences(prefs)
      setHasConsent(true)
    }
  }, [])

  const updatePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences)
    setHasConsent(true)
    localStorage.setItem("alred-cookie-consent", JSON.stringify(newPreferences))
    localStorage.setItem("alred-cookie-timestamp", new Date().toISOString())
  }

  const resetConsent = () => {
    localStorage.removeItem("alred-cookie-consent")
    localStorage.removeItem("alred-cookie-timestamp")
    setPreferences(null)
    setHasConsent(false)
  }

  return {
    preferences,
    hasConsent,
    updatePreferences,
    resetConsent,
    canUseAnalytics: preferences?.analytics || false,
    canUseMarketing: preferences?.marketing || false,
    canUseFunctional: preferences?.functional || false,
  }
}
