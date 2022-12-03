import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { vi } from 'vitest';

import api from '../../utils/api';
import {
  setIsAfterSignUpActionCreator,
  setSignUpErrorMessageActionCreator,
} from '../authStatus/action';
import { asyncRegisterUser } from './action';

/**
 * Test Scenario
 *
 * - asyncRegisterUser thunk
 *  - should dispatch action correctly when data posting success
 *  - should dispatch action correctly when data posting failed
 */

const fakeError = new Error('Something went wrong.');
const fakeUser = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

describe('asyncRegisterUser thunk', () => {
  beforeEach(() => {
    api._registerUser = api.registerUser;
  });

  afterEach(() => {
    api.registerUser = api._registerUser;
    delete api._registerUser;
  });

  it('should dispatch action correctly when data posting success', async () => {
    api.registerUser = () => Promise.resolve(fakeUser);

    const dispatch = vi.fn();

    await asyncRegisterUser({ name: '', email: '', password: '' })(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setIsAfterSignUpActionCreator());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action correctly when data posting failed', async () => {
    api.registerUser = () => Promise.reject(fakeError);

    const dispatch = vi.fn();

    await asyncRegisterUser({ name: '', email: '', password: '' })(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setSignUpErrorMessageActionCreator(fakeError.message)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
