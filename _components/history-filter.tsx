'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const menuItems = [
  {
    name: 'All',
    link: '/history',
  },
  {
    name: 'Writeups',
    link: '/history?category=Writeups',
  },
  {
    name: 'Quotes',
    link: '/history?category=Quotes',
  },
]

export default function HistoryFilter() {
  const searchParams = useSearchParams()

  const category = searchParams.get('category')

  return (
    <nav>
      <ul className='flex items-center justify-start gap-4'>
        {menuItems.map(({ name, link }) => {
          return (
            <li key={name}>
              <Link
                href={link}
                className={`rounded px-2 py-1 text-sm first-of-type:-ml-2 ${
                  category && link.includes(category)
                    ? 'bg-purple-500/30 font-normal text-white'
                    : 'text-foreground/80 hover:bg-purple-500/20 hover:text-white'
                } transition-all`}
              >
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
