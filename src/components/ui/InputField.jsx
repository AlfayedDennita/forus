import PropTypes from 'prop-types';
import React from 'react';

function InputField({ className, type, placeholder, title }) {
  return (
    <input
      className={`rounded bg-zinc-100 px-4 py-2 ${className}`}
      type={type}
      placeholder={placeholder}
      title={title}
    />
  );
}

InputField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string.isRequired,
};

InputField.defaultProps = {
  className: '',
  placeholder: '',
};

export default InputField;
