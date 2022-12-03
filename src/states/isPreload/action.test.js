import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { vi } from 'vitest';

import api from '../../utils/api';
import { setAuthedUserActionCreator } from '../authedUser/action';
import { asyncPreloadProcess, setIsPreloadActionCreator } from './action';

/**
 * Test Scenario
 *
 * - asyncPreloadProcess thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action correctly when data fetching failed
 */

const fakeError = new Error('Something went wrong.');
const fakeAuthedUser = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

describe('asyncPreloadProcess thunk', () => {
  beforeEach(() => {
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.getOwnProfile = api._getOwnProfile;
    delete api._getOwnProfile;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    api.getOwnProfile = () => Promise.resolve(fakeAuthedUser);

    const dispatch = vi.fn();

    await asyncPreloadProcess()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator());
    expect(dispatch).toHaveBeenCalledWith(
      setAuthedUserActionCreator(fakeAuthedUser)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action correctly when data fetching failed', async () => {
    api.getOwnProfile = () => Promise.reject(fakeError);

    const dispatch = vi.fn();

    await asyncPreloadProcess()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator());
    expect(dispatch).toHaveBeenCalledWith(setAuthedUserActionCreator(null));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
