import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import store from '../../../states';
import UpvoteButton from './UpvoteButton';

/**
 * Test Scenario
 *
 * - UpvoteButton component
 *  - should be rendered correctly
 *  - should have the green background color when upvoted
 */

const props = {
  upvoteAction: () => {},
  neutralizeAction: () => {},
  upvoted: false,
};

describe('UpvoteButton component', () => {
  it('should be rendered correctly', () => {
    render(
      <ReduxProvider store={store}>
        <UpvoteButton {...props} />
      </ReduxProvider>
    );
    const upvoteButton = screen.queryByRole('button');
    expect(upvoteButton).toBeVisible();
  });

  it('should have the green background color when upvoted', () => {
    render(
      <ReduxProvider store={store}>
        <UpvoteButton {...props} upvoted />
      </ReduxProvider>
    );
    const upvoteButton = screen.queryByTitle('Cancel Upvote');
    expect(upvoteButton).toHaveClass('bg-green-300');
  });
});
