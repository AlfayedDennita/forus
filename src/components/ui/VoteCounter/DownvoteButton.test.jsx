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
import DownvoteButton from './DownvoteButton';

/**
 * Test Scenario
 *
 * - DownvoteButton component
 *  - should be rendered correctly when not downvoted
 *  - should be rendered correctly when downvoted
 *  - should show the alert when the button is clicked and the user is signed out
 *  - should execute the downvote action when the button is clicked, the user is signed in, and the status is not downvoted
 *  - should execute the neutralize action when the button is clicked, the user is signed in, and the status is downvoted
 */

const props = {
  downvoteAction: () => true,
  neutralizeAction: () => true,
};

describe('DownvoteButton component', () => {
  it('should be rendered correctly when not downvoted', () => {
    render(<DownvoteButton {...props} />);
    const downvoteButton = screen.queryByRole('button', { name: 'Downvote' });
    expect(downvoteButton).toBeVisible();
  });

  it('should be rendered correctly when downvoted', () => {
    render(<DownvoteButton {...props} downvoted />);
    const downvoteButton = screen.queryByRole('button', {
      name: 'Cancel Downvote',
    });
    expect(downvoteButton).toBeVisible();
    expect(downvoteButton).toHaveClass('bg-red-300');
  });

  it('should show the alert when the button is clicked and the user is signed out', async () => {
    const user = userEvent.setup();
    store.dispatch(unsetAuthedUserActionCenter());

    render(<DownvoteButton {...props} />);
    const downvoteButton = screen.queryByRole('button', { name: 'Downvote' });
    await user.click(downvoteButton);

    const alertText = screen.queryByText(
      'You need to be signed in to give downvote.'
    );
    expect(alertText).not.toBeNull();
  });

  it('should execute the downvote action when the button is clicked, the user is signed in, and the status is not downvoted', async () => {
    const user = userEvent.setup();
    const downvoteAction = vi.fn();
    store.dispatch(setAuthedUserActionCreator({ id: 'user-1' }));

    render(<DownvoteButton {...props} downvoteAction={downvoteAction} />);
    const downvoteButton = screen.queryByRole('button', { name: 'Downvote' });
    await user.click(downvoteButton);

    expect(downvoteAction).toHaveBeenCalled();
  });

  it('should execute the neutralize action when the button is clicked, the user is signed in, and the status is downvoted', async () => {
    const user = userEvent.setup();
    const neutralizeAction = vi.fn();
    store.dispatch(setAuthedUserActionCreator({ id: 'user-1' }));

    render(
      <DownvoteButton
        {...props}
        neutralizeAction={neutralizeAction}
        downvoted
      />
    );
    const downvoteButton = screen.queryByRole('button', {
      name: 'Cancel Downvote',
    });
    await user.click(downvoteButton);

    expect(neutralizeAction).toHaveBeenCalled();
  });
});
