'use client'

import stats from '../../_data/stats.json'
import * as d3 from 'd3'

export default function Page() {
  const yearMap = d3.group(stats, (d) => d.year)
  console.log(yearMap)
  const playerMap = d3.group(stats, (d) => d.player)

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
      const winningMargin =
        scores.length > 1 &&
        scores[0]?.netScore !== undefined &&
        scores[1]?.netScore !== undefined
          ? scores[1].netScore - scores[0].netScore
          : null
      const winningScore = d3.min(scores, (d) => d.netToPar) || null
      console.log(year, winningScore)
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
          {stats.length} results from {players.length} players across{' '}
          {years.length} years
        </p>
        <p>Lowest winning net score: -2 (Samuel Smith, 2020)</p>
        <p>Greatest margin of victory: 9 (Samuel Smith, 2020)</p>
        <p>Tightest margin of victory: Playoff! (Alan Mead, 2022)</p>
        <p>Worst defence of title: 7th (Sam Mead, 2022)</p>
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
