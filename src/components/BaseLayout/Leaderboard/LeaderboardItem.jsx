import { number, string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import LeaderboardItemAvatar from './LeaderboardItemAvatar';
import LeaderboardItemName from './LeaderboardItemName';
import LeaderboardItemScore from './LeaderboardItemScore';

function LeaderboardItem({ rank, userId, userAvatar, userName, score }) {
  return (
    <li>
      <Link
        to={`/threads/user/${userId}`}
        className="group flex flex-wrap items-center justify-between gap-2 py-2 px-5 transition-colors hover:bg-zinc-100/75 lg:px-6"
        title={`See ${userName} Threads`}
      >
        <LeaderboardItemAvatar src={userAvatar} alt={`${userName} Avatar`} />
        <LeaderboardItemName rank={rank} userId={userId} userName={userName} />
        <LeaderboardItemScore rank={rank} score={score} />
      </Link>
    </li>
  );
}

LeaderboardItem.propTypes = {
  rank: number.isRequired,
  userId: string.isRequired,
  userAvatar: string.isRequired,
  userName: string.isRequired,
  score: number.isRequired,
};

export default LeaderboardItem;
