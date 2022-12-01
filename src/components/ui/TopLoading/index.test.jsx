import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import store from '../../../states';
import TopLoading from '.';

/**
 * Test Scenario
 *
 * - TopLoading component
 *  - should be rendered correctly
 */

describe('TopLoading component', () => {
  it('should be rendered correctly', () => {
    render(
      <ReduxProvider store={store}>
        <TopLoading />
      </ReduxProvider>
    );
    const topLoading = screen.queryByTestId('top-loading');
    expect(topLoading).toBeVisible();
  });
});
