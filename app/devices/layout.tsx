import type { Metadata } from 'next'
 
// These styles apply to every route in the application
import './big.css'
 
export const metadata: Metadata = {
  title: 'My devices',
  description: 'What do I use?',
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