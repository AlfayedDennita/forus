import authedUserReducer from './reducer';

describe('authedUserReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    const nextState = authedUserReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the authed user when given by SET_AUTHED_USER action', () => {
    const initialState = null;
    const action = {
      type: 'SET_AUTHED_USER',
      payload: {
        authedUser: {
          id: 'john_doe',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
      },
    };

    const nextState = authedUserReducer(initialState, action);

    expect(nextState).toEqual(action.payload.authedUser);
  });

  it('should return the null when given by UNSET_AUTHED_USER action', () => {
    const initialState = null;
    const action = {
      type: 'UNSET_AUTHED_USER',
    };

    const nextState = authedUserReducer(initialState, action);

    expect(nextState).toBeNull();
  });
});
