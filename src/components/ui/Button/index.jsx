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
      type={type === 'submit' ? 'submit' : 'button'}
      className={className}
      {...otherProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  /** The type of the button, it will handle how button will be rendered (button tag or anchor tag) */
  type: oneOf(['link', 'button', 'submit']).isRequired,
  /** The extension style-class of the button */
  className: string,
  /** The variant of the button, it will change the background-color and text-color of the button */
  variant: oneOf(['primary', 'secondary']),
  /** The children of the button */
  children: node.isRequired,
};

Button.defaultProps = {
  className: '',
  variant: 'primary',
};

export default Button;
