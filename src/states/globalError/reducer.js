import { ActionType } from './action';

function globalErrorReducer(
  globalError = { isError: false, message: null },
  action = {}
) {
  switch (action.type) {
    case ActionType.SET_GLOBAL_ERROR:
      return {
        isError: true,
        message: action.payload.message,
      };
    case ActionType.UNSET_GLOBAL_ERROR:
      return {
        isError: false,
        message: null,
      };
    default:
      return globalError;
  }
}

export default globalErrorReducer;
