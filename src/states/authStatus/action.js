const ActionType = {
  SET_SIGN_IN_ERROR_MESSAGE: 'SET_SIGN_IN_ERROR_MESSAGE',
  UNSET_SIGN_IN_ERROR_MESSAGE: 'UNSET_SIGN_IN_ERROR_MESSAGE',
  SET_SIGN_UP_ERROR_MESSAGE: 'SET_SIGN_UP_ERROR_MESSAGE',
  UNSET_SIGN_UP_ERROR_MESSAGE: 'UNSET_SIGN_UP_ERROR_MESSAGE',
  SET_IS_AFTER_SIGN_UP: 'SET_IS_AFTER_SIGN_UP',
  UNSET_IS_AFTER_SIGN_UP: 'UNSET_IS_AFTER_SIGN_UP',
};

function setSignInErrorMessageActionCreator(message) {
  return {
    type: ActionType.SET_SIGN_IN_ERROR_MESSAGE,
    payload: { message },
  };
}

function unsetSignInErrorMessageActionCreator() {
  return {
    type: ActionType.UNSET_SIGN_IN_ERROR_MESSAGE,
  };
}

function setSignUpErrorMessageActionCreator(message) {
  return {
    type: ActionType.SET_SIGN_UP_ERROR_MESSAGE,
    payload: { message },
  };
}

function unsetSignUpErrorMessageActionCreator() {
  return {
    type: ActionType.UNSET_SIGN_UP_ERROR_MESSAGE,
  };
}

function setIsAfterSignUpActionCreator() {
  return {
    type: ActionType.SET_IS_AFTER_SIGN_UP,
  };
}

function unsetIsAfterSignUpActionCreator() {
  return {
    type: ActionType.UNSET_IS_AFTER_SIGN_UP,
  };
}

function unsetAllAuthStatus() {
  return (dispatch) => {
    dispatch(unsetSignInErrorMessageActionCreator());
    dispatch(unsetSignUpErrorMessageActionCreator());
    dispatch(unsetIsAfterSignUpActionCreator());
  };
}

export {
  ActionType,
  setSignInErrorMessageActionCreator,
  unsetSignInErrorMessageActionCreator,
  setSignUpErrorMessageActionCreator,
  unsetSignUpErrorMessageActionCreator,
  setIsAfterSignUpActionCreator,
  unsetIsAfterSignUpActionCreator,
  unsetAllAuthStatus,
};
