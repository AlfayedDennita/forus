import { ActionType } from './action';

function authStatusReducer(
  authStatus = {
    signInErrorMessage: null,
    signUpErrorMessage: null,
    isAfterSignUp: false,
  },
  action = {}
) {
  switch (action.type) {
    case ActionType.SET_SIGN_IN_ERROR_MESSAGE:
      return { ...authStatus, signInErrorMessage: action.payload.message };
    case ActionType.UNSET_SIGN_IN_ERROR_MESSAGE:
      return { ...authStatus, signInErrorMessage: null };
    case ActionType.SET_SIGN_UP_ERROR_MESSAGE:
      return { ...authStatus, signUpErrorMessage: action.payload.message };
    case ActionType.UNSET_SIGN_UP_ERROR_MESSAGE:
      return { ...authStatus, signUpErrorMessage: null };
    case ActionType.SET_IS_AFTER_SIGN_UP:
      return { ...authStatus, isAfterSignUp: true };
    case ActionType.UNSET_IS_AFTER_SIGN_UP:
      return { ...authStatus, isAfterSignUp: false };
    default:
      return authStatus;
  }
}

export default authStatusReducer;
