import { screen } from '@testing-library/react';
import TimeAgo from 'javascript-time-ago';
import React from 'react';

import { render } from '../../../../test-utils';
import ContentMetadataDetail from './ContentMetadataDetail';

/**
 * Test Scenario
 *
 * - ContentMetadataDetail component
 *  - should be rendered correctly
 *  - should render the user name within a link
 *  - should render the post date in "time-ago" format
 */

const props = {
  userId: 'user-1',
  userName: 'John Doe',
  postDate: '2021-06-21T07:00:00.000Z',
};

describe('ContentMetadataDetail component', () => {
  beforeEach(() => {
    render(<ContentMetadataDetail {...props} />);
  });

  it('should be rendered correctly', () => {
    const contentMetadataDetail = screen.queryByTestId(
      'content-metadata-detail'
    );
    expect(contentMetadataDetail).toBeVisible();
  });

  it('should render the user name within a link', () => {
    const userName = screen.queryByRole('link', {
      name: `See ${props.userName} Threads`,
    });
    expect(userName).toBeVisible();
    expect(userName).toContainHTML(props.userName);
  });

  it('should render the post date in "time-ago" format', () => {
    const timeAgo = new TimeAgo('en');
    const postDate = screen.queryByText(
      timeAgo.format(new Date(props.postDate))
    );
    expect(postDate).toBeVisible();
  });
});
