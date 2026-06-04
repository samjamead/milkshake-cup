import champ from '@/public/img/2025champ.jpeg'
import Link from 'next/link'
import Image from 'next/image'
import logoWhite from '@/public/logo_white.svg'
import { ArrowRightIcon } from 'lucide-react'

// inspired by https://www.theguardian.com/news/ng-interactive/2025/sep/16/song-chun-zhu-why-one-of-the-worlds-most-brilliant-ai-scientists-left-the-us-for-china

export const SubtitleBlock = () => {
  const heroLinks = [
    {
      name: 'Schedule',
      link: '/2026',
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
          The countdown is on for the 6th of June. Waterbridge Golf Club &ndash;
          a new course on the rotation for 2026
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
              WELCOME FROM THE 2025 CHAMPION
            </p>
            <h2 className='text-lg font-bold leading-tight md:text-2xl'>
              ‘And we can be “Heroes”, just for one day’
            </h2>
            <p>So just remember folks, this is special.</p>
            <p>Because this is The Milkshake Cup. </p>
            <p>Stop fussing about handicaps.</p>
            <p>Break out your A game.</p>
            <p>And revel in it!</p>
            <p>Appin, Ali and I are with you in Spirit in 2026.</p>
            <p>And we’re coming for ya in 2027.</p>
            <p>Better make this one count!</p>
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
