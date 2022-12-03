import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function TopLoading() {
  return (
    <div className="fixed top-0 left-0 right-0" data-testid="top-loading">
      <LoadingBar className="h-1 bg-primary-500" />
    </div>
  );
}

export default TopLoading;
