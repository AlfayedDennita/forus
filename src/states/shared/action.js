import { hideLoading, showLoading } from 'react-redux-loading-bar';

import api from '../../utils/api';
import { setGlobalErrorActionCreator } from '../globalError/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      dispatch(
        setGlobalErrorActionCreator(
          `Populate Users and Threads: ${error.message}`
        )
      );
    }

    dispatch(hideLoading());
  };
}

// eslint-disable-next-line import/prefer-default-export
export { asyncPopulateUsersAndThreads };
