import { string } from 'prop-types';
import React from 'react';
import ReactTimeAgo from 'react-time-ago';

function LatestThreadsItemDetail({
  threadTitle,
  threadOwnerName,
  threadCreatedDate,
}) {
  return (
    <section className="text-sm">
      <p className="font-medium line-clamp-1">{threadTitle}</p>
      <p className="text-sm text-zinc-400">
        by {threadOwnerName} &bull;{' '}
        <ReactTimeAgo date={Date(threadCreatedDate)} />
      </p>
    </section>
  );
}

LatestThreadsItemDetail.propTypes = {
  threadTitle: string.isRequired,
  threadOwnerName: string.isRequired,
  threadCreatedDate: string.isRequired,
};

export default LatestThreadsItemDetail;
