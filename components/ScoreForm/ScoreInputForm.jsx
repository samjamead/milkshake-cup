'use client';

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import styles from './ScoreInputForm.module.css';

export default function ScoreInputForm() {
  const supabase = createClientComponentClient();
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [savingStatus, setSavingStatus] = useState('idle');
  const [scores, setScores] = useState({});

  const calculatePlayingHandicap = (handicap, slope) => {
    return Math.round((slope / 113) * handicap * 0.95);
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
        playing_handicap: calculatePlayingHandicap(player.handicap, 89),
      }));

      setProfiles(playerData.sort((a, b) => a.handicap - b.handicap));
    }
  };

  const upsertData = async (payload) => {
    const { data, error } = await supabase
      .from('profiles')
      .upsert(payload)
      .select();

    if (error) {
      setError(error.message);
    }

    if (data) {
      console.log('Upsert successful', data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (name, round, e) => {
    const newScores = {
      ...scores,
      [name]: { ...scores[name], [round]: parseInt(e.target.value) },
    };
    setScores(newScores);
    setUnsavedChanges(true);
    setSavingStatus('idle');
  };

  const handleSaveClick = async () => {
    setSavingStatus('saving');
    setTimeout(() => {
      setSavingStatus('saved');
      setUnsavedChanges(false);
      const result = profiles.map((profile) => {
        const rd1_gross = scores[profile.name]?.rd1 || null;
        const rd2_gross = scores[profile.name]?.rd2 || null;
        const half_handicap = Math.floor(profile.playing_handicap / 2);
        const extra_shot = profile.playing_handicap % 2;

        let rd1_net = null;
        if (rd1_gross && rd1_gross !== 0) {
          rd1_net = rd1_gross - half_handicap - extra_shot;
        }

        let rd2_net = null;
        if (rd2_gross && rd2_gross !== 0) {
          rd2_net = rd2_gross - half_handicap;
        }

        let total_net = null;
        if (rd1_gross && rd1_gross !== 0 && rd2_gross && rd2_gross !== 0) {
          total_net = rd1_gross + rd2_gross - profile.playing_handicap;
        } else if (rd1_gross && rd1_gross !== 0) {
          total_net = rd1_net;
        }

        return {
          id: profile.id,
          name: profile.name,
          rd1_gross: rd1_gross,
          rd1_net: rd1_net,
          rd2_gross: rd2_gross,
          rd2_net: rd2_net,
          total_gross: (rd1_gross || 0) + (rd2_gross || 0),
          total_net: total_net,
        };
      });

      upsertData(result);
    }, 1500);
  };

  return (
    <div className='w-full'>
      {error && <div className='text-red-500 mb-4'>{error}</div>}
      <table className='table-auto mb-4'>
        <thead>
          <tr className='border-b'>
            <th className='pr-4 py-2 text-right'></th>
            <th className='pl-4 py-2 text-right'></th>
            <th className='px-2 py-2 text-right'></th>
            <th className='px-4 md:pl-16 py-2 text-sm text-right'>Rd. 1</th>
            <th className='px-4 py-2 text-sm text-right'>Rd. 2</th>
            <th className='px-4 py-2 text-sm text-right'>Total</th>
          </tr>
        </thead>
        <tbody>
          {profiles &&
            profiles.map(({ id, name, playing_handicap }, index) => (
              <tr className='even:bg-foreground/5' key={name}>
                <td className='pr-4 py-2 text-right'>{index + 1}.</td>
                <td className='pl-4 py-2 text-left'>{name}</td>
                <td className='px-2 py-2 text-right text-sm'>
                  ({playing_handicap})
                </td>
                <td className='px-4 py-2 text-right'>
                  <input
                    id={`${name}_rd1`}
                    type='number'
                    className={styles.number_input}
                    onChange={(e) => handleInputChange(name, 'rd1', e)}
                  />
                </td>
                <td className='px-4 py-2 text-right'>
                  <input
                    id={`${name}_rd2`}
                    type='number'
                    className={styles.number_input}
                    onChange={(e) => handleInputChange(name, 'rd2', e)}
                  />
                </td>
                <td className='px-4 py-2 text-right'>
                  {(scores[name]?.rd1 || 0) + (scores[name]?.rd2 || 0)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className='flex justify-end'>
        <button
          onClick={handleSaveClick}
          disabled={!unsavedChanges || savingStatus === 'saving'}
          className='py-2 px-4 w-20 h-auto text-slate-50 text-center duration-300 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover disabled:cursor-not-allowed disabled:bg-slate-400/30 disabled:text-gray-400'
        >
          {savingStatus === 'idle' && 'Save'}
          {savingStatus === 'saving' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='animate animate-spin mx-auto text-white'
            >
              <line x1='12' x2='12' y1='2' y2='6' />
              <line x1='12' x2='12' y1='18' y2='22' />
              <line x1='4.93' x2='7.76' y1='4.93' y2='7.76' />
              <line x1='16.24' x2='19.07' y1='16.24' y2='19.07' />
              <line x1='2' x2='6' y1='12' y2='12' />
              <line x1='18' x2='22' y1='12' y2='12' />
              <line x1='4.93' x2='7.76' y1='19.07' y2='16.24' />
              <line x1='16.24' x2='19.07' y1='7.76' y2='4.93' />
            </svg>
          )}
          {savingStatus === 'saved' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mx-auto text-white'
            >
              <path d='M18 6 7 17l-5-5' />
              <path d='m22 10-7.5 7.5L13 16' />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
