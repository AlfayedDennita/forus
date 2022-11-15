import React from 'react';
import { IoFileTrayFull, IoLogOut, IoSunny } from 'react-icons/io5';

import NavbarBrandLogo from './NavbarBrandLogo';
import NavbarMenuItem from './NavbarMenuItem';
import NavbarMenuList from './NavbarMenuList';

function Navbar() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-2 px-6 py-4 md:px-16">
        <NavbarBrandLogo />
        <NavbarMenuList>
          <NavbarMenuItem
            type="button"
            onClick={() => console.log('Theme Clicked')}
            icon={IoSunny}
            text="Light Theme"
          />
          <NavbarMenuItem
            type="link"
            to="/threads/me"
            icon={IoFileTrayFull}
            text="My Threads"
          />
          <NavbarMenuItem
            type="button"
            onClick={() => console.log('Sign Out Clicked')}
            icon={IoLogOut}
            text="Sign Out"
            dangerous
          />
        </NavbarMenuList>
      </nav>
    </header>
  );
}

export default Navbar;
