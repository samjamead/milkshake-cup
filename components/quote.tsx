'use client'

import { useState } from 'react'

import { Minimize2 } from 'lucide-react'

export default function Quote({
  quote,
  attribution,
  attributionLink,
}: {
  quote: string
  attribution: string
  attributionLink?: string
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleOpen = () => {
    setIsOpen(isOpen ? false : true)
  }

  return (
    <div className='relative max-w-prose text-sm'>
      <p className='mb-1 font-light leading-7'>
        {quote.slice(0, isOpen ? quote.length : 150)}

        {!isOpen && quote.length > 150 && (
          <button
            className='ml-1 inline-block rounded bg-gray-600 p-1 align-middle text-xs leading-[6px]'
            onClick={toggleOpen}
          >
            •••
          </button>
        )}
      </p>
      {attributionLink ? (
        <p className='text-foreground/80'>
          &mdash;
          <a
            href={attributionLink}
            target='_blank'
            rel='noreferrer'
            className='hover:underline'
          >
            {attribution}
          </a>
        </p>
      ) : (
        <p className='text-foreground/80'>&mdash;{attribution}</p>
      )}

      {isOpen && (
        <button
          className='absolute bottom-0 right-0 inline-block rounded bg-gray-600 p-1.5'
          onClick={toggleOpen}
        >
          <Minimize2 size={16} />
        </button>
      )}
    </div>
  )
}
