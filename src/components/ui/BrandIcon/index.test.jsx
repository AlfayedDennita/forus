import { render, screen } from '@testing-library/react';
import React from 'react';

import BrandIcon from '.';

/**
 * Test Scenario
 *
 * - BrancIcon component
 *  - should be rendered correctly
 */

describe('BrandIcon component', () => {
  it('should be rendered correctly', () => {
    render(<BrandIcon />);
    const brandIcon = screen.queryByAltText('Forus Icon');
    expect(brandIcon).toBeVisible();
  });
});
