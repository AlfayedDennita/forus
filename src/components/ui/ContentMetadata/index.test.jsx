import { render, screen } from '@testing-library/react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ContentMetadata from '.';

/**
 * Test Scenario
 *
 * - ContentMetadata component
 *  - should be rendered correctly when all required props are defined
 */

TimeAgo.addDefaultLocale(en);

const props = {
  userId: 'user-1',
  userAvatar: 'https://i.pravatar.cc/150',
  userName: 'John Doe',
  postDate: '2021-06-21T07:00:00.000Z',
};

describe('ContentMetadata component', () => {
  it('should be rendered correctly when all required props are defined', () => {
    render(
      <BrowserRouter>
        <ContentMetadata {...props} />
      </BrowserRouter>
    );
    const contentMetadata = screen.queryByTestId('content-metadata');
    expect(contentMetadata).toBeVisible();
  });
});
