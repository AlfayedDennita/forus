import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { setSearchQueryActionCreator } from '../../../states/threadsFilters/action';
import InputField from '../../ui/InputField';

function ThreadsSearchInput() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = useSelector(
    (states) => states.threadsFilters.searchQuery
  );

  useEffect(() => {
    const titleParam = searchParams.get('title') || '';
    dispatch(setSearchQueryActionCreator(titleParam));
  }, [dispatch, searchParams]);

  const onInputChange = (event) => {
    const query = event.target.value;
    setSearchParams({ title: query });
  };

  return (
    <InputField
      type="search"
      containerClassName="px-5 lg:px-6 mt-1"
      title="Search Threads by Title"
      onChange={onInputChange}
      value={searchQuery}
      placeholder="Search some threads by title here ..."
    />
  );
}

export default ThreadsSearchInput;
