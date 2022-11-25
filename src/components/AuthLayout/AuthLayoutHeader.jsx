import { oneOf } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import BrandIcon from '../ui/BrandIcon';

function AuthLayoutHeader({ type }) {
  return (
    <header className="flex flex-col items-start gap-4 sm:items-center">
      <BrandIcon />
      <h1 className="font-heading text-2xl font-bold sm:text-center">
        {type === 'sign-in' ? 'Sign In to' : 'Sign Up for'}{' '}
        <Link
          to="/"
          className="text-primary-500 underline decoration-zinc-200 decoration-dotted underline-offset-4 transition-all hover:decoration-primary-500 hover:decoration-solid"
          title="Home"
        >
          Forus
        </Link>
      </h1>
    </header>
  );
}

AuthLayoutHeader.propTypes = {
  type: oneOf(['sign-in', 'sign-up']).isRequired,
};

export default AuthLayoutHeader;
