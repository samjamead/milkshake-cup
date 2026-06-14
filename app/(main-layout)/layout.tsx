import { Suspense } from 'react'

import Loading from '@/app/loading'
import Footer from '@/components/footer'
import Header from '@/components/main-header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='px-4'>
      <Suspense fallback={<Loading />}>
        <Header />
        <main className='mx-auto w-full max-w-4xl'>{children}</main>
        <Footer />
      </Suspense>
    </div>
  )
}
