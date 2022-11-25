import { arrayOf, string } from 'prop-types';
import React from 'react';

import ThreadCommentBody from './ThreadCommentBody';
import ThreadCommentFooter from './ThreadCommentFooter';
import ThreadCommentHeader from './ThreadCommentHeader';

function ThreadComment({
  commentId,
  commentContent,
  commentCreatedDate,
  commentOwnerId,
  commentOwnerName,
  commentOwnerAvatar,
  commentUpvotedBy,
  commentDownvotedBy,
}) {
  return (
    <article className="flex flex-col items-start gap-3 rounded p-5 lg:p-6">
      <ThreadCommentHeader
        commentOwnerId={commentOwnerId}
        commentOwnerName={commentOwnerName}
        commentOwnerAvatar={commentOwnerAvatar}
        commentCreatedDate={commentCreatedDate}
      />
      <ThreadCommentBody commentContent={commentContent} />
      <ThreadCommentFooter
        commentId={commentId}
        commentUpvotedBy={commentUpvotedBy}
        commentDownvotedBy={commentDownvotedBy}
      />
    </article>
  );
}

ThreadComment.propTypes = {
  commentId: string.isRequired,
  commentContent: string.isRequired,
  commentCreatedDate: string.isRequired,
  commentOwnerId: string.isRequired,
  commentOwnerName: string.isRequired,
  commentOwnerAvatar: string.isRequired,
  commentUpvotedBy: arrayOf(string).isRequired,
  commentDownvotedBy: arrayOf(string).isRequired,
};

export default ThreadComment;
