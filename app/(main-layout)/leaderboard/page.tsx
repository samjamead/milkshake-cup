'use client'

import { useEffect, useState, useCallback } from 'react'

type MessageRowProps = {
  message: string
}

const MessageRow = ({ message }: MessageRowProps) => (
  <tr className='border-t border-foreground/50'>
    <td colSpan={4} className='py-6 text-center text-sm'>
      {message}
    </td>
  </tr>
)

export type LeaderboardRow = {
  player: string
  thru: string
  net_to_par: string
}

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardRow[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const updateLeaderboard = async () => {
    setIsError(false)
    setIsLoading(true)
    setTimeout(async () => {
      try {
        const response = await fetch(
          'https://opensheet.elk.sh/1HHomcApRYcviI5uLXkKXPNKRs12J1InhSwwU1_bDatg/liveleader'
        )
        const data = await response.json()
        setLeaderboard(data)
      } catch (error) {
        console.error('Error updating leaderboard:', error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }, 800)
  }

  useEffect(() => {
    updateLeaderboard()
  }, [])

  return (
    <div className='animate-in flex flex-col gap-6 py-6 lg:gap-12 lg:py-12'>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-semibold md:text-2xl'>Live Leaderboard</h2>
        <button
          type='button'
          className='rounded border px-3 py-1 text-sm disabled:opacity-50'
          onClick={() => updateLeaderboard()}
          disabled={isLoading}
          aria-label='Refresh leaderboard'
        >
          Refresh
        </button>
      </div>

      <div className='w-full rounded-md border border-foreground/50'>
        <table className='w-full'>
          <thead>
            <tr>
              <td className='p-3 md:pl-5'>Rank</td>
              <td className='p-3'>Player</td>
              <td className='p-3 text-right'>Thru</td>
              <td className='p-3 text-right md:pr-5'>Net score to par</td>
            </tr>
          </thead>
          <tbody>
            {isLoading && <MessageRow message='Fetching latest scores...' />}
            {isError && (
              <MessageRow message='Error fetching latest scores, sorry!' />
            )}
            {!isLoading && !isError && leaderboard.length === 0 && (
              <MessageRow message='No data available.' />
            )}

            {leaderboard.length > 0 &&
              leaderboard
                .sort((a, b) => parseInt(a.net_to_par) - parseInt(b.net_to_par))
                .map((row, index) => (
                  <tr
                    key={row.player}
                    className='border-t border-foreground/50'
                  >
                    <td className='p-3 md:pl-5'>{index + 1}</td>
                    <td className='p-3'>{row.player}</td>
                    <td className='p-3 text-right font-mono'>{row.thru}</td>
                    <td className='p-3 text-right font-mono md:pr-5'>
                      {row.net_to_par}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
