import { ActionType } from './action';

function addThreadStatusReducer(
  addThreadStatus = { isSuccess: null, threadId: null, errorMessage: null },
  action = {}
) {
  switch (action.type) {
    case ActionType.SET_ADD_THREAD_STATUS_SUCCESS:
      return {
        isSuccess: true,
        threadId: action.payload.threadId,
        errorMessage: null,
      };
    case ActionType.SET_ADD_THREAD_STATUS_FAILED:
      return {
        isSuccess: false,
        threadId: null,
        errorMessage: action.payload.errorMessage,
      };
    case ActionType.UNSET_ADD_THREAD_STATUS:
      return {
        isSuccess: null,
        threadId: null,
        errorMessage: null,
      };
    default:
      return addThreadStatus;
  }
}

export default addThreadStatusReducer;
