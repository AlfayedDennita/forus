import threadsReducer from './reducer';

/**
 * Test Scenario
 *
 * - threadsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the sorted threads (by created-date, latest to oldest) when given by RECEIVE_THREADS action
 *  - should return the threads with the new thread when given by ADD_THREAD action
 *  - should return the threads with the upvoted thread when given by UPVOTE_THREAD action and initially neutral vote
 *  - should return the threads with the upvoted thread when given by UPVOTE_THREAD action and initially upvoted
 *  - should return the threads with the upvoted thread when given by UPVOTE_THREAD action and initially downvoted
 *  - should return the threads with the downvoted thread when given by DOWNVOTE_THREAD action and initially neutral vote
 *  - should return the threads with the downvoted thread when given by DOWNVOTE_THREAD action and initially upvoted
 *  - should return the threads with the downvoted thread when given by DOWNVOTE_THREAD action and initially downvoted
 *  - should return the threads with the neutralized thread vote when given by NEUTRALIZE_THREAD_VOTE action and initially neutral vote
 *  - should return the threads with the neutralized thread vote when given by NEUTRALIZE_THREAD_VOTE action and initially upvoted
 *  - should return the threads with the neutralized thread vote when given by NEUTRALIZE_THREAD_VOTE action and initially downvoted
 */

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the sorted threads (by created-date, latest to oldest) when given by RECEIVE_THREADS action', () => {
    const initialState = null;
    const unsortedThreads = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        createdAt: '2010-06-21T07:00:00.000Z', // 2010
      },
      {
        id: 'thread-2',
        title: 'Thread Kedua',
        createdAt: '2022-06-21T07:00:00.000Z', // 2022
      },
    ];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: { threads: unsortedThreads },
    };

    const nextState = threadsReducer(initialState, action);

    const sortedThreads = unsortedThreads.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    expect(nextState).toEqual(sortedThreads);
  });

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        createdAt: '2010-06-21T07:00:00.000Z',
      },
    ];
    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Thread Kedua',
          createdAt: '2022-06-21T07:00:00.000Z',
        },
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the threads with the upvoted thread when given by UPVOTE_THREAD action and initially neutral vote', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: 'UPVOTE_THREAD',
      payload: {
        threadId: initialState[0].id,
        userId: 'user-2',
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      },
    ]);
  });

  it('should return the threads with the upvoted thread when given by UPVOTE_THREAD action and initially upvoted', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        upVotesBy: ['user-2'],
        downVotesBy: [],
      },
    ];
    const action = {
      type: 'UPVOTE_THREAD',
      payload: {
        threadId: initialState[0].id,
        userId: initialState[0].upVotesBy[0],
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      },
    ]);
  });

  it('should return the threads with the upvoted thread when given by UPVOTE_THREAD action and initially downvoted', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        upVotesBy: [],
        downVotesBy: ['user-2'],
      },
    ];
    const action = {
      type: 'UPVOTE_THREAD',
      payload: {
        threadId: initialState[0].id,
        userId: initialState[0].downVotesBy[0],
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      },
    ]);
  });

  it('should return the threads with the downvoted thread when given by DOWNVOTE_THREAD action and initially neutral vote', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: 'DOWNVOTE_THREAD',
      payload: {
        threadId: initialState[0].id,
        userId: 'user-2',
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the downvoted thread when given by DOWNVOTE_THREAD action and initially upvoted', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        upVotesBy: ['user-2'],
        downVotesBy: [],
      },
    ];
    const action = {
      type: 'DOWNVOTE_THREAD',
      payload: {
        threadId: initialState[0].id,
        userId: initialState[0].upVotesBy[0],
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the downvoted thread when given by DOWNVOTE_THREAD action and initially downvoted', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        upVotesBy: [],
        downVotesBy: ['user-2'],
      },
    ];
    const action = {
      type: 'DOWNVOTE_THREAD',
      payload: {
        threadId: initialState[0].id,
        userId: initialState[0].downVotesBy[0],
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the neutralized thread vote when given by NEUTRALIZE_THREAD_VOTE action and initially neutral vote', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: 'NEUTRALIZE_THREAD_VOTE',
      payload: {
        threadId: initialState[0].id,
        userId: 'user-2',
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [],
      },
    ]);
  });

  it('should return the threads with the neutralized thread vote when given by NEUTRALIZE_THREAD_VOTE action and initially upvoted', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        upVotesBy: ['user-2'],
        downVotesBy: [],
      },
    ];
    const action = {
      type: 'NEUTRALIZE_THREAD_VOTE',
      payload: {
        threadId: initialState[0].id,
        userId: initialState[0].upVotesBy[0],
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [],
      },
    ]);
  });

  it('should return the threads with the neutralized thread vote when given by NEUTRALIZE_THREAD_VOTE action and initially downvoted', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        upVotesBy: [],
        downVotesBy: ['user-2'],
      },
    ];
    const action = {
      type: 'NEUTRALIZE_THREAD_VOTE',
      payload: {
        threadId: initialState[0].id,
        userId: initialState[0].downVotesBy[0],
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [],
      },
    ]);
  });
});
