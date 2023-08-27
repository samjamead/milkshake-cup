'use client';

import { useState, useEffect } from 'react';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Index() {
  const supabase = createClientComponentClient();

  const [profiles, setProfiles] = useState();

  const fetchData = async () => {
    let { data, error } = await supabase.from('profiles').select();

    if (error) {
      console.log(error);
    }

    if (data) {
      let sorted_data = data.sort((a, b) => a.handicap - b.handicap);
      setProfiles(sorted_data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 text-foreground'>
        <div className='flex flex-col items-center lg:mb-2'>
          <h2 className='text-3xl font-bold'>2023 Leaderboard</h2>
        </div>

        <div className='w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent' />

        <div className='lg:mb-12'>
          <p>Odd hanciaps get the extra shot in round 1</p>
          <ol className=' list-decimal'>
            {profiles &&
              profiles.map(({ name, handicap }) => {
                return (
                  <li key={name}>
                    {name} ({handicap})
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    </div>
  );
}
