import { string } from 'prop-types';
import React from 'react';

function LeaderboardItemAvatar({ src, alt }) {
  return (
    <img
      className="h-12 w-12 rounded object-cover object-center"
      src={src}
      alt={alt}
      loading="lazy"
    />
  );
}

LeaderboardItemAvatar.propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
};

export default LeaderboardItemAvatar;
