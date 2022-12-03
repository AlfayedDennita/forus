import { screen } from '@testing-library/react';
import React from 'react';

import { render } from '../../../../test-utils';
import SpinLoading from '.';

/**
 * Test Scenario
 *
 * - SpinLoading component
 *  - should be rendered correctly
 */

describe('SpinLoading component', () => {
  it('should be rendered correctly', () => {
    render(<SpinLoading />);

    const spinLoading = screen.queryByTestId('spin-loading');
    const spinLoadingSpinner = screen.queryByTestId('spin-loading-spinner');
    const spinLoadingText = screen.queryByText('Please wait');

    expect(spinLoading).toBeVisible();
    expect(spinLoadingSpinner).toBeVisible();
    expect(spinLoadingText).toBeVisible();
  });
});
