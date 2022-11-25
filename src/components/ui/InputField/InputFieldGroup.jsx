import { node, oneOf, string } from 'prop-types';
import React from 'react';

function InputFieldGroup({ element, labelText, title, children }) {
  if (element === 'label') {
    return (
      <label className="flex flex-col gap-2" title={title}>
        {labelText}
        {children}
      </label>
    );
  }

  return (
    <div className="flex flex-col gap-2" title={title}>
      {labelText}
      {children}
    </div>
  );
}

InputFieldGroup.propTypes = {
  element: oneOf(['label', 'div']),
  labelText: string.isRequired,
  title: string,
  children: node.isRequired,
};

InputFieldGroup.defaultProps = {
  element: 'label',
  title: '',
};

export default InputFieldGroup;
