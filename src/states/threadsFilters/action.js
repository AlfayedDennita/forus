const ActionType = {
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
};

function setSearchQueryActionCreator(searchQuery) {
  return {
    type: ActionType.SET_SEARCH_QUERY,
    payload: { searchQuery },
  };
}

export { ActionType, setSearchQueryActionCreator };
