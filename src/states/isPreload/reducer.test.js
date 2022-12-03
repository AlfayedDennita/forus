import isPreloadReducer from './reducer';

/**
 * Test Scenario
 *
 * - isPreloadReducer function
 *  - should return the initial state when given by unknown action
 *  - should return true when given by SET_IS_PRELOAD action
 *  - should return false when given by UNSET_IS_PRELOAD action
 */

describe('isPreloadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = true;
    const action = { type: 'UNKNOWN' };

    const nextState = isPreloadReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return true when given by SET_IS_PRELOAD action', () => {
    const initialState = true;
    const action = { type: 'SET_IS_PRELOAD' };

    const nextState = isPreloadReducer(initialState, action);

    expect(nextState).toEqual(true);
  });

  it('should return false when given by UNSET_IS_PRELOAD action', () => {
    const initialState = true;
    const action = { type: 'UNSET_IS_PRELOAD' };

    const nextState = isPreloadReducer(initialState, action);

    expect(nextState).toEqual(false);
  });
});
