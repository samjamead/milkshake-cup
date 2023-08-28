'use client';

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

const calculatePlayingHandicap = (handicap) => {
  return Math.round((89 / 113) * handicap * 0.95);
};

const fetchPlayerData = async () => {
  const { data, error: fetchError } = await supabase.from('profiles').select();
  if (fetchError) {
    console.error(fetchError);
    throw new Error('Failed to fetch data. Please try again later.');
  }
  return data.map((player) => ({
    ...player,
    playing_handicap: calculatePlayingHandicap(player.handicap),
  }));
};

export default function Index() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [scoreChanges, setScoreChanges] = useState({});

  useEffect(() => {
    fetchPlayerData()
      .then((data) => setPlayers(data.sort((a, b) => a.handicap - b.handicap)))
      .catch((error) => setError(error.message));
  }, []);

  const handleScoreChange = (event, playerId, round) => {
    const newScore = event.target.value;
    setScoreChanges((prev) => ({
      ...prev,
      [playerId]: {
        ...prev[playerId],
        [round]: newScore,
      },
    }));
  };

  const calculateNetScore = (grossScore, handicap, round) => {
    const halfHandicap = Math.floor(handicap / 2);
    const adjustedHandicap =
      round === 'round1' ? halfHandicap + (handicap % 2) : halfHandicap;
    return grossScore - adjustedHandicap;
  };

  // const submitScores = () => {
  //   const upsertPayload = Object.entries(scoreChanges).map(
  //     ([playerId, rounds]) => {
  //       return {
  //         id: playerId,
  //         grossRound1: rounds.round1,
  //         netRound1: calculateNetScore(
  //           rounds.round1,
  //           players.find((p) => p.id === playerId).playing_handicap,
  //           'round1'
  //         ),
  //         grossRound2: rounds.round2,
  //         netRound2: calculateNetScore(
  //           rounds.round2,
  //           players.find((p) => p.id === playerId).playing_handicap,
  //           'round2'
  //         ),
  //       };
  //     }
  //   );

  //   console.log(upsertPayload);
  // };

  return (
    <div className='w-full'>
      <div className='animate-in opacity-0 max-w-4xl mx-auto px-3 py-8 lg:py-12 text-foreground'>
        <h1 className='text-3xl font-bold mb-8'>2023 Leaderboard</h1>
        {error && <div className='text-red-500 mb-4'>{error}</div>}
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Handicap</th>
              <th>Gross Round 1</th>
              <th>Gross Round 2</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.playing_handicap}</td>
                <td>
                  <input
                    type='number'
                    defaultValue={player.grossRound1}
                    onChange={(e) => handleScoreChange(e, player.id, 'round1')}
                    className='text-background'
                  />
                </td>
                <td>
                  <input
                    type='number'
                    defaultValue={player.grossRound2}
                    onChange={(e) => handleScoreChange(e, player.id, 'round2')}
                    className='text-background'
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={submitScores}>Submit Scores</button>
      </div>
    </div>
  );
}
