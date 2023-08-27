'use client';

import { useState, useEffect, useMemo } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Index() {
  const supabase = createClientComponentClient();

  const [rawProfiles, setRawProfiles] = useState([]);
  const [slopeRating, setSlopeRating] = useState(89);
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
          Course handicap = <br className='md:hidden' />{' '}
          <span className='font-mono text-xs md:text-sm ml-1 px-2 py-1 rounded-md bg-foreground/20'>
            handicap index x (slope rating / 113)
          </span>
        </p>
        <p className='mb-8'>
          Playing handicap =<br className='md:hidden' />{' '}
          <span className='font-mono text-xs md:text-sm ml-1 px-2 py-1 rounded-md bg-foreground/20'>
            course handicap x 0.95
          </span>
        </p>
        <p className='mb-4'>
          The Village Course seems to have a slope rating of 99... For
          reference:{' '}
        </p>

        <ul className='list-disc pl-6 mb-4'>
          <li className='pl-4'>Average course is 113</li>
          <li className='pl-4'>Kirkbymoorside off yellows is 121</li>
          <li className='pl-4'>RND off yellows is 128</li>
          <li className='pl-4'>RND off juniors is 104</li>
        </ul>

        <p className='mb-4'>
          With a slope rating of 99 Alan would have 20 shots; I don&apos;t think
          we can allow a defending champ more than one shot per hole. So to get
          Alan down to 18 and scale everyone else off of that we could edit the
          slope rating down to 89.
        </p>
        <p className='mb-8'>
          Giving Ali and Pin handicap indexes of 40 brings them down to playing
          off 30 and means that if they break 100 (gross) they&apos;ll win 👏
        </p>

        <div className='flex flex-row items-center gap-4 mb-4'>
          <label htmlFor='rating-slider' className='inline'>
            Edit rating:
          </label>
          <input
            type='range'
            id='rating-slider'
            defaultValue={89}
            min={75}
            max={113}
            onChange={handleSliderChange}
            aria-label='Slope Rating Slider'
          />
          <span>{slopeRating}</span>
        </div>

        <table className='table-auto mb-12'>
          <thead>
            <tr className='border-b'>
              <th className='px-4 py-1 text-left'></th>
              <th className='px-4 py-1 text-right'>Index</th>

              <th className='px-4 py-1 text-right'>Course</th>

              <th className='px-4 py-1 text-right'>Playing</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map(
              ({ name, handicap, course_handicap, playing_handicap }) => (
                <tr className='even:bg-foreground/10' key={name}>
                  <td className='px-4 py-1 text-left'>{name}</td>
                  <td className='px-4 py-1 text-right'>
                    {handicap.toFixed(1)}
                  </td>
                  <td className='px-4 py-1 text-right'>
                    {course_handicap?.toFixed(1)}
                  </td>
                  <td className='px-4 py-1 text-right'>
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
