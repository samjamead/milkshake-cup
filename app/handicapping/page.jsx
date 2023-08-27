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
        <h1 className='text-3xl font-bold mb-8'>2023 Handicaps</h1>

        {error && <div className='text-red-500 mb-4'>{error}</div>}

        <p className='mb-4'>
          Course handicap ={' '}
          <span className='font-mono text-sm ml-4 px-2 py-1 rounded-md bg-foreground/20'>
            handicap index x (slope rating / 113)
          </span>
        </p>
        <p className='mb-8'>
          Playing handicap ={' '}
          <span className='font-mono text-sm ml-4 px-2 py-1 rounded-md bg-foreground/20'>
            course handicap x 0.95
          </span>
        </p>
        <p className='mb-4'>
          The Village Course seems to have a slope rating of 99... For
          reference:{' '}
        </p>

        <ul className='list-disc pl-6 mb-4'>
          <li className='pl-4'>The average golf course is 113</li>
          <li className='pl-4'>Kirkbymoorside off yellows is 121</li>
          <li className='pl-4'>RND off yellows is 128</li>
          <li className='pl-4'>RND off juniors is 104</li>
        </ul>

        <div className='flex flex-row items-center gap-4 mb-4'>
          <label htmlFor='rating-slider' className='inline'>
            Edit rating:
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

        <table className='table-auto'>
          <thead>
            <tr className='border-b'>
              <th className='px-4 text-left'></th>
              <th className='px-4 text-right'>Index</th>

              <th className='px-4 text-right'>Course Handicap</th>

              <th className='px-4 text-right'>Playing Handicap</th>

              <th className='px-4 text-right'>Rounded</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map(
              ({ name, handicap, course_handicap, playing_handicap }) => (
                <tr className='even:bg-foreground/10' key={name}>
                  <td className='px-4 text-left'>{name}</td>
                  <td className='px-4 text-right'>{handicap.toFixed(1)}</td>
                  <td className='px-4 text-right'>
                    {course_handicap?.toFixed(1)}
                  </td>
                  <td className='px-4 text-right'>
                    {playing_handicap?.toFixed(1)}
                  </td>
                  <td className='px-4 text-right'>
                    {Math.round(playing_handicap)}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
