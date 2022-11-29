import { node, oneOf, string } from 'prop-types';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

function Button({
  type,
  className: extensionClassName,
  variant,
  children,
  ...otherProps
}) {
  const className = useMemo(() => {
    let baseClassName =
      'inline-flex items-center justify-center gap-2 rounded py-2 px-4 font-semibold transition-all outline-none focus:ring';

    switch (variant) {
      case 'primary':
        baseClassName +=
          ' bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-200';
        break;
      default:
        baseClassName +=
          ' bg-zinc-100 hover:bg-zinc-200 text-zinc-500 focus:ring-zinc-200/50';
    }

    return `${baseClassName} ${extensionClassName}`;
  }, [extensionClassName, variant]);

  if (type === 'link') {
    return (
      <Link className={className} {...otherProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={className}
      {...otherProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: oneOf(['link', 'button', 'submit']).isRequired,
  className: string,
  variant: oneOf(['primary', 'secondary']),
  children: node.isRequired,
};

Button.defaultProps = {
  className: '',
  variant: 'primary',
};

export default Button;