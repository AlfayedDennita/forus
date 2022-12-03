import { screen } from '@testing-library/react';
import React from 'react';

import { render } from '../../../../test-utils';
import ContentMetadata from '.';

/**
 * Test Scenario
 *
 * - ContentMetadata component
 *  - should be rendered correctly when all required props are defined
 */

const props = {
  userId: 'user-1',
  userAvatar: 'https://i.pravatar.cc/150',
  userName: 'John Doe',
  postDate: '2021-06-21T07:00:00.000Z',
};

describe('ContentMetadata component', () => {
  it('should be rendered correctly when all required props are defined', () => {
    render(<ContentMetadata {...props} />);
    const contentMetadata = screen.queryByTestId('content-metadata');
    expect(contentMetadata).toBeVisible();
  });
});
