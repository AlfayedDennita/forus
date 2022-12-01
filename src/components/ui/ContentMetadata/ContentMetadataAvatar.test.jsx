import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ContentMetadataAvatar from './ContentMetadataAvatar';

/**
 * Test Scenario
 *
 * - ContentMetadataAvatar component
 *  - should be rendered correctly
 *  - should render the avatar image correctly
 */

const props = {
  userId: 'user-1',
  userAvatar: 'https://i.pravatar.cc/150',
  userName: 'John Doe',
};

describe('ContentMetadataAvatar component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ContentMetadataAvatar {...props} />
      </BrowserRouter>
    );
  });

  it('should be rendered correctly', () => {
    const avatarLink = screen.queryByRole('link');

    expect(avatarLink).toBeVisible();
    expect(avatarLink).toHaveAttribute('href', `/threads/user/${props.userId}`);
  });

  it('should render the avatar image correctly', () => {
    const avatarImage = screen.queryByRole('img');

    expect(avatarImage).toBeVisible();
    expect(avatarImage).toHaveAttribute('src', props.userAvatar);
  });
});
