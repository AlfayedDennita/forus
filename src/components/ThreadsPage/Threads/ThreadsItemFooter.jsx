import { arrayOf, number, string } from 'prop-types';
import React from 'react';
import { IoChatbox } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { HashLink } from 'react-router-hash-link';

import {
  asyncDownvoteThread,
  asyncNeutralizeThreadVote,
  asyncUpvoteThread,
} from '../../../states/threads/action';
import VoteCounter from '../../ui/VoteCounter';

function ThreadsItemFooter({
  threadId,
  threadUpvotedBy,
  threadDownvotedBy,
  threadTotalComments,
}) {
  const dispatch = useDispatch();

  return (
    <footer className="flex flex-wrap gap-4">
      <VoteCounter
        upvoteAction={() => dispatch(asyncUpvoteThread(threadId))}
        downvoteAction={() => dispatch(asyncDownvoteThread(threadId))}
        neutralizeAction={() => dispatch(asyncNeutralizeThreadVote(threadId))}
        upvotedBy={threadUpvotedBy}
        downvotedBy={threadDownvotedBy}
      />
      <HashLink
        to={`/thread/${threadId}#comments`}
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:underline"
        title="See Thread Comments"
      >
        <IoChatbox /> <span>{threadTotalComments} Comments</span>
      </HashLink>
    </footer>
  );
}

ThreadsItemFooter.propTypes = {
  threadId: string.isRequired,
  threadUpvotedBy: arrayOf(string).isRequired,
  threadDownvotedBy: arrayOf(string).isRequired,
  threadTotalComments: number.isRequired,
};

export default ThreadsItemFooter;
