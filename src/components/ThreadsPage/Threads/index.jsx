import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { setDocumentTitle } from '../../../utils';
import BaseSectionCard from '../../BaseLayout/BaseSectionCard';
import ThreadsList from './ThreadsList';
import ThreadsSearchInput from './ThreadsSearchInput';

function Threads() {
  const { userId, category } = useParams();
  const { users } = useSelector((states) => states);

  const title = useMemo(() => {
    if (userId && users) {
      const userName = users.find((user) => user.id === userId).name;
      return `Threads by User: ${userName}`;
    }
    if (category) {
      return `Threads by Category: ${category}`;
    }
    return 'All Threads';
  }, [userId, category, users]);

  useEffect(() => {
    setDocumentTitle(title);
  }, [title]);

  return (
    <BaseSectionCard>
      <h2 className="px-5 font-heading text-2xl font-bold lg:px-6">{title}</h2>
      <ThreadsSearchInput />
      <ThreadsList />
    </BaseSectionCard>
  );
}

export default Threads;
