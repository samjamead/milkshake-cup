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
            Ladies and gentlemen, it is an honour to be welcoming you all back
            for the 13th Milkshake Cup.{' '}
          </p>
          <p>
            A star on the shirt - oh what a thing to behold! I imagine that my
            delight at being crowned champion can only be matched by your
            surprise! And yet it should not be so - for year after year we are
            reminded that to win here is to most fully embody the spirit of the
            cup!
          </p>
          <p>
            It would be remiss of me not to toast Appin - I know you are here in
            spirit and we look forward to welcoming you back next year. We shall
            send you our sticky wicket entries for judging!
          </p>{' '}
          <p>For the rest of you - play well and look for the spirit!</p>
        </div>
        <p className='text-sm text-foreground/80'>
          &mdash;Harry Langdon, 2023 Milkshake Cup Champion
        </p>
      </div>
    </div>
  )
}
