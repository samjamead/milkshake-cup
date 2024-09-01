import { QuoteIcon } from 'lucide-react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import trophy from '@/public/img/2022trophy.jpeg'

export default function AnnualWelcome({
  name,
  year,
  image = trophy,
  children,
}: {
  name: string
  year: string
  image?: string | StaticImport
  children: React.ReactNode
}) {
  return (
    <div className='mb-8 flex flex-col items-stretch justify-between border-2 border-black lg:flex-row-reverse'>
      <div className='relative basis-2/5 rounded-r-md bg-purple-300/20'>
        <Image
          src={image}
          fill={true}
          alt={`The ${year} Champion`}
          className='rounded-lg border-l-black object-cover'
        />
      </div>
      <div className='flex flex-1 flex-col justify-between gap-8 rounded-l-md bg-purple-300/20 p-5'>
        <h2 className='text-xs font-bold uppercase tracking-wider lg:text-sm'>
          Welcome from the defending champion
        </h2>
        <div className='flex flex-col gap-4 pr-6'>
          <QuoteIcon className='scale-x-[-1]' />
          {children}
        </div>
        <p className='text-sm text-foreground/80'>
          &mdash;{name}, {year} Milkshake Cup Champion
        </p>
      </div>
    </div>
  )
}
