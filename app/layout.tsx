import type { Metadata } from 'next'
import React from "react"
import './globals.css'
import Script from 'next/script'
import { CookieBanner } from "@/components/cookie-banner"

export const metadata: Metadata = {
  metadataBase: new URL('https://alred.es'),
  title: 'Desarrollo Web y Automatizaciones en Canarias | Alred',
  description: 'Especialistas en desarrollo web, automatizaciones empresariales e inteligencia artificial en Canarias. Digitaliza tu empresa con Alred.',
  keywords: [
    'desarrollo web canarias',
    'automatizaciones empresariales canarias',
    'n8n canarias',
    'automatización de procesos canarias',
    'digitalización empresas canarias'
  ],
  openGraph: {
    title: 'Alred | Desarrollo Web y Automatizaciones en Canarias',
    description: 'Soluciones web, automatización e inteligencia artificial para empresas en Canarias.',
    url: 'https://alred.es',
    siteName: 'Alred',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/Logo_Alred.svg',
        width: 1000,
        height: 1000,
        alt: 'Logo Alred',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/Logo_Alred.svg" />
        <Script
          type="application/ld+json"
          id="localbusiness-schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Alred",
              url: "https://alred.es",
              logo: "https://alred.es/Logo_Alred.svg",
              description: "Especialistas en desarrollo web y automatizaciones empresariales en Canarias.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Santa Cruz de Tenerife",
                addressRegion: "Canarias",
                addressCountry: "ES",
              },
              areaServed: ["Canarias"],
              makesOffer: [
                {
                  "@type": "Offer",
                  name: "Desarrollo web en Canarias"
                },
                {
                  "@type": "Offer",
                  name: "Automatizaciones empresariales en Canarias"
                }
              ]
            }),
          }}
        />
      </head>
      <body>
        {children}
        <CookieBanner />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-54NPY81TN8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-54NPY81TN8');
          `}
        </Script>
      </body>
    </html>
  )
}
