import React from 'react';

import ContentMetadata from '../components/ui/ContentMetadata';

const story = {
  title: 'ContentMetadata',
  component: ContentMetadata,
};

export default story;

function Template(args) {
  return <ContentMetadata {...args} />;
}

const Default = Template.bind({});
Default.args = {
  userId: 'user-1',
  userAvatar: 'https://i.pravatar.cc/150',
  userName: 'John Doe',
  postDate: '2022-06-21T07:00:00.000Z',
};

export { Default };
