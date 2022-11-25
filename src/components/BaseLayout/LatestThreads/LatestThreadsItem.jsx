import { number, string } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import LatestThreadsItemDetail from './LatestThreadsItemDetail';
import LatestThreadsItemNumber from './LatestThreadsItemNumber';

function LatestThreadsItem({
  threadNumber,
  threadId,
  threadTitle,
  threadOwnerId,
  threadCreatedDate,
}) {
  const users = useSelector((states) => states.users);

  return (
    <li>
      <Link
        to={`/thread/${threadId}`}
        className="group flex items-center gap-3 px-5 py-2 transition-colors hover:bg-zinc-100/75 lg:px-6"
        title={threadTitle}
      >
        <LatestThreadsItemNumber threadNumber={threadNumber} />
        <LatestThreadsItemDetail
          threadTitle={threadTitle}
          threadOwnerName={users.find((user) => user.id === threadOwnerId).name}
          threadCreatedDate={threadCreatedDate}
        />
      </Link>
    </li>
  );
}

LatestThreadsItem.propTypes = {
  threadNumber: number.isRequired,
  threadId: string.isRequired,
  threadTitle: string.isRequired,
  threadOwnerId: string.isRequired,
  threadCreatedDate: string.isRequired,
};

export default LatestThreadsItem;
