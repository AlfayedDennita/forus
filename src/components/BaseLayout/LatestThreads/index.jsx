import { number } from 'prop-types';
import React from 'react';

import BaseSectionCard from '../BaseSectionCard';
import LatestThreadsList from './LatestThreadsList';

function LatestThreads({ maxThreads }) {
  return (
    <BaseSectionCard heading="Latest Threads">
      <LatestThreadsList maxThreads={maxThreads} />
    </BaseSectionCard>
  );
}

LatestThreads.propTypes = {
  maxThreads: number,
};

LatestThreads.defaultProps = {
  maxThreads: 5,
};

export default LatestThreads;
