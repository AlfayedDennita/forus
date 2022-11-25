import React from 'react';
import { useSelector } from 'react-redux';

import BaseSectionCard from '../../BaseLayout/BaseSectionCard';
import SpinLoading from '../../ui/SpinLoading';
import ThreadDetailBody from './ThreadDetailBody';
import ThreadDetailFooter from './ThreadDetailFooter';
import ThreadDetailHeader from './ThreadDetailHeader';

function ThreadDetail() {
  const threadDetail = useSelector((states) => states.threadDetail);

  return (
    <BaseSectionCard>
      {threadDetail === null ? (
        <SpinLoading />
      ) : (
        <>
          <ThreadDetailHeader />
          <ThreadDetailBody />
          <ThreadDetailFooter />
        </>
      )}
    </BaseSectionCard>
  );
}

export default ThreadDetail;
