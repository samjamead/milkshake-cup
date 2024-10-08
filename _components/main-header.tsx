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
          className='group flex items-baseline justify-start gap-6'
        >
          <Image
            src={logoWhite}
            alt='logo'
            width={48}
            style={{ height: 'auto' }}
            priority
          />
          <span className='hidden group-hover:underline md:inline-block'>
            The Milkshake Cup
          </span>
        </Link>

        <Nav />
      </div>
    </div>
  )
}
