import React from 'react';

import BaseSectionCard from '../BaseSectionCard';
import CategoriesList from './CategoriesList';

function Categories() {
  return (
    <BaseSectionCard heading="Thread Categories" withHorizontalPadding>
      <CategoriesList />
    </BaseSectionCard>
  );
}

export default Categories;
