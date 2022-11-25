import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ThreadComments from '../components/ThreadDetailPage/ThreadComments';
import ThreadDetail from '../components/ThreadDetailPage/ThreadDetail';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import { setDocumentTitle } from '../utils';

function ThreadDetailPage() {
  const dispatch = useDispatch();
  const { threadId } = useParams();
  const threadDetail = useSelector((states) => states.threadDetail);

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [dispatch, threadId]);

  useEffect(() => {
    if (threadDetail) {
      setDocumentTitle(threadDetail.title);
    }
  }, [threadDetail]);

  return (
    <>
      <ThreadDetail />
      <ThreadComments />
    </>
  );
}

export default ThreadDetailPage;
