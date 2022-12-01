import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import store from '../../../states';
import DownvoteButton from './DownvoteButton';

/**
 * Test Scenario
 *
 * - DownvoteButton component
 *  - should be rendered correctly
 *  - should have the red background color when downvoted
 */

const props = {
  downvoteAction: () => {},
  neutralizeAction: () => {},
  downvoted: false,
};

describe('DownvoteButton component', () => {
  it('should be rendered correctly', () => {
    render(
      <ReduxProvider store={store}>
        <DownvoteButton {...props} />
      </ReduxProvider>
    );
    const downvoteButton = screen.queryByRole('button');
    expect(downvoteButton).toBeVisible();
  });

  it('should have the red background color when downvoted', () => {
    render(
      <ReduxProvider store={store}>
        <DownvoteButton {...props} downvoted />
      </ReduxProvider>
    );
    const downvoteButton = screen.queryByTitle('Cancel Downvote');
    expect(downvoteButton).toHaveClass('bg-red-300');
  });
});
