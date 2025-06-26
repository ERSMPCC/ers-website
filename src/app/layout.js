import './globals.css'

export const metadata = {
  title: 'ERS Maternity and Pediatric Care Clinic',
  description: 'Caring for Mothers & Babies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 