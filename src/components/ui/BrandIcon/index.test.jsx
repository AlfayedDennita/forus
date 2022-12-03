import { screen } from '@testing-library/react';
import React from 'react';

import { render } from '../../../../test-utils';
import BrandIcon from '.';

/**
 * Test Scenario
 *
 * - BrandIcon component
 *  - should be rendered correctly
 */

describe('BrandIcon component', () => {
  it('should be rendered correctly', () => {
    render(<BrandIcon />);
    const brandIcon = screen.queryByRole('img', { name: 'Forus Icon' });
    expect(brandIcon).toBeVisible();
  });
});
