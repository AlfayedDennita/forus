import { hideLoading, showLoading } from 'react-redux-loading-bar';

import api from '../../utils/api';
import {
  setAddThreadStatusFailureActionCreator,
  setAddThreadStatusSuccessActionCreator,
} from '../addThreadStatus/action';
import { setGlobalErrorActionCreator } from '../globalError/action';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  UPVOTE_THREAD: 'UPVOTE_THREAD',
  DOWNVOTE_THREAD: 'DOWNVOTE_THREAD',
  NEUTRALIZE_THREAD_VOTE: 'NEUTRALIZE_THREAD_VOTE',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: { threads },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: { thread },
  };
}

function upvoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UPVOTE_THREAD,
    payload: { threadId, userId },
  };
}

function downvoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWNVOTE_THREAD,
    payload: { threadId, userId },
  };
}

function neutralizeThreadVoteActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_THREAD_VOTE,
    payload: { threadId, userId },
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const thread = await api.createThread({ title, body, category });

      dispatch(addThreadActionCreator(thread));
      dispatch(setAddThreadStatusSuccessActionCreator(thread.id));
    } catch (error) {
      dispatch(setAddThreadStatusFailureActionCreator(error.message));
    }

    dispatch(hideLoading());
  };
}

function asyncUpvoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authedUser, threads } = getState();
    dispatch(upvoteThreadActionCreator({ threadId, userId: authedUser.id }));

    try {
      await api.upvoteThread(threadId);
    } catch (error) {
      const isInitiallyDownvoted =
        threads
          .find((thread) => thread.id === threadId)
          .downVotesBy.indexOf(authedUser.id) > -1;

      if (isInitiallyDownvoted) {
        dispatch(
          downvoteThreadActionCreator({ threadId, userId: authedUser.id })
        );
      } else {
        dispatch(
          neutralizeThreadVoteActionCreator({ threadId, userId: authedUser.id })
        );
      }

      dispatch(setGlobalErrorActionCreator(`Upvote Thread: ${error.message}`));
    }
  };
}

function asyncDownvoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authedUser, threads } = getState();
    dispatch(downvoteThreadActionCreator({ threadId, userId: authedUser.id }));

    try {
      await api.downvoteThread(threadId);
    } catch (error) {
      const isInitiallyUpvoted =
        threads
          .find((thread) => thread.id === threadId)
          .upVotesBy.indexOf(authedUser.id) > -1;

      if (isInitiallyUpvoted) {
        dispatch(
          upvoteThreadActionCreator({ threadId, userId: authedUser.id })
        );
      } else {
        dispatch(
          neutralizeThreadVoteActionCreator({ threadId, userId: authedUser.id })
        );
      }

      dispatch(
        setGlobalErrorActionCreator(`Downvote Thread: ${error.message}`)
      );
    }
  };
}

function asyncNeutralizeThreadVote(threadId) {
  return async (dispatch, getState) => {
    const { authedUser, threads } = getState();
    dispatch(
      neutralizeThreadVoteActionCreator({ threadId, userId: authedUser.id })
    );

    try {
      await api.neutralizeThreadVote(threadId);
    } catch (error) {
      const isInitiallyUpvoted =
        threads
          .find((thread) => thread.id === threadId)
          .upVotesBy.indexOf(authedUser.id) > -1;

      if (isInitiallyUpvoted) {
        dispatch(
          upvoteThreadActionCreator({ threadId, userId: authedUser.id })
        );
      } else {
        dispatch(
          downvoteThreadActionCreator({ threadId, userId: authedUser.id })
        );
      }

      dispatch(
        setGlobalErrorActionCreator(`Neutralize Thread Vote: ${error.message}`)
      );
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  upvoteThreadActionCreator,
  downvoteThreadActionCreator,
  neutralizeThreadVoteActionCreator,
  asyncAddThread,
  asyncUpvoteThread,
  asyncDownvoteThread,
  asyncNeutralizeThreadVote,
};
