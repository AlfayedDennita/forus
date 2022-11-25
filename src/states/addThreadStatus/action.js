const ActionType = {
  SET_ADD_THREAD_STATUS_SUCCESS: 'SET_ADD_THREAD_STATUS_SUCCESS',
  SET_ADD_THREAD_STATUS_FAILURE: 'SET_ADD_THREAD_STATUS_FAILURE',
  UNSET_ADD_THREAD_STATUS: 'UNSET_ADD_THREAD_STATUS',
};

function setAddThreadStatusSuccessActionCreator(threadId) {
  return {
    type: ActionType.SET_ADD_THREAD_STATUS_SUCCESS,
    payload: { threadId },
  };
}

function setAddThreadStatusFailureActionCreator(errorMessage) {
  return {
    type: ActionType.SET_ADD_THREAD_STATUS_FAILURE,
    payload: { errorMessage },
  };
}

function unsetAddThreadStatusActionCreator() {
  return {
    type: ActionType.UNSET_ADD_THREAD_STATUS,
  };
}

export {
  ActionType,
  setAddThreadStatusSuccessActionCreator,
  setAddThreadStatusFailureActionCreator,
  unsetAddThreadStatusActionCreator,
};
