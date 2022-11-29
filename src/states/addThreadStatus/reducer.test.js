import addThreadStatusReducer from './reducer';

describe('addThreadStatusReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = {};
    const action = { type: 'UNKNOWN' };

    const nextState = addThreadStatusReducer(initialState, action);

    expect(nextState).toEqual(1);
  });

  it('should return the add thread status with the success status and thread id when given by SET_ADD_THREAD_STATUS_SUCCESS action', () => {
    const initialState = {
      isSuccess: null,
      threadId: null,
      errorMessage: null,
    };
    const action = {
      type: 'SET_ADD_THREAD_STATUS_SUCCESS',
      payload: {
        threadId: 'thread-1',
      },
    };

    const nextState = addThreadStatusReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      isSuccess: true,
      threadId: action.payload.threadId,
    });
  });

  it('should return the add thread status with the not success status and error message when given by SET_ADD_THREAD_STATUS_FAILURE action', () => {
    const initialState = {
      isSuccess: null,
      threadId: null,
      errorMessage: null,
    };
    const action = {
      type: 'SET_ADD_THREAD_STATUS_FAILURE',
      payload: {
        errorMessage: 'Error encountered.',
      },
    };

    const nextState = addThreadStatusReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      isSuccess: false,
      errorMessage: action.payload.errorMessage,
    });
  });

  it('should return the add thread status with the null status when given by UNSET_ADD_THREAD_STATUS action', () => {
    const initialState = {
      isSuccess: null,
      threadId: null,
      errorMessage: null,
    };
    const action = {
      type: 'UNSET_ADD_THREAD_STATUS',
    };

    const nextState = addThreadStatusReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });
});
