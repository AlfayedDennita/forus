import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.UPVOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: [
          ...new Set([...threadDetail.upVotesBy, action.payload.userId]),
        ],
        downVotesBy: threadDetail.downVotesBy.filter(
          (userId) => userId !== action.payload.userId
        ),
      };
    case ActionType.DOWNVOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.filter(
          (userId) => userId !== action.payload.userId
        ),
        downVotesBy: [
          ...new Set([...threadDetail.downVotesBy, action.payload.userId]),
        ],
      };
    case ActionType.NEUTRALIZE_THREAD_DETAIL_VOTE:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.filter(
          (userId) => userId !== action.payload.userId
        ),
        downVotesBy: threadDetail.downVotesBy.filter(
          (userId) => userId !== action.payload.userId
        ),
      };
    case ActionType.ADD_COMMENT:
      return {
        ...threadDetail,
        comments: [action.payload.comment, ...threadDetail.comments],
      };
    case ActionType.UPVOTE_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: [
                ...new Set([...comment.upVotesBy, action.payload.userId]),
              ],
              downVotesBy: comment.downVotesBy.filter(
                (userId) => userId !== action.payload.userId
              ),
            };
          }
          return comment;
        }),
      };
    case ActionType.DOWNVOTE_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter(
                (userId) => userId !== action.payload.userId
              ),
              downVotesBy: [
                ...new Set([...comment.downVotesBy, action.payload.userId]),
              ],
            };
          }
          return comment;
        }),
      };
    case ActionType.NEUTRALIZE_COMMENT_VOTE:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter(
                (userId) => userId !== action.payload.userId
              ),
              downVotesBy: comment.downVotesBy.filter(
                (userId) => userId !== action.payload.userId
              ),
            };
          }
          return comment;
        }),
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
