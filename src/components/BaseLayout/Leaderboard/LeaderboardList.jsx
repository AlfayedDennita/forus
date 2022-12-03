import { number } from 'prop-types';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { asyncReceiveLeaderboard } from '../../../states/leaderboard/action';
import SpinLoading from '../../ui/SpinLoading';
import LeaderboardItem from './LeaderboardItem';

function LeaderboardList({ maxItems }) {
  const dispatch = useDispatch();
  const leaderboard = useSelector((states) => states.leaderboard);

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  if (leaderboard === null) {
    return <SpinLoading />;
  }

  if (leaderboard.length <= 0) {
    <p className="py-4 px-5 text-center italic text-zinc-300 lg:px-6">
      No leaderboard.
    </p>;
  }

  const leaderboardToRender = useMemo(() => {
    if (maxItems) {
      return leaderboard.slice(0, maxItems);
    }
    return leaderboard;
  }, [leaderboard, maxItems]);

  return (
    <ol className="flex flex-col">
      {leaderboardToRender.map((leaderboardItem, index) => (
        <LeaderboardItem
          key={leaderboardItem.user.id}
          rank={index + 1}
          userId={leaderboardItem.user.id}
          userAvatar={leaderboardItem.user.avatar}
          userName={leaderboardItem.user.name}
          score={leaderboardItem.score}
        />
      ))}
    </ol>
  );
}

LeaderboardList.propTypes = {
  maxItems: number,
};

LeaderboardList.defaultProps = {
  maxItems: null,
};

export default LeaderboardList;
