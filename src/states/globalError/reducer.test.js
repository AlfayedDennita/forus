import globalErrorReducer from './reducer';

/**
 * Test Scenario
 *
 * - globalErrorReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the global error with the error message and error status to be true when given by SET_GLOBAL_ERROR action
 *  - should return the global error with the error message to be null and error status to be false when given by UNSET_GLOBAL_ERROR action
 */

describe('globalErrorReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = {};
    const action = { type: 'UNKNOWN' };

    const nextState = globalErrorReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the global error with the error message and error status to be true when given by SET_GLOBAL_ERROR action', () => {
    const initialState = {};
    const action = {
      type: 'SET_GLOBAL_ERROR',
      payload: {
        message: 'Something went wrong.',
      },
    };

    const nextState = globalErrorReducer(initialState, action);

    expect(nextState).toEqual({
      isError: true,
      message: action.payload.message,
    });
  });

  it('should return the global error with the error message to be null and error status to be false when given by UNSET_GLOBAL_ERROR action', () => {
    const initialState = {};
    const action = {
      type: 'UNSET_GLOBAL_ERROR',
    };

    const nextState = globalErrorReducer(initialState, action);

    expect(nextState).toEqual({
      isError: false,
      message: null,
    });
  });
});
