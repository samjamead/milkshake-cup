'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
const menuItems = [
  {
    name: 'Leaderboard',
    link: '/leaderboard',
  },
  {
    name: 'Honours Board',
    link: '/honours',
  },
]

export default function Nav() {
  const path = usePathname()

  console.log(path)

  return (
    <nav>
      <ul className='flex items-center justify-between gap-4'>
        {menuItems.map(({ name, link }) => {
          return (
            <li key={name}>
              <Link
                href={link}
                className={`rounded px-2 py-1 text-sm ${
                  path && link === path
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
