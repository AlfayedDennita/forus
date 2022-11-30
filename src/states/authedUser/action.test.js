import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { vi } from 'vitest';

import api from '../../utils/api';
import { setSignInErrorMessageActionCreator } from '../authStatus/action';
import {
  asyncSetAuthedUser,
  setAuthedUserActionCreator,
  unsetAuthedUser,
  unsetAuthedUserActionCenter,
} from './action';

/**
 * Test Scenario
 *
 * - asyncSetAuthedUser thunk
 *  - should dispatch action correctly when data fetching and posting success
 *  - should dispatch action correctly when data fetching and posting failed
 *
 * - unsetAuthedUser thunk
 *  - should dispatch action correctly
 */

const fakeError = new Error('Something went wrong.');
const fakeToken = 'abcdefgh';
const fakeAuthedUser = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

describe('asyncSetAuthedUser thunk', () => {
  beforeEach(() => {
    api._login = api.login;
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.login = api._login;
    api.getOwnProfile = api._getOwnProfile;

    delete api._login;
    delete api._getOwnProfile;
  });

  it('should dispatch action correctly when data fetching and posting success', async () => {
    api.login = () => Promise.resolve(fakeToken);
    api.getOwnProfile = () => Promise.resolve(fakeAuthedUser);

    const dispatch = vi.fn();

    await asyncSetAuthedUser({ email: '', password: '' })(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setAuthedUserActionCreator(fakeAuthedUser)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action correctly when data fetching and posting failed', async () => {
    api.login = () => Promise.reject(fakeError);
    api.getOwnProfile = () => Promise.reject(fakeError);

    const dispatch = vi.fn();

    await asyncSetAuthedUser({ email: '', password: '' })(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setSignInErrorMessageActionCreator(fakeError.message)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

describe('unsetAuthedUser thunk', () => {
  it('should dispatch action correctly', () => {
    const dispatch = vi.fn();

    unsetAuthedUser()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(unsetAuthedUserActionCenter());
  });
});
