import { hideLoading, showLoading } from 'react-redux-loading-bar';

import api from '../../utils/api';
import { setAuthedUserActionCreator } from '../authedUser/action';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
  UNSET_IS_PRELOAD: 'UNSET_IS_PRELOAD',
};

function setIsPreloadActionCreator() {
  return {
    type: ActionType.SET_IS_PRELOAD,
  };
}

function unsetIsPreloadActionCreator() {
  return {
    type: ActionType.UNSET_IS_PRELOAD,
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      dispatch(setIsPreloadActionCreator());
      const authedUser = await api.getOwnProfile();
      dispatch(setAuthedUserActionCreator(authedUser));
    } catch {
      dispatch(setAuthedUserActionCreator(null));
    } finally {
      dispatch(unsetIsPreloadActionCreator());
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setIsPreloadActionCreator,
  unsetIsPreloadActionCreator,
  asyncPreloadProcess,
};
