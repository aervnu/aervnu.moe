import type { Metadata } from 'next'
import { Fira_Sans } from 'next/font/google'

const fira_sans = Fira_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

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