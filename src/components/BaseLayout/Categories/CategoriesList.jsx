import React from 'react';
import { useSelector } from 'react-redux';

import SpinLoading from '../../ui/SpinLoading';
import CategoriesItem from './CategoriesItem';

function CategoriesList() {
  const threads = useSelector((states) => states.threads);

  if (threads === null) {
    return <SpinLoading />;
  }

  const categories = [
    ...new Set(threads.map((thread) => thread.category)),
  ].sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  if (categories.length <= 0) {
    return (
      <p className="py-4 text-center italic text-zinc-300">No categories.</p>
    );
  }

  return (
    <ul className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-3">
      {categories.map((category) => (
        <CategoriesItem key={category} categoryName={category} />
      ))}
    </ul>
  );
}

export default CategoriesList;
