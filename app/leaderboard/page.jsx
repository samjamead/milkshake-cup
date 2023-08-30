'use client';

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';

export default function Index() {
  const supabase = createClientComponentClient();
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const { data, error: fetchError } = await supabase
      .from('profiles')
      .select();

    if (fetchError) {
      setError('Failed to fetch data. Please try again later.');
      console.error(fetchError);
      return;
    }

    if (data) {
      data.sort((a, b) => {
        if (a.total_net && !b.total_net) return -1;

        if (b.total_net && !a.total_net) return 1;

        if (a.total_net && b.total_net) return a.total_net - b.total_net;

        return a.handicap - b.handicap;
      });

      setProfiles(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-full'>
      <div className='animate-in opacity-0 max-w-4xl mx-auto px-3 py-8 lg:py-12 text-foreground'>
        <h1 className='text-3xl font-bold mb-8'>2023 Leaderboard</h1>
        <p className='mb-4'>
          <Link href='/handicapping' className='underline'>
            How the handicaps were calculated
          </Link>{' '}
          &rarr;
        </p>
        {error && <div className='text-red-500 mb-4'>{error}</div>}
        <table className='table-auto mb-12'>
          <thead>
            <tr className='border-b'>
              <th className='pr-4 py-2 text-right'></th>
              <th className='pl-4 py-2 text-right'></th>
              <th className='px-2 py-2 text-right'></th>
              <th className='px-4 md:pl-16 py-2 text-sm text-right text-foreground/40'>
                Rd. 1 gross
              </th>

              <th className='px-4 md:pl-16 py-2 text-sm text-right'>
                Rd. 1 net
              </th>
              <th className='px-4 py-2 text-sm text-right text-foreground/40'>
                Rd. 2 gross
              </th>
              <th className='px-4 py-2 text-sm text-right'>Rd. 2 net</th>
              <th className='px-4 py-2 text-sm text-right text-foreground/40'>
                Total gross
              </th>
              <th className='px-4 py-2 text-sm text-right'>Total net</th>
            </tr>
          </thead>
          <tbody>
            {profiles &&
              profiles.map((player, index) => (
                <tr className='even:bg-foreground/5' key={player.name}>
                  <td className='pr-4 py-2 text-right'>{index + 1}.</td>
                  <td className='pl-4 py-2 text-left'>{player.name}</td>
                  <td className='px-2 py-2 text-right text-sm'>
                    ({player.playing_handicap})
                  </td>
                  <td className='px-4 py-2 text-right text-foreground/40'>
                    {player.rd1_gross}
                  </td>
                  <td className='px-4 py-2 text-right'>{player.rd1_net}</td>
                  <td className='px-4 py-2 text-right text-foreground/40'>
                    {player.rd2_gross}
                  </td>
                  <td className='px-4 py-2 text-right'>{player.rd2_net}</td>
                  <td className='px-4 py-2 text-right text-foreground/40'>
                    {player.total_gross}
                  </td>
                  <td className='px-4 py-2 text-right'>{player.total_net}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
