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
  /** The element type to render as the input field group (label or div) */
  element: oneOf(['label', 'div']),
  /** The label text */
  labelText: string.isRequired,
  /** The title to display when the input field group hovered */
  title: string,
  /** The input field to render in the input field group */
  children: node.isRequired,
};

InputFieldGroup.defaultProps = {
  element: 'label',
  title: '',
};

export default InputFieldGroup;
