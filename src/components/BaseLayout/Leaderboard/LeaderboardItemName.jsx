import { number, string } from 'prop-types';
import React, { useMemo } from 'react';

function LeaderboardItemName({ rank, userName }) {
  const emoji = useMemo(() => {
    switch (rank) {
      case 1:
        return '🥇'; // First Place Medal
      case 2:
        return '🥈'; // Second Place Medal
      case 3:
        return '🥉'; // Third Place Medal
      case 4:
      case 5:
        return '🎖'; // Military/Star Medal
      default:
        return '';
    }
  }, [rank]);

  return (
    <p
      className={`flex-1 overflow-hidden text-ellipsis font-medium ${
        rank > 5 && 'ml-1'
      }`}
    >
      {`${emoji} ${userName}`}
    </p>
  );
}

LeaderboardItemName.propTypes = {
  rank: number.isRequired,
  userName: string.isRequired,
};

export default LeaderboardItemName;
