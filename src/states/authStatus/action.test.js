import { vi } from 'vitest';

import {
  unsetAllAuthStatus,
  unsetIsAfterSignUpActionCreator,
  unsetSignInErrorMessageActionCreator,
  unsetSignUpErrorMessageActionCreator,
} from './action';

/**
 * Test Scenario
 *
 * - unsetAllAuthStatus thunk
 *  - should dispatch action correctly
 */

describe('unsetAllAuthStatus thunk', () => {
  it('should dispatch action correctly', () => {
    const dispatch = vi.fn();

    unsetAllAuthStatus()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(
      unsetSignInErrorMessageActionCreator()
    );
    expect(dispatch).toHaveBeenCalledWith(
      unsetSignUpErrorMessageActionCreator()
    );
    expect(dispatch).toHaveBeenCalledWith(unsetIsAfterSignUpActionCreator());
  });
});
