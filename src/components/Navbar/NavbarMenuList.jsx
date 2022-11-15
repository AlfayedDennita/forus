import PropTypes from 'prop-types';
import React from 'react';

function NavbarMenuList({ children }) {
  return <ul className="flex flex-wrap justify-end gap-3">{children}</ul>;
}

NavbarMenuList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavbarMenuList;
