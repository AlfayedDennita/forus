import { number, oneOfType, string } from 'prop-types';
import React from 'react';

import ContentMetadataAvatar from './ContentMetadataAvatar';
import ContentMetadataDetail from './ContentMetadataDetail';

function ContentMetadata({ userId, userAvatar, userName, postDate }) {
  return (
    <section
      className="flex flex-wrap items-center gap-2"
      data-testid="content-metadata"
    >
      <ContentMetadataAvatar
        userId={userId}
        userAvatar={userAvatar}
        userName={userName}
      />
      <ContentMetadataDetail
        userId={userId}
        userName={userName}
        postDate={postDate}
      />
    </section>
  );
}

ContentMetadata.propTypes = {
  /** The user id, it's used to create the threads-by-user page URL */
  userId: string.isRequired,
  /** The user avatar (image URL) */
  userAvatar: string.isRequired,
  /** The user name */
  userName: string.isRequired,
  /** The post date */
  postDate: oneOfType([string, number]).isRequired,
};

export default ContentMetadata;
