export type LeaderboardRow = {
  player: string
  thru: string
  net_to_par: string
}

export default async function Leaderboard() {
  const data = await fetch(
    'https://opensheet.elk.sh/1lvgWl71GMc_8VAHN85Iu9HH5NVwKFuPflPzX-HhyrgI/liveleader'
  ).then((res) => res.json())

  return (
    <div className='animate-in flex flex-col gap-6 py-6 lg:gap-12 lg:py-12'>
      <h2 className='text-xl font-semibold'>Live Leaderboard</h2>
      <div className='flex'>
        <div className='rounded-md border border-foreground/50'>
          <table>
            <thead>
              <tr>
                <td className='p-3'>Rank</td>
                <td className='p-3'>Player</td>
                <td className='p-3 text-right'>Thru</td>
                <td className='p-3 text-right'>Net score to par</td>
              </tr>
            </thead>
            <tbody>
              {data
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
    </div>
  )
}
