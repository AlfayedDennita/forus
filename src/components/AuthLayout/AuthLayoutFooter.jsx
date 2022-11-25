import { node } from 'prop-types';
import React from 'react';

function AuthLayoutFooter({ children }) {
  return (
    <footer className="mt-3 flex flex-col gap-3 text-sm text-zinc-400 sm:items-center sm:text-center">
      {children}
    </footer>
  );
}

AuthLayoutFooter.propTypes = {
  children: node.isRequired,
};

export default AuthLayoutFooter;
