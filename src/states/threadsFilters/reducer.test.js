import threadsFiltersReducer from './reducer';

describe('threadsFiltersReducer', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = {};
    const action = { type: 'UNKNOWN' };

    const nextState = threadsFiltersReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the threads filters with search query when given by SET_SEARCH_QUERY action', () => {
    const initialState = {};
    const action = {
      type: 'SET_SEARCH_QUERY',
      payload: {
        searchQuery: 'query',
      },
    };

    const nextState = threadsFiltersReducer(initialState, action);

    expect(nextState).toEqual(action.payload);
  });
});
