import 'react-quill/dist/quill.snow.css';

import { oneOf, string } from 'prop-types';
import React, { useMemo } from 'react';
import ReactQuill from 'react-quill';

const InputField = React.forwardRef(
  (
    {
      type,
      containerClassName,
      className: extensionClassName,
      errorMessage,
      ...otherProps
    },
    ref
  ) => {
    const isError = errorMessage.length > 0;

    const inputField = useMemo(() => {
      if (type === 'wysiwyg') {
        let className = 'h-60 overflow-hidden rounded';
        if (isError) {
          className += ' ring ring-red-300 focus:ring-red-300';
        }
        className += ` ${extensionClassName}`;

        return <ReactQuill className={className} {...otherProps} />;
      }

      let className =
        'rounded bg-zinc-100 outline-none placeholder:text-zinc-300 hover:placeholder:text-zinc-400 [&::placeholder]:transition-colors transition-all w-full px-5 py-3 focus:bg-zinc-200/75 focus:ring focus:placeholder:text-zinc-400';

      if (isError) {
        className += ' ring ring-red-300 focus:ring-red-300';
      } else {
        className += ' focus:ring-zinc-100';
      }

      return (
        <input type={type} className={className} ref={ref} {...otherProps} />
      );
    }, [type, extensionClassName, isError, otherProps, ref]);

    return (
      <div className={`flex flex-col gap-2 ${containerClassName}`}>
        {inputField}
        {isError && (
          <span className="text-sm text-red-500">{errorMessage}</span>
        )}
      </div>
    );
  }
);

InputField.propTypes = {
  /** The type of the input field, it will change how the input field will be rendered (WYSIWYG or conventional input tag) */
  type: oneOf(['wysiwyg', 'text', 'email', 'search', 'password']).isRequired,
  /** The extension style-class of the container */
  containerClassName: string,
  /** The extension style-class of the input field */
  className: string,
  /** The error message, it will be rendered if its length is greater than 0 */
  errorMessage: string,
};

InputField.defaultProps = {
  containerClassName: '',
  className: '',
  errorMessage: '',
};

export default InputField;
