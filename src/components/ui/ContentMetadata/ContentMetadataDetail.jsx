import { number, oneOfType, string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';

function ContentMetadataDetail({ userId, userName, postDate }) {
  return (
    <section
      className="flex flex-col items-start text-xs"
      data-testid="content-metadata-detail"
    >
      <Link
        to={`/threads/user/${userId}`}
        className="font-semibold hover:underline"
        title={`See ${userName} Threads`}
      >
        {userName}
      </Link>
      <p>
        Posted <ReactTimeAgo date={new Date(postDate)} />
      </p>
    </section>
  );
}

ContentMetadataDetail.propTypes = {
  userId: string.isRequired,
  userName: string.isRequired,
  postDate: oneOfType([string, number]).isRequired,
};

export default ContentMetadataDetail;
