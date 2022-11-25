import { string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import stringToColor from 'string-to-color';

import { toKebabCase, truncateString } from '../../../utils';

function CategoriesItem({ categoryName }) {
  return (
    <li>
      <Link
        to={`threads/category/${categoryName}`}
        style={{
          // 40 in hex = 0.25 alpha value.
          '--bg-hover': `${stringToColor(categoryName)}40`,
          '--border-hover': stringToColor(categoryName),
        }}
        className="rounded border border-zinc-400 py-1 px-2 text-sm text-zinc-500 transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--bg-hover)] hover:text-zinc-700"
        title={`See ${categoryName} Threads`}
      >
        #{truncateString(toKebabCase(categoryName), 15)}
      </Link>
    </li>
  );
}

CategoriesItem.propTypes = {
  categoryName: string.isRequired,
};

export default CategoriesItem;
