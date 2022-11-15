import PropTypes from 'prop-types';
import React from 'react';

function SidebarSection({ title, children }) {
  return (
    <section className="flex flex-col gap-6 bg-white p-6 md:rounded-lg">
      <h2 className="font-heading text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SidebarSection;
