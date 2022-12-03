import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { vi } from 'vitest';

import api from '../../utils/api';
import {
  setAddThreadStatusFailedActionCreator,
  setAddThreadStatusSuccessActionCreator,
} from '../addThreadStatus/action';
import { setGlobalErrorActionCreator } from '../globalError/action';
import {
  addThreadActionCreator,
  asyncAddThread,
  asyncDownvoteThread,
  asyncNeutralizeThreadVote,
  asyncUpvoteThread,
  downvoteThreadActionCreator,
  neutralizeThreadVoteActionCreator,
  receiveThreadsActionCreator,
  upvoteThreadActionCreator,
} from './action';

/**
 * Test Scenario
 *
 * - asyncAddThread thunk
 *  - should dispatch action correctly when data posting success
 *  - should dispatch action correctly when data posting failed
 *
 * - asyncUpvoteThread thunk
 *  - should optimistically dispatch upvote thread action
 *  - should dispatch action correctly when data posting failed
 *
 * - asyncDownvoteThread thunk
 *  - should optimistically dispatch downvote thread action
 *  - should dispatch action correctly when data posting failed
 *
 * - asyncNeutralizeThreadVote thunk
 *  - should optimistically dispatch neutralize thread vote action
 *  - should dispatch action correctly when data posting failed
 */

const fakeError = new Error('Something went wrong.');
const fakeAuthedUser = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};
const fakeThreads = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
  },
];
const fakeAuthedUserAndThreads = {
  authedUser: fakeAuthedUser,
  threads: fakeThreads,
};
const fakeUserIdAndThreadId = {
  userId: fakeAuthedUser.id,
  threadId: fakeThreads[0].id,
};

describe('asyncAddThread thunk', () => {
  beforeEach(() => {
    api._createThread = api.createThread;
  });

  afterEach(() => {
    api.createThread = api._createThread;
    delete api._createThread;
  });

  it('should dispatch action correctly when data posting success', async () => {
    api.createThread = () => Promise.resolve(fakeThreads[0]);

    const dispatch = vi.fn();

    await asyncAddThread(fakeThreads[0])(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      addThreadActionCreator(fakeThreads[0])
    );
    dispatch(setAddThreadStatusSuccessActionCreator(fakeThreads[0].id));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action correctly when data posting failed', async () => {
    api.createThread = () => Promise.reject(fakeError);

    const dispatch = vi.fn();

    await asyncAddThread(fakeThreads[0])(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setAddThreadStatusFailedActionCreator(fakeError.message)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

describe('asyncUpvoteThread thunk', () => {
  beforeEach(() => {
    api._upvoteThread = api.upvoteThread;
  });

  afterEach(() => {
    api.upvoteThread = api._upvoteThread;
    delete api._upvoteThread;
  });

  it('should optimistically dispatch upvote thread action', async () => {
    api.upvoteThread = () => Promise.resolve(1); // 1 = upvoted

    const dispatch = vi.fn();

    await asyncUpvoteThread(fakeThreads[0].id)(
      dispatch,
      () => fakeAuthedUserAndThreads
    );

    expect(dispatch).toHaveBeenCalledWith(
      upvoteThreadActionCreator(fakeUserIdAndThreadId)
    );
  });

  it('should dispatch action correctly when data posting failed', async () => {
    api.upvoteThread = () => Promise.reject(fakeError);

    const dispatch = vi.fn();

    await asyncUpvoteThread(fakeThreads[0].id)(
      dispatch,
      () => fakeAuthedUserAndThreads
    );

    expect(dispatch).toHaveBeenCalledWith(
      upvoteThreadActionCreator(fakeUserIdAndThreadId)
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator(fakeThreads)
    );
    expect(dispatch).toHaveBeenCalledWith(
      setGlobalErrorActionCreator(`Upvote Thread: ${fakeError.message}`)
    );
  });
});

describe('asyncDownvoteThread thunk', () => {
  beforeEach(() => {
    api._downvoteThread = api.downvoteThread;
  });

  afterEach(() => {
    api.downvoteThread = api._downvoteThread;
    delete api._downvoteThread;
  });

  it('should optimistically dispatch downvote thread action', async () => {
    api.downvoteThread = () => Promise.resolve(-1); // -1 = downvoted

    const dispatch = vi.fn();

    await asyncDownvoteThread(fakeThreads[0].id)(
      dispatch,
      () => fakeAuthedUserAndThreads
    );

    expect(dispatch).toHaveBeenCalledWith(
      downvoteThreadActionCreator(fakeUserIdAndThreadId)
    );
  });

  it('should dispatch action correctly when data posting failed', async () => {
    api.downvoteThread = () => Promise.reject(fakeError);

    const dispatch = vi.fn();

    await asyncDownvoteThread(fakeThreads[0].id)(
      dispatch,
      () => fakeAuthedUserAndThreads
    );

    expect(dispatch).toHaveBeenCalledWith(
      downvoteThreadActionCreator(fakeUserIdAndThreadId)
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator(fakeThreads)
    );
    expect(dispatch).toHaveBeenCalledWith(
      setGlobalErrorActionCreator(`Downvote Thread: ${fakeError.message}`)
    );
  });
});

describe('asyncNeutralizeThreadVote thunk', () => {
  beforeEach(() => {
    api._neutralizeThreadVote = api.neutralizeThreadVote;
  });

  afterEach(() => {
    api.neutralizeThreadVote = api._neutralizeThreadVote;
    delete api._neutralizeThreadVote;
  });

  it('should optimistically dispatch neutralize thread vote action', async () => {
    api.neutralizeThreadVote = () => Promise.resolve(0); // 0 = neutral vote

    const dispatch = vi.fn();

    await asyncNeutralizeThreadVote(fakeThreads[0].id)(
      dispatch,
      () => fakeAuthedUserAndThreads
    );

    expect(dispatch).toHaveBeenCalledWith(
      neutralizeThreadVoteActionCreator(fakeUserIdAndThreadId)
    );
  });

  it('should dispatch action correctly when data posting failed', async () => {
    api.neutralizeThreadVote = () => Promise.reject(fakeError);

    const dispatch = vi.fn();

    await asyncNeutralizeThreadVote(fakeThreads[0].id)(
      dispatch,
      () => fakeAuthedUserAndThreads
    );

    expect(dispatch).toHaveBeenCalledWith(
      neutralizeThreadVoteActionCreator(fakeUserIdAndThreadId)
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator(fakeThreads)
    );
    expect(dispatch).toHaveBeenCalledWith(
      setGlobalErrorActionCreator(
        `Neutralize Thread Vote: ${fakeError.message}`
      )
    );
  });
});
