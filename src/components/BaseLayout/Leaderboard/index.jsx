import { oneOf } from 'prop-types';
import React, { useMemo } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import BaseSectionCard from '../BaseSectionCard';
import LeaderboardList from './LeaderboardList';

function Leaderboard({ type }) {
  const heading = useMemo(() => {
    if (type === 'snippet') {
      return (
        <Link
          to="/leaderboard"
          className="group flex items-center gap-2 px-5 lg:px-6"
          title="See Full Leaderboard"
        >
          <h3 className="font-heading text-lg font-semibold">Leaderboard</h3>
          <FiExternalLink className="text-xs opacity-50 transition-opacity group-hover:opacity-100" />
        </Link>
      );
    }

    return (
      <h3 className="px-5 font-heading text-lg font-semibold lg:px-6">
        Leaderboard
      </h3>
    );
  }, [type]);

  return (
    <BaseSectionCard>
      {heading}
      <LeaderboardList maxItems={type === 'snippet' ? 5 : null} />
    </BaseSectionCard>
  );
}

Leaderboard.propTypes = {
  type: oneOf(['snippet', 'full']),
};

Leaderboard.defaultProps = {
  type: 'snippet',
};

export default Leaderboard;
