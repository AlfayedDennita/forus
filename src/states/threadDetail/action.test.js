import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { vi } from 'vitest';

import api from '../../utils/api';
import { setGlobalErrorActionCreator } from '../globalError/action';
import {
  addCommentActionCreator,
  asyncAddComment,
  asyncDownvoteComment,
  asyncDownvoteThreadDetail,
  asyncNeutralizeCommentVote,
  asyncNeutralizeThreadDetailVote,
  asyncReceiveThreadDetail,
  asyncUpvoteComment,
  asyncUpvoteThreadDetail,
  downvoteCommentActionCreator,
  downvoteThreadDetailActionCreator,
  neutralizeCommentVoteActionCreator,
  neutralizeThreadDetailVoteActionCreator,
  receiveThreadDetailActionCreator,
  upvoteCommentActionCreator,
  upvoteThreadDetailActionCreator,
} from './action';

/**
 * Test Scenario
 *
 * - asyncReceiveThreadDetail thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action correctly when data fetching failed
 *
 * - asyncUpvoteThreadDetail thunk
 *  - should optimistically dispatch upvote thread detail action
 *  - should dispatch action correctly when data posting failed
 *
 * - asyncDownvoteThreadDetail thunk
 *  - should optimistically dispatch downvote thread detail action
 *  - should dispatch action correctly when data posting failed
 *
 * - asyncNeutralizeThreadDetailVote thunk
 *  - should optimistically dispatch neutralize thread detail vote action
 *  - should dispatch action correctly when data posting failed
 *
 * - asyncAddComment thunk
 *  - should dispatch action correctly when data posting success
 *  - should dispatch action correctly when data posting failed
 *
 * - asyncUpvoteComment thunk
 *  - should optimistically dispatch upvote comment action
 *  - should dispatch action correctly when data posting failed
 *
 * - asyncDownvoteComment thunk
 *  - should optimistically dispatch downvote comment action
 *  - should dispatch action correctly when data posting failed
 *
 * - asyncNeutralizeCommentVote thunk
 *  - should optimistically dispatch neutralize comment vote action
 *  - should dispatch action correctly when data posting failed
 */

const fakeError = new Error('Something went wrong.');
const fakeAuthedUser = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};
const fakeThreadDetail = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
};
const fakeAuthedUserAndThreadDetail = {
  authedUser: fakeAuthedUser,
  threadDetail: fakeThreadDetail,
};
const fakeComment = {
  id: 'comment-1',
  content: 'Ini adalah komentar pertama',
};

describe('asyncReceiveThreadDetail thunk', () => {
  beforeEach(() => {
    api._getThreadDetail = api.getThreadDetail;
  });

  afterEach(() => {
    api.getThreadDetail = api._getThreadDetail;
    delete api._getThreadDetail;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    api.getThreadDetail = () => Promise.resolve(fakeThreadDetail);

    const dispatch = vi.fn();

    await asyncReceiveThreadDetail(fakeThreadDetail.id)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadDetailActionCreator(fakeThreadDetail)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action correctly when data fetching failed', async () => {
    api.getThreadDetail = () => Promise.reject(fakeError);

    const dispatch = vi.fn();

    await asyncReceiveThreadDetail(fakeThreadDetail.id)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setGlobalErrorActionCreator(`Receive Thread Detail: ${fakeError.message}`)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

describe('asyncUpvoteThreadDetail thunk', () => {
  beforeEach(() => {
    api._upvoteThread = api.upvoteThread;
  });

  afterEach(() => {
    api.upvoteThread = api._upvoteThread;
    delete api._upvoteThread;
  });

  it('should optimistically dispatch upvote thread detail action', async () => {
    api.upvoteThread = () => Promise.resolve(1); // 1 = upvoted

    const dispatch = vi.fn();

    await asyncUpvoteThreadDetail()(
      dispatch,
      () => fakeAuthedUserAndThreadDetail
    );

    expect(dispatch).toHaveBeenCalledWith(
      upvoteThreadDetailActionCreator(fakeAuthedUser.id)
    );
  });

  it('should dispatch action correctly when data posting failed', async () => {
    api.upvoteThread = () => Promise.reject(fakeError);

    const dispatch = vi.fn();

    await asyncUpvoteThreadDetail()(
      dispatch,
      () => fakeAuthedUserAndThreadDetail
    );

    expect(dispatch).toHaveBeenCalledWith(
      upvoteThreadDetailActionCreator(fakeAuthedUser.id)
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadDetailActionCreator(fakeThreadDetail)
    );
    expect(dispatch).toHaveBeenCalledWith(
      setGlobalErrorActionCreator(`Upvote Thread Detail: ${fakeError.message}`)
    );
  });
});

describe('asyncDownvoteThreadDetail thunk', () => {
  beforeEach(() => {
    api._downvoteThread = api.downvoteThread;
  });

  afterEach(() => {
    api.downvoteThread = api._downvoteThread;
    delete api._downvoteThread;
  });

  it('should optimistically dispatch downvote thread detail action', async () => {
    api.downvoteThread = () => Promise.resolve(-1); // -1 = downvoted

    const dispatch = vi.fn();

    await asyncDownvoteThreadDetail()(
      dispatch,
      () => fakeAuthedUserAndThreadDetail
    );

    expect(dispatch).toHaveBeenCalledWith(
      downvoteThreadDetailActionCreator(fakeAuthedUser.id)
    );
  });

  it('should dispatch action correctly when data posting failed', async () => {
    api.downvoteThread = () => Promise.reject(fakeError);

    const dispatch = vi.fn();

    await asyncDownvoteThreadDetail(fakeThreadDetail.id)(
      dispatch,
      () => fakeAuthedUserAndThreadDetail
    );

    expect(dispatch).toHaveBeenCalledWith(
      downvoteThreadDetailActionCreator(fakeAuthedUser.id)
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadDetailActionCreator(fakeThreadDetail)
    );
    expect(dispatch).toHaveBeenCalledWith(
      setGlobalErrorActionCreator(
        `Downvote Thread Detail: ${fakeError.message}`
      )
    );
  });
});

describe('asyncNeutralizeThreadDetailVote thunk', () => {
  beforeEach(() => {
    api._neutralizeThreadVote = api.neutralizeThreadVote;
  });

  afterEach(() => {
    api.neutralizeThreadVote = api._neutralizeThreadVote;
    delete api._neutralizeThreadVote;
  });

  it('should optimistically dispatch neutralize thread detail vote action', async () => {
    api.neutralizeThreadVote = () => Promise.resolve(0); // 0 = neutral vote

    const dispatch = vi.fn();

    await asyncNeutralizeThreadDetailVote()(
      dispatch,
      () => fakeAuthedUserAndThreadDetail
    );

    expect(dispatch).toHaveBeenCalledWith(
      neutralizeThreadDetailVoteActionCreator(fakeAuthedUser.id)
    );
  });

  it('should dispatch action correctly when data posting failed', async () => {
    api.neutralizeThreadVote = () => Promise.reject(fakeError);

    const dispatch = vi.fn();

    await asyncNeutralizeThreadDetailVote()(
      dispatch,
      () => fakeAuthedUserAndThreadDetail
    );

    expect(dispatch).toHaveBeenCalledWith(
      neutralizeThreadDetailVoteActionCreator(fakeAuthedUser.id)
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadDetailActionCreator(fakeThreadDetail)
    );
    expect(dispatch).toHaveBeenCalledWith(
      setGlobalErrorActionCreator(
        `Neutralize Thread Detail Vote: ${fakeError.message}`
      )
    );
  });
});

describe('asyncAddComment thunk', () => {
  beforeEach(() => {
    api._createComment = api.createComment;
  });

  afterEach(() => {
    api.createComment = api._createComment;
    delete api._createComment;
  });

  it('should dispatch action correctly when data posting success', async () => {
    api.createComment = () => Promise.resolve(fakeComment);

    const dispatch = vi.fn();

    await asyncAddComment(fakeComment.content)(dispatch, () => ({
      threadDetail: fakeThreadDetail,
    }));

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(addCommentActionCreator(fakeComment));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action correctly when data posting failed', async () => {
    api.createComment = () => Promise.reject(fakeError);

    const dispatch = vi.fn();

    await asyncAddComment(fakeComment.content)(dispatch, () => ({
      threadDetail: fakeThreadDetail,
    }));

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setGlobalErrorActionCreator(`Add Comment: ${fakeError.message}`)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

describe('asyncUpvoteComment thunk', () => {
  beforeEach(() => {
    api._upvoteComment = api.upvoteComment;
  });

  afterEach(() => {
    api.upvoteComment = api._upvoteComment;
    delete api._upvoteComment;
  });

  it('should optimistically dispatch upvote comment action', async () => {
    api.upvoteComment = () => Promise.resolve(1); // 1 = upvoted

    const dispatch = vi.fn();

    await asyncUpvoteComment(fakeComment.id)(
      dispatch,
      () => fakeAuthedUserAndThreadDetail
    );

    expect(dispatch).toHaveBeenCalledWith(
      upvoteCommentActionCreator({
        commentId: fakeComment.id,
        userId: fakeAuthedUser.id,
      })
    );
  });

  it('should dispatch action correctly when data posting failed', async () => {
    api.upvoteComment = () => Promise.reject(fakeError);

    const dispatch = vi.fn();

    await asyncUpvoteComment(fakeComment.id)(
      dispatch,
      () => fakeAuthedUserAndThreadDetail
    );

    expect(dispatch).toHaveBeenCalledWith(
      upvoteCommentActionCreator({
        commentId: fakeComment.id,
        userId: fakeAuthedUser.id,
      })
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadDetailActionCreator(fakeThreadDetail)
    );
    expect(dispatch).toHaveBeenCalledWith(
      setGlobalErrorActionCreator(`Upvote Comment: ${fakeError.message}`)
    );
  });
});

describe('asyncDownvoteComment thunk', () => {
  beforeEach(() => {
    api._downvoteComment = api.downvoteComment;
  });

  afterEach(() => {
    api.downvoteComment = api._downvoteComment;
    delete api._downvoteComment;
  });

  it('should optimistically dispatch downvote comment action', async () => {
    api.downvoteComment = () => Promise.resolve(-1); // -1 = downvoted

    const dispatch = vi.fn();

    await asyncDownvoteComment(fakeComment.id)(
      dispatch,
      () => fakeAuthedUserAndThreadDetail
    );

    expect(dispatch).toHaveBeenCalledWith(
      downvoteCommentActionCreator({
        commentId: fakeComment.id,
        userId: fakeAuthedUser.id,
      })
    );
  });

  it('should dispatch action correctly when data posting failed', async () => {
    api.downvoteComment = () => Promise.reject(fakeError);

    const dispatch = vi.fn();

    await asyncDownvoteComment(fakeComment.id)(
      dispatch,
      () => fakeAuthedUserAndThreadDetail
    );

    expect(dispatch).toHaveBeenCalledWith(
      downvoteCommentActionCreator({
        commentId: fakeComment.id,
        userId: fakeAuthedUser.id,
      })
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadDetailActionCreator(fakeThreadDetail)
    );
    expect(dispatch).toHaveBeenCalledWith(
      setGlobalErrorActionCreator(`Downvote Comment: ${fakeError.message}`)
    );
  });
});

describe('asyncNeutralizeCommentVote thunk', () => {
  beforeEach(() => {
    api._neutralizeCommentVote = api.neutralizeCommentVote;
  });

  afterEach(() => {
    api.neutralizeCommentVote = api._neutralizeCommentVote;
    delete api._neutralizeCommentVote;
  });

  it('should optimistically dispatch neutralize comment vote action', async () => {
    api.neutralizeCommentVote = () => Promise.resolve(0); // 0 = neutral vote

    const dispatch = vi.fn();

    await asyncNeutralizeCommentVote(fakeComment.id)(
      dispatch,
      () => fakeAuthedUserAndThreadDetail
    );

    expect(dispatch).toHaveBeenCalledWith(
      neutralizeCommentVoteActionCreator({
        commentId: fakeComment.id,
        userId: fakeAuthedUser.id,
      })
    );
  });

  it('should dispatch action correctly when data posting failed', async () => {
    api.neutralizeCommentVote = () => Promise.reject(fakeError);

    const dispatch = vi.fn();

    await asyncNeutralizeCommentVote(fakeComment.id)(
      dispatch,
      () => fakeAuthedUserAndThreadDetail
    );

    expect(dispatch).toHaveBeenCalledWith(
      neutralizeCommentVoteActionCreator({
        commentId: fakeComment.id,
        userId: fakeAuthedUser.id,
      })
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadDetailActionCreator(fakeThreadDetail)
    );
    expect(dispatch).toHaveBeenCalledWith(
      setGlobalErrorActionCreator(
        `Neutralize Comment Vote: ${fakeError.message}`
      )
    );
  });
});
