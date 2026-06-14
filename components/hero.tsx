import Image from 'next/image'
import Link from 'next/link'

import { ArrowRightIcon } from 'lucide-react'

import champ from '@/public/img/2026champ.jpeg'
import logoWhite from '@/public/logo_white.svg'

// inspired by https://www.theguardian.com/news/ng-interactive/2025/sep/16/song-chun-zhu-why-one-of-the-worlds-most-brilliant-ai-scientists-left-the-us-for-china

export const SubtitleBlock = () => {
  const heroLinks = [
    {
      name: '2026 Report',
      link: '/2026',
    },
    {
      name: 'Honours Board',
      link: '/honours',
    },
  ]

  return (
    <div className='border-foreground/25 gap-2 border-t md:grid md:h-40 md:grid-cols-2 md:gap-0 lg:grid-cols-[3fr_2fr]'>
      <div className='border-foreground/25 border-r bg-purple-500/20 px-4 py-6 md:bg-transparent md:py-3'>
        <p className='lg:text-lg lg:font-medium'>
          See you next year in Northumberland, the country with the lowest population density in the UK. Can&apos;t wait!
        </p>
      </div>
      <ul className='border-foreground/25 border-t text-sm md:border-t-0 md:border-r'>
        {heroLinks.map(({ name, link }) => {
          return (
            <li
              key={name}
              className='first-of-type:border-foreground/25 first-of-type:border-b'
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
    <div className='border-foreground/25 flex flex-col border-b lg:flex-row'>
      <div className='hidden grow flex-col justify-between lg:flex'>
        <div className='border-foreground/25 h-40 border-b' />
        <div className='border-foreground/25 h-40 border-t' />
      </div>
      <div className='w-full max-w-6xl md:grid md:grid-cols-2 lg:grid-cols-[1fr_auto]'>
        <div className='flex flex-col justify-between'>
          <div className='border-foreground/25 border-b p-4 md:h-40'>
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
          <div className='flex grow flex-col justify-center space-y-6 bg-purple-500/20 p-4'>
            <h2 className='text-lg leading-tight font-bold md:text-2xl'>
              TRAIN TRACK JACK WINS BY TWO
            </h2>
            <p className='text-xl'>A new name on the trophy! Jack Walsh wins on debut by holding off all challengers in the final round six-ball...</p>
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
        <div className='border-foreground/25 h-40 border-b' />
        <div className='border-foreground/25 h-40 border-t' />
      </div>
      <div className='lg:hidden'>
        <SubtitleBlock />
      </div>
    </div>
  )
}
