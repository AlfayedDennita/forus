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

const downvoteButtonTestId = 'downvote-button';
const props = {
  downvoteAction: () => {},
  neutralizeAction: () => {},
  downvoted: false,
};

describe('DownvoteButton component', () => {
  it('should be rendered correctly when not downvoted', () => {
    render(<DownvoteButton {...props} />);

    const downvoteButton = screen.queryByTestId(downvoteButtonTestId);

    expect(downvoteButton).toBeVisible();
    expect(downvoteButton).toHaveAttribute('title', 'Downvote');
  });

  it('should be rendered correctly when downvoted', () => {
    render(<DownvoteButton {...props} downvoted />);

    const downvoteButton = screen.queryByTestId(downvoteButtonTestId);

    expect(downvoteButton).toBeVisible();
    expect(downvoteButton).toHaveAttribute('title', 'Cancel Downvote');
    expect(downvoteButton).toHaveClass('bg-red-300');
  });

  it('should show the alert when the button is clicked and the user is signed out', async () => {
    const user = userEvent.setup();
    store.dispatch(unsetAuthedUserActionCenter());

    render(<DownvoteButton {...props} />);

    const downvoteButton = screen.queryByTestId(downvoteButtonTestId);
    await user.click(downvoteButton);

    const alertText = screen.queryByText('Feature Locked');
    expect(alertText).not.toBeNull();
  });

  it('should execute the downvote action when the button is clicked, the user is signed in, and the status is not downvoted', async () => {
    const user = userEvent.setup();
    const downvoteAction = vi.fn();

    store.dispatch(setAuthedUserActionCreator({ id: 'user-1' }));

    render(<DownvoteButton {...props} downvoteAction={downvoteAction} />);
    const downvoteButton = screen.queryByTestId(downvoteButtonTestId);
    await user.click(downvoteButton);

    expect(downvoteAction).toBeCalled();
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
    const downvoteButton = screen.queryByTestId(downvoteButtonTestId);
    await user.click(downvoteButton);

    expect(neutralizeAction).toBeCalled();
  });
});
