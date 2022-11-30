import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { vi } from 'vitest';

import api from '../../utils/api';
import { setGlobalErrorActionCreator } from '../globalError/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { asyncPopulateUsersAndThreads } from './action';

/**
 * Test Scenario
 *
 * - asyncPopulateUsersAndThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action correctly when data fetching failed
 */

const fakeError = new Error('Something went wrong.');
const fakeUsers = [
  {
    id: 'user-1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];
const fakeThreads = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
  },
];

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;

    delete api._getAllUsers;
    delete api._getAllThreads;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    api.getAllUsers = () => Promise.resolve(fakeUsers);
    api.getAllThreads = () => Promise.resolve(fakeThreads);

    const dispatch = vi.fn();

    await asyncPopulateUsersAndThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsers));
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator(fakeThreads)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action correctly when data fetching failed', async () => {
    api.getAllUsers = () => Promise.reject(fakeError);
    api.getAllThreads = () => Promise.reject(fakeError);

    const dispatch = vi.fn();

    await asyncPopulateUsersAndThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setGlobalErrorActionCreator(
        `Populate Users and Threads: ${fakeError.message}`
      )
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
