import { node } from 'prop-types';
import React from 'react';

function AuthLayoutMain({ children }) {
  return (
    <main className="flex w-full flex-col gap-4" id="main-content">
      {children}
    </main>
  );
}

AuthLayoutMain.propTypes = {
  children: node.isRequired,
};

export default AuthLayoutMain;
