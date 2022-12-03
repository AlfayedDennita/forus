import addThreadStatusReducer from './reducer';

/**
 * Test Scenario
 *
 * - addThreadStatusReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the add thread status with the success status and the thread id when given by SET_ADD_THREAD_STATUS_SUCCESS action
 *  - should return the add thread status with the unsuccess status and the error message when given by SET_ADD_THREAD_STATUS_FAILED action
 *  - should return the add thread status with the null status when given by UNSET_ADD_THREAD_STATUS action
 */

describe('addThreadStatusReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = {};
    const action = { type: 'UNKNOWN' };

    const nextState = addThreadStatusReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the add thread status with the success status and the thread id when given by SET_ADD_THREAD_STATUS_SUCCESS action', () => {
    const initialState = {};
    const action = {
      type: 'SET_ADD_THREAD_STATUS_SUCCESS',
      payload: {
        threadId: 'thread-1',
      },
    };

    const nextState = addThreadStatusReducer(initialState, action);

    expect(nextState).toEqual({
      isSuccess: true,
      threadId: action.payload.threadId,
      errorMessage: null,
    });
  });

  it('should return the add thread status with the unsuccess status and the error message when given by SET_ADD_THREAD_STATUS_FAILED action', () => {
    const initialState = {};
    const action = {
      type: 'SET_ADD_THREAD_STATUS_FAILED',
      payload: {
        errorMessage: 'Something went wrong.',
      },
    };

    const nextState = addThreadStatusReducer(initialState, action);

    expect(nextState).toEqual({
      isSuccess: false,
      threadId: null,
      errorMessage: action.payload.errorMessage,
    });
  });

  it('should return the add thread status with the null status when given by UNSET_ADD_THREAD_STATUS action', () => {
    const initialState = {};
    const action = {
      type: 'UNSET_ADD_THREAD_STATUS',
    };

    const nextState = addThreadStatusReducer(initialState, action);

    expect(nextState).toEqual({
      isSuccess: null,
      threadId: null,
      errorMessage: null,
    });
  });
});
