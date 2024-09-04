'use client'

import { useEffect, useState } from 'react'

export type LeaderboardRow = {
  player: string
  thru: string
  net_to_par: string
}

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardRow[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(true)

  const updateLeaderboard = async () => {
    setIsError(false)
    setIsLoading(true)
    setTimeout(async () => {
      try {
        const response = await fetch(
          'https://opensheet.elk.sh/1lvgWl71GMc_8VAHN85Iu9HH5NVwKFuPflPzX-HhyrgI/liveleader'
        )
        const data = await response.json()
        setLeaderboard(data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error updating leaderboard:', error)
        setIsError(true)
      }
    }, 1000)
  }

  useEffect(() => {
    updateLeaderboard()
  }, [])

  return (
    <div className='animate-in flex flex-col gap-6 py-6 lg:gap-12 lg:py-12'>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-semibold'>Live Leaderboard</h2>
        <button
          type='button'
          className='rounded border px-3 py-1 text-sm'
          onClick={() => updateLeaderboard()}
        >
          Refresh
        </button>
      </div>

      <div className='rounded-md border border-foreground/50'>
        <table className='w-full max-w-md'>
          <thead>
            <tr>
              <td className='p-3'>Rank</td>
              <td className='p-3'>Player</td>
              <td className='p-3 text-right'>Thru</td>
              <td className='p-3 text-right'>Net score to par</td>
            </tr>
          </thead>
          <tbody>
            {isError ||
              (isLoading && (
                <tr className='border-t border-foreground/50'>
                  <td colSpan={4} className='py-6 text-center text-sm'>
                    {isError
                      ? 'Error fetching latest scores, sorry!'
                      : 'Fetching latest scores...'}
                  </td>
                </tr>
              ))}
            {leaderboard.length > 0 &&
              leaderboard.length > 0 &&
              leaderboard
                .sort(
                  (a: LeaderboardRow, b: LeaderboardRow) =>
                    parseInt(a.net_to_par) - parseInt(b.net_to_par)
                )
                .map((row: LeaderboardRow, index: number) => {
                  return (
                    <tr
                      key={row.player}
                      className='border-t border-foreground/50'
                    >
                      <td className='p-3'>{index + 1}</td>
                      <td className='p-3'>{row.player}</td>
                      <td className='p-3 text-right font-mono'>{row.thru}</td>
                      <td className='p-3 text-right font-mono'>
                        {row.net_to_par}
                      </td>
                    </tr>
                  )
                })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
