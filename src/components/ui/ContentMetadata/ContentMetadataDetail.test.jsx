import { render, screen } from '@testing-library/react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ContentMetadataDetail from './ContentMetadataDetail';

/**
 * Test Scenario
 *
 * - ContentMetadataDetail component
 *  - should be rendered correctly
 *  - should render the user name within a link
 *  - should render the post date in "time-ago" format
 */

TimeAgo.addDefaultLocale(en);

const props = {
  userId: 'user-1',
  userName: 'John Doe',
  postDate: '2021-06-21T07:00:00.000Z',
};

describe('ContentMetadataDetail component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ContentMetadataDetail {...props} />
      </BrowserRouter>
    );
  });

  it('should be rendered correctly', () => {
    const contentMetadataDetail = screen.queryByTestId(
      'content-metadata-detail'
    );
    expect(contentMetadataDetail).toBeVisible();
  });

  it('should render the user name within a link', () => {
    const userName = screen.queryByRole('link', { text: props.userName });
    expect(userName).toBeVisible();
  });

  it('should render the post date in "time-ago" format', () => {
    const timeAgo = new TimeAgo('en');
    const postDate = screen.queryByText(
      timeAgo.format(new Date(props.postDate))
    );
    expect(postDate).toBeVisible();
  });
});
