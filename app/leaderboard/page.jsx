'use client';

import { useState, useEffect, useMemo } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Index() {
  const supabase = createClientComponentClient();

  const [rawProfiles, setRawProfiles] = useState([]);
  const [slopeRating, setSlopeRating] = useState(99);
  const [error, setError] = useState(null);

  const profiles = useMemo(() => {
    return rawProfiles.map((player) => {
      let course_handicap = (slopeRating / 113) * player.handicap;
      let playing_handicap = 0.95 * course_handicap;
      return {
        ...player,
        course_handicap,
        playing_handicap,
      };
    });
  }, [rawProfiles, slopeRating]);

  const fetchData = async () => {
    let { data, error } = await supabase.from('profiles').select();

    if (error) {
      setError('Failed to fetch data. Please try again later.');
      console.error(error);
      return;
    }

    if (data) {
      setRawProfiles(data.sort((a, b) => a.handicap - b.handicap));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleSliderChange(e) {
    e.preventDefault();
    setSlopeRating(e.target.value);
  }

  return (
    <div className='w-full'>
      <div className='animate-in opacity-0 max-w-4xl mx-auto px-3 py-8 lg:py-12 text-foreground'>
        <h1 className='text-3xl font-bold mb-8'>2023 Leaderboard</h1>
        <h2 className='text-xl font-bold mb-4'>Handicaps</h2>

        {error && <div className='text-red-500 mb-4'>{error}</div>}

        <p className='mb-4'>
          Course handicap = (slope rating / 113) x handicap index
        </p>
        <p className='mb-4'>Playing handicap = course handicap x 0.95</p>
        <p className='mb-4'>
          Odd playing handicaps get the extra shot in round 1
        </p>
        <div className='flex flex-row items-center gap-4 mb-4'>
          <label htmlFor='rating-slider' className='inline'>
            The Village Course rating:
          </label>
          <input
            type='range'
            id='rating-slider'
            defaultValue={99}
            min={90}
            max={113}
            onChange={handleSliderChange}
            aria-label='Slope Rating Slider'
          />
          <span>{slopeRating}</span>
        </div>

        <ol className='list-decimal pl-8'>
          {profiles.map(
            ({ name, handicap, course_handicap, playing_handicap }) => (
              <li key={name}>
                {name} ({handicap.toFixed(1)}) &rarr;{' '}
                {course_handicap?.toFixed(1)} &rarr;{' '}
                {playing_handicap?.toFixed(1)} &rarr;{' '}
                {Math.round(playing_handicap)}
              </li>
            )
          )}
        </ol>
      </div>
    </div>
  );
}
