import { number } from 'prop-types';
import React, { useMemo } from 'react';

function LeaderboardItemScore({ rank, score }) {
  const backgroundColor = useMemo(() => {
    switch (rank) {
      case 1:
        return 'bg-primary-50';
      case 2:
        return 'bg-secondary-50';
      case 3:
        return 'bg-green-200';
      default:
        return 'bg-zinc-100 group-hover:bg-zinc-200/50';
    }
  }, [rank]);

  return (
    <span
      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded text-center font-semibold transition-colors ${backgroundColor}`}
    >
      {score}
    </span>
  );
}

LeaderboardItemScore.propTypes = {
  rank: number.isRequired,
  score: number.isRequired,
};

export default LeaderboardItemScore;
