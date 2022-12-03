import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi } from 'vitest';

import { render } from '../../../../test-utils';
import store from '../../../states';
import {
  setAuthedUserActionCreator,
  unsetAuthedUserActionCenter,
} from '../../../states/authedUser/action';
import UpvoteButton from './UpvoteButton';

/**
 * Test Scenario
 *
 * - UpvoteButton component
 *  - should be rendered correctly when not upvoted
 *  - should be rendered correctly when upvoted
 *  - should show the alert when the button is clicked and the user is signed out
 *  - should execute the upvote action when the button is clicked, the user is signed in, and the status is not upvoted
 *  - should execute the neutralize action when the button is clicked, the user is signed in, and the status is upvoted
 */

const props = {
  upvoteAction: () => true,
  neutralizeAction: () => true,
};

describe('UpvoteButton component', () => {
  it('should be rendered correctly when not upvoted', () => {
    render(<UpvoteButton {...props} />);
    const upvoteButton = screen.queryByRole('button', { name: 'Upvote' });
    expect(upvoteButton).toBeVisible();
  });

  it('should be rendered correctly when upvoted', () => {
    render(<UpvoteButton {...props} upvoted />);
    const upvoteButton = screen.queryByRole('button', {
      name: 'Cancel Upvote',
    });
    expect(upvoteButton).toBeVisible();
    expect(upvoteButton).toHaveClass('bg-green-300');
  });

  it('should show the alert when the button is clicked and the user is signed out', async () => {
    const user = userEvent.setup();
    store.dispatch(unsetAuthedUserActionCenter());

    render(<UpvoteButton {...props} />);
    const upvoteButton = screen.queryByRole('button', { name: 'Upvote' });
    await user.click(upvoteButton);

    const alertText = screen.queryByText(
      'You need to be signed in to give upvote.'
    );
    expect(alertText).not.toBeNull();
  });

  it('should execute the upvote action when the button is clicked, the user is signed in, and the status is not upvoted', async () => {
    const user = userEvent.setup();
    const upvoteAction = vi.fn();
    store.dispatch(setAuthedUserActionCreator({ id: 'user-1' }));

    render(<UpvoteButton {...props} upvoteAction={upvoteAction} />);
    const upvoteButton = screen.queryByRole('button', { name: 'Upvote' });
    await user.click(upvoteButton);

    expect(upvoteAction).toHaveBeenCalled();
  });

  it('should execute the neutralize action when the button is clicked, the user is signed in, and the status is upvoted', async () => {
    const user = userEvent.setup();
    const neutralizeAction = vi.fn();
    store.dispatch(setAuthedUserActionCreator({ id: 'user-1' }));

    render(
      <UpvoteButton {...props} neutralizeAction={neutralizeAction} upvoted />
    );
    const upvoteButton = screen.queryByRole('button', {
      name: 'Cancel Upvote',
    });
    await user.click(upvoteButton);

    expect(neutralizeAction).toHaveBeenCalled();
  });
});
