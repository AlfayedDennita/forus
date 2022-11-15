import React from 'react';
import { Link } from 'react-router-dom';

function NavbarBrandLogo() {
  return (
    <h1>
      <Link
        className="group flex items-center gap-2 font-heading text-2xl font-bold"
        to="/"
        title="Home"
      >
        <img className="h-6" src="/images/brand-icon.svg" alt="" />
        <p>
          <span className="transition-colors group-hover:text-primary-500">
            For
          </span>
          <span className="transition-colors group-hover:text-secondary-500">
            us
          </span>
        </p>
      </Link>
    </h1>
  );
}

export default NavbarBrandLogo;
