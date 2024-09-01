import champ from '@/public/img/2023champ.jpeg'
import { QuoteIcon } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='flex flex-col items-stretch justify-between border-2 border-black lg:flex-row-reverse'>
      <div className='basis-2/5 rounded-r-md bg-purple-300/20'>
        <Image
          src={champ}
          width='400'
          height={400}
          alt='The 2023 champion'
          className='rounded-lg border-l-black lg:border-l-4'
        />
      </div>
      <div className='flex flex-1 flex-col justify-between gap-8 rounded-l-md bg-purple-300/20 p-5'>
        <h2 className='text-xs font-bold uppercase tracking-wider lg:text-sm'>
          Welcome from the defending champion
        </h2>
        <div className='flex flex-col gap-4 pr-6'>
          <QuoteIcon className='scale-x-[-1]' />
          <p>
            The Milkshake Cup has shown each year that it can only be won by the
            person whose soul objective is to have fun. So the question is
            &ndash; how badly do you not want to win it? <br />
            <br /> Good luck out there... this could be our best yet!
          </p>
        </div>
        <p className='text-sm text-foreground/80'>
          &mdash;Harry Langdon, 2023 Milkshake Cup Champion
        </p>
      </div>
    </div>
  )
}
