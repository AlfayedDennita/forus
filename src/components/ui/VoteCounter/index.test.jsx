import { screen } from '@testing-library/react';
import React from 'react';

import { render } from '../../../../test-utils';
import VoteCounter from '.';

/**
 * Test Scenario
 *
 * - VoteCounter component
 *  - should be rendered correctly when all required props are defined
 *  - should render the vote score correctly
 */

const props = {
  upvoteAction: () => {},
  downvoteAction: () => {},
  neutralizeAction: () => {},
  upvotedBy: ['user-1'],
  downvotedBy: [],
};

describe('VoteCounter component', () => {
  beforeEach(() => {
    render(<VoteCounter {...props} />);
  });

  it('should be rendered correctly when all required props are defined', () => {
    const voteCounter = screen.queryByTestId('vote-counter');
    expect(voteCounter).toBeVisible();
  });

  it('should render the vote score correctly', () => {
    const score = props.upvotedBy.length - props.downvotedBy.length;
    const voteScore = screen.queryByText(score > 0 ? `+${score}` : score);
    expect(voteScore).toBeVisible();
  });
});
