// import Link from 'next/link';
import data from './data.json';

export default async function Index() {
  return (
    <div className='w-full'>
      <div className='animate-in opacity-0 max-w-4xl mx-auto px-3 py-8 lg:py-12 text-foreground'>
        <h1 className='text-3xl font-bold mb-4'>Honours Board</h1>
        <p className='mb-8'>Writeups moving here soon!</p>

        <div className='lg:mb-12'>
          <table className='table-auto w-full text-sm md:text-base'>
            <thead>
              <tr className='text-left border-b'>
                <th className='p-2'>Year</th>
                <th className='p-2'>Winner</th>
                <th className='p-2 hidden md:table-cell'>Second</th>
                <th className='p-2'>Venue</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry) => (
                <tr key={entry.year} className='even:bg-foreground/5'>
                  <td className='p-2'>{entry.year}</td>
                  <td className='p-2'>{entry.winner}</td>
                  <td className='p-2 hidden md:table-cell'>
                    {entry.second || ''}
                  </td>
                  <td className='p-2'>{entry.venue || ''}</td>
                  {/* <td className='text-right'>
                    {entry.link ? (
                      <Link href={entry.link}>Read report &rarr;</Link>
                    ) : (
                      ''
                    )}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
