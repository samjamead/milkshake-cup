import Link from 'next/link'
import Nav from './nav'
import Image from 'next/image'
import logoWhite from '@/public/logo_white.svg'

export default function Header() {
  return (
    <div className='w-full'>
      <div className='mx-auto flex max-w-4xl items-baseline justify-between gap-8 py-5'>
        <Link
          href='/'
          className='group flex items-baseline justify-start gap-6 text-lg'
        >
          <Image src={logoWhite} alt='logo' height={48} width={48} />
          <span className='hidden group-hover:underline md:inline-block'>
            The Milkshake Cup
          </span>
        </Link>

        <Nav />
      </div>
    </div>
  )
}
