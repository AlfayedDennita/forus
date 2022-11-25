import React from 'react';
import { Link } from 'react-router-dom';

import BrandIcon from '../../ui/BrandIcon';

function NavbarLogo() {
  return (
    <Link to="/" className="group flex items-center gap-2" title="Home">
      <BrandIcon />
      <h1 className="font-heading text-2xl font-bold">
        <span>
          <span className="transition-colors group-hover:text-primary-500">
            For
          </span>
          <span className="transition-colors group-hover:text-secondary-500">
            us
          </span>
        </span>
      </h1>
    </Link>
  );
}

export default NavbarLogo;
