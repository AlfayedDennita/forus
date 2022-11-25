import { number } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import SpinLoading from '../../ui/SpinLoading';
import LatestThreadsItem from './LatestThreadsItem';

function LatestThreadsList({ maxThreads }) {
  const threads = useSelector((states) => states.threads);

  if (threads === null) {
    return <SpinLoading />;
  }

  if (threads.length <= 0) {
    return (
      <p className="py-4 px-5 text-center italic text-zinc-300 lg:px-6">
        No threads.
      </p>
    );
  }

  const latestThreads = threads.slice(0, maxThreads);

  return (
    <ul className="flex flex-col">
      {latestThreads.map((thread, index) => (
        <LatestThreadsItem
          key={thread.id}
          threadNumber={index + 1}
          threadId={thread.id}
          threadTitle={thread.title}
          threadOwnerId={thread.ownerId}
          threadCreatedDate={thread.createdAt}
        />
      ))}
    </ul>
  );
}

LatestThreadsList.propTypes = {
  maxThreads: number,
};

LatestThreadsList.defaultProps = {
  maxThreads: 5,
};

export default LatestThreadsList;
