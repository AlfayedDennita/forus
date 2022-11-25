import { arrayOf, string } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

import {
  asyncDownvoteComment,
  asyncNeutralizeCommentVote,
  asyncUpvoteComment,
} from '../../../states/threadDetail/action';
import VoteCounter from '../../ui/VoteCounter';

function ThreadCommentFooter({
  commentId,
  commentUpvotedBy,
  commentDownvotedBy,
}) {
  const dispatch = useDispatch();

  return (
    <footer>
      <VoteCounter
        upvoteAction={() => dispatch(asyncUpvoteComment(commentId))}
        downvoteAction={() => dispatch(asyncDownvoteComment(commentId))}
        neutralizeAction={() => dispatch(asyncNeutralizeCommentVote(commentId))}
        upvotedBy={commentUpvotedBy}
        downvotedBy={commentDownvotedBy}
      />
    </footer>
  );
}

ThreadCommentFooter.propTypes = {
  commentId: string.isRequired,
  commentUpvotedBy: arrayOf(string).isRequired,
  commentDownvotedBy: arrayOf(string).isRequired,
};

export default ThreadCommentFooter;
