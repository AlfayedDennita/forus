import { string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import stringToColor from 'string-to-color';

import { toKebabCase, truncateString } from '../../../utils';
import ContentMetadata from '../../ui/ContentMetadata';

function ThreadsItemHeader({
  threadOwnerId,
  threadOwnerName,
  threadOwnerAvatar,
  threadCategory,
  threadCreatedDate,
}) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-2">
      <ContentMetadata
        userId={threadOwnerId}
        userAvatar={threadOwnerAvatar}
        userName={threadOwnerName}
        postDate={threadCreatedDate}
      />
      <Link
        to={`/threads/category/${threadCategory}`}
        style={{
          '--button-color': stringToColor(threadCategory),
          // Random background color with 0.25 alpha value (40 in hex code).
          '--bg-color': `${stringToColor(threadCategory)}40`,
        }}
        className="flex items-center justify-center rounded border border-[var(--bg-color)] bg-[var(--bg-color)] px-2 py-1 text-xs font-medium transition-colors hover:border-[var(--button-color)] hover:bg-transparent hover:text-[var(--button-color)]"
        title={`See ${threadCategory} Threads`}
      >
        #{toKebabCase(truncateString(threadCategory, 30))}
      </Link>
    </header>
  );
}

ThreadsItemHeader.propTypes = {
  threadOwnerId: string.isRequired,
  threadOwnerName: string.isRequired,
  threadOwnerAvatar: string.isRequired,
  threadCategory: string.isRequired,
  threadCreatedDate: string.isRequired,
};

export default ThreadsItemHeader;
