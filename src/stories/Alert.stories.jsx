import React from 'react';

import Alert from '../components/ui/Alert';

const story = {
  title: 'Alert',
  component: Alert,
};

export default story;

function Template(args) {
  return <Alert {...args} />;
}

const alertMessage = 'Alert message';

const WithTypeSuccess = Template.bind({});
WithTypeSuccess.args = {
  type: 'success',
  message: alertMessage,
};

const WithTypeDanger = Template.bind({});
WithTypeDanger.args = {
  type: 'danger',
  message: alertMessage,
};

const WithTypeWarning = Template.bind({});
WithTypeWarning.args = {
  type: 'warning',
  message: alertMessage,
};

export { WithTypeSuccess, WithTypeDanger, WithTypeWarning };
