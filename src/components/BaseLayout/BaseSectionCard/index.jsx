import { bool, node, string } from 'prop-types';
import React from 'react';

function BaseSectionCard({
  heading,
  withHorizontalPadding,
  children,
  ...otherProps
}) {
  return (
    <section
      className={`flex flex-col gap-4 bg-white py-5 sm:rounded-lg ${
        withHorizontalPadding && 'p-5 lg:p-6'
      }`}
      {...otherProps}
    >
      {heading && (
        <h3
          className={`font-heading text-lg font-semibold ${
            !withHorizontalPadding && 'px-5 lg:px-6'
          }`}
        >
          {heading}
        </h3>
      )}
      {children}
    </section>
  );
}

BaseSectionCard.propTypes = {
  heading: string,
  withHorizontalPadding: bool,
  children: node.isRequired,
};

BaseSectionCard.defaultProps = {
  heading: null,
  withHorizontalPadding: false,
};

export default BaseSectionCard;
