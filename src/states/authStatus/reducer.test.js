import authStatusReducer from './reducer';

describe('authStatusReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = {};
    const action = { type: 'UNKNOWN' };

    const nextState = authStatusReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the auth status with the sign in error message when given by SET_SIGN_IN_ERROR_MESSAGE action', () => {
    const initialState = {};
    const action = {
      type: 'SET_SIGN_IN_ERROR_MESSAGE',
      payload: {
        message: 'Error Encountered',
      },
    };

    const nextState = authStatusReducer(initialState, action);

    expect(nextState).toEqual({
      signInErrorMessage: action.payload.message,
    });
  });

  it('should return the auth status with the sign in error message to be null when given by UNSET_SIGN_IN_ERROR_MESSAGE action', () => {
    const initialState = {};
    const action = {
      type: 'UNSET_SIGN_IN_ERROR_MESSAGE',
    };

    const nextState = authStatusReducer(initialState, action);

    expect(nextState).toEqual({
      signInErrorMessage: null,
    });
  });

  it('should return the auth status with the sign up error message when given by SET_SIGN_UP_ERROR_MESSAGE action', () => {
    const initialState = {};
    const action = {
      type: 'SET_SIGN_UP_ERROR_MESSAGE',
      payload: {
        message: 'Error Encountered',
      },
    };

    const nextState = authStatusReducer(initialState, action);

    expect(nextState).toEqual({
      signUpErrorMessage: action.payload.message,
    });
  });

  it('should return the auth status with the sign up error message to be null when given by UNSET_SIGN_UP_ERROR_MESSAGE action', () => {
    const initialState = {};
    const action = {
      type: 'UNSET_SIGN_UP_ERROR_MESSAGE',
    };

    const nextState = authStatusReducer(initialState, action);

    expect(nextState).toEqual({
      signUpErrorMessage: null,
    });
  });

  it('should return the auth status with the after sign up status to be true when given by SET_IS_AFTER_SIGN_UP action', () => {
    const initialState = {};
    const action = {
      type: 'SET_IS_AFTER_SIGN_UP',
    };

    const nextState = authStatusReducer(initialState, action);

    expect(nextState).toEqual({
      isAfterSignUp: true,
    });
  });

  it('should return the auth status with the after sign up status to be false when given by UNSET_IS_AFTER_SIGN_UP action', () => {
    const initialState = {};
    const action = {
      type: 'UNSET_IS_AFTER_SIGN_UP',
    };

    const nextState = authStatusReducer(initialState, action);

    expect(nextState).toEqual({
      isAfterSignUp: false,
    });
  });
});
