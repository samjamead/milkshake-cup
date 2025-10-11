import champ from '@/public/img/2025champ.jpeg'
import Link from 'next/link'
import Image from 'next/image'
import logoWhite from '@/public/logo_white.svg'
import { ArrowRightIcon } from 'lucide-react'

// inspired by https://www.theguardian.com/news/ng-interactive/2025/sep/16/song-chun-zhu-why-one-of-the-worlds-most-brilliant-ai-scientists-left-the-us-for-china

export const SubtitleBlock = () => {
  const heroLinks = [
    {
      name: 'Report',
      link: '/2025',
    },
    {
      name: 'Honours Board',
      link: '/honours',
    },
  ]

  return (
    <div className='gap-2 border-t border-foreground/25 md:grid md:h-40 md:grid-cols-2 md:gap-0 lg:grid-cols-[3fr_2fr]'>
      <div className='border-r border-foreground/25 bg-purple-500/20 px-4 py-6 md:bg-transparent md:py-3'>
        <p className='lg:text-lg lg:font-medium'>
          Alan wins his third Milkshake Cup. The spirit of the cup is alive and
          well &ndash; it&apos;s hard to tell which Al is happier!
        </p>
      </div>
      <ul className='border-t border-foreground/25 text-sm md:border-r md:border-t-0'>
        {heroLinks.map(({ name, link }) => {
          return (
            <li
              key={name}
              className='first-of-type:border-b first-of-type:border-foreground/25'
            >
              <Link
                href={link}
                className='group flex items-center justify-between gap-8 p-4 text-sm font-medium'
              >
                <p>{name}</p>
                <span className='block transition-all group-hover:translate-x-2 md:pr-6'>
                  <ArrowRightIcon strokeWidth={3} className='h-4 w-4' />
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function Hero() {
  return (
    <div className='flex flex-col border-b border-foreground/25 lg:flex-row'>
      <div className='hidden grow flex-col justify-between lg:flex'>
        <div className='h-40 border-b border-foreground/25' />
        <div className='h-40 border-t border-foreground/25' />
      </div>
      <div className='w-full max-w-6xl md:grid md:grid-cols-2 lg:grid-cols-[1fr_auto]'>
        <div className='flex flex-col justify-between'>
          <div className='border-b border-foreground/25 p-4 md:h-40'>
            <Link
              href='/'
              className='group flex items-center justify-start gap-4'
            >
              <Image
                src={logoWhite}
                alt='logo'
                width={48}
                style={{ height: 'auto' }}
                priority
              />
              <span className='hidden pt-2 group-hover:underline md:inline-block'>
                The Milkshake Cup
              </span>
            </Link>
          </div>
          <div className='flex grow flex-col justify-center space-y-2 bg-purple-500/20 p-4'>
            <p className='text-xs uppercase text-foreground/70'>
              Hoebridge Golf Centre, Surrey
            </p>
            <h2 className='text-xl font-bold leading-tight md:text-4xl'>
              Congratulations 2025 champion! Alan takes it with a one shot win
              over Josh and Jamie
            </h2>
          </div>
          <div className='hidden lg:block'>
            <SubtitleBlock />
          </div>
        </div>
        <div className='bg-blue-500'>
          <Image
            src={champ}
            width={500}
            height={700}
            alt='The 2025 champion'
            className='ml-auto h-full w-full object-cover'
          />
        </div>
      </div>
      <div className='hidden grow flex-col justify-between lg:flex'>
        <div className='h-40 border-b border-foreground/25' />
        <div className='h-40 border-t border-foreground/25' />
      </div>
      <div className='lg:hidden'>
        <SubtitleBlock />
      </div>
    </div>
  )
}
