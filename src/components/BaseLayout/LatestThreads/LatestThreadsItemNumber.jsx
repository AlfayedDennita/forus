import { number } from 'prop-types';
import React from 'react';

function LatestThreadsItemNumber({ threadNumber }) {
  return (
    <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded bg-zinc-100 text-xl font-bold text-zinc-500 transition-colors group-hover:bg-zinc-200/50">
      {String(threadNumber).padStart(2, '0')}
    </div>
  );
}

LatestThreadsItemNumber.propTypes = {
  threadNumber: number.isRequired,
};

export default LatestThreadsItemNumber;
