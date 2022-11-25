import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateThread from '../components/ThreadsPage/CreateThread';
import Threads from '../components/ThreadsPage/Threads';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function ThreadsPage() {
  const dispatch = useDispatch();
  const authedUser = useSelector((states) => states.authedUser);
  const isSignedIn = authedUser !== null;

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  return (
    <>
      {isSignedIn && <CreateThread />}
      <Threads />
    </>
  );
}

export default ThreadsPage;
