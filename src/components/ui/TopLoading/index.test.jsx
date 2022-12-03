import { screen } from '@testing-library/react';
import React from 'react';

import { render } from '../../../../test-utils';
import TopLoading from '.';

/**
 * Test Scenario
 *
 * - TopLoading component
 *  - should be rendered correctly
 */

describe('TopLoading component', () => {
  it('should be rendered correctly', () => {
    render(<TopLoading />);
    const topLoading = screen.queryByTestId('top-loading');
    expect(topLoading).not.toBeNull();
  });
});
