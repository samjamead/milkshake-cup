import champ from '@/public/img/2025champ.jpeg'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='flex flex-col items-stretch justify-between rounded-xl bg-purple-300/20 p-4 pb-8 shadow-md md:gap-6 md:rounded-r-md md:p-6 lg:flex-row'>
      <div className='flex flex-1 flex-col justify-between gap-2'>
        <h2 className='text-xs font-bold uppercase tracking-wider'>
          Welcome from the defending champion
        </h2>
        <div className='flex flex-col gap-2'>
          <h2 className='text-lg font-bold leading-tight md:text-xl'>
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
        <p className='text-sm text-foreground/80'>
          &mdash;Alan Mead, 2025 Milkshake Cup Champion
        </p>
      </div>
      <div className='flex basis-2/5 items-center justify-center'>
        <Image
          src={champ}
          width={400}
          height={400}
          alt='The 2025 champion'
          className='rounded-lg'
        />
      </div>
    </div>
  )
}
