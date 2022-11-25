import { hideLoading, showLoading } from 'react-redux-loading-bar';

import api from '../../utils/api';
import {
  setSignInErrorMessageActionCreator,
  unsetAllAuthStatus,
} from '../authStatus/action';

const ActionType = {
  SET_AUTHED_USER: 'SET_AUTHED_USER',
  UNSET_AUTHED_USER: 'UNSET_AUTHED_USER',
};

function setAuthedUserActionCreator(authedUser) {
  return {
    type: ActionType.SET_AUTHED_USER,
    payload: { authedUser },
  };
}

function unsetAuthedUserActionCenter() {
  return {
    type: ActionType.UNSET_AUTHED_USER,
  };
}

function asyncSetAuthedUser({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(unsetAllAuthStatus());

    try {
      const token = await api.login({ email, password });
      api.setAccessToken(token);

      const authedUser = await api.getOwnProfile();

      dispatch(setAuthedUserActionCreator(authedUser));
    } catch (error) {
      dispatch(setSignInErrorMessageActionCreator(error.message));
    }

    dispatch(hideLoading());
  };
}

function unsetAuthedUser() {
  return (dispatch) => {
    dispatch(unsetAuthedUserActionCenter());
    api.setAccessToken('');
  };
}

export {
  ActionType,
  setAuthedUserActionCreator,
  unsetAuthedUserActionCenter,
  asyncSetAuthedUser,
  unsetAuthedUser,
};
