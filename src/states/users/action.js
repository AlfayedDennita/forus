import { hideLoading, showLoading } from 'react-redux-loading-bar';

import api from '../../utils/api';
import {
  setIsAfterSignUpActionCreator,
  setSignUpErrorMessageActionCreator,
  unsetAllAuthStatus,
} from '../authStatus/action';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: { users },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(unsetAllAuthStatus());

    try {
      await api.registerUser({ name, email, password });
      dispatch(setIsAfterSignUpActionCreator());
    } catch (error) {
      dispatch(setSignUpErrorMessageActionCreator(error.message));
    }

    dispatch(hideLoading());
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
