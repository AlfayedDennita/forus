import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function Button({ type, to, onClick, children, title }) {
  const className =
    'inline-flex items-center justify-center gap-1 rounded bg-primary-500 py-2 px-4 font-semibold text-white';

  if (type === 'link') {
    return (
      <Link className={className} to={to} title={title}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type="button" onClick={onClick} title={title}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['link', 'button', 'submit']).isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  to: null,
  onClick: null,
};

export default Button;
