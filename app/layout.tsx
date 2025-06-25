import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alred',
  description: 'Created by Alred.',
  generator: 'Alred',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="s">
      <body>{children}</body>
    </html>
  )
}
