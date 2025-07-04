import './globals.css'

export const metadata = {
  title: 'ERS Maternity and Pediatric Care Clinic',
  description: 'Caring for Mothers & Babies',
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 