import React from 'react';
import { Link } from 'react-router-dom';

import ThreadsItemBody from './ThreadsItemBody';
import ThreadsItemFooter from './ThreadsItemFooter';
import ThreadsItemHeader from './ThreadsItemHeader';

function ThreadsItem() {
  return (
    <li>
      <Link className="flex flex-col gap-4" to="/">
        <ThreadsItemHeader />
        <ThreadsItemBody />
        <ThreadsItemFooter />
      </Link>
    </li>
  );
}

export default ThreadsItem;
