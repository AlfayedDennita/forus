import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function NavbarMenuItem({ type, to, onClick, icon: Icon, text, dangerous }) {
  const menuItemClassName = `flex justify-center items-center rounded gap-2 p-2 transition-colors ${
    dangerous === true
      ? 'bg-red-200/75 hover:bg-red-200'
      : 'bg-zinc-200/75 hover:bg-zinc-200'
  }`;

  const menuItemIcon = (
    <Icon
      className={`text-xl font-bold ${
        dangerous === true ? 'text-red-400' : 'text-zinc-400'
      }`}
    />
  );

  const menuItemText = (
    <span
      className={`hidden text-sm md:inline-block ${
        dangerous === true ? 'text-red-600' : 'text-zinc-600'
      }`}
    >
      {text}
    </span>
  );

  let menuItem = null;

  if (type === 'link') {
    menuItem = (
      <Link className={menuItemClassName} to={to} title={text}>
        {menuItemIcon}
        {menuItemText}
      </Link>
    );
  } else {
    menuItem = (
      <button
        className={menuItemClassName}
        type="button"
        title={text}
        onClick={onClick}
      >
        {menuItemIcon}
        {menuItemText}
      </button>
    );
  }

  return <li>{menuItem}</li>;
}

NavbarMenuItem.propTypes = {
  type: PropTypes.oneOf(['link', 'button']).isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  dangerous: PropTypes.bool,
};

NavbarMenuItem.defaultProps = {
  to: null,
  onClick: null,
  dangerous: false,
};

export default NavbarMenuItem;
