import Link from 'next/link';
import data from './data.json';

export default async function Index() {
  return (
    <div className='w-full'>
      <div className='animate-in opacity-0 max-w-4xl mx-auto px-3 py-16 lg:py-24 text-foreground'>
        <div className='flex flex-col items-center lg:mb-2'>
          <h2 className='text-3xl font-bold'>The Honours Board</h2>
        </div>

        <div className='w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent' />

        <div className='lg:mb-12'>
          <table className='table-auto w-full'>
            <thead>
              <tr className='text-left'>
                <th>Year</th>
                <th>Winner</th>
                <th>Second</th>
                <th>Venue</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry) => (
                <tr key={entry.year}>
                  <td>{entry.year}</td>
                  <td>{entry.winner}</td>
                  <td>{entry.second || ''}</td>
                  <td>{entry.venue || ''}</td>
                  <td className='text-right'>
                    {entry.link ? (
                      <Link href={entry.link}>Read report &rarr;</Link>
                    ) : (
                      ''
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
