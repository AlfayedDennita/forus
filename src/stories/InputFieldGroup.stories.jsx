import React from 'react';

import InputField from '../components/ui/InputField';
import InputFieldGroup from '../components/ui/InputField/InputFieldGroup';

const story = {
  title: 'InputFieldGroup',
  component: InputFieldGroup,
};

export default story;

function Template(args) {
  return (
    <InputFieldGroup {...args}>
      <InputField type="text" placeholder="Input Field" />
    </InputFieldGroup>
  );
}

const WithElementLabel = Template.bind({});
WithElementLabel.args = {
  element: 'label',
  labelText: 'Input Field Group (Label)',
};

const WithElementDiv = Template.bind({});
WithElementDiv.args = {
  element: 'div',
  labelText: 'Input Field Group (Div)',
};

export { WithElementLabel, WithElementDiv };
