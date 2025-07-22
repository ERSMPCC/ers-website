import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ERS Maternity and Pediatric Care Clinic',
  description: 'Caring for Mothers & Babies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  )
} 