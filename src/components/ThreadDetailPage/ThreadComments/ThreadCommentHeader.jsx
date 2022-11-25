import { string } from 'prop-types';
import React from 'react';

import ContentMetadata from '../../ui/ContentMetadata';

function ThreadCommentHeader({
  commentOwnerId,
  commentOwnerName,
  commentOwnerAvatar,
  commentCreatedDate,
}) {
  return (
    <header>
      <ContentMetadata
        userId={commentOwnerId}
        userAvatar={commentOwnerAvatar}
        userName={commentOwnerName}
        postDate={commentCreatedDate}
      />
    </header>
  );
}

ThreadCommentHeader.propTypes = {
  commentOwnerId: string.isRequired,
  commentOwnerName: string.isRequired,
  commentOwnerAvatar: string.isRequired,
  commentCreatedDate: string.isRequired,
};

export default ThreadCommentHeader;
