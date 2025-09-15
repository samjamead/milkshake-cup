'use client'

import stats from '../../_data/stats.json'
import scores2025 from '../../_data/2025-scores.json'
import * as d3 from 'd3'

export default function Page() {
  // Process 2025 data from hole-by-hole scores
  const process2025Data = () => {
    const players = [...new Set(scores2025.map((d) => d.player))]
    const playerTotals = players.map((player) => {
      const playerData = scores2025.filter((d) => d.player === player)
      // net_to_par is cumulative, so the final hole (18) has the total
      const finalHole = playerData.find((d) => d.hole === 18)
      const netToPar = finalHole?.net_to_par || 0
      const gross = playerData.reduce((sum, hole) => sum + hole.gross, 0)
      const handicap = playerData[0].handicap

      return {
        year: 2025,
        player: player,
        netToPar: netToPar,
        netScore: gross - handicap,
        handicap: handicap,
      }
    })

    // Sort by net to par and assign places
    return playerTotals
      .sort((a, b) => a.netToPar - b.netToPar)
      .map((player, index) => ({
        ...player,
        place: index + 1,
      }))
  }

  const stats2025 = process2025Data()
  const allStats = [...stats, ...stats2025]

  const yearMap = d3.group(allStats, (d) => d.year)
  const playerMap = d3.group(allStats, (d) => d.player)

  const years = Array.from(yearMap.keys())
  const players = Array.from(playerMap.keys())

  const scoreSummaries = years
    .map((year) => {
      const scores = yearMap
        .get(year)
        ?.sort(
          (a, b) =>
            (typeof a.place === 'number' ? a.place : 0) -
            (typeof b.place === 'number' ? b.place : 0)
        )

      if (!scores || scores.length === 0) {
        return {
          year,
          runners: 0,
          winner: null,
          winningScore: null,
          winningMargin: null,
          fieldQuality: null,
        }
      }

      const runners = scores.length
      const winner = scores.find((d) => d?.place === 1)?.player || null

      // Fix winning margin calculation - should compare netToPar, not netScore
      const winnerScore = scores.find((d) => d?.place === 1)?.netToPar
      const secondPlaceScore = scores.find((d) => d?.place === 2)?.netToPar
      const winningMargin =
        winnerScore !== undefined && secondPlaceScore !== undefined
          ? secondPlaceScore - winnerScore
          : null

      const winningScore = winnerScore !== undefined ? winnerScore : null
      const fieldQuality = d3.mean(scores, (d) => d.netToPar) || null

      return {
        year,
        runners,
        winner,
        winningScore,
        winningMargin,
        fieldQuality,
      }
    })
    .filter((d) => d.fieldQuality)

  return (
    <div className='w-full py-8 lg:py-12'>
      <div className='animate-in flex flex-col gap-4 lg:gap-8'>
        <h2 className='text-2xl font-bold'>Stats</h2>
        <p>
          {allStats.length} results from {players.length} players across{' '}
          {years.length} years
        </p>
        <p>Lowest winning net score: -2 (Samuel Smith, 2020)</p>
        <p>Greatest margin of victory: 9 (Samuel Smith, 2020)</p>
        <p>Tightest margin of victory: Playoff! (Alan Mead, 2022)</p>
        <p>
          Worst defence of title: 7th (Sam Mead, 2022; Alistair Shepherd, 2025)
        </p>
        <p>
          Biggest year on year improvement: 9th to CHAMP (Harry Langdon,
          2022-2023; Alistair Shepherd 2023-2024)
        </p>

        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-3'>
            <h3 className='text-lg font-semibold'>What wins?</h3>
            <p>Play to your handicap and you&apos;ll be in with a chance:</p>
            <p className='text-sm text-foreground/80'>
              All scores are net to par
            </p>
          </div>

          <div className='rounded border'>
            <table className='w-full text-sm'>
              <thead>
                <tr>
                  <td className='p-3 pt-4 leading-4'>Year</td>
                  <td className='p-3 pt-4 leading-4'>Winner</td>
                  <td className='p-3 pt-4 text-right leading-4'>Entrants</td>
                  <td className='p-3 pt-4 text-right leading-4'>
                    Winning score
                  </td>
                  <td className='p-3 pt-4 text-right leading-4'>
                    Margin of victory
                  </td>
                  <td className='p-3 pt-4 text-right leading-4'>
                    Average score
                  </td>
                </tr>
              </thead>
              <tbody>
                {scoreSummaries.map((entry) => {
                  return (
                    <tr
                      key={entry.year}
                      className='border-t border-foreground/20'
                    >
                      <td className='px-3 py-2'>{entry.year}</td>
                      <td className='px-3 py-2'>{entry.winner}</td>
                      <td className='px-3 py-2 text-right'>{entry.runners}</td>
                      <td className='px-3 py-2 text-right'>
                        {entry.winningScore}
                      </td>
                      <td className='px-3 py-2 text-right'>
                        {entry.winningMargin}
                      </td>
                      <td className='px-3 py-2 text-right'>
                        {entry.fieldQuality?.toFixed(1)}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
