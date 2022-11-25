import { ActionType } from './action';

function isPreloadReducer(isPreload = true, action = {}) {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return true;
    case ActionType.UNSET_IS_PRELOAD:
      return false;
    default:
      return isPreload;
  }
}

export default isPreloadReducer;
