import React from 'react';

import ThreadsItem from './ThreadsItem';

function ThreadsList() {
  return (
    <ul className="flex flex-col gap-8">
      <ThreadsItem />
      <ThreadsItem />
      <ThreadsItem />
      <ThreadsItem />
      <ThreadsItem />
    </ul>
  );
}

export default ThreadsList;
