import { hideLoading, showLoading } from 'react-redux-loading-bar';

import api from '../../utils/api';
import { setGlobalErrorActionCreator } from '../globalError/action';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  UPVOTE_THREAD_DETAIL: 'UPVOTE_THREAD_DETAIL',
  DOWNVOTE_THREAD_DETAIL: 'DOWNVOTE_THREAD_DETAIL',
  NEUTRALIZE_THREAD_DETAIL_VOTE: 'NEUTRALIZE_THREAD_DETAIL_VOTE',
  ADD_COMMENT: 'ADD_COMMENT',
  UPVOTE_COMMENT: 'UPVOTE_COMMENT',
  DOWNVOTE_COMMENT: 'DOWNVOTE_COMMENT',
  NEUTRALIZE_COMMENT_VOTE: 'NEUTRALIZE_COMMENT_VOTE',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: { threadDetail },
  };
}

function upvoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.UPVOTE_THREAD_DETAIL,
    payload: { userId },
  };
}

function downvoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.DOWNVOTE_THREAD_DETAIL,
    payload: { userId },
  };
}

function neutralizeThreadDetailVoteActionCreator(userId) {
  return {
    type: ActionType.NEUTRALIZE_THREAD_DETAIL_VOTE,
    payload: { userId },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: { comment },
  };
}

function upvoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.UPVOTE_COMMENT,
    payload: { commentId, userId },
  };
}

function downvoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.DOWNVOTE_COMMENT,
    payload: { commentId, userId },
  };
}

function neutralizeCommentVoteActionCreator({ commentId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_COMMENT_VOTE,
    payload: { commentId, userId },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      dispatch(
        setGlobalErrorActionCreator(`Receive Thread Detail: ${error.message}`)
      );
    }

    dispatch(hideLoading());
  };
}

function asyncUpvoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authedUser, threadDetail } = getState();
    dispatch(upvoteThreadDetailActionCreator(authedUser.id));

    try {
      await api.upvoteThread(threadDetail.id);
    } catch (error) {
      dispatch(receiveThreadDetailActionCreator(threadDetail));
      dispatch(
        setGlobalErrorActionCreator(`Upvote Thread Detail: ${error.message}`)
      );
    }
  };
}

function asyncDownvoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authedUser, threadDetail } = getState();
    dispatch(downvoteThreadDetailActionCreator(authedUser.id));

    try {
      await api.downvoteThread(threadDetail.id);
    } catch (error) {
      dispatch(receiveThreadDetailActionCreator(threadDetail));
      dispatch(
        setGlobalErrorActionCreator(`Downvote Thread Detail: ${error.message}`)
      );
    }
  };
}

function asyncNeutralizeThreadDetailVote() {
  return async (dispatch, getState) => {
    const { authedUser, threadDetail } = getState();
    dispatch(neutralizeThreadDetailVoteActionCreator(authedUser.id));

    try {
      await api.neutralizeThreadVote(threadDetail.id);
    } catch (error) {
      dispatch(receiveThreadDetailActionCreator(threadDetail));
      dispatch(
        setGlobalErrorActionCreator(
          `Neutralize Thread Detail Vote: ${error.message}`
        )
      );
    }
  };
}

function asyncAddComment(content) {
  return async (dispatch, getState) => {
    const { threadDetail } = getState();
    dispatch(showLoading());

    try {
      const comment = await api.createComment(threadDetail.id, content);
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      dispatch(setGlobalErrorActionCreator(`Add Comment: ${error.message}`));
    }

    dispatch(hideLoading());
  };
}

function asyncUpvoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authedUser, threadDetail } = getState();
    dispatch(upvoteCommentActionCreator({ commentId, userId: authedUser.id }));

    try {
      await api.upvoteComment({ threadId: threadDetail.id, commentId });
    } catch (error) {
      dispatch(receiveThreadDetailActionCreator(threadDetail));
      dispatch(setGlobalErrorActionCreator(`Upvote Comment: ${error.message}`));
    }
  };
}

function asyncDownvoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authedUser, threadDetail } = getState();
    dispatch(
      downvoteCommentActionCreator({ commentId, userId: authedUser.id })
    );

    try {
      await api.downvoteComment({ threadId: threadDetail.id, commentId });
    } catch (error) {
      dispatch(receiveThreadDetailActionCreator(threadDetail));
      dispatch(
        setGlobalErrorActionCreator(`Downvote Comment: ${error.message}`)
      );
    }
  };
}

function asyncNeutralizeCommentVote(commentId) {
  return async (dispatch, getState) => {
    const { authedUser, threadDetail } = getState();
    dispatch(
      neutralizeCommentVoteActionCreator({ commentId, userId: authedUser.id })
    );

    try {
      await api.neutralizeCommentVote({ threadId: threadDetail.id, commentId });
    } catch (error) {
      dispatch(receiveThreadDetailActionCreator(threadDetail));
      dispatch(
        setGlobalErrorActionCreator(`Neutralize Comment Vote: ${error.message}`)
      );
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  upvoteThreadDetailActionCreator,
  downvoteThreadDetailActionCreator,
  neutralizeThreadDetailVoteActionCreator,
  addCommentActionCreator,
  upvoteCommentActionCreator,
  downvoteCommentActionCreator,
  neutralizeCommentVoteActionCreator,
  asyncReceiveThreadDetail,
  asyncUpvoteThreadDetail,
  asyncDownvoteThreadDetail,
  asyncNeutralizeThreadDetailVote,
  asyncAddComment,
  asyncUpvoteComment,
  asyncDownvoteComment,
  asyncNeutralizeCommentVote,
};
