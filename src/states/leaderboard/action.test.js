import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { vi } from 'vitest';

import api from '../../utils/api';
import { setGlobalErrorActionCreator } from '../globalError/action';
import {
  asyncReceiveLeaderboard,
  receiveLeaderboardActionCreator,
} from './action';

/**
 * Test Scenario
 *
 * - asyncReceiveLeaderboard thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action correctly when data fetching failed
 */

const fakeError = new Error('Something went wrong.');
const fakeLeaderboard = [
  {
    user: {
      id: 'user-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
];

describe('asyncReceiveLeaderboard thunk', () => {
  beforeEach(() => {
    api._getLeaderboard = api.getLeaderboard;
  });

  afterEach(() => {
    api.getLeaderboard = api._getLeaderboard;
    delete api._getLeaderboard;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    api.getLeaderboard = () => Promise.resolve(fakeLeaderboard);

    const dispatch = vi.fn();

    await asyncReceiveLeaderboard()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardActionCreator(fakeLeaderboard)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action correctly when data fetching failed', async () => {
    api.getLeaderboard = () => Promise.reject(fakeError);

    const dispatch = vi.fn();

    await asyncReceiveLeaderboard()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setGlobalErrorActionCreator(`Receive Leaderboard: ${fakeError.message}`)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
