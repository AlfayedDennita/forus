import { hideLoading, showLoading } from 'react-redux-loading-bar';

import api from '../../utils/api';
import { setGlobalErrorActionCreator } from '../globalError/action';

const ActionType = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
};

function receiveLeaderboardActionCreator(leaderboard) {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: { leaderboard },
  };
}

function asyncReceiveLeaderboard() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const leaderboard = await api.getLeaderboard();
      dispatch(receiveLeaderboardActionCreator(leaderboard));
    } catch (error) {
      dispatch(
        setGlobalErrorActionCreator(`Receive Leaderboard: ${error.message}`)
      );
    }

    dispatch(hideLoading());
  };
}

export { ActionType, receiveLeaderboardActionCreator, asyncReceiveLeaderboard };
