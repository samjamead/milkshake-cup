import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/_components/footer'
import Header from '@/_components/header'
import { Suspense } from 'react'
import Loading from './loading'

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
        className={`${inter.className} flex min-h-screen w-full flex-col justify-start px-4 font-light`}
      >
        <Suspense fallback={<Loading />}>
          <Header />
          <main className='mx-auto w-full max-w-4xl'>{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
