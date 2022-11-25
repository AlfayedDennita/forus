import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';

import addThreadStatusReducer from './addThreadStatus/reducer';
import authedUserReducer from './authedUser/reducer';
import authStatusReducer from './authStatus/reducer';
import globalErrorReducer from './globalError/reducer';
import isPreloadReducer from './isPreload/reducer';
import leaderboardReducer from './leaderboard/reducer';
import threadDetailReducer from './threadDetail/reducer';
import threadsReducer from './threads/reducer';
import threadsFiltersReducer from './threadsFilters/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    loadingBar: loadingBarReducer,
    globalError: globalErrorReducer,
    authedUser: authedUserReducer,
    isPreload: isPreloadReducer,
    authStatus: authStatusReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadsFilters: threadsFiltersReducer,
    addThreadStatus: addThreadStatusReducer,
    threadDetail: threadDetailReducer,
    leaderboard: leaderboardReducer,
  },
});

export default store;
