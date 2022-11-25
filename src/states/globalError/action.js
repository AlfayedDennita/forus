const ActionType = {
  SET_GLOBAL_ERROR: 'SET_GLOBAL_ERROR',
  UNSET_GLOBAL_ERROR: 'UNSET_GLOBAL_ERROR',
};

function setGlobalErrorActionCreator(message) {
  return {
    type: ActionType.SET_GLOBAL_ERROR,
    payload: { message },
  };
}

function unsetGlobalErrorActionCreator() {
  return {
    type: ActionType.UNSET_GLOBAL_ERROR,
  };
}

export {
  ActionType,
  setGlobalErrorActionCreator,
  unsetGlobalErrorActionCreator,
};
