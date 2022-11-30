const ActionType = {
  SET_ADD_THREAD_STATUS_SUCCESS: 'SET_ADD_THREAD_STATUS_SUCCESS',
  SET_ADD_THREAD_STATUS_FAILED: 'SET_ADD_THREAD_STATUS_FAILED',
  UNSET_ADD_THREAD_STATUS: 'UNSET_ADD_THREAD_STATUS',
};

function setAddThreadStatusSuccessActionCreator(threadId) {
  return {
    type: ActionType.SET_ADD_THREAD_STATUS_SUCCESS,
    payload: { threadId },
  };
}

function setAddThreadStatusFailedActionCreator(errorMessage) {
  return {
    type: ActionType.SET_ADD_THREAD_STATUS_FAILED,
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
  setAddThreadStatusFailedActionCreator,
  unsetAddThreadStatusActionCreator,
};
