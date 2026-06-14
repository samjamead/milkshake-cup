import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Milkshake Cup',
  description: "The game's a bogey",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} flex min-h-screen w-full flex-col justify-start font-light`}
      >
        <main className='w-full'>{children}</main>
      </body>
    </html>
  )
}
