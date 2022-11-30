import threadDetailReducer from './reducer';

/**
 * Test Scenario
 *
 * - threadDetailReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
 *  - should return the thread detail with the upvoted status when given by UPVOTE_THREAD_DETAIL action and initially neutral vote
 *  - should return the thread detail with the upvoted status when given by UPVOTE_THREAD_DETAIL action and initially upvoted
 *  - should return the thread detail with the upvoted status when given by UPVOTE_THREAD_DETAIL action and initially downvoted
 *  - should return the thread detail with the downvoted status when given by DOWNVOTE_THREAD_DETAIL action and initially neutral vote
 *  - should return the thread detail with the downvoted status when given by DOWNVOTE_THREAD_DETAIL action and initially upvoted
 *  - should return the thread detail with the downvoted status when given by DOWNVOTE_THREAD_DETAIL action and initially downvoted
 *  - should return the thread detail with the neutral vote status when given by NEUTRALIZE_THREAD_DETAIL_VOTE action and initially neutral vote
 *  - should return the thread detail with the neutral vote status when given by NEUTRALIZE_THREAD_DETAIL_VOTE action and initially upvoted
 *  - should return the thread detail with the neutral vote status when given by NEUTRALIZE_THREAD_DETAIL_VOTE action and initially downvoted
 *  - should return the thread detail with the new comment when given by ADD_COMMENT action
 *  - should return the thread detail with the upvoted comment status when given by UPVOTE_COMMENT action and initially neutral vote
 *  - should return the thread detail with the upvoted comment status when given by UPVOTE_COMMENT action and initially upvoted
 *  - should return the thread detail with the upvoted comment status when given by UPVOTE_COMMENT action and initially downvoted
 *  - should return the thread detail with the downvoted comment status when given by DOWNVOTE_COMMENT action and initially neutral vote
 *  - should return the thread detail with the downvoted comment status when given by DOWNVOTE_COMMENT action and initially upvoted
 *  - should return the thread detail with the downvoted comment status when given by DOWNVOTE_COMMENT action and initially downvoted
 *  - should return the thread detail with the neutral comment vote status when given by NEUTRALIZE_COMMENT_VOTE action and initially neutral vote
 *  - should return the thread detail with the neutral comment vote status when given by NEUTRALIZE_COMMENT_VOTE action and initially upvoted
 *  - should return the thread detail with the neutral comment vote status when given by NEUTRALIZE_COMMENT_VOTE action and initially downvoted
 */

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the thread detail when given by RECEIVE_THREAD_DETAIL action', () => {
    const initialState = null;
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Thread Pertama',
        },
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return the thread detail with the upvoted status when given by UPVOTE_THREAD_DETAIL action and initially neutral vote', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: 'UPVOTE_THREAD_DETAIL',
      payload: { userId: 'user-2' },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId],
      downVotesBy: [],
    });
  });

  it('should return the thread detail with the upvoted status when given by UPVOTE_THREAD_DETAIL action and initially upvoted', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      upVotesBy: ['user-2'],
      downVotesBy: [],
    };
    const action = {
      type: 'UPVOTE_THREAD_DETAIL',
      payload: { userId: initialState.upVotesBy[0] },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId],
      downVotesBy: [],
    });
  });

  it('should return the thread detail with the upvoted status when given by UPVOTE_THREAD_DETAIL action and initially downvoted', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      upVotesBy: [],
      downVotesBy: ['user-2'],
    };
    const action = {
      type: 'UPVOTE_THREAD_DETAIL',
      payload: { userId: initialState.downVotesBy[0] },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId],
      downVotesBy: [],
    });
  });

  it('should return the thread detail with the downvoted status when given by DOWNVOTE_THREAD_DETAIL action and initially neutral vote', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: 'DOWNVOTE_THREAD_DETAIL',
      payload: { userId: 'user-2' },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [action.payload.userId],
    });
  });

  it('should return the thread detail with the downvoted status when given by DOWNVOTE_THREAD_DETAIL action and initially upvoted', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      upVotesBy: ['user-2'],
      downVotesBy: [],
    };
    const action = {
      type: 'DOWNVOTE_THREAD_DETAIL',
      payload: { userId: initialState.upVotesBy[0] },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [action.payload.userId],
    });
  });

  it('should return the thread detail with the downvoted status when given by DOWNVOTE_THREAD_DETAIL action and initially downvoted', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      upVotesBy: [],
      downVotesBy: ['user-2'],
    };
    const action = {
      type: 'DOWNVOTE_THREAD_DETAIL',
      payload: { userId: initialState.downVotesBy[0] },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [action.payload.userId],
    });
  });

  it('should return the thread detail with the neutral vote status when given by NEUTRALIZE_THREAD_DETAIL_VOTE action and initially neutral vote', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: 'NEUTRALIZE_THREAD_DETAIL_VOTE',
      payload: { userId: 'user-2' },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [],
    });
  });

  it('should return the thread detail with the neutral vote status when given by NEUTRALIZE_THREAD_DETAIL_VOTE action and initially upvoted', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      upVotesBy: ['user-2'],
      downVotesBy: [],
    };
    const action = {
      type: 'NEUTRALIZE_THREAD_DETAIL_VOTE',
      payload: { userId: initialState.upVotesBy[0] },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [],
    });
  });

  it('should return the thread detail with the neutral vote status when given by NEUTRALIZE_THREAD_DETAIL_VOTE action and initially downvoted', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      upVotesBy: [],
      downVotesBy: ['user-2'],
    };
    const action = {
      type: 'NEUTRALIZE_THREAD_DETAIL_VOTE',
      payload: { userId: initialState.downVotesBy[0] },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [],
    });
  });

  it('should return the thread detail with the new comment when given by ADD_COMMENT action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      comments: [],
    };
    const action = {
      type: 'ADD_COMMENT',
      payload: {
        comment: {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
        },
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment, ...initialState.comments],
    });
  });

  it('should return the thread detail with the upvoted comment status when given by UPVOTE_COMMENT action and initially neutral vote', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'UPVOTE_COMMENT',
      payload: {
        commentId: initialState.comments[0].id,
        userId: 'user-2',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [action.payload.userId],
          downVotesBy: [],
        },
      ],
    });
  });

  it('should return the thread detail with the upvoted comment status when given by UPVOTE_COMMENT action and initially upvoted', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          upVotesBy: ['user-2'],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'UPVOTE_COMMENT',
      payload: {
        commentId: initialState.comments[0].id,
        userId: initialState.comments[0].upVotesBy[0],
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [action.payload.userId],
          downVotesBy: [],
        },
      ],
    });
  });

  it('should return the thread detail with the upvoted comment status when given by UPVOTE_COMMENT action and initially downvoted', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          upVotesBy: [],
          downVotesBy: ['user-2'],
        },
      ],
    };
    const action = {
      type: 'UPVOTE_COMMENT',
      payload: {
        commentId: initialState.comments[0].id,
        userId: initialState.comments[0].downVotesBy[0],
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [action.payload.userId],
          downVotesBy: [],
        },
      ],
    });
  });

  it('should return the thread detail with the downvoted comment status when given by DOWNVOTE_COMMENT action and initially neutral vote', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'DOWNVOTE_COMMENT',
      payload: {
        commentId: initialState.comments[0].id,
        userId: 'user-2',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [action.payload.userId],
        },
      ],
    });
  });

  it('should return the thread detail with the downvoted comment status when given by DOWNVOTE_COMMENT action and initially upvoted', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          upVotesBy: ['user-2'],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'DOWNVOTE_COMMENT',
      payload: {
        commentId: initialState.comments[0].id,
        userId: initialState.comments[0].upVotesBy[0],
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [action.payload.userId],
        },
      ],
    });
  });

  it('should return the thread detail with the downvoted comment status when given by DOWNVOTE_COMMENT action and initially downvoted', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          upVotesBy: [],
          downVotesBy: ['user-2'],
        },
      ],
    };
    const action = {
      type: 'DOWNVOTE_COMMENT',
      payload: {
        commentId: initialState.comments[0].id,
        userId: initialState.comments[0].downVotesBy[0],
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [action.payload.userId],
        },
      ],
    });
  });

  it('should return the thread detail with the neutral comment vote status when given by NEUTRALIZE_COMMENT_VOTE action and initially neutral vote', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'NEUTRALIZE_COMMENT_VOTE',
      payload: {
        commentId: initialState.comments[0].id,
        userId: 'user-2',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    });
  });

  it('should return the thread detail with the neutral comment vote status when given by NEUTRALIZE_COMMENT_VOTE action and initially upvoted', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          upVotesBy: ['user-2'],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'NEUTRALIZE_COMMENT_VOTE',
      payload: {
        commentId: initialState.comments[0].id,
        userId: initialState.comments[0].upVotesBy[0],
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    });
  });

  it('should return the thread detail with the neutral comment vote status when given by NEUTRALIZE_COMMENT_VOTE action and initially downvoted', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          upVotesBy: [],
          downVotesBy: ['user-2'],
        },
      ],
    };
    const action = {
      type: 'NEUTRALIZE_COMMENT_VOTE',
      payload: {
        commentId: initialState.comments[0].id,
        userId: initialState.comments[0].downVotesBy[0],
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    });
  });
});
