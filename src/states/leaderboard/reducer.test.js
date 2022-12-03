import leaderboardReducer from './reducer';

/**
 * Test Scenario
 *
 * - leaderboardReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the leaderboard when given by RECEIVE_LEADERBOARD action
 */

describe('leaderboardReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    const nextState = leaderboardReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the leaderboard when given by RECEIVE_LEADERBOARD action', () => {
    const initialState = null;
    const action = {
      type: 'RECEIVE_LEADERBOARD',
      payload: {
        leaderboard: [
          {
            users: {
              id: 'user-1',
              name: 'John Doe',
              email: 'john@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 10,
          },
        ],
      },
    };

    const nextState = leaderboardReducer(initialState, action);

    expect(nextState).toEqual(action.payload.leaderboard);
  });
});
