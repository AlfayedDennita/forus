import { ActionType } from './action';

function leaderboardReducer(leaderboard = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARD:
      return action.payload.leaderboard;
    default:
      return leaderboard;
  }
}

export default leaderboardReducer;
