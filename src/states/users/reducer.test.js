import usersReducer from './reducer';

/**
 * Test Scenario
 *
 * - usersReducer
 *  - should return the initial state when given by unknown action
 *  - should return the users when given by RECEIVE_USERS action
 */

describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    const nextState = usersReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the users when given by RECEIVE_USERS action', () => {
    const initialState = null;
    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        users: [
          {
            id: 'user-1',
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
        ],
      },
    };

    const nextState = usersReducer(initialState, action);

    expect(nextState).toEqual(action.payload.users);
  });
});
