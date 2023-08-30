'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function upsertScores(scores) {
  const supabase = createClientComponentClient();

  const calculatePlayingHandicap = (handicap) => {
    return Math.round((89 / 113) * handicap * 0.95);
  };

  console.log(scores);

  // Create payload
  const payload = scores.map((player) => {
    const playingHandicap = calculatePlayingHandicap(player.handicap);

    // Calculate rd1 and rd2 handicap adjustments
    const rd1Adjustment = Math.ceil(playingHandicap / 2);
    const rd2Adjustment = Math.floor(playingHandicap / 2);

    const rd1Net =
      player.rd1_gross > 0 ? player.rd1_gross - rd1Adjustment : null;

    const rd2Net =
      player.rd2_gross > 0 ? player.rd2_gross - rd2Adjustment : null;

    return {
      ...player,
      playing_handicap: playingHandicap,
      rd1_net: rd1Net,
      rd2_net: rd2Net,
      total_net: rd1Net + rd2Net,
    };
  });

  const { data, error } = await supabase
    .from('profiles')
    .upsert(payload)
    .select();

  if (error) {
    console.log(error.message);
  }

  if (data) {
    console.log('Upsert successful', data);
  }
}
