import { arrayOf, number, string } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import ThreadsItemBody from './ThreadsItemBody';
import ThreadsItemFooter from './ThreadsItemFooter';
import ThreadsItemHeader from './ThreadsItemHeader';

function ThreadsItem({
  threadId,
  threadTitle,
  threadBody,
  threadCategory,
  threadCreatedDate,
  threadOwnerId,
  threadUpvotedBy,
  threadDownvotedBy,
  threadTotalComments,
}) {
  const users = useSelector((states) => states.users);
  const threadOwner = users.find((user) => user.id === threadOwnerId);

  return (
    <article className="flex flex-col gap-4 py-8 px-5 lg:px-6">
      <ThreadsItemHeader
        threadOwnerId={threadOwner.id}
        threadOwnerName={threadOwner.name}
        threadOwnerAvatar={threadOwner.avatar}
        threadCategory={threadCategory}
        threadCreatedDate={threadCreatedDate}
      />
      <ThreadsItemBody
        threadId={threadId}
        threadTitle={threadTitle}
        threadBody={threadBody}
      />
      <ThreadsItemFooter
        threadId={threadId}
        threadUpvotedBy={threadUpvotedBy}
        threadDownvotedBy={threadDownvotedBy}
        threadTotalComments={threadTotalComments}
      />
    </article>
  );
}

ThreadsItem.propTypes = {
  threadId: string.isRequired,
  threadTitle: string.isRequired,
  threadBody: string.isRequired,
  threadCategory: string.isRequired,
  threadCreatedDate: string.isRequired,
  threadOwnerId: string.isRequired,
  threadUpvotedBy: arrayOf(string).isRequired,
  threadDownvotedBy: arrayOf(string).isRequired,
  threadTotalComments: number.isRequired,
};

export default ThreadsItem;
