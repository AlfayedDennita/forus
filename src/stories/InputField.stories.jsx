import React from 'react';

import InputField from '../components/ui/InputField';

const story = {
  title: 'InputField',
  component: InputField,
};

export default story;

function Template(args) {
  return <InputField {...args} />;
}

const WithTypeWysiwyg = Template.bind({});
WithTypeWysiwyg.args = {
  type: 'wysiwyg',
  defaultValue: 'What you see is what you get',
};

const WithTypeText = Template.bind({});
WithTypeText.args = {
  type: 'text',
  defaultValue: 'Plain text ...',
};

const WithTypeEmail = Template.bind({});
WithTypeEmail.args = {
  type: 'email',
  defaultValue: 'me@domain.com',
};

const WithTypeSearch = Template.bind({});
WithTypeSearch.args = {
  type: 'search',
  defaultValue: 'how to be milliona...',
};

const WithTypePassword = Template.bind({});
WithTypePassword.args = {
  type: 'password',
  defaultValue: 'very secret',
};

const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  type: 'text',
  defaultValue: 'Invalid text',
  errorMessage: 'Oops, something went wrong.',
};

export {
  WithTypeWysiwyg,
  WithTypeText,
  WithTypeEmail,
  WithTypeSearch,
  WithTypePassword,
  WithErrorMessage,
};
