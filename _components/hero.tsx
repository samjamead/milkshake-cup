import champ from '@/public/img/2025champ.jpeg'
import { Star } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='flex flex-col items-stretch justify-between border-2 border-black lg:flex-row-reverse'>
      <div className='flex flex-1 flex-col justify-between gap-8 rounded-t-md bg-purple-300/20 p-4 pb-8 md:rounded-r-md md:p-6'>
        <h2 className='rounded bg-purple-500/10 p-3 text-center text-xs font-bold uppercase tracking-wider lg:text-sm'>
          CONGRATULATIONS TO THE 2025 CHAMPION
        </h2>
        <div className='flex flex-col gap-4'>
          {/* <Star className='scale-x-[-1]' /> */}
          <p>Alan Mead, three time champion!</p>
        </div>
        <p className='text-sm text-foreground/80'>
          One shot win over Josh Taylor and Jamie Mead
        </p>
      </div>
      <div className='basis-2/5 rounded-r-md bg-purple-300/20'>
        <Image
          src={champ}
          width='400'
          height={400}
          alt='The 2025 champion'
          className='rounded-lg border-r-black lg:border-r-4'
        />
      </div>
    </div>
  )
}
