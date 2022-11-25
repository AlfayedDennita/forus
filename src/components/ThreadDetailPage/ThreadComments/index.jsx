import React from 'react';
import { useSelector } from 'react-redux';

import BaseSectionCard from '../../BaseLayout/BaseSectionCard';
import AddComment from './AddComment';
import ThreadComment from './ThreadComment';

function ThreadComments() {
  const { authedUser, threadDetail } = useSelector((states) => states);
  const isSignedIn = authedUser !== null;

  if (threadDetail) {
    return (
      <BaseSectionCard
        heading={`${threadDetail.comments.length} Comments`}
        id="comments"
      >
        {isSignedIn && <AddComment />}

        {threadDetail.comments.length > 0 && (
          <section className="flex flex-col divide-y divide-zinc-100 border-t border-t-zinc-100">
            {threadDetail.comments.map((comment) => (
              <ThreadComment
                key={comment.id}
                commentId={comment.id}
                commentContent={comment.content}
                commentCreatedDate={comment.createdAt}
                commentOwnerId={comment.owner.id}
                commentOwnerName={comment.owner.name}
                commentOwnerAvatar={comment.owner.avatar}
                commentUpvotedBy={comment.upVotesBy}
                commentDownvotedBy={comment.downVotesBy}
              />
            ))}
          </section>
        )}
      </BaseSectionCard>
    );
  }
}

export default ThreadComments;
