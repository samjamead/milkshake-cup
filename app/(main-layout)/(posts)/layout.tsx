import '@/app/(main-layout)/(posts)/posts.css'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='w-full'>
      <article className='pb-24 pt-16'>{children}</article>
    </div>
  )
}
