import honours from '../../_data/honours.json'
import spiritHonours from '../../_data/spiritHonours.json'

export default async function Index() {
  return (
    <div className='w-full py-8 lg:py-12'>
      <div className='animate-in flex flex-col gap-4 text-foreground opacity-0 lg:gap-8'>
        <h1 className='mb-4 text-2xl font-bold'>Honours Board</h1>

        <div className='lg:mb-12'>
          <table className='mb-8 w-full table-auto text-xs md:text-sm'>
            <thead>
              <tr className='border-b text-left'>
                <th className='p-2'>Year</th>
                <th className='p-2'>Venue</th>
                <th className='p-2'>Winner</th>
                <th className='hidden p-2 md:table-cell'>Runner up</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {honours.map((entry) => (
                <tr key={entry.year} className='even:bg-foreground/5'>
                  <td className='p-2'>{entry.year}</td>
                  <td className='p-2'>{entry.venue || ''}</td>
                  <td className='p-2 font-medium'>{entry.winner}</td>
                  <td className='hidden p-2 md:table-cell'>
                    {entry.second || ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='lg:mb-12'>
          <h3 className='mb-2'>The Spirit of The Cup Trophy</h3>
          <table className='mb-8 w-full table-auto text-xs md:text-sm'>
            <thead>
              <tr className='border-b text-left'>
                <th className='p-2'>Year</th>
                <th className='p-2'>Venue</th>
                <th className='p-2'>Winner</th>
                <th className='hidden p-2 md:table-cell'>Points</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {spiritHonours.map((entry) => (
                <tr key={entry.year} className='even:bg-foreground/5'>
                  <td className='p-2'>{entry.year}</td>
                  <td className='p-2'>{entry.venue || ''}</td>
                  <td className='p-2 font-medium'>{entry.winner}</td>
                  <td className='hidden p-2 md:table-cell'>
                    {entry.points || ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
