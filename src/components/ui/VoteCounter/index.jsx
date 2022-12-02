import { arrayOf, func, string } from 'prop-types';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import DownvoteButton from './DownvoteButton';
import UpvoteButton from './UpvoteButton';

function VoteCounter({
  upvoteAction,
  downvoteAction,
  neutralizeAction,
  upvotedBy,
  downvotedBy,
}) {
  const authedUser = useSelector((states) => states.authedUser);

  const isSignedIn = authedUser !== null;
  const score = upvotedBy.length - downvotedBy.length;

  const status = useMemo(() => {
    if (isSignedIn) {
      if (upvotedBy.indexOf(authedUser.id) > -1) {
        return 'upvoted';
      }
      if (downvotedBy.indexOf(authedUser.id) > -1) {
        return 'downvoted';
      }
    }
    return 'neutral';
  }, [authedUser, isSignedIn, upvotedBy, downvotedBy]);

  return (
    <section
      className="grid w-28 grid-cols-3 divide-x divide-zinc-200/50 overflow-hidden rounded bg-zinc-100 text-zinc-500"
      data-testid="vote-counter"
    >
      <UpvoteButton
        upvoteAction={upvoteAction}
        neutralizeAction={neutralizeAction}
        upvoted={status === 'upvoted'}
      />
      <p className="flex items-center justify-center text-center text-sm">
        {score > 0 ? `+${score}` : score}
      </p>
      <DownvoteButton
        downvoteAction={downvoteAction}
        neutralizeAction={neutralizeAction}
        downvoted={status === 'downvoted'}
      />
    </section>
  );
}

VoteCounter.propTypes = {
  /** It will execute when upvote button clicked */
  upvoteAction: func.isRequired,
  /** It will execute when downvote button clicked */
  downvoteAction: func.isRequired,
  /** It will execute when cancel upvote or downvote */
  neutralizeAction: func.isRequired,
  /** Users (user id) who upvoted */
  upvotedBy: arrayOf(string).isRequired,
  /** Users (user id) who downvoted */
  downvotedBy: arrayOf(string).isRequired,
};

export default VoteCounter;
