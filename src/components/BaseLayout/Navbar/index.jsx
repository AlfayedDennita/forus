import React from 'react';

import NavbarLogo from './NavbarLogo';
import NavbarMenuList from './NavbarMenuList';

function Navbar() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-4 py-4 px-5 sm:py-6 md:px-10 lg:px-16">
        <NavbarLogo />
        <NavbarMenuList />
      </nav>
    </header>
  );
}

export default Navbar;
