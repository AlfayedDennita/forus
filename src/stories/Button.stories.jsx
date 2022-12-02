import React from 'react';

import Button from '../components/ui/Button';

const story = {
  title: 'Button',
  component: Button,
};

export default story;

function Template(args) {
  return <Button {...args}>Button</Button>;
}

const WithVariantPrimary = Template.bind({});
WithVariantPrimary.args = {
  type: 'button',
  variant: 'primary',
};

const WithVariantSecondary = Template.bind({});
WithVariantSecondary.args = {
  type: 'button',
  variant: 'secondary',
};

export { WithVariantPrimary, WithVariantSecondary };
