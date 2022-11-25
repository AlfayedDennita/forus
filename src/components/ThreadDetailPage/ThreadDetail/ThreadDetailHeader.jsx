import React from 'react';
import { useSelector } from 'react-redux';

import ContentMetadata from '../../ui/ContentMetadata';

function ThreadDetailHeader() {
  const threadDetail = useSelector((states) => states.threadDetail);

  return (
    <header className="px-5 lg:px-6">
      <ContentMetadata
        userId={threadDetail.owner.id}
        userAvatar={threadDetail.owner.avatar}
        userName={threadDetail.owner.name}
        postDate={threadDetail.createdAt}
      />
    </header>
  );
}

export default ThreadDetailHeader;
