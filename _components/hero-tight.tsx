import champ from '@/public/img/2025champ.jpeg'
import Link from 'next/link'
import Image from 'next/image'
import logoWhite from '@/public/logo_white.svg'

export default function Hero() {
  return (
    <div className='flex border-b border-foreground/25'>
      <div className='flex grow flex-col justify-between'>
        <div className='h-40 border-b border-foreground/25' />
        <div className='h-32 border-t border-foreground/25' />
      </div>
      <div className='grid w-full max-w-4xl grid-cols-[1fr_auto]'>
        <div className='flex flex-col justify-between'>
          <div className='h-40 border-b border-foreground/25 p-4'>
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
                className='border-4 border-black'
              />
              <span className='hidden group-hover:underline md:inline-block'>
                The Milkshake Cup
              </span>
            </Link>
          </div>
          <div className='flex grow flex-col justify-center space-y-2 bg-purple-500/20 p-4'>
            <p className='text-xs uppercase text-foreground/70'>
              Hoebridge Golf Centre, Surrey
            </p>
            <h2 className='text-3xl font-bold'>
              Congratulations to the 2025 champion Alan Mead: One shot win over
              Josh and Jamie
            </h2>
          </div>
          <div className='grid h-32 grid-cols-[3fr_2fr] gap-2 border-t border-foreground/25'>
            <div className='border-r border-foreground/25 px-4 py-3'>
              <p className=''>
                Alan takes his third Milkshake Cup. The spirit of the cup is
                that you wouldn&apos;t know who won if you didn&apos;t know
                their names...
              </p>
            </div>
            <div className='p-2 text-sm'>
              <p>
                <Link href='/leaderboard' className='text-sm'>
                  Scores
                </Link>
              </p>
              <p>
                <Link href='/honours' className='text-sm'>
                  Honours Board
                </Link>
              </p>
            </div>
          </div>
        </div>

        <Image
          src={champ}
          width={400}
          height={400}
          alt='The 2025 champion'
          className='ml-auto'
        />
      </div>
      <div className='flex grow flex-col justify-between'>
        <div className='h-40 border-b border-foreground/25' />
        <div className='h-32 border-t border-foreground/25' />
      </div>
    </div>
  )
}
