import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'stakataka',
  description: 'Created with Liebe',
  generator: 'Hooman',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
