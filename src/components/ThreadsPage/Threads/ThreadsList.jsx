import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SpinLoading from '../../ui/SpinLoading';
import ThreadsItem from './ThreadsItem';

function ThreadsList() {
  const { userId, category } = useParams();
  const {
    threads: initialThreads,
    threadsFilters: { searchQuery },
  } = useSelector((states) => states);

  const threads = useMemo(() => {
    if (initialThreads === null) {
      return initialThreads;
    }

    let filteredThreads = initialThreads;

    if (userId) {
      filteredThreads = initialThreads.filter(
        (thread) => thread.ownerId === userId
      );
    }

    if (category) {
      filteredThreads = initialThreads.filter(
        (thread) => thread.category === category
      );
    }

    if (searchQuery.length > 0) {
      filteredThreads = filteredThreads.filter((thread) =>
        thread.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredThreads;
  }, [initialThreads, searchQuery, userId, category]);

  if (initialThreads === null) {
    return <SpinLoading />;
  }

  if (threads.length <= 0) {
    return (
      <p className="py-8 px-5 text-center text-zinc-400 lg:px-6">
        No threads found.
      </p>
    );
  }

  return (
    <section className="flex flex-col divide-y divide-zinc-100 sm:border-t sm:border-t-zinc-100">
      {threads.map((thread) => (
        <ThreadsItem
          key={thread.id}
          threadId={thread.id}
          threadTitle={thread.title}
          threadBody={thread.body}
          threadCategory={thread.category}
          threadCreatedDate={thread.createdAt}
          threadOwnerId={thread.ownerId}
          threadUpvotedBy={thread.upVotesBy}
          threadDownvotedBy={thread.downVotesBy}
          threadTotalComments={thread.totalComments}
        />
      ))}
    </section>
  );
}

export default ThreadsList;
