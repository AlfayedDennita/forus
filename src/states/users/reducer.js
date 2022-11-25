import { ActionType } from './action';

function usersReducer(users = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      return action.payload.users;
    default:
      return users;
  }
}

export default usersReducer;
