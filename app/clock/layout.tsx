import type { Metadata } from 'next'
 
// These styles apply to every route in the application
import './small.css'
 
export const metadata: Metadata = {
  title: 'Real time system clock',
  description: 'Is it bedtime already?',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}