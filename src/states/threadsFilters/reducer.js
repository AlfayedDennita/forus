import { ActionType } from './action';

function threadsFiltersReducer(
  threadsFilters = { searchQuery: '' },
  action = {}
) {
  switch (action.type) {
    case ActionType.SET_SEARCH_QUERY:
      return {
        ...threadsFilters,
        searchQuery: action.payload.searchQuery,
      };
    default:
      return threadsFilters;
  }
}

export default threadsFiltersReducer;
