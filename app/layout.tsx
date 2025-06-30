import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://alred.es'),
  title: 'Alred | Soluciones Web, Automatización e IA en Tenerife',
  description: 'Alred: expertos en desarrollo web, automatización de procesos e inteligencia artificial en Tenerife. Impulsa tu empresa con tecnología innovadora.',
  generator: 'Alred',
  keywords: [
    'soluciones web',
    'automatización',
    'inteligencia artificial',
    'IA',
    'Tenerife',
    'desarrollo web',
    'empresa tecnológica',
    'automatizaciones',
    'n8n',
    'digitalización',
    'Canarias'
  ],
  openGraph: {
    title: 'Alred | Soluciones Web, Automatización e IA en Tenerife',
    description: 'Expertos en desarrollo web, automatización e inteligencia artificial para empresas en Tenerife y Canarias.',
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/Logo_Alred.svg" />
      </head>
      <body>
        {children}
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
