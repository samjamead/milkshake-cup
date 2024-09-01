'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const menuItems = [
  {
    name: 'All',
    link: '/',
  },
  {
    name: 'Writeups',
    link: '/?category=Writeups',
  },
  {
    name: 'Quotes',
    link: '/?category=Quotes',
  },
]

export default function Nav() {
  const searchParams = useSearchParams()

  const category = searchParams.get('category')

  return (
    <nav>
      <ul className='flex items-center justify-between gap-4'>
        {/* {menuItems.map(({ name, link }) => {
          return (
            <li key={name}>
              <Link
                href={link}
                className={`text-sm px-2 py-1 rounded ${
                  category && link.includes(category)
                    ? "text-white font-normal bg-purple-500/30"
                    : "text-foreground/80 hover:text-white hover:bg-purple-500/20"
                }  transition-all`}
              >
                {name}
              </Link>
            </li>
          );
        })} */}
        <li>
          <Link
            href='/leaderboard'
            className={`rounded px-2 py-1 text-sm font-normal text-foreground/80 transition-all hover:bg-purple-500/20 hover:text-white`}
          >
            Leaderboard
          </Link>
        </li>
        <li>
          <Link
            href='/honours'
            className={`rounded px-2 py-1 text-sm font-normal text-foreground/80 transition-all hover:bg-purple-500/20 hover:text-white`}
          >
            Honours Board
          </Link>
        </li>
      </ul>
    </nav>
  )
}
