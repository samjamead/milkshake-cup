'use client';

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Index() {
  const supabase = createClientComponentClient();
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);

  const calculatePlayingHandicap = (handicap) => {
    return Math.round((89 / 113) * handicap * 0.95);
  };

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
      const playerData = data.map((player) => ({
        ...player,
        playing_handicap: calculatePlayingHandicap(player.handicap),
      }));

      setProfiles(playerData.sort((a, b) => a.handicap - b.handicap));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-full'>
      <div className='animate-in opacity-0 max-w-4xl mx-auto px-3 py-8 lg:py-12 text-foreground'>
        <h1 className='text-3xl font-bold mb-8'>2023 Leaderboard</h1>
        {error && <div className='text-red-500 mb-4'>{error}</div>}
        <table className='table-auto mb-12'>
          <thead>
            <tr className='border-b'>
              <th className='pr-4 py-2 text-right'></th>
              <th className='pl-4 py-2 text-right'></th>
              <th className='px-2 py-2 text-right'></th>
              <th className='px-4 py-2 text-right'>Rd. 1</th>
              <th className='px-4 py-2 text-right'>Rd. 2</th>
              <th className='px-4 py-2 text-right'>Total</th>
            </tr>
          </thead>
          <tbody>
            {profiles &&
              profiles.map(({ name, playing_handicap }, index) => (
                <tr className='even:bg-foreground/10' key={name}>
                  <td className='pr-4 py-2 text-right'>{index + 1}.</td>
                  <td className='pl-4 py-2 text-left'>{name}</td>
                  <td className='px-2 py-2 text-right text-sm'>
                    ({playing_handicap})
                  </td>
                  <td className='px-4 py-2 text-right'>--</td>
                  <td className='px-4 py-2 text-right'>--</td>
                  <td className='px-4 py-2 text-right'>--</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
