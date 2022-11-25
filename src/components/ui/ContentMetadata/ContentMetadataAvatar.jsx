import { string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function ContentMetadataAvatar({ userId, userAvatar, userName }) {
  return (
    <Link to={`/threads/user/${userId}`} title={`See ${userName} Threads`}>
      <img
        src={userAvatar}
        className="h-8 w-8 rounded object-cover object-center"
        alt={`${userName} Avatar`}
        loading="lazy"
      />
    </Link>
  );
}

ContentMetadataAvatar.propTypes = {
  userId: string.isRequired,
  userAvatar: string.isRequired,
  userName: string.isRequired,
};

export default ContentMetadataAvatar;
