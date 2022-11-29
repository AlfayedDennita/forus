import { ActionType } from './action';

function threadsReducer(threads = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.UPVOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: [
              ...new Set([...thread.upVotesBy, action.payload.userId]),
            ],
            downVotesBy: thread.downVotesBy.filter(
              (userId) => userId !== action.payload.userId
            ),
          };
        }
        return thread;
      });
    case ActionType.DOWNVOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.filter(
              (userId) => userId !== action.payload.userId
            ),
            downVotesBy: [
              ...new Set([...thread.downVotesBy, action.payload.userId]),
            ],
          };
        }
        return thread;
      });
    case ActionType.NEUTRALIZE_THREAD_VOTE:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.filter(
              (userId) => userId !== action.payload.userId
            ),
            downVotesBy: thread.downVotesBy.filter(
              (userId) => userId !== action.payload.userId
            ),
          };
        }
        return thread;
      });
    default:
      return threads;
  }
}

export default threadsReducer;
