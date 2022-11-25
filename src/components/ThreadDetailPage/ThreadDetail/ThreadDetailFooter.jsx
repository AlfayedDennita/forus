import React from 'react';
import { IoChatbox } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';

import {
  asyncDownvoteThreadDetail,
  asyncNeutralizeThreadDetailVote,
  asyncUpvoteThreadDetail,
} from '../../../states/threadDetail/action';
import VoteCounter from '../../ui/VoteCounter';

function ThreadDetailFooter() {
  const dispatch = useDispatch();
  const threadDetail = useSelector((states) => states.threadDetail);

  return (
    <footer className="flex items-center gap-4 px-5 lg:px-6">
      <VoteCounter
        upvoteAction={() => dispatch(asyncUpvoteThreadDetail())}
        downvoteAction={() => dispatch(asyncDownvoteThreadDetail())}
        neutralizeAction={() => dispatch(asyncNeutralizeThreadDetailVote())}
        upvotedBy={threadDetail.upVotesBy}
        downvotedBy={threadDetail.downVotesBy}
      />
      <HashLink
        to="#comments"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:underline"
      >
        <IoChatbox />
        <span>{threadDetail.comments.length} Comments</span>
      </HashLink>
    </footer>
  );
}

export default ThreadDetailFooter;
