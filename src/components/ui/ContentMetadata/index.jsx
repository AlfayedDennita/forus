import { string } from 'prop-types';
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
  userId: string.isRequired,
  userAvatar: string.isRequired,
  userName: string.isRequired,
  postDate: string.isRequired,
};

export default ContentMetadata;
